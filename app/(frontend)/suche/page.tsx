import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteSearch } from "@/components/site-search";
import { getSearchItems } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Suche",
  description: "Durchsuche alle Seiten, Unterthemen und Kategorien der Panda Toolbox.",
  // Suchergebnis-Seiten gehören nicht in den Google-Index
  robots: { index: false, follow: true },
  alternates: { canonical: "/suche" },
};

type Props = { searchParams: Promise<{ q?: string | string[] }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const initial = (Array.isArray(q) ? q[0] : q ?? "").slice(0, 100);
  const items = await getSearchItems();

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10">
      <Breadcrumbs items={[{ name: "Startseite", href: "/startseite" }, { name: "Suche", href: "/suche" }]} />
      <h1 className="text-3xl font-bold md:text-4xl">
        Was suchst du? <span className="text-glow">🐼</span>
      </h1>
      <SiteSearch items={items} initialQuery={initial} limit={60} autoFocus showAllLink={false} />
    </div>
  );
}
