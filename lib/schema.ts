import type { Page } from "./cms";
import { absoluteUrl, siteConfig } from "./site";

/** Strukturierte Daten (schema.org) als JSON-LD. */

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function articleSchema(p: Page) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    inLanguage: siteConfig.language,
    datePublished: p.publishedAt.toISOString(),
    dateModified: (p.updatedAt ?? p.publishedAt).toISOString(),
    author: { "@type": "Organization", name: p.author ?? siteConfig.defaultAuthor, url: absoluteUrl("/startseite") },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(p.href),
    articleSection: `${p.category.title} › ${p.group.title}`,
    keywords: [p.focusKeyword, ...p.keywords].join(", "),
    image: absoluteUrl(`${p.href}/opengraph-image`),
    ...(p.sources.length ? { citation: p.sources.map((s) => s.url) } : {}),
  };
}

/**
 * Website + Organisation für die Startseite. Hilft Google, den Website-Namen und das Logo
 * in den Suchergebnissen korrekt anzuzeigen, und verknüpft die interne Suche.
 */
export function siteSchema(sameAs: string[] = []) {
  const organization = {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    alternateName: "FlauschiPandas",
    url: absoluteUrl("/startseite"),
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    ...(sameAs.length ? { sameAs } : {}),
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteConfig.name,
        alternateName: ["Panda Toolbox", "FlauschiPandas"],
        url: absoluteUrl("/startseite"),
        inLanguage: siteConfig.language,
        publisher: { "@id": organization["@id"] },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${absoluteUrl("/suche")}?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

/** Organisation als eigenständiges Objekt, damit `publisher: { "@id" }` auf jeder Seite auflösbar ist. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: absoluteUrl("/startseite"),
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
  };
}

export function faqSchema(p: Page) {
  if (!p.faq.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function collectionSchema(name: string, description: string, href: string, items: Page[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(href),
    inLanguage: siteConfig.language,
    hasPart: items.slice(0, 30).map((p) => ({ "@type": "Article", headline: p.title, url: absoluteUrl(p.href) })),
  };
}
