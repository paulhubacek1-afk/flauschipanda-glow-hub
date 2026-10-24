import type { PackGroup } from "./types";

/* Quellen, die mehrfach vorkommen */
const SRC = {
  intel: { title: "Intel – Produktinformationen und Support", url: "https://www.intel.de/content/www/de/de/support.html" },
  amd: { title: "AMD – Support und Produktdaten", url: "https://www.amd.com/de/support" },
  nvidia: { title: "NVIDIA – Treiber und Produktinformationen", url: "https://www.nvidia.com/de-de/drivers/" },
  ms: { title: "Microsoft Support – Windows", url: "https://support.microsoft.com/de-de/windows" },
  plus80: { title: "80 PLUS – Zertifizierungsprogramm für Netzteile (CLEAResult)", url: "https://www.clearesult.com/80plus/" },
  jedec: { title: "JEDEC – Standards für Arbeitsspeicher", url: "https://www.jedec.org/" },
};

export const pcGroupsPart1: PackGroup[] = [
  /* ================================================================ */
  {
    slug: "pc-selbst-bauen",
    title: "PC selbst bauen",
    description: "PC selbst zusammenbauen: Schritt-für-Schritt-Anleitung, Gaming-PC zusammenstellen und Kompatibilität der Teile prüfen.",
    pages: [
      {
        slug: "pc-selbst-zusammenbauen",
        title: "PC selbst zusammenbauen: Schritt-für-Schritt-Anleitung",
        label: "PC zusammenbauen",
        pageType: "standard",
        description:
          "PC selbst zusammenbauen ist leichter als gedacht. Unsere Anleitung führt dich in 10 Schritten von der Vorbereitung bis zum ersten Start.",
        focusKeyword: "PC selbst zusammenbauen",
        linkAnchors: ["PC selbst zusammenbauen", "PC zusammenbauen", "eigenen PC bauen"],
        markdown: `Einen **PC selbst zusammenbauen** klingt nach Expertenwissen – ist aber eher wie ein großes Steckspiel. Die Teile passen nur in eine Richtung, und mit etwas Geduld schaffst du es an einem Nachmittag. Diese Anleitung führt dich der Reihe nach durch alle Schritte.

## Vorbereitung: Platz, Werkzeug und Ruhe

- **Arbeitsplatz:** ein großer Tisch, gutes Licht, kein Teppich unter dir.
- **Werkzeug:** ein Kreuzschlitz-Schraubendreher (Größe PH2) genügt meistens. Kabelbinder helfen beim Aufräumen.
- **Statische Aufladung vermeiden:** Fass vor dem Arbeiten ein geerdetes Metallteil an, etwa einen Heizkörper. Arbeite nicht in Wollpulli auf Teppich.
- **Handbücher bereitlegen:** Das Handbuch des Mainboards ist dein wichtigster Begleiter – darin steht, welcher Stecker wohin gehört.

## Schritt für Schritt

1. **Prozessor einsetzen:** Hebel am Sockel öffnen, Prozessor nach der Markierung (kleines Dreieck) ausrichten und ohne Druck einlegen. Hebel schließen.
2. **Prozessorkühler montieren:** Viele Kühler haben bereits Wärmeleitpaste aufgetragen. Sonst einen erbsengroßen Klecks in die Mitte des Prozessors geben und den Kühler gleichmäßig festschrauben.
3. **Arbeitsspeicher einstecken:** Die Riegel rasten hörbar ein. Bei zwei Riegeln die im Handbuch empfohlenen Steckplätze nutzen (oft A2 und B2), damit der Dual-Channel-Modus aktiv ist.
4. **M.2-SSD einbauen:** In den M.2-Steckplatz schräg einschieben, herunterdrücken und mit der kleinen Schraube oder Klammer befestigen.
5. **Mainboard ins Gehäuse:** Zuerst die Abstandshalter im Gehäuse prüfen, dann das Mainboard daraufsetzen und festschrauben.
6. **Netzteil einbauen:** Meist unten im Gehäuse, Lüfter Richtung Staubfilter.
7. **Strom anschließen:** Den breiten 24-Pin-Stecker ans Mainboard, den 8-Pin-Stecker (CPU/EPS) oben links ans Mainboard.
8. **Grafikkarte einsetzen:** In den obersten langen PCIe-Steckplatz drücken, am Gehäuse festschrauben und mit dem passenden Stromkabel versorgen.
9. **Frontpanel verbinden:** Einschaltknopf, USB- und Audioanschlüsse des Gehäuses nach Handbuch anstecken. Das ist der fummeligste Teil – lass dir Zeit.
10. **Erster Start:** Monitor an die **Grafikkarte** anschließen, nicht ans Mainboard. Einschalten – erscheint das BIOS bzw. UEFI, hast du es geschafft.

## Nach dem ersten Start

Im BIOS kontrollierst du, ob Prozessor, Arbeitsspeicher und SSD erkannt werden. Aktiviere dort das Speicherprofil (XMP bei Intel-Systemen, EXPO bei vielen AMD-Systemen), damit der Arbeitsspeicher mit seiner vorgesehenen Geschwindigkeit läuft. Danach installierst du das Betriebssystem von einem USB-Stick und anschließend die aktuellen Treiber.

## Wenn etwas nicht klappt

Startet der PC nicht, sind es meist Kleinigkeiten: ein nicht ganz eingerasteter Arbeitsspeicher, ein vergessenes Stromkabel oder der Monitor am falschen Anschluss. Unsere Fehlersuche, wenn der PC nicht startet, geht die häufigsten Ursachen der Reihe nach durch.`,
        faq: [
          {
            q: "Wie lange dauert es, einen PC zusammenzubauen?",
            a: "Beim ersten Mal solltest du zwei bis vier Stunden einplanen – inklusive Lesen im Handbuch und Kabelordnung. Mit Erfahrung geht es deutlich schneller.",
          },
          {
            q: "Brauche ich ein Antistatik-Armband?",
            a: "Hilfreich, aber nicht zwingend. Wichtig ist, dass du dich vorher an einem geerdeten Metallteil entlädst und nicht auf Teppich arbeitest.",
          },
          {
            q: "Muss ich Wärmeleitpaste selbst auftragen?",
            a: "Nur, wenn auf dem Kühler noch keine aufgetragen ist. Ein erbsengroßer Klecks in der Mitte des Prozessors reicht; beim Festschrauben verteilt sie sich.",
          },
        ],
        sources: [SRC.intel, SRC.amd],
      },
      {
        slug: "gaming-pc-zusammenstellen",
        title: "Gaming-PC zusammenstellen",
        label: "Gaming-PC zusammenstellen",
        pageType: "money",
        description:
          "Gaming-PC zusammenstellen ohne Fehlkauf: So verteilst du dein Budget sinnvoll auf Grafikkarte, Prozessor, RAM, SSD und Netzteil.",
        focusKeyword: "Gaming-PC zusammenstellen",
        linkAnchors: ["Gaming-PC zusammenstellen", "Gaming-PC"],
        markdown: `Wer einen **Gaming-PC zusammenstellen** möchte, steht vor einer langen Teileliste. Die gute Nachricht: Es gibt eine klare Reihenfolge, nach der du entscheidest. Wer sie kennt, vermeidet die typischen Fehlkäufe – etwa eine Top-Grafikkarte neben einem zu schwachen Netzteil.

## Erst das Ziel, dann die Teile

Bevor du Teile auswählst, beantworte zwei Fragen:

- **In welcher Auflösung spielst du?** Full HD, WQHD oder 4K stellen sehr unterschiedliche Anforderungen an die Grafikkarte.
- **Welche Spiele?** Schnelle Shooter profitieren von hohen Bildraten, große Open-World-Spiele brauchen vor allem viel Grafikleistung und Grafikspeicher.

## So verteilst du das Budget

1. **Grafikkarte zuerst.** Sie bestimmt beim Spielen am stärksten, wie flüssig es läuft. Hier fließt meist der größte Teil des Budgets hin.
2. **Prozessor passend dazu.** Er sollte die Grafikkarte nicht ausbremsen – ein absolutes Spitzenmodell ist für reines Gaming aber selten nötig.
3. **Arbeitsspeicher:** Für aktuelle Spiele sind 16 GB das Minimum, 32 GB geben Luft für die nächsten Jahre und für Programme im Hintergrund.
4. **SSD:** Eine schnelle NVMe-SSD verkürzt Ladezeiten. Plane genug Platz ein – moderne Spiele belegen schnell sehr viel Speicher.
5. **Netzteil:** Nicht sparen. Ein Markennetzteil mit ausreichend Leistung und guter Effizienz schützt alle anderen Teile.
6. **Gehäuse und Kühlung:** Gute Luftzirkulation hält die Teile kühl und leise.

## Typische Fehler beim Zusammenstellen

- **Ungleichgewicht:** sehr teure Grafikkarte, aber zu wenig RAM oder ein schwacher Prozessor.
- **Zu kleines Netzteil** oder eines ohne passende Anschlüsse für die Grafikkarte.
- **Platz vergessen:** lange Grafikkarten und hohe Kühler passen nicht in jedes Gehäuse.
- **Inkompatible Teile:** Sockel, Chipsatz und Speichertyp müssen zusammenpassen.

Wie du das zuverlässig prüfst, zeigt unser Ratgeber zur Kompatibilität der PC-Teile. Und wenn alles bereitliegt, hilft dir die Anleitung zum PC selbst zusammenbauen beim Zusammensetzen.`,
        faq: [
          {
            q: "Ist ein selbst zusammengestellter Gaming-PC günstiger als ein Fertig-PC?",
            a: "Oft bekommst du für dasselbe Geld mehr Leistung oder bessere Einzelteile, weil du gezielt auswählst. Fertig-PCs haben dafür den Vorteil einer Gesamtgarantie und sparen Zeit.",
          },
          {
            q: "Reichen 16 GB Arbeitsspeicher zum Spielen?",
            a: "Für viele Spiele ja. Wer nebenbei streamt, viele Programme offen hat oder länger Ruhe haben möchte, ist mit 32 GB auf der sicheren Seite.",
          },
        ],
        comparison: {
          title: "Worauf es je nach Auflösung ankommt",
          columns: ["Full HD", "WQHD", "4K"],
          rows: [
            { label: "Wichtigstes Bauteil", values: ["ausgewogenes System", "starke Grafikkarte", "sehr starke Grafikkarte"] },
            { label: "Grafikspeicher", values: ["wichtig", "wichtiger", "am wichtigsten"] },
            { label: "Prozessor", values: ["für hohe Bildraten wichtig", "ausgewogen", "meist weniger entscheidend"] },
            { label: "Typischer Monitor", values: ["24 Zoll, hohe Hz-Zahl", "27 Zoll", "27–32 Zoll und größer"] },
          ],
          note: "Allgemeine Orientierung ohne Preisangaben. Aktuelle Leistungstests zu konkreten Modellen findest du bei Fachmagazinen.",
        },
        sources: [SRC.nvidia, SRC.amd, SRC.intel],
      },
      {
        slug: "kompatibilitaet-pc-teile",
        title: "Kompatibilität der PC-Teile prüfen",
        label: "Kompatibilität prüfen",
        pageType: "standard",
        description:
          "Kompatibilität der PC-Teile prüfen: Sockel, Chipsatz, RAM-Typ, Formfaktor, Netzteil und Platz im Gehäuse – die Checkliste vor dem Kauf.",
        focusKeyword: "Kompatibilität der PC-Teile",
        linkAnchors: ["Kompatibilität der PC-Teile", "Kompatibilität prüfen"],
        markdown: `Nichts ist ärgerlicher als ein neuer Prozessor, der nicht ins Mainboard passt. Wer die **Kompatibilität der PC-Teile** vor dem Kauf prüft, spart sich Rücksendungen und Frust. Diese Checkliste deckt die wichtigsten Punkte ab.

## 1. Prozessor und Mainboard: der Sockel

Prozessor und Mainboard müssen denselben **Sockel** haben. Intel und AMD verwenden unterschiedliche Sockel, und auch innerhalb eines Herstellers wechseln sie mit neuen Generationen. Prüfe außerdem den **Chipsatz**: Manche Mainboards unterstützen neuere Prozessoren erst nach einem BIOS-Update. Die Liste der unterstützten Prozessoren (CPU-Support-Liste) findest du auf der Website des Mainboard-Herstellers.

## 2. Arbeitsspeicher: DDR4 oder DDR5

DDR4 und DDR5 sind **nicht** untereinander austauschbar – die Riegel passen mechanisch nicht. Das Mainboard bestimmt, welcher Typ verwendet wird. Achte außerdem auf die maximal unterstützte Größe und die Anzahl der Steckplätze.

## 3. Speicher: M.2 ist nicht gleich M.2

M.2 beschreibt nur die Bauform. Ein M.2-Steckplatz kann NVMe-SSDs, SATA-SSDs oder beides unterstützen. Im Handbuch steht, welche Variante ein Steckplatz kann – und ob die Nutzung eines Steckplatzes andere Anschlüsse abschaltet.

## 4. Formfaktor: passt das Mainboard ins Gehäuse?

Die häufigsten Größen sind **ATX**, **Micro-ATX** und **Mini-ITX**. Ein Gehäuse gibt an, welche Formfaktoren hineinpassen. Kleinere Mainboards passen meist auch in größere Gehäuse, umgekehrt nicht.

## 5. Platz im Gehäuse

- **Grafikkarte:** maximale Länge im Datenblatt des Gehäuses mit der Kartenlänge vergleichen.
- **Prozessorkühler:** maximale Kühlerhöhe beachten.
- **Wasserkühlung:** passende Radiatorplätze prüfen.

## 6. Netzteil: Leistung und Anschlüsse

Das Netzteil braucht genug Leistung für alle Teile und die passenden Stecker – insbesondere für die Grafikkarte. Der Grafikkarten-Hersteller nennt meist eine empfohlene Netzteilleistung. Mehr dazu in unserem Ratgeber Netzteil richtig wählen.

## Tipp: Teile-Planer nutzen

Online-Konfiguratoren und Teile-Planer prüfen viele dieser Punkte automatisch. Verlass dich trotzdem nicht blind darauf und kontrolliere die wichtigsten Angaben in den Datenblättern der Hersteller.`,
        faq: [
          {
            q: "Woran erkenne ich, ob mein Mainboard einen neuen Prozessor unterstützt?",
            a: "Auf der Website des Mainboard-Herstellers gibt es eine CPU-Support-Liste. Dort steht auch, ab welcher BIOS-Version ein Prozessor unterstützt wird.",
          },
          {
            q: "Kann ich DDR4-Arbeitsspeicher in ein DDR5-Mainboard stecken?",
            a: "Nein. DDR4 und DDR5 haben unterschiedliche Kerben und passen nicht in denselben Steckplatz. Das Mainboard legt fest, welcher Typ genutzt wird.",
          },
        ],
        sources: [SRC.intel, SRC.amd, SRC.jedec],
      },
    ],
  },

  /* ================================================================ */
  {
    slug: "komponenten",
    title: "Komponenten erklärt",
    description: "Prozessor, Grafikkarte, Arbeitsspeicher, SSD und Netzteil einfach erklärt – was die Teile machen und worauf du achten solltest.",
    pages: [
      {
        slug: "prozessor-cpu-erklaert",
        title: "Prozessor (CPU) einfach erklärt",
        label: "Prozessor (CPU)",
        pageType: "traffic",
        description:
          "Was macht ein Prozessor? Kerne, Threads, Takt, Cache und Sockel einfach erklärt – damit du CPUs verstehst und richtig vergleichst.",
        focusKeyword: "Prozessor",
        linkAnchors: ["Prozessor", "CPU", "Prozessors"],
        markdown: `Der **Prozessor** – englisch CPU für *Central Processing Unit* – ist das Rechenzentrum deines Computers. Er führt die Befehle von Programmen aus: vom Öffnen einer Datei bis zur Spielphysik. Hier erfährst du, was die wichtigsten Angaben bedeuten.

## Kerne und Threads

Ein **Kern** ist eine eigenständige Recheneinheit. Mehrere Kerne können gleichzeitig an verschiedenen Aufgaben arbeiten. **Threads** sind Arbeitsstränge: Viele Prozessoren können pro Kern zwei Threads bearbeiten (Intel nennt das Hyper-Threading, AMD Simultaneous Multithreading).

Mehr Kerne helfen vor allem bei Aufgaben, die sich gut aufteilen lassen – etwa Videoschnitt, 3D-Rendering oder viele Programme gleichzeitig. Viele Spiele profitieren dagegen stärker von einer hohen Leistung pro Kern.

## Taktfrequenz

Der **Takt** gibt in Gigahertz (GHz) an, wie viele Arbeitsschritte ein Kern pro Sekunde ausführen kann. Moderne Prozessoren takten dynamisch: Bei Last erhöhen sie den Takt (Boost), im Leerlauf senken sie ihn, um Strom zu sparen. Vorsicht beim Vergleich: Takt allein sagt wenig, denn neuere Generationen schaffen pro Takt mehr Arbeit.

## Cache

Der **Cache** ist ein sehr schneller, kleiner Zwischenspeicher direkt im Prozessor. Ein großer Cache kann besonders in Spielen spürbar helfen, weil häufig benötigte Daten nicht erst aus dem langsameren Arbeitsspeicher geholt werden müssen.

## Integrierte Grafik

Viele, aber nicht alle Prozessoren haben eine **integrierte Grafikeinheit**. Sie reicht für Büro, Videos und einfache Spiele. Wer anspruchsvoll spielt, braucht zusätzlich eine eigene Grafikkarte. Ob ein Modell eine integrierte Grafik hat, steht auf der Produktseite des Herstellers.

## Sockel und Kühlung

Der Prozessor sitzt in einem **Sockel** auf dem Mainboard – beide müssen zusammenpassen. Außerdem gibt der Hersteller die typische Leistungsaufnahme an; danach richtet sich, wie kräftig der Kühler sein muss.

## Wie vergleiche ich Prozessoren?

Die Zahlen auf dem Datenblatt geben eine Richtung vor, aussagekräftiger sind aber unabhängige **Leistungstests** in den Programmen und Spielen, die du wirklich nutzt.`,
        faq: [
          {
            q: "Was ist wichtiger: mehr Kerne oder mehr Takt?",
            a: "Es kommt auf die Nutzung an. Für Videoschnitt und Rendering helfen viele Kerne, viele Spiele profitieren eher von hoher Leistung pro Kern. Unabhängige Tests mit deinen Programmen sind der beste Vergleich.",
          },
          {
            q: "Brauche ich eine Grafikkarte, wenn mein Prozessor eine integrierte Grafik hat?",
            a: "Für Büro, Surfen und Videos meist nicht. Für anspruchsvolle Spiele oder 3D-Anwendungen ist eine eigene Grafikkarte nötig.",
          },
        ],
        sources: [SRC.intel, SRC.amd],
      },
      {
        slug: "grafikkarte-gpu-erklaert",
        title: "Grafikkarte (GPU) einfach erklärt",
        label: "Grafikkarte (GPU)",
        pageType: "traffic",
        description:
          "Was macht eine Grafikkarte? GPU, Grafikspeicher (VRAM), Raytracing und Upscaling einfach erklärt – und worauf du beim Kauf achtest.",
        focusKeyword: "Grafikkarte",
        linkAnchors: ["Grafikkarte", "GPU", "Grafikkarten"],
        markdown: `Die **Grafikkarte** berechnet alles, was du auf dem Bildschirm siehst – besonders bei Spielen, 3D-Programmen und Videobearbeitung. Ihr Herzstück ist die **GPU** (*Graphics Processing Unit*), ein Chip mit tausenden kleinen Recheneinheiten, die viele Aufgaben gleichzeitig erledigen.

## Integriert oder eigene Grafikkarte?

- **Integrierte Grafik:** steckt im Prozessor und teilt sich den Arbeitsspeicher. Reicht für Büro, Surfen, Videos und einfache Spiele.
- **Eigene (dedizierte) Grafikkarte:** steckt als Karte im PC und hat eigenen, schnellen Grafikspeicher. Nötig für anspruchsvolle Spiele und professionelle 3D- oder KI-Anwendungen.

## Grafikspeicher (VRAM)

Der **Grafikspeicher** hält Texturen und Bilddaten bereit. Je höher die Auflösung und je detailreicher die Spiele, desto mehr VRAM wird gebraucht. Reicht er nicht, kann es zu Rucklern kommen – selbst wenn die GPU an sich schnell genug wäre.

## Raytracing und Upscaling

**Raytracing** berechnet Licht, Schatten und Spiegelungen besonders realistisch, kostet aber viel Leistung. **Upscaling-Verfahren** wie DLSS (NVIDIA), FSR (AMD) und XeSS (Intel) berechnen das Bild in geringerer Auflösung und rechnen es intelligent hoch. So steigt die Bildrate oft deutlich, bei kaum sichtbarem Qualitätsverlust.

## Anschlüsse und Strom

Moderne Grafikkarten haben **DisplayPort**- und **HDMI**-Ausgänge. Leistungsstarke Karten brauchen zusätzlichen Strom vom Netzteil über eigene Stecker; manche aktuelle Modelle nutzen den 12V-2x6-Stecker (Nachfolger von 12VHPWR). Der Hersteller nennt eine empfohlene Netzteilleistung.

## Worauf beim Kauf achten?

1. Zur **Auflösung** und den **Spielen** passend auswählen.
2. Genug **Grafikspeicher** für die nächsten Jahre einplanen.
3. **Länge** der Karte mit dem Gehäuse vergleichen.
4. **Netzteil** und Anschlüsse prüfen.
5. Unabhängige **Tests** zu Leistung und Lautstärke lesen.

## Treiber nicht vergessen

Neue Grafiktreiber bringen oft spürbar mehr Leistung in aktuellen Spielen und beheben Fehler. Wie du sie sicher installierst, erklären wir im Ratgeber Treiber aktualisieren.`,
        faq: [
          {
            q: "Wie viel Grafikspeicher brauche ich?",
            a: "Das hängt von Auflösung und Spielen ab. Je höher die Auflösung und je detailreicher die Texturen, desto mehr. Aktuelle Tests zeigen, wie viel einzelne Spiele tatsächlich belegen.",
          },
          {
            q: "Was bringt DLSS oder FSR?",
            a: "Upscaling berechnet das Bild in niedrigerer Auflösung und rechnet es hoch. Dadurch steigt die Bildrate oft deutlich, während die Bildqualität meist nur wenig leidet.",
          },
        ],
        sources: [SRC.nvidia, SRC.amd, SRC.intel],
      },
      {
        slug: "arbeitsspeicher-ram-erklaert",
        title: "Arbeitsspeicher (RAM) einfach erklärt",
        label: "Arbeitsspeicher (RAM)",
        pageType: "traffic",
        description:
          "Was macht der Arbeitsspeicher? RAM, DDR4 und DDR5, Dual-Channel, Takt und Latenz einfach erklärt – und wie viel RAM du wirklich brauchst.",
        focusKeyword: "Arbeitsspeicher",
        linkAnchors: ["Arbeitsspeicher", "RAM"],
        markdown: `Der **Arbeitsspeicher**, kurz RAM (*Random Access Memory*), ist das Kurzzeitgedächtnis deines Computers. Programme und Daten, mit denen du gerade arbeitest, liegen hier, damit der Prozessor blitzschnell darauf zugreifen kann. Beim Ausschalten wird der Arbeitsspeicher geleert – deshalb speicherst du Dateien auf der SSD.

## Wie viel RAM brauche ich?

| Nutzung | Orientierung |
|---|---|
| Surfen, Office, Videos | 8–16 GB |
| Gaming | 16–32 GB |
| Videoschnitt, 3D, viele Programme | 32 GB und mehr |

Zu wenig Arbeitsspeicher merkst du daran, dass der PC beim Wechseln zwischen Programmen zäh wird: Er lagert dann Daten auf die viel langsamere SSD aus.

## DDR4 und DDR5

**DDR4** und **DDR5** sind Generationen des Arbeitsspeichers. DDR5 ist neuer und bietet höhere Übertragungsraten. Wichtig: Die beiden sind **nicht kompatibel** – welcher Typ passt, bestimmt das Mainboard.

## Dual-Channel: lieber zwei Riegel als einer

Die meisten Mainboards können zwei Riegel gleichzeitig ansprechen (Dual-Channel). Zwei Riegel mit je 8 GB sind deshalb oft schneller als ein einzelner 16-GB-Riegel. Im Handbuch steht, welche Steckplätze du bei zwei Riegeln nutzen sollst.

## Takt und Latenz

Die **Geschwindigkeit** wird in MT/s angegeben (umgangssprachlich oft MHz), die **Latenz** mit Werten wie CL30. Höherer Takt und niedrigere Latenz sind besser, der Unterschied im Alltag ist aber meist kleiner als der zwischen genug und zu wenig Arbeitsspeicher.

## XMP und EXPO aktivieren

Ab Werk läuft Arbeitsspeicher oft mit einer vorsichtigen Standardgeschwindigkeit. Über das Profil **XMP** (Intel-Systeme) bzw. **EXPO** (viele AMD-Systeme) im BIOS aktivierst du die beworbene Geschwindigkeit mit einem Klick.

## Beim Laptop aufpassen

Bei vielen dünnen Laptops ist der Arbeitsspeicher fest verlötet und lässt sich **nicht aufrüsten**. Kaufe dort lieber gleich etwas mehr – mehr dazu in unserer Checkliste zum Laptop kaufen.`,
        faq: [
          {
            q: "Kann ich verschiedene RAM-Riegel mischen?",
            a: "Technisch oft ja, wenn der Typ gleich ist (z. B. beide DDR5). Am zuverlässigsten laufen aber identische Riegel, am besten als Set gekauft.",
          },
          {
            q: "Warum zeigt Windows weniger RAM an, als eingebaut ist?",
            a: "Ein Teil kann für die integrierte Grafik reserviert sein. Wird deutlich zu wenig angezeigt, sitzt eventuell ein Riegel nicht richtig.",
          },
        ],
        sources: [SRC.jedec, SRC.intel, SRC.amd],
      },
      {
        slug: "ssd-oder-hdd",
        title: "SSD oder HDD? Speicher im Vergleich",
        label: "SSD oder HDD",
        pageType: "standard",
        description:
          "SSD oder HDD? Wir vergleichen Geschwindigkeit, Lautstärke, Haltbarkeit und Einsatzzweck und erklären NVMe, SATA und M.2 verständlich.",
        focusKeyword: "SSD oder HDD",
        linkAnchors: ["SSD oder HDD", "SSD", "NVMe-SSD"],
        markdown: `Die Frage **SSD oder HDD** ist für das Betriebssystem längst entschieden: Eine SSD macht jeden PC spürbar schneller. Für große Datenmengen und Backups hat die klassische Festplatte aber weiterhin ihren Platz. Hier erfährst du, welche Speicherart wofür passt.

## Der Unterschied in einem Satz

Eine **HDD** (Festplatte) speichert Daten auf sich drehenden Magnetscheiben, eine **SSD** auf Speicherchips ohne bewegliche Teile.

## SSD: schnell, leise, robust

- Startet das System und Programme in Sekunden.
- Völlig lautlos und unempfindlich gegen Erschütterungen.
- Ideal für Betriebssystem, Programme und Spiele.

### SATA, NVMe und M.2 – was ist was?

- **SATA-SSD:** im 2,5-Zoll-Format oder als M.2-Karte, über die SATA-Schnittstelle angebunden.
- **NVMe-SSD:** nutzt die deutlich schnellere PCIe-Schnittstelle, meist als M.2-Karte.
- **M.2** beschreibt nur die Bauform. Ob ein M.2-Steckplatz NVMe, SATA oder beides kann, steht im Handbuch des Mainboards.

## HDD: viel Platz für Archiv und Backup

- Viel Speicherplatz für Fotos, Videos und Sicherungen.
- Langsamer und hörbar, empfindlich gegenüber Stößen im Betrieb.
- Sinnvoll als zweites Laufwerk oder externe Backup-Platte.

## Unsere Empfehlung

Für fast alle ist die Kombination ideal: eine **NVMe-SSD** für System, Programme und Spiele – und bei Bedarf eine **HDD** oder externe Platte für große Archive und Backups. Wie du deine Daten richtig sicherst, liest du im Ratgeber zur 3-2-1-Backup-Regel.

## Tipp: alten PC mit SSD beschleunigen

Läuft dein PC noch mit einer Festplatte als Systemlaufwerk, ist der Umstieg auf eine SSD das wirkungsvollste Upgrade überhaupt. Mehr Tipps findest du in unserem Artikel PC schneller machen.`,
        faq: [
          {
            q: "Wie lange hält eine SSD?",
            a: "Moderne SSDs halten bei normaler Nutzung viele Jahre. Hersteller geben die Haltbarkeit als geschriebene Datenmenge (TBW) und Garantiezeit an. Ein Backup ersetzt das aber nicht.",
          },
          {
            q: "Lohnt sich eine NVMe-SSD gegenüber einer SATA-SSD?",
            a: "Beim Kopieren großer Dateien ist NVMe deutlich schneller. Im Alltag fühlen sich beide flott an – der große Sprung ist der von der Festplatte zur SSD.",
          },
        ],
        comparison: {
          title: "SSD und HDD im Vergleich",
          columns: ["NVMe-SSD", "SATA-SSD", "HDD"],
          rows: [
            { label: "Geschwindigkeit", values: ["sehr hoch", "hoch", "niedrig"] },
            { label: "Geräusch", values: ["lautlos", "lautlos", "hörbar"] },
            { label: "Stoßempfindlich", values: ["nein", "nein", "ja, im Betrieb"] },
            { label: "Bauform", values: ["meist M.2", "2,5 Zoll oder M.2", "3,5 oder 2,5 Zoll"] },
            { label: "Ideal für", values: ["System, Programme, Spiele", "System, Aufrüsten älterer PCs", "Archiv, Backups"] },
          ],
        },
        sources: [SRC.jedec, SRC.ms],
      },
      {
        slug: "netzteil-richtig-waehlen",
        title: "Netzteil richtig wählen",
        label: "Netzteil wählen",
        pageType: "standard",
        description:
          "Netzteil richtig wählen: Wie viel Watt du brauchst, was 80 PLUS bedeutet, welche Anschlüsse wichtig sind und warum Sparen hier teuer wird.",
        focusKeyword: "Netzteil",
        linkAnchors: ["Netzteil", "Netzteils"],
        markdown: `Das **Netzteil** versorgt alle Teile deines PCs mit Strom. Es ist das Bauteil, an dem am häufigsten gespart wird – und das bei einem Defekt im schlimmsten Fall andere Teile mitnimmt. So findest du ein passendes Modell.

## Wie viel Watt brauche ich?

Die größten Verbraucher sind **Grafikkarte** und **Prozessor**. Der Grafikkarten-Hersteller nennt in der Regel eine **empfohlene Netzteilleistung** – das ist ein guter Startpunkt. Online-Rechner für die Netzteilleistung helfen zusätzlich. Plane etwas Reserve ein: Ein Netzteil, das dauerhaft am Limit läuft, wird warm und laut.

## 80 PLUS: der Wirkungsgrad

Die **80-PLUS-Zertifizierung** zeigt, wie effizient ein Netzteil Strom umwandelt. Die Stufen reichen von Standard über Bronze, Silber, Gold und Platin bis Titan. Ein höherer Wirkungsgrad bedeutet weniger Abwärme, oft leiseren Betrieb und etwas niedrigere Stromkosten.

## Die wichtigsten Anschlüsse

- **24-Pin ATX:** Hauptstecker für das Mainboard.
- **8-Pin EPS (CPU):** Strom für den Prozessor; manche Mainboards haben zwei davon.
- **PCIe-Stromstecker:** für die Grafikkarte. Neuere Grafikkarten nutzen teils den 12V-2x6-Stecker – prüfe, ob das Netzteil passende Kabel mitbringt.
- **SATA-Strom:** für 2,5-Zoll-SSDs, Festplatten und manche Lüftersteuerungen.

## Modular oder fest verkabelt?

Bei **modularen** Netzteilen steckst du nur die Kabel an, die du wirklich brauchst. Das erleichtert die Kabelordnung und verbessert die Luftzirkulation. Fest verkabelte Modelle funktionieren genauso gut, sind aber unordentlicher.

## Woran du ein gutes Netzteil erkennst

1. Bekannter Hersteller und gute unabhängige Testergebnisse.
2. Schutzschaltungen gegen Überspannung, Überlast und Kurzschluss.
3. Passende Anschlüsse für deine Grafikkarte.
4. Ausreichend Leistung mit Reserve.
5. Lange Herstellergarantie als Zeichen von Vertrauen in die Qualität.`,
        faq: [
          {
            q: "Ist ein Netzteil mit mehr Watt automatisch besser?",
            a: "Nein. Entscheidend sind Qualität, Schutzschaltungen und passende Leistung. Ein stark überdimensioniertes Netzteil bringt keinen Vorteil und kostet mehr.",
          },
          {
            q: "Was bedeutet 80 PLUS Gold?",
            a: "Die Zertifizierung bescheinigt einen hohen Wirkungsgrad: Ein großer Teil des Stroms aus der Steckdose kommt bei den Bauteilen an, wenig geht als Wärme verloren.",
          },
        ],
        sources: [SRC.plus80, SRC.nvidia, SRC.amd],
      },
    ],
  },

  /* ================================================================ */
  {
    slug: "laptops",
    title: "Laptops & Geräte",
    description: "Laptop kaufen ohne Reue: Checkliste für Display, Prozessor, RAM, Akku und Anschlüsse – und die Frage Laptop oder Desktop-PC.",
    pages: [
      {
        slug: "laptop-kaufen-checkliste",
        title: "Laptop kaufen: die Checkliste",
        label: "Laptop kaufen",
        pageType: "money",
        description:
          "Laptop kaufen leicht gemacht: Unsere Checkliste zu Display, Prozessor, Arbeitsspeicher, SSD, Akku, Anschlüssen und Tastatur.",
        focusKeyword: "Laptop kaufen",
        linkAnchors: ["Laptop kaufen", "neuen Laptop", "Laptops"],
        markdown: `Wer einen **Laptop kaufen** möchte, wird von Datenblättern überrollt. Dabei entscheiden wenige Punkte darüber, ob du mit dem Gerät jahrelang glücklich bist. Geh diese Checkliste der Reihe nach durch.

## 1. Wofür brauchst du ihn?

- **Office, Surfen, Studium:** leicht, lange Akkulaufzeit, gutes Display.
- **Fotos und Videos:** kräftiger Prozessor, mehr Arbeitsspeicher, farbtreues Display.
- **Gaming:** eigene Grafikkarte, gute Kühlung – dafür meist schwerer und lauter.

## 2. Display

- **Auflösung:** Full HD ist das Minimum, höhere Auflösungen wirken schärfer.
- **Helligkeit:** Für die Nutzung am Fenster oder draußen sollte das Display hell genug sein.
- **Matt oder glänzend:** Matte Displays spiegeln weniger.
- **Größe:** 13–14 Zoll für unterwegs, 15–16 Zoll für mehr Übersicht.

## 3. Prozessor und Arbeitsspeicher

Für den Alltag genügen aktuelle Prozessoren der Mittelklasse. Beim **Arbeitsspeicher** solltest du großzügig sein: 16 GB sind eine gute Basis. **Achtung:** Bei vielen dünnen Laptops ist der Arbeitsspeicher fest verlötet und lässt sich später nicht aufrüsten.

## 4. Speicherplatz

Eine **SSD** ist Pflicht. 512 GB sind eine sinnvolle Mindestgröße, wenn du nicht alles in der Cloud speicherst. Prüfe, ob ein zweiter M.2-Steckplatz frei ist.

## 5. Akku und Gewicht

Herstellerangaben zur Akkulaufzeit sind meist optimistisch. Unabhängige Tests sind aussagekräftiger. Wer viel unterwegs ist, achtet zusätzlich auf das Gewicht und ein kompaktes Netzteil, idealerweise mit Laden über USB-C.

## 6. Anschlüsse

Genug USB-Anschlüsse, HDMI für Beamer und Fernseher, USB-C mit Display- und Ladefunktion, eventuell ein Kartenleser. Fehlt etwas, brauchst du Adapter.

## 7. Tastatur und Touchpad

Achte auf ein **deutsches Tastaturlayout** (QWERTZ) und probiere Tastatur und Touchpad wenn möglich vorher aus. Eine Tastaturbeleuchtung ist abends praktisch.

## 8. Garantie und Service

Vergleiche Garantiezeit und Reparaturmöglichkeiten. Bei Händlern in der EU gelten zusätzlich die gesetzlichen Gewährleistungsrechte.

Unsicher, ob es überhaupt ein Laptop sein soll? Unser Vergleich Laptop oder Desktop-PC hilft bei der Entscheidung.`,
        faq: [
          {
            q: "Wie viel Arbeitsspeicher sollte ein Laptop haben?",
            a: "16 GB sind für die meisten eine gute Wahl. Da der Speicher bei vielen Geräten verlötet ist, lieber gleich etwas mehr nehmen als zu wenig.",
          },
          {
            q: "Reicht eine integrierte Grafik im Laptop?",
            a: "Für Büro, Studium, Videos und einfache Spiele ja. Für anspruchsvolle Spiele oder 3D-Arbeit brauchst du ein Modell mit eigener Grafikkarte.",
          },
        ],
        sources: [SRC.intel, SRC.amd, SRC.ms],
      },
      {
        slug: "laptop-oder-desktop-pc",
        title: "Laptop oder Desktop-PC?",
        label: "Laptop oder Desktop",
        pageType: "standard",
        description:
          "Laptop oder Desktop-PC? Wir vergleichen Leistung, Aufrüstbarkeit, Ergonomie und Mobilität und sagen dir, welcher Typ zu deinem Alltag passt.",
        focusKeyword: "Laptop oder Desktop-PC",
        linkAnchors: ["Laptop oder Desktop-PC", "Desktop-PC"],
        markdown: `**Laptop oder Desktop-PC** – das ist meist die erste Entscheidung beim Computerkauf. Beide haben klare Stärken. Die richtige Wahl hängt vor allem davon ab, wo und wie du arbeitest oder spielst.

## Für einen Laptop spricht

- **Mobilität:** Arbeiten in der Uni, im Zug oder auf dem Sofa.
- **Alles in einem:** Bildschirm, Tastatur, Akku und Webcam sind eingebaut.
- **Wenig Platz:** Ein Laptop verschwindet nach der Arbeit in der Schublade.

## Für einen Desktop-PC spricht

- **Mehr Leistung fürs Geld:** Bei gleichem Budget meist deutlich stärker, besonders beim Gaming.
- **Aufrüstbar:** Grafikkarte, Arbeitsspeicher oder SSD lassen sich einzeln tauschen.
- **Bessere Kühlung:** leiser bei Last und dauerhaft volle Leistung.
- **Ergonomie:** großer Monitor auf Augenhöhe, gute Tastatur und Maus.

## Der Mittelweg

Viele kombinieren beides: einen leichten Laptop für unterwegs und zu Hause eine **Docking-Station** oder einen USB-C-Monitor mit Tastatur und Maus. So bekommst du am Schreibtisch die Ergonomie eines Desktops.

## Unsere Faustregel

- **Viel unterwegs?** Laptop.
- **Vor allem zu Hause, Gaming oder kreative Arbeit?** Desktop-PC.
- **Beides?** Laptop plus Docking-Station – oder ein Desktop für zu Hause und ein günstiges, leichtes Gerät für unterwegs.

Entscheidest du dich für den Laptop, hilft dir unsere Checkliste zum Laptop kaufen. Für den Desktop findest du alles rund ums Gaming-PC zusammenstellen in unserem Ratgeber.`,
        faq: [
          {
            q: "Ist ein Gaming-Laptop eine gute Idee?",
            a: "Wenn du mobil spielen willst, ja. Für dasselbe Geld ist ein Desktop-PC aber meist schneller, leiser und später aufrüstbar.",
          },
        ],
        comparison: {
          title: "Laptop und Desktop-PC im Vergleich",
          columns: ["Laptop", "Desktop-PC"],
          rows: [
            { label: "Mobilität", values: ["hoch", "keine"] },
            { label: "Leistung fürs Geld", values: ["mittel", "hoch"] },
            { label: "Aufrüstbarkeit", values: ["gering (oft verlöteter RAM)", "hoch"] },
            { label: "Ergonomie", values: ["nur mit Zubehör gut", "gut mit eigenem Monitor"] },
            { label: "Lautstärke unter Last", values: ["oft hörbar", "leise möglich"] },
            { label: "Platzbedarf", values: ["gering", "größer"] },
          ],
        },
        sources: [SRC.ms],
      },
    ],
  },
];
