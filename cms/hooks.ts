import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionBeforeChangeHook,
  FieldHook,
  GlobalAfterChangeHook,
  Where,
} from "payload";

import { slugify } from "../lib/hierarchy";

/** Slug automatisch aus einem anderen Feld (Standard: Titel) erzeugen, wenn er leer ist. */
export const autoSlug =
  (sourceField = "title"): FieldHook =>
  ({ value, data, originalDoc }) => {
    if (typeof value === "string" && value.trim()) return slugify(value);
    const source = (data?.[sourceField] ?? originalDoc?.[sourceField]) as string | undefined;
    return source ? slugify(source) : value;
  };

/**
 * Website-Cache leeren, sobald im CMS etwas gespeichert wird – Änderungen sind sofort sichtbar.
 * Läuft außerhalb von Next.js (z. B. beim Import-Skript) einfach ins Leere.
 */
async function revalidateSite() {
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath("/", "layout");
  } catch {
    /* außerhalb von Next.js – nichts zu tun */
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = async ({ doc, context }) => {
  if (!context?.skipRevalidate) await revalidateSite();
  return doc;
};

export const revalidateAfterDelete: CollectionAfterDeleteHook = async ({ doc, context }) => {
  if (!context?.skipRevalidate) await revalidateSite();
  return doc;
};

export const revalidateGlobal: GlobalAfterChangeHook = async ({ doc, context }) => {
  if (!context?.skipRevalidate) await revalidateSite();
  return doc;
};

/* ------------------------------------------------------------------ */
/* Struktur-Helfer                                                      */
/* ------------------------------------------------------------------ */

type OrderCollection = "categories" | "groups";

/**
 * Einträge ohne Reihenfolge automatisch ans Ende setzen (größte Reihenfolge + 10).
 * Gilt für neue Einträge und für bestehende, bei denen das Feld „Reihenfolge“ geleert wird.
 * So landen neue Kategorien/Unterthemen nicht zufällig mitten in der Liste.
 */
export const appendOrder =
  (collection: OrderCollection, scopeField?: string): CollectionBeforeChangeHook =>
  async ({ data, operation, req, originalDoc }) => {
    // Nur wenn keine Reihenfolge gesetzt ist: beim Anlegen oder wenn das Feld beim Bearbeiten geleert wurde
    const current = data.order ?? (operation === "update" && !("order" in data) ? originalDoc?.order : undefined);
    if (typeof current === "number" && !Number.isNaN(current)) return data;
    const scope = scopeField ? (data[scopeField] ?? originalDoc?.[scopeField]) : undefined;
    const scopeId = scope && typeof scope === "object" ? (scope as { id: unknown }).id : scope;
    const where: Where = {
      and: [
        // In Postgres stehen leere Werte bei absteigender Sortierung vorne – deshalb ausschließen
        { order: { exists: true } },
        ...(scopeField && scopeId ? [{ [scopeField]: { equals: scopeId } }] : []),
        ...(originalDoc?.id ? [{ id: { not_equals: originalDoc.id } }] : []),
      ],
    };
    const last = await req.payload.find({
      collection,
      where,
      sort: "-order",
      limit: 1,
      depth: 0,
      req,
      overrideAccess: true,
    });
    const max = (last.docs[0] as { order?: number } | undefined)?.order ?? 0;
    data.order = max + 10;
    return data;
  };

/**
 * Ändert sich die URL einer Kategorie oder eines Unterthemas, werden alle darunterliegenden
 * URLs automatisch neu berechnet (indem die Einträge neu gespeichert werden).
 */
export const cascadePaths =
  (child: "groups" | "pages", parentField: "category" | "group", compareField: "slug" | "path"): CollectionAfterChangeHook =>
  async ({ doc, previousDoc, operation, req, context }) => {
    if (operation !== "update" || !previousDoc || previousDoc[compareField] === doc[compareField]) return doc;
    const where: Where = { [parentField]: { equals: doc.id } };
    const children = await req.payload.find({
      collection: child,
      where,
      limit: 5000,
      depth: 0,
      pagination: false,
      req,
      overrideAccess: true,
    });
    for (const c of children.docs) {
      await req.payload.update({
        collection: child,
        id: c.id,
        data: {},
        req,
        overrideAccess: true,
        context: { ...context, skipChecks: true, skipRevalidate: true },
      });
    }
    return doc;
  };
