import type { GlobalConfig } from "payload";

import { anyone, isAdmin, isMaintenanceOwner } from "../access";
import { revalidateGlobal } from "../hooks";

/** Zentrale Einstellungen – u. a. die Panda-GreenCore-Box, die auf jeder Landingpage erscheint. */
export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Website-Einstellungen",
  admin: { group: "Verwaltung" },
  access: { read: anyone, update: isAdmin },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: "maintenance",
      label: "🛠️ Wartungsmodus",
      type: "group",
      admin: {
        description:
          "Zeigt allen Besuchern einen Wartungsscreen. Nur paul_hub kann ihn ein- und ausschalten. Angemeldete Teammitglieder können die Seite über „Vorschau“ trotzdem ansehen.",
      },
      fields: [
        {
          name: "enabled",
          label: "Wartungsmodus aktiv",
          type: "checkbox",
          defaultValue: false,
          access: { update: isMaintenanceOwner },
        },
        {
          name: "title",
          label: "Überschrift",
          type: "text",
          defaultValue: "Wir schrauben gerade an der Panda Toolbox",
          access: { update: isMaintenanceOwner },
        },
        {
          name: "message",
          label: "Nachricht",
          type: "textarea",
          defaultValue: "Bambus und das Team bauen gerade etwas Neues ein. Gleich sind wir wieder für dich da – danke für deine Geduld! 🐼",
          access: { update: isMaintenanceOwner },
        },
        {
          name: "until",
          label: "Voraussichtlich bis",
          type: "date",
          access: { update: isMaintenanceOwner },
          admin: {
            date: { pickerAppearance: "dayAndTime" },
            description: "Optional. Wird als Countdown angezeigt; danach endet die Wartung automatisch (spätestens nach einer Stunde).",
          },
        },
      ],
    },
    { name: "siteName", label: "Website-Name", type: "text", defaultValue: "Panda Toolbox" },
    { name: "tagline", label: "Untertitel", type: "text", defaultValue: "Themen- und Communityportal" },
    {
      name: "greencore",
      label: "Panda GreenCore",
      type: "group",
      admin: { description: "Spendenbox und Hinweis erscheinen automatisch auf jeder Landingpage." },
      fields: [
        { name: "name", label: "Name", type: "text", defaultValue: "Panda GreenCore" },
        { name: "headline", label: "Überschrift der Box", type: "text", defaultValue: "Unterstütze Panda GreenCore" },
        {
          name: "text",
          label: "Text der Box",
          type: "textarea",
          defaultValue:
            "Die Panda Toolbox ist kostenlos und ohne Bezahlschranke. Wenn dir diese Seite geholfen hat, kannst du mit einer freiwilligen Spende an Panda GreenCore etwas zurückgeben.",
        },
        {
          name: "purpose",
          label: "Wofür werden Spenden verwendet?",
          type: "textarea",
          admin: { description: "Pflicht vor dem Livegang – wird in der Box angezeigt." },
        },
        { name: "url", label: "Spendenlink", type: "text", admin: { description: "Ohne Link zeigt die Box „Spendenmöglichkeit folgt“." } },
        {
          name: "notice",
          label: "Kurzer Hinweis (Seitenleiste)",
          type: "textarea",
          defaultValue:
            "Diese Seite ist Teil der Panda Toolbox. Mit Panda GreenCore wächst hier ein eigenes Projekt, das du freiwillig unterstützen kannst.",
        },
        { name: "aboutHref", label: "Link „Mehr erfahren“", type: "text", defaultValue: "/panda-branding/greencore" },
      ],
    },
  ],
};
