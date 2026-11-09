import type { GlobalConfig } from "payload";

import { anyone, isAdmin, isMaintenanceOwner } from "../access";
import { revalidateGlobal } from "../hooks";

/** Nur sichere Adressen: interne Pfade, https://, http:// oder mailto: (kein „javascript:“). */
const validateHref = (value: unknown) =>
  !value || /^(https?:\/\/|\/(?!\/)|mailto:)/i.test(String(value).trim()) || "Bitte eine Webadresse (https://…) oder einen internen Pfad (/…) eingeben.";

const linkFields = (withNewTab: boolean, urlRequired = true) => [
  { name: "label", label: "Text", type: "text" as const, required: true },
  { name: "url", label: "Link", type: "text" as const, required: urlRequired, validate: validateHref },
  ...(withNewTab ? [{ name: "newTab", label: "In neuem Tab öffnen", type: "checkbox" as const, defaultValue: false }] : []),
];

/** Zentrale Einstellungen – u. a. die Panda-GreenTech-Box, die auf jeder Landingpage erscheint. */
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
          "Zeigt allen Besuchern einen Wartungsscreen. Jedes Administratorkonto kann ihn ein- und ausschalten; angemeldete Teammitglieder sehen die Website weiterhin.",
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
          defaultValue: "Flauschipanda und das Team bauen gerade etwas Neues ein. Gleich sind wir wieder für dich da – danke für deine Geduld! 🐼",
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
      name: "homepage",
      label: "Startseite – Hero-Bereich",
      type: "group",
      admin: { description: "Bearbeite die große Überschrift, den Beschreibungstext und den Hinweis oben auf der Startseite." },
      fields: [
        { name: "badge", label: "Hinweis / Neuigkeiten über der Überschrift", type: "text", defaultValue: "Neu: Flauschipanda hat jetzt Skins – Saison-Design automatisch" },
        { name: "titleLead", label: "Überschrift (normaler Teil)", type: "text", defaultValue: "Wissen, Tools & Tipps in " },
        { name: "titleHighlight", label: "Überschrift (hervorgehobener Teil)", type: "text", defaultValue: "einer Toolbox" },
        { name: "description", label: "Beschreibungstext", type: "textarea", defaultValue: "Ratgeber, Vergleiche und Rechner zu Tieren, Zoos, Freizeitparks, KI, Urlaub, Autos, Finanzen, Wissenschaft und mehr – verständlich erklärt, ehrlich gekennzeichnet und immer kostenlos." },
      ],
    },
    {
      name: "greencore",
      label: "Panda GreenTech",
      type: "group",
      admin: { description: "Spendenbox und Hinweis erscheinen automatisch auf jeder Landingpage." },
      fields: [
        { name: "name", label: "Name", type: "text", defaultValue: "Panda GreenTech" },
        { name: "headline", label: "Überschrift der Box", type: "text", defaultValue: "Unterstütze Panda GreenTech" },
        {
          name: "text",
          label: "Text der Box",
          type: "textarea",
          defaultValue:
            "Die Panda Toolbox ist kostenlos und ohne Bezahlschranke. Wenn dir diese Seite geholfen hat, kannst du mit einer freiwilligen Spende an Panda GreenTech etwas zurückgeben.",
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
            "Diese Seite ist Teil der Panda Toolbox. Mit Panda GreenTech wächst hier ein eigenes Projekt, das du freiwillig unterstützen kannst.",
        },
        { name: "aboutHref", label: "Link „Mehr erfahren“", type: "text", defaultValue: "/panda-branding/greentech" },
      ],
    },
    {
      type: "collapsible",
      label: "🔗 Links: Menü, Fußzeile, Social Media, Shop",
      admin: { description: "Alle Links der Website zentral bearbeiten. Interne Seiten mit „/“ beginnen (z. B. /neu), externe mit https://." },
      fields: [
        { name: "merchUrl", label: "Merch-Shop (Startseite & Fußzeile)", type: "text", defaultValue: "https://www.spreadshirt.de/shop/user/flauschipandas", validate: validateHref },
        {
          name: "headerLinks",
          label: "Zusätzliche Links im Hauptmenü",
          type: "array",
          labels: { singular: "Menü-Link", plural: "Menü-Links" },
          admin: { description: "Erscheinen oben im Menü nach „Alle Seiten“ (und im Handy-Menü)." },
          fields: linkFields(true),
        },
        {
          name: "footerLinks",
          label: "Links in der Fußzeile",
          type: "array",
          labels: { singular: "Fußzeilen-Link", plural: "Fußzeilen-Links" },
          fields: linkFields(true),
        },
        {
          name: "socialLinks",
          label: "Social Media",
          type: "array",
          labels: { singular: "Kanal", plural: "Kanäle" },
          admin: { description: "z. B. YouTube, TikTok, Instagram, Discord – erscheinen in der Fußzeile." },
          fields: linkFields(false),
        },
        {
          name: "poweredBy",
          label: "„powered by“ in der Fußzeile",
          type: "array",
          labels: { singular: "Partner", plural: "Partner" },
          admin: { description: "Leer = Spitzli Cloud. Link leer lassen = nur Name ohne Link." },
          fields: linkFields(false, false),
        },
      ],
    },
  ],
};
