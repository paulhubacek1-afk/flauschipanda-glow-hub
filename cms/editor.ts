import type { Block } from "payload";
import { BlocksFeature, FixedToolbarFeature, LinkFeature } from "@payloadcms/richtext-lexical";

/**
 * Texteditor (Lexical) – gemeinsam für das Admin und die automatische Umwandlung alter Markdown-Texte.
 *
 *  • Werkzeugleiste oben (Überschriften, fett, Listen, Checklisten, Zitate, Links …)
 *  • Links: extern, auf andere Seiten oder direkt auf ein Affiliate-Produkt
 *  • Block „Tabelle“: Tabellen als einfache Textzeilen (| Spalte | Spalte |)
 */
export const TableBlock: Block = {
  slug: "tabelle",
  labels: { singular: "Tabelle", plural: "Tabellen" },
  fields: [
    {
      name: "markdown",
      label: "Tabelle",
      type: "textarea",
      required: true,
      admin: {
        rows: 8,
        description:
          "Eine Zeile pro Tabellenzeile, Spalten mit | trennen. Zweite Zeile = Trennlinie. Beispiel:\n| Ticket | Preis |\n|---|---|\n| Erwachsene | 67 € |",
      },
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const editorFeatures = ({ defaultFeatures }: { defaultFeatures: any[] }) => [
  ...defaultFeatures.filter((f) => f.key !== "link"),
  LinkFeature({ enabledCollections: ["pages", "affiliates"] }),
  FixedToolbarFeature(),
  BlocksFeature({ blocks: [TableBlock] }),
];
