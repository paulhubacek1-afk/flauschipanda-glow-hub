import type { PageType } from "../lib/auto";

/** Ein Inhaltspaket: Unterthemen + fertige Seiten für eine bestehende Kategorie. */
export interface PackPage {
  slug: string;
  title: string;
  label?: string;
  pageType: PageType;
  description: string;
  focusKeyword?: string;
  linkAnchors?: string[];
  markdown: string;
  faq?: { q: string; a: string }[];
  comparison?: { title: string; columns: string[]; rows: { label: string; values: string[] }[]; note?: string };
  sources?: { title: string; url: string }[];
}

export interface PackGroup {
  slug: string;
  title: string;
  description: string;
  pages: PackPage[];
}

export interface ContentPack {
  /** eindeutiger Name, nur für Logs */
  id: string;
  /** URL-Teil der Kategorie, die befüllt wird (muss im CMS existieren) */
  categorySlug: string;
  /** optional: Symbol der Kategorie setzen, wenn noch das Standard-Symbol eingestellt ist */
  icon?: string;
  hue?: number;
  groups: PackGroup[];
}

/** Inhalt für eine bereits angelegte, aber noch leere Seite (geplanter Entwurf). */
export interface FillPage {
  /** kategorie/unterthema/seite */
  path: string;
  /** Meta-Beschreibung (70–160 Zeichen) */
  description: string;
  markdown: string;
  faq?: [string, string][];
  focusKeyword?: string;
  linkAnchors?: string[];
  comparison?: PackPage["comparison"];
  sources?: { title: string; url: string }[];
}
