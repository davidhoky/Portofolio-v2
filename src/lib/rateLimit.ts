/**
 * Pembatas sederhana per IP (disimpan di memori server).
 * Catatan: di Vercel (serverless) memori bisa ter-reset antar instance, jadi ini
 * pagar pertama saja. Pagar yang benar-benar keras adalah batas pengeluaran
 * (spend limit) di dashboard Anthropic.
 */
type Bucket = { minute: number[]; day: number[] };
const buckets = new Map<string, Bucket>();

const PER_MINUTE = 8;
const PER_DAY = 40;

export type LimitResult = "ok" | "slow_down" | "daily_limit";

export function checkRateLimit(key: string): LimitResult {
  const now = Date.now();
  const b = buckets.get(key) ?? { minute: [], day: [] };
  b.minute = b.minute.filter((t) => now - t < 60_000);
  b.day = b.day.filter((t) => now - t < 86_400_000);

  if (b.day.length >= PER_DAY) {
    buckets.set(key, b);
    return "daily_limit";
  }
  if (b.minute.length >= PER_MINUTE) {
    buckets.set(key, b);
    return "slow_down";
  }
  b.minute.push(now);
  b.day.push(now);
  buckets.set(key, b);

  // Bersihkan map kalau terlalu besar
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (v.day.every((t) => now - t >= 86_400_000)) buckets.delete(k);
    }
  }
  return "ok";
}
