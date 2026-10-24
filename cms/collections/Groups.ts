import type { CollectionConfig } from "payload";

import { anyone, isEditorOrAdmin } from "../access";
import { appendOrder, autoSlug, cascadePaths, revalidateAfterChange, revalidateAfterDelete } from "../hooks";

/** Unterthemen – zweite Ebene, z. B. /tiere/hunde */
export const Groups: CollectionConfig = {
  slug: "groups",
  labels: { singular: "Unterthema", plural: "Unterthemen" },
  admin: {
    useAsTitle: "title",
    // „Vorschau“-Knopf: direkt aus dem Admin auf der Website ansehen (Team-Vorschaumodus)
    preview: (doc) => {
      const path = doc?.path ? String(doc.path) : null;
      return path ? `/api/vorschau?zu=${encodeURIComponent(path)}` : null;
    },
    defaultColumns: ["title", "category", "path", "order"],
    group: "Struktur",
    listSearchableFields: ["title", "path"],
    description: "Unterthemen innerhalb einer Kategorie, z. B. Hunde, Zoo Berlin oder ChatGPT.",
    // Alle Unterthemen auf einen Blick statt nur 10 pro Seite
    pagination: { defaultLimit: 100, limits: [25, 50, 100, 200] },
  },
  defaultSort: "order",
  access: { read: anyone, create: isEditorOrAdmin, update: isEditorOrAdmin, delete: isEditorOrAdmin },
  hooks: {
    beforeChange: [
      appendOrder("groups", "category"),
      // URL automatisch: /kategorie/unterthema
      async ({ data, req, originalDoc }) => {
        const categoryId = data.category ?? originalDoc?.category;
        const slug = data.slug ?? originalDoc?.slug;
        if (categoryId && slug) {
          const id = typeof categoryId === "object" ? categoryId.id : categoryId;
          const category = await req.payload.findByID({ collection: "categories", id, depth: 0, req });
          data.path = `/${category.slug}/${slug}`;
        }
        return data;
      },
    ],
    // URL geändert (neuer URL-Teil oder andere Kategorie) → URLs aller Seiten darunter anpassen
    afterChange: [cascadePaths("pages", "group", "path"), revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    { name: "title", label: "Name", type: "text", required: true },
    { name: "category", label: "Kategorie", type: "relationship", relationTo: "categories", required: true, index: true },
    { name: "description", label: "Beschreibung", type: "textarea" },
    {
      name: "slug",
      label: "URL-Teil",
      type: "text",
      index: true,
      admin: { position: "sidebar", description: "Leer lassen = automatisch aus dem Namen" },
      hooks: { beforeValidate: [autoSlug("title")] },
    },
    {
      name: "path",
      label: "URL",
      type: "text",
      unique: true,
      index: true,
      admin: { position: "sidebar", readOnly: true, description: "Wird automatisch erzeugt" },
    },
    {
      name: "order",
      label: "Reihenfolge",
      type: "number",
      admin: { position: "sidebar", description: "Leer lassen = automatisch ans Ende der Kategorie" },
    },
    {
      name: "partnerLinks",
      label: "Partnerlinks (Affiliate)",
      type: "join",
      collection: "affiliates",
      on: "topics",
      admin: {
        description:
          "Partnerlinks für dieses Unterthema. Sie erscheinen als gekennzeichnete Empfehlungsbox auf der Übersichtsseite und automatisch auf den Money Pages darin. Neu anlegen: „Neu erstellen“ – Partnerlink-URL eintragen, Haken bei „Platzhalter-Link“ weglassen.",
        defaultColumns: ["name", "url", "active", "placeholder"],
      },
    },
  ],
};
