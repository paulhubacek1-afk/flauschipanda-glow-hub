/**
 * ============================================================================
 *  FlauschiPandas – Die komplette Seiten-Hierarchie
 * ============================================================================
 *
 *   Hauptkategorie  →  Unterthema  →  Landingpage (= eine Suchanfrage)
 *   /tiere          →  /tiere/hunde →  /tiere/hunde/gesundes-hundefutter
 *
 * Aus dieser einen Datei entstehen automatisch:
 *   • Menüs (Mega-Menü, Footer), Breadcrumbs
 *   • Kategorie- und Unterthemen-Seiten
 *   • die Seitenstruktur-Übersicht (/seitenstruktur) und STRUKTUR.md
 *   • Sitemap-Einträge und interne Verlinkung (Geschwisterseiten, Weiterlesen)
 *
 * Eine Landingpage ist "geplant", bis es eine passende Inhaltsdatei gibt:
 *   content/<kategorie>/<unterthema>/<seite>.md
 * Geplante Seiten erscheinen nur als Vorschau (ohne Link) und nicht in der Sitemap –
 * so entstehen keine leeren Seiten, die Google als dünnen Inhalt wertet.
 *
 * Reine Daten, keine React-Imports – wird auch von den Prüfskripten verwendet.
 * Später wird diese Struktur im CMS gepflegt.
 */

export type IconName =
  | "paw"
  | "baby"
  | "house"
  | "bot"
  | "clapperboard"
  | "wrench"
  | "music"
  | "piggy"
  | "trees"
  | "ferris"
  | "car"
  | "users"
  | "panda"
  | "heart"
  | "plane"
  | "monitor";

export interface PageNode {
  slug: string;
  /** Kurzname für Menüs und Listen, z. B. "Tickets" */
  label: string;
  /** Vollständiger Titel / Suchanfrage, z. B. "Zoo Berlin Tickets" */
  title: string;
}

export interface GroupNode {
  slug: string;
  title: string;
  description: string;
  pages: PageNode[];
}

export interface CategoryNode {
  number: number;
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  /** Farbton (oklch hue) für generierte Titelbilder */
  hue: number;
  groups: GroupNode[];
}

/* ---------------------------------------------------------------------------
 * Helfer
 * ------------------------------------------------------------------------- */

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/&/g, " und ")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type PageInput = string | { label: string; title?: string; slug?: string };

function page(input: PageInput, titlePrefix?: string): PageNode {
  const def = typeof input === "string" ? { label: input } : input;
  return {
    label: def.label,
    title: def.title ?? (titlePrefix ? `${titlePrefix} ${def.label}` : def.label),
    slug: def.slug ?? slugify(def.label),
  };
}

function group(
  title: string,
  pages: PageInput[],
  opts: { slug?: string; description?: string; titlePrefix?: string } = {},
): GroupNode {
  return {
    title,
    slug: opts.slug ?? slugify(title),
    description: opts.description ?? `${title}: Ratgeber, Vergleiche und Tipps – verständlich und ehrlich erklärt.`,
    pages: pages.map((p) => page(p, opts.titlePrefix)),
  };
}

/* ---------- Vorlagen: so bekommt jedes Unterthema dieselbe Grundstruktur ---------- */

/** Haustiere: Futter, Zubehör, Pflege, Versicherung, FAQ … */
function pet(
  title: string,
  o: { slug?: string; food: string; extra: PageInput[]; care: string; insurance?: string },
): GroupNode {
  return group(
    title,
    [
      { label: o.food },
      ...o.extra,
      { label: o.care },
      ...(o.insurance ? [{ label: o.insurance }] : []),
      { label: "FAQ", title: `${title}-FAQ`, slug: "faq" },
    ],
    { slug: o.slug, description: `${title}: Futter, Zubehör, Pflege und Antworten auf die häufigsten Fragen.` },
  );
}

