import { allPageNodes } from "../../lib/hierarchy";
import { createProsCons } from "../../lib/editorial";
import type { FillPage } from "../types";

type GuideContext = {
  intro: string;
  checks: string[];
  steps: string[];
  pitfalls: string[];
  sources?: { title: string; url: string }[];
};

const VET = { title: "Deutscher Tierschutzbund – Haustiere", url: "https://www.tierschutzbund.de/" };
const KIDS = { title: "Kindergesundheit-info – Informationen für Familien", url: "https://www.kindergesundheit-info.de/" };
const SAFER = { title: "Saferinternet.at – Medienkompetenz", url: "https://www.saferinternet.at/" };
const HEALTH = { title: "Gesundheit.gv.at – Öffentliches Gesundheitsportal Österreichs", url: "https://www.gesundheit.gv.at/" };
const AK = { title: "Arbeiterkammer Österreich – Konsumentenschutz", url: "https://www.arbeiterkammer.at/" };
const VZ = { title: "Verbraucherzentrale – Ratgeber", url: "https://www.verbraucherzentrale.de/" };
const UBA = { title: "Umweltbundesamt – Umwelttipps", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag" };
const OPENAI = { title: "OpenAI – Hilfe und Produktinformationen", url: "https://help.openai.com/" };
const YOUTUBE = { title: "YouTube-Hilfe – Creator", url: "https://support.google.com/youtube/" };
const BMEIA = { title: "BMEIA – Reiseinformationen Österreich", url: "https://www.bmeia.gv.at/reise-services/reiseinformation" };
const OEAMTC = { title: "ÖAMTC – Auto und Mobilität", url: "https://www.oeamtc.at/" };

function contextFor(category: string, group: string, title: string): GuideContext {
  if (category === "tiere") return {
    intro: "Bei Tier-Themen stehen die Bedürfnisse des jeweiligen Tieres im Mittelpunkt. Rasse, Art, Alter, Gesundheit und Lebensumfeld können die passende Lösung deutlich verändern.",
    checks: ["Welche Tierart und Lebensphase sind gemeint?", "Welche Haltungs-, Pflege- oder Sicherheitsanforderungen gelten?", "Welche Angaben stammen von anerkannten Fachstellen oder einer Tierarztpraxis?", "Welche laufenden Kosten und welcher Zeitaufwand entstehen?"],
    steps: ["Ausgangslage und Bedürfnisse konkret notieren.", "Informationen aus mehreren seriösen Fachquellen vergleichen.", "Bei Gesundheit, Verhalten oder Haltung mit einer qualifizierten Fachperson Rücksprache halten.", "Erst danach eine Lösung auswählen und regelmäßig überprüfen."],
    pitfalls: ["Ein Produkt oder eine Haltung nur nach dem Preis auswählen.", "Allgemeine Tipps ungeprüft auf jedes Tier übertragen.", "Veränderungen bei Verhalten oder Gesundheit ignorieren."],
    sources: [VET],
  };
  if (category === "babys-kinder") return {
    intro: "Bei Themen rund um Babys und Kinder zählen Alter, Entwicklungsstand, Alltag und Sicherheit. Eine gute Vorbereitung hilft, ersetzt aber keine individuelle Beratung.",
    checks: ["Für welches Alter beziehungsweise welche Entwicklungsphase ist die Information gedacht?", "Welche Sicherheits- und Kennzeichnungshinweise gibt es?", "Lässt sich die Empfehlung an den Familienalltag anpassen?", "Welche Fragen sollten mit einer Fachperson geklärt werden?"],
    steps: ["Bedarf und Rahmenbedingungen aufschreiben.", "Aktuelle Empfehlungen aus anerkannten Stellen vergleichen.", "Sicherheitsangaben und Altersfreigaben prüfen.", "Die Lösung im Alltag beobachten und bei Bedarf anpassen."],
    pitfalls: ["Altersangaben oder Warnhinweise übersehen.", "Zu viele Produkte anschaffen, bevor der tatsächliche Bedarf klar ist.", "Eine allgemeine Empfehlung als starre Regel verstehen."],
    sources: [KIDS, SAFER],
  };
  if (category === "gesundheit-wohlbefinden") return {
    intro: "Gesundheitliche und persönliche Bedürfnisse sind individuell. Dieser Ratgeber bietet eine verständliche Orientierung und zeigt, welche Punkte du selbst prüfen oder fachlich abklären kannst.",
    checks: ["Geht es um allgemeine Information oder eine persönliche Beschwerde?", "Welche Angaben sind durch verlässliche Gesundheitsquellen gestützt?", "Welche Grenzen und möglichen Risiken werden genannt?", "Wann ist professionelle Beratung sinnvoll?"],
    steps: ["Die konkrete Frage und den eigenen Informationsbedarf festhalten.", "Informationen aus öffentlichen Gesundheitsportalen heranziehen.", "Wichtige Fragen für ein Gespräch mit einer Fachperson notieren.", "Keine Behandlung allein aufgrund eines allgemeinen Online-Artikels beginnen oder ändern."],
    pitfalls: ["Einzelne Erfahrungsberichte als allgemeingültigen Beleg werten.", "Warnzeichen oder individuelle Risiken übergehen.", "Allgemeine Inhalte mit einer persönlichen Diagnose verwechseln."],
    sources: [HEALTH],
  };
  if (category === "finanzen-sparen") return {
    intro: "Bei Geld- und Vertragsthemen lohnt sich ein genauer Blick auf Gesamtkosten, Bedingungen und Laufzeiten. Ein niedriger Einstiegspreis ist nicht automatisch das günstigste Gesamtangebot.",
    checks: ["Welche Kosten fallen einmalig und laufend an?", "Welche Laufzeiten, Gebühren oder Kündigungsbedingungen gelten?", "Welche Angaben sind aktuell und für Österreich relevant?", "Welche Risiken oder Einschränkungen stehen im Kleingedruckten?"],
    steps: ["Ziel und verfügbares Budget festlegen.", "Mehrere Angebote anhand derselben Kriterien vergleichen.", "Vertragsbedingungen und Gesamtkosten prüfen.", "Entscheidung und wichtige Fristen schriftlich festhalten."],
    pitfalls: ["Nur den Werbepreis vergleichen.", "Gebühren, Laufzeiten oder automatische Verlängerungen übersehen.", "Eine allgemeine Information als persönliche Finanz- oder Steuerberatung verstehen."],
    sources: [AK, VZ],
  };
  if (category === "ki") return {
    intro: "KI-Werkzeuge können bei Texten, Ideen und wiederkehrenden Aufgaben unterstützen. Ergebnisse müssen aber geprüft werden: Systeme können überzeugend klingende Fehler oder veraltete Angaben liefern.",
    checks: ["Welche Aufgabe soll das Werkzeug konkret lösen?", "Wie werden Eingaben und persönliche Daten verarbeitet?", "Welche Nutzungsgrenzen und Kosten gelten?", "Wie lassen sich Ergebnisse kontrollieren und exportieren?"],
    steps: ["Eine klar abgegrenzte Aufgabe auswählen.", "Mit unverfänglichen Beispieldaten testen.", "Antworten anhand verlässlicher Quellen prüfen.", "Nur hilfreiche Ergebnisse übernehmen und sensible Daten schützen."],
    pitfalls: ["KI-Antworten ungeprüft veröffentlichen.", "Vertrauliche Informationen in ungeeignete Dienste eingeben.", "Kosten, Nutzungsrechte oder Datenschutzbedingungen übersehen."],
    sources: [OPENAI],
  };
  if (category === "tools-apps" || category === "pc-und-hardware") return {
    intro: "Bei Tools, Apps und Technik zählt nicht die längste Funktionsliste, sondern ob das Werkzeug zu Aufgabe, Gerät und Arbeitsweise passt.",
    checks: ["Welche Funktionen werden wirklich benötigt?", "Mit welchen Geräten und Dateiformaten ist das Produkt kompatibel?", "Welche Kosten und Grenzen hat die kostenlose Version?", "Wie sind Datenschutz, Export und Support geregelt?"],
    steps: ["Anforderungen in eine kurze Checkliste schreiben.", "Zwei bis drei passende Lösungen gegenüberstellen.", "Eine Testversion mit einem echten, aber unkritischen Beispiel ausprobieren.", "Erst nach Kompatibilitäts- und Kostencheck entscheiden."],
    pitfalls: ["Nur auf Werbung oder Sternebewertungen vertrauen.", "Abos und automatische Verlängerungen übersehen.", "Kompatibilität und Datenexport nicht vorab testen."],
    sources: [VZ],
  };
  if (category === "creator" || category === "musik-entertainment") return {
    intro: "Für Creator und Musikprojekte hilft ein klarer Ablauf: Ziel, Zielgruppe und verfügbare Zeit sollten vor der Wahl eines Werkzeugs oder Formats feststehen.",
    checks: ["Welches Ziel soll das Projekt erreichen?", "Welche Zeit und welches Equipment stehen zur Verfügung?", "Welche Plattformregeln und Nutzungsrechte sind relevant?", "Wie wird Qualität vor Veröffentlichung geprüft?"],
    steps: ["Ziel und Zielgruppe beschreiben.", "Eine kleine, realistische Umsetzung planen.", "Material, Musik und Bilder auf Nutzungsrechte prüfen.", "Ergebnis testen und anhand konkreter Rückmeldungen verbessern."],
    pitfalls: ["Reichweite oder Erfolg garantieren wollen.", "Fremde Musik, Bilder oder Clips ohne passende Rechte verwenden.", "Zu viele Werkzeuge gleichzeitig einführen."],
    sources: [YOUTUBE],
  };
  if (category === "zoos" || category === "freizeitparks") return {
    intro: "Ein Besuch lässt sich angenehmer planen, wenn Anreise, Öffnungszeiten, Ticketarten und persönliche Anforderungen vorher geprüft werden. Angaben können sich saisonal ändern.",
    checks: ["Welche Öffnungszeiten und Eintrittsbedingungen gelten am Besuchstag?", "Welche Bereiche oder Attraktionen sind geöffnet?", "Wie funktionieren Anreise, Parken und Barrierefreiheit?", "Welche Regeln gelten für Kinder, Gruppen und mitgebrachte Gegenstände?"],
    steps: ["Offizielle Website für den konkreten Termin prüfen.", "Ticketarten und mögliche Zeitfenster vergleichen.", "Anreise und Pausen einplanen.", "Kurz vor der Abfahrt nach kurzfristigen Änderungen sehen."],
    pitfalls: ["Alte Preislisten oder Öffnungszeiten übernehmen.", "Wetter, Saison und Wartezeiten nicht berücksichtigen.", "Buchungsbedingungen erst nach dem Kauf lesen."],
    sources: [],
  };
  if (category === "urlaub-reisen") return {
    intro: "Eine Reiseplanung wird übersichtlicher, wenn Ziel, Reisezeit, Budget und Bedürfnisse aller Mitreisenden früh geklärt werden. Sicherheits- und Einreiseinformationen sollten immer aktuell geprüft werden.",
    checks: ["Welche Reisedokumente und Einreisebestimmungen gelten?", "Welche Kosten kommen zusätzlich zu Transport und Unterkunft hinzu?", "Wie flexibel sind Buchung und Stornierung?", "Welche offiziellen Reisehinweise gibt es?"],
    steps: ["Reiseziel, Zeitraum und Budget festlegen.", "Anreise und Unterkunft anhand derselben Kriterien vergleichen.", "Offizielle Reisehinweise und Versicherungsbedingungen lesen.", "Dokumente und Buchungsbestätigungen gesammelt bereithalten."],
    pitfalls: ["Zusatzkosten und Stornoregeln übersehen.", "Einreisebestimmungen aus alten Artikeln übernehmen.", "Zu knapp zwischen Ankunft und Anschluss planen."],
    sources: [BMEIA],
  };
  if (category === "autos-mobilitaet") return {
    intro: "Bei Autos und Mobilität sollte nicht nur der Anschaffungspreis zählen. Nutzung, Wartung, Energie, Versicherung und Sicherheit beeinflussen die Gesamtkosten.",
    checks: ["Wie wird das Fahrzeug im Alltag eingesetzt?", "Welche laufenden Kosten und Wartungspunkte entstehen?", "Welche Sicherheits- und Kompatibilitätsanforderungen gelten?", "Welche österreichischen Regeln oder Förderbedingungen sind aktuell?"],
    steps: ["Fahrprofil und Budget festlegen.", "Gesamtkosten statt nur Kaufpreis vergleichen.", "Technische Angaben und Wartungshistorie prüfen.", "Vor einer Kaufentscheidung eine unabhängige Prüfung erwägen."],
    pitfalls: ["Verbrauchsangaben ohne eigene Nutzung vergleichen.", "Wartung, Versicherung oder Wertverlust auslassen.", "Technische Mängel allein anhand von Fotos beurteilen."],
    sources: [OEAMTC],
  };
  if (category === "haushalt-wohnen") return {
    intro: "Bei Haushalt und Wohnen müssen Lösungen zu Platz, Ausstattung, Miet- oder Eigentumssituation und verfügbarem Budget passen. Kleine, umsetzbare Schritte sind oft hilfreicher als ein großer Umbauplan.",
    checks: ["Welche Ausgangssituation und Einschränkungen gibt es?", "Welche Kosten entstehen sofort und langfristig?", "Ist die Lösung sicher und für den Raum geeignet?", "Welche mietrechtlichen oder baulichen Regeln sind zu beachten?"],
    steps: ["Problem und gewünschtes Ergebnis beschreiben.", "Einfach umsetzbare Alternativen sammeln.", "Kosten, Aufwand und Pflege vergleichen.", "Mit einem kleinen Schritt beginnen und das Ergebnis prüfen."],
    pitfalls: ["Maße und Platzbedarf nicht vorher prüfen.", "Laufende Kosten und Wartung ignorieren.", "Miet- oder Sicherheitsregeln nicht beachten."],
    sources: [VZ, UBA],
  };

  const common: GuideContext = {
    intro: `Dieser Ratgeber ordnet „${group} · ${title}“ ein und fasst wichtige Grundlagen zusammen. Er soll dir helfen, die richtigen Fragen zu stellen, passende Informationen zu erkennen und nächste Schritte sinnvoll zu planen.`,
    checks: ["Was ist das konkrete Ziel und welche Ausgangslage gibt es?", "Welche Kriterien sind für die Entscheidung wirklich wichtig?", "Welche Angaben sind gesichert und welche können sich ändern?", "Wo findest du ergänzende Informationen aus einer Originalquelle?"],
    steps: ["Die eigene Frage möglichst konkret formulieren.", "Wichtige Kriterien in einer kurzen Liste sammeln.", "Informationen aus mehreren passenden Quellen prüfen.", "Die Optionen vergleichen und bei Unsicherheit eine Fachstelle fragen."],
    pitfalls: ["Einzelne Beispiele ungeprüft auf jede Situation übertragen.", "Veraltete Angaben oder Werbeaussagen als sichere Fakten übernehmen.", "Wichtige Kosten, Bedingungen oder Grenzen übersehen."],
    sources: [],
  };
  return common;
}

function descriptionFor(title: string, group: string): string {
  const description = `${title}: Grundlagen, wichtige Kriterien, praktische Schritte und typische Fehler im Überblick.`;
  return description.length <= 160 ? description : `${title}: Die wichtigsten Grundlagen, Kriterien und Schritte im Überblick.`;
}

function markdownFor(title: string, category: string, group: string, guide: GuideContext): string {
  return `${guide.intro}

Der Beitrag gehört zum Bereich **${category}** und zum Unterthema **${group}**. Er ist als verständlicher Einstieg gedacht. Prüfe bei zeitabhängigen Angaben immer die aktuelle Information der zuständigen Stelle oder des jeweiligen Anbieters.

## Kurz erklärt

Bevor du dich entscheidest oder loslegst, lohnt es sich, den eigenen Bedarf genau zu beschreiben. Überlege, was du erreichen möchtest, welche Voraussetzungen schon vorhanden sind und welche Grenzen du berücksichtigen musst. So lässt sich ${title.toLocaleLowerCase("de")} besser einordnen, ohne dich von einzelnen Werbeversprechen oder pauschalen Empfehlungen leiten zu lassen.

## Die wichtigsten Kriterien

${guide.checks.map((x) => `- ${x}`).join("\n")}

## Schritt für Schritt

${guide.steps.map((x, i) => `${i + 1}. ${x}`).join("\n")}

## Typische Fehler vermeiden

${guide.pitfalls.map((x) => `- ${x}`).join("\n")}

## Fazit

${title} lässt sich am besten angehen, wenn du Bedarf, Qualität, Aufwand und mögliche Grenzen gemeinsam betrachtest. Nutze die Checkliste als Startpunkt, vergleiche passende Möglichkeiten und prüfe wichtige Details vor einer Entscheidung noch einmal anhand aktueller Originalinformationen. Eine Lösung ist dann passend, wenn sie zu deiner konkreten Situation passt – nicht nur, wenn sie auf dem Papier gut klingt.`;
}

/** Ergänzt nur Seiten, für die es noch keinen redaktionellen Inhalt gibt. */
export function createFallbackFillPages(): FillPage[] {
  return allPageNodes().map(({ id, category, group, page }) => {
    const path = id;
    const guide = contextFor(category.slug, group.title, page.title);
    const prosCons = createProsCons(path, page.title);
    return {
      path,
      description: descriptionFor(page.title, group.title),
      focusKeyword: page.title,
      linkAnchors: [page.title, page.label, group.title].filter(Boolean),
      markdown: markdownFor(page.title, category.title, group.title, guide),
      prosCons,
      faq: [
        [`Worauf sollte ich bei „${page.title}“ zuerst achten?`, `Beginne mit deinem konkreten Ziel und den wichtigsten Voraussetzungen. Prüfe anschließend die Kriterien aus diesem Ratgeber und vergleiche passende Informationen aus verlässlichen Quellen.`],
        [`Wie finde ich die passende Lösung für „${page.title}“?`, `Vergleiche mehrere Möglichkeiten anhand derselben Kriterien. Berücksichtige neben dem unmittelbaren Nutzen auch Aufwand, Kosten, Sicherheit und mögliche Einschränkungen.`],
        [`Wann sollte ich die Angaben zu „${page.title}“ erneut prüfen?`, `Prüfe sie vor einer wichtigen Entscheidung und immer dann, wenn sich Anbieter, Regeln, Preise oder persönliche Voraussetzungen geändert haben könnten.`],
      ],
      sources: guide.sources ?? [],
    };
  });
}
