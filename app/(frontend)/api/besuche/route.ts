import config from "@payload-config";
import { getPayload } from "payload";

import { VISITS_TOTAL, getVisitorStats, incrementCounters, pageViewKey, visitsDayKey } from "@/lib/counters";

/**
 * Anonymer Besucherzähler.
 *   GET  → { total, today }
 *   POST { path } → zählt einen Besuch und den Aufruf eines Artikels (für „Gerade beliebt“): höchstens einmal pro IP alle 30 Minuten, nur von der eigenen
 *          Website, keine Bots. Die IP liegt nur kurz im Arbeitsspeicher (Doppelzählung vermeiden)
 *          und wird nie gespeichert. Keine Cookies, kein Local Storage.
 */
export const dynamic = "force-dynamic";

const WINDOW_MS = 30 * 60_000;
const recent = new Map<string, number>();
const PATH = /^\/[a-z0-9-]{1,80}\/[a-z0-9-]{1,80}\/[a-z0-9-]{1,120}$/;
const BOT = /bot|crawl|spider|slurp|preview|headless|lighthouse|monitor|curl|wget|python|httpclient/i;

function sameSite(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

export async function GET() {
  const stats = await getVisitorStats();
  return Response.json(stats, { headers: { "Cache-Control": "public, s-maxage=120, stale-while-revalidate=600" } });
}

export async function POST(request: Request) {
  if (!sameSite(request)) return Response.json({ ok: false }, { status: 403 });
  if (BOT.test(request.headers.get("user-agent") ?? "")) return Response.json({ ok: true, counted: false });
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unbekannt";
  let path = "";
  try {
    const body = (await request.json()) as { path?: unknown };
    if (typeof body?.path === "string" && PATH.test(body.path)) path = body.path;
  } catch {
    /* ohne Pfad: nur Besuch zählen */
  }
  const now = Date.now();
  if (recent.size > 20000) for (const [k, t] of recent) if (now - t > WINDOW_MS) recent.delete(k);
  const fresh = (k: string) => {
    const last = recent.get(k);
    if (last && now - last < WINDOW_MS) return false;
    recent.set(k, now);
    return true;
  };
  const keys: string[] = [];
  if (fresh(ip)) keys.push(VISITS_TOTAL, visitsDayKey());
  try {
    // Seitenaufruf nur für echte, veröffentlichte Artikel zählen
    if (path && fresh(`${ip} ${path}`)) {
      const payload = await getPayload({ config });
      const found = await payload.find({
        collection: "pages",
        where: { and: [{ path: { equals: path } }, { _status: { equals: "published" } }] },
        limit: 1,
        depth: 0,
        pagination: false,
        select: { path: true },
      });
      if (found.docs.length) keys.push(pageViewKey(path));
    }
    if (!keys.length) return Response.json({ ok: true, counted: false }, { headers: { "Cache-Control": "no-store" } });
    await incrementCounters(keys);
    return Response.json({ ok: true, counted: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ ok: true, counted: false }, { headers: { "Cache-Control": "no-store" } });
  }
}
