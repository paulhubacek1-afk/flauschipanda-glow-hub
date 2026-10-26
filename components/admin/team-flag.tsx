"use client";

import { useEffect } from "react";

/**
 * Merkt sich im Browser, dass hier jemand aus dem Team angemeldet war.
 * Nur dann prüft die Website, ob der „Bearbeiten“-Knopf angezeigt werden soll –
 * normale Besucher lösen so keine zusätzliche Anfrage aus.
 */
export function TeamFlag() {
  useEffect(() => {
    try {
      window.localStorage.setItem("fp-team", "1");
    } catch {
      /* ignorieren */
    }
  }, []);
  return null;
}
