import { unified, type Plugin } from "unified";
import rehypeParse from "rehype-parse";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import { visitParents, SKIP } from "unist-util-visit-parents";
import { toString as hastToString } from "hast-util-to-string";
import type { Root as HastRoot, Element, ElementContent, Parent as HastParent, Text as HastText } from "hast";

import { AFFILIATE_REL } from "./affiliate";
import type { AffiliateItem, Page } from "./cms";
import { MAX_AUTO_LINKS, buildLinkTargets, findFirstMatch, type LinkTarget } from "./linking";

/**
 * Infotext → HTML.
 * Zwei Quellen: Rich-Text aus dem CMS (bereits HTML) oder importiertes Markdown.
 * Beide laufen durch dieselben Schritte auf HTML-Ebene:
 *   Affiliate-Links (aff:kennung) · externe Links absichern · automatische interne Verlinkung ·
 *   Anker für Überschriften · Inhaltsverzeichnis einsammeln
 */

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface RenderedPage {
  html: string;
  headings: TocHeading[];
  /** IDs der Seiten, auf die automatisch verlinkt wurde */
  autoLinked: string[];
  /** Affiliate-Kennungen, die im Text verlinkt sind */
  affiliateIds: string[];
}

type AffiliateLookup = (key: string) => AffiliateItem | undefined;

const isElement = (n: unknown): n is Element => (n as Element)?.type === "element";

/* ------------------------------------------------------------------ */
/* Links: Affiliate (aff:kennung), externe Links, manuelle interne Links */
/* ------------------------------------------------------------------ */
interface LinkOptions {
  lookup: AffiliateLookup;
  /** Datenbank-ID einer Seite → aktuelle URL (nur live geschaltete Seiten) */
  pageHref: (dbId: string) => string | undefined;
  onAffiliate: (key: string) => void;
  manualInternal: Set<string>;
}

