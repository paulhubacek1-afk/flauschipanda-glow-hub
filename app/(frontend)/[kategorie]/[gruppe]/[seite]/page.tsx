import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, RefreshCw } from "lucide-react";

import { AdSlot } from "@/components/ad-slot";
import { AffiliateBox, AffiliateDisclosure } from "@/components/affiliate";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ComparisonTable } from "@/components/comparison-table";
import { CostCalculator } from "@/components/cost-calculator";
import { Cover } from "@/components/cover";
import { DonationBox } from "@/components/donation-box";
import { Faq } from "@/components/faq";
import { GreenCoreNotice } from "@/components/greencore-notice";
import { JsonLd } from "@/components/json-ld";
import { PageCard } from "@/components/page-card";
import { PageList } from "@/components/page-list";
import { SourcesBox } from "@/components/sources-box";
import { TableOfContents } from "@/components/table-of-contents";
import { Badge } from "@/components/ui/badge";
import { getAffiliateLookup, getGroup, getLivePage, getLivePages, getSettings, lastModified, toSummary } from "@/lib/cms";
import { getRelatedPages } from "@/lib/linking";
import { renderPage } from "@/lib/markdown";
import { articleSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { formatDate, toIsoDate } from "@/lib/utils";

/**
 * Landingpage-Vorlage – für jede Seite gleich aufgebaut:
 *   Infotext → FAQ → Vergleich → Affiliate-Bereich (nur Money Pages) → Panda-GreenCore-Box → Quellen
 * Automatisch: URL, Breadcrumb, SEO-Titel, Meta-Beschreibung, interne Verlinkung,
 * Geschwisterseiten, verwandte Artikel und GreenCore-Hinweis.
 */
export const revalidate = 3600;

type Props = { params: Promise<{ kategorie: string; gruppe: string; seite: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie, gruppe, seite } = await params;
  const page = await getLivePage(kategorie, gruppe, seite);
  if (!page) return {};
  return {
    title: { absolute: page.seoTitle },
    description: page.description,
    keywords: [page.focusKeyword, ...page.keywords],
    alternates: { canonical: page.href },
    robots: page.noindex ? { index: false, follow: true } : undefined,
    authors: [{ name: page.author ?? siteConfig.defaultAuthor }],
    openGraph: {
      type: "article",
      title: page.seoTitle,
      description: page.description,
      url: page.href,
      publishedTime: page.publishedAt.toISOString(),
      modifiedTime: lastModified(page).toISOString(),
      section: page.category.title,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { kategorie, gruppe, seite } = await params;
  const page = await getLivePage(kategorie, gruppe, seite);
  if (!page) notFound();

  const [live, settings, lookup, found] = await Promise.all([
    getLivePages(),
    getSettings(),
    getAffiliateLookup(),
    getGroup(kategorie, gruppe),
  ]);
  const rendered = await renderPage(page, live, { lookup });
  const related = getRelatedPages(page, live, 3);
  const siblings = found?.group.pages ?? [];
  const hasAffiliate = rendered.affiliateIds.length > 0 || page.products.length > 0;
  const { category, group } = page;
  const groupHref = `/${category.slug}/${group.slug}`;

  return (
    <article className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={articleSchema(page)} />
      <JsonLd data={faqSchema(page)} />

      <header className="mb-10 space-y-6">
        {/* Breadcrumb automatisch: Start › Kategorie › Unterthema › Seite */}
        <Breadcrumbs
          items={[
            { name: "Startseite", href: "/startseite" },
            { name: category.title, href: `/${category.slug}` },
            { name: group.title, href: groupHref },
            { name: page.label, href: page.href },
          ]}
        />
        <div className="space-y-4">
          <Badge asChild>
            <Link href={groupHref}>{group.title}</Link>
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{page.title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{page.description}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4" aria-hidden="true" />
              <time dateTime={toIsoDate(page.publishedAt)}>{formatDate(page.publishedAt)}</time>
            </span>
            {page.updatedAt && page.updatedAt.getTime() - page.publishedAt.getTime() > 86_400_000 && (
              <span className="flex items-center gap-1.5">
                <RefreshCw className="size-4" aria-hidden="true" />
                Aktualisiert <time dateTime={toIsoDate(page.updatedAt)}>{formatDate(page.updatedAt)}</time>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" /> {page.readingMinutes} Min. Lesezeit
            </span>
            <span>{page.author ?? siteConfig.defaultAuthor}</span>
          </div>
        </div>
        <Cover icon={category.icon} hue={category.hue} size="lg" />
      </header>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0 space-y-12">
          {hasAffiliate && <AffiliateDisclosure />}

          <div className="lg:hidden">
            <TableOfContents headings={rendered.headings} />
          </div>

          {/* 1 · Infotext (mit automatischer interner Verlinkung) */}
          <div className="prose-glow" dangerouslySetInnerHTML={{ __html: rendered.html }} />
          {page.widgets.includes("kostenrechner") && <CostCalculator />}

          {/* 2 · FAQ */}
          <Faq items={page.faq} />

          {/* 3 · Vergleich */}
          {page.comparison && <ComparisonTable comparison={page.comparison} />}

          {/* 4 · Affiliate-Bereich – nur Money Pages */}
          {page.pageType === "money" && <AffiliateBox products={page.products} />}

          {/* 5 · Panda-GreenCore-Box */}
          {page.donation && <DonationBox greencore={settings.greencore} />}

          <AdSlot id="seite-ende" />
          <SourcesBox page={page} />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <TableOfContents headings={rendered.headings} />
            <nav aria-label={`Mehr zu ${group.title}`} className="rounded-xl border bg-card/60 p-4">
              <p className="mb-2 px-2.5 text-sm font-semibold">
                Mehr zu{" "}
                <Link href={groupHref} className="text-primary hover:underline">
                  {group.title}
                </Link>
              </p>
              <PageList categorySlug={category.slug} groupSlug={group.slug} pages={siblings} currentSlug={page.slug} dense />
            </nav>
            {page.donation && <GreenCoreNotice greencore={settings.greencore} />}
          </div>
        </aside>
      </div>

      {/* Geschwisterseiten auch auf Mobilgeräten verlinken */}
      <nav aria-label={`Mehr zu ${group.title}`} className="mt-12 rounded-xl border bg-card/60 p-4 lg:hidden">
        <p className="mb-2 px-2.5 text-sm font-semibold">Mehr zu {group.title}</p>
        <PageList categorySlug={category.slug} groupSlug={group.slug} pages={siblings} currentSlug={page.slug} dense />
      </nav>
      {page.donation && <GreenCoreNotice greencore={settings.greencore} className="mt-6 lg:hidden" />}

      {/* Verwandte Artikel – automatisch */}
      {related.length > 0 && (
        <section aria-labelledby="weiterlesen" className="mt-20">
          <h2 id="weiterlesen" className="mb-6 text-2xl font-semibold">
            Weiterlesen
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PageCard key={p.id} page={toSummary(p)} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
