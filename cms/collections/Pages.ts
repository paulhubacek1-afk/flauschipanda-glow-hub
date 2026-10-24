import { APIError, type CollectionBeforeChangeHook, type CollectionConfig } from "payload";

import {
  DESCRIPTION_MAX,
  DESCRIPTION_MIN,
  PAGE_TYPE_LABELS,
  SEO_TITLE_MAX,
  autoDescription,
  autoLinkAnchors,
  autoSeoTitle,
  breadcrumbText,
  type PageType,
} from "../../lib/auto";
import { publishedOrTeam, roleOf, isTeam, isEditorOrAdmin } from "../access";
import { autoSlug, revalidateAfterChange, revalidateAfterDelete } from "../hooks";
import { lexicalToPlainText } from "../lexical-text";

/**
 * Landingpages – dritte Ebene der Hierarchie: /kategorie/unterthema/seite
 *
 * Im Admin genügt: Titel eingeben (z. B. „Gesundes Hundefutter“) + Unterthema wählen.
 * Automatisch entstehen: URL, Breadcrumb, interne Links, SEO-Titel, Meta-Beschreibung,
 * verwandte Artikel, Panda-GreenCore-Box und – bei Money Pages – der Affiliate-Bereich.
 * Das Feld „Automatik-Vorschau“ zeigt nach dem Speichern, was erzeugt wurde.
 */

const idOf = (v: unknown) => (v && typeof v === "object" ? (v as { id: string | number }).id : (v as string | number));

