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

      <h2 id="panda">Panda-Buddy „Flauschipanda“</h2>
      <p>
        Flauschipanda schlägt dir Themen vor, die zu den Kategorien passen, die du dir angesehen hast. Diese
        Interessen werden ausschließlich in deinem Browser verarbeitet und nie an uns übertragen. Ohne Einwilligung
        gelten sie nur für den aktuellen Besuch. Hast du in den Datenschutz-Einstellungen „Statistik“ oder „Werbung“
        zugestimmt, werden sie zusätzlich im Local Storage (Schlüssel „fp-interests“) gespeichert, damit der Panda dich
        beim nächsten Besuch wiedererkennt. Gesammelter Bambus, freigeschaltete Gegenstände und dein gewählter Skin
        werden nur mit dieser Einwilligung oder wenn du im Panda-Menü „Sammlung merken“ einschaltest im Local Storage
        gespeichert („fp-bambus“, „fp-bambus-merken“). Verkleinerst du den Panda, wird nur diese Einstellung gespeichert
        („fp-bambus-mini“). Alles kannst du jederzeit über die Browser-Einstellungen löschen.
      </p>

      <h2 id="besuche">Anonyme Besucherzählung</h2>
      <p>
        Damit wir sehen, wie viele Menschen die Panda Toolbox nutzen und welche Artikel gerade beliebt sind, zählen wir
        Besuche und Seitenaufrufe anonym. Dabei sendet dein Browser beim Seitenwechsel nur die aufgerufene Adresse an
        unseren Server. Gespeichert werden ausschließlich Summen (z. B. „Besuche heute“, „Aufrufe dieser Seite“) – keine
        IP-Adressen, keine Cookies, kein Local Storage, keine Kennungen. Um Mehrfachzählungen zu vermeiden, wird die
        IP-Adresse für höchstens 30 Minuten im Arbeitsspeicher des Servers vorgehalten und danach verworfen
        (berechtigtes Interesse an einer einfachen, datensparsamen Reichweitenmessung).
      </p>

      <h2 id="teilen">Teilen-Knöpfe</h2>
      <p>
        Die Teilen-Knöpfe sind einfache Links. Es werden keine Skripte von sozialen Netzwerken geladen und keine Daten
        übertragen, solange du nicht selbst auf einen Knopf tippst. Erst dann öffnet sich die Seite des jeweiligen
        Dienstes (z. B. WhatsApp, Telegram, Facebook oder X), für die dessen Datenschutzbestimmungen gelten.
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
