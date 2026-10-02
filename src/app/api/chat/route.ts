import { NextResponse } from "next/server";
import { buildSystemPrompt } from "@/data/chatbot-knowledge";
import { checkRateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Model Groq. Cek daftar model terbaru di https://console.groq.com/docs/models
// lalu ganti lewat env GROQ_MODEL (tanpa perlu ubah kode).
const MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-20b";
// Model gpt-oss "berpikir" dulu, dan token berpikir ikut dihitung. Jadi jangan terlalu kecil.
const MAX_OUTPUT_TOKENS = 1024;
const MAX_INPUT_CHARS = 500; // batas panjang tiap pesan pengunjung
const MAX_HISTORY = 10; // hanya kirim 10 pesan terakhir

type Msg = { role: "user" | "assistant"; content: string };

/**
 * Kode `code` yang dikirim ke browser:
 * - "ended"       : sesi harus diakhiri (kuota harian habis, key bermasalah) -> tampilkan ajakan WA
 * - "slow_down"   : terlalu cepat, coba lagi sebentar lagi
 * - "unavailable" : gangguan sementara, boleh coba lagi
 */
function fail(code: "ended" | "slow_down" | "unavailable" | "bad_request", status: number) {
  return NextResponse.json({ ok: false, code }, { status });
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] || req.headers.get("x-real-ip") || "unknown").trim();
}

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("[chat] GROQ_API_KEY belum diisi di environment.");
    return fail("ended", 503);
  }

  const limit = checkRateLimit(clientIp(req));
  if (limit === "daily_limit") return fail("ended", 429);
  if (limit === "slow_down") return fail("slow_down", 429);

  let body: { messages?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return fail("bad_request", 400);
  }

  const raw = Array.isArray(body.messages) ? body.messages : [];
  const messages: Msg[] = raw
    .filter((m) => (m?.role === "user" || m?.role === "assistant") && typeof m?.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_INPUT_CHARS) }))
    .slice(-MAX_HISTORY);

  // Pesan pertama harus dari "user" dan pesan terakhir juga dari "user"
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return fail("bad_request", 400);

  // Model gpt-oss: pakai mode berpikir singkat supaya cepat dan hemat token
  const extra: Record<string, unknown> = MODEL.includes("gpt-oss") ? { reasoning_effort: "low" } : {};

  try {
    const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
        temperature: 0.6,
        ...extra,
        messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
      }),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("[chat] upstream error", upstream.status, detail.slice(0, 400));

      // 429 = kena batas. Kalau yang habis kuota HARIAN -> akhiri sesi; kalau per menit -> suruh tunggu.
      if (upstream.status === 429) {
        return /per day|\bTPD\b|\bRPD\b/i.test(detail) ? fail("ended", 503) : fail("slow_down", 429);
      }
      // 400/404 (model salah), 401/403 (key tidak valid): akhiri sesi dan arahkan ke WA
      if ([400, 401, 403, 404].includes(upstream.status)) return fail("ended", 503);
      return fail("unavailable", 502);
    }

    const data = (await upstream.json()) as { choices?: { message?: { content?: string } }[] };
    const reply = (data.choices?.[0]?.message?.content ?? "").trim();

    if (!reply) return fail("unavailable", 502);
    return NextResponse.json({ ok: true, reply });
  } catch (err) {
    console.error("[chat] fetch failed", err);
    return fail("unavailable", 502);
  }
}