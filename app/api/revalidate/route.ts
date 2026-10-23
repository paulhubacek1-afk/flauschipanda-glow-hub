import { revalidatePath } from "next/cache";

import { getAllPages, isLive, isScheduled } from "@/lib/content";

/**
 * Cronjob-Endpunkt für geplante Veröffentlichungen.
 * Aufruf: GET /api/revalidate  mit Header  Authorization: Bearer <CRON_SECRET>
 *
 * Idempotent: Mehrfaches Ausführen erzeugt nichts doppelt – es wird nur der Cache
 * neu aufgebaut, sodass fällige Seiten erscheinen und Menüs, Listen und Sitemap
 * aktuell sind. Fehlgeschlagene Läufe können gefahrlos wiederholt werden.
 */
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: "Nicht autorisiert" }, { status: 401 });
  }

  const now = new Date();
  revalidatePath("/", "layout");

  const pages = getAllPages();
  const live = pages.filter((p) => isLive(p, now)).length;
  const upcoming = pages
    .filter((p) => isScheduled(p, now))
    .map((p) => ({ id: p.id, publishedAt: p.publishedAt.toISOString() }));

  console.info(`[cron] revalidate ${now.toISOString()} – ${live} live, ${upcoming.length} geplant`);
  return Response.json({ ok: true, revalidatedAt: now.toISOString(), live, upcoming });
}
