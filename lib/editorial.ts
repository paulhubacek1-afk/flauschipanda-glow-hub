/** Redaktionelle Zusatzboxen für alle Ratgeberseiten. */
export interface ProsConsData {
  pros: string[];
  cons: string[];
  note?: string;
}

const clean = (value: string) =>
  value
    .replace(/^\s*(?:[-*+] |\d+[.)] )/, "")
    .replace(/\*\*/g, "")
    .trim();

function pointsFromSection(markdown: string, headings: string[]): string[] {
  for (const heading of headings) {
    const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = markdown.match(new RegExp(`^##\\s+${escaped}\\s*$([\\s\\S]*?)(?=^##\\s+|$)`, "im"));
    if (!match) continue;
    const points = match[1]
      .split("\n")
      .filter((line) => /^\s*(?:[-*+] |\d+[.)] )/.test(line))
      .map(clean)
      .filter(Boolean)
      .slice(0, 5);
    if (points.length) return points;
  }
  return [];
}

function storedPoints(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((x) => String(x).trim()).filter(Boolean).slice(0, 5);
  if (typeof value === "string") return value.split("\n").map(clean).filter(Boolean).slice(0, 5);
  return [];
}

/** Kontextbezogene, vorsichtig formulierte Vor- und Nachteile für Themen ohne eigene Liste. */
export function createProsCons(path: string, title: string, markdown = ""): ProsConsData {
  const storedPros = pointsFromSection(markdown, ["Vorteile", "Was dafür spricht", "Pluspunkte"]);
  const storedCons = pointsFromSection(markdown, ["Nachteile", "Nachteile und Grenzen", "Grenzen", "Worauf du achten solltest"]);
  if (storedPros.length >= 2 && storedCons.length >= 2) {
    return {
      pros: storedPros,
      cons: storedCons,
      note: "Die Punkte fassen die wichtigsten Aspekte des Artikels zusammen.",
    };
  }

  const key = path.split("/")[0] ?? "";
  const topic = title.trim() || "das Thema";
  let pros: string[];
  let cons: string[];

  if (key === "tiere") {
    pros = [
      `Der Überblick zu „${topic}“ hilft, wichtige Fragen zu Pflege, Verhalten oder Lebensraum zu ordnen.`,
      "Eine Checkliste erleichtert es, Bedürfnisse und Voraussetzungen vorab zu prüfen.",
      "Du kannst Informationen gezielter mit einer Tierarztpraxis oder einer anerkannten Tierschutzstelle besprechen.",
    ];
    cons = [
      "Bedürfnisse unterscheiden sich je nach Tierart, Alter, Gesundheit und individueller Situation.",
      "Allgemeine Ratgeber ersetzen keine tierärztliche Untersuchung oder fachkundige Beratung.",
      "Haltungsregeln und Empfehlungen sollten bei Bedarf anhand aktueller Fachquellen geprüft werden.",
    ];
  } else if (key === "babys-kinder") {
    pros = [
      "Eine übersichtliche Orientierung erleichtert die Vorbereitung und das Vergleichen von Möglichkeiten.",
      "Checklisten helfen, wichtige Fragen für den Familienalltag früh zu sammeln.",
      "Du kannst Empfehlungen gezielter mit einer qualifizierten Beratungsstelle besprechen.",
    ];
    cons = [
      "Bedürfnisse und Entwicklung sind von Kind zu Kind verschieden.",
      "Allgemeine Tipps ersetzen keine individuelle Beratung durch Fachpersonen.",
      "Altersangaben, Sicherheitsnormen und Produktinformationen müssen aktuell geprüft werden.",
    ];
  } else if (key === "gesundheit-wohlbefinden") {
    pros = [
      "Der Artikel fasst grundlegende Informationen verständlich zusammen.",
      "Du erhältst konkrete Fragen und Punkte, die du im Alltag oder bei einem Beratungsgespräch prüfen kannst.",
      "Unterschiedliche Möglichkeiten lassen sich besser einordnen.",
    ];
    cons = [
      "Allgemeine Informationen sind keine persönliche Diagnose oder Behandlungsempfehlung.",
      "Voraussetzungen und gesundheitliche Bedürfnisse sind individuell verschieden.",
      "Bei Beschwerden oder Unsicherheit ist eine geeignete medizinische Fachperson die richtige Anlaufstelle.",
    ];
  } else if (key === "finanzen-sparen") {
    pros = [
      "Ein strukturierter Überblick erleichtert den Vergleich von Kosten, Bedingungen und Nutzen.",
      "Du kannst Ausgaben und mögliche Folgekosten bewusster einplanen.",
      "Checklisten helfen, wichtige Vertragsdetails nicht zu übersehen.",
    ];
    cons = [
      "Gebühren, Konditionen und gesetzliche Regeln können sich ändern.",
      "Ein Beispiel passt nicht automatisch zu jedem Budget oder Vertrag.",
      "Der Artikel ersetzt keine persönliche Finanz-, Steuer- oder Rechtsberatung.",
    ];
  } else if (key === "ki" || key === "tools-apps" || key === "pc-und-hardware") {
    pros = [
      "Die Übersicht hilft, Funktionen und Einsatzmöglichkeiten gezielt zu vergleichen.",
      "Du kannst vorab prüfen, ob ein Werkzeug zu deinem Arbeitsablauf passt.",
      "Ein kleiner Praxistest zeigt oft schneller als Werbeversprechen, was wirklich nützlich ist.",
    ];
    cons = [
      "Funktionen, Preise und kostenlose Nutzungslimits können sich kurzfristig ändern.",
      "Nicht jedes Werkzeug passt zu jedem Gerät oder Arbeitsablauf.",
      "Datenschutz, Berechtigungen und Exportmöglichkeiten sollten vor der Nutzung geprüft werden.",
    ];
  } else if (key === "creator" || key === "musik-entertainment") {
    pros = [
      "Eine klare Planung hilft, Ideen und Arbeitsschritte besser zu strukturieren.",
      "Du kannst Aufwand, benötigte Werkzeuge und mögliche Ergebnisse vorab einschätzen.",
      "Die Hinweise erleichtern den Einstieg und die Vorbereitung eigener Projekte.",
    ];
    cons = [
      "Ergebnisse hängen von Zielgruppe, Erfahrung und regelmäßigem Ausprobieren ab.",
      "Plattformregeln und Funktionen können sich ändern.",
      "Musik, Bilder und andere Inhalte dürfen nur im Rahmen der jeweiligen Nutzungsrechte verwendet werden.",
    ];
  } else if (key === "zoos" || key === "freizeitparks" || key === "urlaub-reisen") {
    pros = [
      "Eine gute Vorbereitung spart vor Ort Zeit und erleichtert die Tagesplanung.",
      "Du kannst Anreise, Ticketarten und persönliche Anforderungen miteinander vergleichen.",
      "Offizielle Informationen helfen, den Besuch besser an die eigenen Bedürfnisse anzupassen.",
    ];
    cons = [
      "Preise, Öffnungszeiten, Attraktionen und Verfügbarkeiten können sich ändern.",
      "Wetter, Saison und Besucherandrang beeinflussen den tatsächlichen Ablauf.",
      "Prüfe wichtige Details unmittelbar vor der Buchung oder dem Besuch beim Anbieter.",
    ];
  } else if (key === "autos-mobilitaet") {
    pros = [
      "Ein Kriterienvergleich macht technische und laufende Kosten besser nachvollziehbar.",
      "Eine Checkliste erleichtert die Vorbereitung von Kauf, Wartung oder Nutzung.",
      "Du kannst wichtige Fragen vor einem Gespräch mit einem Fachbetrieb sammeln.",
    ];
    cons = [
      "Kosten und Eignung hängen stark vom konkreten Fahrzeug und seiner Nutzung ab.",
      "Wartungszustand, Versicherung und regionale Regeln müssen separat geprüft werden.",
      "Ein allgemeiner Ratgeber ersetzt keine technische Prüfung des einzelnen Fahrzeugs.",
    ];
  } else if (key === "haushalt-wohnen") {
    pros = [
      "Schrittweise Hinweise machen Aufgaben und Entscheidungen überschaubarer.",
      "Eine Planung hilft, Zeit, Platz und Budget besser einzuteilen.",
      "Du kannst die Vorschläge an deine Wohnsituation anpassen.",
    ];
    cons = [
      "Wohnraum, Ausstattung und verfügbare Zeit unterscheiden sich stark.",
      "Nicht jede Lösung passt zu jeder Wohnung oder jedem Haushalt.",
      "Bei Miet-, Bau- oder Sicherheitsfragen gelten zusätzliche Regeln, die separat geprüft werden sollten.",
    ];
  } else {
    pros = [
      `Der Beitrag bündelt die wichtigsten Grundlagen zu „${topic}“ an einem Ort.`,
      "Die strukturierte Übersicht erleichtert das Vergleichen und Nachfragen.",
      "Du bekommst konkrete Punkte, die du bei der eigenen Entscheidung prüfen kannst.",
    ];
    cons = [
      "Allgemeine Informationen können nicht jede individuelle Situation abdecken.",
      "Details und Rahmenbedingungen können sich im Laufe der Zeit ändern.",
      "Bei wichtigen Entscheidungen lohnt sich ein zusätzlicher Blick in aktuelle Fach- oder Originalquellen.",
    ];
  }

  // Vorhandene Artikelpunkte übernehmen, sobald ein Abschnitt dafür vorhanden ist.
  if (storedPros.length) pros = storedPros;
  if (storedCons.length) cons = storedCons;

  return {
    pros,
    cons,
    note: "Die Punkte sind eine allgemeine Orientierung. Prüfe bei wichtigen Entscheidungen immer die aktuelle Situation und passende Originalquellen.",
  };
}

/** Einheitlicher Resolver für gespeicherte CMS-Werte und automatisch ergänzte Seiten. */
export function resolveProsCons(
  value: unknown,
  path: string,
  title: string,
  markdown = "",
): ProsConsData {
  const stored = (value ?? {}) as { pros?: unknown; cons?: unknown; note?: unknown };
  const pros = storedPoints(stored.pros);
  const cons = storedPoints(stored.cons);
  if (pros.length && cons.length) {
    return {
      pros,
      cons,
      note: typeof stored.note === "string" ? stored.note : "Zusammenfassung der wichtigsten Vor- und Nachteile.",
    };
  }
  return createProsCons(path, title, markdown);
}
