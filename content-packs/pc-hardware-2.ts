import type { PackGroup } from "./types";

const SRC = {
  bsi: { title: "BSI – Bundesamt für Sicherheit in der Informationstechnik: Verbraucherinformationen", url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html" },
  bsiBackup: { title: "BSI – Informationen und Empfehlungen für Verbraucher (u. a. Datensicherung)", url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html" },
  bsiPhishing: { title: "BSI – Verbraucherinformationen zu Spam, Phishing & Co.", url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html" },
  vz: { title: "Verbraucherzentrale – Digitale Welt", url: "https://www.verbraucherzentrale.de/wissen/digitale-welt" },
  ms: { title: "Microsoft Support – Windows", url: "https://support.microsoft.com/de-de/windows" },
  msUpdate: { title: "Microsoft Support – Windows Update und Treiber", url: "https://support.microsoft.com/de-de/windows" },
  nvidia: { title: "NVIDIA – Treiber", url: "https://www.nvidia.com/de-de/drivers/" },
  amd: { title: "AMD – Treiber und Support", url: "https://www.amd.com/de/support" },
  intel: { title: "Intel – Support, Treiber und Produktdaten", url: "https://www.intel.de/content/www/de/de/support.html" },
  vesa: { title: "VESA – DisplayHDR und DisplayPort Standards", url: "https://vesa.org/" },
};

export const pcGroupsPart2: PackGroup[] = [
  /* ================================================================ */
  {
    slug: "zubehoer",
    title: "Zubehör & Peripherie",
    description: "Monitor, Gaming-Maus und mechanische Tastatur: worauf es bei Zubehör wirklich ankommt – verständlich erklärt.",
    pages: [
      {
        slug: "monitor-kaufen",
        title: "Monitor kaufen: Größe, Auflösung, Hz und Panel",
        label: "Monitor kaufen",
        pageType: "money",
        description:
          "Monitor kaufen ohne Fehlgriff: Größe, Auflösung, Bildwiederholrate, Paneltyp, Anschlüsse und Ergonomie – alles, was du wissen musst.",
        focusKeyword: "Monitor kaufen",
        linkAnchors: ["Monitor kaufen", "Monitor", "Gaming-Monitor"],
        markdown: `Wer einen **Monitor kaufen** möchte, schaut auf Zoll, Hertz und Panel-Abkürzungen. Wichtig ist, dass Größe, Auflösung und Bildwiederholrate zu deinem Sitzabstand, deinem PC und deiner Nutzung passen.

## Größe und Auflösung gehören zusammen

- **24 Zoll mit Full HD (1920 × 1080):** klassisch für Büro und schnelle Spiele.
- **27 Zoll mit WQHD (2560 × 1440):** für viele der beste Kompromiss aus Schärfe und Leistungsbedarf.
- **27–32 Zoll mit 4K (3840 × 2160):** sehr scharf für Fotos, Text und Filme, braucht für Spiele aber viel Grafikleistung.

Faustregel: Je größer der Monitor, desto höher sollte die Auflösung sein, damit Schrift nicht pixelig wirkt.

## Bildwiederholrate (Hz)

Die **Bildwiederholrate** gibt an, wie oft pro Sekunde das Bild erneuert wird. 60 Hz reichen für Büro und Filme. Für Spiele wirken 120 Hz und mehr deutlich flüssiger. Damit das etwas bringt, muss die Grafikkarte entsprechend viele Bilder liefern.

**Adaptive Synchronisation** (G-SYNC, FreeSync oder VESA Adaptive-Sync) passt die Bildwiederholrate an die Grafikkarte an und verhindert Bildreißen.

## Paneltypen

- **IPS:** gute Farben und Blickwinkel – solide Allround-Wahl.
- **VA:** hoher Kontrast, sattes Schwarz, gut für Filme und dunkle Spiele.
- **TN:** sehr schnell, aber schwächere Farben und Blickwinkel.
- **OLED:** perfektes Schwarz und sehr schnelle Reaktion. Bei sehr lange statischen Bildelementen ist Einbrennen ein Thema; viele Geräte haben Schutzfunktionen.

## Anschlüsse

Für hohe Hz-Zahlen und Auflösungen sind **DisplayPort** und aktuelles **HDMI** wichtig. **USB-C mit Displayfunktion** ist praktisch für Laptops: Ein Kabel überträgt Bild, Daten und oft auch Strom.

## Ergonomie nicht vergessen

Ein höhenverstellbarer, neigbarer Standfuß oder eine VESA-Halterung schont Nacken und Rücken. Die Oberkante des Bildschirms sollte etwa auf Augenhöhe liegen.`,
        faq: [
          {
            q: "Lohnt sich ein 144-Hz-Monitor auch ohne Gaming?",
            a: "Auch beim Scrollen und Bewegen von Fenstern wirkt eine hohe Bildwiederholrate angenehm flüssig. Nötig ist sie im Büro aber nicht.",
          },
          {
            q: "Welches Kabel brauche ich für hohe Hz-Zahlen?",
            a: "Meist DisplayPort oder ein aktuelles HDMI-Kabel. Welche Kombination aus Auflösung und Hz über welchen Anschluss geht, steht im Datenblatt des Monitors.",
          },
        ],
        comparison: {
          title: "Paneltypen im Vergleich",
          columns: ["IPS", "VA", "TN", "OLED"],
          rows: [
            { label: "Farben", values: ["sehr gut", "gut", "mittel", "sehr gut"] },
            { label: "Kontrast", values: ["mittel", "hoch", "niedrig", "sehr hoch"] },
            { label: "Blickwinkel", values: ["sehr gut", "gut", "eingeschränkt", "sehr gut"] },
            { label: "Reaktionszeit", values: ["schnell", "mittel", "sehr schnell", "sehr schnell"] },
            { label: "Geeignet für", values: ["Allround", "Filme, dunkle Spiele", "schnelle Shooter", "Filme, Gaming"] },
          ],
          note: "Allgemeine Tendenzen – einzelne Modelle können abweichen. Unabhängige Tests helfen bei der Auswahl.",
        },
        sources: [SRC.vesa, SRC.nvidia, SRC.amd],
      },
      {
        slug: "gaming-maus",
        title: "Gaming-Maus: worauf es ankommt",
        label: "Gaming-Maus",
        pageType: "money",
        description:
          "Gaming-Maus finden: Form, Gewicht, Sensor, DPI, Polling-Rate und kabellos oder Kabel – so wählst du die Maus, die zu deiner Hand passt.",
        focusKeyword: "Gaming-Maus",
        linkAnchors: ["Gaming-Maus", "Maus"],
        markdown: `Bei einer **Gaming-Maus** zählt vor allem eins: Sie muss zu deiner Hand und deinem Griff passen. Technische Werte sind bei aktuellen Modellen meist mehr als ausreichend – die Form entscheidet über Komfort und Kontrolle.

## Form und Griffart

- **Palm Grip:** die ganze Hand liegt auf – größere, ergonomische Mäuse passen gut.
- **Claw Grip:** Handballen hinten, Finger gekrümmt – mittlere Größe mit erhöhtem Rücken.
- **Fingertip Grip:** nur die Fingerspitzen berühren die Maus – kleine, leichte Modelle.

Achte auch darauf, ob die Maus für **Rechts- oder Linkshänder** geformt oder symmetrisch ist.

## Gewicht

Leichte Mäuse lassen sich schneller bewegen und ermüden weniger, besonders in schnellen Spielen. Schwerere Mäuse fühlen sich für manche ruhiger an. Probiere wenn möglich aus, was dir liegt.

## Sensor, DPI und Polling-Rate

- **Sensor:** Moderne optische Sensoren sind sehr präzise; Aussetzer sind bei Markenmäusen selten.
- **DPI:** gibt an, wie weit sich der Mauszeiger pro Zentimeter Bewegung bewegt. Sehr hohe Werte sind Marketing – viele spielen mit niedrigen bis mittleren Einstellungen.
- **Polling-Rate:** wie oft pro Sekunde die Maus ihre Position meldet. Ein höherer Wert verringert die Verzögerung leicht, kostet aber bei kabellosen Mäusen Akku.

## Kabellos oder mit Kabel?

Gute kabellose Mäuse mit eigenem Funkempfänger sind heute so schnell wie kabelgebundene. Bluetooth ist für Büro und Laptop praktisch, für Spiele aber oft etwas träger. Kabelgebundene Mäuse brauchen nie geladen zu werden.

## Tasten und Software

Zusätzliche Daumentasten sind praktisch, sehr viele Tasten eher für Strategie- und Rollenspiele. Prüfe, ob sich Einstellungen auf der Maus speichern lassen – dann brauchst du die Hersteller-Software nicht auf jedem PC.`,
        faq: [
          {
            q: "Wie viel DPI brauche ich zum Spielen?",
            a: "Weniger als die Werbung vermuten lässt. Viele spielen mit niedrigen bis mittleren Werten und stellen die Feinheit im Spiel ein. Wichtiger ist eine gleichbleibende Einstellung.",
          },
          {
            q: "Sind kabellose Gaming-Mäuse langsamer?",
            a: "Modelle mit eigenem Funkempfänger sind heute praktisch so schnell wie kabelgebundene. Über Bluetooth ist die Verzögerung meist etwas höher.",
          },
        ],
      },
      {
        slug: "mechanische-tastatur",
        title: "Mechanische Tastatur: Switches, Layout und Größe",
        label: "Mechanische Tastatur",
        pageType: "money",
        description:
          "Mechanische Tastatur verstehen: lineare, taktile und klickende Switches, Größen wie TKL und 75 %, Hot-Swap und deutsches Layout erklärt.",
        focusKeyword: "mechanische Tastatur",
        linkAnchors: ["mechanische Tastatur", "Tastatur"],
        markdown: `Eine **mechanische Tastatur** hat unter jeder Taste einen eigenen Schalter, den sogenannten **Switch**. Das sorgt für ein präzises Tippgefühl und eine lange Lebensdauer. Welche Tastatur zu dir passt, hängt vor allem von Switches, Größe und Layout ab.

## Die drei Switch-Arten

- **Linear:** gleichmäßiger Widerstand ohne spürbaren Punkt. Beliebt bei Spielern, weil schnelle Mehrfachanschläge leichtfallen.
- **Taktil:** ein spürbarer Widerstandspunkt zeigt an, dass die Taste ausgelöst hat. Angenehm zum Schreiben.
- **Klickend:** taktil plus hörbares Klicken. Macht Spaß, kann aber Mitbewohner, Kollegen oder das Mikrofon stören.

Außerdem unterscheiden sich Switches in der **Betätigungskraft** und im **Auslöseweg**. Manche Tastaturen nutzen magnetische oder optische Schalter mit einstellbarem Auslösepunkt.

## Größen und Formate

- **Full Size (100 %):** mit Ziffernblock – ideal für Zahlenarbeit.
- **TKL (ca. 80 %):** ohne Ziffernblock, mehr Platz für die Maus.
- **75 % und 65 %:** kompakter, Pfeiltasten bleiben erhalten.
- **60 %:** sehr kompakt, viele Funktionen nur über eine Zweitebene.

## Deutsches Layout (ISO-DE)

Achte auf **QWERTZ** im deutschen **ISO-Layout** mit großer Enter-Taste und Umlauten. Viele günstige Tastaturen gibt es nur im US-Layout (ANSI) – das ist für deutsche Texte umständlich.

## Hot-Swap

Bei **Hot-Swap**-Tastaturen kannst du die Switches ohne Löten herausziehen und tauschen. Ideal, wenn du verschiedene Schalter ausprobieren oder einen defekten ersetzen willst.

## Weitere Ausstattung

- **Kabellos:** per Funkempfänger oder Bluetooth, oft mit mehreren Geräten koppelbar.
- **Tastenkappen:** PBT-Kunststoff glänzt mit der Zeit weniger als ABS.
- **Beleuchtung:** hilfreich im Dunkeln, aber Geschmackssache.
- **Handballenauflage:** entlastet die Handgelenke bei höheren Tastaturen.`,
        faq: [
          {
            q: "Welche Switches sind am besten zum Spielen?",
            a: "Viele Spieler bevorzugen lineare Switches, weil sie sich gleichmäßig und schnell drücken lassen. Am Ende ist es Geschmackssache – Switch-Tester helfen beim Ausprobieren.",
          },
          {
            q: "Sind mechanische Tastaturen laut?",
            a: "Klickende Switches ja, lineare und taktile deutlich weniger. Leise Varianten mit Dämpfung sind gut fürs Büro oder Streaming.",
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  {
    slug: "software-tuning",
    title: "Software & Tuning",
    description: "PC schneller machen und Treiber sicher aktualisieren: praktische Tipps für Windows, ganz ohne dubiose Tuning-Tools.",
    pages: [
      {
        slug: "pc-schneller-machen",
        title: "PC schneller machen: 10 Tipps, die wirklich helfen",
        label: "PC schneller machen",
        pageType: "traffic",
        description:
          "PC schneller machen ohne Zusatztools: Autostart aufräumen, Updates, Speicherplatz, Energieoptionen und Hardware-Upgrades, die wirklich helfen.",
        focusKeyword: "PC schneller machen",
        linkAnchors: ["PC schneller machen", "PC beschleunigen"],
        markdown: `Dein Rechner fühlt sich zäh an? Bevor du an einen Neukauf denkst, kannst du deinen **PC schneller machen** – meist mit Bordmitteln von Windows und ohne zusätzliche Software. Diese Tipps sind nach Aufwand sortiert.

## Schnelle Maßnahmen

1. **Neu starten.** Klingt banal, beendet aber hängende Prozesse und schließt Updates ab.
2. **Autostart aufräumen.** Im Task-Manager unter „Autostart-Apps“ alles deaktivieren, was nicht sofort beim Start laufen muss.
3. **Windows und Treiber aktualisieren.** Updates beheben Fehler und Leistungsprobleme. Nutze Windows Update und die Seiten der Hersteller.
4. **Speicherplatz freigeben.** Eine fast volle Systemplatte bremst. Die Windows-Funktion „Speicheroptimierung“ entfernt temporäre Dateien automatisch.
5. **Unnötige Programme deinstallieren.** Besonders vorinstallierte Testversionen und Toolbars.

## Mittlerer Aufwand

6. **Energieeinstellungen prüfen.** Bei Laptops im Netzbetrieb den Modus „Beste Leistung“ wählen.
7. **Browser entrümpeln.** Viele Erweiterungen und Dutzende offene Tabs kosten Arbeitsspeicher.
8. **Auf Schadsoftware prüfen.** Ein vollständiger Scan mit der Windows-Sicherheit schließt ungebetene Gäste als Ursache aus.
9. **Temperaturen im Blick behalten.** Ein verstaubter PC drosselt seine Leistung, wenn er zu heiß wird. Mehr dazu im Ratgeber PC reinigen.

## Hardware-Upgrades mit großer Wirkung

10. **SSD statt Festplatte.** Läuft Windows noch auf einer HDD, ist der Umstieg auf eine SSD das wirkungsvollste Upgrade überhaupt. Danach hilft oft **mehr Arbeitsspeicher**, wenn der Task-Manager eine dauerhaft hohe Speicherauslastung zeigt.

## Finger weg von „Tuning-Wundertools“

Programme, die versprechen, deinen PC „mit einem Klick doppelt so schnell“ zu machen, bringen selten etwas – manche verursachen sogar Probleme oder sind Werbung für kostenpflichtige Abos. Registry-Cleaner sind für moderne Windows-Versionen nicht nötig.`,
        faq: [
          {
            q: "Bringt Defragmentieren etwas?",
            a: "Bei Festplatten (HDD) kann es helfen, Windows erledigt das aber automatisch. SSDs werden nicht defragmentiert, sondern von Windows mit dem TRIM-Befehl optimiert.",
          },
          {
            q: "Brauche ich ein Tuning-Programm?",
            a: "In der Regel nicht. Die Bordmittel von Windows – Task-Manager, Speicheroptimierung und Windows Update – erledigen das Wichtigste.",
          },
        ],
        sources: [SRC.msUpdate],
      },
      {
        slug: "treiber-aktualisieren",
        title: "Treiber aktualisieren: sicher und richtig",
        label: "Treiber aktualisieren",
        pageType: "traffic",
        description:
          "Treiber aktualisieren leicht gemacht: Windows Update, Grafikkartentreiber von NVIDIA, AMD und Intel, Mainboard-Treiber und was du vermeiden solltest.",
        focusKeyword: "Treiber aktualisieren",
        linkAnchors: ["Treiber aktualisieren", "Treiber", "Grafiktreiber"],
        markdown: `**Treiber** sind kleine Programme, die Windows erklären, wie es mit deiner Hardware sprechen soll. Aktuelle Treiber beheben Fehler, schließen Sicherheitslücken und bringen bei Grafikkarten oft mehr Leistung. So kannst du deine **Treiber aktualisieren**, ohne dir Probleme einzuhandeln.

## 1. Windows Update zuerst

Windows Update liefert für die meisten Geräte passende Treiber automatisch. Unter „Erweiterte Optionen“ findest du zusätzlich **optionale Updates**, darunter manchmal Treiber. Installiere sie, wenn du ein konkretes Problem mit dem Gerät hast.

## 2. Grafiktreiber direkt vom Hersteller

Für Spiele lohnen sich die aktuellen Treiber direkt vom Hersteller deiner Grafikkarte:

- **NVIDIA:** Treiber-Seite oder die NVIDIA-App.
- **AMD:** AMD Software: Adrenalin Edition.
- **Intel:** Intel Treiber- und Support-Assistent.

Welche Grafikkarte du hast, zeigt der Geräte-Manager unter „Grafikkarten“ (in Windows teils „Grafikadapter“).

## 3. Mainboard- und Chipsatztreiber

Chipsatz-, Netzwerk- und Audiotreiber findest du auf der **Support-Seite deines Mainboards** oder bei Fertig-PCs und Laptops beim **Gerätehersteller**. Gib dort die genaue Modellbezeichnung ein.

## 4. BIOS-Updates nur bei Bedarf

Ein BIOS- bzw. UEFI-Update kann Unterstützung für neue Prozessoren bringen oder Sicherheitslücken schließen. Es birgt aber ein kleines Risiko: Fällt währenddessen der Strom aus, kann das Mainboard Schaden nehmen. Führe es nur durch, wenn der Hersteller es empfiehlt oder du einen konkreten Grund hast, und befolge seine Anleitung genau.

## Was du vermeiden solltest

- **Treiber-Updater von Drittanbietern:** Sie installieren teils unpassende Treiber oder bringen Werbung mit.
- **Downloads von fremden Seiten:** Lade Treiber nur bei Microsoft oder dem Hardware-Hersteller herunter.

## Wenn ein neuer Treiber Probleme macht

Im **Geräte-Manager** kannst du beim betroffenen Gerät unter „Eigenschaften → Treiber“ die Option „Vorheriger Treiber“ wählen. Bei Grafiktreibern hilft auch eine Neuinstallation der vorherigen Version.`,
        faq: [
          {
            q: "Wie oft sollte ich Treiber aktualisieren?",
            a: "Windows Update läuft automatisch. Grafiktreiber lohnen sich besonders vor neuen Spielen. Andere Treiber musst du meist nur bei Problemen aktualisieren.",
          },
          {
            q: "Sind Treiber-Update-Programme sicher?",
            a: "Davon raten wir ab. Lade Treiber besser direkt über Windows Update oder von der Website des Hardware-Herstellers.",
          },
        ],
        sources: [SRC.msUpdate, SRC.nvidia, SRC.amd, SRC.intel],
      },
    ],
  },

  /* ================================================================ */
  {
    slug: "sicherheit-backup",
    title: "Sicherheit & Backup",
    description: "Daten sichern mit der 3-2-1-Regel und den PC vor Viren und Phishing schützen – einfach erklärt und mit Empfehlungen des BSI.",
    pages: [
      {
        slug: "backup-3-2-1-regel",
        title: "Backup mit der 3-2-1-Regel",
        label: "3-2-1-Backup",
        pageType: "money",
        description:
          "Backup mit der 3-2-1-Regel: drei Kopien, zwei Speichermedien, eine Kopie außer Haus. So sicherst du Fotos und Dokumente zuverlässig.",
        focusKeyword: "Backup",
        linkAnchors: ["Backup", "3-2-1-Regel", "Daten sichern"],
        markdown: `Ein Festplattendefekt, ein verlorener Laptop oder Erpressersoftware – und plötzlich sind Fotos und Dokumente weg. Ein regelmäßiges **Backup** schützt davor. Die **3-2-1-Regel** ist ein einfacher und bewährter Plan dafür.

## Die 3-2-1-Regel

- **3 Kopien** deiner wichtigen Daten: das Original plus zwei Sicherungen.
- **2 verschiedene Speichermedien:** zum Beispiel interne SSD und externe Festplatte.
- **1 Kopie außer Haus:** etwa in einem Cloud-Speicher oder auf einer Festplatte bei Familie oder Freunden.

So schützt du dich nicht nur vor einem Hardwaredefekt, sondern auch vor Diebstahl, Brand oder Wasserschaden.

## Was solltest du sichern?

- Fotos und Videos
- Dokumente, Verträge, Steuerunterlagen
- Projekte, Spielstände und Einstellungen, die dir wichtig sind
- Passwort-Datenbank (verschlüsselt)

Programme und Windows selbst lassen sich neu installieren – deine persönlichen Daten nicht.

## Möglichkeiten für ein Backup

1. **Externe Festplatte oder SSD:** einfach und schnell. Windows bringt mit dem Dateiversionsverlauf und der Windows-Sicherung bereits Werkzeuge mit.
2. **Cloud-Speicher:** schützt vor Verlust am Wohnort. Achte auf Anbieter mit Serverstandort in der EU und aktiviere die Zwei-Faktor-Anmeldung.
3. **NAS (Netzwerkspeicher):** ein kleiner Server im Heimnetz, der automatische Sicherungen für mehrere Geräte übernimmt.

## Wichtig: Synchronisation ist kein Backup

Ein Cloud-Ordner, der Dateien nur **synchronisiert**, löscht oder verschlüsselt sie im Zweifel überall gleichzeitig. Ein echtes Backup hält ältere **Versionen** vor, sodass du auf einen früheren Stand zurückgehen kannst.

## Backups regelmäßig prüfen

Ein Backup ist nur so gut wie die Wiederherstellung. Teste gelegentlich, ob du einzelne Dateien zurückholen kannst. Trenne die externe Festplatte nach der Sicherung vom PC, damit Schadsoftware sie nicht mitverschlüsselt.`,
        faq: [
          {
            q: "Wie oft sollte ich ein Backup machen?",
            a: "So oft, wie du einen Datenverlust verschmerzen kannst. Für die meisten ist ein automatisches tägliches oder wöchentliches Backup sinnvoll.",
          },
          {
            q: "Reicht ein Cloud-Speicher als Backup?",
            a: "Nur, wenn er ältere Versionen speichert und du zusätzlich eine zweite Kopie hast. Reine Synchronisation überträgt auch Löschungen und Verschlüsselungen.",
          },
        ],
        comparison: {
          title: "Backup-Möglichkeiten im Vergleich",
          columns: ["Externe Festplatte", "Cloud-Speicher", "NAS"],
          rows: [
            { label: "Schutz bei Defekt", values: ["ja", "ja", "ja"] },
            { label: "Schutz bei Brand/Diebstahl", values: ["nur außer Haus gelagert", "ja", "nein (außer mit Zweitstandort)"] },
            { label: "Automatisierung", values: ["mittel", "hoch", "hoch"] },
            { label: "Einrichtung", values: ["einfach", "einfach", "anspruchsvoller"] },
            { label: "Laufende Kosten", values: ["keine", "meist Abo", "Strom, Festplatten"] },
          ],
          note: "Am sichersten ist eine Kombination nach der 3-2-1-Regel.",
        },
        sources: [SRC.bsiBackup, SRC.ms],
      },
      {
        slug: "schutz-vor-viren-und-phishing",
        title: "PC schützen: Viren, Phishing und Passwörter",
        label: "Schutz vor Viren & Phishing",
        pageType: "traffic",
        description:
          "PC schützen vor Viren und Phishing: Updates, Virenschutz, sichere Passwörter, Zwei-Faktor-Anmeldung und typische Warnzeichen erkennen.",
        focusKeyword: "Phishing",
        linkAnchors: ["Phishing", "Viren", "PC schützen"],
        markdown: `Die meisten Angriffe auf private PCs sind keine Hollywood-Hacks, sondern nutzen alte Sicherheitslücken oder Unachtsamkeit – etwa ein Klick auf einen Link in einer gefälschten E-Mail. Mit ein paar Gewohnheiten schützt du dich vor **Viren** und **Phishing** sehr wirksam.

## 1. Updates sofort installieren

Updates für Windows, Browser und Programme schließen Sicherheitslücken. Aktiviere automatische Updates und starte den PC regelmäßig neu, damit sie installiert werden.

## 2. Virenschutz aktiv lassen

Windows bringt mit der **Windows-Sicherheit** (Microsoft Defender) einen Virenschutz mit, der für viele ausreicht. Wichtig ist, dass überhaupt ein aktueller Schutz läuft – zwei Virenscanner gleichzeitig behindern sich eher.

## 3. Phishing erkennen

**Phishing** sind gefälschte E-Mails, SMS oder Websites, die an Passwörter oder Zahlungsdaten gelangen wollen. Typische Warnzeichen:

- **Druck und Drohung:** „Ihr Konto wird gesperrt, handeln Sie sofort!“
- **Unpassende Absenderadresse** oder seltsame Links. Fahre mit der Maus über den Link, um das echte Ziel zu sehen.
- **Aufforderung, Daten einzugeben** – seriöse Banken und Dienste fragen nie per E-Mail nach Passwörtern oder TANs.
- **Unerwartete Anhänge**, besonders Archive oder Office-Dateien mit Makros.

Im Zweifel: Link nicht anklicken, sondern die Website selbst über die bekannte Adresse aufrufen oder beim Anbieter nachfragen.

## 4. Starke Passwörter und Passwort-Manager

Nutze für jeden Dienst ein **eigenes, langes Passwort**. Ein **Passwort-Manager** merkt sie sich für dich. Wo möglich, aktivierst du zusätzlich die **Zwei-Faktor-Authentisierung** oder **Passkeys** – dann reicht ein gestohlenes Passwort allein nicht mehr.

## 5. Software nur aus sicheren Quellen

Lade Programme nur von der Website des Herstellers oder aus offiziellen Stores. „Gecrackte“ Software und dubiose Download-Portale sind ein häufiger Weg für Schadsoftware.

## 6. Backups als Rettungsanker

Falls doch etwas passiert – etwa durch Erpressersoftware –, rettet dich ein aktuelles Backup. Wie das geht, erklärt unser Ratgeber zur 3-2-1-Regel.

## Wenn es passiert ist

Ändere betroffene Passwörter von einem sauberen Gerät aus, informiere bei Zahlungsdaten sofort deine Bank und erstatte bei Betrug Anzeige bei der Polizei.`,
        faq: [
          {
            q: "Reicht der Windows-Virenschutz aus?",
            a: "Für viele Privatnutzer ja, sofern er aktiv ist und Windows aktuell gehalten wird. Wichtiger als das Produkt sind Updates, Vorsicht bei Links und Backups.",
          },
          {
            q: "Was mache ich, wenn ich auf einen Phishing-Link geklickt habe?",
            a: "Keine Daten eingeben. Hast du schon etwas eingegeben, ändere sofort das Passwort, kontrolliere das Konto und informiere bei Zahlungsdaten deine Bank.",
          },
        ],
        sources: [SRC.bsiPhishing, SRC.vz, SRC.ms],
      },
    ],
  },

  /* ================================================================ */
  {
    slug: "pflege-probleme",
    title: "Pflege & Probleme",
    description: "PC reinigen, Überhitzung vermeiden und Fehler finden, wenn der PC nicht startet – Schritt-für-Schritt-Hilfe für typische Probleme.",
    pages: [
      {
        slug: "pc-reinigen",
        title: "PC reinigen: Staub entfernen ohne Risiko",
        label: "PC reinigen",
        pageType: "traffic",
        description:
          "PC reinigen ohne Risiko: So entfernst du Staub aus Lüftern, Kühlern und Filtern richtig – mit Druckluft, Pinsel und den richtigen Handgriffen.",
        focusKeyword: "PC reinigen",
        linkAnchors: ["PC reinigen", "Staub entfernen"],
        markdown: `Staub ist der stille Feind jedes Computers. Er verstopft Lüfter und Kühler, sodass der PC lauter und heißer wird und seine Leistung drosselt. Wer seinen **PC reinigen** möchte, braucht nur wenig Werkzeug – und etwas Vorsicht.

## Wie oft reinigen?

Je nach Umgebung **alle drei bis zwölf Monate**. Haustiere, Teppich und Raucherhaushalte beschleunigen die Verstaubung. Ein Blick auf die Staubfilter zeigt dir, wann es Zeit ist.

## Das brauchst du

- Druckluft (Dose oder elektrisches Druckluftgebläse)
- weicher, trockener Pinsel
- Mikrofasertuch
- Kreuzschlitz-Schraubendreher

## Schritt für Schritt

1. **PC ausschalten und vom Strom trennen.** Den Netzschalter am Netzteil ausschalten und das Kabel ziehen.
2. **Nach draußen oder ans offene Fenster.** Der Staub muss irgendwohin.
3. **Seitenteil abnehmen** und vor dem Arbeiten ein geerdetes Metallteil anfassen.
4. **Staubfilter reinigen.** Herausnehmen, ausklopfen oder ausspülen und vollständig trocknen lassen.
5. **Lüfter festhalten**, bevor du sie mit Druckluft ausbläst. Ein frei drehender Lüfter kann sonst so schnell werden, dass er Schaden nimmt.
6. **Kühlrippen von CPU-Kühler und Grafikkarte** in kurzen Stößen ausblasen. Hartnäckigen Staub mit dem Pinsel lösen.
7. **Netzteil nur von außen** durch das Lüftergitter ausblasen – das Netzteil niemals öffnen.
8. **Zusammenbauen und testen.**

## Das solltest du lassen

- **Staubsauger direkt an den Bauteilen:** Er kann statische Ladung erzeugen und kleine Teile ansaugen.
- **Feuchte Tücher im Inneren.**
- **Druckluftdose auf den Kopf stellen:** Dann kann flüssiges, sehr kaltes Treibmittel austreten.

## Laptop reinigen

Bei Laptops kannst du die Lüftungsschlitze vorsichtig mit Druckluft ausblasen. Ein Öffnen des Gehäuses kann die Garantie betreffen – schau vorher in die Unterlagen des Herstellers.`,
        faq: [
          {
            q: "Kann ich meinen PC mit dem Staubsauger reinigen?",
            a: "Im Inneren besser nicht: Staubsauger können statische Ladung erzeugen und kleine Teile ansaugen. Für Staubfilter und das Gehäuse außen ist er dagegen in Ordnung.",
          },
          {
            q: "Muss ich die Wärmeleitpaste beim Reinigen erneuern?",
            a: "Nur, wenn du den Kühler abnimmst oder die Temperaturen trotz Reinigung zu hoch bleiben. Im Normalfall hält die Paste viele Jahre.",
          },
        ],
        sources: [SRC.ms],
      },
      {
        slug: "pc-ueberhitzt",
        title: "PC überhitzt: Ursachen und Lösungen",
        label: "PC überhitzt",
        pageType: "traffic",
        description:
          "PC überhitzt oder wird laut? So prüfst du Temperaturen, findest die Ursache und bringst Prozessor und Grafikkarte zuverlässig wieder auf Normalwerte.",
        focusKeyword: "PC überhitzt",
        linkAnchors: ["PC überhitzt", "Überhitzung"],
        markdown: `Wird dein Rechner plötzlich laut, ruckelt in Spielen oder schaltet sich sogar von selbst ab, steckt oft **Überhitzung** dahinter. Moderne Prozessoren und Grafikkarten schützen sich selbst, indem sie ihre Leistung drosseln – oder im Extremfall abschalten. So findest du heraus, warum dein **PC überhitzt**.

## Typische Anzeichen

- Lüfter drehen dauerhaft laut hoch.
- Spiele ruckeln nach einiger Zeit, obwohl sie anfangs flüssig liefen.
- Der PC startet unter Last plötzlich neu oder schaltet ab.
- Das Gehäuse oder die Unterseite des Laptops wird sehr heiß.

## Temperaturen prüfen

Der **Task-Manager** von Windows zeigt bei vielen Grafikkarten die GPU-Temperatur im Bereich „Leistung“ an. Für Prozessortemperaturen helfen die Software des Mainboard-Herstellers oder bekannte Hardware-Monitoring-Tools. Welche Temperaturen für deinen Prozessor oder deine Grafikkarte maximal zulässig sind, nennt der Hersteller im Datenblatt.

## Die häufigsten Ursachen

1. **Staub in Lüftern, Kühlern und Filtern.** Die häufigste Ursache – die Lösung steht im Ratgeber PC reinigen.
2. **Schlechte Luftzirkulation.** Lüfter sollten vorne bzw. unten frische Luft ansaugen und hinten bzw. oben warme Luft abführen.
3. **Ausgefallener Lüfter.** Prüfe bei geöffnetem Gehäuse, ob alle Lüfter drehen.
4. **Ausgetrocknete Wärmeleitpaste** bei älteren Systemen.
5. **Ungünstiger Standort:** PC in einem geschlossenen Schrank, direkt an der Heizung oder Laptop auf Bett und Sofa.

## Lösungen

- Gehäuse und Kühler **reinigen**.
- Den PC frei stellen, mit etwas Abstand zur Wand.
- **Lüfterkurven** im BIOS oder in der Hersteller-Software anpassen.
- Bei älteren PCs die **Wärmeleitpaste erneuern** oder einen stärkeren Kühler einbauen.
- Laptops auf einer harten, ebenen Fläche nutzen; ein Laptop-Ständer verbessert die Luftzufuhr.

## Wann zum Fachmann?

Schaltet der PC trotz sauberer Kühlung ab, riecht es verbrannt oder siehst du verfärbte Bauteile, trenne ihn vom Strom und lass ihn prüfen.`,
        faq: [
          {
            q: "Wie heiß darf ein Prozessor werden?",
            a: "Das hängt vom Modell ab. Der Hersteller nennt eine maximale Temperatur im Datenblatt; bei Erreichen drosselt der Prozessor automatisch. Dauerhaft deutlich darunter zu bleiben, verlängert die Lebensdauer und senkt die Lautstärke.",
          },
          {
            q: "Hilft ein Laptop-Kühlpad?",
            a: "Es kann die Temperaturen etwas senken, vor allem bei Geräten mit Lüftungsöffnungen an der Unterseite. Sauber sein müssen die Lüfter trotzdem.",
          },
        ],
        sources: [SRC.intel, SRC.amd, SRC.ms],
      },
      {
        slug: "pc-startet-nicht",
        title: "PC startet nicht: Fehlersuche Schritt für Schritt",
        label: "PC startet nicht",
        pageType: "traffic",
        description:
          "PC startet nicht? Unsere Fehlersuche führt dich von Strom und Kabeln über RAM und Grafikkarte bis zu Windows-Reparatur – Schritt für Schritt.",
        focusKeyword: "PC startet nicht",
        linkAnchors: ["PC startet nicht", "Fehlersuche"],
        markdown: `Du drückst den Einschaltknopf – und nichts passiert. Oder die Lüfter drehen, aber der Bildschirm bleibt schwarz. Heißt es „**PC startet nicht**“, steckt oft eine Kleinigkeit dahinter. Geh die Schritte der Reihe nach durch.

## Fall 1: Gar keine Reaktion

1. **Steckdose und Steckerleiste prüfen** – mit einem anderen Gerät testen.
2. **Netzschalter am Netzteil** auf der Rückseite einschalten.
3. **Stromkabel** fest einstecken oder ein anderes Kabel probieren.
4. **Nach dem Zusammenbau:** Ist das Frontpanel-Kabel für den Einschaltknopf richtig angesteckt? Ist der 24-Pin- und 8-Pin-Stromstecker am Mainboard fest eingerastet?

## Fall 2: Lüfter drehen, aber kein Bild

1. **Monitor prüfen:** eingeschaltet, richtiger Eingang gewählt, Kabel fest?
2. **An der Grafikkarte angeschlossen?** Steckt eine eigene Grafikkarte im PC, muss der Monitor dort angeschlossen sein – nicht am Mainboard.
3. **Arbeitsspeicher neu einsetzen.** Riegel herausnehmen und kräftig wieder einrasten lassen. Bei mehreren Riegeln einzeln testen.
4. **Grafikkarte prüfen:** fest im Steckplatz und mit Strom versorgt?
5. **Diagnose-LEDs oder Pieptöne beachten.** Viele Mainboards zeigen mit LEDs (CPU, DRAM, VGA, BOOT) an, wo das Problem liegt. Die Bedeutung steht im Handbuch.
6. **Geduld beim ersten Start:** Nach neuem Arbeitsspeicher oder einem BIOS-Update kann das System eine Weile brauchen, bis das erste Bild erscheint.

## Fall 3: Logo erscheint, aber Windows startet nicht

1. **Externe Geräte abziehen** (USB-Sticks, Festplatten), die den Start stören könnten.
2. **Automatische Reparatur:** Nach mehreren fehlgeschlagenen Starts öffnet Windows meist die Wiederherstellungsumgebung. Dort findest du „Starthilfe“, „Systemwiederherstellung“ und die Möglichkeit, das letzte Update zu deinstallieren.
3. **Abgesicherter Modus:** Startet Windows dort, liegt es oft an einem Treiber oder Programm.
4. **Laufwerk erkannt?** Prüfe im BIOS, ob die SSD angezeigt wird und als Startlaufwerk eingestellt ist.

## Wenn nichts hilft

Sichere, wenn möglich, deine Daten – zum Beispiel, indem du die SSD an einem anderen PC ausliest. Danach kann ein Fachbetrieb Netzteil, Mainboard und andere Teile durchmessen. Und für die Zukunft: Mit einem Backup nach der 3-2-1-Regel bist du für solche Fälle gewappnet.`,
        faq: [
          {
            q: "Was bedeuten die LEDs auf dem Mainboard?",
            a: "Viele Mainboards haben Diagnose-LEDs für CPU, DRAM, VGA und BOOT. Bleibt eine davon an, liegt das Problem meist bei diesem Bauteil. Details stehen im Handbuch des Mainboards.",
          },
          {
            q: "Kann ein defektes Netzteil den PC am Start hindern?",
            a: "Ja. Reagiert der PC trotz geprüfter Kabel und Schalter gar nicht, ist das Netzteil ein häufiger Verdächtiger. Prüfe es nur mit einem Ersatznetzteil oder lass es im Fachbetrieb testen – öffne es nie selbst.",
          },
        ],
        sources: [SRC.ms],
      },
    ],
  },
];
