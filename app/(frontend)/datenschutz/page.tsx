import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" href="/datenschutz" draftNotice>
      <h2 id="verantwortlicher">Verantwortlicher</h2>
      <p>[Name, Anschrift, Kontakt]</p>

      <h2 id="hosting">Hosting</h2>
      <p>[Hostinganbieter, Serverstandort, verarbeitete Daten wie IP-Adresse in Server-Logs, Rechtsgrundlage, Speicherdauer]</p>

      <h2 id="speicher">Lokale Speicherung deiner Einwilligung</h2>
      <p>
        Deine Auswahl in den Datenschutz-Einstellungen speichern wir ausschließlich in deinem Browser (Local Storage,
        Schlüssel „fp-consent“). Sie wird nicht an uns übertragen. Du kannst sie jederzeit über „Cookie-Einstellungen“ im
        Footer ändern.
      </p>

      <h2 id="dienste">Optionale Dienste</h2>
      <p>[Erst ausfüllen, wenn Statistik- oder Werbedienste eingebunden werden: Anbieter, Zweck, Daten, Drittlandübermittlung.]</p>

      <h2 id="affiliate">Affiliate-Partner</h2>
      <p>[Eingesetzte Partnerprogramme und welche Daten beim Klick an den Partner übertragen werden.]</p>

      <h2 id="rechte">Deine Rechte</h2>
      <p>[Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch, Beschwerde bei der Aufsichtsbehörde.]</p>
    </LegalPage>
  );
}
