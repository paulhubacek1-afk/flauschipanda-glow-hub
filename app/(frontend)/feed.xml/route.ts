import { getLivePages } from "@/lib/cms";
import { getSiteUrl, siteConfig } from "@/lib/site";

/**
 * RSS wird erst bei einer echten Anfrage erzeugt.
 * So muss Vercel während des Builds keine Verbindung zur CMS-Datenbank öffnen.
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function GET() {
  const base = getSiteUrl();

  // Ein Ausfall des CMS darf den Feed und insbesondere den Build nicht zerstören.
  let pages: Awaited<ReturnType<typeof getLivePages>> = [];
  try {
    pages = (await getLivePages()).slice(0, 50);
  } catch (error) {
    console.error("[feed] CMS-Seiten konnten nicht geladen werden; RSS-Feed wird leer ausgegeben.", error);
  }

  const items = pages
    .map((p) => {
      const url = new URL(p.href, base).toString();
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <description>${esc(p.description)}</description>
      <category>${esc(p.category.title)}</category>
      <pubDate>${p.publishedAt.toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(siteConfig.name)} – Neu auf der Seite</title>
    <link>${esc(new URL("/neu", base).toString())}</link>
    <atom:link href="${esc(new URL("/feed.xml", base).toString())}" rel="self" type="application/rss+xml" />
    <description>${esc(siteConfig.tagline)}</description>
    <language>de</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
    },
  });
}
