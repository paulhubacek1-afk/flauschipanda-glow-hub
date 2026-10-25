import type { MetadataRoute } from "next";

import { getLivePages, getNavigation, lastModified } from "@/lib/cms";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 3600;

/**
 * XML-Sitemap – automatisch aus dem CMS.
 * Kategorien und Unterthemen erscheinen erst, wenn sie mindestens eine Live-Seite haben.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [nav, pages] = await Promise.all([getNavigation(), getLivePages()]);
  const live = pages.filter((p) => !p.noindex);
  const newest = live[0] ? lastModified(live[0]) : new Date();

  return [
    { url: absoluteUrl("/startseite"), lastModified: newest, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/seitenstruktur"), lastModified: newest, changeFrequency: "weekly", priority: 0.5 },
    { url: absoluteUrl("/neu"), lastModified: newest, changeFrequency: "daily", priority: 0.6 },
    ...nav
      .filter((c) => c.groups.some((g) => g.pages.some((p) => p.live)))
      .map((c) => ({ url: absoluteUrl(`/${c.slug}`), changeFrequency: "weekly" as const, priority: 0.9 })),
    ...nav.flatMap((c) =>
      c.groups
        .filter((g) => g.pages.some((p) => p.live))
        .map((g) => ({ url: absoluteUrl(`/${c.slug}/${g.slug}`), changeFrequency: "weekly" as const, priority: 0.7 })),
    ),
    ...live.map((p) => ({
      url: absoluteUrl(p.href),
      lastModified: lastModified(p),
      changeFrequency: "monthly" as const,
      priority: p.pageType === "money" ? 0.9 : 0.8,
    })),
    { url: absoluteUrl("/transparenz"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
