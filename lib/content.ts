import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

import { autoDescription, autoLinkAnchors, autoProducts, autoRelatedIds, autoSeoTitle } from "./auto";
import {
  getCategory,
  getGroup,
  getPageNode,
  pagePath,
  type CategoryNode,
  type GroupNode,
  type IconName,
  type PageNode,
} from "./hierarchy";

/**
 * Inhalte der Landingpages:  content/<kategorie>/<unterthema>/<seite>.md
 *
 * Der Pfad bestimmt, wo die Seite in der Hierarchie hängt – er muss in
 * lib/hierarchy.ts existieren. Die Frontmatter wird streng validiert.
 */
export const CONTENT_DIR = path.join(process.cwd(), "content");

export const frontmatterSchema = z.object({
  /** H1 – Standard: Titel aus der Hierarchie */
  title: z.string().min(5).optional(),
  /** Fehlt er, wird er automatisch erzeugt (lib/auto.ts) */
  seoTitle: z.string().optional(),
  /** Fehlt sie, wird sie automatisch erzeugt (lib/auto.ts) */
  description: z.string().min(20).optional(),
  /** draft = Entwurf, review = wartet auf Prüfung, published = freigegeben (ab publishedAt sichtbar) */
  status: z.enum(["draft", "review", "published"]),
  /** Liegt der Zeitpunkt in der Zukunft, ist die Seite "geplant" und erscheint automatisch. */
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  author: z.string().optional(),
  /** Hauptsuchbegriff – Standard: Titel aus der Hierarchie */
  focusKeyword: z.string().min(2).optional(),
  keywords: z.array(z.string()).default([]),
  /** Formulierungen, über die ANDERE Seiten automatisch hierher verlinken dürfen. */
  linkAnchors: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  /** Manuelle Empfehlungen als ID "kategorie/unterthema/seite" */
  related: z.array(z.string()).default([]),
  /** Affiliate-Box: IDs aus lib/affiliate.ts */
  products: z.array(z.string()).default([]),
  /** Ohne eigene `products` werden passende Produkte automatisch aus dem Affiliate-Register gewählt. */
  autoAffiliate: z.boolean().default(true),
  widgets: z.array(z.enum(["kostenrechner"])).default([]),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  /** Vergleichstabelle */
  comparison: z
    .object({
      title: z.string(),
      columns: z.array(z.string()).min(2),
      rows: z.array(z.object({ label: z.string(), values: z.array(z.string()) })).min(1),
      note: z.string().optional(),
    })
    .optional(),
  /** Spendenbox Panda GreenCore anzeigen */
  donation: z.boolean().default(true),
  sources: z
    .array(z.object({ title: z.string(), url: z.string().url(), accessed: z.coerce.date().optional() }))
    .default([]),
  factCheck: z
    .object({
      required: z.boolean().default(true),
      status: z.enum(["ausstehend", "geprüft"]).default("ausstehend"),
      reviewedBy: z.string().optional(),
      reviewedAt: z.coerce.date().optional(),
      notes: z.string().optional(),
    })
    .default({ required: true, status: "ausstehend" }),
  reviewIntervalMonths: z.number().int().positive().default(12),
  noindex: z.boolean().default(false),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;

export interface Page extends Omit<Frontmatter, "title" | "focusKeyword" | "seoTitle" | "description"> {
  /** "kategorie/unterthema/seite" */
  id: string;
  title: string;
  seoTitle: string;
  description: string;
  focusKeyword: string;
  /** Welche Felder automatisch ergänzt wurden – das Redaktions-Cockpit zeigt es an. */
  auto: { seoTitle: boolean; description: boolean; related: boolean; products: boolean; linkAnchors: boolean };
  category: CategoryNode;
  group: GroupNode;
  node: PageNode;
  slug: string;
  href: string;
  body: string;
  file: string;
  wordCount: number;
  readingMinutes: number;
}

/** Serialisierbare Kurzform für Client-Komponenten */
export interface PageSummary {
  id: string;
  title: string;
  description: string;
  href: string;
  readingMinutes: number;
  tags: string[];
  focusKeyword: string;
  categoryTitle: string;
  groupTitle: string;
  icon: IconName;
  hue: number;
  publishedAt: string;
}

export class ContentError extends Error {}

function countWords(markdown: string) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|~-]/g, " ");
  return text.split(/\s+/).filter(Boolean).length;
}

function listMarkdownFiles(dir: string, base = ""): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) return listMarkdownFiles(path.join(dir, entry.name), rel);
    return entry.name.endsWith(".md") ? [rel] : [];
  });
}

