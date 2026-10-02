"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/data/site";

type ChatMsg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  ts: number;
  /** true = pesan lokal (sapaan/pesan sistem), tidak dikirim ke API */
  local?: boolean;
};

const STORAGE_KEY = "david-chat-v1";
/** Batas pesan pengunjung per sesi (tab). Setelah ini sesi otomatis berakhir. */
const MAX_USER_MESSAGES = 20;
const MAX_INPUT = 500;

const GREETING =
  "Halo! Saya adalah asisten AI David. Ada yang bisa saya bantu terkait portofolio, pengalaman, atau project David?";
const ENDED_TEXT =
  "Sesi chat sudah berakhir. Silakan hubungi David langsung melalui WhatsApp ya, dengan senang hati dia akan membalas.";
const SLOW_TEXT = "Pelan-pelan ya, kamu mengirim pesan terlalu cepat. Coba lagi sebentar lagi.";
const UNAVAILABLE_TEXT =
  "Maaf, asisten sedang bermasalah. Coba kirim ulang sebentar lagi, atau hubungi David lewat WhatsApp.";

const SUGGESTIONS = ["Proyek apa saja yang pernah David buat?", "Apa skill utama David?", "Bagaimana cara menghubungi David?"];

const uid = () => Math.random().toString(36).slice(2, 10);
const greeting = (): ChatMsg => ({ id: "greeting", role: "assistant", content: GREETING, ts: Date.now(), local: true });
const fmtTime = (ts: number) => new Date(ts).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

