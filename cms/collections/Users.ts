import type { CollectionConfig } from "payload";

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
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
  },
  admin: {
    useAsTitle: "username",
    defaultColumns: ["username", "name", "role", "email"],
    group: "Verwaltung",
  },
  access: {
    // Nur das Team kommt ins Backend
    admin: ({ req }) => ["admin", "redakteur", "autor"].includes(roleOf(req) ?? ""),
    read: ({ req }) => (roleOf(req) === "admin" ? true : { id: { equals: req.user?.id } }),
    create: async ({ req }) => {
      if (roleOf(req) === "admin") return true;
      // Ersteinrichtung: solange es keinen Benutzer gibt, darf der erste angelegt werden
      const { totalDocs } = await req.payload.count({ collection: "users", overrideAccess: true });
      return totalDocs === 0;
    },
    update: ({ req }) => (roleOf(req) === "admin" ? true : { id: { equals: req.user?.id } }),
    delete: isAdmin,
  },
  hooks: {
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
