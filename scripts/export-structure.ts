/**
 * Exportiert den Strukturplan (lib/hierarchy.ts = Startstruktur für den CMS-Import) als STRUKTUR.md.
 *   npm run struktur
 * ● = Inhalt vorhanden (content/…md) · ○ = geplant · 💰 Money Page · 📈 Traffic Page
 * Hinweis: Nach dem Import ist das CMS die maßgebliche Quelle (Admin → Seiten).
 */
import fs from "node:fs";
import path from "node:path";

import { hierarchy, hierarchyStats, pagePath } from "../lib/hierarchy";
import { pageTypeFor } from "../lib/page-types";

const stats = hierarchyStats();
const hasContent = (id: string) => fs.existsSync(path.join(process.cwd(), "content", `${id}.md`));
const marker = (id: string) => ({ money: " 💰", traffic: " 📈", standard: "" })[pageTypeFor(id)];

let withContent = 0;
const lines: string[] = [];
for (const c of hierarchy) {
  lines.push(`${c.number} ${c.title}  (/${c.slug})`);
  c.groups.forEach((g, gi) => {
    const lg = gi === c.groups.length - 1;
    lines.push(`${lg ? "└──" : "├──"} ${g.title}  (/${c.slug}/${g.slug})`);
    g.pages.forEach((p, pi) => {
      const id = `${c.slug}/${g.slug}/${p.slug}`;
      const done = hasContent(id);
      if (done) withContent++;
      lines.push(`${lg ? "    " : "│   "}${pi === g.pages.length - 1 ? "└──" : "├──"} ${done ? "●" : "○"} ${p.title}${marker(id)}  ${pagePath(c.slug, g.slug, p.slug)}`);
    });
  });
  lines.push("");
}

const out = [
  "# Panda Toolbox (FlauschiPandas) – Seiten-Hierarchie",
  "",
  `${stats.categories} Hauptkategorien · ${stats.groups} Unterthemen · ${stats.pages} Landingpages · ${withContent} mit Inhalt`,
  "",
  "Hauptkategorie → Unterthema → Landingpage. ● = Inhalt vorhanden, ○ = geplant · 💰 Money Page · 📈 Traffic Page",
  "",
  "Startstruktur für den CMS-Import (`npm run seed`). Danach wird alles im Admin unter /admin gepflegt.",
  "",
  "```",
  ...lines,
  "```",
  "",
].join("\n");

fs.writeFileSync(path.join(process.cwd(), "STRUKTUR.md"), out);
console.log(`STRUKTUR.md geschrieben: ${stats.pages} Landingpages, davon ${withContent} mit Inhalt.`);
