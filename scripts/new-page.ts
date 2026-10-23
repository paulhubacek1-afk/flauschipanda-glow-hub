/**
 * Neue Landingpage aus einem Titel erzeugen:
 *
 *   npm run neu -- "Gesundes Hundefutter"
 *   npm run neu -- tiere/hunde/welpenfutter
 *
 * Erzeugt automatisch: SEO-Titel, Meta-Beschreibung, Ankertexte, verwandte Seiten,
 * passende Affiliate-Box und Spendenbox Panda GreenCore – als Entwurf (status: draft).
 */
import { createDraft } from "../lib/generator";

const c = { green: "\x1b[32m", yellow: "\x1b[33m", red: "\x1b[31m", cyan: "\x1b[36m", dim: "\x1b[2m", bold: "\x1b[1m", reset: "\x1b[0m" };
const query = process.argv.slice(2).join(" ").trim();

if (!query) {
  console.log(`\nAufruf: ${c.cyan}npm run neu -- "Gesundes Hundefutter"${c.reset}\n`);
  process.exit(1);
}

const result = createDraft(query);

if (!result.ok) {
  if (result.reason === "not-found") {
    console.log(`\n${c.red}„${query}“ gibt es noch nicht in der Seiten-Hierarchie.${c.reset}`);
    console.log(`Füge die Seite zuerst in ${c.cyan}lib/hierarchy.ts${c.reset} beim passenden Unterthema ein (eine Zeile), dann erneut ausführen.\n`);
  } else if (result.reason === "ambiguous") {
    console.log(`\n${c.yellow}Mehrere Treffer – bitte genauer angeben (Titel oder ID):${c.reset}`);
    result.matches.forEach((m) => console.log(`  • ${m.title}  ${c.dim}${m.id}${c.reset}`));
    console.log("");
  } else {
    console.log(`\n${c.yellow}Die Seite existiert bereits:${c.reset} ${result.preview?.file} – es wurde nichts überschrieben.\n`);
  }
  process.exit(1);
}

const p = result.preview;
console.log(`\n${c.green}✔ Entwurf angelegt:${c.reset} ${p.file}`);
console.log(`  ${c.dim}${p.categoryTitle} › ${p.groupTitle} › ${p.href}${c.reset}\n`);
console.log(`  ${c.bold}SEO-Titel${c.reset}         ${p.seoTitle} ${c.dim}(${p.seoTitle.length} Zeichen)${c.reset}`);
console.log(`  ${c.bold}Meta-Beschreibung${c.reset} ${p.description} ${c.dim}(${p.description.length} Zeichen)${c.reset}`);
console.log(`  ${c.bold}Verwandte Seiten${c.reset}  ${p.related.map((r) => r.title).join(" · ") || "–"}`);
console.log(`  ${c.bold}Affiliate-Box${c.reset}     ${p.products.map((x) => x.name + (x.placeholder ? " (Platzhalter)" : "")).join(" · ") || "– keine passenden Produkte im Register"}`);
console.log(`  ${c.bold}Spendenbox${c.reset}        ${p.donation.name}${p.donation.hasUrl && p.donation.hasPurpose ? "" : `${c.yellow} – Link/Zweck noch in lib/site.ts eintragen${c.reset}`}`);
console.log(`  ${c.bold}GreenCore-Hinweis${c.reset} aktiv\n`);
console.log(`${c.dim}Nächste Schritte: Text schreiben, FAQ und Vergleich ergänzen, Quellen eintragen, dann status: published.${c.reset}\n`);