const rehypeLinks: Plugin<[LinkOptions], HastRoot> = (opts) => (tree) => {
  visit(tree, "element", (node: Element, index, parent) => {
    if (node.tagName !== "a") return;
    const href = String(node.properties?.href ?? "");

    // Link entfernen, Text behalten (z. B. Ziel noch nicht live oder Partnerlink nicht freigegeben)
    const unwrap = () => {
      if (!parent || typeof index !== "number") return false;
      (parent as HastParent).children.splice(index, 1, ...(node.children as ElementContent[]));
      return true;
    };

    // Link aus dem Texteditor auf eine andere Seite
    if (href.startsWith("cms:pages:")) {
      const target = opts.pageHref(href.slice("cms:pages:".length));
      if (!target) return unwrap() ? [SKIP, index!] : undefined; // Zielseite (noch) nicht live → nur Text
      node.properties = { href: target };
      opts.manualInternal.add(target);
      return;
    }

    // Affiliate-Link: aus dem Editor (cms:affiliates:<id>) oder im Text (aff:kennung)
    if (href.startsWith("aff:") || href.startsWith("cms:affiliates:")) {
      const key = href.startsWith("aff:") ? href.slice(4) : `#${href.slice("cms:affiliates:".length)}`;
      const product = opts.lookup(key);
      // Unbekannter, inaktiver oder Platzhalter-Partnerlink: nur den Text zeigen
      if (!product) return unwrap() ? [SKIP, index!] : undefined;
      {
        node.properties = {
          href: product.url,
          rel: AFFILIATE_REL.split(" "),
          target: "_blank",
          title: "Affiliate-Link – wir erhalten ggf. eine Provision",
          dataAffiliate: "true",
        };
        opts.onAffiliate(key);
      }
      return;
    }
    // Sicherheit: nur bekannte, harmlose Link-Arten zulassen (kein javascript:, data:, vbscript: …)
    if (!/^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(href)) return unwrap() ? [SKIP, index!] : undefined;
    if (/^https?:\/\//.test(href)) {
      node.properties = { ...node.properties, rel: ["noopener", "noreferrer"], target: "_blank" };
      return;
    }
    if (href.startsWith("/")) opts.manualInternal.add(href.replace(/[#?].*$/, "").replace(/\/$/, ""));
  });
};

/* ------------------------------------------------------------------ */
/* Automatische interne Verlinkung                                      */
/* ------------------------------------------------------------------ */
interface AutoLinkOptions {
  targets: LinkTarget[];
  max: number;
  manualInternal: Set<string>;
  onLink: (id: string) => void;
}

const SKIP_TAGS = new Set(["a", "h1", "h2", "h3", "h4", "h5", "h6", "code", "pre", "table", "script", "style", "button"]);
const BLOCK_TAGS = new Set(["p", "li"]);

const rehypeAutoLink: Plugin<[AutoLinkOptions], HastRoot> = (opts) => (tree) => {
  let remaining = opts.targets.filter((t) => !opts.manualInternal.has(t.href));
  const usedBlocks = new Set<Element>();
  let count = 0;

  visitParents(tree, "text", (node: HastText, ancestors) => {
    if (count >= opts.max || remaining.length === 0) return;
    if (ancestors.some((a) => isElement(a) && SKIP_TAGS.has(a.tagName))) return;
    const block = [...ancestors].reverse().find((a): a is Element => isElement(a) && BLOCK_TAGS.has(a.tagName));
    if (!block || usedBlocks.has(block)) return;

    const match = findFirstMatch(node.value, remaining);
    if (!match) return;

    const parent = ancestors[ancestors.length - 1] as HastParent;
    const index = parent.children.indexOf(node);
    if (index < 0) return;

    const before = node.value.slice(0, match.index);
    const after = node.value.slice(match.index + match.length);
    const link: Element = {
      type: "element",
      tagName: "a",
      properties: { href: match.target.href, title: match.target.title, dataAutolink: "true" },
      children: [{ type: "text", value: match.text }],
    };
    const replacement: ElementContent[] = [];
    if (before) replacement.push({ type: "text", value: before });
    replacement.push(link);
    if (after) replacement.push({ type: "text", value: after });
    parent.children.splice(index, 1, ...replacement);

    usedBlocks.add(block);
    count += 1;
    remaining = remaining.filter((t) => t.id !== match.target.id);
    opts.onLink(match.target.id);
    return [SKIP, index + replacement.length];
  });
};

/* ------------------------------------------------------------------ */
/* Überschriften: H1 im Text zu H2 machen (der Seitentitel ist die H1)  */
/* und fürs Inhaltsverzeichnis einsammeln                               */
/* ------------------------------------------------------------------ */
const rehypeDemoteH1: Plugin<[], HastRoot> = () => (tree) => {
  visit(tree, "element", (node: Element) => {
    if (node.tagName === "h1") node.tagName = "h2";
  });
};

const rehypeCollectHeadings: Plugin<[TocHeading[]], HastRoot> = (out) => (tree) => {
  visit(tree, "element", (node: Element) => {
    if (node.tagName !== "h2" && node.tagName !== "h3") return;
    const id = node.properties?.id;
    if (typeof id !== "string") return;
    out.push({ id, text: hastToString(node), level: node.tagName === "h2" ? 2 : 3 });
  });
};

/* ------------------------------------------------------------------ */

/** Rich-Text-HTML oder Markdown in einen HTML-Syntaxbaum umwandeln. */
async function toHast(page: Page): Promise<HastRoot> {
  if (page.contentHtml) return unified().use(rehypeParse, { fragment: true }).parse(page.contentHtml) as HastRoot;
  // Rohes HTML im Markdown wird bewusst NICHT übernommen (Sicherheit).
  const md = unified().use(remarkParse).use(remarkGfm).use(remarkRehype);
  return (await md.run(md.parse(page.body))) as HastRoot;
}

export async function renderPage(
  page: Page,
  linkCandidates: Page[],
  opts: { lookup?: AffiliateLookup; autoLink?: boolean } = {},
): Promise<RenderedPage> {
  const headings: TocHeading[] = [];
  const autoLinked: string[] = [];
  const affiliateIds: string[] = [];
  const manualInternal = new Set<string>();
  const hrefByDbId = new Map(linkCandidates.map((p) => [String(p.dbId), p.href]));
  const pageHref = (dbId: string) => hrefByDbId.get(dbId);
  const lookup: AffiliateLookup = opts.lookup ?? (() => undefined);
  const targets = opts.autoLink === false ? [] : buildLinkTargets(page, linkCandidates);

  const processor = unified()
    .use(rehypeDemoteH1)
    .use(rehypeLinks, { lookup, pageHref, onAffiliate: (k) => affiliateIds.push(k), manualInternal })
    .use(rehypeAutoLink, { targets, max: MAX_AUTO_LINKS, manualInternal, onLink: (id) => autoLinked.push(id) })
    .use(rehypeSlug)
    .use(rehypeCollectHeadings, headings)
    .use(rehypeStringify);

  const tree = (await processor.run(await toHast(page))) as HastRoot;
  const html = processor.stringify(tree);

  return { html: String(html), headings, autoLinked, affiliateIds: Array.from(new Set(affiliateIds)) };
}