interface LoadResult {
  pages: Page[];
  /** Dateien, die zu keiner Landingpage in der Hierarchie passen */
  unmapped: string[];
}

function loadFromDisk(): LoadResult {
  const pages: Page[] = [];
  const unmapped: string[] = [];

  for (const file of listMarkdownFiles(CONTENT_DIR)) {
    const parts = file.replace(/\.md$/, "").split("/");
    const node = parts.length === 3 ? getPageNode(parts[0], parts[1], parts[2]) : undefined;
    if (!node) {
      unmapped.push(file);
      continue;
    }
    const category = getCategory(parts[0])!;
    const group = getGroup(parts[0], parts[1])!;

    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const parsed = frontmatterSchema.safeParse(data);
    if (!parsed.success) {
      const details = parsed.error.issues.map((i) => `  • ${i.path.join(".")}: ${i.message}`).join("\n");
      throw new ContentError(`Ungültige Frontmatter in content/${file}:\n${details}`);
    }
    const fm = parsed.data;
    const wordCount = countWords(content);

    const title = fm.title ?? node.title;
    const autoProductIds = fm.products.length === 0 && fm.autoAffiliate ? autoProducts(category.slug, group.slug) : [];
    pages.push({
      ...fm,
      id: `${category.slug}/${group.slug}/${node.slug}`,
      title,
      seoTitle: fm.seoTitle ?? autoSeoTitle(node.title, category),
      description: fm.description ?? autoDescription(node.title, category, group),
      focusKeyword: fm.focusKeyword ?? node.title,
      related: fm.related.length ? fm.related : autoRelatedIds(category.slug, group.slug, node.slug),
      products: fm.products.length ? fm.products : autoProductIds,
      linkAnchors: fm.linkAnchors.length ? fm.linkAnchors : autoLinkAnchors(node),
      auto: {
        seoTitle: !fm.seoTitle,
        description: !fm.description,
        related: fm.related.length === 0,
        products: autoProductIds.length > 0,
        linkAnchors: fm.linkAnchors.length === 0,
      },
      category,
      group,
      node,
      slug: node.slug,
      href: pagePath(category.slug, group.slug, node.slug),
      body: content,
      file: `content/${file}`,
      wordCount,
      readingMinutes: Math.max(1, Math.round(wordCount / 200)),
    });
  }

  pages.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return { pages, unmapped };
}

let cache: LoadResult | null = null;
function load(): LoadResult {
  if (cache && process.env.NODE_ENV === "production") return cache;
  cache = loadFromDisk();
  return cache;
}

/** Alle Seiten inkl. Entwürfe und geplante – nur für Redaktion & Prüfungen. */
export function getAllPages(): Page[] {
  return load().pages;
}

export function getUnmappedFiles(): string[] {
  return load().unmapped;
}

export function isLive(p: Page, now = new Date()) {
  return p.status === "published" && p.publishedAt.getTime() <= now.getTime();
}

export function isScheduled(p: Page, now = new Date()) {
  return p.status === "published" && p.publishedAt.getTime() > now.getTime();
}

/** Öffentlich sichtbare Seiten */
export function getLivePages(now = new Date()): Page[] {
  return getAllPages().filter((p) => isLive(p, now));
}

export function getLivePage(category: string, group: string, slug: string, now = new Date()) {
  return getLivePages(now).find((p) => p.category.slug === category && p.group.slug === group && p.slug === slug);
}

export function getLivePagesInCategory(category: string, now = new Date()) {
  return getLivePages(now).filter((p) => p.category.slug === category);
}

export function getLivePagesInGroup(category: string, group: string, now = new Date()) {
  return getLivePages(now).filter((p) => p.category.slug === category && p.group.slug === group);
}

/** Set aller live geschalteten IDs – zum schnellen Prüfen in Menüs und Listen. */
export function getLiveIds(now = new Date()) {
  return new Set(getLivePages(now).map((p) => p.id));
}

export function toSummary(p: Page): PageSummary {
  return {
    id: p.id,
    title: p.title,
    description: p.description,
    href: p.href,
    readingMinutes: p.readingMinutes,
    tags: p.tags,
    focusKeyword: p.focusKeyword,
    categoryTitle: p.category.title,
    groupTitle: p.group.title,
    icon: p.category.icon,
    hue: p.category.hue,
    publishedAt: p.publishedAt.toISOString(),
  };
}

export function lastModified(p: Page) {
  return p.updatedAt ?? p.publishedAt;
}
