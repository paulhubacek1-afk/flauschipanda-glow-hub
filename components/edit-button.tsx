"use client";

import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

/**
 * „Bearbeiten“-Knopf auf der Website – nur sichtbar, wenn man im Admin angemeldet ist.
 * Öffnet die Seite, das Unterthema oder die Kategorie direkt im Admin.
 * Besucher sehen nichts: Geprüft wird nur in Browsern, in denen das Admin schon einmal offen war
 * (Merker „fp-team“, gesetzt von components/admin/team-flag.tsx).
 */
let cached: Promise<boolean> | null = null;
function isTeam(): Promise<boolean> {
  try {
    if (window.localStorage.getItem("fp-team") !== "1") return Promise.resolve(false);
  } catch {
    return Promise.resolve(false);
  }
  cached ??= fetch("/api/users/me", { credentials: "include", cache: "no-store" })
    .then((r) => (r.ok ? r.json() : null))
    .then((d: { user?: unknown } | null) => Boolean(d?.user))
    .catch(() => false);
  return cached;
}

export function EditButton({ collection, id, label = "Bearbeiten" }: { collection: "pages" | "groups" | "categories"; id: string | number; label?: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let alive = true;
    void isTeam().then((ok) => alive && setShow(ok));
    return () => {
      alive = false;
    };
  }, []);
  if (!show) return null;
  return (
    <a
      href={`/admin/collections/${collection}/${id}`}
      className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card/95 px-4 py-2.5 text-sm font-semibold text-primary shadow-[var(--glow-md)] backdrop-blur transition-transform hover:scale-105 active:scale-95"
    >
      <Pencil className="size-4" aria-hidden="true" /> {label}
    </a>
  );
}
