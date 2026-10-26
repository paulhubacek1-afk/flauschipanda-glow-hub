import type { Metadata } from "next";
import Link from "next/link";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, RefreshCw } from "lucide-react";

import { AdSlot } from "@/components/ad-slot";
import { AffiliateBox, AffiliateDisclosure } from "@/components/affiliate";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ComparisonTable } from "@/components/comparison-table";
import { Calculators } from "@/components/calculators";
import { CostCalculator } from "@/components/cost-calculator";
import { Cover } from "@/components/cover";
import { DonationBox } from "@/components/donation-box";
import { ShareButtons } from "@/components/share-buttons";
import { Faq } from "@/components/faq";
import { GreenTechNotice } from "@/components/greencore-notice";
import { JsonLd } from "@/components/json-ld";
import { PageCard } from "@/components/page-card";
import { PageList } from "@/components/page-list";
import { SourcesBox } from "@/components/sources-box";
import { TableOfContents } from "@/components/table-of-contents";
import { Badge } from "@/components/ui/badge";
import { getAffiliateLookup, getDraftPage, getGroup, getLivePage, getLivePages, getSettings, lastModified, toSummary } from "@/lib/cms";
import { getInlineLinks, getRelatedPages } from "@/lib/linking";
import { renderPage } from "@/lib/markdown";
import { articleSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { CATEGORY_TOOLS, widgetsFor } from "@/lib/tools";
import { formatDate, toIsoDate } from "@/lib/utils";

/**
 * Landingpage-Vorlage – für jede Seite gleich aufgebaut:
 *   Infotext → FAQ → Vergleich → Affiliate-Bereich (nur Money Pages) → Panda-GreenTech-Box → Quellen
 * Automatisch: URL, Breadcrumb, SEO-Titel, Meta-Beschreibung, interne Verlinkung,
 * Geschwisterseiten, verwandte Artikel und GreenTech-Hinweis.
 */
export const revalidate = 3600;

type Props = { params: Promise<{ kategorie: string; gruppe: string; seite: string }> };

/** Öffentliche Seite – oder im Team-Vorschaumodus auch Entwürfe (z. B. direkt aus dem Admin „Vorschau“). */
async function loadPage(kategorie: string, gruppe: string, seite: string) {
  const live = await getLivePage(kategorie, gruppe, seite);
  const draft = await draftMode();
  if (draft.isEnabled) {
    const preview = await getDraftPage(kategorie, gruppe, seite);
    if (preview) return { page: preview, isDraft: preview.isDraft, preview: true };
  }
  return live ? { page: live, isDraft: false, preview: false } : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategorie, gruppe, seite } = await params;
  const loaded = await loadPage(kategorie, gruppe, seite);
  if (!loaded) return {};
  const { page } = loaded;
  return {
    title: { absolute: page.seoTitle },
    description: page.description,
    keywords: [page.focusKeyword, ...page.keywords],
    alternates: { canonical: page.href },
    robots: page.noindex || loaded.preview ? { index: false, follow: true } : undefined,
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
  const loaded = await loadPage(kategorie, gruppe, seite);
  if (!loaded) notFound();
  const { page, isDraft } = loaded;

  const [live, settings, lookup, found] = await Promise.all([
    getLivePages(),
    getSettings(),
    getAffiliateLookup(),
    getGroup(kategorie, gruppe),
  ]);
  const related = getRelatedPages(page, live, 3);
  const inline = getInlineLinks(page, live, CATEGORY_TOOLS[page.category.slug] ?? [], related.map((p) => p.href));
  const rendered = await renderPage(page, live, { lookup, inline });
  const siblings = found?.group.pages ?? [];
  const hasAffiliate = rendered.affiliateIds.length > 0 || page.products.length > 0;
  const { category, group } = page;
  const groupHref = `/${category.slug}/${group.slug}`;
  const widgets = widgetsFor(page.href, page.widgets);

  // Für Flauschipanda als Guide: „Das könnte dich auch interessieren“ – verwandte Artikel + Geschwisterseiten
  const guideLinks: { href: string; title: string }[] = [];
  for (const p of [
    ...related,
    ...live.filter((p) => p.category.slug === category.slug && p.group.slug === group.slug && p.href !== page.href),
  ]) {
    if (guideLinks.length >= 5) break;
    if (!guideLinks.some((l) => l.href === p.href)) guideLinks.push({ href: p.href, title: p.title });
  }

  return (
    <article className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={articleSchema(page)} />
      <JsonLd data={faqSchema(page)} />
      <div hidden data-panda-guide={JSON.stringify({ links: guideLinks })} />

      {isDraft && (
        <p role="status" className="mb-6 rounded-xl border border-warning/40 bg-warning/10 px-4 py-3 text-sm">
          👀 <strong>Vorschau:</strong> Diese Seite ist noch nicht veröffentlicht (Entwurf oder geplanter Termin). Nur angemeldete Teammitglieder sehen sie.
        </p>
      )}
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
          {widgets.includes("kostenrechner") && <CostCalculator />}
          <Calculators keys={widgets} />

          {/* 2 · FAQ */}
          <div data-reveal>
            <Faq items={page.faq} />
          </div>

          {/* 3 · Vergleich */}
          {page.comparison && (
            <div data-reveal>
              <ComparisonTable comparison={page.comparison} />
            </div>
          )}

          <div data-reveal className="rounded-xl border border-primary/20 bg-card/60 p-4">
            <p className="mb-3 text-sm text-muted-foreground">
              {group.slug === "greentech"
                ? "Hilf Panda GreenTech: Teile diese Seite mit Freunden und Familie 💚"
                : "Hat dir der Artikel geholfen? Teile ihn mit jemandem, dem er auch hilft. 🐼"}
            </p>
            <ShareButtons title={page.title} text={page.description} path={page.href} />
          </div>

          {/* 4 · Affiliate-Bereich – Money Pages automatisch, andere Seiten mit selbst gewählten Produkten */}
          <AffiliateBox products={page.products} />

          {/* 5 · Panda-GreenTech-Box */}
          {page.donation && (
            <div data-reveal>
              <DonationBox greencore={settings.greencore} />
            </div>
          )}

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
            {page.donation && <GreenTechNotice greencore={settings.greencore} />}
          </div>
        </aside>
      </div>

      {/* Geschwisterseiten auch auf Mobilgeräten verlinken */}
      <nav aria-label={`Mehr zu ${group.title}`} className="mt-12 rounded-xl border bg-card/60 p-4 lg:hidden">
        <p className="mb-2 px-2.5 text-sm font-semibold">Mehr zu {group.title}</p>
        <PageList categorySlug={category.slug} groupSlug={group.slug} pages={siblings} currentSlug={page.slug} dense />
      </nav>
      {page.donation && <GreenTechNotice greencore={settings.greencore} className="mt-6 lg:hidden" />}

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
