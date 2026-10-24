/**
 * Online-Rechner pro Seite – zusätzlich zu den im CMS gewählten „Interaktiven Werkzeugen“.
 * (Eigene Datei ohne "use client", damit Server-Komponenten die Liste lesen können.)
 */
export const PATH_WIDGETS: Record<string, string> = {
  "/tools-apps/rechner/spritkosten-rechner": "spritrechner",
  "/tools-apps/rechner/stromkosten-rechner": "stromrechner",
  "/tools-apps/rechner/budget-rechner": "budgetrechner",
  "/tools-apps/rechner/prozentrechner": "prozentrechner",
  "/finanzen-sparen/budget/haushaltsbudget-erstellen": "budgetrechner",
  "/autos-mobilitaet/sparen/guenstig-tanken": "spritrechner",
  "/haushalt-wohnen/sparen-im-haushalt/strom-sparen": "stromrechner",
  "/autos-mobilitaet/kosten-vergleiche/kosten-pro-kilometer": "kostenrechner",
};


export function widgetsFor(href: string, chosen: string[]): string[] {
  const auto = PATH_WIDGETS[href];
  return auto && !chosen.includes(auto) ? [...chosen, auto] : chosen;
}
