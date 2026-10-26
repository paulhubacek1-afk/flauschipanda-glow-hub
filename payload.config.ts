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
import { applyContentPacks } from "./cms/content-packs";
import { ensureSchema } from "./cms/ensure-schema";
import { SiteSettings } from "./cms/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (!process.env.PAYLOAD_SECRET) {
  console.warn("[payload] PAYLOAD_SECRET fehlt – bitte in .env setzen.");
}

/**
 * Erlaubte Herkünfte für angemeldete Anfragen (Schutz vor CSRF): nur die eigene Domain
 * und die Vercel-Adressen dieses Projekts. Anfragen von fremden Seiten werden nicht mit
 * dem Login-Cookie ausgeführt.
 */
const trustedOrigins = [
  process.env.NEXT_PUBLIC_SITE_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
  process.env.VERCEL_BRANCH_URL && `https://${process.env.VERCEL_BRANCH_URL}`,
  process.env.NODE_ENV !== "production" && "http://localhost:3000",
]
  .filter((o): o is string => Boolean(o))
  .map((o) => o.replace(/\/$/, ""));

/**
 * Panda Toolbox – Backend & CMS (Payload)
 * Admin-Oberfläche: /admin · REST-API: /api
 */
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: " · Panda Toolbox" },
    // Dashboard: zuletzt bearbeitete Kategorien/Unterthemen/Seiten mit „Ansehen“-Link
    components: {
      afterDashboard: ["/components/admin/recent-on-site#RecentOnSite"],
      beforeNavLinks: ["/components/admin/team-flag#TeamFlag"],
    },
  },
  i18n: { fallbackLanguage: "de", supportedLanguages: { de } },
  collections: [Pages, Groups, Categories, Affiliates, Media, Users],
  globals: [SiteSettings],
  csrf: trustedOrigins,
  // fehlende neue Spalten (z. B. Wartungsmodus) sicher ergänzen
  onInit: async (payload) => {
    await ensureSchema(payload);
    // Inhaltspakete (z. B. PC & Hardware) in leere Kategorien übernehmen
    await applyContentPacks(payload);
  },
  // GraphQL wird nicht genutzt → abgeschaltet (weniger Angriffsfläche)
  graphQL: { disable: true },
  // Uploads: höchstens 10 MB, eine Datei pro Anfrage
  upload: { limits: { fileSize: 10_000_000, files: 1 } },
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