/** Wildtiere: Steckbrief, Lebensraum, Ernährung, Kinderwissen, wo man sie sieht */
function wildAnimal(plural: string, singular: string, slug?: string): GroupNode {
  return group(
    plural,
    [
      { label: "Steckbrief", title: `${singular} Steckbrief` },
      { label: "Lebensraum", title: `Lebensraum der ${plural}` },
      { label: "Ernährung", title: `Was fressen ${plural}?` },
      { label: "Fakten für Kinder", title: `${singular}-Fakten für Kinder` },
      { label: "Wo sehen?", title: `Wo kann man ${plural} sehen?`, slug: "wo-sehen" },
    ],
    { slug, description: `${plural} kennenlernen: Steckbrief, Lebensraum, Ernährung und spannende Fakten.` },
  );
}

/** Zoos: Tickets, Preise, Highlights, Hotels, Tipps */
function zoo(name: string, highlights: PageInput[], slug?: string): GroupNode {
  return group(
    name,
    [
      { label: "Tickets", title: `${name} Tickets` },
      { label: "Preise", title: `${name} Preise` },
      { label: "Öffnungszeiten", title: `${name} Öffnungszeiten` },
      ...highlights,
      { label: "Hotels in der Nähe", title: `Hotels in der Nähe vom ${name}`, slug: "hotels" },
      { label: "Tipps", title: `${name} Tipps` },
    ],
    { slug, description: `${name} besuchen: Tickets, Preise, Highlights, Hotels in der Nähe und Tipps für den Tag.` },
  );
}

/** Freizeitparks: Tickets, Hotels, Attraktionen, Familienurlaub, Tipps */
function park(name: string, o: { slug?: string; rides?: string; hotels?: boolean } = {}): GroupNode {
  return group(
    name,
    [
      { label: "Tickets", title: `${name} Tickets` },
      ...(o.hotels === false ? [] : [{ label: "Hotels", title: `${name} Hotels` }]),
      { label: o.rides ?? "Achterbahnen", title: `${o.rides ?? "Achterbahnen"} im ${name}`, slug: slugify(o.rides ?? "achterbahnen") },
      { label: "Mit Kindern", title: `${name} mit Kindern`, slug: "mit-kindern" },
      { label: "Tipps", title: `${name} Tipps` },
    ],
    { slug: o.slug, description: `${name}: Tickets, Übernachtung, Attraktionen und Tipps für einen gelungenen Tag.` },
  );
}

/* ---------------------------------------------------------------------------
 * Die Hauptkategorien (Reihenfolge = Nummerierung)
 * ------------------------------------------------------------------------- */

