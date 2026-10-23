import type { CollectionConfig } from "payload";

import { anyone, isTeam } from "../access";

/**
 * Medienbibliothek. Uploads sind auf Bildformate und PDF beschränkt (kein SVG, da es Skripte enthalten kann).
 * Hinweis: Auf Vercel ist das Dateisystem nicht dauerhaft – dort einen Speicher-Adapter
 * (z. B. @payloadcms/storage-vercel-blob oder S3) ergänzen.
 */
export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Datei", plural: "Medien" },
  admin: { group: "Inhalte", description: "Bilder und PDFs für Seiten und Titelbilder." },
  access: { read: anyone, create: isTeam, update: isTeam, delete: isTeam },
  upload: {
    staticDir: "media",
    mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/avif", "application/pdf"],
    imageSizes: [
      { name: "thumbnail", width: 480 },
      { name: "card", width: 960 },
      { name: "hero", width: 1600 },
    ],
  },
  fields: [{ name: "alt", label: "Alternativtext (für Barrierefreiheit & SEO)", type: "text", required: true }],
};
