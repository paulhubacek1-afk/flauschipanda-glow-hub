import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" href="/impressum" draftNotice>
      <h2 id="betreiber">Medieninhaber und Betreiber</h2>
      <p>
        [Name / Firma]
        <br />
        [Anschrift]
        <br />
        E-Mail: [Kontaktadresse]
      </p>
      <h2 id="blattlinie">Grundlegende Richtung</h2>
      <p>[Kurze Beschreibung des Angebots, z. B. „Ratgeber- und Informationsportal zu Alltags- und Technikthemen“.]</p>
      <h2 id="haftung">Hinweis zu Inhalten und Links</h2>
      <p>[Haftungshinweise nach Prüfung ergänzen.]</p>
    </LegalPage>
  );
}
