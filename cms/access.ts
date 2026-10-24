import type { Access, FieldAccess, PayloadRequest } from "payload";

/**
 * Rollen im Backend
 *  admin      – darf alles (z. B. paul_hub): Benutzer, Struktur, Einstellungen, Inhalte
 *  redakteur  – Inhalte, Struktur, Affiliates und Medien bearbeiten und veröffentlichen
 *  autor      – Seiten anlegen und bearbeiten, aber NICHT veröffentlichen
 *  nutzer     – kein Zugang zum Admin (für spätere Community-Funktionen)
 */
export const ROLES = [
  { label: "Administrator", value: "admin" },
  { label: "Redakteur", value: "redakteur" },
  { label: "Autor", value: "autor" },
  { label: "Nutzer", value: "nutzer" },
] as const;

export type Role = (typeof ROLES)[number]["value"];

type WithRole = { role?: Role | null } | null | undefined;

export const roleOf = (req: PayloadRequest): Role | undefined => (req.user as WithRole)?.role ?? undefined;

export const isAdmin: Access = ({ req }) => roleOf(req) === "admin";
export const isEditorOrAdmin: Access = ({ req }) => ["admin", "redakteur"].includes(roleOf(req) ?? "");
export const isTeam: Access = ({ req }) => ["admin", "redakteur", "autor"].includes(roleOf(req) ?? "");
export const isAdminField: FieldAccess = ({ req }) => roleOf(req) === "admin";

/** Öffentlich: nur veröffentlichte Dokumente. Team: alles. */
export const publishedOrTeam: Access = ({ req }) => {
  if (["admin", "redakteur", "autor"].includes(roleOf(req) ?? "")) return true;
  return { _status: { equals: "published" } };
};

export const anyone: Access = () => true;

/**
 * Wartungsmodus: nur bestimmte Administratoren dürfen ihn schalten – standardmäßig paul_hub.
 * Weitere Benutzernamen können über MAINTENANCE_ADMINS (kommagetrennt) erlaubt werden.
 */
export function maintenanceOwners() {
  return (process.env.MAINTENANCE_ADMINS || "paul_hub")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export const isMaintenanceOwner: FieldAccess = ({ req }) => {
  const user = req.user as { role?: string; username?: string | null } | null | undefined;
  return user?.role === "admin" && maintenanceOwners().includes(String(user.username ?? "").toLowerCase());
};
