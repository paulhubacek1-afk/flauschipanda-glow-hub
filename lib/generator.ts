import fs from "node:fs";
import path from "node:path";

import { getAffiliate } from "./affiliate";
import { autoDescription, autoLinkAnchors, autoProducts, autoRelatedIds, autoSeoTitle, findPageNodes } from "./auto";
import { CONTENT_DIR } from "./content";
import { allPageNodes, pagePath } from "./hierarchy";
import { donationConfig } from "./site";

/**
 * Seiten-Generator: Titel eingeben → fertiger Entwurf mit allen automatischen Bausteinen.
 * Genutzt von `npm run neu -- "Gesundes Hundefutter"` und vom Formular unter /redaktion/neu.
 *
 * Der Entwurf wird mit `status: draft` angelegt. Er ist also NICHT öffentlich, bis
 * jemand den Text geschrieben, die Fakten geprüft und `status: published` gesetzt hat.
 * Bestehende Dateien werden nie überschrieben – mehrfaches Ausführen ist gefahrlos.
 */

type Node = ReturnType<typeof allPageNodes>[number];

export interface DraftPreview {
  id: string;
  href: string;
  file: string;
  exists: boolean;
  title: string;
  categoryTitle: string;
  groupTitle: string;
  seoTitle: string;
  description: string;
  focusKeyword: string;
  linkAnchors: string[];
  related: { id: string; title: string }[];
  products: { id: string; name: string; placeholder: boolean }[];
  donation: { name: string; hasUrl: boolean; hasPurpose: boolean };
  markdown: string;
}

const outlines: Record<string, string[]> = {
  tiere: ["Worauf es ankommt", "So erkennst du gute Qualität", "Häufige Fehler", "Fazit"],
  zoos: ["Das Wichtigste vorab", "Anreise und Öffnungszeiten", "Tipps für deinen Besuch", "Fazit"],
  freizeitparks: ["Das Wichtigste vorab", "Anreise und Öffnungszeiten", "Tipps für deinen Besuch", "Fazit"],
  "urlaub-reisen": ["Das Wichtigste vorab", "Planung Schritt für Schritt", "Tipps und Checkliste", "Fazit"],
  ki: ["So funktioniert es", "Schritt für Schritt", "Beispiele zum Kopieren", "Fazit"],
  "tools-apps": ["Die wichtigsten Optionen", "Worauf du bei der Auswahl achten solltest", "Kostenlose Alternativen", "Fazit"],
  "gesundheit-wohlbefinden": ["Das Wichtigste in Kürze", "Praktische Tipps für den Alltag", "Wann du ärztlichen Rat holen solltest", "Fazit"],
};
const defaultOutline = ["Das Wichtigste in Kürze", "Worauf du achten solltest", "Praktische Tipps", "Fazit"];

const yaml = (v: unknown) => JSON.stringify(v); // JSON-Strings und -Arrays sind gültiges YAML

function buildMarkdown(n: Node, d: Omit<DraftPreview, "markdown">, now: Date) {
  const outline = outlines[n.category.slug] ?? defaultOutline;
  return `---
# Automatisch erzeugt am ${now.toISOString().slice(0, 10)} – Entwurf, NICHT öffentlich.
# Vor der Veröffentlichung: Text schreiben, FAQ/Vergleich ergänzen, Fakten prüfen, status auf "published" setzen.
seoTitle: ${yaml(d.seoTitle)}
description: ${yaml(d.description)}
status: draft
publishedAt: ${now.toISOString()}
focusKeyword: ${yaml(d.focusKeyword)}
keywords: []
linkAnchors: ${yaml(d.linkAnchors)}
tags: ${yaml([n.category.slug, n.group.slug])}
related: ${yaml(d.related.map((r) => r.id))}
products: ${yaml(d.products.map((p) => p.id))}
donation: true
faq:
  - q: "TODO: Häufige Frage 1 zu ${d.title}?"
    a: "TODO: Kurze, belegte Antwort."
  - q: "TODO: Häufige Frage 2?"
    a: "TODO: Kurze, belegte Antwort."
# Vergleichstabelle – einkommentieren und ausfüllen:
# comparison:
#   title: "TODO: Vergleich"
#   columns: ["Option A", "Option B"]
#   rows:
#     - label: "Kriterium"
#       values: ["…", "…"]
sources: []
factCheck:
  required: true
  status: ausstehend
---

**${d.title}** – TODO: Einleitung in zwei bis drei Sätzen. Den Hauptsuchbegriff hier natürlich verwenden und sagen, welche Frage die Seite beantwortet.

${outline.map((h) => `## ${h}\n\nTODO`).join("\n\n")}
`;
}

export function previewDraft(n: Node, now = new Date()): DraftPreview {
  const relatedIds = autoRelatedIds(n.category.slug, n.group.slug, n.page.slug);
  const nodes = allPageNodes();
  const file = path.join(CONTENT_DIR, n.category.slug, n.group.slug, `${n.page.slug}.md`);
  const base: Omit<DraftPreview, "markdown"> = {
    id: n.id,
    href: pagePath(n.category.slug, n.group.slug, n.page.slug),
    file: path.relative(process.cwd(), file),
    exists: fs.existsSync(file),
    title: n.page.title,
    categoryTitle: n.category.title,
    groupTitle: n.group.title,
    seoTitle: autoSeoTitle(n.page.title, n.category),
    description: autoDescription(n.page.title, n.category, n.group),
    focusKeyword: n.page.title,
    linkAnchors: autoLinkAnchors(n.page),
    related: relatedIds.map((id) => ({ id, title: nodes.find((x) => x.id === id)?.page.title ?? id })),
    products: autoProducts(n.category.slug, n.group.slug).map((id) => {
      const p = getAffiliate(id)!;
      return { id, name: p.name, placeholder: Boolean(p.placeholder) };
    }),
    donation: { name: donationConfig.name, hasUrl: Boolean(donationConfig.url), hasPurpose: Boolean(donationConfig.purpose) },
  };
  return { ...base, markdown: buildMarkdown(n, base, now) };
}

export type CreateResult =
  | { ok: true; preview: DraftPreview }
  | { ok: false; reason: "not-found" | "ambiguous" | "exists"; matches: { id: string; title: string }[]; preview?: DraftPreview };

/** Sucht die Seite in der Hierarchie und legt den Entwurf an (nie überschreibend). */
export function createDraft(query: string): CreateResult {
  const matches = findPageNodes(query);
  const list = matches.map((m) => ({ id: m.id, title: m.page.title }));
  if (matches.length === 0) return { ok: false, reason: "not-found", matches: [] };
  if (matches.length > 1) return { ok: false, reason: "ambiguous", matches: list };

  const preview = previewDraft(matches[0]);
  if (preview.exists) return { ok: false, reason: "exists", matches: list, preview };

  const abs = path.join(process.cwd(), preview.file);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, preview.markdown, { flag: "wx" });
  return { ok: true, preview };
}
