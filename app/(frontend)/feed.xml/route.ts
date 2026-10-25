import { getLivePages } from "@/lib/cms";
import { getSiteUrl, siteConfig } from "@/lib/site";

/** RSS-Feed mit den 50 neuesten Seiten – für Feed-Reader und News-Apps. */
export const revalidate = 3600;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET() {
  const base = getSiteUrl();
  const pages = (await getLivePages()).slice(0, 50);
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
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } });
}
