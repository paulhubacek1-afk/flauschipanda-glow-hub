# 🐼 Panda Toolbox (FlauschiPandas)

Die Panda Toolbox ist als großes Themen- und Communityportal geplant. Sie verbindet Tiere, Zoos, Freizeitparks, KI, Tools, Creator-Wissen, Finanzen und eigene Projekte wie Panda GreenCore in einer gemeinsamen Struktur. Aktuell entsteht das Fundament, auf dem später Inhalte, Tools, Communityfunktionen und Empfehlungen aufgebaut werden.

Next.js (App Router) · React · Tailwind CSS v4 · shadcn/ui · TypeScript

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000 → /startseite
```

## Das Prinzip

```
Hauptkategorie  →  Unterthema  →  Landingpage (= eine Suchanfrage)
/tiere          →  /tiere/hunde →  /tiere/hunde/gesundes-hundefutter
```

Die Startseite liegt unter **`/startseite`**. Es gibt keine `.html`-Adressen: `/`, `/home`, `/startseite.html` und jede andere `*.html`-URL werden auf die saubere Adresse ohne Endung umgeleitet.

Die komplette Struktur steht in **einer** Datei: `lib/hierarchy.ts` (15 Kategorien, 96 Unterthemen, 387 Landingpages – Übersicht in `STRUKTUR.md`).
Daraus entstehen automatisch:

- das Mega-Menü, der Footer und die Breadcrumbs,
- alle Kategorie- und Unterthemen-Seiten,
- die Übersicht `/seitenstruktur` (HTML-Sitemap) und `STRUKTUR.md` (`npm run struktur`),
- Sitemap-Einträge und die interne Verlinkung zwischen Geschwisterseiten.

Neue Themen ergänzt du dort mit einer Zeile. Für wiederkehrende Strukturen gibt es Vorlagen:
`pet()` für Haustiere, `wildAnimal()` für Wildtiere, `zoo()` für Zoos und `park()` für Freizeitparks.

## Neue Seite automatisch erzeugen

Titel eingeben – den Rest erledigt die Automatik (`lib/auto.ts`):

```bash
npm run neu -- "Gesundes Hundefutter"
```

oder im Browser unter **`/redaktion/neu`** (lokal mit `npm run dev`). Automatisch entstehen:

| Baustein | Woher |
|---|---|
| SEO-Titel | Suchbegriff + passender Zusatz je Kategorie, max. 60 Zeichen |
| Meta-Beschreibung | Suchbegriff + Nutzen je Kategorie, 70–160 Zeichen |
| Verwandte Seiten | Nachbarseiten im Unterthema + passende Seiten anderer Kategorien |
| Affiliate-Box | Produkte aus `lib/affiliate.ts`, deren `topics` zum Unterthema passen |
| Spendenbox | Panda GreenCore, auf jeder Landingpage |
| Panda-GreenCore-Hinweis | Kurzer Hinweis in der Seitenleiste |

Der Entwurf wird mit `status: draft` angelegt und ist erst nach Text, Faktenprüfung und `status: published` öffentlich. Bestehende Dateien werden nie überschrieben. Fehlen SEO-Titel, Meta-Beschreibung, verwandte Seiten oder Produkte später in einer Datei, ergänzt die Website sie zur Laufzeit automatisch. Das Redaktions-Cockpit weist darauf hin.

## Eine Landingpage live schalten

Lege die passende Datei an: `content/<kategorie>/<unterthema>/<seite>.md`. Solange sie fehlt, ist die Seite „geplant“. Sie erscheint dann nur grau als „bald“, ohne Link und nicht in der Sitemap. So entstehen keine leeren Seiten.

Jede Landingpage hat denselben Aufbau:

1. **Infotext** – der Markdown-Text (`##`-Überschriften, keine H1)
2. **FAQ** – `faq:` (inkl. FAQPage-Schema)
3. **Vergleich** – `comparison:` (Tabelle)
4. **Affiliate-Box** – `products:` (IDs aus `lib/affiliate.ts`) bzw. `[Text](aff:id)` im Text
5. **Spendenbox Panda GreenCore** – automatisch, abschaltbar mit `donation: false`

