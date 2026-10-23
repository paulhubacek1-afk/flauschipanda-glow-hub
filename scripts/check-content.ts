/**
 * Automatische SEO- & Qualitätsprüfung vor der Veröffentlichung.
 *
 *   npm run check:content     → normale Prüfung (läuft auch vor jedem Build)
 *   npm run check:release     → strenge Freigabe: ausstehende Faktenprüfung, fehlende Quellen,
 *                                Platzhalter-Affiliate-Links und fehlende Spendenangaben blockieren
 *
 * Auf Vercel-Produktion (VERCEL_ENV=production) oder mit CONTENT_STRICT=1 ist der strenge Modus aktiv.
 */
import { ContentError } from "../lib/content";
import { runAudit, type Issue, type IssueLevel } from "../lib/seo-audit";

const strict =
  process.argv.includes("--strict") || process.env.CONTENT_STRICT === "1" || process.env.VERCEL_ENV === "production";

const c = { error: "\x1b[31m", warning: "\x1b[33m", info: "\x1b[36m", dim: "\x1b[2m", bold: "\x1b[1m", reset: "\x1b[0m" };
const icon: Record<IssueLevel, string> = { error: "✖", warning: "▲", info: "•" };
const line = (i: Issue) => `     ${c[i.level]}${icon[i.level]} ${i.message}${c.reset} ${c.dim}(${i.code})${c.reset}`;

async function main() {
  const report = await runAudit({ strict });

  console.log(`\n${c.bold}🐼 FlauschiPandas · Content-Prüfung${strict ? " (Release-Modus)" : ""}${c.reset}\n`);

  if (report.global.length) {
    console.log(`  ${c.bold}Allgemein${c.reset}`);
    report.global.forEach((i) => console.log(line(i)));
    console.log("");
  }

  for (const p of report.pages) {
    const head = `${p.id} ${c.dim}[${p.state} · Score ${p.score} · ${p.inboundLinks} eingehende Links]${c.reset}`;
    console.log(`  ${p.issues.length ? " " : "✔"} ${head}`);
    p.issues.filter((i) => i.level !== "info").forEach((i) => console.log(line(i)));
  }

  console.log(`\n  ${c.bold}Abdeckung der Seiten-Hierarchie${c.reset}`);
  for (const row of report.coverage) {
    console.log(`     ${row.title.padEnd(24)} ${String(row.live).padStart(3)} live · ${String(row.inWork).padStart(2)} in Arbeit · ${row.planned} geplant`);
  }

  const { error, warning, info } = report.totals;
  console.log(`\n  ${c.error}${error} Fehler${c.reset} · ${c.warning}${warning} Warnungen${c.reset} · ${c.info}${info} Hinweise${c.reset} ${c.dim}(Hinweise im Redaktions-Cockpit)${c.reset}\n`);

  if (error > 0) {
    console.log(`${c.error}Veröffentlichung blockiert – bitte Fehler beheben.${c.reset}\n`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err instanceof ContentError ? `\n${c.error}${err.message}${c.reset}\n` : err);
  process.exit(1);
});
