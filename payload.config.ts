import path from "node:path";
import { fileURLToPath } from "node:url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { LinkFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { de } from "@payloadcms/translations/languages/de";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Affiliates } from "./cms/collections/Affiliates";
import { Categories } from "./cms/collections/Categories";
import { Groups } from "./cms/collections/Groups";
import { Media } from "./cms/collections/Media";
import { Pages } from "./cms/collections/Pages";
import { Users } from "./cms/collections/Users";
import { SiteSettings } from "./cms/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (!process.env.PAYLOAD_SECRET) {
  console.warn("[payload] PAYLOAD_SECRET fehlt – bitte in .env setzen.");
}

/**
 * Panda Toolbox – Backend & CMS (Payload)
 * Admin-Oberfläche: /admin · REST-API: /api
 */
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: " · Panda Toolbox" },
  },
  i18n: { fallbackLanguage: "de", supportedLanguages: { de } },
  collections: [Pages, Groups, Categories, Affiliates, Media, Users],
  globals: [SiteSettings],
  plugins: [vercelBlobStorage({ collections: { media: true }, token: process.env.BLOB_READ_WRITE_TOKEN })],
  // Links im Texteditor: extern, auf andere Seiten oder direkt auf ein Affiliate-Produkt
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter((f) => f.key !== "link"),
      LinkFeature({ enabledCollections: ["pages", "affiliates"] }),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || "" },
  }),
  sharp,
});
