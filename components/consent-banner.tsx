"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

import { OPEN_CONSENT_EVENT, readConsent, saveConsent } from "@/lib/consent";

import { Button } from "./ui/button";

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setOpen(true);
    else {
      setStatistics(existing.statistics);
      setMarketing(existing.marketing);
    }
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;

  const decide = (s: boolean, m: boolean) => {
    saveConsent(s, m);
    setStatistics(s);
    setMarketing(m);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="glass fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-xl border border-primary/25 p-5 shadow-[var(--glow-md)]"
    >
      <div className="flex items-start gap-3">
        <Cookie className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="space-y-3">
          <h2 id="consent-title" className="font-display text-base font-semibold">
            Datenschutz-Einstellungen
          </h2>
          <p className="text-sm text-muted-foreground">
            Notwendige Speicherungen sind immer aktiv. Statistik und Werbung laden wir nur mit deiner Zustimmung. Du
            kannst die Auswahl jederzeit im Footer ändern. Mehr in der{" "}
            <Link href="/datenschutz" className="text-primary underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <fieldset className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <legend className="sr-only">Optionale Dienste</legend>
            <label className="flex items-center gap-2 opacity-70">
              <input type="checkbox" checked disabled className="accent-[var(--primary)]" /> Notwendig
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={statistics}
                onChange={(e) => setStatistics(e.target.checked)}
                className="accent-[var(--primary)]"
              />
              Statistik
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="accent-[var(--primary)]"
              />
              Werbung
            </label>
          </fieldset>
          <div className="flex flex-wrap gap-2 pt-1">
            {/* Gleichwertige Schaltflächen: Ablehnen ist genauso leicht wie Zustimmen. */}
            <Button size="sm" variant="outline" onClick={() => decide(false, false)}>
              Nur notwendige
            </Button>
            <Button size="sm" variant="outline" onClick={() => decide(statistics, marketing)}>
              Auswahl speichern
            </Button>
            <Button size="sm" variant="outline" onClick={() => decide(true, true)}>
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
