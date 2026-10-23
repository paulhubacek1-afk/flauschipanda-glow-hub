/**
 * Affiliate-Register. Jeder Partnerlink hat eine feste ID, damit Artikel nur
 * die ID referenzieren (Markdown: `[Text](aff:ID)` oder Frontmatter `products`).
 * Ändert sich ein Partnerlink, wird er nur hier gepflegt.
 *
 * WICHTIG: Die URLs unten sind Platzhalter. Erst echte Partnerlinks eintragen,
 * wenn ein Partnerprogramm abgeschlossen und in Datenschutz/Transparenz genannt ist.
 * Das Prüfskript warnt, solange `placeholder: true` gesetzt ist.
 */
export interface AffiliateProduct {
  id: string;
  name: string;
  category: string;
  /** Warum wir das empfehlen – nur Aussagen, die wir belegen können. */
  pitch: string;
  url: string;
  network: string;
  placeholder?: boolean;
}

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: "mikrofaser-set",
    name: "Mikrofasertücher-Set für Lack und Innenraum",
    category: "Pflege",
    pitch: "Weiche, waschbare Tücher in mehreren Farben – so trennst du Lack, Glas und Innenraum sauber.",
    url: "https://www.example.com/partner/mikrofaser-set",
    network: "Platzhalter",
    placeholder: true,
  },
  {
    id: "eiskratzer-handschuh",
    name: "Eiskratzer mit Handschuh",
    category: "Winter",
    pitch: "Klassiker für frostige Morgen: Kratzkante aus Kunststoff, gefütterter Handschuh.",
    url: "https://www.example.com/partner/eiskratzer",
    network: "Platzhalter",
    placeholder: true,
  },
  {
    id: "reifendruckpruefer",
    name: "Digitaler Reifendruckprüfer",
    category: "Technik",
    pitch: "Ablesbarer Druck an jeder Tankstelle oder zu Hause – Grundlage für sparsames Fahren.",
    url: "https://www.example.com/partner/reifendruckpruefer",
    network: "Platzhalter",
    placeholder: true,
  },
  {
    id: "kfz-handyhalterung",
    name: "Handyhalterung fürs Lüftungsgitter",
    category: "Gadgets",
    pitch: "Hält das Smartphone im Blickfeld für die Navigation, ohne dass du es in die Hand nimmst.",
    url: "https://www.example.com/partner/handyhalterung",
    network: "Platzhalter",
    placeholder: true,
  },
  {
    id: "starthilfe-powerbank",
    name: "Starthilfe-Powerbank",
    category: "Notfall",
    pitch: "Kompakte Starthilfe ohne zweites Auto – vor dem Kauf auf Eignung für den eigenen Motor achten.",
    url: "https://www.example.com/partner/starthilfe",
    network: "Platzhalter",
    placeholder: true,
  },
  {
    id: "innenraum-sauger",
    name: "Akku-Handstaubsauger fürs Auto",
    category: "Pflege",
    pitch: "Krümel und Sand aus Fußraum und Sitzritzen holen, ohne Kabel zur Steckdose.",
    url: "https://www.example.com/partner/akkusauger",
    network: "Platzhalter",
    placeholder: true,
  },
  {
    id: "kuechenwaage-futter",
    name: "Digitale Küchenwaage zum Abwiegen der Futterration",
    category: "Fütterung",
    pitch: "Wer die Tagesration abwiegt statt zu schätzen, füttert gleichmäßiger und erkennt Veränderungen früher.",
    url: "https://www.example.com/partner/kuechenwaage",
    network: "Platzhalter",
    placeholder: true,
  },
  {
    id: "edelstahl-napf",
    name: "Edelstahl-Napf-Set",
    category: "Zubehör",
    pitch: "Edelstahlnäpfe sind robust und lassen sich gründlich reinigen – sinnvoll vor allem bei Nassfutter.",
    url: "https://www.example.com/partner/edelstahl-napf",
    network: "Platzhalter",
    placeholder: true,
  },
  {
    id: "futter-vorratsdose",
    name: "Luftdichte Futter-Vorratsdose",
    category: "Aufbewahrung",
    pitch: "Hält geöffnetes Trockenfutter trocken und schützt vor Schädlingen – Originalverpackung am besten mit hineinstellen.",
    url: "https://www.example.com/partner/vorratsdose",
    network: "Platzhalter",
    placeholder: true,
  },
];

export function getAffiliate(id: string) {
  return affiliateProducts.find((p) => p.id === id);
}

/** rel-Attribut gemäß Google-Richtlinien für bezahlte Links. */
export const AFFILIATE_REL = "sponsored nofollow noopener";
