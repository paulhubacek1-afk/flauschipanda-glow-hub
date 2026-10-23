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
    author: { "@type": "Organization", name: p.author ?? siteConfig.defaultAuthor },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: absoluteUrl(p.href),
    articleSection: `${p.category.title} › ${p.group.title}`,
    keywords: [p.focusKeyword, ...p.keywords].join(", "),
    image: absoluteUrl(`${p.href}/opengraph-image`),
    ...(p.sources.length ? { citation: p.sources.map((s) => s.url) } : {}),
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
