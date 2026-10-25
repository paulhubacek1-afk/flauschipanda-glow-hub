"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Anonymer Besucherzähler: meldet beim Seitenwechsel nur den Pfad an /api/besuche.
 * Keine Cookies, kein Local Storage, keine Kennung – der Server zählt nur Zahlen hoch.
 */
const sent = new Set<string>();

export function VisitorPing() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || sent.has(pathname)) return;
    if (typeof navigator !== "undefined" && navigator.webdriver) return;
    const t = window.setTimeout(() => {
      sent.add(pathname);
      void fetch("/api/besuche", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ path: pathname }),
        keepalive: true,
      }).catch(() => undefined);
    }, 1500);
    return () => window.clearTimeout(t);
  }, [pathname]);
  return null;
}