/** Ubah URL di dalam teks jadi link yang bisa diklik */
function linkify(text: string): ReactNode[] {
  return text.split(/(https?:\/\/[^\s)]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} className="underline underline-offset-2 break-all" href={part} rel="noreferrer" target="_blank">
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([greeting()]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [ended, setEnded] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pulihkan percakapan dari sessionStorage (hilang otomatis saat tab ditutup)
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { messages?: ChatMsg[]; ended?: boolean };
        if (saved.messages?.length) setMessages(saved.messages);
        if (saved.ended) setEnded(true);
      }
    } catch {
      /* abaikan */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, ended }));
    } catch {
      /* abaikan */
    }
  }, [messages, ended, hydrated]);

  // Kunci scroll halaman + Esc untuk menutup + fokus input
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => inputRef.current?.focus(), 250);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  // Auto-scroll ke pesan terbaru
  useEffect(() => {
    if (open) listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const addLocal = useCallback((content: string) => {
    setMessages((m) => [...m, { id: uid(), role: "assistant", content, ts: Date.now(), local: true }]);
  }, []);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim().slice(0, MAX_INPUT);
      if (!content || loading || ended) return;

      const userMsg: ChatMsg = { id: uid(), role: "user", content, ts: Date.now() };
      const next = [...messages, userMsg];
      setMessages(next);
      setInput("");
      setLoading(true);

      const userCount = next.filter((m) => m.role === "user").length;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            messages: next.filter((m) => !m.local).map((m) => ({ role: m.role, content: m.content })),
          }),
        });
        const data = (await res.json().catch(() => null)) as { ok?: boolean; reply?: string; code?: string } | null;

        if (data?.ok && data.reply) {
          setMessages((m) => [...m, { id: uid(), role: "assistant", content: data.reply!, ts: Date.now() }]);
          if (userCount >= MAX_USER_MESSAGES) {
            setEnded(true);
            addLocal(ENDED_TEXT);
          }
        } else if (data?.code === "ended") {
          setEnded(true);
          addLocal(ENDED_TEXT);
        } else if (data?.code === "slow_down") {
          addLocal(SLOW_TEXT);
        } else {
          addLocal(UNAVAILABLE_TEXT);
        }
      } catch {
        addLocal(UNAVAILABLE_TEXT);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading, ended, addLocal]
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const clearChat = () => {
    // Menghapus riwayat saja. Status "sesi berakhir" tetap dipertahankan.
    setMessages(ended ? [greeting(), { id: uid(), role: "assistant", content: ENDED_TEXT, ts: Date.now(), local: true }] : [greeting()]);
  };

  const showSuggestions = !ended && messages.length === 1 && !loading;

  return (
    <>
      {/* Tombol mengambang: selalu di pojok kanan bawah, tidak ikut ter-scroll */}
      <button
        aria-label="Buka chat asisten AI"
        className={`fixed z-[55] right-4 bottom-4 sm:right-8 sm:bottom-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#111827] text-white shadow-[0_10px_30px_-6px_rgba(0,0,0,0.45)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
          open ? "opacity-0 pointer-events-none scale-75" : "opacity-100"
        }`}
        onClick={() => setOpen(true)}
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        type="button"
      >
        <span className="material-symbols-outlined text-[26px]">chat</span>
        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-900 text-[9px] font-bold flex items-center justify-center border-2 border-background">
          AI
        </span>
      </button>

      {/* Jendela chat layar penuh */}
      <div
        aria-hidden={!open}
        aria-label="Chat dengan asisten AI David"
        className={`fixed inset-0 z-[70] bg-background flex flex-col transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-[72px] shrink-0 bg-surface border-b border-neutral-100">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-bold text-[13px] text-primary shrink-0">
              AI
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-md text-[16px] font-bold text-primary leading-tight truncate">David Assistant</span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-status-online">
                <span className="w-1.5 h-1.5 rounded-full bg-status-online"></span>
                Online
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Hapus percakapan"
              className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant flex items-center justify-center transition-colors cursor-pointer"
              onClick={clearChat}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>
            <button
              aria-label="Tutup chat"
              className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant flex items-center justify-center transition-colors cursor-pointer"
              onClick={() => setOpen(false)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Daftar pesan */}
        <div ref={listRef} className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
          <div className="max-w-[640px] mx-auto flex flex-col gap-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[88%] sm:max-w-[80%] rounded-2xl px-4 py-3 shadow-sm border ${
                    m.role === "user"
                      ? "bg-[#111827] text-white border-[#111827] rounded-br-md"
                      : "bg-surface text-on-surface border-neutral-100 rounded-bl-md"
                  }`}
                >
                  <p className="font-body-sm text-[13px] leading-relaxed whitespace-pre-wrap break-words">
                    {linkify(m.content)}
                  </p>
                  <span className={`block mt-1.5 text-[10px] font-semibold ${m.role === "user" ? "text-white/60" : "text-neutral-400"}`}>
                    {fmtTime(m.ts)}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface border border-neutral-100 rounded-2xl rounded-bl-md px-4 py-3.5 shadow-sm flex items-center gap-1.5">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="px-3.5 py-2 rounded-full bg-surface border border-neutral-200 hover:border-neutral-800 text-[12px] font-medium text-on-surface transition-colors cursor-pointer"
                    onClick={() => send(s)}
                    type="button"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {ended && (
              <a
                className="self-center mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-whatsapp hover:brightness-95 text-white font-label-caps text-label-micro tracking-widest uppercase font-bold shadow-sm transition-all"
                href={site.whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>HUBUNGI VIA WHATSAPP</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            )}
          </div>
        </div>

        {/* Input */}
        <form
          className="shrink-0 bg-surface border-t border-neutral-100 px-4 sm:px-6 py-4"
          onSubmit={onSubmit}
          style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <div className="max-w-[640px] mx-auto flex items-center gap-3">
            <input
              ref={inputRef}
              className="flex-1 min-w-0 h-11 rounded-xl border border-neutral-200 bg-background px-4 text-[14px] text-on-surface placeholder:text-neutral-400 outline-none focus:border-neutral-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={ended}
              maxLength={MAX_INPUT}
              onChange={(e) => setInput(e.target.value)}
              placeholder={ended ? "Sesi sudah berakhir" : "Ask me anything..."}
              type="text"
              value={input}
            />
            <button
              aria-label="Kirim pesan"
              className="w-11 h-11 shrink-0 rounded-xl bg-[#111827] hover:bg-black text-white flex items-center justify-center transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed cursor-pointer"
              disabled={ended || loading || !input.trim()}
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
