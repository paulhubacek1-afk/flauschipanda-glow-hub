# 🐼 Panda Toolbox (FlauschiPandas)

Die Panda Toolbox ist als großes Themen- und Communityportal geplant. Sie verbindet Tiere, Zoos, Freizeitparks, KI, Tools, Creator-Wissen, Finanzen und eigene Projekte wie Panda GreenCore in einer gemeinsamen Struktur. Aktuell entsteht das Fundament, auf dem später Inhalte, Tools, Communityfunktionen und Empfehlungen aufgebaut werden.

**Technik:** Next.js · React · Tailwind CSS v4 · shadcn/ui · **Payload CMS** (Backend unter `/admin`) · Postgres

## Veröffentlichung

Die Website läuft unter **https://flauschigespanda.webdock.dev**, das Payload-CMS
unter **https://flauschigespanda.webdock.dev/admin**.

Pushes auf `main` lösen im Vercel-Projekt `spitzli/flauschipanda-glow-hub`
automatisch einen Produktionsbuild aus. Erst ein erfolgreicher Build aktualisiert
die Live-Seite. Functions, PostgreSQL und Medienspeicher sind in Frankfurt;
Vercels Standard-Buildinfrastruktur ist für dieses Projekt ausdrücklich erlaubt.
Geheimnisse bleiben in den Vercel-Umgebungsvariablen und gehören nie ins Repo.

## Einrichtung

1. **Datenbank anlegen:** Du brauchst eine Postgres-Datenbank, z. B. ein kostenloses Projekt bei Supabase oder Neon. Kopiere die Verbindungs-URL.
2. **Umgebung:**
   ```bash
   cp .env.example .env
   # DATABASE_URI und PAYLOAD_SECRET eintragen (PAYLOAD_SECRET z. B. mit: openssl rand -hex 32)
   npm install
   ```
3. **Starten:** `npm run dev`
   - Website: <http://localhost:3000> → leitet auf `/startseite` weiter
   - Backend: <http://localhost:3000/admin>
4. **Hauptadmin anlegen:** Beim ersten Öffnen von `/admin` legst du den ersten Benutzer an. Er wird automatisch **Administrator**. Benutzername `paul_hub`, **neues** sicheres Passwort. Zugangsdaten stehen nie im Code.
5. **Struktur & Inhalte importieren:** `npm run seed`. Damit werden angelegt:
   - 15 Kategorien, 96 Unterthemen und 387 Seiten,
   - die vorhandenen Texte,
   - die Affiliate-Produkte,
   - die Money/Traffic-Kennzeichnung.

   Der Import ist mehrfach ausführbar und überschreibt nichts.

Wenn das Admin-Design fehlt oder Felder nicht laden, einmal `npm run generate:importmap` ausführen.

## Neue Seite anlegen – das passiert automatisch

Im Admin unter **Seiten → Neu**:

1. **Titel** eingeben, z. B. `Gesundes Hundefutter`
2. **Unterthema** wählen, z. B. `Hunde`
3. **Seitentyp** wählen: 💰 Money Page · 📈 Traffic Page · Standard
4. Infotext schreiben → **Speichern / Veröffentlichen**

| Automatisch | Ergebnis für „Gesundes Hundefutter“ |
|---|---|
| URL | `/tiere/hunde/gesundes-hundefutter` |
| Breadcrumb | Start › Tiere › Hunde › Gesundes Hundefutter |
| Interne Links | Welpenfutter · Trockenfutter · Nassfutter · Hundespielzeug … (Seitenleiste + Verlinkung im Text) |
| SEO-Titel | Gesundes Hundefutter 2026 – Tipps & Vergleich (Jahr bleibt automatisch aktuell) |
| Meta-Beschreibung | Gesundes Hundefutter: Worauf du achten solltest, ehrlicher Vergleich … |
| Verwandte Artikel | aus Unterthema und Kategorie; Traffic Pages verweisen bevorzugt auf Money Pages |
| Panda-GreenCore-Box | „Unterstütze Panda GreenCore“ + kurzer Hinweis in der Seitenleiste |
| Affiliate-Bereich | nur bei **Money Page = Ja**, mit passenden Produkten aus „Affiliate-Produkte → Passt zu“ |

