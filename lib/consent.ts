"use client";

import { useEffect, useState } from "react";

/**
 * Minimale Einwilligungsverwaltung. Optionale Dienste (Statistik, Werbung)
 * werden erst nach Zustimmung geladen. Die Entscheidung liegt nur im Browser.
 * Für die Dokumentationspflicht später durch ein CMP oder Server-Log ersetzen.
 */
export interface Consent {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
  decidedAt: string;
  version: number;
}

export const CONSENT_KEY = "fp-consent";
export const CONSENT_VERSION = 1;
export const CONSENT_EVENT = "fp-consent-change";
export const OPEN_CONSENT_EVENT = "fp-consent-open";

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

export function saveConsent(statistics: boolean, marketing: boolean) {
  const consent: Consent = {
    necessary: true,
    statistics,
    marketing,
    decidedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    /* Speicher blockiert – Entscheidung gilt dann nur für diese Sitzung */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
  return consent;
}

export function useConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
    const onChange = (e: Event) => setConsent((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  return { consent, ready };
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
