import { LinkHTMLConverter, type HTMLConvertersFunction } from "@payloadcms/richtext-lexical/html";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Doc = Record<string, any>;

const tableProcessor = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify);

/** Markdown-Tabelle (Block „Tabelle“) → HTML. Rohes HTML wird dabei nicht übernommen. */
export function markdownTableToHtml(md: string) {
  return String(tableProcessor.processSync(md ?? ""));
}

/**
 * Lexical → HTML.
 * Interne Links (auf Seiten oder Affiliate-Produkte) werden zunächst als Platzhalter
 * „cms:<sammlung>:<id>“ ausgegeben und beim Rendern aufgelöst (lib/markdown.ts).
 */
export const htmlConverters: HTMLConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkHTMLConverter({
    internalDocToHref: ({ linkNode }) => {
      const doc = linkNode.fields.doc;
      if (!doc) return "#";
      const id = doc.value && typeof doc.value === "object" ? (doc.value as Doc).id : doc.value;
      return `cms:${doc.relationTo}:${id}`;
    },
  }),
  blocks: {
    ...((defaultConverters as Doc).blocks ?? {}),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tabelle: ({ node }: any) => markdownTableToHtml(String(node?.fields?.markdown ?? "")),
  },
});
