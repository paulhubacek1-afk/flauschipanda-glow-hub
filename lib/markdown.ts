import { unified, type Plugin } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import { visitParents, SKIP } from "unist-util-visit-parents";
import { toString as hastToString } from "hast-util-to-string";
import type { Root as MdRoot, Link, PhrasingContent, Parent as MdParent, Text } from "mdast";
import type { Root as HastRoot, Element } from "hast";

import { AFFILIATE_REL, getAffiliate } from "./affiliate";
import type { Page } from "./content";
import { MAX_AUTO_LINKS, buildLinkTargets, findFirstMatch, type LinkTarget } from "./linking";

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
  /** Affiliate-IDs, die im Text verwendet werden */
  affiliateIds: string[];
  unknownAffiliateIds: string[];
}

/* ------------------------------------------------------------------ */
/* remark: Affiliate-Links  [Text](aff:produkt-id)                      */
/* ------------------------------------------------------------------ */
interface AffiliateOptions {
  onAffiliate: (id: string) => void;
  onUnknown: (id: string) => void;
}

const remarkAffiliate: Plugin<[AffiliateOptions], MdRoot> = (options) => (tree) => {
  visit(tree, "link", (node: Link) => {
    if (!node.url.startsWith("aff:")) return;
    const id = node.url.slice(4);
    const product = getAffiliate(id);
    if (!product) {
      options.onUnknown(id);
      node.url = "#";
      return;
    }
    node.url = product.url;
    node.title = "Affiliate-Link – wir erhalten ggf. eine Provision";
    node.data = {
      ...node.data,
      hProperties: { rel: AFFILIATE_REL, target: "_blank", "data-affiliate": "true" },
    } as Link["data"];
    options.onAffiliate(id);
  });
};

/* ------------------------------------------------------------------ */
/* remark: externe Links sicher öffnen                                 */
/* ------------------------------------------------------------------ */
const remarkExternalLinks: Plugin<[], MdRoot> = () => (tree) => {
  visit(tree, "link", (node: Link) => {
    if (!/^https?:\/\//.test(node.url)) return;
    const existing = (node.data as { hProperties?: Record<string, unknown> } | undefined)?.hProperties;
    if (existing?.["data-affiliate"]) return;
    node.data = {
      ...node.data,
      hProperties: { ...existing, rel: "noopener noreferrer", target: "_blank" },
    } as Link["data"];
  });
};

/* ------------------------------------------------------------------ */
/* remark: automatische interne Verlinkung                              */
/* ------------------------------------------------------------------ */
interface AutoLinkOptions {
  targets: LinkTarget[];
  max: number;
  onLink: (id: string) => void;
}

const SKIP_ANCESTORS = new Set(["link", "linkReference", "heading", "table", "tableCell", "inlineCode", "code"]);

const remarkAutoLink: Plugin<[AutoLinkOptions], MdRoot> = (options) => (tree) => {
  // Bereits manuell verlinkte Ziele nicht zusätzlich automatisch verlinken.
  const manual = new Set<string>();
  visit(tree, "link", (node: Link) => {
    if (node.url.startsWith("/")) manual.add(node.url.replace(/[#?].*$/, "").replace(/\/$/, ""));
  });

  let remaining = options.targets.filter((t) => !manual.has(t.href));
  const usedParagraphs = new Set<unknown>();
  let count = 0;

  visitParents(tree, "text", (node: Text, ancestors) => {
    if (count >= options.max || remaining.length === 0) return;
    if (ancestors.some((a) => SKIP_ANCESTORS.has(a.type))) return;

    const paragraph = [...ancestors].reverse().find((a) => a.type === "paragraph");
    if (!paragraph || usedParagraphs.has(paragraph)) return;

    const match = findFirstMatch(node.value, remaining);
    if (!match) return;

    const parent = ancestors[ancestors.length - 1] as MdParent;
    const index = parent.children.indexOf(node);
    if (index < 0) return;

    const before = node.value.slice(0, match.index);
    const after = node.value.slice(match.index + match.length);
    const link: Link = {
      type: "link",
      url: match.target.href,
      title: match.target.title,
      children: [{ type: "text", value: match.text }],
      data: { hProperties: { "data-autolink": "true" } } as Link["data"],
    };

    const replacement: PhrasingContent[] = [];
    if (before) replacement.push({ type: "text", value: before });
    replacement.push(link);
    if (after) replacement.push({ type: "text", value: after });

    (parent.children as PhrasingContent[]).splice(index, 1, ...replacement);

    usedParagraphs.add(paragraph);
    count += 1;
    remaining = remaining.filter((t) => t.id !== match.target.id);
    options.onLink(match.target.id);

    return [SKIP, index + replacement.length];
  });
};

/* ------------------------------------------------------------------ */
/* rehype: Überschriften für das Inhaltsverzeichnis einsammeln           */
/* ------------------------------------------------------------------ */
const rehypeCollectHeadings: Plugin<[TocHeading[]], HastRoot> = (out) => (tree) => {
  visit(tree, "element", (node: Element) => {
    if (node.tagName !== "h2" && node.tagName !== "h3") return;
    const id = node.properties?.id;
    if (typeof id !== "string") return;
    out.push({ id, text: hastToString(node), level: node.tagName === "h2" ? 2 : 3 });
  });
};

/* ------------------------------------------------------------------ */

export async function renderPage(
  page: Page,
  linkCandidates: Page[],
  opts: { autoLink?: boolean } = {},
): Promise<RenderedPage> {
  const headings: TocHeading[] = [];
  const autoLinked: string[] = [];
  const affiliateIds: string[] = [];
  const unknownAffiliateIds: string[] = [];

  const targets = opts.autoLink === false ? [] : buildLinkTargets(page, linkCandidates);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkAffiliate, {
      onAffiliate: (id) => affiliateIds.push(id),
      onUnknown: (id) => unknownAffiliateIds.push(id),
    })
    .use(remarkExternalLinks)
    .use(remarkAutoLink, { targets, max: MAX_AUTO_LINKS, onLink: (id) => autoLinked.push(id) })
    // Rohes HTML im Markdown wird bewusst NICHT übernommen (Sicherheit).
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeCollectHeadings, headings)
    .use(rehypeStringify)
    .process(page.body);

  return {
    html: String(file),
    headings,
    autoLinked,
    affiliateIds: Array.from(new Set(affiliateIds)),
    unknownAffiliateIds,
  };
}