```yaml
---
seoTitle: "Gesundes Hundefutter: Woran du gute Qualität erkennst"   # optional – sonst automatisch
description: "Meta-Beschreibung, 70–160 Zeichen"                     # optional – sonst automatisch
status: published                 # draft | review | published
publishedAt: 2026-11-20T08:00:00+01:00   # Zukunft = geplante Veröffentlichung
focusKeyword: "Gesundes Hundefutter"     # Standard: Titel aus der Hierarchie
linkAnchors: ["Hundefutter"]       # über diese Begriffe verlinken ANDERE Seiten hierher
related: [tiere/hunde/welpenfutter]
products: [kuechenwaage-futter]
faq: [{ q: "Frage?", a: "Antwort." }]
comparison:
  title: "Futterarten im Vergleich"
  columns: ["Trockenfutter", "Nassfutter"]
  rows: [{ label: "Wassergehalt", values: ["gering", "hoch"] }]
sources: [{ title: "Quelle", url: "https://…" }]
factCheck: { required: true, status: geprüft, reviewedBy: "Name", reviewedAt: 2026-11-18 }
---
```

## Automatisch

- **Interne Verlinkung:** Begriffe aus den `linkAnchors` anderer Seiten werden im Infotext verlinkt. Dafür gelten feste Grenzen: max. 1 Link pro Ziel, 1 pro Absatz und 5 pro Seite. Bei Gleichstand gewinnt das gleiche Unterthema. Zusätzlich gibt es eine Seitenleiste mit allen Seiten des Unterthemas und einen „Weiterlesen“-Bereich.
- **SEO:** Jede Seite bekommt Canonical, Open Graph inkl. generiertem Bild sowie Article-, Breadcrumb- und FAQ-Schema. Dazu kommen Sitemap und robots.txt. Leere Kategorien und Unterthemen sind `noindex`.
- **Geplante Veröffentlichung:** Die Seiten werden stündlich neu erzeugt (ISR). Der Cronjob `GET /api/revalidate` mit `Authorization: Bearer $CRON_SECRET` ist auf Vercel bereits in `vercel.json` eingetragen.
- **Prüfung vor jedem Build** (`npm run check:content`):
  - Länge von Titel und Beschreibung, Suchbegriff, dünner Inhalt
  - Keyword-Kannibalisierung, defekte Links, verwaiste Seiten
  - Dateien außerhalb der Hierarchie, fehlerhafte Vergleichstabellen, unbekannte Affiliate-IDs
  - fehlende Quellen, ausstehende Faktenprüfung, Abdeckung je Kategorie
- **Redaktions-Cockpit** `/redaktion` (nur lokal oder mit `ENABLE_EDITOR_DASHBOARD=true`): Abdeckung der Hierarchie, Redaktionsplan und Prüfergebnisse.

## Vor dem Livegang

`npm run check:release` blockiert die Veröffentlichung, solange einer dieser Punkte offen ist. Auf Vercel-Produktion passiert das automatisch.

- Faktenprüfungen stehen noch aus.
- Quellen fehlen.
- Affiliate-Links sind noch Platzhalter.
- **Spendenzweck** (`donationConfig.purpose` in `lib/site.ts`) oder **Spendenlink** (`NEXT_PUBLIC_DONATION_URL`) fehlen.

Die mitgelieferten Seiten sind bewusst als „Prüfung ausstehend“ markiert. Ihre Quellen verweisen noch auf Startseiten, z. B. von ADAC, ÖAMTC, BfR oder FEDIAF, und müssen präzisiert werden. Impressum und Datenschutz sind Vorlagen. Bei Spenden bitte klären, welche rechtlichen Anforderungen für Panda GreenCore gelten.

## Struktur

```
lib/hierarchy.ts           ★ Die Seiten-Hierarchie (Kategorie → Unterthema → Landingpage)
lib/auto.ts                Automatik: SEO-Titel, Meta, Verwandte, Affiliate-Auswahl
lib/generator.ts           Seiten-Generator (npm run neu, /redaktion/neu)
content/<kat>/<thema>/*.md Inhalte der Landingpages
app/[kategorie]/…          Kategorie-, Unterthemen- und Landingpage-Routen
app/seitenstruktur         HTML-Übersicht aller Seiten
lib/content.ts             Laden, Validierung (zod), Veröffentlichungslogik
lib/markdown.ts            Markdown → HTML, Auto-Verlinkung, Affiliate-Links
lib/linking.ts             Verlinkungsregeln, Weiterlesen
lib/seo-audit.ts           SEO- und Qualitätsprüfung
lib/site.ts                Website- und Spendenbox-Konfiguration
lib/affiliate.ts           Affiliate-Register
scripts/                   check-content.ts, export-structure.ts, new-page.ts
```

Später kann `lib/hierarchy.ts` durch eine Datenbank im CMS ersetzt werden. Seiten, Menüs und Prüfungen bleiben dabei unverändert.
