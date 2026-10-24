import { APIError, type CollectionConfig } from "payload";

import { ROLES, isAdmin, isAdminField, roleOf } from "../access";

/**
 * Benutzer & Rollen.
 * Der allererste Benutzer wird automatisch Administrator – lege dort "paul_hub"
 * mit einem NEUEN, sicheren Passwort an. Zugangsdaten stehen nie im Code.
 * Login wahlweise mit Benutzername oder E-Mail.
 */
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Benutzer", plural: "Benutzer" },
  auth: {
    loginWithUsername: { allowEmailLogin: true, requireEmail: false },
    // Brute-Force-Schutz: nach 5 Fehlversuchen 15 Minuten gesperrt
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
    // Login läuft nach 8 Stunden ab
    tokenExpiration: 8 * 60 * 60,
    cookies: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    },
  },
  admin: {
    useAsTitle: "username",
    defaultColumns: ["username", "name", "role", "email"],
    group: "Verwaltung",
  },
  access: {
    // Nur das Team kommt ins Backend
    admin: ({ req }) => ["admin", "redakteur", "autor"].includes(roleOf(req) ?? ""),
    // Nicht angemeldet → niemals Benutzerdaten (sonst könnte die API die Benutzerliste preisgeben)
    read: ({ req }) => (!req.user ? false : roleOf(req) === "admin" ? true : { id: { equals: req.user.id } }),
    create: async ({ req }) => {
      if (roleOf(req) === "admin") return true;
      // Ersteinrichtung: solange es keinen Benutzer gibt, darf der erste angelegt werden
      const { totalDocs } = await req.payload.count({ collection: "users", overrideAccess: true });
      return totalDocs === 0;
    },
    update: ({ req }) => (!req.user ? false : roleOf(req) === "admin" ? true : { id: { equals: req.user.id } }),
    delete: isAdmin,
  },
  hooks: {
    // Starke Passwörter erzwingen (beim Anlegen und beim Ändern)
    beforeValidate: [
      ({ data }) => {
        const pw = (data as { password?: unknown } | undefined)?.password;
        if (typeof pw === "string" && pw.length > 0) {
          const classes = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((r) => r.test(pw)).length;
          if (pw.length < 12 || classes < 3) {
            throw new APIError(
              "Passwort zu schwach: mindestens 12 Zeichen und drei von vier Arten (Kleinbuchstaben, Großbuchstaben, Ziffern, Sonderzeichen).",
              400,
              undefined,
              true,
            );
          }
        }
        return data;
      },
    ],
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation === "create") {
          const { totalDocs } = await req.payload.count({ collection: "users", overrideAccess: true });
          if (totalDocs === 0) data.role = "admin";
        }
        return data;
      },
    ],
  },
  fields: [
    { name: "name", label: "Anzeigename", type: "text" },
    {
      name: "role",
      label: "Rolle",
      type: "select",
      required: true,
      defaultValue: "autor",
      options: ROLES.map((r) => ({ label: r.label, value: r.value })),
      // Rollen ändern darf nur ein Admin (Anlegen dürfen ohnehin nur Admins bzw. die Ersteinrichtung)
      access: { update: isAdminField },
      admin: {
        position: "sidebar",
        description: "Admin: alles · Redakteur: Inhalte & Struktur · Autor: Entwürfe · Nutzer: kein Backend",
      },
    },
  ],
};
