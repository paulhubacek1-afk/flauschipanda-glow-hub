/**
 * Zentrale Website-Konfiguration.
 * Die Domain steht noch nicht fest – alle internen Links sind relativ.
 * NEXT_PUBLIC_SITE_URL wird nur für Canonical-URLs, Sitemap und Open Graph gebraucht.
 */
export const siteConfig = {
  name: "Panda Toolbox",
  tagline: "Themen- und Communityportal",
  locale: "de_AT",
  language: "de",
  defaultAuthor: "Panda Toolbox Redaktion",
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
 * Startwerte für die Panda-GreenTech-Box beim Erstimport (npm run seed).
 * Danach werden Texte, Zweck und Spendenlink im Admin unter „Website-Einstellungen“ gepflegt.
 */
export const donationConfig = {
  name: "Panda GreenTech",
  headline: "Unterstütze Panda GreenTech",
  text: "Die Panda Toolbox ist kostenlos und ohne Bezahlschranke. Wenn dir diese Seite geholfen hat, kannst du mit einer freiwilligen Spende an Panda GreenTech etwas zurückgeben.",
  /** Wofür Spenden konkret verwendet werden – Pflicht vor dem Livegang. */
  purpose: "",
  /** Kurzer Hinweis, der automatisch auf jeder Landingpage erscheint. */
  notice: "Diese Seite ist Teil der Panda Toolbox. Mit Panda GreenTech wächst hier ein eigenes Projekt, das du freiwillig unterstützen kannst.",
  url: "",
  aboutHref: "/panda-branding/greentech",
};

export const legalNav = [
  { title: "Seitenstruktur", href: "/seitenstruktur" },
  { title: "Transparenz & Werbung", href: "/transparenz" },
  { title: "Impressum", href: "/impressum" },
  { title: "Datenschutz", href: "/datenschutz" },
];

/** Spendenlink für Panda GreenTech (GoFundMe-Profil). Im Admin unter „Website-Einstellungen“ änderbar. */
export const GREENTECH_URL = "https://www.gofundme.com/u/296ae88c-0583-4f07-bf00-8577db624b44";
