import type { CollectionConfig } from "payload";

import { anyone, isEditorOrAdmin } from "../access";
import { autoSlug, revalidateAfterChange, revalidateAfterDelete } from "../hooks";

/** Unterthemen – zweite Ebene, z. B. /tiere/hunde */
export const Groups: CollectionConfig = {
  slug: "groups",
  labels: { singular: "Unterthema", plural: "Unterthemen" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "path", "order"],
    group: "Struktur",
    listSearchableFields: ["title", "path"],
    description: "Unterthemen innerhalb einer Kategorie, z. B. Hunde, Zoo Berlin oder ChatGPT.",
  },
  defaultSort: "order",
  access: { read: anyone, create: isEditorOrAdmin, update: isEditorOrAdmin, delete: isEditorOrAdmin },
  hooks: {
    beforeChange: [
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
    afterChange: [revalidateAfterChange],
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
    { name: "order", label: "Reihenfolge", type: "number", defaultValue: 100, admin: { position: "sidebar" } },
  ],
};
