import type { Payload } from "payload";

import { createProsCons } from "../lib/editorial";
import { hierarchy } from "../lib/hierarchy";
import { contentPacks } from "../content-packs";
import type { ContentPack, PackPage } from "../content-packs/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Doc = Record<string, any>;

/**
 * Übernimmt ausgearbeitete Inhaltspakete und ergänzt fehlende Einträge der Seiten-Hierarchie.
 * Bestehende Seiten und manuelle Änderungen bleiben unverändert.
 */
const context = { skipChecks: true, skipRevalidate: true };

async function find(payload: Payload, collection: "categories" | "groups" | "pages", where: Doc, limit = 1) {
  return payload.find({ collection, where, limit, depth: 0, overrideAccess: true, draft: true });
}

function pageData(p: PackPage, groupId: number | string, path: string) {
  const prosCons = p.prosCons ?? createProsCons(path, p.title, p.markdown);
  return {
    title: p.title,
    label: p.label,
    slug: p.slug,
    group: groupId,
    pageType: p.pageType,
    _status: "published",
    publishedAt: new Date().toISOString(),
    markdown: p.markdown.trim(),
    faq: (p.faq ?? []).map((f) => ({ q: f.q, a: f.a })),
    comparison: p.comparison
      ? {
          title: p.comparison.title,
          columns: p.comparison.columns.map((name) => ({ name })),
          rows: p.comparison.rows.map((r) => ({ label: r.label, values: r.values.map((value) => ({ value })) })),
          note: p.comparison.note,
        }
      : undefined,
    prosCons: {
      pros: prosCons.pros.join("\n"),
      cons: prosCons.cons.join("\n"),
      note: prosCons.note ?? "",
    },
    donation: true,
    seo: {
      metaDescription: p.description,
      focusKeyword: p.focusKeyword,
      linkAnchors: (p.linkAnchors ?? []).map((anchor) => ({ anchor })),
      noindex: false,
    },
    sources: (p.sources ?? []).map((s) => ({ title: s.title, url: s.url })),
    factCheck: { required: true, status: "ausstehend" },
    reviewIntervalMonths: 12,
  };
}

