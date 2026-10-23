import type { MetadataRoute } from "next";

import { getLivePages, lastModified } from "@/lib/content";
import { categoryPath, groupPath, hierarchy } from "@/lib/hierarchy";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 3600;

/**
 * XML-Sitemap – automatisch aus Hierarchie + live geschalteten Inhalten.
 * Kategorien und Unterthemen erscheinen erst, wenn sie mindestens eine Live-Seite haben.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const live = getLivePages().filter((p) => !p.noindex);
  const newest = live[0] ? lastModified(live[0]) : new Date();
  const liveCategories = new Set(live.map((p) => p.category.slug));
  const liveGroups = new Set(live.map((p) => `${p.category.slug}/${p.group.slug}`));

  return [
    { url: absoluteUrl("/startseite"), lastModified: newest, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/seitenstruktur"), lastModified: newest, changeFrequency: "weekly", priority: 0.5 },
    ...hierarchy
      .filter((c) => liveCategories.has(c.slug))
      .map((c) => ({ url: absoluteUrl(categoryPath(c.slug)), changeFrequency: "weekly" as const, priority: 0.9 })),
    ...hierarchy.flatMap((c) =>
      c.groups
        .filter((g) => liveGroups.has(`${c.slug}/${g.slug}`))
        .map((g) => ({ url: absoluteUrl(groupPath(c.slug, g.slug)), changeFrequency: "weekly" as const, priority: 0.7 })),
    ),
    ...live.map((p) => ({
      url: absoluteUrl(p.href),
      lastModified: lastModified(p),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/transparenz"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
