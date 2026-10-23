/**
 * Exportiert die komplette Seiten-Hierarchie als STRUKTUR.md (Baumansicht).
 *   npm run struktur
 * Live geschaltete Seiten werden mit ● markiert, geplante mit ○.
 */
import fs from "node:fs";
import path from "node:path";

import { getLiveIds } from "../lib/content";
import { hierarchy, hierarchyStats, pagePath } from "../lib/hierarchy";

const live = getLiveIds();
const stats = hierarchyStats();
const lines: string[] = [
  "# FlauschiPandas – Seiten-Hierarchie",
  "",
  `${stats.categories} Hauptkategorien · ${stats.groups} Unterthemen · ${stats.pages} Landingpages · ${live.size} live`,
  "",
  "Hauptkategorie → Unterthema → Landingpage. ● = live, ○ = geplant. Quelle: `lib/hierarchy.ts`",
  "",
  "Jede Landingpage: Infotext · FAQ · Vergleich · Affiliate-Box · Spendenbox Panda GreenCore",
  "",
  "```",
];

for (const c of hierarchy) {
  lines.push(`${c.number} ${c.title}  (/${c.slug})`);
  c.groups.forEach((g, gi) => {
    const lastGroup = gi === c.groups.length - 1;
    lines.push(`${lastGroup ? "└──" : "├──"} ${g.title}  (/${c.slug}/${g.slug})`);
    g.pages.forEach((p, pi) => {
      const lastPage = pi === g.pages.length - 1;
      const mark = live.has(`${c.slug}/${g.slug}/${p.slug}`) ? "●" : "○";
      lines.push(`${lastGroup ? "    " : "│   "}${lastPage ? "└──" : "├──"} ${mark} ${p.title}  ${pagePath(c.slug, g.slug, p.slug)}`);
    });
  });
  lines.push("");
}
lines.push("```", "");

const out = path.join(process.cwd(), "STRUKTUR.md");
fs.writeFileSync(out, lines.join("\n"));
console.log(`STRUKTUR.md geschrieben: ${stats.pages} Landingpages, davon ${live.size} live.`);
