import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { AdSlot } from "@/components/ad-slot";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CategoryIcon } from "@/components/category-icon";
import { JsonLd } from "@/components/json-ld";
import { PageCard } from "@/components/page-card";
import { PageList } from "@/components/page-list";
import { getLiveIds, getLivePagesInCategory, toSummary } from "@/lib/content";
import { categoryPath, getCategory, groupPath, hierarchy } from "@/lib/hierarchy";
import { collectionSchema } from "@/lib/schema";

export const revalidate = 3600;
export const dynamicParams = false;

type Props = { params: Promise<{ kategorie: string }> };

export function generateStaticParams() {
  return hierarchy.map((c) => ({ kategorie: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie } = await params;
  const category = getCategory(kategorie);
  if (!category) return {};
  const hasContent = getLivePagesInCategory(category.slug).length > 0;
  const path = categoryPath(category.slug);
  return {
    title: `${category.title}: Ratgeber, Vergleiche & Tipps`,
    description: category.description,
    alternates: { canonical: path },
    // Kategorien ohne Inhalte nicht indexieren (dünner Inhalt), bis die ersten Seiten live sind.
    robots: hasContent ? undefined : { index: false, follow: true },
    openGraph: { title: category.title, description: category.description, url: path },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { kategorie } = await params;
  const category = getCategory(kategorie);
  if (!category) notFound();

  const path = categoryPath(category.slug);
  const live = getLivePagesInCategory(category.slug);
  const liveIds = getLiveIds();

  return (
    <div className="mx-auto max-w-7xl space-y-14 px-4 py-10">
      <JsonLd data={collectionSchema(category.title, category.description, path, live)} />

      <header className="space-y-5">
        <Breadcrumbs items={[{ name: "Home", href: "/home" }, { name: category.title, href: path }]} />
        <div className="flex items-center gap-4">
          <span className="flex size-14 items-center justify-center rounded-xl bg-primary/10 shadow-[var(--glow-sm)]">
            <CategoryIcon name={category.icon} className="size-7 text-primary" />
          </span>
          <p className="font-display text-sm text-primary">Kategorie {category.number}</p>
        </div>
        <h1 className="text-4xl font-bold md:text-5xl">{category.title}</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{category.description}</p>
      </header>

      {live.length > 0 && (
        <section aria-labelledby="neu">
          <h2 id="neu" className="mb-6 text-2xl font-semibold">
            Beliebt & neu
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {live.slice(0, 3).map((p) => (
              <PageCard key={p.id} page={toSummary(p)} showCategory={false} />
            ))}
          </div>
        </section>
      )}

      <AdSlot id="kategorie-oben" />

      <section aria-labelledby="unterthemen">
        <h2 id="unterthemen" className="mb-6 text-2xl font-semibold">
          Unterthemen
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {category.groups.map((g) => {
            const count = g.pages.filter((p) => liveIds.has(`${category.slug}/${g.slug}/${p.slug}`)).length;
            return (
              <section key={g.slug} aria-labelledby={`g-${g.slug}`} className="flex flex-col rounded-xl border bg-card/60 p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 id={`g-${g.slug}`} className="font-display text-lg font-semibold">
                    <Link href={groupPath(category.slug, g.slug)} className="hover:text-primary">
                      {g.title}
                    </Link>
                  </h3>
                  <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                    {count}/{g.pages.length}
                  </span>
                </div>
                <PageList categorySlug={category.slug} group={g} liveIds={liveIds} dense />
                <Link
                  href={groupPath(category.slug, g.slug)}
                  className="mt-auto flex items-center gap-1 pt-4 text-sm text-primary hover:underline"
                >
                  Zu {g.title} <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}
