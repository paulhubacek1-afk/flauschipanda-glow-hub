/**
 * Zentrale Website-Konfiguration.
 * Die Domain steht noch nicht fest – alle internen Links sind relativ.
 * NEXT_PUBLIC_SITE_URL wird nur für Canonical-URLs, Sitemap und Open Graph gebraucht.
 */
export const siteConfig = {
  name: "FlauschiPandas",
  tagline: "Die Panda Toolbox – Themen- und Communityportal",
  locale: "de_AT",
  language: "de",
  defaultAuthor: "FlauschiPandas Redaktion",
} as const;

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  try {
    return new URL(raw);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

/**
 * Startwerte für die Panda-GreenCore-Box beim Erstimport (npm run seed).
 * Danach werden Texte, Zweck und Spendenlink im Admin unter „Website-Einstellungen“ gepflegt.
 */
export const donationConfig = {
  name: "Panda GreenCore",
  headline: "Unterstütze Panda GreenCore",
  text: "FlauschiPandas ist kostenlos und ohne Bezahlschranke. Wenn dir diese Seite geholfen hat, kannst du mit einer freiwilligen Spende an Panda GreenCore etwas zurückgeben.",
  /** Wofür Spenden konkret verwendet werden – Pflicht vor dem Livegang. */
  purpose: "",
  /** Kurzer Hinweis, der automatisch auf jeder Landingpage erscheint. */
  notice: "Diese Seite ist Teil der Panda Toolbox. Mit Panda GreenCore wächst hier ein eigenes Projekt, das du freiwillig unterstützen kannst.",
  url: "",
  aboutHref: "/panda-branding/greencore",
};

export const legalNav = [
  { title: "Seitenstruktur", href: "/seitenstruktur" },
  { title: "Transparenz & Werbung", href: "/transparenz" },
  { title: "Impressum", href: "/impressum" },
  { title: "Datenschutz", href: "/datenschutz" },
];