Nach dem Speichern zeigt der Tab **„SEO & Verlinkung → Automatik-Vorschau“**, was erzeugt wurde, und gibt Hinweise wie „Keine FAQ“ oder „Faktenprüfung ausstehend“. SEO-Felder, die du selbst ausfüllst, haben Vorrang vor der Automatik.

## Was im Backend verwaltet wird

| Bereich | Inhalt |
|---|---|
| **Seiten** | Infotext (Editor), FAQ, Vergleich, Seitentyp, SEO, Quellen, Faktenprüfung, Entwürfe & Versionen, geplante Veröffentlichung |
| **Unterthemen / Kategorien** | Struktur, Reihenfolge, Symbol und Farbe – neue Themen ohne Programmieren |
| **Affiliate-Produkte** | Partnerlinks, Zuordnung zu Kategorien/Unterthemen, Platzhalter werden nie öffentlich gezeigt |
| **Medien** | Bilder und PDFs (kein SVG) |
| **Benutzer** | Rollen: Admin · Redakteur · Autor (nur Entwürfe) · Nutzer (kein Backend) |
| **Website-Einstellungen** | Name, Untertitel, Panda-GreenCore-Texte, Spendenzweck und -link |

Jede Änderung im Backend ist sofort auf der Website sichtbar.

## Qualität

- Ohne Infotext ist kein Veröffentlichen möglich. Autoren können nur Entwürfe speichern.
- Mit `CONTENT_STRICT=1` (Standard in `.env.example`) geht eine Seite nur mit bestätigter Faktenprüfung live.
- Affiliate-Links sind gekennzeichnet (`rel="sponsored"`, Sternchen und Hinweis), Werbung nur mit Einwilligung.
- Platzhalter-Partnerlinks werden nicht angezeigt.

## Vor dem Livegang

- Im Admin unter **Website-Einstellungen**: Spendenzweck und Spendenlink für Panda GreenCore eintragen.
- Faktenprüfung der importierten Seiten durchgehen (Quellen auf konkrete Unterseiten präzisieren).
- Impressum und Datenschutz (`app/(frontend)/impressum`, `…/datenschutz`) mit echten Angaben füllen. Datenbank und Hosting dort nennen.
- Auf Vercel einen Speicher-Adapter für Medien ergänzen (z. B. `@payloadcms/storage-vercel-blob`), weil das Dateisystem dort nicht dauerhaft ist.
- Umgebungsvariablen beim Hoster setzen: `DATABASE_URI`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SITE_URL`, `CRON_SECRET`.

## Struktur

```
payload.config.ts            Backend-Konfiguration
cms/collections/             Seiten, Unterthemen, Kategorien, Affiliates, Medien, Benutzer
cms/globals/SiteSettings.ts  Website-Einstellungen inkl. Panda GreenCore
app/(payload)/               Admin (/admin) und API (/api)
app/(frontend)/              Website: /startseite, /[kategorie]/[unterthema]/[seite], /seitenstruktur
lib/cms.ts                   Datenzugriff der Website auf das CMS
lib/auto.ts                  Automatik: SEO-Titel, Meta, Ankertexte, Breadcrumb
lib/linking.ts, markdown.ts  Interne Verlinkung, Infotext → HTML
lib/hierarchy.ts             Startstruktur für den Import (STRUKTUR.md: npm run struktur)
lib/page-types.ts            Money/Traffic-Startliste für den Import
content/                     Bestehende Texte (Import-Quelle)
scripts/seed.ts              Import ins CMS
```

URLs haben nie eine Dateiendung: `/`, `/home` und `*.html` werden auf saubere Adressen umgeleitet.
