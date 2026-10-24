import type { FillPage } from "../types";

const VZ_GELD = { title: "Verbraucherzentrale – Geld und Versicherungen", url: "https://www.verbraucherzentrale.de/wissen/geld-versicherungen" };
const AK = { title: "Arbeiterkammer Österreich – Konsumentenschutz", url: "https://www.arbeiterkammer.at/" };
const BMF_AT = { title: "oesterreich.gv.at – Steuern und Finanzen", url: "https://www.oesterreich.gv.at/" };
const YTAUDIO = { title: "YouTube-Hilfe – Audio-Mediathek", url: "https://support.google.com/youtube/answer/3376882" };
const GEMA = { title: "GEMA – Musiknutzung", url: "https://www.gema.de/" };
const AKM = { title: "AKM – Musiknutzung in Österreich", url: "https://www.akm.at/" };
const DSGVO = { title: "Datenschutzbehörde Österreich", url: "https://www.dsb.gv.at/" };
const GADS = { title: "Google Ads – Keyword-Planer", url: "https://ads.google.com/intl/de_de/home/tools/keyword-planner/" };
const GTRENDS = { title: "Google Trends", url: "https://trends.google.de/" };
const GSC = { title: "Google Search Console", url: "https://search.google.com/search-console/about" };

export const toolsMusikFinanzen: FillPage[] = [
  /* ================= Tools & Apps ================= */
  {
    path: "tools-apps/canva-alternativen/design-tools-fuer-einsteiger",
    description: "Design-Tools für Einsteiger: Online-Editoren, Bildbearbeitung und Vektorgrafik im Überblick – welches Werkzeug für Social Media, Logos und Präsentationen passt.",
    markdown: `Für schöne Grafiken braucht es heute keine Profi-Software mehr. Diese **Design-Tools** eignen sich für Einsteiger – sortiert nach Aufgabe.

## Online-Design-Editoren

Für Social-Media-Posts, Flyer, Präsentationen und Thumbnails mit Vorlagen. Bekannte Beispiele sind **Canva** und **Adobe Express**. Vorteil: Drag-and-drop und viele Vorlagen. Achte darauf, welche Funktionen und Elemente kostenpflichtig sind.

## Kollaboratives Design

**Figma** ist vor allem für App- und Webdesign beliebt, eignet sich aber auch für Grafiken und Präsentationen. Mehrere Personen können gleichzeitig arbeiten.

## Vektorgrafik (Logos, Icons)

- **Inkscape** – kostenlos und quelloffen.
- Vektorgrafiken lassen sich ohne Qualitätsverlust beliebig skalieren – ideal für Logos.

## Bildbearbeitung

- **GIMP** – kostenlos, quelloffen, mächtig.
- **Photopea** – läuft im Browser und erinnert an klassische Profi-Programme.
- **Krita** – vor allem für digitales Malen.

Mehr dazu unter „Kostenlose Bildbearbeitung“.

## Welches Tool für welchen Zweck?

| Aufgabe | Geeignet |
|---|---|
| Social-Media-Post mit Vorlage | Online-Design-Editor |
| Logo | Vektorprogramm |
| Foto retuschieren | Bildbearbeitung |
| App-/Website-Entwurf | Figma |

## Tipps für Einsteiger

- Mit Vorlagen starten und anpassen.
- Wenige Schriften und Farben verwenden.
- Auf Lizenzen von Bildern und Schriften achten.

Alternativen zu Canva findest du in unserem Vergleich der Canva-Alternativen.`,
    faq: [
      ["Welches Design-Tool ist für Anfänger am einfachsten?", "Online-Editoren mit Vorlagen wie Canva oder Adobe Express sind besonders einsteigerfreundlich."],
      ["Gibt es kostenlose Profi-Alternativen?", "Ja, zum Beispiel GIMP für Bildbearbeitung und Inkscape für Vektorgrafik – beide kostenlos und quelloffen."],
    ],
  },
  {
    path: "tools-apps/canva-alternativen/glow-plugins",
    description: "Glow-Effekte in Design-Tools: So erzeugst du Neon- und Leuchteffekte in Online-Editoren, GIMP, Photopea und Figma – mit oder ohne Plugins.",
    markdown: `Ein **Glow-Effekt** lässt Schrift und Formen leuchten – perfekt für den Neon-Look. Viele Programme können das von Haus aus, für andere gibt es Erweiterungen.

## Das Grundprinzip (funktioniert fast überall)

1. Element duplizieren.
2. Die Kopie unter das Original legen.
3. Kopie **weichzeichnen** (Gaußscher Weichzeichner bzw. Unschärfe).
4. Deckkraft anpassen, eventuell Ebenenmodus **„Negativ multiplizieren“ / „Screen“**.
5. Für intensiveres Leuchten mehrere unscharfe Kopien übereinanderlegen.

## In Online-Design-Editoren

Viele Editoren bieten bei Text einen Effekt wie **„Neon“** oder **„Leuchten“** sowie Schatten, die du in heller Farbe als Glow nutzen kannst.

## In GIMP und Photopea

- **Ebenenstil „Schein nach außen“** (Photopea) bzw. Filter **„Licht und Schatten“** (GIMP).
- Alternativ das Grundprinzip mit Weichzeichner.

## In Figma

Ein **Schlagschatten** oder **Ebenenunschärfe** mit heller Farbe und großem Radius erzeugt einen Glow. Für spezielle Effekte gibt es Community-Plugins – prüfe vor der Installation, wer sie anbietet und welche Rechte sie verlangen.

## Tipps

- Dunkler Hintergrund verstärkt die Wirkung.
- Dicke Schriften leuchten besser als dünne.
- Sparsam einsetzen – nicht alles muss glühen.

Inspiration findest du unter „Glow-Design“ und „Glow-Bilder erstellen“.`,
    faq: [
      ["Brauche ich ein Plugin für einen Glow-Effekt?", "Meist nicht. Mit duplizierten, weichgezeichneten Ebenen oder Schatten-Effekten gelingt der Glow in fast jedem Programm."],
      ["Sind Figma-Plugins sicher?", "Prüfe Anbieter, Bewertungen und angefragte Berechtigungen. Installiere nur Plugins, die du wirklich brauchst."],
    ],
  },
  {
    path: "tools-apps/youtube-tools/beste-youtube-tools",
    description: "Die besten YouTube-Tools: Aufnahme, Schnitt, Thumbnails, Keyword-Recherche und Analyse – welche Werkzeuge Creator wirklich brauchen.",
    markdown: `Für einen YouTube-Kanal brauchst du nicht Dutzende Tools. Diese Kategorien decken den gesamten Ablauf ab – vom Dreh bis zur Analyse.

## 1. YouTube Studio (kostenlos, Pflicht)

Das wichtigste Werkzeug ist schon da: **YouTube Studio** zeigt Aufrufe, Zuschauerbindung, Klickrate und Traffic-Quellen. Hier verwaltest du Videos, Kommentare und Monetarisierung.

## 2. Aufnahme

- Smartphone-Kamera oder Webcam
- **OBS Studio** (kostenlos, quelloffen) für Bildschirmaufnahmen und Livestreams
- Ein gutes Mikrofon ist wichtiger als die Kamera

## 3. Schnitt

Kostenlose Programme wie **DaVinci Resolve** (kostenlose Version), **Shotcut** oder **Kdenlive**, außerdem einfache Handy-Apps. Mehr unter „Kostenlose Videobearbeitung“.

## 4. Thumbnails

Design-Tools mit Vorlagen oder Bildbearbeitung – siehe „Thumbnail-Tools“.

## 5. Ideen und Keywords

- YouTube-Suchvorschläge
- **Google Trends** mit Filter „YouTube-Suche“
- Keyword-Tools – siehe „Keyword-Tools für YouTube“

## 6. Untertitel

YouTube erstellt automatische Untertitel. Korrigiere sie, denn viele schauen ohne Ton.

## 7. Planung

Ein einfacher Content-Kalender (Tabelle oder Notiz-App) reicht für den Start.

## Erweiterungen von Drittanbietern

Browser-Erweiterungen für YouTube-SEO sind beliebt. Prüfe, welche Daten sie lesen, und verlasse dich nicht blind auf „Scores“.`,
    faq: [
      ["Welche YouTube-Tools sind kostenlos?", "YouTube Studio, OBS Studio, Google Trends und mehrere Schnittprogramme wie DaVinci Resolve (kostenlose Version), Shotcut und Kdenlive."],
      ["Brauche ich bezahlte YouTube-Tools?", "Für den Start nicht. Bezahlte Tools können später Zeit sparen, sind aber kein Muss."],
    ],
  },
  {
    path: "tools-apps/youtube-tools/thumbnail-tools",
    description: "Thumbnail-Tools für YouTube: Online-Editoren, Bildbearbeitung, Freisteller und Vorlagen – so erstellst du auffällige Thumbnails auch ohne Designkenntnisse.",
    markdown: `Ein gutes Thumbnail kann über den Erfolg eines Videos entscheiden. Mit diesen **Thumbnail-Tools** gelingt es auch ohne Designstudium.

## Online-Design-Editoren

Mit fertigen YouTube-Vorlagen (1280 × 720 Pixel) und Drag-and-drop. Ideal für Einsteiger. Viele bieten Funktionen zum **Freistellen** von Personen.

## Bildbearbeitung

Für mehr Kontrolle: **GIMP** oder **Photopea** (im Browser). Hier arbeitest du mit Ebenen, Masken und Effekten.

## Freistellen

Hintergrund entfernen, damit dein Gesicht oder Produkt vor einem farbigen Hintergrund steht. Viele Editoren und Smartphones können das inzwischen automatisch.

## Schriften

Fette, gut lesbare Schriften. Achte auf die **Lizenz** – nicht jede Schrift darf kommerziell genutzt werden.

## Workflow

1. Gutes Foto aufnehmen (Gesicht mit Emotion, gutes Licht).
2. Freistellen.
3. Kontrastreicher Hintergrund.
4. Zwei bis vier Wörter Text.
5. Verkleinert prüfen – ist es am Handy lesbar?
6. Als Vorlage speichern für einen einheitlichen Kanalstil.

## Testen

YouTube bietet die Möglichkeit, verschiedene Thumbnails zu vergleichen. Nutze sie, um herauszufinden, was bei deinem Publikum funktioniert.

Gestaltungsregeln findest du unter „Thumbnails gestalten“.`,
    faq: [
      ["Welche Größe brauche ich für YouTube-Thumbnails?", "1280 × 720 Pixel im Format 16:9."],
      ["Kann ich Thumbnails am Handy erstellen?", "Ja, viele Design-Apps bieten mobile Versionen mit YouTube-Vorlagen."],
    ],
  },
  {
    path: "tools-apps/youtube-tools/tools-fuer-youtube-shorts",
    description: "Tools für YouTube Shorts: Aufnahme, Schnitt, Untertitel und Wiederverwertung langer Videos – die besten Werkzeuge für Hochkant-Videos.",
    markdown: `Shorts entstehen oft direkt am Smartphone. Mit den richtigen **Tools** werden sie schneller und besser.

## In der YouTube-App

Die YouTube-App bietet eine eigene Shorts-Kamera mit Musik, Timer, Geschwindigkeit, Text und Filtern. Für den Einstieg reicht das völlig.

## Schnitt-Apps am Smartphone

Mobile Schnitt-Apps bieten Hochkant-Vorlagen, Übergänge, Text und automatische Untertitel. Achte auf **Wasserzeichen** in kostenlosen Versionen und auf die Datenschutzbedingungen.

## Am Computer

Desktop-Schnittprogramme können ebenfalls im Format **9:16** exportieren. Praktisch, wenn du Shorts aus langen Videos schneidest.

## Automatische Untertitel

Viele schauen ohne Ton. Automatische Untertitel – in der App oder im Schnittprogramm – sparen Zeit. **Korrekturlesen** nicht vergessen.

## Lange Videos wiederverwerten

Es gibt KI-Tools, die automatisch spannende Ausschnitte aus langen Videos vorschlagen und ins Hochformat bringen. Prüfe die Ergebnisse – der beste Moment ist nicht immer der, den die KI wählt.

## Musik

Nutze lizenzierte Musik aus der YouTube-Bibliothek, damit es keine Urheberrechtsprobleme gibt. Mehr unter „Lizenzfreie Musik“.

## Tipp

Erstelle eine Vorlage mit Schriften und Farben – so wirken deine Shorts einheitlich.`,
    faq: [
      ["Brauche ich eine extra App für Shorts?", "Nein, die YouTube-App reicht für den Start. Schnitt-Apps bieten mehr Möglichkeiten."],
      ["Welches Format haben Shorts?", "Hochformat im Seitenverhältnis 9:16."],
    ],
  },
  {
    path: "tools-apps/keyword-tools/keyword-recherche-anleitung",
    description: "Keyword-Recherche Anleitung: Schritt für Schritt zu den richtigen Suchbegriffen – Suchintention, Long-Tail, kostenlose Tools und Priorisierung.",
    markdown: `Mit einer **Keyword-Recherche** findest du heraus, wonach deine Zielgruppe sucht. So schreibst du Inhalte, die gefunden werden.

## Schritt 1: Themen sammeln

Notiere die Hauptthemen deiner Website und die Probleme deiner Zielgruppe.

## Schritt 2: Ideen erweitern

- **Suchvorschläge** in Google und YouTube
- „Ähnliche Fragen“ in den Suchergebnissen
- **Google Trends** für saisonale Schwankungen
- **Google Keyword-Planer** (mit Google-Ads-Konto) für Suchvolumen-Bereiche
- **Google Search Console**: Für welche Begriffe wirst du bereits gefunden?

## Schritt 3: Suchintention verstehen

- **Informativ:** „Wie funktioniert ein Turbolader?“
- **Kommerziell:** „Beste Dashcam“
- **Transaktional:** „Dashcam kaufen“
- **Navigational:** „Zoo Berlin Website“

Schau dir die aktuellen Top-Ergebnisse an: Was erwarten Suchende – Ratgeber, Vergleich, Produktseite?

## Schritt 4: Long-Tail nutzen

Längere, spezifische Suchanfragen („gesundes Hundefutter für Welpen großer Rassen“) haben weniger Konkurrenz und passen oft besser.

## Schritt 5: Priorisieren

Bewerte nach **Relevanz**, **Suchvolumen** und **Wettbewerb**. Starte mit Begriffen, bei denen du echten Mehrwert bieten kannst.

## Schritt 6: Ein Keyword pro Seite

Jede Seite bekommt ein Hauptkeyword plus verwandte Begriffe. So vermeidest du, dass eigene Seiten miteinander konkurrieren.

Tools im Überblick findest du bei den Keyword-Tools.`,
    faq: [
      ["Was ist ein Long-Tail-Keyword?", "Eine längere, spezifische Suchanfrage mit meist weniger Suchvolumen, aber auch weniger Konkurrenz und klarer Suchabsicht."],
      ["Ist der Google Keyword-Planer kostenlos?", "Er ist mit einem Google-Ads-Konto nutzbar. Ohne laufende Kampagne zeigt er Suchvolumen oft nur in Bereichen an."],
    ],
    sources: [GADS, GTRENDS, GSC],
  },
  {
    path: "tools-apps/keyword-tools/keyword-tools-fuer-youtube",
    description: "Keyword-Tools für YouTube: Suchvorschläge, Google Trends, YouTube Studio und Browser-Erweiterungen – so findest du Videothemen, nach denen gesucht wird.",
    markdown: `Auch auf YouTube wird gesucht – und wer die Suchbegriffe kennt, kann Videos gezielt planen. Diese Werkzeuge helfen.

## YouTube-Suchvorschläge

Tippe dein Thema in die YouTube-Suche und sieh dir die Vorschläge an. Mit Buchstaben dahinter („Hundetraining a…“, „b…“) findest du weitere Varianten.

## Google Trends

Bei **Google Trends** kannst du auf **„YouTube-Suche“** filtern. So siehst du, ob ein Thema wächst, saisonal ist oder abflaut.

## YouTube Studio: Forschung

Im Bereich **Recherche** bzw. **Forschung** von YouTube Studio zeigt YouTube, wonach deine Zuschauer suchen – teilweise sogar Themen, zu denen es noch wenige Videos gibt („Content-Lücken“).

## Browser-Erweiterungen

Erweiterungen zeigen Suchvolumen-Schätzungen und Konkurrenz direkt auf YouTube an. Die Zahlen sind **Schätzungen** – nutze sie als Orientierung, nicht als Wahrheit. Prüfe Berechtigungen und Datenschutz.

## Kommentare

Die besten Keywords stehen oft in Kommentaren: Welche Fragen stellen deine Zuschauer?

## So nutzt du Keywords

- Hauptbegriff im **Titel**, möglichst weit vorne
- In der **Beschreibung** natürlich erklären, worum es geht
- Im Video **aussprechen** – automatische Untertitel helfen YouTube beim Verstehen

Mehr zur Methode unter „Keyword-Recherche Anleitung“.`,
    faq: [
      ["Wie finde ich YouTube-Keywords kostenlos?", "Mit YouTube-Suchvorschlägen, Google Trends (Filter YouTube-Suche) und dem Recherche-Bereich in YouTube Studio."],
      ["Sind Suchvolumen-Angaben von Erweiterungen genau?", "Es sind Schätzungen. Nutze sie zum Vergleichen, nicht als exakte Zahlen."],
    ],
    sources: [GTRENDS],
  },
  {
    path: "tools-apps/rechner/spritkosten-rechner",
    description: "Spritkosten-Rechner: Berechne die Kosten deiner Fahrt aus Strecke, Verbrauch und Preis – mit Aufteilung pro Person und Hin- und Rückfahrt.",
    focusKeyword: "Spritkosten-Rechner",
    markdown: `Mit unserem **Spritkosten-Rechner** weißt du in Sekunden, was eine Fahrt kostet – für Urlaub, Pendeln oder Fahrgemeinschaften. Der Rechner funktioniert auch für Elektroautos: einfach kWh statt Liter eintragen.

## So funktioniert der Rechner

Die Formel ist einfach:

**Kosten = Strecke ÷ 100 × Verbrauch × Preis**

Beispiel: 300 km bei 6 Litern pro 100 km und 1,60 € pro Liter ergeben 300 ÷ 100 × 6 × 1,60 = **28,80 €**.

## Tipps für genaue Ergebnisse

- **Echter Verbrauch:** Nimm deinen tatsächlichen Durchschnittsverbrauch aus dem Bordcomputer oder vom letzten Tanken – Herstellerangaben sind oft niedriger.
- **Aktueller Preis:** Spritpreise schwanken täglich. In Deutschland zeigen Apps auf Basis der Markttransparenzstelle die aktuellen Preise, in Österreich der Spritpreisrechner der E-Control.
- **Autobahn vs. Stadt:** Hohe Geschwindigkeit erhöht den Verbrauch deutlich.

## Fahrgemeinschaft

Trage die Zahl der Mitfahrenden ein – der Rechner teilt die Kosten auf. Beachte, dass zu den reinen Spritkosten auch Verschleiß, Versicherung und Wertverlust gehören. Die gesamten Kosten pro Kilometer berechnest du unter „Kosten pro Kilometer“.

## Sprit sparen

Wie du den Verbrauch senkst, liest du unter „Sprit sparen“ und „Günstig tanken“.`,
    faq: [
      ["Wie berechne ich die Spritkosten einer Fahrt?", "Strecke durch 100 teilen, mit dem Verbrauch pro 100 km und dem Preis pro Liter multiplizieren."],
      ["Funktioniert der Rechner für Elektroautos?", "Ja. Trage den Verbrauch in kWh pro 100 km und den Strompreis pro kWh ein."],
    ],
    sources: [{ title: "E-Control – Spritpreisrechner", url: "https://www.e-control.at/" }, { title: "Bundeskartellamt – Markttransparenzstelle für Kraftstoffe", url: "https://www.bundeskartellamt.de/" }],
  },
  {
    path: "tools-apps/rechner/stromkosten-rechner",
    description: "Stromkosten-Rechner: Berechne, was ein Gerät pro Jahr und Monat kostet – aus Watt, Nutzungsdauer und Strompreis. Mit Beispielen und Spartipps.",
    focusKeyword: "Stromkosten-Rechner",
    markdown: `Was kostet der alte Kühlschrank, die Spielkonsole oder der Heizlüfter wirklich? Unser **Stromkosten-Rechner** zeigt es dir.

## Die Formel

**Verbrauch (kWh) = Leistung (Watt) ÷ 1000 × Stunden**
**Kosten = Verbrauch × Strompreis pro kWh**

Beispiel: Ein Gerät mit 100 Watt, das täglich 4 Stunden läuft, verbraucht im Jahr 100 ÷ 1000 × 4 × 365 = **146 kWh**. Bei 0,30 € pro kWh sind das etwa **43,80 € pro Jahr**.

## Wo finde ich die Werte?

- **Watt:** auf dem Typenschild, in der Anleitung oder im Datenblatt. Viele Geräte verbrauchen im Betrieb weniger als die Maximalleistung – am genauesten misst ein **Strommessgerät**.
- **Strompreis:** auf deiner Stromrechnung (Arbeitspreis pro kWh).

## Geräte mit Dauerbetrieb

Kühlschrank und Gefriertruhe laufen nicht ständig mit voller Leistung. Hier ist der Jahresverbrauch auf dem **EU-Energielabel** aussagekräftiger. Trage dafür z. B. die Leistung so ein, dass der Jahresverbrauch zum Label passt, oder nutze ein Messgerät.

## Standby nicht vergessen

Auch Standby kostet. Miss mit einem Strommessgerät, was Geräte im ausgeschalteten Zustand verbrauchen.

Spartipps findest du unter „Strom sparen“.`,
    faq: [
      ["Wie berechne ich die Stromkosten eines Geräts?", "Leistung in Watt durch 1000 teilen, mit den Betriebsstunden multiplizieren und das Ergebnis mit dem Strompreis pro kWh multiplizieren."],
      ["Wie genau ist die Berechnung mit der Wattangabe?", "Sie zeigt meist den Höchstwert. Ein Strommessgerät liefert den tatsächlichen Verbrauch."],
    ],
    sources: [{ title: "Verbraucherzentrale – Energie", url: "https://www.verbraucherzentrale.de/wissen/energie" }],
  },
  {
    path: "tools-apps/rechner/budget-rechner",
    description: "Budget-Rechner: Trage Einkommen und Ausgaben ein und sieh sofort, was übrig bleibt – mit Sparquote und Vergleich zur 50-30-20-Regel.",
    focusKeyword: "Budget-Rechner",
    markdown: `Wohin geht eigentlich mein Geld? Mit unserem **Budget-Rechner** behältst du den Überblick über Einnahmen und Ausgaben – direkt im Browser, ohne Anmeldung, ohne dass Daten gespeichert werden.

## So nutzt du den Rechner

1. **Netto-Einkommen** pro Monat eintragen.
2. **Fixkosten** eintragen: Miete, Strom, Versicherungen, Abos, Kredite.
3. **Variable Ausgaben** schätzen: Lebensmittel, Freizeit, Mobilität.
4. Weitere Posten über „Ausgabe hinzufügen“ ergänzen.

Der Rechner zeigt, was übrig bleibt, und deine **Sparquote**.

## Die 50-30-20-Regel

Eine einfache Orientierung für die Aufteilung des Nettoeinkommens:
- **50 %** für Notwendiges (Wohnen, Lebensmittel, Versicherungen)
- **30 %** für Wünsche (Freizeit, Hobbys, Restaurant)
- **20 %** zum Sparen und Schuldenabbau

Je nach Wohnort und Einkommen ist das nicht immer machbar – dann ist die Regel ein Ziel, kein Muss.

## Tipps

- **Kontoauszüge** der letzten drei Monate durchgehen – oft gibt es Überraschungen.
- **Jährliche Kosten** (Versicherungen, Kfz-Steuer) durch 12 teilen und monatlich einplanen.
- **Puffer** für Unvorhergesehenes einrechnen.

Mehr zur Planung unter „Haushaltsbudget erstellen“ und „Budget-Methoden“.`,
    faq: [
      ["Werden meine Eingaben gespeichert?", "Nein. Der Rechner läuft nur in deinem Browser, nichts wird übertragen oder gespeichert."],
      ["Was ist eine gute Sparquote?", "Das hängt von der Situation ab. Die 50-30-20-Regel nennt 20 Prozent als Ziel – schon kleinere regelmäßige Beträge helfen."],
    ],
    sources: [VZ_GELD],
  },
  {
    path: "tools-apps/rechner/prozentrechner",
    description: "Prozentrechner: Prozentwert, Prozentsatz und prozentuale Veränderung schnell berechnen – mit Formeln, Beispielen und Rabatt-Tipps.",
    focusKeyword: "Prozentrechner",
    markdown: `Rabatt, Mehrwertsteuer, Gehaltserhöhung oder Zinsen – Prozentrechnung begegnet uns ständig. Unser **Prozentrechner** löst die drei häufigsten Aufgaben.

## 1. Wie viel sind X % von Y?

**Prozentwert = Grundwert × Prozentsatz ÷ 100**

Beispiel: 15 % von 80 € = 80 × 15 ÷ 100 = **12 €**.

## 2. X ist wie viel Prozent von Y?

**Prozentsatz = Prozentwert ÷ Grundwert × 100**

Beispiel: 12 von 48 = 12 ÷ 48 × 100 = **25 %**.

## 3. Um wie viel Prozent hat sich etwas verändert?

**Veränderung = (Neuer Wert − Alter Wert) ÷ Alter Wert × 100**

Beispiel: Von 50 € auf 65 € = (65 − 50) ÷ 50 × 100 = **+30 %**.

## Rabatte richtig verstehen

- **20 % Rabatt** auf 50 € → du zahlst 40 €.
- **Zwei Rabatte nacheinander** (z. B. 20 % und dann 10 %) ergeben nicht 30 %, sondern 28 % Gesamtrabatt.
- Steigt ein Preis um 50 % und fällt dann um 50 %, ist er **niedriger** als vorher.

## Prozentpunkte vs. Prozent

Steigt ein Zinssatz von 2 % auf 3 %, ist das ein Anstieg um **1 Prozentpunkt** – aber um **50 Prozent**.

## Mehrwertsteuer

Den Nettopreis aus einem Bruttopreis berechnest du nicht mit „minus 20 %“, sondern mit Brutto ÷ 1,20 (bei 20 % USt.) bzw. ÷ 1,19 (bei 19 % MwSt.).`,
    faq: [
      ["Wie rechne ich Prozent aus?", "Prozentwert = Grundwert × Prozentsatz ÷ 100. Für 15 % von 80 also 80 × 15 ÷ 100 = 12."],
      ["Was ist der Unterschied zwischen Prozent und Prozentpunkten?", "Prozentpunkte beschreiben den absoluten Abstand zwischen zwei Prozentwerten, Prozent die relative Veränderung."],
    ],
  },
  {
    path: "tools-apps/business-tools/rechnungs-tools",
    description: "Rechnungs-Tools für Selbstständige: Pflichtangaben auf Rechnungen, E-Rechnung, Buchhaltungssoftware und worauf du bei Datenschutz und GoBD achtest.",
    markdown: `Wer selbstständig ist, schreibt Rechnungen – und die müssen korrekt sein. **Rechnungs-Tools** und Buchhaltungssoftware erleichtern das erheblich.

## Pflichtangaben auf Rechnungen (Auswahl)

- Name und Anschrift von dir und dem Kunden
- Steuernummer oder Umsatzsteuer-Identifikationsnummer
- Rechnungsdatum und **fortlaufende Rechnungsnummer**
- Menge und Art der Leistung, Leistungszeitraum
- Nettobetrag, Steuersatz und Steuerbetrag – oder ein Hinweis auf Steuerbefreiung (z. B. Kleinunternehmerregelung)

Die genauen Regeln unterscheiden sich zwischen Deutschland und Österreich.

## E-Rechnung

In Deutschland gilt für Rechnungen **zwischen Unternehmen (B2B)** schrittweise die Pflicht zur **elektronischen Rechnung** in strukturierten Formaten (z. B. XRechnung oder ZUGFeRD). Seit 2025 müssen Unternehmen E-Rechnungen empfangen können; die Pflicht zum Versand folgt mit Übergangsfristen. Gute Rechnungs-Tools unterstützen diese Formate.

## Was gute Rechnungs-Tools können

- Vorlagen mit allen Pflichtangaben
- Automatische Rechnungsnummern
- E-Rechnungs-Formate
- Angebote, Mahnungen, wiederkehrende Rechnungen
- Belegerfassung und Export für die Steuerberatung

## Worauf du achten solltest

- **Rechtskonforme Archivierung** (in Deutschland nach GoBD)
- **Serverstandort und Datenschutz**
- **Kosten** im Verhältnis zum Umfang
- **Schnittstellen** zu Bank und Steuerberatung

Lass dich bei Fragen von einer Steuerberatung beraten.`,
    faq: [
      ["Muss ich E-Rechnungen schreiben?", "In Deutschland gilt für Rechnungen zwischen Unternehmen schrittweise eine E-Rechnungspflicht mit Übergangsfristen. Prüfe die für dich geltenden Termine."],
      ["Reicht eine Word-Vorlage für Rechnungen?", "Für sehr wenige Rechnungen kann das genügen, solange alle Pflichtangaben stimmen. Für B2B-Rechnungen in Deutschland werden zunehmend strukturierte E-Rechnungen nötig."],
    ],
    sources: [{ title: "Bundesministerium der Finanzen – E-Rechnung", url: "https://www.bundesfinanzministerium.de/" }, BMF_AT],
  },
  {
    path: "tools-apps/business-tools/projektmanagement-tools",
    description: "Projektmanagement-Tools im Überblick: Kanban-Boards, Aufgabenlisten, Gantt-Diagramme und Wissensdatenbanken – welches Tool zu welchem Team passt.",
    markdown: `Ob Familienplanung, Freelance-Projekt oder Team mit 20 Personen: **Projektmanagement-Tools** sorgen dafür, dass Aufgaben nicht verloren gehen.

## Die wichtigsten Arten

- **Kanban-Boards:** Karten wandern von „To-do“ über „In Arbeit“ zu „Erledigt“. Sehr übersichtlich. Beispiel: **Trello**.
- **Aufgabenlisten mit Zuständigkeiten und Fristen:** z. B. **Asana**, **Microsoft Planner**.
- **Gantt-Diagramme:** Zeitpläne mit Abhängigkeiten für größere Projekte.
- **All-in-one-Arbeitsbereiche:** Aufgaben, Notizen und Wikis kombiniert, z. B. **Notion**.
- **Software-Entwicklung:** z. B. **Jira** oder GitHub Projects.
- **Open Source / selbst gehostet:** z. B. **OpenProject**.

## Worauf achten?

1. **Einfachheit:** Das beste Tool ist das, das alle nutzen.
2. **Ansichten:** Board, Liste, Kalender, Zeitleiste.
3. **Zusammenarbeit:** Kommentare, Dateien, Benachrichtigungen.
4. **Integrationen** mit Kalender, Chat und Speicher.
5. **Datenschutz:** Serverstandort, Auftragsverarbeitungsvertrag (wichtig bei personenbezogenen Daten).
6. **Kosten** pro Person und Monat.

## Tipps für den Start

- Mit wenigen Spalten oder Status beginnen.
- Klare Regeln: Wer legt Aufgaben an? Wann wird etwas „erledigt“?
- Wöchentlich kurz gemeinsam auf das Board schauen.

Viele Tools bieten kostenlose Einstiegsversionen – teste zwei oder drei, bevor du dich festlegst.`,
    faq: [
      ["Welches Projektmanagement-Tool ist für Einsteiger am einfachsten?", "Kanban-Boards sind besonders leicht verständlich und eignen sich gut für kleine Teams und private Projekte."],
      ["Gibt es Tools mit Servern in der EU?", "Ja, einige Anbieter bieten EU-Hosting oder lassen sich selbst hosten. Prüfe das in den Datenschutzinformationen."],
    ],
  },
  {
    path: "tools-apps/business-tools/newsletter-tools",
    description: "Newsletter-Tools: worauf es bei Editor, Automatisierung, Zustellbarkeit und DSGVO ankommt – inklusive Double-Opt-in und Impressumspflicht.",
    markdown: `Ein Newsletter ist ein direkter Draht zu deinem Publikum – unabhängig von Algorithmen. **Newsletter-Tools** helfen beim Gestalten, Versenden und Auswerten.

## Was ein gutes Newsletter-Tool kann

- **Editor** mit Vorlagen (Drag-and-drop)
- **Anmeldeformulare** für die Website
- **Double-Opt-in**
- **Automatisierungen**, z. B. Willkommensserie
- **Segmentierung** nach Interessen
- **Auswertung**: Öffnungen, Klicks, Abmeldungen
- **Gute Zustellbarkeit**, damit Mails nicht im Spam landen

## Rechtliches (DSGVO & Co.)

- **Einwilligung:** Newsletter nur an Personen, die aktiv zugestimmt haben.
- **Double-Opt-in:** Nach der Anmeldung bestätigt die Person per Link ihre E-Mail-Adresse – das dient als Nachweis.
- **Abmeldelink** in jeder Mail.
- **Impressum** im Newsletter.
- **Auftragsverarbeitungsvertrag** mit dem Anbieter, Serverstandort prüfen.
- **Werbliche Inhalte und Affiliate-Links** kennzeichnen.

## Bekannte Anbieter

Es gibt internationale Anbieter wie Mailchimp und Brevo sowie Anbieter mit Sitz in Deutschland wie CleverReach oder Rapidmail. Vergleiche Funktionen, Preise (oft nach Kontaktanzahl) und Datenschutz.

## Tipps für gute Newsletter

- Fester Rhythmus (z. B. alle zwei Wochen)
- Klarer Betreff
- Ein Hauptthema pro Ausgabe
- Mehrwert statt nur Werbung`,
    faq: [
      ["Ist Double-Opt-in Pflicht?", "Es ist in Deutschland und Österreich der übliche Weg, die Einwilligung nachzuweisen, und wird dringend empfohlen."],
      ["Brauche ich ein Impressum im Newsletter?", "Ja, geschäftsmäßige Newsletter brauchen in der Regel ein Impressum."],
    ],
    sources: [DSGVO, { title: "Verbraucherzentrale – Werbung per E-Mail", url: "https://www.verbraucherzentrale.de/" }],
  },
  {
    path: "tools-apps/social-media-tools/social-media-planer",
    description: "Social-Media-Planer: Beiträge vorplanen, automatisch veröffentlichen und auswerten – Funktionen, Auswahlkriterien und Tipps für deinen Redaktionsplan.",
    markdown: `Jeden Tag spontan posten ist stressig. Mit einem **Social-Media-Planer** bereitest du Beiträge vor und veröffentlichst sie automatisch.

## Was Planer können

- **Kalenderansicht** aller geplanten Posts
- **Automatisches Veröffentlichen** auf mehreren Plattformen
- **Vorschau**, wie der Post aussieht
- **Statistiken** zu Reichweite und Interaktion
- **Team-Funktionen** mit Freigaben
- **Mediathek** für Bilder und Videos

## Kostenlose Möglichkeiten

- **Plattform-eigene Planung:** Meta Business Suite für Facebook und Instagram, Planungsfunktionen in YouTube Studio und auf anderen Plattformen.
- **Kostenlose Einstiegstarife** bekannter Planer (oft begrenzt auf wenige Profile und Posts).

## Auswahlkriterien

1. Welche **Plattformen** werden unterstützt (Instagram, TikTok, LinkedIn, YouTube …)?
2. Werden **Reels/Shorts** und Karussells unterstützt?
3. Wie viele **Profile und Nutzer**?
4. **Preis** und Laufzeit
5. **Datenschutz** und Serverstandort

## Workflow

1. Redaktionsplan erstellen (siehe „Content-Plan erstellen“).
2. Inhalte gesammelt produzieren (Batching).
3. Im Planer terminieren.
4. Nach Veröffentlichung auf Kommentare reagieren – das kann kein Tool für dich.
5. Monatlich auswerten.`,
    faq: [
      ["Gibt es kostenlose Social-Media-Planer?", "Ja. Viele Plattformen haben eigene Planungsfunktionen, und mehrere Anbieter haben kostenlose Einstiegstarife."],
      ["Schadet automatisches Posten der Reichweite?", "Nach Angaben vieler Plattformen nicht grundsätzlich. Entscheidend sind Inhalt und Interaktion."],
    ],
  },
  {
    path: "tools-apps/social-media-tools/link-in-bio-tools",
    description: "Link-in-Bio-Tools: Wie du mit einer Linkseite mehrere Links in deinem Social-Media-Profil teilst – Funktionen, Alternativen und Datenschutz.",
    markdown: `Instagram, TikTok und Co. erlauben oft nur wenige Links im Profil. **Link-in-Bio-Tools** schaffen eine kleine Landingpage, auf der alle wichtigen Links gesammelt sind.

## Was eine Link-in-Bio-Seite kann

- Mehrere Buttons: Website, YouTube, Shop, Newsletter, Spendenlink
- Profilbild, kurze Beschreibung
- Einbettung von Videos oder Musik
- Statistiken über Klicks
- Teilweise Shop- oder Spendenfunktionen

## Bekannte Anbieter

Es gibt spezialisierte Dienste wie **Linktree** oder **Beacons**, die meist kostenlose Basisversionen haben.

## Alternative: eigene Seite

Eine eigene Unterseite auf deiner Website (z. B. „/links“) hat Vorteile:
- volle Kontrolle über Design und Daten
- stärkt deine eigene Domain
- keine Abhängigkeit von einem Anbieter

## Datenschutz

Viele Link-Tools setzen Tracking ein. Wenn du die Seite für dein Business nutzt, prüfe die Datenschutzhinweise und ob du die Seite in deiner Datenschutzerklärung erwähnen musst.

## Tipps

- **Wenige, klare Links** – Wichtigstes nach oben.
- **Aktuell halten:** neues Video, aktuelle Aktion.
- **Kennzeichnung** von Affiliate- und Werbelinks nicht vergessen.`,
    faq: [
      ["Brauche ich ein Link-in-Bio-Tool?", "Nicht zwingend. Eine eigene Linkseite auf deiner Website erfüllt denselben Zweck und gibt dir mehr Kontrolle."],
      ["Muss ich Affiliate-Links auf der Linkseite kennzeichnen?", "Ja, auch dort sind Werbe- und Affiliate-Links klar zu kennzeichnen."],
    ],
  },
  {
    path: "tools-apps/social-media-tools/analyse-tools",
    description: "Social-Media-Analyse-Tools: Welche Kennzahlen zählen, Plattform-Statistiken, Web-Analyse und datenschutzfreundliche Alternativen im Überblick.",
    markdown: `Ohne Zahlen bleibt Social Media ein Ratespiel. **Analyse-Tools** zeigen, welche Inhalte funktionieren – und welche nicht.

## Die wichtigsten Kennzahlen

- **Reichweite / Impressionen:** Wie viele haben den Inhalt gesehen?
- **Interaktionsrate:** Likes, Kommentare, Shares und Saves im Verhältnis zur Reichweite.
- **Wiedergabedauer** bei Videos.
- **Follower-Wachstum.**
- **Klicks** auf Links und Website-Besuche.
- **Conversions:** Anmeldungen, Verkäufe, Spenden.

## Plattform-eigene Statistiken (kostenlos)

- **Instagram/Facebook:** Insights in der App bzw. der Meta Business Suite
- **YouTube:** YouTube Studio Analytics
- **TikTok:** Analysen im Creator- bzw. Business-Konto
- **LinkedIn:** Statistiken für Profile und Seiten

## Website-Analyse

Wie viele Besucher von Social Media auf deine Website kommen, zeigen Web-Analyse-Tools. **Datenschutzfreundliche** Varianten wie Matomo (selbst gehostet) oder cookielose Dienste sind eine Alternative zu großen Anbietern. Achte auf Einwilligungspflichten.

## Richtig auswerten

1. Monatlich die Top-5- und Flop-5-Beiträge ansehen.
2. Muster suchen: Thema, Format, Uhrzeit, Hook.
3. Einen Punkt ändern und testen.
4. Nicht nur auf Follower schauen – Interaktion und Klicks zählen mehr.`,
    faq: [
      ["Welche Kennzahl ist am wichtigsten?", "Das hängt vom Ziel ab. Für Community ist die Interaktionsrate wichtig, für Verkäufe die Klicks und Conversions."],
      ["Brauche ich für Web-Analyse eine Einwilligung?", "Für viele Tracking-Tools mit Cookies ja. Prüfe die Anforderungen für dein Tool."],
    ],
  },
  {
    path: "tools-apps/automatisierung/automatisierung-fuer-einsteiger",
    description: "Automatisierung für Einsteiger: Was No-Code-Tools können, einfache Beispiele, Auslöser und Aktionen – so automatisierst du lästige Routineaufgaben.",
    markdown: `Viele kleine Aufgaben wiederholen sich ständig: Anhänge speichern, Daten übertragen, Erinnerungen senden. Mit **No-Code-Automatisierung** erledigt das der Computer.

## Das Grundprinzip

**Wenn [Auslöser], dann [Aktion].**

- **Auslöser:** z. B. neue E-Mail mit Anhang, neues Formular, neuer Kalendertermin
- **Aktion:** z. B. Datei in Cloud-Ordner speichern, Zeile in Tabelle anlegen, Nachricht senden

## Einfache Beispiele

1. E-Mail-Anhänge automatisch in einem Ordner speichern.
2. Neue Formular-Anmeldungen in eine Tabelle schreiben.
3. Bei neuem Blogartikel automatisch einen Social-Media-Entwurf erstellen.
4. Tägliche Erinnerung mit den Aufgaben des Tages.
5. Rechnungen aus dem Postfach in die Buchhaltung übertragen.

## Werkzeuge

- **Integrierte Funktionen** in Apps (Regeln im E-Mail-Programm, Kurzbefehle am Smartphone)
- **No-Code-Plattformen** wie Zapier, Make oder IFTTT
- **Microsoft Power Automate** im Microsoft-Umfeld
- **n8n** – auch selbst hostbar

Einen Vergleich findest du unter „Workflow-Tools im Vergleich“.

## Tipps für den Start

- Mit **einer** einfachen Automatisierung beginnen.
- **Testen** mit Beispieldaten.
- **Fehlermeldungen** aktivieren.
- **Dokumentieren**, was automatisiert ist.
- **Datenschutz:** Welche Daten fließen wohin?

Wie KI in solche Abläufe passt, erfährst du unter „KI-Automatisierung“.`,
    faq: [
      ["Brauche ich Programmierkenntnisse?", "Nein, No-Code-Tools funktionieren mit Klick-Oberflächen. Grundverständnis für Datenfelder hilft aber."],
      ["Was kostet Automatisierung?", "Viele Tools haben kostenlose Einstiegstarife mit begrenzter Zahl an Ausführungen. Größere Volumen kosten monatlich."],
    ],
  },
  {
    path: "tools-apps/automatisierung/workflow-tools-im-vergleich",
    description: "Workflow-Tools im Vergleich: Zapier, Make, n8n, IFTTT und Power Automate – Stärken, Einsatzbereiche, Selbst-Hosting und Datenschutz im Überblick.",
    markdown: `Automatisierungsplattformen verbinden Apps miteinander. Sie unterscheiden sich in Bedienung, Flexibilität, Preismodell und Datenschutz. Hier ein Überblick über bekannte **Workflow-Tools**.

## Zapier

Sehr viele App-Anbindungen und einfache Bedienung. Ideal für Einsteiger und schnelle Lösungen. Abrechnung meist nach Anzahl der Aufgaben.

## Make

Visueller Editor mit Szenarien als Flussdiagramm. Flexibel für komplexere Abläufe mit Verzweigungen.

## n8n

Quelloffen (mit eigener Lizenz) und **selbst hostbar** – Daten können auf eigenen Servern bleiben. Für technisch Interessierte und datenschutzsensible Anwendungen spannend. Auch als Cloud-Version verfügbar.

## IFTTT

Einfache „Wenn-dann“-Regeln, besonders für Smart Home und private Anwendungen.

## Microsoft Power Automate

Stark im Microsoft-365-Umfeld (Outlook, Teams, SharePoint, Excel).

## Worauf achten?

- **Benötigte Apps** werden unterstützt?
- **Preismodell:** nach Aufgaben, Ausführungen oder Nutzern
- **Komplexität:** einfache Regeln oder verzweigte Abläufe?
- **Datenschutz:** Serverstandort, Auftragsverarbeitung, Selbst-Hosting
- **Fehlerbehandlung und Protokolle**

Funktionsumfang und Preise ändern sich häufig – prüfe die aktuellen Angaben der Anbieter.`,
    faq: [
      ["Welches Workflow-Tool ist für Einsteiger am besten?", "Tools mit einfacher Oberfläche und vielen Vorlagen wie Zapier oder IFTTT sind besonders einsteigerfreundlich."],
      ["Welches Tool kann ich selbst hosten?", "n8n lässt sich auf eigenen Servern betreiben."],
    ],
    comparison: {
      title: "Workflow-Tools im Überblick",
      columns: ["Zapier", "Make", "n8n", "IFTTT", "Power Automate"],
      rows: [
        { label: "Einstieg", values: ["sehr einfach", "mittel", "mittel bis technisch", "sehr einfach", "mittel"] },
        { label: "Komplexe Abläufe", values: ["gut", "sehr gut", "sehr gut", "begrenzt", "gut"] },
        { label: "Selbst hostbar", values: ["nein", "nein", "ja", "nein", "nein"] },
        { label: "Stärke", values: ["viele Apps", "visuelle Szenarien", "Kontrolle über Daten", "Smart Home", "Microsoft 365"] },
      ],
      note: "Überblick ohne Preisangaben – Tarife und Funktionen ändern sich regelmäßig.",
    },
  },
  {
    path: "tools-apps/alternativen/kostenlose-office-alternativen",
    description: "Kostenlose Office-Alternativen: LibreOffice, OnlyOffice und Online-Office im Überblick – Kompatibilität mit Word und Excel, Vor- und Nachteile.",
    markdown: `Für Texte, Tabellen und Präsentationen muss man nicht zwingend eine kostenpflichtige Office-Lizenz kaufen. Diese **kostenlosen Office-Alternativen** sind ausgereift.

## LibreOffice

Das bekannteste kostenlose Office-Paket, **quelloffen** und auf Windows, macOS und Linux verfügbar.
- **Writer** (Text), **Calc** (Tabellen), **Impress** (Präsentationen) und mehr
- Öffnet und speichert auch Microsoft-Formate (.docx, .xlsx, .pptx)
- Ideal für alle, die lokal arbeiten wollen

## OnlyOffice

Bietet eine Oberfläche, die an Microsoft Office erinnert, und hohe Kompatibilität mit Microsoft-Formaten. Es gibt Desktop-Apps sowie Server-Versionen für die Zusammenarbeit.

## Online-Office im Browser

- **Google Docs, Tabellen und Präsentationen** – kostenlos mit Google-Konto, stark bei Zusammenarbeit
- **Microsoft 365 im Web** – kostenlose Web-Versionen mit Microsoft-Konto

Bei Online-Diensten liegen die Dateien beim Anbieter – das ist praktisch, aber beim Datenschutz zu bedenken.

## Kompatibilität

Einfache Dokumente funktionieren meist problemlos. Bei komplexen Formatierungen, Makros oder speziellen Schriften kann es Abweichungen geben. Tipp: Für den Austausch PDFs nutzen.

## Welche passt zu mir?

- **Lokal und datensparsam:** LibreOffice
- **Gewohntes Microsoft-Gefühl:** OnlyOffice
- **Gemeinsam bearbeiten:** Online-Office`,
    faq: [
      ["Kann LibreOffice Word-Dateien öffnen?", "Ja, LibreOffice öffnet und speichert .docx, .xlsx und .pptx. Bei komplexen Formatierungen kann es kleine Abweichungen geben."],
      ["Ist LibreOffice wirklich kostenlos?", "Ja, LibreOffice ist freie Software und kostenlos – auch für Unternehmen."],
    ],
    sources: [{ title: "LibreOffice – The Document Foundation", url: "https://de.libreoffice.org/" }],
  },
  {
    path: "tools-apps/alternativen/kostenlose-bildbearbeitung",
    description: "Kostenlose Bildbearbeitung: GIMP, Krita, Photopea, Paint.NET und Smartphone-Apps im Überblick – welches Programm für Fotos, Grafiken und Malen passt.",
    markdown: `Für die Bildbearbeitung gibt es hervorragende **kostenlose Programme**. Welches passt, hängt davon ab, was du vorhast.

## GIMP

Das bekannteste kostenlose Bildbearbeitungsprogramm – **quelloffen**, mächtig, für Windows, macOS und Linux. Ebenen, Masken, Filter, Retusche. Die Einarbeitung braucht etwas Zeit.

## Photopea

Läuft **im Browser**, ohne Installation. Die Oberfläche erinnert an klassische Profi-Software und öffnet sogar PSD-Dateien. Die kostenlose Version ist werbefinanziert.

## Krita

Spezialisiert auf **digitales Malen und Illustration**, ideal mit Grafiktablett. Ebenfalls kostenlos und quelloffen.

## Paint.NET (Windows)

Einfacher als GIMP, aber deutlich stärker als das normale Paint. Gut für schnelle Bearbeitungen.

## Für Fotos

- **darktable** und **RawTherapee** – kostenlose Programme zur Bearbeitung von RAW-Fotos
- Die **Fotos-Apps** von Smartphones und Betriebssystemen können schon viel: zuschneiden, Licht, Farben, Retusche.

## Welches Programm für was?

| Aufgabe | Empfehlung |
|---|---|
| Schnell zuschneiden, aufhellen | Fotos-App |
| Ebenen, Montagen, Thumbnails | GIMP oder Photopea |
| Malen und Zeichnen | Krita |
| RAW-Fotos entwickeln | darktable oder RawTherapee |

Für Grafiken mit Vorlagen siehe „Design-Tools für Einsteiger“.`,
    faq: [
      ["Was ist die beste kostenlose Photoshop-Alternative?", "Für viele sind GIMP (installiert) oder Photopea (im Browser) die naheliegendsten Alternativen."],
      ["Kann ich kostenlose Programme auch beruflich nutzen?", "Bei Open-Source-Programmen wie GIMP, Krita oder LibreOffice in der Regel ja. Prüfe bei anderen Programmen die Lizenzbedingungen."],
    ],
  },
  {
    path: "tools-apps/alternativen/kostenlose-videobearbeitung",
    description: "Kostenlose Videobearbeitung: DaVinci Resolve, Shotcut, Kdenlive, OpenShot und Handy-Apps im Überblick – Funktionen, Anspruch und Systemanforderungen.",
    markdown: `Für gute Videos braucht es keine teure Software. Diese **kostenlosen Schnittprogramme** reichen für YouTube, Social Media und Familienvideos.

## DaVinci Resolve (kostenlose Version)

Professionelles Programm mit Schnitt, Farbkorrektur, Effekten und Audiobearbeitung. Die kostenlose Version ist sehr umfangreich. Nachteil: anspruchsvoll für Einsteiger und für ältere Computer.

## Shotcut

Quelloffen, für Windows, macOS und Linux. Solider Funktionsumfang, unterstützt viele Formate. Gut für Einsteiger mit etwas Geduld.

## Kdenlive

Quelloffen, ursprünglich für Linux, inzwischen auch für Windows und macOS. Mehrspur-Schnitt, Effekte, Titel.

## OpenShot

Besonders einfach, gut für erste Schritte.

## Am Smartphone

Viele Handys haben einfache Schnittfunktionen integriert. Mobile Schnitt-Apps bieten zusätzlich Text, Musik und Hochformat-Vorlagen – achte auf Wasserzeichen und Datenschutz.

## Welches Programm für wen?

- **Einsteiger:** OpenShot oder Handy-App
- **Ambitionierte YouTuber:** Shotcut, Kdenlive oder DaVinci Resolve
- **Farbkorrektur und Profi-Look:** DaVinci Resolve

## Tipps

- **Schnelle Festplatte** und ausreichend Arbeitsspeicher helfen.
- **Proxy-Dateien** (kleinere Vorschaudateien) erleichtern den Schnitt hochauflösender Videos auf schwächeren Rechnern.
- **Musik** nur mit passender Lizenz verwenden – siehe „Lizenzfreie Musik“.`,
    faq: [
      ["Welches kostenlose Schnittprogramm ist am einfachsten?", "OpenShot und die integrierten Handy-Funktionen sind besonders einfach. Shotcut ist ein guter nächster Schritt."],
      ["Braucht DaVinci Resolve einen starken Computer?", "Ja, besonders die Grafikkarte wird beansprucht. Prüfe die Systemanforderungen des Herstellers."],
    ],
  },

  /* ================= Musik & Entertainment ================= */
  {
    path: "musik-entertainment/edm/edm-fuer-einsteiger",
    description: "EDM für Einsteiger: Was Electronic Dance Music ist, die wichtigsten Genres von House bis Drum and Bass, BPM erklärt und wie du deinen Sound findest.",
    markdown: `**EDM** steht für **Electronic Dance Music** – elektronische Tanzmusik. Der Begriff fasst viele Stile zusammen, die vor allem in Clubs und auf Festivals zu Hause sind.

## Die wichtigsten Genres

- **House:** gleichmäßiger Four-on-the-floor-Beat (Bassdrum auf jedem Viertel), meist um 120–128 BPM. Viele Untergenres wie Deep House oder Tech House.
- **Techno:** reduzierter, treibender, oft düsterer Sound, häufig zwischen etwa 125 und 140 BPM.
- **Trance:** melodisch, mit langen Spannungsbögen und Breakdowns.
- **Dubstep:** halbes Tempo-Gefühl, wuchtige Bässe und „Wobbles“.
- **Drum and Bass:** schnelle Breakbeats um etwa 170–175 BPM und tiefe Basslinien.
- **Big Room / Electro House:** Festival-Sound mit großen „Drops“.

## Was bedeutet BPM?

**Beats per Minute** – Schläge pro Minute, also das Tempo. DJs mischen Tracks mit ähnlichem BPM ineinander.

## Typischer Aufbau eines EDM-Tracks

1. **Intro** – zum Einmischen für DJs
2. **Build-up** – Spannung steigt
3. **Drop** – der Höhepunkt mit vollem Beat und Bass
4. **Breakdown** – ruhigerer Teil
5. **Zweiter Build-up und Drop**
6. **Outro**

## So findest du deinen Sound

- Playlists der verschiedenen Genres durchhören
- DJ-Sets von Festivals und Clubs anschauen
- Notieren, welche Tracks dir gefallen, und deren Genre nachsehen

Weiter geht es mit „EDM-Tracks“ und „EDM-Playlists“ – und wer selbst produzieren will, mit „Musikproduktion für Einsteiger“.`,
    faq: [
      ["Was ist der Unterschied zwischen House und Techno?", "House ist oft wärmer und groovebetonter, häufig mit Soul- oder Disco-Elementen. Techno ist meist reduzierter, maschineller und treibender."],
      ["Was ist ein Drop?", "Der Höhepunkt eines EDM-Tracks nach einem Spannungsaufbau, wenn Beat und Bass voll einsetzen."],
    ],
  },
  {
    path: "musik-entertainment/edm/edm-tracks",
    description: "EDM-Tracks entdecken: So findest du neue elektronische Musik – über Labels, Charts, DJ-Sets, Plattformen und Algorithmen, plus Tipps für eigene Sammlungen.",
    markdown: `Jeden Tag erscheinen unzählige neue elektronische Tracks. Hier erfährst du, wie du die Perlen findest – ganz nach deinem Geschmack.

## Quellen für neue EDM-Tracks

1. **Labels folgen:** Viele Genres haben prägende Labels. Wer ein Label mag, mag oft auch dessen andere Releases.
2. **DJ-Sets und Radioshows:** Festival-Mitschnitte und wöchentliche Radioshows stellen viele neue Tracks vor. Tracklists helfen beim Wiederfinden.
3. **Streaming-Algorithmen:** Persönliche Mixe und Release-Radare lernen deinen Geschmack.
4. **Download- und DJ-Plattformen** mit Genre-Charts – beliebt bei DJs.
5. **Plattformen für Upload und Remixe:** Hier finden sich viele Newcomer.
6. **Community:** Foren, Discord-Server und Fan-Gruppen.

## Track-Erkennung

Läuft gerade ein Track, den du nicht kennst? **Musikerkennungs-Apps** finden Titel und Künstler oft in Sekunden.

## Eigene Sammlung aufbauen

- Playlists nach Stimmung oder Anlass (Workout, Fokus, Party)
- Tracks mit **BPM und Tonart** notieren, wenn du selbst auflegen willst
- Lieblingskünstler direkt unterstützen: Konzerte, Merch, Käufe

## Fair zu Künstlern

Gerade kleine Produzentinnen und Produzenten verdienen an Streams wenig. Ein Kauf, ein Konzertbesuch oder Teilen ihrer Musik hilft spürbar.

Fertige Zusammenstellungen findest du unter „EDM-Playlists“.`,
    faq: [
      ["Wie finde ich den Namen eines Tracks aus einem DJ-Set?", "Über Tracklists zum Set, Kommentare unter dem Video oder Musikerkennungs-Apps."],
      ["Wie unterstütze ich kleine Künstler am besten?", "Musik kaufen, Konzerte besuchen, Merch kaufen und ihre Tracks teilen."],
    ],
  },
  {
    path: "musik-entertainment/edm/edm-playlists",
    description: "EDM-Playlists erstellen: So baust du Playlists für Party, Workout und Fokus mit dem richtigen Energiebogen, Tempo und Übergängen.",
    markdown: `Eine gute EDM-Playlist ist mehr als eine Liste guter Songs. Sie erzählt eine Geschichte – mit Aufbau, Höhepunkt und Ausklang.

## Der Energiebogen

1. **Einstieg:** mittleres Tempo, melodisch, nicht zu wuchtig.
2. **Steigerung:** Tempo und Energie langsam erhöhen.
3. **Höhepunkt:** die größten Hits und stärksten Drops.
4. **Ausklang:** ruhigere, melodische Tracks.

## Playlist-Ideen

- **Party:** House und Big Room, Höhepunkt nach etwa einem Drittel der Zeit.
- **Workout:** gleichmäßiges, hohes Tempo – mehr dazu unter „Workout-Playlists“.
- **Fokus:** melodisch, wenig Gesang, z. B. Deep House oder Ambient-Elektronik.
- **Roadtrip:** Mischung aus bekannten Hits und Feel-Good-Tracks.
- **Chill:** Downtempo, Lo-Fi, ruhige Elektronik.

## Tipps für flüssige Übergänge

- Tracks mit **ähnlichem BPM** hintereinander.
- **Tonarten** beachten – passende Tonarten klingen harmonischer (DJs nutzen dafür den Quintenzirkel bzw. das Camelot-System).
- **Crossfade** in der Streaming-App aktivieren.

## Länge

Für eine Party lieber zu lang als zu kurz. Für Workouts genau so lang wie das Training.

Allgemeine Tipps findest du unter „Playlist-Tipps“.`,
    faq: [
      ["Wie viele Songs gehören in eine Playlist?", "Für eine Stunde etwa 15 bis 20 Tracks, je nach Länge."],
      ["Was ist das Camelot-System?", "Eine vereinfachte Darstellung des Quintenzirkels, mit der DJs harmonisch passende Tonarten finden."],
    ],
  },
  {
    path: "musik-entertainment/youtube-musik/lizenzfreie-musik",
    description: "Lizenzfreie Musik für Videos: Was „lizenzfrei“ wirklich bedeutet, Creative Commons, GEMA/AKM, YouTube Audio-Mediathek und typische Fehler.",
    markdown: `Musik macht Videos lebendig – kann aber auch zu Urheberrechtsproblemen führen. Was bedeutet **lizenzfrei** eigentlich?

## „Lizenzfrei“ heißt nicht „rechtefrei“

Meist bedeutet lizenzfrei (royalty free): Du zahlst **einmalig** oder gar nicht und darfst die Musik dann ohne laufende Gebühren nutzen – **unter bestimmten Bedingungen**. Die Musik ist trotzdem urheberrechtlich geschützt.

## Quellen für Musik in Videos

- **YouTube Audio-Mediathek:** Musik und Soundeffekte, die du in YouTube-Videos verwenden darfst. Manche Titel verlangen eine Namensnennung.
- **Creative-Commons-Musik:** Kostenlos, aber mit Bedingungen (siehe unten).
- **Stock-Music-Plattformen:** kostenlose oder kostenpflichtige Lizenzen und Abos.

## Creative Commons verstehen

- **BY:** Namensnennung erforderlich
- **SA:** Weitergabe unter gleichen Bedingungen
- **NC:** keine kommerzielle Nutzung
- **ND:** keine Bearbeitung

Ein monetarisierter YouTube-Kanal kann als kommerzielle Nutzung gelten – „NC“-Musik ist dann problematisch.

## GEMA und AKM

Musik von Mitgliedern der Verwertungsgesellschaften **GEMA** (Deutschland) oder **AKM** (Österreich) ist nicht einfach frei nutzbar. Für viele Nutzungen braucht es Lizenzen.

## Typische Fehler

- Bekannte Songs „nur kurz“ verwenden – auch kurze Ausschnitte sind geschützt.
- Lizenzbedingungen nicht speichern.
- Namensnennung vergessen.

Tipp: Speichere zu jedem verwendeten Titel einen Nachweis der Lizenz.`,
    faq: [
      ["Darf ich bekannte Songs verwenden, wenn ich den Künstler nenne?", "Nein, die Nennung allein reicht nicht. Für geschützte Musik brauchst du eine Lizenz."],
      ["Ist Musik aus der YouTube Audio-Mediathek sicher?", "Für YouTube-Videos ja, solange du die jeweiligen Bedingungen wie eine geforderte Namensnennung einhältst."],
    ],
    sources: [YTAUDIO, GEMA, AKM, { title: "Creative Commons – Lizenzen", url: "https://creativecommons.org/licenses/?lang=de" }],
  },
  {
    path: "musik-entertainment/youtube-musik/musik-fuer-videos-finden",
    description: "Musik für Videos finden: So wählst du die passende Hintergrundmusik nach Stimmung, Tempo und Lautstärke – und vermeidest Urheberrechtsprobleme.",
    markdown: `Die richtige Musik verstärkt die Wirkung eines Videos enorm. Die falsche lenkt ab – oder sorgt für Urheberrechtsprobleme.

## Schritt 1: Stimmung festlegen

Was soll das Video auslösen? Ruhe, Spannung, Fröhlichkeit, Motivation? Viele Musikbibliotheken lassen sich nach **Stimmung**, **Genre** und **Tempo** filtern.

## Schritt 2: Tempo und Schnitt

- Schnelle Schnitte → schnellere Musik
- Ruhige Tutorials → dezente, gleichmäßige Musik ohne Gesang
- Schnitte auf den Beat setzen wirkt professionell

## Schritt 3: Lautstärke

Hintergrundmusik muss **deutlich leiser** sein als Sprache. Viele Schnittprogramme können Musik automatisch absenken, wenn gesprochen wird („Ducking“).

## Schritt 4: Rechte prüfen

- YouTube Audio-Mediathek
- Creative-Commons-Musik (Bedingungen beachten)
- Lizenzierte Stock-Musik
- Eigene Musik

Mehr dazu unter „Lizenzfreie Musik“.

## Musik ohne Gesang

Für Videos mit Sprache eignet sich **instrumentale Musik** am besten – Gesang konkurriert mit deiner Stimme.

## Wiedererkennung

Eine wiederkehrende Intro-Melodie oder ein eigener Jingle macht deinen Kanal wiedererkennbar. Mehr dazu unter „Music-Branding“.`,
    faq: [
      ["Wie laut sollte Hintergrundmusik sein?", "Deutlich leiser als die Sprache, sodass jedes Wort klar verständlich bleibt."],
      ["Darf ich Musik aus Streaming-Diensten verwenden?", "Nein. Streaming-Abos erlauben nur das private Anhören, nicht die Nutzung in eigenen Videos."],
    ],
    sources: [YTAUDIO],
  },
  {
    path: "musik-entertainment/youtube-musik/youtube-musik-tipps",
    description: "YouTube-Musik-Tipps: Content ID verstehen, Urheberrechtsansprüche richtig behandeln, Musik in Livestreams und eigene Musik auf YouTube veröffentlichen.",
    markdown: `Musik und YouTube – das ist eine eigene Welt mit eigenen Regeln. Diese Tipps helfen Creatorn und Musikern.

## Content ID verstehen

YouTube gleicht hochgeladene Videos automatisch mit einer Datenbank ab (**Content ID**). Wird geschützte Musik erkannt, kann der Rechteinhaber:
- das Video **monetarisieren** (Einnahmen gehen an ihn),
- das Video **sperren** (ganz oder in bestimmten Ländern),
- die **Nutzung verfolgen**.

## Was tun bei einem Anspruch?

1. In YouTube Studio prüfen, welcher Teil betroffen ist.
2. Optionen nutzen: Ausschnitt **entfernen**, **Song ersetzen** oder Stummschalten.
3. **Einspruch** nur einlegen, wenn du wirklich die Rechte hast (z. B. Lizenz oder eigene Musik).

Ein Content-ID-Anspruch ist nicht dasselbe wie eine **Urheberrechtsverwarnung** – letztere kann deinen Kanal gefährden.

## Livestreams

Auch in Livestreams kann geschützte Musik erkannt und der Stream unterbrochen werden. Nutze lizenzierte Musik.

## Für Musikerinnen und Musiker

- Eigene Musik über einen Vertrieb veröffentlichen, um sie auf YouTube Music und anderen Plattformen anzubieten.
- Mit einem **offiziellen Künstlerkanal** werden Kanal und Musik zusammengeführt.
- Visualizer, Lyric-Videos und Shorts mit Ausschnitten helfen bei der Reichweite.

Mehr zu Rechten unter „Lizenzfreie Musik“.`,
    faq: [
      ["Ist ein Content-ID-Anspruch schlimm?", "Er führt meist zu Monetarisierung durch den Rechteinhaber oder Sperrung, ist aber keine Urheberrechtsverwarnung."],
      ["Kann ich eigene Musik auf YouTube Music veröffentlichen?", "Ja, in der Regel über einen Musikvertrieb, der deine Releases an Plattformen ausliefert."],
    ],
    sources: [{ title: "YouTube-Hilfe – Content ID", url: "https://support.google.com/youtube/answer/2797370" }],
  },
  {
    path: "musik-entertainment/musikproduktion/musikproduktion-fuer-einsteiger",
    description: "Musikproduktion für Einsteiger: Was du brauchst, DAW, Kopfhörer, Audio-Interface, MIDI-Keyboard und die ersten Schritte zum eigenen Track.",
    markdown: `Eigene Musik zu produzieren war noch nie so zugänglich. Ein Computer und kostenlose Software reichen für den Einstieg.

## Die Grundausstattung

1. **Computer** mit ausreichend Arbeitsspeicher.
2. **DAW** (Digital Audio Workstation) – das Musikprogramm. Siehe „DAW-Vergleich“.
3. **Kopfhörer** – möglichst neutral klingende Studiokopfhörer.
4. Optional: **Audio-Interface** für bessere Klangqualität und zum Aufnehmen von Stimme und Instrumenten.
5. Optional: **MIDI-Keyboard** zum Einspielen von Melodien.
6. Optional: **Mikrofon** für Gesang.
7. Später: **Studiomonitore** (Lautsprecher).

## Die ersten Schritte

1. **DAW kennenlernen:** Tutorials zu den Grundfunktionen ansehen.
2. **Beat bauen:** Kick, Snare, Hi-Hats im Step-Sequencer.
3. **Bassline** hinzufügen.
4. **Akkorde und Melodie** – Grundwissen über Tonleitern hilft.
5. **Arrangement:** Intro, Strophe, Refrain, Drop, Outro.
6. **Mixing:** Lautstärken, EQ, Kompression, Effekte.
7. **Mastering:** letzter Schliff für Lautheit und Klangbalance.

## Lernen

- Lieblingstracks **analysieren** und nachbauen
- Regelmäßig kurze Ideen fertigstellen statt einen perfekten Track ewig zu bearbeiten
- Feedback in Communities einholen

## Gehörschutz

Nicht zu laut produzieren – das schont die Ohren und hilft bei der Klangbeurteilung.`,
    faq: [
      ["Kann ich ohne Instrument Musik produzieren?", "Ja. Mit Samples, Loops und Klickeingaben in der DAW lassen sich komplette Tracks ohne Instrument erstellen."],
      ["Brauche ich teures Equipment?", "Nein. Für den Anfang reichen Computer, kostenlose Software und ordentliche Kopfhörer."],
    ],
  },
  {
    path: "musik-entertainment/musikproduktion/daw-vergleich",
    description: "DAW-Vergleich: Ableton Live, FL Studio, Logic Pro, Cubase, Reaper, GarageBand und kostenlose Alternativen – welche Musiksoftware zu dir passt.",
    markdown: `Die **DAW** (Digital Audio Workstation) ist das Herzstück jeder Musikproduktion. Alle großen DAWs können im Prinzip alles – sie unterscheiden sich in Bedienung, Stärken und Preis.

## Die bekanntesten DAWs

- **Ableton Live:** stark für elektronische Musik und Live-Auftritte, mit Session-Ansicht zum Experimentieren.
- **FL Studio:** beliebt für Beats, Hip-Hop und EDM, mit schnellem Pattern-Workflow.
- **Logic Pro:** nur für macOS, sehr umfangreich mit vielen Instrumenten und Sounds.
- **Cubase:** Klassiker mit Stärken bei Aufnahme, MIDI und Komposition.
- **Reaper:** sehr anpassbar, schlank und vergleichsweise günstig lizenziert.
- **Bitwig Studio:** modern, mit flexibler Modulation – beliebt bei Sounddesignern.

## Kostenlose Einstiegsmöglichkeiten

- **GarageBand** (macOS, iOS) – ideal für den Start, Projekte lassen sich in Logic Pro öffnen.
- **Kostenlose oder abgespeckte Versionen** vieler DAWs (Lite-Versionen, Testversionen).
- **LMMS** – quelloffen und kostenlos.

## Welche DAW passt zu mir?

| Ziel | Häufige Wahl |
|---|---|
| Elektronische Musik, live | Ableton Live, Bitwig |
| Beats und EDM | FL Studio |
| Mac-Nutzer mit vielen Sounds | Logic Pro, GarageBand |
| Aufnahme von Bands | Cubase, Reaper |
| Kleines Budget | GarageBand, LMMS, Reaper |

## Tipp

Teste Demoversionen und bleib dann bei einer DAW. Wer sein Werkzeug gut kennt, produziert besser als jemand, der ständig wechselt.`,
    faq: [
      ["Welche DAW ist die beste?", "Es gibt keine beste DAW für alle. Entscheidend sind Musikstil, Betriebssystem, Budget und persönlicher Workflow."],
      ["Kann ich Projekte zwischen DAWs austauschen?", "Nur eingeschränkt. Einzelspuren als Audiodateien (Stems) lassen sich aber in jeder DAW öffnen."],
    ],
  },
  {
    path: "musik-entertainment/musikproduktion/ki-musik",
    description: "KI-Musik: Wie KI Songs, Melodien und Stimmen erzeugt, kreative Einsatzmöglichkeiten, Urheberrecht, Kennzeichnung und ethische Fragen.",
    markdown: `KI kann inzwischen komplette Songs mit Gesang aus einer kurzen Textbeschreibung erzeugen. Das eröffnet neue Möglichkeiten – und wirft wichtige Fragen auf.

## Was KI-Musik-Tools können

- **Komplette Songs** aus einem Prompt („fröhlicher Pop-Song über einen Panda, der Bambus sucht“)
- **Instrumentals** und Hintergrundmusik
- **Stems trennen:** Gesang, Drums und Bass aus einem Mix isolieren
- **Mastering-Hilfe**
- **Ideen und Akkordfolgen** als Inspiration

## Kreative Einsatzmöglichkeiten

- Skizzen und Demos schnell ausprobieren
- Hintergrundmusik für private Videos
- Lernen: Arrangements analysieren
- Inspiration bei Schreibblockaden

## Rechtliche Fragen

- **Nutzungsbedingungen:** Wer darf die erzeugte Musik wie nutzen? Kommerzielle Nutzung ist oft an Bezahltarife gebunden.
- **Urheberrecht:** Ob rein KI-generierte Musik urheberrechtlich geschützt ist, wird in vielen Ländern diskutiert und ist teils unklar.
- **Trainingsdaten:** Es gibt Rechtsstreitigkeiten zwischen Musikindustrie und KI-Anbietern.
- **Stimmen echter Künstler** nachzuahmen kann Persönlichkeitsrechte verletzen.

## Kennzeichnung

Plattformen verlangen zunehmend, dass KI-generierte oder stark veränderte Inhalte gekennzeichnet werden. Auch der EU AI Act sieht Transparenzpflichten vor.

## Fazit

KI ist ein mächtiges Werkzeug für Ideen und Experimente. Für eigene Releases gilt: Bedingungen prüfen, transparent sein und die menschliche Kreativität in den Mittelpunkt stellen.`,
    faq: [
      ["Darf ich KI-Songs auf Spotify veröffentlichen?", "Das hängt von den Nutzungsbedingungen des KI-Tools und den Regeln des Vertriebs bzw. der Plattform ab. Viele verlangen Rechte für die kommerzielle Nutzung."],
      ["Ist KI-Musik urheberrechtlich geschützt?", "Das ist in vielen Ländern noch nicht abschließend geklärt. Rein maschinell erzeugte Werke sind oft nicht geschützt."],
    ],
  },
  {
    path: "musik-entertainment/playlists/playlist-tipps",
    description: "Playlist-Tipps: So erstellst du Playlists mit rotem Faden, gutem Flow, passendem Cover und Titel – und teilst sie erfolgreich mit Freunden oder Fans.",
    markdown: `Eine gute Playlist fühlt sich an wie ein Mixtape von einem Freund: durchdacht, abwechslungsreich und mit einem roten Faden.

## Thema festlegen

Stimmung, Anlass oder Genre: „Sonntagmorgen-Kaffee“, „Autofahrt in den Urlaub“, „Konzentriert lernen“. Je klarer das Thema, desto besser passen die Songs.

## Flow und Reihenfolge

- **Starker Einstieg:** einer der besten Songs zuerst.
- **Abwechslung:** Tempo und Stimmung leicht variieren, keine abrupten Brüche.
- **Höhepunkte** verteilen, nicht alle Hits an den Anfang.
- **Ausklang:** ruhigere Songs am Ende.

## Länge

- Kurze Playlist für einen Anlass: 30–60 Minuten
- Dauer-Playlist: 2–4 Stunden mit regelmäßigen Updates

## Titel, Beschreibung, Cover

- Einprägsamer Titel
- Kurze Beschreibung mit Stimmung und Anlass
- Eigenes Cover-Bild – mehr unter „Cover-Design“

## Teilen

- In sozialen Netzwerken und Messengern teilen
- Gemeinsame Playlists mit Freunden erstellen
- Regelmäßig aktualisieren – dann lohnt sich das Folgen

## Für Künstler

Eigene Playlists mit deinen Songs und passenden anderen Künstlern sind eine gute Möglichkeit, neue Hörer zu erreichen.`,
    faq: [
      ["Wie lang sollte eine Playlist sein?", "Für einen bestimmten Anlass etwa 30 bis 60 Minuten, für Dauer-Playlists auch mehrere Stunden."],
      ["Wie oft sollte ich Playlists aktualisieren?", "Öffentliche Playlists gewinnen Follower, wenn sie regelmäßig – etwa wöchentlich oder monatlich – neue Songs bekommen."],
    ],
  },
  {
    path: "musik-entertainment/playlists/playlists-fuer-kinder",
    description: "Playlists für Kinder: Ideen für Musik zum Aufwachen, Tanzen, Autofahren und Einschlafen – plus Tipps zu Kindersicherung, Lautstärke und Werbung.",
    markdown: `Musik begleitet Kinder durch den Tag – zum Tanzen, Mitsingen und Einschlafen. Mit ein paar Tipps werden Playlists für Kinder zum Lieblingsprogramm.

## Ideen nach Anlass

- **Guten Morgen:** fröhliche Mitsing-Lieder
- **Tanzparty:** Bewegungslieder mit Mitmach-Anleitungen
- **Autofahrt:** bekannte Lieder zum Mitsingen und Hörspiele
- **Aufräumen:** Ein Lied = Aufräumzeit!
- **Einschlafen:** ruhige Schlaflieder und Instrumentalmusik
- **Lernen:** Lieder zu Zahlen, Buchstaben, Jahreszeiten

## Tipps für Eltern

- **Kinderprofil** im Streamingdienst nutzen – mit Filter für explizite Inhalte.
- **Kinderkopfhörer mit Lautstärkebegrenzung** schützen das Gehör.
- **Werbung beachten:** In kostenlosen Versionen kann Werbung laufen – nicht immer kindgerecht.
- **Gemeinsam auswählen:** Kinder lieben es, mitzubestimmen.

## Musik selbst machen

Neben Playlists: Trommeln aus Töpfen, Rasseln aus Reis in Dosen, gemeinsam singen. Das fördert Rhythmusgefühl und Sprache.

## Lautstärke

Kinderohren sind empfindlich. Musik im Raum lieber leise, Kopfhörer nur mit Begrenzung und nicht stundenlang.`,
    faq: [
      ["Wie laut dürfen Kinderkopfhörer sein?", "Fachleute empfehlen Kopfhörer mit Lautstärkebegrenzung für Kinder und kurze Hördauern."],
      ["Gibt es werbefreie Musik für Kinder?", "In Bezahlversionen von Streamingdiensten oder auf Hörspielboxen und CDs läuft in der Regel keine Werbung."],
    ],
  },
  {
    path: "musik-entertainment/playlists/workout-playlists",
    description: "Workout-Playlists erstellen: das richtige Tempo (BPM) für Laufen, Krafttraining und HIIT, Aufbau nach Trainingsphasen und Tipps für mehr Motivation.",
    markdown: `Musik kann beim Sport motivieren und helfen, im Rhythmus zu bleiben. Mit dem richtigen **Tempo** wird die Playlist zum Trainingspartner.

## BPM passend zum Training (Orientierung)

| Training | Ungefähres Tempo |
|---|---|
| Aufwärmen | ca. 100–120 BPM |
| Krafttraining | ca. 120–140 BPM |
| Laufen | oft um 150–180 BPM (passend zur Schrittfrequenz) |
| HIIT / Intervalle | ca. 140–160 BPM |
| Cool-down | unter 100 BPM |

Beim Laufen kann Musik im Takt der Schritte helfen, gleichmäßig zu laufen. Viele Läufer haben eine Schrittfrequenz um 160–180 Schritte pro Minute.

## Aufbau der Playlist

1. **Aufwärmen** – mittleres Tempo
2. **Hauptteil** – energiegeladen
3. **Endspurt** – die stärksten Motivations-Songs
4. **Cool-down** – ruhig

## Genres

EDM, Pop, Hip-Hop und Rock sind beliebt. Wichtig ist, dass dir die Musik Energie gibt.

## Sicherheit

- Beim **Laufen im Straßenverkehr** die Lautstärke so wählen, dass du die Umgebung hörst – oder offene Kopfhörer nutzen.
- Im Fitnessstudio auf die Lautstärke achten, um das Gehör zu schonen.

## Tipp

Streaming-Dienste bieten oft Playlists nach Tempo an. Mit Apps, die BPM anzeigen, kannst du eigene Listen zusammenstellen.`,
    faq: [
      ["Welches Tempo ist gut zum Laufen?", "Viele Läuferinnen und Läufer nutzen Musik zwischen etwa 150 und 180 BPM, passend zur eigenen Schrittfrequenz."],
      ["Ist Musik beim Sport hilfreich?", "Viele empfinden Musik als motivierend und die Anstrengung als geringer. Im Wettkampf gelten teils eigene Regeln."],
    ],
  },
  {
    path: "musik-entertainment/music-branding/music-branding",
    description: "Music-Branding für Künstler und Creator: Sound, Image, Künstlername, Visuals und Social Media – so entsteht eine wiedererkennbare Musikmarke.",
    markdown: `Talent allein reicht selten. **Music-Branding** sorgt dafür, dass Menschen dich wiedererkennen – an deinem Sound, deinem Look und deiner Geschichte.

## 1. Dein Sound

Was macht deine Musik unverwechselbar? Ein typischer Synth, eine bestimmte Stimmung, ein Stilmix? Konsistenz hilft Hörern, dich einzuordnen.

## 2. Künstlername

- Einprägsam und leicht zu schreiben
- Suchbar – prüfe, ob es den Namen schon gibt
- Verfügbarkeit auf Plattformen und als Domain prüfen

## 3. Visuelle Identität

- **Logo oder Schriftzug**
- **Farbwelt** (z. B. Neon-Glow für elektronische Musik)
- Einheitliche **Cover** – siehe „Cover-Design“
- Wiedererkennbare **Pressefotos**

## 4. Deine Geschichte

Wer bist du, was treibt dich an? Eine kurze, ehrliche Bio für Plattformen und Presse.

## 5. Plattformen

- Gleicher Name und gleiches Profilbild auf allen Kanälen
- Künstlerprofile bei Streamingdiensten beanspruchen
- Eigene Website mit Links, Terminen und Kontakt

## 6. Content rund um die Musik

Behind the Scenes, Studio-Sessions, Kurzvideos mit Hooks deiner Songs, Live-Auftritte.

## 7. Konsistenz über Zeit

Ein starker Brand entwickelt sich weiter, ohne seine Wurzeln zu verlieren.

Allgemeine Grundlagen findest du unter „Branding für Creator“.`,
    faq: [
      ["Wie finde ich einen guten Künstlernamen?", "Kurz, einprägsam und einzigartig. Prüfe Suchmaschinen, Streamingdienste und Markenregister, ob es den Namen schon gibt."],
      ["Brauche ich als Musiker eine Website?", "Sie ist sehr empfehlenswert: Du kontrollierst sie selbst und kannst alle Links, Termine und Kontaktdaten bündeln."],
    ],
  },
  {
    path: "musik-entertainment/music-branding/cover-design",
    description: "Cover-Design für Musik: Formate und Anforderungen der Plattformen, Gestaltungsregeln, Schrift, Bildrechte und Tipps für Single-, EP- und Playlist-Cover.",
    markdown: `Das Cover ist oft das Erste, was Hörer von deinem Song sehen – meist winzig klein auf dem Handy. Ein gutes **Cover-Design** fällt auf und passt zur Musik.

## Technische Anforderungen

Musikvertriebe und Plattformen verlangen meist ein **quadratisches Bild in hoher Auflösung** (häufig mindestens 3000 × 3000 Pixel) im RGB-Farbraum. Die genauen Vorgaben stehen bei deinem Vertrieb.

Häufige Ablehnungsgründe:
- verschwommene oder zu kleine Bilder
- Logos von Marken oder Plattformen
- URLs, Social-Media-Handles oder Preisangaben auf dem Cover
- Abweichende Titel oder Künstlernamen

## Gestaltungsregeln

1. **Klein testen:** Ist das Cover als Mini-Bild noch erkennbar?
2. **Ein starkes Motiv** statt vieler Details.
3. **Wenig Text:** Künstlername und Titel – gut lesbar.
4. **Farben passend zur Musik:** düster, verträumt, energiegeladen?
5. **Serien-Look** für mehrere Singles einer Ära.

## Bildrechte

Nutze nur Bilder, an denen du die Rechte hast: eigene Fotos, beauftragte Designs oder entsprechend lizenzierte Stockbilder. Bei KI-Bildern die Nutzungsbedingungen prüfen.

## Werkzeuge

Design-Tools mit Cover-Vorlagen oder Bildbearbeitung wie GIMP und Photopea – siehe „Design-Tools für Einsteiger“.

## Playlist-Cover

Auch Playlists profitieren von eigenen Covern mit einheitlichem Stil.`,
    faq: [
      ["Welche Größe braucht ein Album-Cover?", "Meist ein quadratisches Bild in hoher Auflösung, häufig mindestens 3000 × 3000 Pixel. Prüfe die Vorgaben deines Vertriebs."],
      ["Darf ich KI-Bilder als Cover verwenden?", "Das hängt von den Nutzungsbedingungen des KI-Tools und den Regeln des Vertriebs ab."],
    ],
  },

  /* ================= Finanzen & Sparen ================= */
  {
    path: "finanzen-sparen/sparen/spartipps",
    description: "Spartipps für den Alltag: 20 einfache Wege, um bei Wohnen, Energie, Lebensmitteln, Mobilität, Abos und Freizeit Geld zu sparen – ohne auf alles zu verzichten.",
    markdown: `Sparen heißt nicht verzichten, sondern bewusster ausgeben. Diese **Spartipps** wirken oft schon mit wenig Aufwand.

## Wohnen und Energie

1. Strom- und Gastarif regelmäßig vergleichen.
2. Heizung um ein Grad senken.
3. Standby vermeiden – mehr unter „Strom sparen“.
4. Sparduschkopf nutzen.

## Lebensmittel

5. Mit Einkaufsliste und Wochenplan einkaufen.
6. Eigenmarken statt Markenprodukte probieren.
7. Reste verwerten und weniger wegwerfen.
8. Mittagessen vorkochen statt kaufen.

## Mobilität

9. Kurze Wege zu Fuß oder mit dem Rad.
10. Spritpreise vergleichen und günstig tanken.
11. Kfz-Versicherung jährlich prüfen.
12. Öffentliche Verkehrsmittel und Jahreskarten nutzen.

## Verträge und Abos

13. Abos auflisten und Unnötiges kündigen.
14. Handytarif prüfen – oft zahlt man für ungenutztes Datenvolumen.
15. Versicherungen auf Doppelungen prüfen.

## Freizeit und Shopping

16. 24-Stunden-Regel vor spontanen Käufen.
17. Second-Hand kaufen und verkaufen.
18. Bibliothek statt Kauf – auch für E-Books, Spiele und Filme.
19. Kostenlose Freizeitangebote nutzen.

## Automatisch sparen

20. **Dauerauftrag** auf ein Sparkonto direkt nach Gehaltseingang – was weg ist, wird nicht ausgegeben.

Weitere Tipps unter „Günstig leben“ und „Abos kündigen“.`,
    faq: [
      ["Wo kann man am meisten sparen?", "Oft bei großen Fixkosten: Wohnen, Energie, Versicherungen, Mobilität und Abos."],
      ["Wie viel sollte ich sparen?", "Eine verbreitete Orientierung sind 10 bis 20 Prozent des Nettoeinkommens. Wichtig ist, überhaupt regelmäßig zu sparen."],
    ],
    sources: [VZ_GELD],
  },
  {
    path: "finanzen-sparen/sparen/guenstig-leben",
    description: "Günstig leben: Wie du dauerhaft mit weniger Geld gut lebst – Prioritäten setzen, Fixkosten senken, gebraucht kaufen, teilen und kostenlose Angebote nutzen.",
    markdown: `Günstig leben heißt nicht, ständig auf alles zu verzichten. Es geht darum, Geld bewusst für das auszugeben, was einem wirklich wichtig ist.

## 1. Prioritäten klären

Was macht dich glücklich? Wofür gibst du gern Geld aus – und wofür eigentlich nur aus Gewohnheit? Wer das weiß, spart leichter an den richtigen Stellen.

## 2. Fixkosten senken

Fixkosten wirken jeden Monat. Ein günstigerer Handytarif, eine geprüfte Versicherung oder eine passende Wohnung sparen dauerhaft mehr als viele kleine Einzelmaßnahmen.

## 3. Gebraucht statt neu

Kleidung, Möbel, Elektronik, Kinderspielzeug, Bücher – vieles gibt es gebraucht in gutem Zustand. Flohmärkte, Second-Hand-Läden und Kleinanzeigen.

## 4. Teilen und leihen

- Bibliotheken
- Leihläden und Werkzeugverleih
- Carsharing
- Nachbarschafts-Apps

## 5. Selbermachen

Kochen, kleine Reparaturen, Geschenke basteln. Repair-Cafés helfen bei kaputten Geräten.

## 6. Kostenlose Freizeit

Parks, Wanderwege, kostenlose Museumstage, Stadtfeste, Spieleabende mit Freunden.

## 7. Bewusst einkaufen

Einkaufsliste, Preisvergleich, Eigenmarken, saisonales Obst und Gemüse.

## 8. Unterstützung nutzen

Je nach Situation gibt es Sozialleistungen, Ermäßigungen (z. B. Sozialpässe in Städten) oder Beratungsstellen. Es lohnt sich, nachzufragen.`,
    faq: [
      ["Wie kann ich mit wenig Geld gut leben?", "Prioritäten setzen, Fixkosten senken, gebraucht kaufen, teilen statt besitzen und kostenlose Angebote nutzen."],
      ["Wo finde ich Hilfe, wenn das Geld nicht reicht?", "Bei Schuldner- und Sozialberatungsstellen, Verbraucherzentralen bzw. der Arbeiterkammer sowie den Sozialämtern der Gemeinde."],
    ],
    sources: [VZ_GELD, AK],
  },
  {
    path: "finanzen-sparen/sparen/beim-einkaufen-sparen",
    description: "Beim Einkaufen sparen: Einkaufsliste, Eigenmarken, Grundpreise vergleichen, Angebote richtig nutzen und Tricks im Supermarkt durchschauen.",
    markdown: `Der Supermarkt ist darauf ausgelegt, dass wir mehr kaufen als geplant. Mit ein paar Strategien bleibt mehr Geld im Portemonnaie.

## Vor dem Einkauf

- **Wochenplan** für Mahlzeiten machen.
- **Vorräte prüfen** und eine **Einkaufsliste** schreiben.
- **Prospekte oder Apps** für Angebote ansehen – aber nur kaufen, was ohnehin gebraucht wird.
- **Nicht hungrig** einkaufen.

## Im Laden

- **Grundpreis vergleichen:** Der Preis pro Kilogramm oder Liter steht am Regal. Große Packungen sind nicht immer günstiger.
- **Eigenmarken** probieren – oft gleichwertig.
- **Oben und unten im Regal** schauen: Auf Augenhöhe stehen häufig teurere Produkte.
- **Mogelpackungen** erkennen: weniger Inhalt zum gleichen Preis.
- **Saisonal** kaufen.

## Angebote richtig nutzen

Ein Angebot lohnt sich nur, wenn du das Produkt wirklich brauchst und es nicht verdirbt. Haltbares bei guten Angeboten auf Vorrat kaufen.

## Lebensmittel retten

Reduzierte Ware kurz vor dem Mindesthaltbarkeitsdatum, Apps zum Retten von Lebensmitteln aus Restaurants und Bäckereien.

## Nach dem Einkauf

Richtig lagern, Reste verwerten – mehr unter „Lebensmittel retten“.`,
    faq: [
      ["Was ist der Grundpreis?", "Der Preis pro Kilogramm, Liter oder Stück. Er macht Packungen unterschiedlicher Größe vergleichbar."],
      ["Sind Eigenmarken schlechter?", "Nicht unbedingt. Tests zeigen oft, dass Eigenmarken mit Markenprodukten mithalten können."],
    ],
    sources: [VZ_GELD],
  },
  {
    path: "finanzen-sparen/sparen/abos-kuendigen",
    description: "Abos kündigen: Überblick über laufende Verträge, Kündigungsfristen, Kündigungsbutton und Tipps, um Abofallen und ungewollte Verlängerungen zu vermeiden.",
    markdown: `Streaming, Fitnessstudio, Zeitschriften, Apps, Cloud-Speicher – Abos summieren sich schnell. Oft zahlen wir für Dinge, die wir kaum nutzen.

## Schritt 1: Überblick

- **Kontoauszüge** der letzten drei Monate durchgehen.
- **Kreditkarten- und PayPal-Abbuchungen** prüfen.
- **App-Store-Abos** in den Einstellungen von iOS und Android ansehen.
- Alles in einer Liste notieren: Name, Kosten, Abrechnungsrhythmus, Kündigungsfrist.

## Schritt 2: Bewerten

Nutzt du es regelmäßig? Würdest du es heute neu abschließen? Gibt es eine günstigere Alternative?

## Schritt 3: Kündigen

- **Online kündigen:** In Deutschland müssen Unternehmen, die Verträge online abschließen lassen, seit Juli 2022 einen **Kündigungsbutton** anbieten.
- **Schriftlich:** per E-Mail oder Brief mit Kundennummer und Bitte um Bestätigung.
- **Kündigungsbestätigung** aufbewahren.

## Vertragslaufzeiten

In Deutschland gilt für viele nach dem 1. März 2022 geschlossene Verbraucherverträge: Nach Ablauf der Mindestlaufzeit verlängern sie sich nur noch auf unbestimmte Zeit und sind dann mit **einem Monat Frist** kündbar. In Österreich gelten eigene Regeln – die Arbeiterkammer informiert.

## Abofallen vermeiden

- Kostenlose Testphasen sofort im Kalender notieren.
- Bei „Gratis“-Angeboten das Kleingedruckte lesen.
- In-App-Käufe auf Kinder-Geräten sperren.

Bei Problemen helfen Verbraucherzentralen bzw. die Arbeiterkammer.`,
    faq: [
      ["Was ist der Kündigungsbutton?", "In Deutschland müssen Unternehmen, bei denen man online Verträge abschließen kann, auch eine einfache Online-Kündigung über einen Button ermöglichen."],
      ["Wie kündige ich ein App-Abo?", "In den Abo-Einstellungen des App Stores (iOS) bzw. von Google Play (Android) – das Löschen der App allein beendet das Abo nicht."],
    ],
    sources: [VZ_GELD, AK],
  },
  {
    path: "finanzen-sparen/budget/haushaltsbudget-erstellen",
    description: "Haushaltsbudget erstellen: Einnahmen und Ausgaben erfassen, Kategorien bilden, Puffer einplanen und mit unserem Budget-Rechner sofort loslegen.",
    markdown: `Ein **Haushaltsbudget** zeigt, wohin dein Geld fließt – und hilft, es bewusst einzuteilen. Mit unserem Budget-Rechner kannst du direkt loslegen.

## Schritt 1: Einnahmen erfassen

Nettogehalt, Kindergeld bzw. Familienbeihilfe, Nebenverdienst, Unterhalt – alles, was regelmäßig hereinkommt.

## Schritt 2: Ausgaben erfassen

Am besten einen Monat lang alle Ausgaben notieren (App, Tabelle oder Haushaltsbuch). Dann in Kategorien einteilen:

- **Fixkosten:** Miete, Energie, Versicherungen, Handy, Abos, Kredite
- **Variable Kosten:** Lebensmittel, Drogerie, Kleidung, Freizeit
- **Unregelmäßige Kosten:** Versicherungen jährlich, Geschenke, Urlaub, Reparaturen – durch 12 teilen und monatlich einplanen
- **Sparen:** Notgroschen, Rücklagen, Altersvorsorge

## Schritt 3: Budget festlegen

Für jede Kategorie einen Betrag festlegen. Die 50-30-20-Regel ist eine gute Orientierung (siehe „Budget-Methoden“).

## Schritt 4: Puffer einplanen

Unerwartetes passiert immer. Ein kleiner Puffer verhindert Frust.

## Schritt 5: Regelmäßig prüfen

Einmal im Monat: Wo lag ich drüber, wo drunter? Budget anpassen.

## Werkzeuge

- Unser **Budget-Rechner** unten auf dieser Seite
- Tabellen oder Haushaltsbuch-Apps
- Unterkonten bei der Bank für verschiedene Zwecke`,
    faq: [
      ["Wie lange sollte ich Ausgaben aufschreiben?", "Mindestens einen Monat, besser drei – so werden auch unregelmäßige Ausgaben sichtbar."],
      ["Was mache ich mit jährlichen Kosten?", "Durch zwölf teilen und monatlich zurücklegen, zum Beispiel auf einem eigenen Unterkonto."],
    ],
    sources: [VZ_GELD],
  },
  {
    path: "finanzen-sparen/budget/budget-methoden",
    description: "Budget-Methoden im Vergleich: 50-30-20-Regel, Umschlagmethode, Zero-Based-Budgeting und Pay-yourself-first – welche Methode zu dir passt.",
    markdown: `Es gibt nicht die eine richtige Budget-Methode. Hier sind die bekanntesten – probiere aus, was zu dir passt.

## 50-30-20-Regel

- **50 %** Bedürfnisse (Wohnen, Essen, Versicherungen)
- **30 %** Wünsche (Freizeit, Hobbys, Reisen)
- **20 %** Sparen und Schuldenabbau

**Gut für:** Einsteiger, die eine einfache Orientierung wollen.

## Umschlagmethode

Für variable Ausgaben wird ein fester Betrag bar in Umschläge gesteckt (Lebensmittel, Freizeit …). Ist der Umschlag leer, ist das Budget aufgebraucht. Digital funktioniert das mit Unterkonten oder Apps.

**Gut für:** alle, die beim Kartenzahlen den Überblick verlieren.

## Zero-Based-Budgeting

Jeder Euro bekommt eine Aufgabe, bis Einnahmen minus Ausgaben **null** ergibt – Sparen zählt als Ausgabe.

**Gut für:** Detailorientierte, die maximale Kontrolle wollen.

## Pay yourself first

Direkt nach Gehaltseingang fließt ein fester Betrag aufs Sparkonto. Mit dem Rest wird gelebt.

**Gut für:** alle, denen detaillierte Planung zu aufwendig ist.

## Kombinieren

Viele kombinieren Methoden, z. B. Pay yourself first für das Sparen und Umschläge für Lebensmittel.`,
    faq: [
      ["Welche Budget-Methode ist die beste?", "Die, die du dauerhaft durchhältst. Für Einsteiger sind die 50-30-20-Regel oder Pay yourself first besonders einfach."],
      ["Funktioniert die Umschlagmethode auch ohne Bargeld?", "Ja, mit Unterkonten, Sparzielen in der Banking-App oder Budget-Apps."],
    ],
    comparison: {
      title: "Budget-Methoden im Vergleich",
      columns: ["50-30-20", "Umschlag", "Zero-Based", "Pay yourself first"],
      rows: [
        { label: "Aufwand", values: ["gering", "mittel", "hoch", "sehr gering"] },
        { label: "Kontrolle", values: ["mittel", "hoch", "sehr hoch", "gering"] },
        { label: "Ideal für", values: ["Einsteiger", "Spontankäufer", "Detailplaner", "Sparmuffel"] },
      ],
    },
    sources: [VZ_GELD],
  },
  {
    path: "finanzen-sparen/finanz-basics/notgroschen",
    description: "Notgroschen aufbauen: Wie hoch die finanzielle Reserve sein sollte, wo du sie parkst und wie du Schritt für Schritt dahin kommst.",
    markdown: `Die Waschmaschine geht kaputt, das Auto muss in die Werkstatt, das Einkommen fällt weg – ein **Notgroschen** fängt solche Situationen auf, ohne dass du Schulden machen musst.

## Wie hoch sollte der Notgroschen sein?

Eine verbreitete Faustregel lautet: **drei bis sechs Monatsausgaben** (nicht Einkommen). Mehr kann sinnvoll sein, wenn
- du selbstständig bist,
- dein Einkommen schwankt,
- du Kinder oder ein Haus hast,
- du ein älteres Auto fährst.

## Wo parken?

Der Notgroschen muss **sicher und schnell verfügbar** sein:
- **Tagesgeldkonto** oder separates Sparkonto mit täglicher Verfügbarkeit
- Einlagen bei Banken in der EU sind bis zu einem bestimmten Betrag über die gesetzliche Einlagensicherung geschützt.

**Nicht geeignet:** Aktien oder ETFs (Kurse können genau dann fallen, wenn du das Geld brauchst), Festgeld mit langer Laufzeit.

## So baust du ihn auf

1. **Ziel festlegen:** Monatsausgaben × 3 (oder × 6).
2. **Dauerauftrag** direkt nach Gehaltseingang.
3. **Extras nutzen:** Steuererstattung, Bonus, Geldgeschenke.
4. **Schrittweise:** Erstes Ziel kann ein Monat Ausgaben sein.

## Nur für Notfälle

Ein Urlaub ist kein Notfall. Für geplante Ausgaben lieber separate Sparziele anlegen. Wurde der Notgroschen genutzt, wieder auffüllen.`,
    faq: [
      ["Wie hoch sollte ein Notgroschen sein?", "Eine verbreitete Faustregel sind drei bis sechs Monatsausgaben, bei unsicherem Einkommen mehr."],
      ["Soll ich den Notgroschen in ETFs anlegen?", "Nein, er sollte sicher und jederzeit verfügbar sein, etwa auf einem Tagesgeldkonto."],
    ],
    sources: [VZ_GELD, AK],
  },
  {
    path: "finanzen-sparen/finanz-basics/schulden-vermeiden",
    description: "Schulden vermeiden: Dispo, Ratenkauf und Buy now, pay later richtig einschätzen, Warnsignale erkennen und wo es kostenlose Schuldnerberatung gibt.",
    markdown: `Schulden entstehen oft schleichend: hier ein Ratenkauf, dort der Dispo. Wer die Fallen kennt, kann sie meiden.

## Typische Schuldenfallen

- **Dispositionskredit:** Das Konto überziehen ist bequem, aber meist teuer.
- **Ratenkauf und „0 %-Finanzierung“:** Prüfe Gesamtkosten, Nebenbedingungen und ob sich danach Zinsen erhöhen.
- **Buy now, pay later:** Später zahlen fühlt sich nicht wie Geldausgeben an – Mahngebühren können sich summieren.
- **Kreditkarten mit Teilzahlung** (Revolving): hohe Zinsen auf den Restbetrag.
- **Handyverträge mit Gerät** und Abos.

## Regeln gegen Schulden

1. **Konsum nicht auf Kredit.** Lieber ansparen.
2. **Notgroschen** für Unerwartetes.
3. **Budget** führen.
4. **Vor jedem Kredit:** Gesamtkosten (effektiver Jahreszins) vergleichen und fragen: Brauche ich das wirklich jetzt?
5. **Keine Bürgschaften** aus Gefälligkeit.

## Warnsignale

- Der Dispo ist dauerhaft im Minus.
- Rechnungen werden liegen gelassen.
- Neue Kredite zum Bezahlen alter Kredite.
- Mahnungen häufen sich.

## Hilfe holen – früh!

Kostenlose, seriöse Hilfe gibt es bei **Schuldnerberatungsstellen** von Wohlfahrtsverbänden, Verbraucherzentralen und Kommunen (Deutschland) bzw. den **staatlich anerkannten Schuldenberatungen** (Österreich). Vorsicht vor kostenpflichtigen „Schuldenregulierern“ mit Versprechungen.`,
    faq: [
      ["Ist eine 0-%-Finanzierung immer kostenlos?", "Nicht immer. Prüfe Nebenkosten, Bedingungen und was nach der Aktionszeit passiert."],
      ["Wo bekomme ich kostenlose Schuldnerberatung?", "In Deutschland bei Schuldnerberatungsstellen von Wohlfahrtsverbänden, Kommunen und Verbraucherzentralen, in Österreich bei den staatlich anerkannten Schuldenberatungen."],
    ],
    sources: [VZ_GELD, { title: "Dachverband der Schuldenberatungen Österreich", url: "https://www.schuldenberatung.at/" }],
  },
  {
    path: "finanzen-sparen/finanz-basics/versicherungen-verstehen",
    description: "Versicherungen verstehen: Welche Versicherungen wirklich wichtig sind, welche sinnvoll sein können und welche oft überflüssig sind – mit Prioritätenliste.",
    markdown: `Versicherungen sollen existenzbedrohende Risiken absichern – nicht jedes kleine Missgeschick. Diese Übersicht hilft beim Sortieren.

## Unverzichtbar bzw. sehr wichtig

- **Krankenversicherung** – in Deutschland Pflicht, in Österreich in der Regel über die Sozialversicherung.
- **Privathaftpflichtversicherung:** Wer einem anderen einen Schaden zufügt, haftet unbegrenzt. Eine der wichtigsten Versicherungen überhaupt – und meist günstig.
- **Kfz-Haftpflicht** – Pflicht für Fahrzeughalter.

## Wichtig je nach Lebenssituation

- **Berufsunfähigkeitsversicherung:** sichert das Einkommen, wenn du nicht mehr arbeiten kannst. Besonders wichtig für alle, die von ihrem Einkommen leben.
- **Risikolebensversicherung:** wenn Familie oder Partner finanziell von dir abhängen.
- **Wohngebäudeversicherung** für Hausbesitzer.
- **Tierhalterhaftpflicht** für Hunde- und Pferdehalter.

## Kann sinnvoll sein

- **Hausratversicherung** – je nach Wert des Hausrats.
- **Rechtsschutzversicherung** – je nach Lebenslage.
- **Auslandsreisekrankenversicherung** – günstig und bei Reisen sehr empfehlenswert.

## Oft verzichtbar

- Handy- und Brillenversicherungen
- Restschuldversicherungen bei kleinen Krediten
- Doppelte Absicherungen

## Tipps

- **Bedarf vor Produkt:** Erst überlegen, welche Risiken dich ruinieren könnten.
- **Regelmäßig prüfen** und vergleichen.
- **Unabhängig beraten lassen**, z. B. bei der Verbraucherzentrale bzw. der Arbeiterkammer.

Dieser Überblick ersetzt keine individuelle Beratung.`,
    faq: [
      ["Welche Versicherung ist am wichtigsten?", "Neben der Krankenversicherung gilt die Privathaftpflicht als eine der wichtigsten, weil Schäden an Dritten existenzbedrohend sein können."],
      ["Brauche ich eine Handyversicherung?", "Meist nicht. Sie ist oft teuer im Verhältnis zur Leistung. Ein Rücklagenkonto ist häufig günstiger."],
    ],
    sources: [VZ_GELD, AK],
  },
  {
    path: "finanzen-sparen/online-verdienen/nebenverdienst-online",
    description: "Nebenverdienst online: seriöse Möglichkeiten von Freelancing bis digitale Produkte, typische Betrugsmaschen erkennen und was du zu Steuern wissen musst.",
    markdown: `Online etwas dazuverdienen ist möglich – aber selten schnell und leicht. Seriöse Wege erfordern Zeit und Können. Unseriöse versprechen das Gegenteil.

## Seriöse Möglichkeiten

- **Freelancing:** Texte, Übersetzungen, Grafikdesign, Programmierung, Social-Media-Betreuung, virtuelle Assistenz.
- **Nachhilfe und Kurse** online geben.
- **Digitale Produkte** verkaufen: Vorlagen, E-Books, Kurse – siehe „Digitale Produkte verkaufen“.
- **Content Creation** mit Werbung, Sponsoring oder Affiliate – siehe „Affiliate-Marketing Einstieg“.
- **Gebrauchtes verkaufen** auf Online-Marktplätzen.
- **Produkttests und Umfragen** – meist nur kleine Beträge.

## Warnsignale für Betrug

- „Schnell reich werden“ oder „passives Einkommen ohne Aufwand“
- Du sollst **zuerst bezahlen** (Starterpaket, Kurs, Software)
- Druck: „Nur noch heute!“
- Jobs als **Paketweiterleiter** oder „Finanzagent“ – oft Geldwäsche oder Warenbetrug, für die du haftest
- Unrealistische Stundenlöhne für einfache Tätigkeiten
- Schneeballsysteme mit Fokus auf das Anwerben neuer Mitglieder

## Steuern und Anmeldung

Nebeneinkünfte müssen in der Regel **versteuert** werden. Je nach Tätigkeit und Umfang kann eine **Gewerbeanmeldung** nötig sein. In Deutschland und Österreich gibt es unterschiedliche Freibeträge und Regeln. Lass dich im Zweifel beraten und kläre mit dem Arbeitgeber, ob Nebentätigkeiten erlaubt sind.`,
    faq: [
      ["Wie erkenne ich unseriöse Jobangebote?", "Wenn du zuerst Geld zahlen sollst, extrem hohe Verdienste versprochen werden oder Pakete bzw. Geld weiterleiten sollst."],
      ["Muss ich einen Nebenverdienst versteuern?", "In der Regel ja. Es gibt je nach Land und Situation Freibeträge – im Zweifel steuerlich beraten lassen."],
    ],
    sources: [VZ_GELD, AK, { title: "Polizeiliche Kriminalprävention – Betrug im Internet", url: "https://www.polizei-beratung.de/" }],
  },
  {
    path: "finanzen-sparen/online-verdienen/affiliate-marketing-einstieg",
    description: "Affiliate-Marketing Einstieg: Wie Partnerprogramme funktionieren, passende Nischen, Website oder Social Media, Kennzeichnung und realistische Erwartungen.",
    markdown: `Beim **Affiliate-Marketing** empfiehlst du Produkte über spezielle Links und erhältst eine Provision, wenn darüber gekauft wird. Es ist ein seriöses Geschäftsmodell – wenn es ehrlich betrieben wird.

## So funktioniert es

1. **Partnerprogramm** wählen – bei Händlern direkt oder über Affiliate-Netzwerke.
2. **Persönliche Links** erzeugen.
3. **Inhalte erstellen**, in denen du Produkte ehrlich vorstellst.
4. Bei Käufen über deine Links erhältst du eine **Provision**.

## Wo veröffentlichen?

- **Eigene Website oder Blog** mit Ratgebern und Vergleichen (langfristig über Suchmaschinen)
- **YouTube** mit Tests und Tutorials
- **Social Media** und Newsletter

## Nische wählen

Ein Thema, mit dem du dich auskennst und das dich interessiert. Glaubwürdigkeit entsteht durch echtes Wissen und eigene Erfahrung.

## Kennzeichnungspflicht

Affiliate-Links sind **Werbung**. Sie müssen klar gekennzeichnet werden – zum Beispiel mit einem Hinweis und einem Symbol am Link. So machen wir es auch auf der Panda Toolbox.

## Realistische Erwartungen

- Es dauert oft Monate, bis Reichweite und Einnahmen entstehen.
- Provisionen sind je nach Produkt oft nur wenige Prozent.
- Partnerprogramme können Bedingungen ändern.

## Steuern

Provisionen sind Einnahmen. Je nach Umfang ist eine Gewerbeanmeldung nötig, und sie müssen versteuert werden.

Speziell für YouTube und Social Media: siehe „Affiliate für Creator“.`,
    faq: [
      ["Kann man mit Affiliate-Marketing schnell Geld verdienen?", "In der Regel nicht. Es braucht Zeit, hilfreiche Inhalte und Vertrauen der Leser."],
      ["Muss ich ein Gewerbe anmelden?", "Bei regelmäßigen Affiliate-Einnahmen häufig ja. Die Details hängen vom Land und der Situation ab."],
    ],
    sources: [{ title: "Die Medienanstalten – Leitfaden Werbekennzeichnung", url: "https://www.die-medienanstalten.de/" }],
  },
  {
    path: "finanzen-sparen/online-verdienen/digitale-produkte-verkaufen",
    description: "Digitale Produkte verkaufen: Ideen von Vorlagen bis Onlinekurs, Plattformen, Preisgestaltung, Rechtliches wie Widerrufsrecht und Umsatzsteuer.",
    markdown: `Einmal erstellt, oft verkauft: **Digitale Produkte** haben keine Lager- oder Versandkosten. Trotzdem braucht es Arbeit – bei Erstellung, Marketing und Rechtlichem.

## Ideen für digitale Produkte

- **Vorlagen:** Planer, Lebenslauf-Vorlagen, Social-Media-Vorlagen, Tabellen
- **E-Books** und Ratgeber
- **Onlinekurse** und Workshops
- **Grafiken, Fotos, Fonts, Presets**
- **Musik, Samples, Sounds**
- **Malvorlagen und Druckvorlagen**
- **Software, Plugins, Apps**

## Wo verkaufen?

- **Eigene Website** mit Shop-Funktion
- **Spezialisierte Plattformen** für digitale Downloads oder Kurse
- **Marktplätze** für kreative Produkte

Plattformen bringen Reichweite, nehmen aber Gebühren.

## Preis finden

Orientierung an vergleichbaren Produkten, dem Nutzen für Kunden und deinem Aufwand. Einführungsangebote und Bundles sind beliebt.

## Rechtliches (Auswahl)

- **Impressum, AGB und Datenschutzerklärung**
- **Widerrufsrecht:** Bei digitalen Inhalten kann es unter bestimmten Bedingungen vorzeitig erlöschen – die Formalien müssen stimmen.
- **Umsatzsteuer:** Bei Verkäufen an Privatkunden in anderen EU-Ländern gelten besondere Regeln (One-Stop-Shop).
- **Rechte:** Nur eigene oder lizenzierte Inhalte verwenden.

## Marketing

Newsletter, Social Media, Blogartikel und kostenlose Proben (z. B. eine Gratis-Vorlage) helfen, Käufer zu finden.

Lass dich bei rechtlichen und steuerlichen Fragen beraten.`,
    faq: [
      ["Welche digitalen Produkte verkaufen sich gut?", "Produkte, die ein konkretes Problem lösen oder Zeit sparen – etwa Vorlagen, Kurse oder Ratgeber in einer klaren Nische."],
      ["Gilt das Widerrufsrecht bei digitalen Produkten?", "Grundsätzlich ja, es kann aber unter bestimmten Voraussetzungen vorzeitig erlöschen. Die Formalien müssen dafür korrekt umgesetzt sein."],
    ],
    sources: [{ title: "IHK – Recht im Onlinehandel", url: "https://www.ihk.de/" }, { title: "WKO – Onlineshop rechtlich", url: "https://www.wko.at/" }],
  },
  {
    path: "finanzen-sparen/preisvergleiche/preisvergleich-tipps",
    description: "Preisvergleich-Tipps: Vergleichsportale richtig nutzen, Gesamtkosten statt Lockpreis, Preisverläufe, Preisalarme und worauf du bei Händlern achtest.",
    markdown: `Preisvergleiche sparen oft viel Geld – wenn man sie richtig nutzt. Diese Tipps helfen, wirklich das beste Angebot zu finden.

## Vergleichsportale richtig nutzen

Preisvergleichsseiten zeigen viele Händler auf einen Blick. Beachte:
- **Gesamtpreis** inklusive Versand vergleichen.
- **Händlerbewertungen** und Lieferzeiten prüfen.
- Nicht jedes Portal listet alle Händler – mehrere Portale vergleichen.
- Portale finanzieren sich oft über Provisionen. Die Sortierung „empfohlen“ ist nicht immer „am günstigsten“.

## Preisverlauf und Preisalarm

Viele Portale zeigen den **Preisverlauf**. So erkennst du, ob ein „Angebot“ wirklich günstig ist. Mit einem **Preisalarm** wirst du benachrichtigt, wenn der Wunschpreis erreicht ist.

## Gesamtkosten statt Lockpreis

Bei Verträgen (Handy, Strom, Internet) zählen die **Kosten über die gesamte Laufzeit** – inklusive Anschlussgebühren und Preis nach Aktionszeit.

## Vorsicht bei sehr günstigen Shops

- Impressum vorhanden?
- Nur Vorkasse als Zahlungsart?
- Unrealistisch niedrige Preise?

Fake-Shops sind ein häufiges Betrugsmodell. Verbraucherschützer bieten Fake-Shop-Finder an.

## Weitere Spartipps

- Gutscheine und Cashback (Bedingungen prüfen)
- Gebrauchte oder generalüberholte Geräte
- Zum richtigen Zeitpunkt kaufen – z. B. Vorjahresmodelle`,
    faq: [
      ["Sind Vergleichsportale neutral?", "Nicht immer. Viele verdienen an Provisionen. Mehrere Portale nutzen und Gesamtkosten selbst vergleichen."],
      ["Wie erkenne ich einen Fake-Shop?", "Warnzeichen sind fehlendes Impressum, nur Vorkasse, extrem niedrige Preise und auffällige Webadressen. Fake-Shop-Finder von Verbraucherschützern helfen."],
    ],
    sources: [VZ_GELD, { title: "Watchlist Internet – Fake-Shops (Österreich)", url: "https://www.watchlist-internet.at/" }],
  },
  {
    path: "finanzen-sparen/preisvergleiche/kostenlose-finanz-tools",
    description: "Kostenlose Finanz-Tools: Haushaltsbuch-Apps, Rechner, Vergleichsportale und Banking-Funktionen – welche Werkzeuge beim Geldmanagement helfen.",
    markdown: `Für einen guten Überblick über die Finanzen braucht es keine teure Software. Viele **kostenlose Tools** leisten gute Dienste.

## Haushaltsbuch und Budget

- **Tabellen** – selbst angelegt oder als Vorlage
- **Haushaltsbuch-Apps** – manche verbinden sich mit dem Bankkonto (Datenschutz prüfen!)
- Unser **Budget-Rechner** für einen schnellen Überblick

## Banking-Funktionen

Viele Banking-Apps bieten schon:
- automatische **Kategorisierung** von Ausgaben
- **Unterkonten** oder Sparziele
- **Benachrichtigungen** bei Abbuchungen

## Rechner

- Unsere **Online-Rechner**: Budget, Prozent, Strom, Sprit
- **Rechner der Verbraucherzentralen** bzw. Arbeiterkammer, z. B. zu Krediten oder Altersvorsorge
- **Brutto-Netto-Rechner**

## Vergleiche

Vergleichsportale für Strom, Gas, Versicherungen und Konten – siehe „Preisvergleich-Tipps“. Unabhängige Testmagazine und Verbraucherschützer bieten zusätzliche Orientierung.

## Sicherheit

- Apps nur aus offiziellen Stores laden.
- **Zwei-Faktor-Authentisierung** aktivieren.
- Keine Zugangsdaten an unbekannte Dienste weitergeben.
- Bei Kontoverknüpfungen prüfen, wer Zugriff bekommt.

Mehr zum Thema Budget unter „Haushaltsbudget erstellen“.`,
    faq: [
      ["Sind Haushaltsbuch-Apps sicher?", "Seriöse Apps verschlüsseln Daten. Prüfe Anbieter, Datenschutz und Berechtigungen – besonders, wenn sie auf dein Bankkonto zugreifen."],
      ["Gibt es unabhängige Finanzrechner?", "Ja, zum Beispiel bei Verbraucherzentralen und der Arbeiterkammer."],
    ],
    sources: [VZ_GELD, AK],
  },
];