const categories: Omit<CategoryNode, "number">[] = [
  {
    slug: "tiere",
    title: "Tiere",
    description: "Haustiere richtig versorgen und Wildtiere entdecken: Futter, Zubehör, Pflege, Wissen und Malvorlagen.",
    icon: "paw",
    hue: 160,
    groups: [
      group(
        "Hunde",
        [
          "Gesundes Hundefutter",
          "Welpenfutter",
          { label: "Trockenfutter", title: "Trockenfutter für Hunde" },
          { label: "Nassfutter", title: "Nassfutter für Hunde" },
          "Hundespielzeug",
          "Hundebetten",
          "Hundeversicherung",
          "Hundetraining",
          "Hundepflege",
          { label: "FAQ", title: "Hunde-FAQ", slug: "faq" },
        ],
        { description: "Hunde: gesundes Futter, Spielzeug, Hundebetten, Versicherung, Training und Pflege." },
      ),
      pet("Katzen", {
        food: "Gesundes Katzenfutter",
        extra: ["Kittenfutter", { label: "Trockenfutter", title: "Trockenfutter für Katzen" }, { label: "Nassfutter", title: "Nassfutter für Katzen" }, "Katzenspielzeug", "Kratzbaum", "Katzenklo"],
        care: "Katzenpflege",
        insurance: "Katzenversicherung",
      }),
      pet("Pferde", { food: "Pferdefutter", extra: ["Pferdezubehör", "Reitausrüstung"], care: "Pferdepflege", insurance: "Pferdeversicherung" }),
      pet("Kaninchen", { slug: "kaninchen", food: "Kaninchenfutter", extra: ["Kaninchenstall", "Kaninchengehege", "Kaninchenspielzeug"], care: "Kaninchenpflege" }),
      pet("Hamster", { food: "Hamsterfutter", extra: ["Hamsterkäfig", "Hamsterrad", { label: "Einstreu", title: "Einstreu für Hamster" }], care: "Hamsterpflege" }),
      pet("Meerschweinchen", { food: "Meerschweinchenfutter", extra: ["Meerschweinchenkäfig", "Meerschweinchengehege"], care: "Meerschweinchenpflege" }),
      wildAnimal("Pandas", "Panda"),
      wildAnimal("Wölfe", "Wolf"),
      wildAnimal("Füchse", "Fuchs"),
      wildAnimal("Pinguine", "Pinguin"),
      group("Tierwissen & Pflege", ["Haustier anschaffen", "Tierarztkosten", "Tierversicherungen im Vergleich", "Giftige Lebensmittel für Haustiere"], {
        slug: "tierwissen",
      }),
      group("Tier-Malvorlagen", ["Hunde-Malvorlagen", "Katzen-Malvorlagen", "Pferde-Malvorlagen", "Wildtier-Malvorlagen", "Zootier-Malvorlagen"]),
      group("Tier-KI-Prompts", ["Tierbilder mit KI", "Hunde-Prompts", "Katzen-Prompts", "Fantasietiere mit KI"]),
    ],
  },
  {
    slug: "babys-kinder",
    title: "Babys & Kinder",
    description: "Von der Erstausstattung bis zum Familienausflug: Basics, Lernmaterial, Basteln und Ausflugsideen.",
    icon: "baby",
    hue: 330,
    groups: [
      group("Baby-Basics", ["Erstausstattung Baby", "Kinderwagen", "Babyschlaf", "Babyphone", "Wickeltasche"]),
      group("Baby-Tipps", ["Das erste Jahr", "Zahnen", "Beikost-Start", "Babys erste Reise"]),
      group("Malvorlagen & Lernen", ["Kinder-Malvorlagen", "Lernkarten", "Glow-Kinderdesigns", "Lernmaterialien"], { slug: "lernen" }),
      group("Basteln & Beschäftigung", ["Bastelideen", "Ideen für Regentage", "Spiele für drinnen", "Spiele für draußen"], { slug: "basteln" }),
      group("Ausflüge mit Kindern", ["Zoos mit Kindern", "Freizeitparks mit Kindern", "Ausflugsziele Österreich", "Ausflugsziele Deutschland"], {
        slug: "ausfluege",
      }),
      group("Kinder & KI", ["Kinder-KI-Prompts", "KI-Geschichten für Kinder", "Medienkompetenz für Kinder"], { slug: "kinder-ki" }),
    ],
  },
  {
    slug: "haushalt-wohnen",
    title: "Haushalt & Wohnen",
    description: "Ordnung, Putzen, Sparen und schönes Wohnen – plus Basics zu Wohnungssuche und Umzug.",
    icon: "house",
    hue: 40,
    groups: [
      group("Haushaltstipps", ["Putzplan", "Ordnung schaffen", "Wäsche-Tipps", "Hausmittel"]),
      group("Wohnideen & Deko", ["Glow-Wohnideen", "Deko-Tipps", "Glow-Zimmer", "LED-Beleuchtung"], { slug: "wohnideen" }),
      group("Einrichtung & Organisation", ["Kleine Wohnung einrichten", "Mehr Stauraum", "Kinderzimmer einrichten", "Homeoffice einrichten"], { slug: "einrichtung" }),
      group("Sparen im Haushalt", ["Strom sparen", "Heizkosten senken", "Wasser sparen", "Lebensmittel retten"]),
      group("Wohnen & Immobilien", ["Wohnungssuche", "Mietvertrag-Checkliste", "Umzug-Checkliste", "Immobilien-Basics"], { slug: "wohnen" }),
    ],
  },
  {
    slug: "gesundheit-wohlbefinden",
    title: "Gesundheit & Wohlbefinden",
    description: "Ernährung, Bewegung, Schlaf und mentale Balance – alltagstaugliche Tipps, die ärztlichen Rat nicht ersetzen.",
    icon: "heart",
    hue: 350,
    groups: [
      group("Ernährung", ["Gesunde Ernährung", "Gesund kochen im Alltag", "Genug trinken", "Gesunde Snacks"]),
      group("Bewegung & Fitness", ["Fitness für Einsteiger", "Workouts für zu Hause", "Mehr Bewegung im Alltag", "Wandern & Spazieren"], { slug: "bewegung" }),
      group("Schlaf", ["Besser schlafen", "Abendroutine", "Schlafzimmer optimieren"]),
      group("Achtsamkeit & Motivation", ["Stress reduzieren", "Achtsamkeit lernen", "Meditation für Einsteiger", "Positive Routinen", "Motivation finden", "Spiritualität im Alltag"], {
        slug: "achtsamkeit",
      }),
      group("Gesundheit im Alltag", ["Hausapotheke", "Vorsorge-Checkliste", "Bildschirmzeit reduzieren", "Ergonomisch arbeiten"], { slug: "alltag" }),
    ],
  },
  {
    slug: "ki",
    title: "KI-Tools & Prompts",
    description: "KI verständlich nutzen: Prompts, Workflows und Anleitungen für ChatGPT, Claude, Gemini und Bildgeneratoren.",
    icon: "bot",
    hue: 280,
    groups: [
      group(
        "ChatGPT",
        [
          { label: "Prompts", title: "ChatGPT Prompts" },
          { label: "SEO", title: "ChatGPT für SEO" },
          { label: "YouTube", title: "ChatGPT für YouTube" },
          { label: "Blogging", title: "ChatGPT fürs Bloggen" },
          { label: "Affiliate Marketing", title: "ChatGPT im Affiliate-Marketing" },
        ],
        { description: "ChatGPT im Alltag und Business: Prompts für SEO, YouTube, Blogging und Affiliate-Marketing." },
      ),
      group("Claude", [
        { label: "Prompts", title: "Claude Prompts" },
        { label: "Texte schreiben", title: "Texte schreiben mit Claude" },
        { label: "Programmieren", title: "Programmieren mit Claude" },
      ]),
      group("Gemini", [
        { label: "Prompts", title: "Gemini Prompts" },
        { label: "Im Alltag", title: "Gemini im Alltag", slug: "alltag" },
      ]),
      group("KI-Bildgeneratoren", ["Bildgeneratoren im Vergleich", "Glow-Bilder erstellen"], { slug: "bildgeneratoren" }),
      group("KI-Basics", ["Was ist KI?", "KI-Fehler vermeiden", "KI-Workflows", "KI-Automatisierung", "KI und Datenschutz"]),
      group("Prompts", ["Bild-Prompts", "Business-Prompts", "Schreib-Prompts", "Lern-Prompts", "Social-Media-Prompts"], { slug: "prompts" }),
    ],
  },
  {
    slug: "creator",
    title: "Creator-Tipps",
    description: "YouTube, Shorts und Branding: Wachstum, Content-Planung, Monetarisierung und Community-Aufbau.",
    icon: "clapperboard",
    hue: 15,
    groups: [
      group("YouTube", ["YouTube-Kanal starten", "Algorithmus-Tipps", "Thumbnails gestalten", "Viral-Shorts"], { slug: "youtube" }),
      group("Branding & Design", ["Branding für Creator", "Glow-Design", "Logo erstellen", "Farbschema finden"], { slug: "branding" }),
      group("Content-Planung", ["Content-Plan erstellen", "Storytelling", "Videoideen finden"]),
      group("Monetarisierung", ["Geld verdienen mit YouTube", "Affiliate für Creator", "Sponsoring"]),
      group("Community-Aufbau", ["Community aufbauen", "Discord für Creator", "Mit Kommentaren arbeiten"], { slug: "community" }),
    ],
  },
  {
    slug: "tools-apps",
    title: "Tools & Apps",
    description: "Die Toolbox: Canva-Alternativen, YouTube- und Keyword-Tools, Online-Rechner und kostenlose Alternativen.",
    icon: "wrench",
    hue: 195,
    groups: [
      group("Canva-Alternativen", ["Kostenlose Canva-Alternativen", "Canva-Alternativen im Vergleich", "Design-Tools für Einsteiger", "Glow-Plugins"]),
      group("YouTube-Tools", ["Beste YouTube-Tools", "Thumbnail-Tools", "Tools für YouTube-Shorts"]),
      group("Keyword-Tools", ["Kostenlose Keyword-Tools", "Keyword-Tools im Vergleich", "Keyword-Recherche Anleitung", "Keyword-Tools für YouTube"]),
      group("Online-Rechner", ["Spritkosten-Rechner", "Stromkosten-Rechner", "Budget-Rechner", "Prozentrechner"], { slug: "rechner" }),
      group("Business-Tools", ["Rechnungs-Tools", "Projektmanagement-Tools", "Newsletter-Tools"]),
      group("Social-Media-Tools", ["Social-Media-Planer", "Link-in-Bio-Tools", "Analyse-Tools"]),
      group("Automatisierungs-Tools", ["Automatisierung für Einsteiger", "Workflow-Tools im Vergleich"], { slug: "automatisierung" }),
      group("Kostenlose Alternativen", ["Kostenlose Office-Alternativen", "Kostenlose Bildbearbeitung", "Kostenlose Videobearbeitung"], { slug: "alternativen" }),
    ],
  },
  {
    slug: "musik-entertainment",
    title: "Musik & Entertainment",
    description: "EDM, Musik für Videos, Playlists und Musikproduktion – auch mit KI.",
    icon: "music",
    hue: 300,
    groups: [
      group("EDM", ["EDM für Einsteiger", "EDM-Tracks", "EDM-Playlists"]),
      group("Musik für YouTube", ["Lizenzfreie Musik", "Musik für Videos finden", "YouTube-Musik-Tipps"], { slug: "youtube-musik" }),
      group("Musikproduktion", ["Musikproduktion für Einsteiger", "DAW-Vergleich", "KI-Musik"]),
      group("Playlists", ["Playlist-Tipps", "Playlists für Kinder", "Workout-Playlists"]),
      group("Glow-Music-Branding", ["Music-Branding", "Cover-Design"], { slug: "music-branding" }),
    ],
  },
  {
    slug: "finanzen-sparen",
    title: "Finanzen & Sparen",
    description: "Budget, Sparen im Alltag und Finanz-Basics – verständlich, ohne Anlageberatung.",
    icon: "piggy",
    hue: 140,
    groups: [
      group("Sparen im Alltag", ["Spartipps", "Günstig leben", "Beim Einkaufen sparen", "Abos kündigen"], { slug: "sparen" }),
      group("Budget", ["Haushaltsbudget erstellen", "Budget-Methoden", "Budget-Apps"]),
      group("Finanz-Basics", ["Notgroschen", "Schulden vermeiden", "Girokonto vergleichen", "Versicherungen verstehen"]),
      group("Geld verdienen online", ["Nebenverdienst online", "Affiliate-Marketing Einstieg", "Digitale Produkte verkaufen"], { slug: "online-verdienen" }),
      group("Preisvergleiche", ["Preisvergleich-Tipps", "Kostenlose Finanz-Tools"]),
    ],
  },
  {
    slug: "zoos",
    title: "Zoos & Aquarien",
    description: "Zoos und Aquarien besuchen: Tickets, Hotels in der Nähe, Preise, Highlights wie Pandas und SEA LIFE.",
    icon: "trees",
    hue: 120,
    groups: [
      zoo("Zoo Berlin", [{ label: "Pandas", title: "Pandas im Zoo Berlin" }, { label: "Aquarium", title: "Aquarium Zoo Berlin" }]),
      zoo("Tiergarten Schönbrunn", [{ label: "Pandas", title: "Pandas im Tiergarten Schönbrunn" }]),
      zoo("Tierpark Hellabrunn", []),
      zoo("Zoo Leipzig", []),
      zoo("Zoo Zürich", []),
      group(
        "SEA LIFE",
        [
          { label: "Tickets", title: "SEA LIFE Tickets" },
          { label: "Hotels in der Nähe", title: "Hotels in der Nähe von SEA LIFE", slug: "hotels" },
          { label: "Standorte", title: "SEA LIFE Standorte" },
          { label: "Mit Kindern", title: "SEA LIFE mit Kindern", slug: "mit-kindern" },
          { label: "Tipps", title: "SEA LIFE Tipps" },
        ],
        { slug: "sea-life", description: "SEA LIFE besuchen: Tickets, Hotels in der Nähe, Standorte und Tipps für den Besuch mit Kindern." },
      ),
      group("Zoo-Ratgeber", ["Zoos mit Pandas in Europa", "Zoo-Jahreskarte", "Zoobesuch mit Kindern", "Zoo bei Regen"], { slug: "ratgeber" }),
    ],
  },
  {
    slug: "freizeitparks",
    title: "Freizeitparks",
    description: "Freizeitparks planen: Tickets, Hotels, Achterbahnen, Familienurlaub und Insider-Tipps.",
    icon: "ferris",
    hue: 55,
    groups: [
      park("Europa-Park"),
      park("Phantasialand"),
      park("Heide Park"),
      park("Familypark", { rides: "Attraktionen" }),
      park("Wiener Prater", { rides: "Attraktionen" }),
      group("Freizeitpark-Ratgeber", ["Freizeitpark-Tickets sparen", "Beste Reisezeit für Freizeitparks", "Freizeitparks in Österreich", "Freizeitparks in Deutschland"], {
        slug: "ratgeber",
      }),
    ],
  },
  {
    slug: "urlaub-reisen",
    title: "Urlaub & Reisen",
    description: "Urlaub planen: Reiseziele, Familienurlaub, Reisen mit Hund, Packlisten und Spartipps.",
    icon: "plane",
    hue: 200,
    groups: [
      group("Urlaubsziele", ["Urlaub in Österreich", "Urlaub in Deutschland", "Urlaub am Meer", "Städtereisen", "Urlaub in den Bergen"]),
      group("Familienurlaub", ["Familienurlaub planen", "Familienhotels", "Urlaub mit Baby", "Urlaub mit Kleinkind"]),
      group("Urlaub mit Hund", ["Urlaub mit Hund planen", "Hundefreundliche Hotels", "Reisen mit Haustier", "Packliste für den Hund"], { slug: "mit-hund" }),
      group("Reiseplanung", ["Packliste Urlaub", "Günstig reisen", "Reiseversicherung", "Roadtrip planen", "Reise-Apps"]),
      group("Hotels & Unterkünfte", ["Hotel finden", "Ferienwohnung oder Hotel", "Camping für Einsteiger"], { slug: "unterkuenfte" }),
    ],
  },
  {
    slug: "autos-mobilitaet",
    title: "Autos & Mobilität",
    description: "Autotechnik einfach erklärt, Antriebe im Vergleich, Spartipps, Pflege, Autokauf und die Zukunft der Mobilität.",
    icon: "car",
    hue: 210,
    groups: [
      group("Fahrzeugporträts", ["Modellporträts", "Neuvorstellungen", "Klassiker"]),
      group("Marken & Modelle", [{ label: "Karosserieformen", title: "Karosserieformen im Vergleich", slug: "karosserieformen-vergleich" }, "Automarken im Überblick", "Modellvergleiche"], {
        slug: "marken-modelle",
      }),
      group("Antriebe", [
        { label: "Elektro, Hybrid oder Verbrenner", slug: "elektroauto-hybrid-verbrenner-vergleich" },
        { label: "Elektroauto zu Hause laden", slug: "elektroauto-zuhause-laden" },
        "Plug-in-Hybrid erklärt",
        "Wasserstoffauto",
      ]),
      group("Autotechnik", [{ label: "Turbolader", title: "Turbolader einfach erklärt", slug: "turbolader-funktion-einfach-erklaert" }, "Automatikgetriebe", "Bremsen", "Assistenzsysteme"]),
      group("Pflege", [
        { label: "Reifendruck prüfen", slug: "reifendruck-richtig-pruefen" },
        { label: "Autopflege im Winter", slug: "autopflege-herbst-winter" },
        "Auto waschen",
        "Innenraum reinigen",
      ]),
      group("Zubehör & Apps", [{ label: "Auto-Gadgets & Apps", slug: "nuetzliche-auto-gadgets-apps" }, "Dashcams", "Kindersitze", "Dachboxen"], { slug: "zubehoer" }),
      group("Sparen", [{ label: "Sprit sparen", slug: "spritsparen-tipps" }, "Günstig tanken", "Kfz-Versicherung sparen"]),
      group("Führerschein & Verkehr", [{ label: "Führerschein-Theorie lernen", slug: "fuehrerschein-theorie-lernen" }, "Fahrstunden", "Mobilität ohne Auto"], {
        slug: "fuehrerschein-verkehr",
      }),
      group("Zukunft der Mobilität", [{ label: "Autonomes Fahren", slug: "autonomes-fahren-stufen-erklaert" }, "Software im Auto", "Carsharing"], { slug: "zukunft" }),
      group("Autokauf", [{ label: "Gebrauchtwagen-Checkliste", slug: "gebrauchtwagen-checkliste" }, "Neuwagen kaufen", "Leasing oder Kauf", "Auto verkaufen"]),
      group("Kosten & Vergleiche", [{ label: "Betriebskosten berechnen", slug: "betriebskosten-auto-berechnen" }, "Kosten pro Kilometer", "Ausstattung vergleichen"], {
        slug: "kosten-vergleiche",
      }),
      group("News", ["Branchen-News", "Rückrufe"]),
    ],
  },
  {
    slug: "projekte-community",
    title: "Projekte & Community",
    description: "KiToolsReport, Panda-Merch, die Community und alles über FlauschiPandas.",
    icon: "users",
    hue: 230,
    groups: [
      group("KiToolsReport", ["Über KiToolsReport", "Tool-Reports", "Newsletter"]),
      group("Panda-Merch", ["Merch-Shop", "Neuheiten"]),
      group("Community", ["Discord-Community", "Kooperationen", "Eigene Projekte"]),
      group("Über FlauschiPandas", ["Über mich", "Blog", "FAQ", "Kontakt"], { slug: "ueber" }),
    ],
  },
  {
    slug: "panda-branding",
    title: "Panda-Branding",
    description: "Panda GreenTech, die Panda-Story, Designs, Wallpaper und digitale Produkte.",
    icon: "panda",
    hue: 185,
    groups: [
      group("Panda GreenTech", ["Was ist Panda GreenTech?", "Spenden", "Projekte"], { slug: "greentech" }),
      group("Panda-Story", ["Warum Panda?", "Die Panda-Story", "Panda-Glow-Style"]),
      group("Panda-Designs", ["Panda-Wallpaper", "Panda-Designs", "Panda-Malvorlagen", "Panda-KI-Prompts"]),
      group("Downloads", ["Digitale Produkte", "Kostenlose Downloads"]),
    ],
  },
];

