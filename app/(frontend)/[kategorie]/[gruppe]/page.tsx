import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AffiliateBox } from "@/components/affiliate";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Cover } from "@/components/cover";
import { JsonLd } from "@/components/json-ld";
import { PageCard } from "@/components/page-card";
import { GreenTechNotice } from "@/components/greencore-notice";
import { PageList } from "@/components/page-list";
import { getGroup, getLivePagesInGroup, getSettings, getTopicAffiliates, toSummary } from "@/lib/cms";
import { collectionSchema } from "@/lib/schema";

export const revalidate = 3600;

type Props = { params: Promise<{ kategorie: string; gruppe: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie, gruppe } = await params;
  const found = await getGroup(kategorie, gruppe);
  if (!found) return {};
  const { category, group } = found;
  const path = `/${category.slug}/${group.slug}`;
  const hasContent = group.pages.some((p) => p.live);
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
  const found = await getGroup(kategorie, gruppe);
  if (!found) notFound();
  const { category, group } = found;

  const path = `/${category.slug}/${group.slug}`;
  const [live, partners, settings] = await Promise.all([
    getLivePagesInGroup(category.slug, group.slug),
    getTopicAffiliates("groups", group.dbId),
    getSettings(),
  ]);
  const siblings = category.groups.filter((g) => g.slug !== group.slug);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
      <JsonLd data={collectionSchema(group.title, group.description, path, live)} />
      <header className="space-y-6">
        <Breadcrumbs
          items={[
            { name: "Startseite", href: "/startseite" },
            { name: category.title, href: `/${category.slug}` },
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
          <AffiliateBox products={partners} title={`Empfehlungen zu ${group.title}`} />
        </div>

        <aside className="space-y-4">
          <nav aria-label={`Alle Seiten in ${group.title}`} className="rounded-xl border bg-card/60 p-4">
            <p className="mb-2 px-2.5 text-sm font-semibold">Alle Themen in {group.title}</p>
            <PageList categorySlug={category.slug} groupSlug={group.slug} pages={group.pages} dense />
          </nav>
          <GreenTechNotice greencore={settings.greencore} />
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
                href={`/${category.slug}/${g.slug}`}
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
