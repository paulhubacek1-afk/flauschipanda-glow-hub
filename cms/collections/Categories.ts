import type { CollectionConfig } from "payload";

import { anyone, isEditorOrAdmin } from "../access";
import { appendOrder, autoSlug, cascadePaths, revalidateAfterChange, revalidateAfterDelete } from "../hooks";

export const ICON_OPTIONS = [
  { label: "Pfote (Tiere)", value: "paw" },
  { label: "Baby", value: "baby" },
  { label: "Haus", value: "house" },
  { label: "Herz (Gesundheit)", value: "heart" },
  { label: "Roboter (KI)", value: "bot" },
  { label: "Filmklappe (Creator)", value: "clapperboard" },
  { label: "Werkzeug", value: "wrench" },
  { label: "Musik", value: "music" },
  { label: "Sparschwein", value: "piggy" },
  { label: "Bäume (Zoo)", value: "trees" },
  { label: "Riesenrad", value: "ferris" },
  { label: "Flugzeug (Urlaub)", value: "plane" },
  { label: "Auto", value: "car" },
  { label: "Monitor (PC & Technik)", value: "monitor" },
  { label: "Personen", value: "users" },
  { label: "Panda", value: "panda" },
];

/** Hauptkategorien – erste Ebene der Hierarchie, z. B. /tiere */
export const Categories: CollectionConfig = {
  slug: "categories",
  labels: { singular: "Kategorie", plural: "Kategorien" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "order"],
    group: "Struktur",
    description:
      "Hauptkategorien der Panda Toolbox. Neue Kategorien erscheinen sofort auf der Website (am Ende der Liste) – danach Unterthemen unter „Struktur → Unterthemen“ anlegen.",
    // Alle Kategorien auf einen Blick statt nur 10 pro Seite
    pagination: { defaultLimit: 100, limits: [25, 50, 100] },
  },
  defaultSort: "order",
  access: { read: anyone, create: isEditorOrAdmin, update: isEditorOrAdmin, delete: isEditorOrAdmin },
  hooks: {
    beforeChange: [appendOrder("categories")],
    // URL-Teil geändert → URLs aller Unterthemen (und damit aller Seiten) anpassen
    afterChange: [cascadePaths("groups", "category", "slug"), revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    { name: "title", label: "Name", type: "text", required: true },
    {
      name: "slug",
      label: "URL-Teil",
      type: "text",
      unique: true,
      index: true,
      admin: { position: "sidebar", description: "Leer lassen = automatisch aus dem Namen, z. B. „tiere“" },
      hooks: { beforeValidate: [autoSlug("title")] },
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "textarea",
      admin: { description: "Optional – leer lassen = automatisch „<Name>: Ratgeber, Vergleiche und Tipps …“" },
      hooks: {
        // Leere Beschreibung automatisch füllen. Die Datenbank-Spalte bleibt Pflicht (keine Migration nötig).
        beforeValidate: [
          ({ value, data, originalDoc }) => {
            if (typeof value === "string" && value.trim()) return value;
            const title = (data?.title ?? originalDoc?.title ?? "").trim();
            return title ? `${title}: Ratgeber, Vergleiche und Tipps – verständlich und ehrlich erklärt.` : value;
          },
        ],
      },
    },
    { name: "icon", label: "Symbol", type: "select", options: ICON_OPTIONS, defaultValue: "paw", admin: { position: "sidebar" } },
    {
      name: "hue",
      label: "Farbton (0–360)",
      type: "number",
      min: 0,
      max: 360,
      defaultValue: 195,
      admin: { position: "sidebar", description: "Farbe der automatisch erzeugten Titelbilder" },
    },
    {
      name: "order",
      label: "Reihenfolge",
      type: "number",
      admin: { position: "sidebar", description: "Leer lassen = automatisch ans Ende. Kleinere Zahl = weiter vorne." },
    },
  ],
};