const computeAutomation: CollectionBeforeChangeHook = async ({ data, req, originalDoc, context, operation }) => {
  const merged = { ...originalDoc, ...data };
  const groupId = idOf(merged.group);
  if (!groupId) return data;

  // --- URL & Kategorie aus dem Unterthema ableiten ---
  const group = await req.payload.findByID({ collection: "groups", id: groupId, depth: 1, req });
  const category = group.category as { id: string | number; slug: string; title: string };
  const slug = merged.slug as string;
  data.category = category.id;
  data.path = `/${category.slug}/${group.slug}/${slug}`;
  if (!merged.label) data.label = merged.title;

  const pageType = (merged.pageType ?? "standard") as PageType;
  const year = new Date().getFullYear();
  const ctx = { categorySlug: category.slug, groupTitle: group.title as string, pageType, year };
  const seo = (merged.seo ?? {}) as { seoTitle?: string; metaDescription?: string; focusKeyword?: string; linkAnchors?: { anchor: string }[] };

  // --- Qualitätsregeln beim Veröffentlichen ---
  const publishing = data._status === "published";
  const bodyText = `${lexicalToPlainText(merged.content)} ${merged.markdown ?? ""}`.trim();
  if (publishing && !context?.skipChecks) {
    if (roleOf(req) === "autor") {
      throw new APIError("Autoren dürfen Seiten nicht veröffentlichen. Bitte als Entwurf speichern – ein Redakteur gibt frei.", 403);
    }
    if (!bodyText) throw new APIError("Ohne Infotext kann die Seite nicht veröffentlicht werden.", 400);
    const fc = (merged.factCheck ?? {}) as { required?: boolean; status?: string };
    if (process.env.CONTENT_STRICT === "1" && fc.required !== false && fc.status !== "geprüft") {
      throw new APIError("Bitte zuerst die Faktenprüfung bestätigen (Tab „Qualität“ → Status „geprüft“).", 400);
    }
  }

  // --- Interne Links: Nachbarseiten im selben Unterthema ---
  const siblings = await req.payload.find({
    collection: "pages",
    where: { and: [{ group: { equals: groupId } }, ...(originalDoc?.id ? [{ id: { not_equals: originalDoc.id } }] : [])] },
    limit: 6,
    depth: 0,
    sort: "title",
    req,
    select: { title: true, label: true, _status: true },
  });

  // --- Automatik-Vorschau für das Admin-Feld ---
  const seoTitle = seo.seoTitle?.trim() || autoSeoTitle(merged.title, ctx);
  const description = seo.metaDescription?.trim() || autoDescription(merged.title, ctx);
  const anchors = seo.linkAnchors?.length ? seo.linkAnchors.map((a) => a.anchor) : autoLinkAnchors(merged);
  const lines = [
    `Seitentyp: ${PAGE_TYPE_LABELS[pageType]}`,
    `URL: ${data.path}`,
    `Breadcrumb: ${breadcrumbText(category.title, group.title as string, (merged.label as string) || merged.title)}`,
    `SEO-Titel${seo.seoTitle ? "" : " (automatisch)"}: ${seoTitle} [${seoTitle.length}/${SEO_TITLE_MAX}]`,
    `Meta-Beschreibung${seo.metaDescription ? "" : " (automatisch)"}: ${description} [${description.length}/${DESCRIPTION_MAX}]`,
    `Interne Links (Unterthema): ${siblings.docs.map((d) => `${d.title}${d._status === "published" ? "" : " (geplant)"}`).join(" · ") || "–"}`,
    `Auto-Verlinkung von anderen Seiten über: ${anchors.join(", ")}`,
    `Verwandte Artikel: ${(merged.related as unknown[] | undefined)?.length ? "manuell gewählt" : "automatisch (Unterthema & Kategorie)"}`,
    `Panda-GreenCore-Box: ${merged.donation === false ? "aus" : "an"}`,
    `Affiliate-Bereich: ${pageType === "money" ? ((merged.products as unknown[] | undefined)?.length ? "manuell gewählte Produkte" : "automatisch passende Produkte") : "aus (nur Money Pages)"}`,
  ];

  const hints: string[] = [];
  if (!bodyText) hints.push("Infotext fehlt.");
  else if (bodyText.split(/\s+/).length < 300) hints.push(`Infotext kurz (${bodyText.split(/\s+/).length} Wörter, Richtwert ≥ 300).`);
  if (!(merged.faq as unknown[] | undefined)?.length) hints.push("Keine FAQ.");
  if (!(merged.comparison as { rows?: unknown[] } | undefined)?.rows?.length) hints.push("Kein Vergleich.");
  if (seo.metaDescription && seo.metaDescription.length < DESCRIPTION_MIN) hints.push("Meta-Beschreibung kürzer als 70 Zeichen.");
  if (!(merged.sources as unknown[] | undefined)?.length) hints.push("Keine Quellen angegeben.");
  if ((merged.factCheck as { status?: string } | undefined)?.status !== "geprüft") hints.push("Faktenprüfung ausstehend.");
  if (!seoTitle.toLocaleLowerCase("de").includes(String(seo.focusKeyword || merged.title).toLocaleLowerCase("de")))
    hints.push("Hauptsuchbegriff fehlt im SEO-Titel.");

  data.automation = [...lines, "", hints.length ? `Hinweise: ${hints.join(" ")}` : "Hinweise: keine – alles bereit."].join("\n");
  if (operation === "create" && !data.publishedAt) data.publishedAt = new Date().toISOString();
  return data;
};

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: { singular: "Seite", plural: "Seiten" },
  versions: { drafts: true, maxPerDoc: 25 },
  defaultSort: "-updatedAt",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "pageType", "path", "_status", "updatedAt"],
    listSearchableFields: ["title", "path"],
    pagination: { defaultLimit: 50, limits: [25, 50, 100, 200] },
    group: "Inhalte",
    description: "Titel eingeben und Unterthema wählen – URL, Breadcrumb, SEO, Links und GreenCore-Box entstehen automatisch.",
    preview: (doc) => (doc?.path ? `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}${doc.path}` : null),
  },
  access: { read: publishedOrTeam, create: isTeam, update: isTeam, delete: isEditorOrAdmin },
  hooks: {
    beforeChange: [computeAutomation],
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    {
      name: "title",
      label: "Titel / Suchanfrage",
      type: "text",
      required: true,
      admin: { description: "z. B. „Gesundes Hundefutter“ – daraus entstehen URL, SEO-Titel und Meta-Beschreibung." },
    },
    /* ---------------- Seitenleiste ---------------- */
    {
      name: "group",
      label: "Unterthema",
      type: "relationship",
      relationTo: "groups",
      required: true,
      index: true,
      admin: { position: "sidebar", description: "z. B. Tiere › Hunde" },
    },
    {
      name: "pageType",
      label: "Seitentyp",
      type: "select",
      defaultValue: "standard",
      required: true,
      options: [
        { label: "💰 Money Page (Affiliate-Potenzial)", value: "money" },
        { label: "📈 Traffic Page (bringt Besucher)", value: "traffic" },
        { label: "Standard", value: "standard" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "slug",
      label: "URL-Teil",
      type: "text",
      index: true,
      admin: { position: "sidebar", description: "Leer lassen = automatisch aus dem Titel" },
      hooks: { beforeValidate: [autoSlug("title")] },
    },
    {
      name: "path",
      label: "URL",
      type: "text",
      unique: true,
      index: true,
      admin: { position: "sidebar", readOnly: true, description: "Automatisch: /kategorie/unterthema/seite" },
    },
    { name: "category", type: "relationship", relationTo: "categories", index: true, admin: { hidden: true } },
    { name: "label", label: "Menüname", type: "text", admin: { position: "sidebar", description: "Kurzname in Menüs, z. B. „Tickets“. Leer = Titel." } },
    {
      name: "publishedAt",
      label: "Veröffentlichen ab",
      type: "date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" }, description: "Zukunft = geplante Veröffentlichung" },
    },
    { name: "author", label: "Autor:in (Anzeige)", type: "text", admin: { position: "sidebar" } },
    /* ---------------- Tabs ---------------- */
    {
      type: "tabs",
      tabs: [
        {
          label: "Inhalt",
          fields: [
            { name: "content", label: "Infotext", type: "richText" },
            {
              name: "markdown",
              label: "Infotext (Markdown, importiert)",
              type: "textarea",
              admin: {
                condition: (data) => Boolean(data?.markdown),
                description: "Importierter Text. Wird angezeigt, solange der Rich-Text-Infotext leer ist.",
              },
            },
            {
              name: "widgets",
              label: "Interaktive Werkzeuge",
              type: "select",
              hasMany: true,
              options: [{ label: "Betriebskosten-Rechner", value: "kostenrechner" }],
            },
          ],
        },
        {
          label: "FAQ & Vergleich",
          fields: [
            {
              name: "faq",
              label: "FAQ",
              type: "array",
              labels: { singular: "Frage", plural: "Fragen" },
              fields: [
                { name: "q", label: "Frage", type: "text", required: true },
                { name: "a", label: "Antwort", type: "textarea", required: true },
              ],
            },
            {
              name: "comparison",
              label: "Vergleich",
              type: "group",
              fields: [
                { name: "title", label: "Überschrift", type: "text" },
                { name: "columns", label: "Spalten", type: "array", fields: [{ name: "name", label: "Spalte", type: "text", required: true }] },
                {
                  name: "rows",
                  label: "Zeilen",
                  type: "array",
                  fields: [
                    { name: "label", label: "Kriterium", type: "text", required: true },
                    { name: "values", label: "Werte (in Spaltenreihenfolge)", type: "array", fields: [{ name: "value", label: "Wert", type: "text" }] },
                  ],
                },
                { name: "note", label: "Hinweis unter der Tabelle", type: "text" },
              ],
            },
          ],
        },
        {
          label: "SEO & Verlinkung",
          fields: [
            {
              name: "automation",
              label: "Automatik-Vorschau",
              type: "textarea",
              admin: { readOnly: true, rows: 12, description: "Wird beim Speichern automatisch erzeugt." },
            },
            {
              name: "seo",
              label: "SEO (leer lassen = automatisch)",
              type: "group",
              fields: [
                { name: "seoTitle", label: "SEO-Titel", type: "text", admin: { description: "Leer = z. B. „Gesundes Hundefutter 2026 – Tipps & Vergleich“" } },
                { name: "metaDescription", label: "Meta-Beschreibung", type: "textarea", admin: { description: "Leer = automatisch, 70–160 Zeichen" } },
                { name: "focusKeyword", label: "Hauptsuchbegriff", type: "text", admin: { description: "Leer = Titel" } },
                {
                  name: "linkAnchors",
                  label: "Ankertexte für automatische Verlinkung",
                  type: "array",
                  admin: { description: "Begriffe, über die ANDERE Seiten automatisch hierher verlinken. Leer = Titel." },
                  fields: [{ name: "anchor", label: "Begriff", type: "text", required: true }],
                },
                { name: "noindex", label: "Nicht in Suchmaschinen anzeigen", type: "checkbox", defaultValue: false },
              ],
            },
            {
              name: "related",
              label: "Verwandte Artikel (optional)",
              type: "relationship",
              relationTo: "pages",
              hasMany: true,
              admin: { description: "Leer = automatisch passende Seiten aus Unterthema und Kategorie." },
            },
          ],
        },
        {
          label: "Monetarisierung",
          fields: [
            {
              name: "products",
              label: "Affiliate-Produkte",
              type: "relationship",
              relationTo: "affiliates",
              hasMany: true,
              admin: {
                condition: (data) => data?.pageType === "money",
                description: "Nur Money Pages. Leer = automatisch passende Produkte aus „Passt zu“.",
              },
            },
            {
              name: "autoAffiliate",
              label: "Passende Produkte automatisch wählen",
              type: "checkbox",
              defaultValue: true,
              admin: { condition: (data) => data?.pageType === "money" },
            },
            { name: "donation", label: "Panda-GreenCore-Box anzeigen", type: "checkbox", defaultValue: true },
          ],
        },
        {
          label: "Qualität",
          fields: [
            {
              name: "sources",
              label: "Quellen",
              type: "array",
              fields: [
                { name: "title", label: "Titel", type: "text", required: true },
                { name: "url", label: "URL", type: "text", required: true },
              ],
            },
            {
              name: "factCheck",
              label: "Faktenprüfung",
              type: "group",
              fields: [
                { name: "required", label: "Faktenprüfung nötig", type: "checkbox", defaultValue: true },
                {
                  name: "status",
                  label: "Status",
                  type: "select",
                  defaultValue: "ausstehend",
                  options: [
                    { label: "Ausstehend", value: "ausstehend" },
                    { label: "Geprüft", value: "geprüft" },
                  ],
                },
                { name: "reviewedBy", label: "Geprüft von", type: "text" },
                { name: "reviewedAt", label: "Geprüft am", type: "date" },
                { name: "notes", label: "Notizen", type: "textarea" },
              ],
            },
            { name: "reviewIntervalMonths", label: "Erneut prüfen nach (Monaten)", type: "number", defaultValue: 12 },
          ],
        },
      ],
    },
  ],
};

