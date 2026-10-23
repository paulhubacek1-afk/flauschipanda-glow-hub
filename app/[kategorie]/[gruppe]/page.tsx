import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Cover } from "@/components/cover";
import { JsonLd } from "@/components/json-ld";
import { PageCard } from "@/components/page-card";
import { PageList } from "@/components/page-list";
import { getLiveIds, getLivePagesInGroup, toSummary } from "@/lib/content";
import { categoryPath, getCategory, getGroup, groupPath, hierarchy } from "@/lib/hierarchy";
import { collectionSchema } from "@/lib/schema";

export const revalidate = 3600;
export const dynamicParams = false;

type Props = { params: Promise<{ kategorie: string; gruppe: string }> };

export function generateStaticParams() {
  return hierarchy.flatMap((c) => c.groups.map((g) => ({ kategorie: c.slug, gruppe: g.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie, gruppe } = await params;
  const category = getCategory(kategorie);
  const group = getGroup(kategorie, gruppe);
  if (!category || !group) return {};
  const path = groupPath(category.slug, group.slug);
  const hasContent = getLivePagesInGroup(category.slug, group.slug).length > 0;
  return {
    title: `${group.title} – ${category.title}`,
    description: group.description,
    alternates: { canonical: path },
    robots: hasContent ? undefined : { index: false, follow: true },
    openGraph: { title: group.title, description: group.description, url: path },
  };
}

export default async function GroupPage({ params }: Props) {
  const { kategorie, gruppe } = await params;
  const category = getCategory(kategorie);
  const group = getGroup(kategorie, gruppe);
  if (!category || !group) notFound();

  const path = groupPath(category.slug, group.slug);
  const live = getLivePagesInGroup(category.slug, group.slug);
  const liveIds = getLiveIds();
  const siblings = category.groups.filter((g) => g.slug !== group.slug);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
      <JsonLd data={collectionSchema(group.title, group.description, path, live)} />
      <header className="space-y-6">
        <Breadcrumbs
          items={[
            { name: "Startseite", href: "/startseite" },
            { name: category.title, href: categoryPath(category.slug) },
            { name: group.title, href: path },
          ]}
        />
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold md:text-5xl">{group.title}</h1>
            <p className="text-lg text-muted-foreground">{group.description}</p>
          </div>
          <Cover icon={category.icon} hue={category.hue} size="md" />
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-8">
          {live.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              {live.map((p) => (
                <PageCard key={p.id} page={toSummary(p)} showCategory={false} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed p-10 text-center">
              <p className="font-medium">Hier entstehen gerade die ersten Seiten.</p>
              <p className="mt-1 text-sm text-muted-foreground">Rechts siehst du, welche Themen geplant sind.</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <nav aria-label={`Alle Seiten in ${group.title}`} className="rounded-xl border bg-card/60 p-4">
            <p className="mb-2 px-2.5 text-sm font-semibold">Alle Themen in {group.title}</p>
            <PageList categorySlug={category.slug} group={group} liveIds={liveIds} dense />
          </nav>
        </aside>
      </div>

      <nav aria-labelledby="weitere">
        <h2 id="weitere" className="mb-4 text-xl font-semibold">
          Mehr in {category.title}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {siblings.map((g) => (
            <li key={g.slug}>
              <Link
                href={groupPath(category.slug, g.slug)}
                className="inline-block rounded-full border px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
