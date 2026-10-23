import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { CategoryIcon } from "@/components/category-icon";
import { PageList } from "@/components/page-list";
import { getLiveIds } from "@/lib/content";
import { categoryPath, groupPath, hierarchy, hierarchyStats } from "@/lib/hierarchy";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Seitenstruktur: Alle Kategorien und Themen",
  description: "Die komplette Seitenstruktur von FlauschiPandas: alle Kategorien, Unterthemen und Ratgeber auf einen Blick.",
  alternates: { canonical: "/seitenstruktur" },
};

/** HTML-Sitemap der gesamten Hierarchie – Live-Seiten verlinkt, geplante markiert. */
export default function StructurePage() {
  const liveIds = getLiveIds();
  const stats = hierarchyStats();

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10">
      <header className="space-y-4">
        <Breadcrumbs items={[{ name: "Home", href: "/home" }, { name: "Seitenstruktur", href: "/seitenstruktur" }]} />
        <h1 className="text-4xl font-bold">Seitenstruktur</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          {stats.categories} Kategorien · {stats.groups} Unterthemen · {stats.pages} geplante Seiten, davon{" "}
          <strong className="text-primary">{liveIds.size} online</strong>. Grau markierte Themen sind in Vorbereitung.
        </p>
        <nav aria-label="Sprungmarken" className="flex flex-wrap gap-2 pt-2">
          {hierarchy.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="rounded-full border px-3 py-1 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary">
              {c.title}
            </a>
          ))}
        </nav>
      </header>

      {hierarchy.map((c) => (
        <section key={c.slug} id={c.slug} aria-labelledby={`h-${c.slug}`} className="space-y-5 scroll-mt-24">
          <h2 id={`h-${c.slug}`} className="flex items-center gap-3 border-b border-primary/15 pb-3 text-2xl font-semibold">
            <CategoryIcon name={c.icon} className="size-6 text-primary" />
            <Link href={categoryPath(c.slug)} className="hover:text-primary">
              {c.number}. {c.title}
            </Link>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {c.groups.map((g) => (
              <div key={g.slug} className="rounded-lg border bg-card/50 p-3">
                <h3 className="mb-1.5 px-2.5 font-display font-semibold">
                  <Link href={groupPath(c.slug, g.slug)} className="hover:text-primary">
                    {g.title}
                  </Link>
                </h3>
                <PageList categorySlug={c.slug} group={g} liveIds={liveIds} dense />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
