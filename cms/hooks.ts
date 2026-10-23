import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, FieldHook, GlobalAfterChangeHook } from "payload";

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
