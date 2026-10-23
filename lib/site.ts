/**
 * Zentrale Website-Konfiguration.
 * Die Domain steht noch nicht fest – alle internen Links sind relativ.
 * NEXT_PUBLIC_SITE_URL wird nur für Canonical-URLs, Sitemap und Open Graph gebraucht.
 */
export const siteConfig = {
  name: "FlauschiPandas",
  tagline: "Die Panda-Toolbox für Alltag, Tiere, Freizeit & KI",
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
 * Spendenbox "Panda GreenCore" – erscheint auf jeder Landingpage (abschaltbar per Frontmatter `donation: false`).
 * Zweck und Link bitte hier eintragen. Solange sie fehlen, warnt die Prüfung,
 * und im Release-Modus wird die Veröffentlichung blockiert.
 */
export const donationConfig = {
  name: "Panda GreenCore",
  headline: "Unterstütze Panda GreenCore",
  text: "FlauschiPandas ist kostenlos und ohne Bezahlschranke. Wenn dir diese Seite geholfen hat, kannst du mit einer freiwilligen Spende an Panda GreenCore etwas zurückgeben.",
  /** Wofür Spenden konkret verwendet werden – Pflicht vor dem Livegang. */
  purpose: "",
  url: process.env.NEXT_PUBLIC_DONATION_URL?.trim() || "",
  aboutHref: "/panda-branding/greencore",
};

export const legalNav = [
  { title: "Seitenstruktur", href: "/seitenstruktur" },
  { title: "Transparenz & Werbung", href: "/transparenz" },
  { title: "Impressum", href: "/impressum" },
  { title: "Datenschutz", href: "/datenschutz" },
];