async function applyPack(payload: Payload, pack: ContentPack): Promise<number> {
  let cat = (await find(payload, "categories", { slug: { equals: pack.categorySlug } })).docs[0] as Doc | undefined;
  if (!cat && pack.createCategory) {
    // Kategorie gibt es noch nicht → einmalig anlegen (danach im Admin frei änderbar)
    try {
      cat = (await payload.create({
        collection: "categories",
        overrideAccess: true,
        context,
        data: {
          title: pack.createCategory.title,
          slug: pack.categorySlug,
          description: pack.createCategory.description,
          icon: pack.icon ?? "paw",
          hue: pack.hue ?? 195,
        } as never,
      })) as Doc;
    } catch {
      cat = (await find(payload, "categories", { slug: { equals: pack.categorySlug } })).docs[0] as Doc | undefined;
    }
  }
  if (!cat) return 0;

  const existingGroups = (await find(payload, "groups", { category: { equals: cat.id } }, 200)).docs as Doc[];
  const packSlugs = new Set(pack.groups.map((g) => g.slug));
  const ownGroups = existingGroups.filter((g) => packSlugs.has(g.slug));
  // Kategorie hat bereits eigene (fremde) Unterthemen → Paket nicht anwenden
  if (existingGroups.length > 0 && ownGroups.length === 0) return 0;

  let changes = 0;

  // Symbol/Farbe nur setzen, solange noch die Standardwerte eingestellt sind
  if (existingGroups.length === 0 && pack.icon && (cat.icon ?? "paw") === "paw") {
    try {
      await payload.update({
        collection: "categories",
        id: cat.id,
        data: { icon: pack.icon, ...(pack.hue != null && (cat.hue ?? 195) === 195 ? { hue: pack.hue } : {}) } as never,
        overrideAccess: true,
        context,
      });
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Symbol für ${pack.categorySlug} nicht gesetzt`);
    }
  }

  for (const [gi, g] of pack.groups.entries()) {
    const groupPath = `/${pack.categorySlug}/${g.slug}`;
    let group = ownGroups.find((x) => x.slug === g.slug);

    if (!group) {
      try {
        group = (await payload.create({
          collection: "groups",
          data: { title: g.title, slug: g.slug, category: cat.id, description: g.description, order: (gi + 1) * 10 } as never,
          overrideAccess: true,
          context,
        })) as Doc;
        changes++;
      } catch {
        // parallel angelegt? → nachschlagen
        group = (await find(payload, "groups", { path: { equals: groupPath } })).docs[0] as Doc | undefined;
        if (!group) {
          payload.logger.warn(`[inhalte] Unterthema ${groupPath} konnte nicht angelegt werden`);
          continue;
        }
      }
    }

    for (const p of g.pages) {
      const pagePath = `${groupPath}/${p.slug}`;
      try {
        const exists = (await find(payload, "pages", { path: { equals: pagePath } })).docs.length > 0;
        if (exists) continue;
        await payload.create({ collection: "pages", data: pageData(p, group.id, pagePath) as never, overrideAccess: true, context });
        changes++;
      } catch (err) {
        payload.logger.warn({ err }, `[inhalte] Seite ${pagePath} konnte nicht angelegt werden`);
      }
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Fehlende Seiten aus der zentralen Hierarchie im CMS anlegen         */
/* ------------------------------------------------------------------ */

const STRUCTURE_BUDGET_MS = 30_000;

/**
 * Legt Kategorien, Unterthemen und fehlende Landingpages an.
 * Seiten ohne ausgearbeiteten Artikel bleiben Entwürfe und werden nicht veröffentlicht.
 * Bereits vorhandene Einträge werden niemals überschrieben.
 */
async function ensureHierarchyPages(payload: Payload): Promise<number> {
  const [categoryResult, groupResult, pageResult] = await Promise.all([
    payload.find({ collection: "categories", limit: 500, depth: 0, pagination: false, draft: true, overrideAccess: true }),
    payload.find({ collection: "groups", limit: 5000, depth: 0, pagination: false, draft: true, overrideAccess: true }),
    payload.find({ collection: "pages", limit: 10000, depth: 0, pagination: false, draft: true, overrideAccess: true, select: { path: true } as never }),
  ]);

  const categories = new Map<string, Doc>((categoryResult.docs as Doc[]).map((doc): [string, Doc] => [String(doc.slug), doc]));
  const groups = new Map<string, Doc>((groupResult.docs as Doc[]).map((doc): [string, Doc] => [String(doc.path ?? ""), doc]));
  const pages = new Set((pageResult.docs as Doc[]).map((doc) => String(doc.path ?? "")));
  const started = Date.now();
  let changes = 0;

  for (const [categoryIndex, categoryNode] of hierarchy.entries()) {
    if (Date.now() - started > STRUCTURE_BUDGET_MS) break;

    let category = categories.get(categoryNode.slug);
    if (!category) {
      try {
        category = (await payload.create({
          collection: "categories",
          overrideAccess: true,
          context,
          data: {
            title: categoryNode.title,
            slug: categoryNode.slug,
            description: categoryNode.description,
            icon: categoryNode.icon,
            hue: categoryNode.hue,
            order: (categoryIndex + 1) * 10,
          } as never,
        })) as Doc;
        categories.set(categoryNode.slug, category);
        changes++;
      } catch (err) {
        payload.logger.warn({ err }, "[struktur] Kategorie /" + categoryNode.slug + " konnte nicht angelegt werden");
        continue;
      }
    }

    for (const [groupIndex, groupNode] of categoryNode.groups.entries()) {
      if (Date.now() - started > STRUCTURE_BUDGET_MS) break;
      const groupPath = "/" + categoryNode.slug + "/" + groupNode.slug;
      let group = groups.get(groupPath);

      if (!group) {
        try {
          group = (await payload.create({
            collection: "groups",
            overrideAccess: true,
            context,
            data: {
              title: groupNode.title,
              slug: groupNode.slug,
              category: category.id,
              description: groupNode.description,
              order: (groupIndex + 1) * 10,
            } as never,
          })) as Doc;
          groups.set(groupPath, group);
          changes++;
        } catch (err) {
          payload.logger.warn({ err }, "[struktur] Unterthema " + groupPath + " konnte nicht angelegt werden");
          continue;
        }
      }

      for (const pageNode of groupNode.pages) {
        if (Date.now() - started > STRUCTURE_BUDGET_MS) break;
        const pagePath = groupPath + "/" + pageNode.slug;
        if (pages.has(pagePath)) continue;

        try {
          await payload.create({
            collection: "pages",
            overrideAccess: true,
            context,
            data: {
              title: pageNode.title,
              label: pageNode.label,
              slug: pageNode.slug,
              group: group.id,
              pageType: "standard",
              _status: "draft",
              donation: true,
            } as never,
          });
          pages.add(pagePath);
          changes++;
        } catch (err) {
          payload.logger.warn({ err }, "[struktur] Seite " + pagePath + " konnte nicht angelegt werden");
        }
      }
    }
  }

  return changes;
}

/* ------------------------------------------------------------------ */
/* Geplante, noch leere Seiten befüllen                                */
/* ------------------------------------------------------------------ */

const isEmptyRich = (c: unknown) => {
  const children = (c as { root?: { children?: Doc[] } } | null)?.root?.children ?? [];
  return !children.some((n) => (n.children?.length ?? 0) > 0 || n.type !== "paragraph");
};

/**
 * Entfernt alte Standardtexte aus früheren automatischen Befüllungen.
 * Von Hand bearbeitete Seiten bleiben unangetastet; betroffene Seiten werden Entwürfe.
 */
async function removeGenericFallbackPages(payload: Payload): Promise<number> {
  const result = await payload.find({
    collection: "pages",
    limit: 2000,
    depth: 0,
    draft: true,
    overrideAccess: true,
    pagination: false,
    select: { path: true, markdown: true, content: true, textSource: true, seo: true } as never,
  });
  let cleaned = 0;

  for (const doc of result.docs as Doc[]) {
    if (doc.textSource === "bearbeitet") continue;
    const source = String(doc.markdown ?? "") + JSON.stringify(doc.content ?? {});
    const isGenericFallback =
      source.includes("Der Beitrag gehört zum Bereich **") &&
      source.includes("## Kurz erklärt") &&
      source.includes("## Typische Fehler vermeiden") &&
      source.includes("## Fazit");
    if (!isGenericFallback) continue;

    const seo = (doc.seo ?? {}) as Doc;
    const description = String(seo.metaDescription ?? "");
    const genericDescription =
      description.endsWith(": Grundlagen, wichtige Kriterien, praktische Schritte und typische Fehler im Überblick.") ||
      description.endsWith(": Die wichtigsten Grundlagen, Kriterien und Schritte im Überblick.");

    try {
      await payload.update({
        collection: "pages",
        id: doc.id,
        overrideAccess: true,
        context,
        data: {
          _status: "draft",
          markdown: "",
          content: null,
          faq: [],
          prosCons: { pros: "", cons: "", note: "" },
          sources: [],
          ...(genericDescription ? { seo: { ...seo, metaDescription: "" } } : {}),
        } as never,
      });
      cleaned++;
    } catch (err) {
      payload.logger.warn({ err }, "[inhalte] Ein allgemeiner Fülltext konnte nicht entfernt werden");
    }
  }

  return cleaned;
}

/** Zeitbudget pro Start, damit ein Kaltstart nie lange blockiert – der Rest folgt beim nächsten Start. */
const FILL_BUDGET_MS = 40_000;

async function fillEmptyPages(payload: Payload): Promise<number> {
  const { fillPages } = await import("../content-packs/fill");
  if (!fillPages.length) return 0;
  const res = await payload.find({
    collection: "pages",
    limit: 2000,
    depth: 0,
    draft: true,
    overrideAccess: true,
    pagination: false,
    select: { path: true, markdown: true, content: true, pageType: true, _status: true, seo: true } as never,
  });
  const byPath = new Map((res.docs as Doc[]).map((d) => [String(d.path ?? ""), d]));
  const started = Date.now();
  let changes = 0;

  for (const f of fillPages) {
    if (Date.now() - started > FILL_BUDGET_MS) break;
    const doc = byPath.get(`/${f.path}`);
    if (!doc) continue; // Seite gibt es (nicht mehr) – nichts anlegen
    if (String(doc.markdown ?? "").trim() || !isEmptyRich(doc.content)) continue; // schon Inhalt → nie überschreiben
    const seo = (doc.seo ?? {}) as Doc;
    const prosCons = f.prosCons ?? createProsCons(f.path, doc.title, f.markdown);
    try {
      await payload.update({
        collection: "pages",
        id: doc.id,
        overrideAccess: true,
        context,
        data: {
          _status: "published",
          publishedAt: new Date().toISOString(),
          markdown: f.markdown.trim(),
          faq: (f.faq ?? []).map(([q, a]) => ({ q, a })),
          prosCons: {
            pros: prosCons.pros.join("\n"),
            cons: prosCons.cons.join("\n"),
            note: prosCons.note ?? "",
          },
          ...(f.comparison
            ? {
                comparison: {
                  title: f.comparison.title,
                  columns: f.comparison.columns.map((name) => ({ name })),
                  rows: f.comparison.rows.map((r) => ({ label: r.label, values: r.values.map((value) => ({ value })) })),
                  note: f.comparison.note,
                },
              }
            : {}),
          seo: {
            ...seo,
            metaDescription: seo.metaDescription || f.description,
            focusKeyword: seo.focusKeyword || f.focusKeyword,
            linkAnchors: seo.linkAnchors?.length ? seo.linkAnchors : (f.linkAnchors ?? []).map((anchor) => ({ anchor })),
          },
          sources: (f.sources ?? []).map((s) => ({ title: s.title, url: s.url })),
          factCheck: { required: true, status: "ausstehend" },
        } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Seite /${f.path} konnte nicht befüllt werden`);
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Affiliate-Plan: vorbereitete Partnerlink-Plätze je Themenbereich       */
/* ------------------------------------------------------------------ */

/**
 * Für jeden geplanten Einnahmebereich ein paar Platzhalter-Partnerlinks, schon mit „Passt zu“
 * (Kategorie bzw. Unterthema) verknüpft. Sie erscheinen nie öffentlich, bis jemand im Admin den
 * echten Partnerlink einträgt und den Haken „Platzhalter-Link“ entfernt. Danach tauchen sie
 * automatisch auf allen passenden Seiten in der Box „Passende Empfehlungen“ auf.
 * Konditionen und Freischaltung immer beim jeweiligen Partnerprogramm prüfen.
 */
const AFFILIATE_PLAN: { key: string; name: string; label: string; network: string; topics: string[] }[] = [
  // 1 · KI-Software
  { key: "plan-ki-bild", name: "KI-Bildgenerator (Partnerlink eintragen)", label: "KI-Software", network: "Partnerprogramm des Anbieters prüfen", topics: ["ki/bildgeneratoren", "tiere/tier-ki-prompts"] },
  { key: "plan-ki-video", name: "KI-Video- oder Transkriptions-Tool (Partnerlink eintragen)", label: "KI-Software", network: "Partnerprogramm des Anbieters prüfen", topics: ["ki", "creator/youtube"] },
  { key: "plan-ki-automation", name: "Automatisierungs-Tool (Partnerlink eintragen)", label: "KI-Software", network: "Partnerprogramm des Anbieters prüfen", topics: ["ki/ki-basics", "tools-apps/automatisierung"] },
  // 2 · Hosting & Website
  { key: "plan-hosting", name: "Webhosting & Domain (z. B. IONOS – Partnerlink eintragen)", label: "Website starten", network: "IONOS Partnerprogramm", topics: ["tools-apps/business-tools", "creator/branding", "finanzen-sparen/online-verdienen"] },
  { key: "plan-wp-hosting", name: "WordPress-Hosting (z. B. Kinsta – Partnerlink eintragen)", label: "Website starten", network: "Kinsta Partnerprogramm", topics: ["tools-apps/business-tools", "creator/monetarisierung"] },
  // 3 · Creator-Ausrüstung
  { key: "plan-creator-mikro", name: "Mikrofon für YouTube & Podcast (Partnerlink eintragen)", label: "Creator-Ausrüstung", network: "z. B. Amazon PartnerNet", topics: ["creator/youtube", "musik-entertainment/musikproduktion"] },
  { key: "plan-creator-licht", name: "Ringlicht & Stativ (Partnerlink eintragen)", label: "Creator-Ausrüstung", network: "z. B. Amazon PartnerNet", topics: ["creator/youtube", "creator/content-planung"] },
  { key: "plan-creator-schnitt", name: "Schnitt- & Untertitel-Software (Partnerlink eintragen)", label: "Creator-Ausrüstung", network: "Partnerprogramm des Anbieters prüfen", topics: ["creator/youtube", "tools-apps/youtube-tools"] },
  // 4 · Kurse & Bücher
  { key: "plan-buecher", name: "Bücher, E-Books & Hörbücher (z. B. Hugendubel – Partnerlink eintragen)", label: "Bücher & Kurse", network: "Hugendubel Partnerprogramm", topics: ["ki/ki-basics", "wissenschaft-astrologie", "babys-kinder/lernen"] },
  { key: "plan-kurse", name: "Online-Kurs (KI, Programmieren, Creator – Partnerlink eintragen)", label: "Bücher & Kurse", network: "Lernplattform-Partnerprogramm prüfen", topics: ["ki/ki-basics", "creator/monetarisierung"] },
  // 5 · Tierzubehör
  { key: "plan-tier-hund", name: "Hundezubehör: Spielzeug, Betten, Transport (z. B. zooplus – Partnerlink eintragen)", label: "Tierzubehör", network: "zooplus Partnerprogramm", topics: ["tiere/hunde", "urlaub-reisen/mit-hund"] },
  { key: "plan-tier-katze", name: "Katzenzubehör: Kratzbaum, Spielzeug, Katzenklo (z. B. zooplus – Partnerlink eintragen)", label: "Tierzubehör", network: "zooplus Partnerprogramm", topics: ["tiere/katzen"] },
  { key: "plan-tier-klein", name: "Kleintierbedarf: Gehege, Käfig, Heu (Partnerlink eintragen)", label: "Tierzubehör", network: "zooplus Partnerprogramm", topics: ["tiere/kaninchen", "tiere/meerschweinchen", "tiere/hamster"] },
  // 6 · Reisen & Freizeit
  { key: "plan-reise-hotel", name: "Hotels & Pauschalreisen (z. B. DERTOUR – Partnerlink eintragen)", label: "Reisen & Freizeit", network: "DERTOUR Partnerprogramm", topics: ["urlaub-reisen/unterkuenfte", "urlaub-reisen/familienurlaub", "urlaub-reisen/urlaubsziele"] },
  { key: "plan-reise-park", name: "Freizeitpark-Tickets & Erlebnisse (Partnerlink eintragen)", label: "Reisen & Freizeit", network: "Ticket-/Erlebnis-Partnerprogramm prüfen", topics: ["freizeitparks", "zoos"] },
  { key: "plan-reise-gepaeck", name: "Reisegepäck & Ausflugszubehör (Partnerlink eintragen)", label: "Reisen & Freizeit", network: "z. B. Amazon PartnerNet", topics: ["urlaub-reisen/reiseplanung", "babys-kinder/ausfluege"] },
  // 7 · Homeoffice & Technik
  { key: "plan-office-stuhl", name: "Ergonomischer Bürostuhl & Schreibtisch (Partnerlink eintragen)", label: "Homeoffice & Technik", network: "z. B. Amazon PartnerNet", topics: ["pc-und-hardware", "haushalt-wohnen/einrichtung"] },
  { key: "plan-office-technik", name: "Monitor, Tastatur & Headset (Partnerlink eintragen)", label: "Homeoffice & Technik", network: "z. B. Amazon PartnerNet", topics: ["pc-und-hardware"] },
];

/**
 * Echte Partnerlinks, die das Team vorgegeben hat. Werden einmal angelegt (Kennung = key) –
 * danach im Admin frei bearbeitbar, hier wird nichts überschrieben.
 */
const ABLEFY = "?pid=126073&prid=9106&upsells=none";
const ablefy = (slug: string) => `https://myablefy.com/s/rafaelbettencourt/${slug}/payment${ABLEFY}`;
const SPIRIT_PAGE = "/gesundheit-wohlbefinden/achtsamkeit/spiritualitaet-im-alltag";
const SPIRIT_NOTE = "Spirituelles Angebot zur persönlichen Entwicklung – kein Ersatz für Finanz-, Rechts- oder Gesundheitsberatung.";
const FIXED_AFFILIATES: { key: string; name: string; url: string; label: string; pitch: string; groups: string[]; pages: string[] }[] = [
  {
    key: "ablefy-purpose-meditation",
    name: "Powerful Purpose Meditation – Finde deine Bestimmung",
    url: ablefy("finde-deine-bestimmung-die-powerful-purpose-meditation-66d736ec"),
    label: "Meditation",
    pitch: "Geführte Meditation von Rafael Bettencourt zur Frage „Was ist meine Bestimmung?“ – als digitaler Download für ruhige Momente. Preis laut Anbieter ca. 36 € (Stand Oktober 2026).",
    groups: ["gesundheit-wohlbefinden/achtsamkeit"],
    pages: [SPIRIT_PAGE],
  },
  {
    key: "ablefy-true-connection",
    name: "TRUE CONNECTION Meditation – für zwei",
    url: ablefy("die-true-connection-meditation"),
    label: "Meditation",
    pitch: "Geführte Meditation (knapp 20 Minuten, Download) für zwei Personen – zum Beispiel mit Partner, Freundin oder Familie, um sich bewusst Zeit füreinander zu nehmen. Preis laut Anbieter ca. 40 € (Stand Oktober 2026).",
    groups: ["gesundheit-wohlbefinden/achtsamkeit"],
    pages: [SPIRIT_PAGE],
  },
  {
    key: "ablefy-magic-of-manifestation",
    name: "Magic of Manifestation – Meditation",
    url: ablefy("magic-of-manifestation"),
    label: "Manifestation",
    pitch: `Geführte Meditation (ca. 15 Minuten, Download), die durch Rafael Bettencourts „Manifestationsschritte“ führt – für alle, die sich für Manifestation interessieren. Preis laut Anbieter ca. 37 €. ${SPIRIT_NOTE}`,
    groups: [],
    pages: [SPIRIT_PAGE],
  },
  {
    key: "ablefy-magnet-of-abundance",
    name: "Magnet of Abundance – Meditation (FülleMagnet 2.0)",
    url: ablefy("magnet-of-abundance"),
    label: "Manifestation",
    pitch: `Geführte Fülle-Meditation, die Neuauflage der FülleMagnet-Meditation des Anbieters, als Download. Preis laut Anbieter ca. 63 €. ${SPIRIT_NOTE}`,
    groups: [],
    pages: [SPIRIT_PAGE],
  },
  {
    key: "ablefy-instant-money-manifestation",
    name: "Instant Money Manifestation – Session",
    url: ablefy("instant-money-manifestation"),
    label: "Manifestation",
    pitch: `Geführte Meditations-Session (ca. 25 Minuten, Download) rund um das Thema Geld und innere Haltung. Preis laut Anbieter ca. 39 €. ${SPIRIT_NOTE}`,
    groups: [],
    pages: [SPIRIT_PAGE],
  },
  {
    key: "ablefy-magnetic-sales-bundle",
    name: "Magnetic Sales Bundle",
    url: ablefy("das-magnetic-sales-bundle-2ca25d2d"),
    label: "Mindset",
    pitch: `Paket aus einer Meditation zur Vorbereitung auf Verkaufsgespräche und einem Gesprächsleitfaden – für Selbstständige, die Achtsamkeit und Vertrieb verbinden wollen. Preis laut Anbieter ca. 56 €. ${SPIRIT_NOTE}`,
    groups: [],
    pages: [SPIRIT_PAGE],
  },
  {
    key: "ablefy-moneylove",
    name: "MoneyLove – 8-Wochen-Coaching",
    url: ablefy("moneylove-werde-zu-einem-magneten-fuer-geld-fuelle"),
    label: "Coaching",
    pitch: `Achtwöchiges Online-Coachingprogramm rund um die eigene Einstellung zu Geld – mit Aufzeichnungen, Q&A-Videos und Community. Größere Investition (laut Anbieter 777 € einmalig oder in Raten), daher vorher in Ruhe prüfen. ${SPIRIT_NOTE}`,
    groups: [],
    pages: [SPIRIT_PAGE],
  },
];

async function ensureFixedAffiliates(payload: Payload): Promise<number> {
  const existing = (
    await payload.find({
      collection: "affiliates",
      where: { key: { in: FIXED_AFFILIATES.map((a) => a.key) } },
      limit: 100,
      depth: 0,
      overrideAccess: true,
      pagination: false,
      select: { key: true } as never,
    })
  ).docs as Doc[];
  const have = new Set(existing.map((a) => String(a.key)));
  const todo = FIXED_AFFILIATES.filter((a) => !have.has(a.key));
  if (!todo.length) return 0;

  const groups = (
    await payload.find({ collection: "groups", limit: 2000, depth: 0, overrideAccess: true, pagination: false, select: { path: true } as never })
  ).docs as Doc[];
  const groupByPath = new Map(groups.map((g) => [String(g.path), g.id]));
  const created = new Map<string, (string | number)[]>(); // Seitenpfad → neue Produkt-IDs
  let changes = 0;
  for (const a of todo) {
    try {
      const doc = (await payload.create({
        collection: "affiliates",
        overrideAccess: true,
        context,
        data: {
          name: a.name,
          key: a.key,
          url: a.url,
          network: "ablefy",
          label: a.label,
          pitch: a.pitch,
          topics: a.groups.filter((g) => groupByPath.has(`/${g}`)).map((g) => ({ relationTo: "groups", value: groupByPath.get(`/${g}`) })),
          active: true,
          placeholder: false,
        } as never,
      })) as Doc;
      for (const p of a.pages) created.set(p, [...(created.get(p) ?? []), doc.id]);
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Partnerlink ${a.key} nicht angelegt`);
    }
  }
  // neue Produkte an die passenden Seiten hängen (bestehende Auswahl bleibt erhalten)
  for (const [path, ids] of created) {
    const page = (
      await payload.find({ collection: "pages", where: { path: { equals: path } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    ).docs[0] as Doc | undefined;
    if (!page) continue;
    const current = ((page.products ?? []) as unknown[]).map((p) => (p && typeof p === "object" ? (p as Doc).id : p));
    try {
      await payload.update({
        collection: "pages",
        id: page.id,
        overrideAccess: true,
        context,
        draft: page._status !== "published",
        data: { products: [...current, ...ids] } as never,
      });
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Partnerlinks an ${path} nicht verknüpft`);
    }
  }
  return changes;
}

async function ensureAffiliatePlan(payload: Payload): Promise<number> {
  const existing = (
    await payload.find({
      collection: "affiliates",
      where: { key: { like: "plan-" } },
      limit: 200,
      depth: 0,
      overrideAccess: true,
      pagination: false,
      select: { key: true } as never,
    })
  ).docs as Doc[];
  const have = new Set(existing.map((a) => String(a.key)));
  const todo = AFFILIATE_PLAN.filter((p) => !have.has(p.key));
  if (!todo.length) return 0;

  const [cats, groups] = await Promise.all([
    payload.find({ collection: "categories", limit: 200, depth: 0, overrideAccess: true, pagination: false, select: { slug: true } as never }),
    payload.find({ collection: "groups", limit: 2000, depth: 0, overrideAccess: true, pagination: false, select: { path: true } as never }),
  ]);
  const catBySlug = new Map((cats.docs as Doc[]).map((c) => [String(c.slug), c.id]));
  const groupByPath = new Map((groups.docs as Doc[]).map((g) => [String(g.path), g.id]));
  let changes = 0;
  for (const p of todo) {
    const topics = p.topics
      .map((t) =>
        t.includes("/")
          ? groupByPath.has(`/${t}`) && { relationTo: "groups", value: groupByPath.get(`/${t}`) }
          : catBySlug.has(t) && { relationTo: "categories", value: catBySlug.get(t) },
      )
      .filter(Boolean);
    try {
      await payload.create({
        collection: "affiliates",
        overrideAccess: true,
        context,
        data: {
          name: p.name,
          key: p.key,
          url: "https://partnerlink-eintragen.invalid",
          network: p.network,
          label: p.label,
          pitch: "Hier kurz und ehrlich beschreiben, warum ihr das Produkt empfehlt (gern mit Vor- und Nachteilen). Danach Produktname und Partnerlink eintragen und den Haken „Platzhalter-Link“ entfernen.",
          topics,
          active: true,
          placeholder: true,
        } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Affiliate-Plan ${p.key} nicht angelegt`);
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Ausführliche Neufassungen (nur unveränderte oder leere Seiten)       */
/* ------------------------------------------------------------------ */

async function upgradePages(payload: Payload): Promise<number> {
  const { upgradePages: upgrades, groupUpgrades } = await import("../content-packs/upgrades");
  const { fillPages } = await import("../content-packs/fill");
  const oldByPath = new Map(fillPages.map((f) => [f.path, f]));
  let changes = 0;

  for (const u of upgrades) {
    const doc = (
      await payload.find({ collection: "pages", where: { path: { equals: `/${u.path}` } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
    ).docs[0] as Doc | undefined;
    if (!doc) continue;
    const current = String(doc.markdown ?? "").trim();
    const old = oldByPath.get(u.path);
    const richEmpty = isEmptyRich(doc.content);
    // nur unveränderte Seiten: leer, oder noch der ursprünglich erzeugte Text (auch wenn er schon automatisch in den Editor übernommen wurde)
    const untouched =
      doc.textSource !== "bearbeitet" &&
      ((!current && richEmpty) || (old && current === old.markdown.trim() && (richEmpty || doc.textSource === "auto")));
    if (!untouched || current === u.markdown.trim()) continue; // von Hand bearbeitet oder schon neu → nicht anfassen
    const seo = (doc.seo ?? {}) as Doc;
    const prosCons = u.prosCons ?? createProsCons(u.path, doc.title, u.markdown);
    const keepDescription = seo.metaDescription && seo.metaDescription !== old?.description;
    try {
      await payload.update({
        collection: "pages",
        id: doc.id,
        overrideAccess: true,
        context,
        data: {
          _status: "published",
          ...(doc.publishedAt ? {} : { publishedAt: new Date().toISOString() }),
          markdown: u.markdown.trim(),
          content: null, // wird anschließend automatisch in den Editor übernommen
          textSource: "auto",
          faq: (u.faq ?? []).map(([q, a]) => ({ q, a })),
          prosCons: {
            pros: prosCons.pros.join("\n"),
            cons: prosCons.cons.join("\n"),
            note: prosCons.note ?? "",
          },
          ...(u.comparison
            ? {
                comparison: {
                  title: u.comparison.title,
                  columns: u.comparison.columns.map((name) => ({ name })),
                  rows: u.comparison.rows.map((r) => ({ label: r.label, values: r.values.map((value) => ({ value })) })),
                  note: u.comparison.note,
                },
              }
            : {}),
          seo: {
            ...seo,
            metaDescription: keepDescription ? seo.metaDescription : u.description,
            focusKeyword: seo.focusKeyword || u.focusKeyword,
            linkAnchors: seo.linkAnchors?.length ? seo.linkAnchors : (u.linkAnchors ?? []).map((anchor) => ({ anchor })),
          },
          sources: (u.sources ?? []).map((s) => ({ title: s.title, url: s.url })),
          factCheck: { required: true, status: "ausstehend" },
        } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Neufassung /${u.path} fehlgeschlagen`);
    }
  }

  for (const g of groupUpgrades) {
    const group = (await find(payload, "groups", { path: { equals: g.path } })).docs[0] as Doc | undefined;
    if (group && String(group.description ?? "").trim() === g.oldDescription) {
      await payload.update({ collection: "groups", id: group.id, overrideAccess: true, context, data: { description: g.description } as never });
      changes++;
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Alte Markdown-Texte in den Editor übernehmen                          */
/* ------------------------------------------------------------------ */

const TABLE_DIVIDER = /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/;

/** Markdown in Abschnitte teilen: normaler Text und Tabellen (Tabellen werden zu Blöcken „Tabelle“). */
function splitTables(md: string) {
  const lines = md.split("\n");
  const parts: { table: boolean; text: string }[] = [];
  let buf: string[] = [];
  const flush = (table: boolean) => {
    if (buf.join("").trim()) parts.push({ table, text: buf.join("\n").trim() });
    buf = [];
  };
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith("|") && TABLE_DIVIDER.test(lines[i + 1] ?? "")) {
      flush(false);
      while (i < lines.length && lines[i].trim().startsWith("|")) buf.push(lines[i++]);
      i--;
      flush(true);
    } else buf.push(lines[i]);
  }
  flush(false);
  return parts;
}

const objectId = () => Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join("");

/** Kennzahlen eines HTML-Texts – damit beim Umwandeln nichts verloren geht. */
function htmlStats(html: string) {
  const count = (re: RegExp) => (html.match(re) ?? []).length;
  const text = html.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
  return { h: count(/<h[2-6][\s>]/g), li: count(/<li[\s>]/g), a: count(/<a\s/g), table: count(/<table[\s>]/g), len: text.length };
}

/** Übernahme in den Editor: kleine Portionen pro Start, damit die Datenbank nicht lange belegt ist */
const CONVERT_BUDGET_MS = 12_000;

async function convertPagesToEditor(payload: Payload): Promise<number> {
  const started = Date.now();
  const { convertMarkdownToLexical, editorConfigFactory } = await import("@payloadcms/richtext-lexical");
  const { convertLexicalToHTML } = await import("@payloadcms/richtext-lexical/html");
  const { htmlConverters, markdownTableToHtml } = await import("../lib/lexical-html");
  const { editorFeatures } = await import("./editor");
  const editorConfig = await editorConfigFactory.fromFeatures({ config: payload.config, features: editorFeatures as never });

  const res = await payload.find({
    collection: "pages",
    limit: 2000,
    depth: 0,
    draft: true,
    overrideAccess: true,
    pagination: false,
    select: { path: true, markdown: true, content: true, textSource: true, _status: true } as never,
  });
  let changes = 0;
  let skipped = 0;
  for (const doc of res.docs as Doc[]) {
    if (Date.now() - started > CONVERT_BUDGET_MS) break;
    const md = String(doc.markdown ?? "").trim();
    if (!md || !isEmptyRich(doc.content) || doc.textSource === "bearbeitet") continue;
    try {
      const children: Doc[] = [];
      for (const part of splitTables(md)) {
        if (part.table) {
          children.push({ type: "block", version: 2, format: "", fields: { id: objectId(), blockName: "", blockType: "tabelle", markdown: part.text } });
        } else {
          const json = convertMarkdownToLexical({ editorConfig, markdown: part.text }) as unknown as { root: { children: Doc[] } };
          children.push(...json.root.children);
        }
      }
      const content = { root: { type: "root", format: "", indent: 0, version: 1, direction: "ltr", children } };
      // Prüfen: gleich viele Überschriften, Listenpunkte, Links und Tabellen, gleiche Textlänge (± 10 %)
      const before = htmlStats(markdownTableToHtml(md));
      const after = htmlStats(convertLexicalToHTML({ data: content as never, converters: htmlConverters }));
      const ok =
        before.h === after.h &&
        before.li === after.li &&
        before.a === after.a &&
        before.table === after.table &&
        after.len >= before.len * 0.9 &&
        after.len <= before.len * 1.1;
      if (!ok) {
        skipped++;
        payload.logger.warn(`[inhalte] ${doc.path}: Übernahme in den Editor übersprungen (${JSON.stringify({ before, after })})`);
        continue;
      }
      await payload.update({
        collection: "pages",
        id: doc.id,
        overrideAccess: true,
        context,
        draft: doc._status !== "published",
        data: { content, textSource: doc.textSource || "auto" } as never,
      });
      changes++;
    } catch (err) {
      skipped++;
      payload.logger.warn({ err }, `[inhalte] ${doc.path}: Übernahme in den Editor fehlgeschlagen`);
    }
  }
  if (skipped) payload.logger.info(`[inhalte] ${skipped} Seiten bleiben vorerst im alten Textformat`);
  return changes;
}

/* ------------------------------------------------------------------ */
/* Money Pages: vorbereitete Partnerlink-Plätze                         */
/* ------------------------------------------------------------------ */

const SLOTS_PER_PAGE = 3;

/**
 * Legt für jede Money Page ohne eigene Produkte drei Platzhalter-Partnerlinks an und verknüpft sie
 * (Seite → Tab „Monetarisierung“). Platzhalter erscheinen nie auf der Website. Zum Aktivieren:
 * Produkt öffnen → Name, Partnerlink und Text eintragen → Haken „Platzhalter-Link“ entfernen.
 */
async function ensureAffiliateSlots(payload: Payload): Promise<number> {
  const pages = (
    await payload.find({
      collection: "pages",
      where: { pageType: { equals: "money" } },
      limit: 500,
      depth: 0,
      draft: true,
      overrideAccess: true,
      pagination: false,
      select: { title: true, path: true, products: true, group: true, _status: true } as never,
    })
  ).docs as Doc[];
  const existing = (
    await payload.find({
      collection: "affiliates",
      where: { key: { like: "platz-" } },
      limit: 3000,
      depth: 0,
      overrideAccess: true,
      pagination: false,
      select: { key: true } as never,
    })
  ).docs as Doc[];
  const keys = new Set(existing.map((a) => String(a.key)));
  let changes = 0;

  for (const page of pages) {
    if ((page.products ?? []).length > 0) continue;
    if (keys.has(`platz-${page.id}-1`)) continue; // schon einmal angelegt (ggf. vom Team wieder entfernt)
    const ids: (number | string)[] = [];
    try {
      for (let i = 1; i <= SLOTS_PER_PAGE; i++) {
        const a = (await payload.create({
          collection: "affiliates",
          overrideAccess: true,
          context,
          data: {
            name: `Partnerlink ${i} · ${page.title}`,
            key: `platz-${page.id}-${i}`,
            url: "https://partnerlink-eintragen.invalid",
            label: page.title,
            pitch: "Hier kurz und ehrlich beschreiben, warum ihr das Produkt empfehlt. Danach den Partnerlink eintragen und den Haken „Platzhalter-Link“ entfernen.",
            topics: page.group ? [{ relationTo: "groups", value: typeof page.group === "object" ? page.group.id : page.group }] : [],
            active: true,
            placeholder: true,
          } as never,
        })) as Doc;
        ids.push(a.id);
      }
      await payload.update({
        collection: "pages",
        id: page.id,
        overrideAccess: true,
        context,
        draft: page._status !== "published",
        data: { products: ids } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Partnerlink-Plätze für ${page.path} nicht angelegt`);
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Umbenennung: Panda GreenCore → Panda GreenTech (einmalig)            */
/* ------------------------------------------------------------------ */

/** Spendenlink für Panda GreenTech – das GoFundMe-Profil mit allen Aktionen. */
export const GREENTECH_DONATE_URL = "https://www.gofundme.com/u/296ae88c-0583-4f07-bf00-8577db624b44";
const OLD_DONATE_URL = "https://www.gofundme.com/f/panda-greentech-nachhaltige-energie-fur-die-zukunft";
const swap = (v: unknown) => (typeof v === "string" ? v.replace(/GreenCore/g, "GreenTech").replace(/\/panda-branding\/greencore/g, "/panda-branding/greentech") : v);

async function renameGreenTech(payload: Payload): Promise<number> {
  let changes = 0;
  // Unterthema /panda-branding/greencore → /panda-branding/greentech (Seiten-URLs ziehen automatisch mit)
  const group = (await find(payload, "groups", { path: { equals: "/panda-branding/greencore" } })).docs[0] as Doc | undefined;
  if (group) {
    await payload.update({ collection: "groups", id: group.id, overrideAccess: true, context, data: { title: swap(group.title), slug: "greentech", description: swap(group.description) } as never });
    changes++;
  }
  // Seitentitel/-adressen mit „GreenCore“
  const pages = (await payload.find({ collection: "pages", where: { title: { like: "GreenCore" } }, draft: true, limit: 50, depth: 0, overrideAccess: true })).docs as Doc[];
  for (const p of pages) {
    await payload.update({
      collection: "pages",
      id: p.id,
      overrideAccess: true,
      context,
      draft: p._status !== "published",
      data: { title: swap(p.title), label: swap(p.label), slug: String(p.slug).replace(/greencore/g, "greentech") } as never,
    });
    changes++;
  }
  // Kategorie-Beschreibung
  const cat = (await find(payload, "categories", { slug: { equals: "panda-branding" } })).docs[0] as Doc | undefined;
  if (cat && /GreenCore/.test(String(cat.description ?? ""))) {
    await payload.update({ collection: "categories", id: cat.id, overrideAccess: true, context, data: { description: swap(cat.description) } as never });
    changes++;
  }
  // Website-Einstellungen: Texte umbenennen, Spendenlink und Zweck setzen, falls noch leer
  const settings = (await payload.findGlobal({ slug: "site-settings", depth: 0, overrideAccess: true })) as Doc;
  const g = (settings.greencore ?? {}) as Doc;
  const next: Doc = {};
  for (const k of ["name", "headline", "text", "notice", "aboutHref", "purpose"]) if (typeof g[k] === "string" && swap(g[k]) !== g[k]) next[k] = swap(g[k]);
  if (!g.url || g.url === OLD_DONATE_URL) next.url = GREENTECH_DONATE_URL;
  if (!g.purpose)
    next.purpose =
      "Material, Bauteile, Prototypen, Tests und Werkzeug für die Entwicklung umweltfreundlicher Energie-Ideen wie Panda HomeCore.";
  if (Object.keys(next).length) {
    await payload.updateGlobal({ slug: "site-settings", overrideAccess: true, context, data: { greencore: { ...g, ...next } } as never });
    changes++;
  }
  return changes;
}

/** Alten Link zur einzelnen Spendenaktion in Seiten durch das GoFundMe-Profil ersetzen (einmalig, idempotent). */
async function updateDonateLinks(payload: Payload): Promise<number> {
  const res = await payload.find({
    collection: "pages",
    where: { or: [{ markdown: { contains: OLD_DONATE_URL } }, { "sources.url": { equals: OLD_DONATE_URL } }] },
    draft: true,
    limit: 100,
    depth: 0,
    overrideAccess: true,
  });
  let changes = 0;
  for (const p of res.docs as Doc[]) {
    const md = String(p.markdown ?? "")
      .replace(/\[Zur Spendenaktion[^\]]*\]\(https:\/\/www\.gofundme\.com\/f\/panda-greentech[^)]*\)/g, `[Zur Spendenseite von Panda GreenTech auf GoFundMe](${GREENTECH_DONATE_URL})`)
      .split(OLD_DONATE_URL)
      .join(GREENTECH_DONATE_URL);
    const sources = ((p.sources ?? []) as Doc[]).map((s) =>
      s.url === OLD_DONATE_URL ? { title: "GoFundMe – Panda GreenTech", url: GREENTECH_DONATE_URL } : { title: s.title, url: s.url },
    );
    // doppelte Quellen (Profil war teils schon eingetragen) zusammenführen
    const seen = new Set<string>();
    const unique = sources.filter((s) => (seen.has(s.url) ? false : (seen.add(s.url), true)));
    try {
      await payload.update({
        collection: "pages",
        id: p.id,
        overrideAccess: true,
        context,
        draft: p._status !== "published",
        data: { markdown: md, sources: unique } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Spendenlink in ${p.path} nicht ersetzt`);
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Umbenennung: Panda „Bambus“ → Flauschipanda (einmalig, idempotent)    */
/* ------------------------------------------------------------------ */

const PANDA_NAME: [string, string][] = [
  ["Panda Bambus", "Flauschipanda"],
  ["Das ist **Bambus**, unser Panda-Buddy", "Das ist **Flauschipanda**, unser Panda-Buddy"],
  ["Speichert Bambus meine Daten?", "Speichert Flauschipanda meine Daten?"],
  ["Bambus merkt sich Interessen", "Flauschipanda merkt sich Interessen"],
];
const renameText = (v: unknown) => (typeof v === "string" ? PANDA_NAME.reduce((t, [a, b]) => t.split(a).join(b), v) : v);

async function renamePanda(payload: Payload): Promise<number> {
  const res = await payload.find({
    collection: "pages",
    where: { or: PANDA_NAME.map(([a]) => ({ markdown: { contains: a } })) },
    draft: true,
    limit: 50,
    depth: 0,
    overrideAccess: true,
  });
  let changes = 0;
  for (const p of res.docs as Doc[]) {
    const seo = (p.seo ?? {}) as Doc;
    try {
      await payload.update({
        collection: "pages",
        id: p.id,
        overrideAccess: true,
        context,
        draft: p._status !== "published",
        data: { markdown: renameText(p.markdown), seo: { ...seo, metaDescription: renameText(seo.metaDescription) } } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Panda-Name in ${p.path} nicht ersetzt`);
    }
  }
  return changes;
}

/**
 * Kennung des aktuellen Code-Stands. Die Inhaltspakete laufen pro Stand nur EINMAL (nicht bei
 * jedem Kaltstart), damit die Datenbank nicht bei jedem Start komplett durchsucht wird.
 */
const PACK_RUN_KEY = `inhalte:${(process.env.VERCEL_GIT_COMMIT_SHA || process.env.VERCEL_DEPLOYMENT_ID || "lokal").slice(0, 40)}`;
let packsStarted = false;

type Exec = { execute: (q: unknown) => Promise<unknown> };
const drizzleOf = (payload: Payload) => (payload.db as unknown as { drizzle?: Exec }).drizzle;

async function alreadyApplied(payload: Payload): Promise<boolean> {
  const db = drizzleOf(payload);
  if (!db) return false;
  try {
    const { sql } = await import("@payloadcms/db-postgres");
    const res = (await db.execute(sql`SELECT 1 AS hit FROM "fp_counters" WHERE "key" = ${PACK_RUN_KEY} LIMIT 1`)) as { rows?: unknown[] } | unknown[];
    const rows = Array.isArray(res) ? res : (res?.rows ?? []);
    return rows.length > 0;
  } catch {
    return false;
  }
}

async function markApplied(payload: Payload) {
  const db = drizzleOf(payload);
  if (!db) return;
  try {
    const { sql } = await import("@payloadcms/db-postgres");
    await db.execute(sql`
      INSERT INTO "fp_counters" ("key", "value", "updated_at") VALUES (${PACK_RUN_KEY}, 1, now())
      ON CONFLICT ("key") DO UPDATE SET "value" = "fp_counters"."value" + 1, "updated_at" = now()
    `);
  } catch (err) {
    payload.logger.warn({ err }, "[inhalte] Lauf konnte nicht vermerkt werden");
  }
}

export async function applyContentPacks(payload: Payload) {
  if (process.env.CONTENT_PACKS === "off") return;
  if (packsStarted) return;
  packsStarted = true;
  if (process.env.CONTENT_PACKS !== "always" && (await alreadyApplied(payload))) return;
  let total = 0;
  const run = async (name: string, step: (p: Payload) => Promise<number>) => {
    try {
      const n = await step(payload);
      if (n) payload.logger.info(`[inhalte] ${name}: ${n} Einträge`);
      total += n;
    } catch (err) {
      payload.logger.error({ err }, `[inhalte] ${name} fehlgeschlagen`);
    }
  };
  await run("GreenTech-Umbenennung", renameGreenTech);
  await run("GreenTech-Spendenlink", updateDonateLinks);
  await run("Panda-Name", renamePanda);
  await run("Allgemeine Fülltexte entfernen", removeGenericFallbackPages);
  for (const pack of contentPacks) {
    try {
      const n = await applyPack(payload, pack);
      if (n) payload.logger.info(`[inhalte] ${pack.id}: ${n} Einträge angelegt`);
      total += n;
    } catch (err) {
      payload.logger.error({ err }, `[inhalte] Paket ${pack.id} fehlgeschlagen`);
    }
  }
  await run("Fehlende Seitenstruktur ergänzen", ensureHierarchyPages);
  await run("Seiten befüllen", fillEmptyPages);
  await run("Ausführliche Neufassungen", upgradePages);
  await run("Texte in den Editor übernehmen", convertPagesToEditor);
  await run("Partnerlink-Plätze", ensureAffiliateSlots);
  await run("Affiliate-Plan", ensureAffiliatePlan);
  await run("Feste Partnerlinks", ensureFixedAffiliates);
  await markApplied(payload);
  if (total > 0) {
    try {
      const { revalidatePath, revalidateTag } = await import("next/cache");
      revalidateTag("cms", { expire: 0 });
      revalidatePath("/", "layout");
    } catch {
      /* außerhalb einer Anfrage – der nächste Cache-Ablauf übernimmt */
    }
  }
}