/** Nummerierung ergibt sich aus der Reihenfolge – neue Kategorien einfach einfügen. */
export const hierarchy: CategoryNode[] = categories.map((c, i) => ({ ...c, number: i + 1 }));

/* ---------------------------------------------------------------------------
 * Abfragen
 * ------------------------------------------------------------------------- */

export function getCategory(slug: string) {
  return hierarchy.find((c) => c.slug === slug);
}

export function getGroup(categorySlug: string, groupSlug: string) {
  return getCategory(categorySlug)?.groups.find((g) => g.slug === groupSlug);
}

export function getPageNode(categorySlug: string, groupSlug: string, pageSlug: string) {
  return getGroup(categorySlug, groupSlug)?.pages.find((p) => p.slug === pageSlug);
}

export const categoryPath = (c: string) => `/${c}`;
export const groupPath = (c: string, g: string) => `/${c}/${g}`;
export const pagePath = (c: string, g: string, p: string) => `/${c}/${g}/${p}`;

/** Flache Liste aller geplanten Landingpages – Basis für Prüfungen und Exporte. */
export function allPageNodes() {
  return hierarchy.flatMap((c) =>
    c.groups.flatMap((g) => g.pages.map((p) => ({ category: c, group: g, page: p, id: `${c.slug}/${g.slug}/${p.slug}` }))),
  );
}

export function hierarchyStats() {
  const groups = hierarchy.reduce((n, c) => n + c.groups.length, 0);
  return { categories: hierarchy.length, groups, pages: allPageNodes().length };
}
