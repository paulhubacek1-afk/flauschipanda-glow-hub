import type { CollectionConfig } from "payload";

import { anyone, isEditorOrAdmin } from "../access";
import { autoSlug, revalidateAfterChange, revalidateAfterDelete } from "../hooks";

/**
 * Affiliate-Produkte. Auf Money Pages werden passende Produkte automatisch
 * anhand von "Passt zu" (Kategorien/Unterthemen) gewählt, wenn die Seite keine eigenen hat.
 */
export const Affiliates: CollectionConfig = {
  slug: "affiliates",
  labels: { singular: "Affiliate-Produkt", plural: "Affiliate-Produkte" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "network", "active", "placeholder"],
    group: "Monetarisierung",
    description:
      "Partnerlinks anlegen und verwenden: als Empfehlungsbox (Seite → Tab „Monetarisierung“) oder direkt im Text (Wort markieren → Link → „Interner Link“ → Produkt wählen). Auf der Website immer als Affiliate-Link gekennzeichnet.",
  },
  access: { read: anyone, create: isEditorOrAdmin, update: isEditorOrAdmin, delete: isEditorOrAdmin },
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  fields: [
    { name: "name", label: "Produktname", type: "text", required: true },
    {
      name: "key",
      label: "Kennung",
      type: "text",
      unique: true,
      index: true,
      admin: { position: "sidebar", description: "Für Links im Text: [Text](aff:kennung). Leer = automatisch." },
      hooks: { beforeValidate: [autoSlug("name")] },
    },
    { name: "url", label: "Partnerlink", type: "text", required: true },
    { name: "network", label: "Partnerprogramm", type: "text" },
    { name: "label", label: "Rubrik", type: "text", admin: { description: "z. B. „Fütterung“ oder „Pflege“" } },
    { name: "pitch", label: "Warum wir es empfehlen", type: "textarea", required: true },
    {
      name: "topics",
      label: "Passt zu",
      type: "relationship",
      relationTo: ["categories", "groups"],
      hasMany: true,
      admin: {
        description:
          "Kategorien oder Unterthemen, auf deren Übersichtsseite (Empfehlungsbox) und Money Pages das Produkt automatisch erscheint. Auch direkt im Unterthema bzw. in der Kategorie unter „Partnerlinks“ anlegbar.",
      },
    },
    { name: "active", label: "Aktiv", type: "checkbox", defaultValue: true, admin: { position: "sidebar" } },
    {
      name: "placeholder",
      label: "Platzhalter-Link",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar", description: "Noch kein echter Partnerlink – wird auf der Website nicht angezeigt." },
    },
  ],
};
