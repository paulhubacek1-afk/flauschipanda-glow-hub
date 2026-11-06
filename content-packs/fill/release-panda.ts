import type { FillPage } from "../types";

/**
 * Release-Lücken (Teil 3): Panda-Branding und Community.
 * Nur Seiten, deren Inhalt sich aus vorhandenen Fakten ergibt. Persönliche Seiten
 * (Über mich, Kontakt, Discord, Newsletter, KiToolsReport, Blog, Downloads) bleiben
 * Entwürfe, bis die echten Angaben vorliegen.
 */

const SHOP = { title: "FlauschiPandas Designs bei Spreadshirt", url: "https://www.spreadshirt.de/shop/user/flauschipandas" };
const YT = { title: "FlauschiPandas auf YouTube", url: "https://www.youtube.com/@FlauschiPandas" };
const WWF = { title: "WWF – Großer Panda", url: "https://www.wwf.de/themen-projekte/bedrohte-tier-und-pflanzenarten/grosser-panda" };
const IUCN = { title: "IUCN Red List – Giant Panda", url: "https://www.iucnredlist.org/species/712/121745669" };

export const releasePanda: FillPage[] = [
  {
    path: "panda-branding/panda-story/warum-panda",
    description: "Warum ein Panda? Was der Große Panda symbolisiert, warum er perfekt zur Panda Toolbox passt und wofür Flauschipanda als Maskottchen steht.",
    focusKeyword: "Warum Panda",
    linkAnchors: ["Warum Panda?"],
    markdown: `Kaum ein Tier ist so beliebt wie der **Große Panda**. Er ist rund, gemütlich, ein bisschen tollpatschig – und gleichzeitig ein weltweites Symbol für Natur- und Artenschutz. Genau diese Mischung macht ihn zum perfekten Begleiter für die Panda Toolbox.

## Was der Panda verkörpert

- **Freundlichkeit:** Pandas wirken sanft und zugänglich. So soll sich auch die Panda Toolbox anfühlen – keine komplizierten Fachtexte, sondern verständliche Erklärungen.
- **Neugier:** Junge Pandas erkunden ihre Umgebung mit viel Ausdauer. Neugier ist der Antrieb hinter allen unseren Ratgebern.
- **Gelassenheit:** Pandas verbringen viele Stunden am Tag mit Fressen und Ausruhen. Wir finden: Wissen darf entspannt sein.
- **Naturschutz:** Der Panda ist seit Jahrzehnten das Gesicht des Artenschutzes – das passt zu Panda GreenTech und unseren Ideen für saubere Energie.

## Ein Erfolg für den Artenschutz

Lange galt der Große Panda als **stark gefährdet**. Dank Schutzgebieten in China und internationaler Zusammenarbeit hat sich der wildlebende Bestand erholt. Die Weltnaturschutzunion IUCN stuft ihn seit 2016 als **„gefährdet“** statt „stark gefährdet“ ein. Er zeigt: Engagement lohnt sich – auch wenn die Art weiter geschützt werden muss.

## Schwarz-weiß und doch bunt

Der echte Panda ist schwarz-weiß. Unser **Flauschipanda** trägt zusätzlich ein Halstuch in **Türkis und Lila** – den Farben des Panda-Glow-Styles. Und weil kein Thema gleich ist, wechselt er sein Outfit: mit KI-Antenne bei den KI-Ratgebern, Safarihelm in den Zoos oder Rennkappe bei den Autos.

## Was Flauschipanda auf der Website macht

- Er **begleitet dich** unten rechts auf jeder Seite und schlägt passende Artikel vor.
- Er **sammelt Bambus**, während du stöberst – damit schaltest du neue Skins frei.
- Er **wechselt mit den Jahreszeiten** sein Aussehen, etwa als Weihnachtspanda.

Mehr über die Figur erfährst du in der Panda-Story, über das Design im Panda-Glow-Style.`,
    faq: [
      ["Warum heißt die Seite Panda Toolbox?", "Der Panda steht für freundliches, neugieriges und entspanntes Lernen – und für Naturschutz. Die Toolbox sammelt Wissen, Tools und Tipps an einem Ort."],
      ["Ist der Große Panda noch gefährdet?", "Ja. Die IUCN stuft ihn seit 2016 als „gefährdet“ ein – eine Verbesserung gegenüber „stark gefährdet“, aber die Art braucht weiter Schutz."],
    ],
    sources: [IUCN, WWF],
  },
  {
    path: "panda-branding/panda-story/die-panda-story",
    description: "Die Panda-Story: Wie Flauschipanda zum Begleiter der Panda Toolbox wurde, warum er Bambus sammelt und wie er mit dir zusammen wächst.",
    focusKeyword: "Flauschipanda",
    linkAnchors: ["Die Panda-Story", "Flauschipanda"],
    markdown: `Jede Toolbox braucht jemanden, der sie aufräumt, Dinge wiederfindet und gute Laune verbreitet. In der Panda Toolbox ist das **Flauschipanda** – ein kleiner Panda mit großem Wissensdurst.

## Wie alles anfing

Flauschipanda wollte eigentlich nur wissen, warum Bambus so gut schmeckt. Aus einer Frage wurden zehn, aus zehn wurden hundert: Wie lange schläft ein Hund? Was ist ein Turbolader? Wie funktioniert ein KI-Bildgenerator? Weil er sich nicht alles merken konnte, legte er eine **Toolbox** an – mit Fächern für Tiere, Zoos, Freizeitparks, KI, Autos, Finanzen und vieles mehr.

So entstand die **Panda Toolbox**: ein Ort, an dem Wissen ordentlich sortiert und verständlich erklärt ist.

## Warum er Bambus sammelt

Bambus ist für Flauschipanda das, was für andere Punkte oder Sterne sind. Jedes Mal, wenn du eine neue Seite entdeckst, einen Artikel liest oder einen Rechner benutzt, bekommt er ein bisschen **Bambus**. Damit wächst er – vom kleinen Panda zum neugierigen, zum Toolbox- und schließlich zum Glow-Panda.

## Seine vielen Outfits

Flauschipanda liebt Verkleidungen. Er hat inzwischen über **40 Skins**, vom Schoko-Panda über den Zauberer bis zum König. Manche gibt es nur zu bestimmten Zeiten, wie den Weihnachtspanda. Andere schaltest du frei, indem du dich in einem Themenbereich besonders gut auskennst – zum Beispiel den Zoo-Panda nach zehn Zoo-Seiten.

Im **Panda-Baukasten** auf der Startseite kannst du ihn sogar selbst einkleiden: mit Fellfarbe, Kopfbedeckung und Accessoire.

## Was ihm wichtig ist

- **Ehrlichkeit:** Werbung und Partnerlinks werden immer gekennzeichnet.
- **Verständlichkeit:** Lieber ein Beispiel mehr als ein Fachwort zu viel.
- **Kostenlos für alle:** Die Toolbox bleibt frei zugänglich.
- **Ein grünes Herz:** Mit Panda GreenTech unterstützt die Toolbox Ideen für saubere Energie.

## Und du?

Flauschipanda freut sich über jeden Besuch. Schau in die **Panda Games**, sammle Bambus und finde heraus, welchen Skin du als Nächstes freischaltest. 🐼`,
    faq: [
      ["Wer ist Flauschipanda?", "Das Maskottchen der Panda Toolbox. Er begleitet dich auf der Website, schlägt Artikel vor und sammelt Bambus, während du stöberst."],
      ["Wie schalte ich neue Skins frei?", "Indem du Bambus sammelst – durch neue Seiten, gelesene Artikel, benutzte Rechner und tägliche Besuche. Themen-Skins gibt es für besonders viele Seiten in einem Bereich."],
    ],
  },
  {
    path: "panda-branding/panda-designs/panda-designs",
    description: "Die Panda-Designs von FlauschiPandas: Gamer Panda, DJ Panda, Sleepy Panda, Happy Panda und mehr – Charaktere, Stil und wo es sie als Merch gibt.",
    focusKeyword: "Panda Designs",
    linkAnchors: ["Panda-Designs"],
    markdown: `Neben Flauschipanda gibt es eine ganze Familie eigener **Panda-Designs**. Jeder Panda hat seinen eigenen Charakter – und viele davon gibt es als Merch zum Anziehen.

## Die Panda-Familie

| Design | Charakter |
|---|---|
| **Gamer Panda – Mode ON** | zockt lieber, als zu schlafen |
| **DJ Panda – Beat Mode ON** | legt auf und hat immer Musik im Ohr |
| **Sleepy Panda** | für alle Morgenmuffel |
| **Happy Panda – Love Mode ON** | verteilt gute Laune und Herzen |
| **Baby Panda – Milk Mode ON** | für die Kleinsten und ihre Eltern |
| **Cute Bamboo Panda** | der Klassiker mit Bambus |
| **Phasmo-Panda** und **Dark Spirit Panda** | für Fans gruseliger Games |
| **Gewitter-Angst-Panda** | versteckt sich bei Donner unter der Decke |
| **Himmlischer Nephalim-Panda** | ein Panda mit Flügeln und Heiligenschein |
| **WM Panda Deutschland** | für Fußballfans |

## Der Stil

Die Designs verbinden den runden, freundlichen Panda-Look mit klaren Umrissen und einem Augenzwinkern. Viele tragen einen kurzen Spruch wie „Mode ON“ – so erkennt man sofort, in welcher Stimmung der Panda gerade ist. Die Farben lehnen sich an den **Panda-Glow-Style** mit Türkis und Lila an.

## Wo es die Designs gibt

Die Motive gibt es im **FlauschiPandas Shop bei Spreadshirt** auf Pullovern, Hoodies, Tassen, Stickern und weiteren Produkten. Spreadshirt druckt erst nach der Bestellung und verschickt direkt zu dir.

**[👉 Zum FlauschiPandas Shop](https://www.spreadshirt.de/shop/user/flauschipandas)**

Mit jedem Kauf unterstützt du FlauschiPandas und damit auch Projekte wie Panda GreenTech.

## Selbst kreativ werden

Lust, eigene Pandas zu gestalten? Probier die **Panda-Malvorlagen** zum Zeichnen, die **Panda-KI-Prompts** für KI-Bilder oder den **Panda-Baukasten** auf der Startseite.

## Nutzung der Designs

Die Panda-Designs sind eigene Motive von FlauschiPandas. Bitte verwende sie nicht für eigene Produkte oder kommerzielle Zwecke. Für Kooperationen findest du Infos auf der Seite „Kooperationen“.`,
    faq: [
      ["Wo kann ich die Panda-Designs kaufen?", "Im FlauschiPandas Shop bei Spreadshirt – auf Kleidung, Tassen, Stickern und weiteren Produkten."],
      ["Darf ich die Panda-Designs für eigene Produkte verwenden?", "Nein, die Motive sind eigene Designs von FlauschiPandas. Für Kooperationsanfragen gibt es die Seite „Kooperationen“."],
    ],
    sources: [SHOP],
  },
  {
    path: "panda-branding/panda-designs/panda-wallpaper",
    description: "Panda-Wallpaper selbst erstellen: richtige Auflösungen für Handy und PC, Glow-Look in Türkis und Lila, KI-Prompts und Tipps zum Einrichten.",
    focusKeyword: "Panda Wallpaper",
    linkAnchors: ["Panda-Wallpaper"],
    markdown: `Ein **Panda-Wallpaper** bringt gute Laune auf Handy und Bildschirm. Hier erfährst du, wie du dir ein eigenes Panda-Hintergrundbild im Panda-Glow-Look erstellst – in der richtigen Größe und ohne Rechteprobleme.

## Die richtige Auflösung

| Gerät | Format | Typische Größe |
|---|---|---|
| **Smartphone** | Hochformat, ca. 9:19,5 | 1170 × 2532 oder 1080 × 2400 Pixel |
| **Tablet** | ca. 4:3 | 2048 × 2732 Pixel |
| **Laptop / PC (Full HD)** | 16:9 | 1920 × 1080 Pixel |
| **Monitor (4K)** | 16:9 | 3840 × 2160 Pixel |
| **Ultrawide** | 21:9 | 3440 × 1440 Pixel |

Erstelle das Bild lieber etwas **größer** – verkleinern geht ohne Qualitätsverlust, vergrößern nicht.

## Gestaltungstipps für Wallpaper

- **Platz für Uhr und Apps lassen:** Auf dem Handy-Sperrbildschirm sitzt oben die Uhr, unten liegen Symbole. Das Hauptmotiv gehört in die Mitte oder ins untere Drittel.
- **Dunkler Hintergrund:** Spart bei OLED-Displays Energie und lässt Glow-Effekte leuchten.
- **Wenig Details am Rand:** Smartphones schneiden je nach Modell unterschiedlich zu.
- **Kontrast:** App-Namen sollten gut lesbar bleiben.

## Panda-Glow-Wallpaper mit KI

Diese Prompts kannst du in einem KI-Bildgenerator verwenden und anpassen:

- „Niedlicher Panda aus leuchtenden Neonlinien in Türkis und Lila, schwarzer Hintergrund, minimalistisch, Hochformat, viel freier Raum oben“
- „Panda sitzt auf einem Mond und hält einen leuchtenden Bambusstab, Sternenhimmel, Türkis-Lila-Glow, digitale Illustration, 16:9“
- „Schlafender Babypanda auf einer Wolke, Pastellfarben, weiches Licht, Hochformat“
- „Panda-Muster mit kleinen Bambusblättern, nahtlos, dunkelblau mit türkisen Akzenten“

Gib im Prompt das **Seitenverhältnis** an (z. B. 9:16 oder 16:9), wenn das Tool es unterstützt.

## Wallpaper einrichten

- **iPhone:** Einstellungen → Hintergrundbild → Neues Hintergrundbild hinzufügen.
- **Android:** Lange auf den Startbildschirm tippen → Hintergrund (je nach Hersteller unterschiedlich benannt).
- **Windows:** Rechtsklick auf den Desktop → Anpassen → Hintergrund.
- **macOS:** Systemeinstellungen → Hintergrundbild.

## Rechte beachten

Für dein eigenes Gerät darfst du fast alles verwenden. Willst du ein Wallpaper **veröffentlichen oder verkaufen**, prüfe die Nutzungsbedingungen des KI-Tools und verwende keine fremden Figuren oder Marken.

Mehr Inspiration findest du in den **Panda-KI-Prompts** und im **Panda-Glow-Style**.`,
    faq: [
      ["Welche Auflösung braucht ein Handy-Wallpaper?", "Für aktuelle Smartphones etwa 1080 × 2400 bis 1290 × 2796 Pixel im Hochformat. Etwas größer zu erstellen ist sicherer."],
      ["Wie erstelle ich ein Panda-Wallpaper mit KI?", "Mit einem KI-Bildgenerator und einem Prompt, der Motiv, Stil, Farben und das Seitenverhältnis beschreibt – zum Beispiel einen Glow-Panda in Türkis und Lila im Hochformat."],
    ],
  },
  {
    path: "projekte-community/community/kooperationen",
    description: "Kooperationen mit der Panda Toolbox: Welche Zusammenarbeit möglich ist, wie Werbung gekennzeichnet wird und was wir nicht machen.",
    focusKeyword: "Kooperation Panda Toolbox",
    linkAnchors: ["Kooperationen"],
    markdown: `Die Panda Toolbox ist offen für Zusammenarbeit – mit Marken, Creatorn, Zoos, Freizeitparks, Tool-Anbietern und gemeinnützigen Projekten. Wichtig ist uns dabei vor allem eines: **Ehrlichkeit gegenüber unseren Leserinnen und Lesern.**

## Welche Kooperationen möglich sind

- **Partnerprogramme (Affiliate):** Produkte und Dienste, die thematisch zu unseren Ratgebern passen.
- **Gesponserte Inhalte:** Beiträge oder Vorstellungen, die klar als Werbung gekennzeichnet sind.
- **Produkttests:** Wir testen Produkte ehrlich – auch mit Kritik, wenn sie berechtigt ist.
- **Creator-Kooperationen:** gemeinsame Projekte, etwa mit dem YouTube-Kanal FlauschiPandas.
- **Merch und Design:** Zusammenarbeit rund um die Panda-Designs.
- **Bildungs- und Naturschutzprojekte:** Gern unterstützen wir Projekte, die zu Panda GreenTech und unserer Haltung passen.

## Unsere Grundsätze

1. **Kennzeichnung:** Werbung, gesponserte Inhalte und Partnerlinks sind immer gekennzeichnet.
2. **Passend zum Thema:** Wir empfehlen nur, was für unsere Leser nützlich ist.
3. **Redaktionelle Unabhängigkeit:** Partner kaufen keine positiven Bewertungen. Kritik bleibt im Text.
4. **Keine Fake-Bewertungen** und keine erfundenen Erfahrungsberichte.
5. **Kinder und Jugendliche:** Keine Werbung, die sich gezielt an Kinder richtet oder sie unter Druck setzt.
6. **Datenschutz:** Keine Weitergabe von Besucherdaten an Partner.

## Was wir nicht machen

- Glücksspiel, Kredite mit unseriösen Konditionen oder Finanzprodukte mit hohem Risiko bewerben
- Produkte empfehlen, die Tieren schaden
- Versteckte Werbung oder gekaufte Links ohne Kennzeichnung

## So läuft eine Anfrage ab

1. Schreib uns kurz, **wer du bist** und **welche Zusammenarbeit** dir vorschwebt.
2. Wir prüfen, ob es zur Panda Toolbox passt.
3. Gemeinsam besprechen wir Umfang, Zeitraum und Kennzeichnung.

Die Kontaktdaten findest du im **Impressum**. Wie wir mit Werbung umgehen, steht ausführlich auf der Seite **„Transparenz & Werbung“**.`,
    faq: [
      ["Kann ich mit der Panda Toolbox zusammenarbeiten?", "Ja, wenn die Kooperation thematisch passt und für unsere Leser nützlich ist. Werbung wird immer gekennzeichnet."],
      ["Schreibt ihr auch bezahlte Bewertungen?", "Nein. Gesponserte Inhalte sind gekennzeichnet, aber positive Bewertungen sind nicht käuflich."],
    ],
  },
  {
    path: "projekte-community/community/eigene-projekte",
    description: "Die eigenen Projekte von FlauschiPandas: Panda Toolbox, Panda GreenTech, Panda-Merch, Panda Games und der YouTube-Kanal im Überblick.",
    focusKeyword: "FlauschiPandas Projekte",
    linkAnchors: ["Eigene Projekte", "FlauschiPandas Projekte"],
    markdown: `Hinter der Panda Toolbox steckt mehr als eine Website. Unter dem Namen **FlauschiPandas** sind mehrere Projekte entstanden, die alle eines gemeinsam haben: Pandas, Kreativität und ein bisschen Glow.

## Panda Toolbox

Das **Themen- und Communityportal**, auf dem du gerade bist. Ratgeber, Vergleiche und Rechner zu Tieren, Zoos, Freizeitparks, KI, Urlaub, Autos, Finanzen, Wissenschaft und mehr – verständlich erklärt, ehrlich gekennzeichnet und kostenlos.

## Panda GreenTech

Ein Projekt rund um **Ideen für umweltfreundliche Energie**, etwa das Konzept **Panda HomeCore**. Die Projekte sind in einem frühen Entwicklungsstadium. Wer möchte, kann sie freiwillig über eine Spendenaktion unterstützen. Mehr dazu unter „Was ist Panda GreenTech?“.

## FlauschiPandas Merch

Eigene **Panda-Designs** wie Gamer Panda, DJ Panda und Sleepy Panda auf Pullovern, Hoodies, Tassen und Stickern – gedruckt und verschickt von Spreadshirt. Alle Motive stellen wir unter „Panda-Designs“ vor.

## Panda Games

Kleine, kostenlose **Minispiele** direkt auf der Website: Glückskapsel, Bambus-Fangen, Memory und ein Reaktionsspiel. Wer spielt, sammelt Bambus-Boni für Flauschipanda.

## Flauschipanda und der Panda-Baukasten

Unser Maskottchen begleitet dich auf jeder Seite. Mit über 40 Skins und dem **Panda-Baukasten** kannst du ihn nach deinem Geschmack gestalten.

## YouTube: FlauschiPandas

Auf dem YouTube-Kanal **FlauschiPandas** gibt es Videos aus der Panda-Welt. Den Link findest du oben im Menü und in der Fußzeile.

## Wie alles zusammenhängt

Die Toolbox bleibt kostenlos. Einnahmen aus gekennzeichneter Werbung, Partnerlinks und dem Merch helfen, die Website zu betreiben – und unterstützen Projekte wie Panda GreenTech.

Du hast eine Idee für ein gemeinsames Projekt? Schau auf der Seite **„Kooperationen“** vorbei.`,
    faq: [
      ["Was gehört alles zu FlauschiPandas?", "Die Panda Toolbox, Panda GreenTech, der FlauschiPandas Merch, die Panda Games und der YouTube-Kanal FlauschiPandas."],
      ["Wie finanziert sich die Panda Toolbox?", "Über gekennzeichnete Werbung, Partnerlinks und den Merch. Die Inhalte bleiben kostenlos."],
    ],
    sources: [YT, SHOP],
  },
];
