import type { CollectionConfig } from "payload";

import { anyone, isEditorOrAdmin } from "../access";
import { autoSlug, revalidateAfterChange, revalidateAfterDelete } from "../hooks";

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
    description: "Hauptkategorien der Panda Toolbox. Reihenfolge = Nummerierung im Menü.",
  },
  defaultSort: "order",
  access: { read: anyone, create: isEditorOrAdmin, update: isEditorOrAdmin, delete: isEditorOrAdmin },
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
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
    { name: "description", label: "Beschreibung", type: "textarea", required: true },
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
    { name: "order", label: "Reihenfolge", type: "number", defaultValue: 100, admin: { position: "sidebar" } },
  ],
};
