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
import { JsonLd } from "@/components/json-ld";
import { PageCard } from "@/components/page-card";
import { PageList } from "@/components/page-list";
import { SourcesBox } from "@/components/sources-box";
import { TableOfContents } from "@/components/table-of-contents";
import { Badge } from "@/components/ui/badge";
import { getLiveIds, getLivePage, getLivePages, lastModified, toSummary } from "@/lib/content";
import { categoryPath, groupPath } from "@/lib/hierarchy";
import { getRelatedPages } from "@/lib/linking";
import { renderPage } from "@/lib/markdown";
import { articleSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { formatDate, toIsoDate } from "@/lib/utils";

/**
 * Landingpage-Vorlage – für jede Seite der Hierarchie gleich aufgebaut:
 *   Infotext → FAQ → Vergleich → Affiliate-Box → Spendenbox Panda GreenCore (→ Quellen)
 *
 * Geplante Veröffentlichung: Seiten werden stündlich neu erzeugt (ISR). Erreicht eine
 * Seite ihren publishedAt-Zeitpunkt, erscheint sie automatisch.
 */
export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ kategorie: string; gruppe: string; seite: string }> };

export function generateStaticParams() {
  return getLivePages().map((p) => ({ kategorie: p.category.slug, gruppe: p.group.slug, seite: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie, gruppe, seite } = await params;
  const page = getLivePage(kategorie, gruppe, seite);
  if (!page) return {};
  const title = page.seoTitle ?? page.title;
  return {
    title: { absolute: `${title} | ${siteConfig.name}` },
    description: page.description,
    keywords: [page.focusKeyword, ...page.keywords],
    alternates: { canonical: page.href },
    robots: page.noindex ? { index: false, follow: true } : undefined,
    authors: [{ name: page.author ?? siteConfig.defaultAuthor }],
    openGraph: {
      type: "article",
      title,
      description: page.description,
      url: page.href,
      publishedTime: page.publishedAt.toISOString(),
      modifiedTime: lastModified(page).toISOString(),
      section: page.category.title,
      tags: page.tags,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { kategorie, gruppe, seite } = await params;
  const page = getLivePage(kategorie, gruppe, seite);
  if (!page) notFound();

  const live = getLivePages();
  const liveIds = getLiveIds();
  const rendered = await renderPage(page, live);
  const related = getRelatedPages(page, live, 3);
  const productIds = Array.from(new Set(page.products));
  const hasAffiliate = rendered.affiliateIds.length > 0 || productIds.length > 0;
  const { category, group } = page;

  return (
    <article className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={articleSchema(page)} />
      <JsonLd data={faqSchema(page)} />

      <header className="mb-10 space-y-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/home" },
            { name: category.title, href: categoryPath(category.slug) },
            { name: group.title, href: groupPath(category.slug, group.slug) },
            { name: page.node.label, href: page.href },
          ]}
        />
        <div className="space-y-4">
          <Badge asChild>
            <Link href={groupPath(category.slug, group.slug)}>{group.title}</Link>
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{page.title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{page.description}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4" aria-hidden="true" />
              <time dateTime={toIsoDate(page.publishedAt)}>{formatDate(page.publishedAt)}</time>
            </span>
            {page.updatedAt && (
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

          {/* 1 · Infotext */}
          <div className="prose-glow" dangerouslySetInnerHTML={{ __html: rendered.html }} />
          {page.widgets.includes("kostenrechner") && <CostCalculator />}

          {/* 2 · FAQ */}
          <Faq items={page.faq} />

          {/* 3 · Vergleich */}
          {page.comparison && <ComparisonTable comparison={page.comparison} />}

          {/* 4 · Affiliate-Box */}
          <AffiliateBox ids={productIds} />

          {/* 5 · Spendenbox Panda GreenCore */}
          {page.donation && <DonationBox />}

          <AdSlot id="seite-ende" />
          <SourcesBox page={page} />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <TableOfContents headings={rendered.headings} />
            <nav aria-label={`Mehr zu ${group.title}`} className="rounded-xl border bg-card/60 p-4">
              <p className="mb-2 px-2.5 text-sm font-semibold">
                Mehr zu{" "}
                <Link href={groupPath(category.slug, group.slug)} className="text-primary hover:underline">
                  {group.title}
                </Link>
              </p>
              <PageList categorySlug={category.slug} group={group} liveIds={liveIds} currentSlug={page.slug} dense />
            </nav>
          </div>
        </aside>
      </div>

      {/* Geschwisterseiten auch auf Mobilgeräten verlinken */}
      <nav aria-label={`Mehr zu ${group.title}`} className="mt-12 rounded-xl border bg-card/60 p-4 lg:hidden">
        <p className="mb-2 px-2.5 text-sm font-semibold">Mehr zu {group.title}</p>
        <PageList categorySlug={category.slug} group={group} liveIds={liveIds} currentSlug={page.slug} dense />
      </nav>

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
