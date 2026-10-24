import type { FillPage } from "../types";

const VZ = { title: "Verbraucherzentrale – Energie und Haushalt", url: "https://www.verbraucherzentrale.de/wissen/energie" };
const UBA = { title: "Umweltbundesamt – Umwelttipps für den Alltag", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag" };
const DGE = { title: "Deutsche Gesellschaft für Ernährung (DGE) – Gut essen und trinken", url: "https://www.dge.de/gesunde-ernaehrung/gut-essen-und-trinken/" };
const WHO = { title: "WHO – Körperliche Aktivität (Empfehlungen)", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" };
const GESUND = { title: "gesund.bund.de – Gesundheitsportal des Bundesministeriums für Gesundheit", url: "https://gesund.bund.de/" };
const GESUNDAT = { title: "gesundheit.gv.at – Öffentliches Gesundheitsportal Österreichs", url: "https://www.gesundheit.gv.at/" };
const BAUA = { title: "BAuA – Bildschirmarbeit", url: "https://www.baua.de/" };

export const haushaltGesundheit: FillPage[] = [
  /* ================= Haushalt & Wohnen ================= */
  {
    path: "haushalt-wohnen/haushaltstipps/putzplan",
    description: "Putzplan erstellen: tägliche, wöchentliche und monatliche Aufgaben im Überblick – mit Vorlage, Aufteilung in der Familie und Tipps gegen Putzfrust.",
    markdown: `Ein **Putzplan** bringt Ordnung in den Haushalt: Aufgaben werden verteilt, nichts wird vergessen und niemand muss an einem Tag alles erledigen.

## Täglich (10–15 Minuten)

- Geschirr spülen oder Spülmaschine ein- und ausräumen
- Arbeitsflächen und Esstisch abwischen
- Kurz aufräumen („10-Minuten-Runde“)
- Müll bei Bedarf rausbringen

## Wöchentlich

- Staubsaugen und Böden wischen
- Bad reinigen: Waschbecken, WC, Dusche, Spiegel
- Bettwäsche wechseln (alle ein bis zwei Wochen)
- Staub wischen
- Kühlschrank kurz kontrollieren

## Monatlich

- Kühlschrank auswischen
- Backofen und Mikrowelle reinigen
- Fenster und Spiegel (je nach Bedarf)
- Abflüsse und Siebe säubern

## Saisonal

- Fenster gründlich putzen
- Matratzen lüften und wenden
- Schränke ausmisten
- Heizkörper entstauben

## Aufgaben fair verteilen

Schreibt den Plan sichtbar auf (Kühlschrank, gemeinsame App) und verteilt Aufgaben nach Fähigkeiten. Kinder können schon früh helfen: Tisch decken, Wäsche sortieren, Spielzeug aufräumen.

## Tipps gegen Putzfrust

- **Timer stellen:** 20 Minuten Musik an, dann ist Schluss.
- **Von oben nach unten** putzen.
- **Weniger Dinge** = weniger Arbeit. Mehr dazu unter „Ordnung schaffen“.`,
    faq: [
      ["Wie oft sollte man das Bad putzen?", "Eine gründliche Reinigung einmal pro Woche ist üblich, das WC bei Bedarf öfter."],
      ["Wie oft sollte man die Bettwäsche wechseln?", "Alle ein bis zwei Wochen, bei Krankheit oder starkem Schwitzen öfter."],
    ],
  },
  {
    path: "haushalt-wohnen/haushaltstipps/ordnung-schaffen",
    description: "Ordnung schaffen und halten: Ausmisten Raum für Raum, feste Plätze, die 1-rein-1-raus-Regel und einfache Routinen für dauerhaft weniger Chaos.",
    markdown: `Ordnung spart Zeit, Nerven und oft sogar Geld, weil man Dinge nicht doppelt kauft. Der Schlüssel ist: **weniger besitzen und jedem Ding einen festen Platz geben**.

## Schritt 1: Ausmisten

Nimm dir **einen Bereich nach dem anderen** vor – eine Schublade, ein Regal, ein Schrank. Sortiere in vier Kategorien:

1. **Behalten**
2. **Verschenken oder verkaufen**
3. **Recyceln oder entsorgen**
4. **Unsicher** – in eine Kiste, Datum drauf. Wird sie nach einigen Monaten nicht geöffnet, kann sie weg.

## Schritt 2: Feste Plätze

Dinge, die zusammen genutzt werden, gehören zusammen. Häufig Genutztes in Griffhöhe, Seltenes nach oben oder hinten. Beschriftete Boxen helfen der ganzen Familie.

## Schritt 3: Ordnung halten

- **1-rein-1-raus-Regel:** Kommt etwas Neues, geht etwas Altes.
- **Abendrunde:** Zehn Minuten alles an seinen Platz.
- **Ablagefläche freihalten:** Flächen ziehen Kram magisch an.
- **Papier sofort sortieren:** Wegwerfen, erledigen oder ablegen.

## Mit Kindern

Kinder brauchen niedrige Regale, offene Boxen und Bilder statt Schrift auf den Etiketten. Gemeinsames Aufräumen als Spiel funktioniert besser als Schimpfen.

## Wohin mit aussortierten Dingen?

Kleidung an Sammelstellen oder Second-Hand, Bücher in öffentliche Bücherschränke, Elektrogeräte zum Wertstoffhof oder zur Rücknahme im Handel.`,
    faq: [
      ["Wo fange ich beim Ausmisten an?", "Mit einem kleinen Bereich, der schnell Erfolg bringt – etwa einer Schublade oder dem Badezimmerschrank."],
      ["Wie halte ich dauerhaft Ordnung?", "Mit festen Plätzen für alles, der 1-rein-1-raus-Regel und einer kurzen täglichen Aufräumrunde."],
    ],
  },
  {
    path: "haushalt-wohnen/haushaltstipps/waesche-tipps",
    description: "Wäsche-Tipps: richtig sortieren, Temperaturen, Waschmittel dosieren, Flecken entfernen und Energie sparen – so bleibt Kleidung länger schön.",
    markdown: `Mit ein paar einfachen Regeln wird die Wäsche sauberer, die Kleidung hält länger und du sparst Energie.

## Richtig sortieren

- **Nach Farbe:** Weiß, Hell, Dunkel, Bunt.
- **Nach Temperatur:** Pflegeetikett beachten.
- **Nach Material:** Feines und Wolle separat, Handtücher getrennt von empfindlichen Stoffen.

## Welche Temperatur?

Für normal verschmutzte Alltagswäsche reichen meist **30 bis 40 °C** – moderne Waschmittel wirken auch bei niedrigen Temperaturen. Handtücher, Bettwäsche und Unterwäsche bei Bedarf heißer waschen, etwa bei Krankheit im Haushalt. Gelegentlich eine Kochwäsche oder einen heißen Waschgang laufen lassen, damit sich in der Maschine keine Gerüche bilden.

## Waschmittel richtig dosieren

Die Dosierung richtet sich nach **Wasserhärte** und Verschmutzung. Die Wasserhärte erfährst du bei deinem Wasserversorger. Zu viel Waschmittel belastet Umwelt und Geldbörse und kann Rückstände hinterlassen.

## Flecken

- Schnell handeln, nicht reiben, sondern tupfen.
- **Fett:** Spülmittel oder Gallseife.
- **Rotwein, Obst:** mit kaltem Wasser ausspülen, dann Gallseife.
- **Blut:** immer **kalt** auswaschen.

## Energie sparen

- Maschine voll beladen.
- Eco-Programm nutzen: dauert länger, spart aber Energie.
- Wäsche an der Luft trocknen statt im Trockner.

## Pflege der Maschine

Flusensieb regelmäßig reinigen, Türdichtung abwischen und die Tür nach dem Waschen offen lassen.`,
    faq: [
      ["Reicht Waschen bei 30 Grad?", "Für normal verschmutzte Alltagswäsche ja. Bei Krankheit oder stark verschmutzter Wäsche höhere Temperaturen wählen."],
      ["Warum stinkt meine Waschmaschine?", "Häufig durch Waschen nur bei niedrigen Temperaturen und feuchte Dichtungen. Gelegentlich heiß waschen, Flusensieb reinigen und die Tür offen lassen."],
    ],
    sources: [UBA],
  },
  {
    path: "haushalt-wohnen/haushaltstipps/hausmittel",
    description: "Hausmittel im Haushalt: was Essig, Natron, Zitronensäure und Schmierseife wirklich können, wofür sie sich eignen und wo Vorsicht geboten ist.",
    markdown: `Für viele Putzaufgaben braucht es keine Spezialreiniger. Einige **Hausmittel** sind günstig, vielseitig und umweltfreundlicher. Sie haben aber auch Grenzen.

## Die wichtigsten Hausmittel

- **Essig / Essigessenz:** löst Kalk, z. B. an Armaturen und Duschköpfen. **Nicht** auf Naturstein (Marmor, Kalkstein) und nicht unverdünnt auf Gummidichtungen.
- **Zitronensäure:** entkalkt Wasserkocher und Kaffeemaschinen. Nur kalt bzw. lauwarm verwenden – erhitzt kann sich schwer lösliches Calciumcitrat bilden.
- **Natron / Backpulver:** neutralisiert Gerüche, hilft als mildes Scheuermittel, z. B. für Backofen und Töpfe.
- **Schmierseife:** reinigt Böden und fettige Oberflächen.
- **Spülmittel:** hilft gegen Fett – auch bei Flecken auf Kleidung.

## Bewährte Anwendungen

- **Wasserkocher entkalken:** Wasser mit Zitronensäure kalt einwirken lassen, ausgießen, gründlich nachspülen.
- **Eingebranntes im Backofen:** Natron mit etwas Wasser zur Paste anrühren, über Nacht einwirken lassen, abwischen.
- **Gerüche im Kühlschrank:** eine Schale mit Natron hineinstellen.

## Vorsicht

- **Niemals mischen:** Essig und chlorhaltige Reiniger setzen giftiges Chlorgas frei.
- Hausmittel **nicht** auf empfindlichen Oberflächen testen, ohne vorher an einer unauffälligen Stelle zu probieren.
- Essig ist kein Desinfektionsmittel.

## Weniger ist mehr

Für die meisten Aufgaben reichen ein Allzweckreiniger, Spülmittel, ein Entkalker und ein Scheuermittel. Viele Spezialprodukte sind überflüssig.`,
    faq: [
      ["Kann man mit Essig alles putzen?", "Nein. Essig eignet sich gegen Kalk, schadet aber Naturstein, manchen Gummidichtungen und Metallen. Er sollte nie mit Chlorreinigern gemischt werden."],
      ["Ist Natron dasselbe wie Backpulver?", "Nicht ganz: Backpulver enthält Natron plus ein Säuerungsmittel. Für viele Haushaltsanwendungen funktionieren beide ähnlich."],
    ],
    sources: [UBA, VZ],
  },
  {
    path: "haushalt-wohnen/wohnideen/glow-wohnideen",
    description: "Glow-Wohnideen: Mit indirektem Licht, LED-Streifen, Lichtfarben und Akzenten in Türkis und Lila eine gemütliche, leuchtende Wohnatmosphäre schaffen.",
    markdown: `Licht verändert einen Raum mehr als jedes Möbelstück. Mit **Glow-Wohnideen** – indirektem Licht und gezielten Farbakzenten – entsteht eine gemütliche, moderne Atmosphäre.

## Grundregel: Licht in Schichten

1. **Grundlicht:** gleichmäßige Helligkeit, z. B. Deckenleuchte.
2. **Arbeitslicht:** hell und gezielt, z. B. über Schreibtisch oder Arbeitsplatte.
3. **Stimmungslicht:** indirekt und gedimmt – hier entsteht der Glow.

## Ideen für den Glow-Effekt

- **LED-Streifen hinter dem Fernseher** oder hinter Regalböden.
- **Indirektes Licht an der Decke** über Schränken.
- **Leuchtende Bettkante:** LED-Streifen unter dem Bett mit Bewegungsmelder als Nachtlicht.
- **Lichtakzente in Türkis und Lila** – sparsam einsetzen, sonst wirkt es schnell grell.
- **Pflanzen anstrahlen** für Schattenspiele an der Wand.

## Lichtfarbe richtig wählen

- **Warmweiß (ca. 2.700 K):** gemütlich, ideal für Wohn- und Schlafzimmer.
- **Neutralweiß (ca. 4.000 K):** für Küche und Arbeitsplatz.
- **Farbiges Licht:** als Akzent, abends lieber gedimmt.

## Sicherheit und Qualität

- Auf **CE-Kennzeichnung** und seriöse Hersteller achten.
- LED-Streifen nicht verdeckt auf brennbaren Materialien ohne passende Profile verlegen.
- Smarte Lampen: Passwörter ändern und Updates installieren.

Mehr Ideen für ein ganzes Zimmer findest du unter „Glow-Zimmer“, Grundlagen zu LEDs im Ratgeber „LED-Beleuchtung“.`,
    faq: [
      ["Welche Lichtfarbe ist am gemütlichsten?", "Warmweißes Licht um etwa 2.700 Kelvin wirkt besonders gemütlich."],
      ["Stört farbiges Licht den Schlaf?", "Sehr helles, bläuliches Licht am Abend kann den Schlaf beeinträchtigen. Gedimmtes, warmes oder rötliches Licht ist abends besser."],
    ],
  },
  {
    path: "haushalt-wohnen/wohnideen/deko-tipps",
    description: "Deko-Tipps für jede Wohnung: Farben, Textilien, Pflanzen, Bilder und die Dreier-Regel – so wird dein Zuhause gemütlich, ohne überladen zu wirken.",
    markdown: `Gute Deko macht aus einer Wohnung ein Zuhause. Mit ein paar Grundregeln wirkt es stimmig statt zusammengewürfelt.

## Farben: die 60-30-10-Regel

- **60 %** Grundfarbe (Wände, große Möbel)
- **30 %** Zweitfarbe (Vorhänge, Sofa, Teppich)
- **10 %** Akzentfarbe (Kissen, Vasen, Kunst)

So entsteht Harmonie mit einem gezielten Farbtupfer – zum Beispiel Türkis oder Lila.

## Die Dreier-Regel

Deko-Gegenstände wirken in **ungeraden Gruppen**, vor allem zu dritt, besonders lebendig. Kombiniere unterschiedliche Höhen und Materialien.

## Textilien

Kissen, Decken, Teppiche und Vorhänge machen Räume sofort weicher und wohnlicher – und lassen sich je nach Jahreszeit leicht austauschen.

## Pflanzen

Grünpflanzen bringen Leben in jeden Raum. Pflegeleicht sind z. B. Efeutute, Grünlilie, Zamioculcas oder Bogenhanf. Achtung bei Haustieren: Manche Zimmerpflanzen sind für Katzen und Hunde giftig.

## Bilder und Wände

- **Bildergalerie:** Rahmen zuerst auf dem Boden auslegen, dann aufhängen.
- **Mittelpunkt** der Bilder etwa auf Augenhöhe.
- **Spiegel** lassen kleine Räume größer wirken.

## Weniger ist mehr

Leere Flächen gönnen dem Auge Ruhe. Lieber wenige Lieblingsstücke als viele Kleinigkeiten.`,
    faq: [
      ["Wie dekoriere ich günstig?", "Mit Pflanzenablegern, selbst gerahmten Postkarten, Second-Hand-Fundstücken und saisonalem Wechsel von Kissenbezügen."],
      ["Welche Zimmerpflanzen sind pflegeleicht?", "Zum Beispiel Efeutute, Grünlilie, Zamioculcas und Bogenhanf. Bei Haustieren vorher prüfen, ob die Pflanze giftig ist."],
    ],
  },
  {
    path: "haushalt-wohnen/wohnideen/glow-zimmer",
    description: "Glow-Zimmer einrichten: Gaming-Ecke, Jugendzimmer oder Chill-Bereich mit LED-Licht, dunklen Farben und Neon-Akzenten – stilvoll statt kitschig.",
    markdown: `Ein **Glow-Zimmer** setzt auf dunklere Grundtöne und leuchtende Akzente – ideal für Gaming-Ecke, Jugendzimmer oder einen gemütlichen Rückzugsort.

## Die Basis

- **Dunkle, ruhige Wandfarbe** wie Anthrazit, Dunkelblau oder Aubergine – oder nur eine dunkle Akzentwand.
- **Matte Oberflächen** reflektieren weniger und lassen Licht weicher wirken.
- **Wenige, klare Möbel**, damit das Licht im Mittelpunkt steht.

## Licht-Elemente

1. **LED-Streifen** hinter Schreibtisch, Monitor oder Bett.
2. **Neon-Schriftzug** oder Leuchtschild mit LED-Technik als Hingucker.
3. **Lichtpaneele** an der Wand, die sich farbig steuern lassen.
4. **Stehleuchte mit indirektem Licht** für die Grundhelligkeit.

## Farben kombinieren

Türkis und Lila harmonieren gut miteinander. Wichtig: nicht mehr als zwei bis drei Lichtfarben gleichzeitig, sonst wirkt es unruhig.

## Gaming- und Arbeitsplatz

Indirektes Licht hinter dem Bildschirm (Bias Lighting) reduziert den Kontrast zwischen hellem Bildschirm und dunklem Raum. Für Arbeit und Hausaufgaben braucht es trotzdem helles, neutralweißes Arbeitslicht.

## Schlaf nicht vergessen

Vor dem Schlafen Lichter dimmen und auf warme Töne umstellen – helles, blaues Licht am Abend kann das Einschlafen erschweren. Timer und Zeitpläne in Apps helfen.`,
    faq: [
      ["Was ist Bias Lighting?", "Eine indirekte Beleuchtung hinter dem Bildschirm. Sie verringert den Helligkeitsunterschied und kann die Augen entlasten."],
      ["Sind Neon-Schilder sicher?", "Moderne Leuchtschilder arbeiten meist mit LEDs und Niederspannung. Achte auf CE-Kennzeichnung und seriöse Anbieter."],
    ],
  },
  {
    path: "haushalt-wohnen/wohnideen/led-beleuchtung",
    description: "LED-Beleuchtung verstehen: Lumen statt Watt, Lichtfarbe in Kelvin, Farbwiedergabe, Dimmbarkeit und Energieeffizienz – so wählst du die richtige LED.",
    markdown: `LEDs sind heute der Standard. Sie sparen viel Strom und halten lange. Damit das Licht auch gut aussieht, solltest du ein paar Angaben auf der Verpackung kennen.

## Lumen statt Watt

Die **Helligkeit** wird in **Lumen (lm)** angegeben, nicht in Watt. Watt zeigt nur den Stromverbrauch. Grobe Orientierung: Eine alte 60-Watt-Glühbirne entspricht etwa 800 Lumen.

## Lichtfarbe in Kelvin

- **2.700 K:** Warmweiß – gemütlich, für Wohn- und Schlafzimmer.
- **3.000 K:** Warmweiß, etwas klarer.
- **4.000 K:** Neutralweiß – Küche, Bad, Arbeitsplatz.
- **über 5.000 K:** Tageslichtweiß – eher für Werkstatt oder Keller.

## Farbwiedergabe (CRI / Ra)

Der **Farbwiedergabeindex** zeigt, wie natürlich Farben wirken. Werte ab etwa **Ra 80** sind gut, ab **Ra 90** sehr gut – wichtig im Bad, beim Schminken oder in der Küche.

## Dimmbar?

Nicht jede LED ist dimmbar. Für dimmbare LEDs brauchst du einen passenden Dimmer. Steht nichts auf der Verpackung, ist die Lampe meist nicht dimmbar.

## Energieeffizienz

Das EU-Energielabel reicht von A bis G. Auch LEDs der Klassen D bis F sind deutlich sparsamer als alte Glühbirnen.

## Lebensdauer und Entsorgung

LEDs halten viele Tausend Stunden. Defekte LED-Lampen gehören nicht in den Hausmüll, sondern zu Sammelstellen oder zurück in den Handel.`,
    faq: [
      ["Wie viel Lumen brauche ich im Wohnzimmer?", "Das hängt von Raumgröße und gewünschter Stimmung ab. Mehrere Lichtquellen mit insgesamt einigen tausend Lumen sind üblich, ergänzt durch dimmbares Stimmungslicht."],
      ["Wohin mit kaputten LED-Lampen?", "Zu Wertstoffhöfen oder Sammelstellen im Handel – nicht in den Hausmüll."],
    ],
    sources: [VZ, UBA],
  },
  {
    path: "haushalt-wohnen/einrichtung/kleine-wohnung-einrichten",
    description: "Kleine Wohnung einrichten: Platz sparen mit multifunktionalen Möbeln, hellen Farben, Spiegeln, Stauraum nach oben und klaren Zonen.",
    markdown: `Auch auf wenigen Quadratmetern lässt sich gemütlich und praktisch wohnen. Wer eine **kleine Wohnung einrichtet**, sollte jeden Zentimeter clever nutzen.

## Farben und Licht

- **Helle Wände** lassen Räume größer wirken.
- **Spiegel** gegenüber dem Fenster verdoppeln das Licht.
- **Mehrere Lichtquellen** statt einer zentralen Deckenleuchte.

## Multifunktionale Möbel

- Bett mit Schubladen oder Bettkasten
- Schlafsofa für Gäste
- Ausziehbarer Esstisch
- Hocker, die auch als Ablage dienen
- Klapptisch an der Wand

## Stauraum nach oben

Regale bis unter die Decke, Hängeschränke und Wandhaken nutzen die Höhe. Was selten gebraucht wird, kommt nach oben.

## Zonen schaffen

Ein Teppich, ein Regal als Raumteiler oder unterschiedliche Lichtquellen trennen Schlaf-, Arbeits- und Wohnbereich optisch – auch in einem einzigen Raum.

## Möbel mit Beinen

Möbel, unter denen man den Boden sieht, wirken leichter als massive Blöcke.

## Ausmisten

In kleinen Wohnungen ist Ordnung besonders wichtig. Tipps findest du im Ratgeber „Ordnung schaffen“ und unter „Mehr Stauraum“.`,
    faq: [
      ["Welche Farben lassen kleine Räume größer wirken?", "Helle, kühle Töne wie Weiß, helles Grau oder zartes Blau. Eine einheitliche Farbe für Wände und große Möbel wirkt ruhiger."],
      ["Wie trenne ich Wohn- und Schlafbereich in einem Raum?", "Mit einem offenen Regal, einem Vorhang, einem Teppich oder unterschiedlichem Licht."],
    ],
  },
  {
    path: "haushalt-wohnen/einrichtung/mehr-stauraum",
    description: "Mehr Stauraum schaffen: clevere Ideen für Flur, Küche, Bad und Schlafzimmer – von Türregalen bis Unterbettboxen, ohne Umbau.",
    markdown: `Zu wenig Platz? Oft ist genug Raum da – er wird nur nicht genutzt. Diese Ideen schaffen **mehr Stauraum** ohne Umbau.

## Ungenutzte Flächen entdecken

- **Unter dem Bett:** flache Boxen mit Rollen für Bettwäsche oder Saisonkleidung.
- **Über Türen:** schmale Regale oder Haken.
- **Hinter Türen:** Türregale für Schuhe, Putzmittel oder Vorräte.
- **Nischen:** maßgefertigte oder modulare Regale.
- **Oberhalb von Schränken:** Boxen für selten Genutztes.

## Küche

- Schubladeneinsätze und Stapelböden im Schrank
- Hängeleisten für Utensilien
- Vorratsdosen in einheitlicher Größe sparen Platz

## Bad

- Regal über der Toilette
- Spiegelschrank statt einfachem Spiegel
- Hängekörbe in der Dusche

## Flur

- Schmale Schuhschränke (Schuhkipper)
- Garderobe mit Hutablage
- Sitzbank mit Stauraum

## Schlafzimmer

- Kleiderschrank mit Einsätzen bis unter die Decke
- Vakuumbeutel für Bettdecken und Wintersachen

## Erst ausmisten

Bevor du neue Aufbewahrung kaufst: aussortieren. Weniger Dinge brauchen weniger Platz.`,
    faq: [
      ["Was ist die einfachste Stauraum-Idee?", "Unterbettboxen und Türregale – günstig, schnell und ohne Werkzeug."],
      ["Sind Vakuumbeutel gut für Kleidung?", "Für Bettdecken und Wintersachen ja. Empfindliche Wolle und Daunen nicht zu lange zusammenpressen."],
    ],
  },
  {
    path: "haushalt-wohnen/einrichtung/kinderzimmer-einrichten",
    description: "Kinderzimmer einrichten: sicher, mitwachsend und gemütlich – Tipps zu Möbeln, Stauraum, Spiel- und Schlafbereich und Kippschutz.",
    markdown: `Ein gutes Kinderzimmer ist Spielplatz, Rückzugsort und Schlafraum zugleich. Es sollte **sicher**, **flexibel** und **gemütlich** sein.

## Sicherheit zuerst

- **Kippschutz:** Regale und Schränke an der Wand befestigen.
- **Steckdosen-Sicherungen** für kleine Kinder.
- **Fenstersicherungen** und keine Kletterhilfen unter dem Fenster.
- **Kabel von Jalousien** außer Reichweite.
- Möbel und Spielzeug mit geprüften Siegeln.

## Mitwachsende Möbel

Ein Kinderbett, das sich zum Juniorbett umbauen lässt, höhenverstellbare Tische und Stühle sowie neutrale Schränke sparen später Geld.

## Zonen

- **Schlafen:** ruhige Ecke, dunkel und gemütlich.
- **Spielen:** freie Bodenfläche, Teppich, Spielkisten.
- **Lernen** (ab Schulalter): Schreibtisch mit gutem Licht – idealerweise Tageslicht von der Seite.

## Stauraum kindgerecht

Offene Regale und Boxen in Kinderhöhe, beschriftet mit Bildern. So können Kinder selbst aufräumen.

## Farben

Ruhige Grundfarben mit bunten Akzenten wirken weniger unruhig als ein komplett knallbuntes Zimmer. Akzente lassen sich mit Textilien leicht austauschen.

## Mitbestimmen lassen

Kinder fühlen sich wohler, wenn sie mitentscheiden dürfen – zum Beispiel bei Bettwäsche, Bildern oder der Leselampe.`,
    faq: [
      ["Wie befestige ich Möbel kippsicher?", "Mit den mitgelieferten Wandbefestigungen oder Kippschutzgurten. Die passenden Dübel richten sich nach der Wand."],
      ["Welche Farbe eignet sich fürs Kinderzimmer?", "Ruhige, helle Töne als Basis, ergänzt durch bunte Akzente, die das Kind mitbestimmen darf."],
    ],
  },
  {
    path: "haushalt-wohnen/einrichtung/homeoffice-einrichten",
    description: "Homeoffice einrichten: ergonomischer Schreibtisch und Stuhl, Bildschirmhöhe, Licht, Akustik und Trennung von Arbeit und Freizeit.",
    markdown: `Ein gut eingerichtetes **Homeoffice** schützt Rücken und Augen und hilft, konzentriert zu arbeiten.

## Schreibtisch und Stuhl

- **Tischhöhe:** Die Unterarme liegen entspannt auf, Ellbogen etwa im rechten Winkel. Höhenverstellbare Tische ermöglichen den Wechsel zwischen Sitzen und Stehen.
- **Stuhl:** verstellbare Sitzhöhe, Lehne mit Lordosenstütze. Füße flach auf dem Boden, Knie etwa im rechten Winkel.

## Bildschirm

- **Oberkante** etwa auf Augenhöhe oder leicht darunter.
- **Abstand** etwa eine Armlänge.
- Am Laptop: externen Monitor oder Laptopständer mit separater Tastatur und Maus nutzen.

## Licht

- Tageslicht **seitlich** zum Bildschirm, nicht von hinten oder vorne.
- Gute Arbeitsleuchte mit neutralweißem Licht.

## Akustik und Ruhe

Teppiche, Vorhänge und Regale dämpfen Hall. Ein Headset hilft bei Videocalls.

## Arbeit und Freizeit trennen

- Feste Arbeitszeiten und Pausen.
- Wenn möglich ein eigener Raum oder zumindest eine klar abgegrenzte Ecke.
- Arbeitsmaterial nach Feierabend wegräumen.

Mehr zu Haltung und Pausen findest du im Ratgeber „Ergonomisch arbeiten“.`,
    faq: [
      ["Wie hoch sollte der Bildschirm stehen?", "Die Oberkante etwa auf Augenhöhe oder leicht darunter, sodass der Blick leicht nach unten geht."],
      ["Lohnt sich ein höhenverstellbarer Schreibtisch?", "Für Menschen, die viel am Schreibtisch arbeiten, ist der Wechsel zwischen Sitzen und Stehen eine gute Möglichkeit, mehr Bewegung in den Arbeitstag zu bringen."],
    ],
    sources: [BAUA],
  },
  {
    path: "haushalt-wohnen/sparen-im-haushalt/strom-sparen",
    description: "Strom sparen im Haushalt: die größten Stromfresser, Standby vermeiden, effiziente Geräte nutzen und Verbrauch mit unserem Stromkosten-Rechner prüfen.",
    markdown: `Strom sparen schont Geldbörse und Klima. Oft reichen kleine Änderungen, die man kaum bemerkt.

## Die größten Stromfresser

Je nach Haushalt sind das häufig:
- Kühl- und Gefriergeräte
- Waschmaschine und Trockner
- Unterhaltungselektronik und Computer
- Elektrische Warmwasserbereitung
- Beleuchtung

## Schnelle Spartipps

1. **Standby vermeiden:** Schaltbare Steckdosenleisten für TV, Konsole und Computer.
2. **Kühlschrank richtig einstellen:** etwa 7 °C im Kühlschrank, −18 °C im Gefrierfach. Regelmäßig abtauen.
3. **Wäsche:** niedrige Temperaturen, Eco-Programme, Lufttrocknen statt Trockner.
4. **Kochen:** Deckel auf den Topf, Wasserkocher für heißes Wasser, Restwärme nutzen.
5. **Licht:** LEDs verwenden und nur in genutzten Räumen einschalten.

## Neue Geräte

Achte beim Kauf auf das **EU-Energielabel**. Ein sparsames Gerät lohnt sich vor allem bei Geräten, die viel laufen – wie Kühlschrank oder Waschmaschine.

## Verbrauch messen

Mit einem **Strommessgerät** für die Steckdose findest du heimliche Stromfresser. Wie viel ein Gerät im Jahr kostet, rechnest du mit unserem Stromkosten-Rechner unten aus: Watt, Nutzungsdauer und Strompreis eintragen – fertig.

## Tarif prüfen

Vergleiche regelmäßig deinen Stromtarif. Ein Wechsel ist in Deutschland und Österreich unkompliziert.`,
    faq: [
      ["Wie viel Strom verbraucht Standby?", "Einzeln oft nur wenige Watt, über alle Geräte und das ganze Jahr kann aber einiges zusammenkommen. Ein Strommessgerät zeigt es genau."],
      ["Welche Temperatur ist im Kühlschrank ideal?", "Etwa 7 °C im Kühlteil und −18 °C im Gefrierfach sind für die meisten Lebensmittel ausreichend."],
    ],
    sources: [VZ, UBA, { title: "Energieberatung der Verbraucherzentrale", url: "https://verbraucherzentrale-energieberatung.de/" }],
  },
  {
    path: "haushalt-wohnen/sparen-im-haushalt/heizkosten-senken",
    description: "Heizkosten senken: richtig lüften, Raumtemperatur anpassen, Heizkörper entlüften und frei halten, Thermostate nutzen – Tipps für Mieter und Eigentümer.",
    markdown: `Heizen ist für viele Haushalte der größte Energieposten. Mit einfachen Maßnahmen lässt sich deutlich sparen.

## Raumtemperatur anpassen

Jedes Grad weniger spart Energie – als Faustregel etwa **6 %** pro Grad. Orientierungswerte:
- Wohnzimmer: etwa 20 °C
- Schlafzimmer: etwa 16–18 °C
- Küche: etwa 18 °C

Räume nicht komplett auskühlen lassen – das fördert Schimmel.

## Richtig lüften

**Stoßlüften** statt Kippfenster: mehrmals täglich für einige Minuten Fenster weit öffnen, im Winter kürzer. Dabei die Heizung herunterdrehen. Gekippte Fenster kühlen die Wände aus und verschwenden Energie.

## Heizkörper

- **Entlüften**, wenn sie gluckern oder oben kalt bleiben.
- **Frei halten:** keine Möbel oder langen Vorhänge davor.
- **Thermostat** richtig verstehen: Stufe 3 entspricht meist etwa 20 °C – höher dreht nicht schneller auf.

## Smarte Thermostate

Programmierbare oder smarte Thermostate senken die Temperatur automatisch, wenn niemand zu Hause ist oder nachts.

## Wärme im Raum halten

- Rollläden und Vorhänge nachts schließen.
- Türen zu kühleren Räumen geschlossen halten.
- Dichtungen an Fenstern und Türen prüfen.

## Für Eigentümer

Dämmung, neue Fenster oder eine effizientere Heizung sparen langfristig am meisten. Lass dich von einer unabhängigen **Energieberatung** beraten – es gibt oft Förderungen.`,
    faq: [
      ["Wie viel spart ein Grad weniger?", "Als Faustregel etwa 6 Prozent Heizenergie pro Grad."],
      ["Ist Kipplüften schlecht?", "Im Winter ja: Es kühlt die Wände aus und verschwendet Energie. Besser mehrmals täglich kurz stoßlüften."],
    ],
    sources: [VZ, UBA],
  },
  {
    path: "haushalt-wohnen/sparen-im-haushalt/wasser-sparen",
    description: "Wasser sparen im Alltag: Sparduschkopf, Durchflussbegrenzer, Spülmaschine statt Handwäsche und warum warmes Wasser besonders viel Energie kostet.",
    markdown: `Wasser ist in Mitteleuropa meist reichlich vorhanden – aber **warmes Wasser kostet viel Energie**. Wer Wasser spart, spart deshalb oft vor allem Heizkosten.

## Im Bad

- **Duschen statt baden:** Ein Vollbad braucht deutlich mehr Wasser als eine kurze Dusche.
- **Sparduschkopf:** reduziert den Durchfluss spürbar, ohne dass das Duschen unangenehm wird.
- **Wasser beim Zähneputzen und Einseifen** abdrehen.
- **WC-Spartaste** nutzen.
- **Tropfende Hähne** reparieren – das läppert sich.

## In der Küche

- **Spülmaschine** statt Handwäsche, voll beladen und im Eco-Programm. Moderne Geschirrspüler brauchen meist weniger Wasser als Spülen von Hand.
- Geschirr nicht unter fließendem Wasser vorspülen.
- Gemüse in einer Schüssel waschen.

## Durchflussbegrenzer

Kleine **Perlatoren** für Wasserhähne mischen Luft bei und sparen Wasser – günstig und schnell montiert.

## Im Garten

- Regenwasser in einer Tonne sammeln.
- Morgens oder abends gießen, damit weniger verdunstet.
- Rasen seltener, dafür durchdringend wässern.

## Wäsche

Waschmaschine voll beladen und Eco-Programme nutzen.`,
    faq: [
      ["Spart eine Spülmaschine wirklich Wasser?", "Ja, ein moderner, voll beladener Geschirrspüler im Eco-Programm braucht in der Regel weniger Wasser und Energie als Spülen von Hand."],
      ["Lohnt sich ein Sparduschkopf?", "Ja, er ist günstig und spart vor allem warmes Wasser – und damit Energie."],
    ],
    sources: [UBA, VZ],
  },
  {
    path: "haushalt-wohnen/sparen-im-haushalt/lebensmittel-retten",
    description: "Lebensmittel retten: richtig lagern, Mindesthaltbarkeitsdatum verstehen, Reste verwerten und clever einkaufen – weniger wegwerfen, mehr sparen.",
    markdown: `Ein großer Teil der weggeworfenen Lebensmittel stammt aus privaten Haushalten. Mit ein paar Gewohnheiten landet deutlich weniger im Müll – und du sparst Geld.

## Mindesthaltbarkeitsdatum verstehen

- **Mindestens haltbar bis (MHD):** Bis zu diesem Datum garantiert der Hersteller Geschmack und Qualität. Danach ist das Lebensmittel oft noch gut. **Ansehen, riechen, probieren.**
- **Zu verbrauchen bis:** gilt für leicht verderbliche Lebensmittel wie frisches Hackfleisch. Nach diesem Datum nicht mehr essen.

## Richtig lagern

- **Kühlschrank:** oben Gekochtes und Reste, Mitte Milchprodukte, unten über dem Gemüsefach Fleisch und Fisch (kälteste Zone), Gemüsefach für Gemüse.
- **Nicht in den Kühlschrank:** Tomaten, Bananen, Kartoffeln, Brot.
- **Ältere Lebensmittel nach vorne** stellen.

## Clever einkaufen

- Einkaufsliste schreiben und Vorräte prüfen.
- Nicht hungrig einkaufen.
- Wochenplan für Mahlzeiten erstellen.

## Reste verwerten

- **Brot:** Croutons, Semmelknödel, Arme Ritter.
- **Gemüse:** Suppe, Pfanne, Smoothie.
- **Obst:** Kompott, Smoothies, Kuchen.
- **Einfrieren:** Viele Lebensmittel lassen sich portionsweise einfrieren.

## Teilen

Plattformen und Initiativen zum Foodsharing oder öffentliche Kühlschränke helfen, Überschüsse weiterzugeben.`,
    faq: [
      ["Darf man Lebensmittel nach dem MHD essen?", "Oft ja. Das MHD ist kein Verfallsdatum. Prüfe Aussehen, Geruch und Geschmack. Beim Verbrauchsdatum dagegen gilt: danach nicht mehr verzehren."],
      ["Wo ist die kälteste Stelle im Kühlschrank?", "Meist unten auf der Glasplatte über dem Gemüsefach – ideal für Fleisch und Fisch."],
    ],
    sources: [{ title: "Zu gut für die Tonne! (BMEL)", url: "https://www.zugutfuerdietonne.de/" }, VZ],
  },
  {
    path: "haushalt-wohnen/wohnen/wohnungssuche",
    description: "Wohnungssuche leicht gemacht: Suchkanäle, Bewerbungsmappe, Besichtigung, Warnsignale für Betrug und was du vor der Unterschrift prüfen solltest.",
    markdown: `Die **Wohnungssuche** kann in vielen Städten zäh sein. Gute Vorbereitung verschafft dir einen Vorsprung.

## Suchkanäle

- Immobilienportale mit Suchaufträgen und Benachrichtigungen
- Websites von Wohnungsgesellschaften und Genossenschaften
- Lokale Zeitungen und Aushänge
- Freunde, Familie, soziale Netzwerke
- In Österreich: geförderte und Gemeindewohnungen (z. B. Wiener Wohnen) mit eigenen Voraussetzungen

## Bewerbungsmappe vorbereiten

- Kurzes Anschreiben mit Vorstellung
- Kopie eines Ausweises (Teile schwärzen, die nicht nötig sind)
- Einkommensnachweise
- Bonitätsnachweis (z. B. SCHUFA-Auskunft in Deutschland)
- Mietschuldenfreiheitsbescheinigung der aktuellen Vermietung

## Bei der Besichtigung

- Pünktlich, freundlich, vorbereitet.
- Zustand prüfen: Feuchtigkeit, Schimmel, Fenster, Heizung, Elektrik.
- Fragen: Nebenkosten, Heizart, Lärm, Nachbarschaft.

## Warnsignale für Betrug

- Sehr günstige Miete in Top-Lage.
- Vermieter angeblich im Ausland, Schlüssel per Post gegen Vorauszahlung.
- Kaution oder Gebühren **vor** Besichtigung und Vertrag.

Zahle niemals Geld, bevor du die Wohnung gesehen und einen Vertrag hast.

Vor der Unterschrift hilft unsere Mietvertrag-Checkliste.`,
    faq: [
      ["Welche Unterlagen brauche ich für die Wohnungsbewerbung?", "Meist Ausweiskopie, Einkommensnachweise, Bonitätsauskunft und eine Bestätigung der bisherigen Vermietung über pünktliche Mietzahlungen."],
      ["Darf der Vermieter eine Besichtigungsgebühr verlangen?", "In der Regel nein. Sei besonders vorsichtig, wenn vor Besichtigung oder Vertrag Geld verlangt wird."],
    ],
    sources: [{ title: "Deutscher Mieterbund", url: "https://www.mieterbund.de/" }, { title: "Mietervereinigung Österreichs", url: "https://mietervereinigung.at/" }],
  },
  {
    path: "haushalt-wohnen/wohnen/mietvertrag-checkliste",
    description: "Mietvertrag-Checkliste: Miete, Nebenkosten, Kaution, Befristung, Schönheitsreparaturen und Haustiere – worauf du vor der Unterschrift achten solltest.",
    markdown: `Ein Mietvertrag bindet dich oft für Jahre. Lies ihn vor der Unterschrift in Ruhe – diese **Checkliste** hilft dabei.

## Die wichtigsten Punkte

1. **Mietparteien** korrekt eingetragen? Alle Mieter im Vertrag?
2. **Mietobjekt:** Adresse, Wohnfläche, mitvermietete Räume (Keller, Stellplatz).
3. **Miethöhe:** Kaltmiete bzw. Hauptmietzins und Nebenkosten getrennt ausgewiesen.
4. **Nebenkosten:** Welche Kosten werden umgelegt? Vorauszahlung realistisch?
5. **Kaution:** Höhe und Zahlungsweise. In Deutschland höchstens drei Nettokaltmieten, zahlbar in drei Raten.
6. **Befristung:** unbefristet oder befristet? In Österreich sind Befristungen bei Wohnungen im Vollanwendungsbereich des Mietrechtsgesetzes erst ab drei Jahren zulässig.
7. **Kündigungsfristen.**
8. **Mieterhöhungen:** Staffel- oder Indexmiete?
9. **Schönheitsreparaturen:** Viele starre Klauseln sind unwirksam – lass dich im Zweifel beraten.
10. **Haustiere, Untervermietung, Rauchen.**

## Übergabeprotokoll

Beim Einzug alle Mängel schriftlich festhalten und fotografieren, Zählerstände notieren. Beide Seiten unterschreiben.

## Unsicher?

Mietervereine bzw. Mieterschutzorganisationen prüfen Verträge für Mitglieder. Das lohnt sich vor allem bei ungewöhnlichen Klauseln.

Dieser Ratgeber ersetzt keine Rechtsberatung – Mietrecht unterscheidet sich zwischen Deutschland und Österreich teils deutlich.`,
    faq: [
      ["Wie hoch darf die Kaution sein?", "In Deutschland höchstens drei Nettokaltmieten. In Österreich gibt es keine feste gesetzliche Obergrenze, üblich sind meist bis zu drei bis sechs Monatsmieten; überhöhte Kautionen können unzulässig sein."],
      ["Was gehört ins Übergabeprotokoll?", "Zustand aller Räume, vorhandene Mängel, Zählerstände und die Anzahl der übergebenen Schlüssel – unterschrieben von beiden Seiten."],
    ],
    sources: [{ title: "Deutscher Mieterbund", url: "https://www.mieterbund.de/" }, { title: "oesterreich.gv.at – Wohnen und Miete", url: "https://www.oesterreich.gv.at/" }],
  },
  {
    path: "haushalt-wohnen/wohnen/umzug-checkliste",
    description: "Umzug-Checkliste: Was du 3 Monate, 1 Monat, 1 Woche vorher und nach dem Umzug erledigen musst – inklusive Ummeldung, Verträge und Kartons.",
    markdown: `Ein Umzug hat viele kleine Aufgaben. Mit dieser **Checkliste** behältst du den Überblick.

## 2–3 Monate vorher

- Alte Wohnung fristgerecht kündigen.
- Umzugstermin festlegen, Urlaub beantragen.
- Umzugsunternehmen vergleichen oder Helfer und Transporter organisieren.
- Ausmisten: Was nicht mit soll, verkaufen oder verschenken.

## 4 Wochen vorher

- Kartons, Klebeband, Polstermaterial besorgen.
- Halteverbotszone für den Umzugswagen bei der Gemeinde beantragen.
- Nachsendeauftrag bei der Post einrichten.
- Verträge prüfen: Strom, Gas, Internet, Versicherungen – kündigen, ummelden oder mitnehmen.

## 1 Woche vorher

- Kartons packen und beschriften (Raum und Inhalt).
- Wichtige Dokumente und Wertsachen separat transportieren.
- Kühlschrank leeren und abtauen.

## Am Umzugstag

- Zählerstände in alter und neuer Wohnung fotografieren.
- Übergabeprotokolle machen.
- Ein Erste-Tag-Paket packen: Werkzeug, Toilettenpapier, Ladekabel, Snacks, Bettzeug.

## Nach dem Umzug

- **Ummelden:** In Deutschland innerhalb von zwei Wochen beim Bürgeramt, in Österreich innerhalb von drei Tagen beim Meldeamt.
- Adresse ändern bei Bank, Arbeitgeber, Versicherungen, Krankenkasse, Abos.
- Fahrzeug ummelden bzw. Adresse aktualisieren.
- Kaution der alten Wohnung zurückfordern.`,
    faq: [
      ["Wie schnell muss ich mich ummelden?", "In Deutschland innerhalb von zwei Wochen, in Österreich innerhalb von drei Tagen nach dem Umzug."],
      ["Wie viele Umzugskartons brauche ich?", "Als grobe Faustregel rechnen viele mit etwa 20 bis 30 Kartons pro Person bzw. mehreren Kartons pro Zimmer – je nach Besitz."],
    ],
    sources: [{ title: "oesterreich.gv.at – Wohnsitz anmelden", url: "https://www.oesterreich.gv.at/" }],
  },
  {
    path: "haushalt-wohnen/wohnen/immobilien-basics",
    description: "Immobilien-Basics: Kaufen oder mieten, Eigenkapital, Nebenkosten beim Kauf, Finanzierung und Besichtigung – die wichtigsten Grundlagen verständlich erklärt.",
    markdown: `Eine Immobilie zu kaufen ist für die meisten die größte finanzielle Entscheidung ihres Lebens. Diese **Immobilien-Basics** helfen beim Einstieg.

## Kaufen oder mieten?

Beides kann sinnvoll sein. Kaufen bietet Sicherheit vor Mieterhöhungen und baut Vermögen auf, bindet aber viel Kapital und macht weniger flexibel. Mieten ist flexibel und oft günstiger in den ersten Jahren. Entscheidend sind Lebensplanung, Region und Finanzen.

## Eigenkapital

Banken erwarten meist, dass zumindest die **Kaufnebenkosten** aus eigenem Geld bezahlt werden, oft auch ein Teil des Kaufpreises. Je mehr Eigenkapital, desto günstiger in der Regel die Finanzierung.

## Kaufnebenkosten

Zum Kaufpreis kommen u. a.:
- **Grunderwerbsteuer**
- **Notar- bzw. Vertragserrichtungskosten** und Grundbucheintragung
- gegebenenfalls **Maklerprovision**

Diese Kosten können je nach Land und Bundesland einen spürbaren Prozentsatz des Kaufpreises ausmachen.

## Finanzierung

- Monatliche Rate realistisch planen – mit Puffer.
- **Zinsbindung** beachten: Wie lange ist der Zins fest?
- Tilgung nicht zu niedrig wählen.
- Mehrere Angebote vergleichen und unabhängig beraten lassen.

## Besichtigung

Bausubstanz, Feuchtigkeit, Heizung, Dach, Energieausweis, Lage und Infrastruktur prüfen. Bei Wohnungen: Protokolle der Eigentümerversammlungen und Rücklagen ansehen.

Dieser Artikel ist ein Überblick und ersetzt keine Finanz- oder Rechtsberatung.`,
    faq: [
      ["Wie viel Eigenkapital braucht man?", "Das hängt von Bank und Objekt ab. Üblich ist, mindestens die Kaufnebenkosten selbst zu tragen, besser zusätzlich einen Teil des Kaufpreises."],
      ["Was ist der Energieausweis?", "Ein Dokument, das den Energiebedarf bzw. -verbrauch eines Gebäudes zeigt. Er muss bei Verkauf und Vermietung vorgelegt werden."],
    ],
    sources: [{ title: "Verbraucherzentrale – Bauen und Wohnen", url: "https://www.verbraucherzentrale.de/wissen/energie/bauen-und-wohnen" }],
  },

  /* ================= Gesundheit & Wohlbefinden ================= */
  {
    path: "gesundheit-wohlbefinden/ernaehrung/gesunde-ernaehrung",
    description: "Gesunde Ernährung einfach erklärt: viel Gemüse und Vollkorn, wenig Zucker und Salz, genug trinken – die wichtigsten Regeln für den Alltag.",
    markdown: `Gesunde Ernährung muss nicht kompliziert sein. Die Empfehlungen von Fachgesellschaften lassen sich auf ein paar einfache Grundsätze herunterbrechen.

## Die Grundregeln

1. **Viel pflanzliche Lebensmittel:** Gemüse, Obst, Hülsenfrüchte, Nüsse und Vollkorn bilden die Basis.
2. **Gemüse und Obst:** Mehrere Portionen am Tag, Gemüse eher mehr als Obst.
3. **Vollkorn** statt Weißmehl – mehr Ballaststoffe, länger satt.
4. **Milchprodukte** täglich in Maßen.
5. **Fisch** ein- bis zweimal pro Woche.
6. **Fleisch und Wurst** nur in kleinen Mengen.
7. **Pflanzliche Öle** wie Raps- oder Olivenöl bevorzugen.
8. **Zucker und Salz** sparsam.
9. **Wasser** als Hauptgetränk.

## Der Teller-Trick

Stell dir deinen Teller vor: etwa **die Hälfte Gemüse**, ein Viertel Vollkornbeilage, ein Viertel Eiweiß (Hülsenfrüchte, Fisch, Ei, Fleisch).

## Achtsam essen

- Langsam essen und auf Sättigung achten.
- Nicht nebenbei vor dem Bildschirm.
- Regelmäßige Mahlzeiten helfen, Heißhunger zu vermeiden.

## Keine Verbote

Gesunde Ernährung heißt nicht Verzicht auf alles. Ein Stück Kuchen gehört ebenso zum Leben – es kommt auf das Gesamtbild an.

Bei Vorerkrankungen, Allergien oder besonderen Lebenssituationen wie Schwangerschaft lass dich ärztlich oder von einer Ernährungsfachkraft beraten.`,
    faq: [
      ["Wie viel Gemüse sollte ich essen?", "Fachgesellschaften empfehlen mehrere Portionen Gemüse und Obst täglich, wobei Gemüse den größeren Teil ausmachen sollte."],
      ["Ist Fett ungesund?", "Nicht grundsätzlich. Pflanzliche Öle, Nüsse und Fisch liefern wertvolle Fettsäuren. Sparsam sein sollte man mit stark verarbeiteten, fettreichen Lebensmitteln."],
    ],
    sources: [DGE, GESUNDAT],
  },
  {
    path: "gesundheit-wohlbefinden/ernaehrung/gesund-kochen-im-alltag",
    description: "Gesund kochen im Alltag: Meal Prep, Vorratsliste, schnelle Basisrezepte und Tipps, wie gesundes Essen auch an stressigen Tagen klappt.",
    markdown: `Gesund essen scheitert oft nicht am Wissen, sondern an der Zeit. Mit etwas Planung klappt **gesundes Kochen** auch an vollen Tagen.

## Wochenplan

Plane am Wochenende grob vier bis fünf Mahlzeiten. Daraus ergibt sich die Einkaufsliste – und du sparst Zeit, Geld und Lebensmittel.

## Vorrat für spontane Gerichte

- Vollkornnudeln, Reis, Haferflocken
- Hülsenfrüchte in Dosen oder getrocknet
- Passierte Tomaten
- Tiefkühlgemüse (genauso nährstoffreich wie frisch)
- Eier, Joghurt, Käse
- Gewürze, Brühe, Öl

## Meal Prep

Koche größere Mengen und teile sie auf:
- Ein großer Topf Gemüsesuppe oder Chili für mehrere Tage
- Gekochtes Getreide und gebackenes Ofengemüse als Basis für Bowls
- Portionen einfrieren

## Schnelle Basisrezepte

- **Ofengemüse:** Gemüse schneiden, mit Öl und Gewürzen aufs Blech, etwa 25 Minuten backen.
- **Gemüsepfanne mit Ei oder Tofu.**
- **Vollkornnudeln mit Tomaten-Linsen-Sauce.**
- **Overnight Oats** fürs Frühstück.

## Tricks

- Gemüse vorgeschnitten lagern (z. B. Karottensticks).
- Mehr Gewürze und Kräuter statt Salz.
- Die doppelte Menge kochen – Mittagessen für morgen ist schon fertig.`,
    faq: [
      ["Ist Tiefkühlgemüse gesund?", "Ja. Es wird meist kurz nach der Ernte schockgefroren und behält viele Nährstoffe."],
      ["Wie lange hält vorgekochtes Essen?", "Im Kühlschrank meist zwei bis drei Tage, eingefroren deutlich länger. Gut verschlossen und schnell abgekühlt lagern."],
    ],
    sources: [DGE],
  },
  {
    path: "gesundheit-wohlbefinden/ernaehrung/genug-trinken",
    description: "Genug trinken: Wie viel Wasser Erwachsene brauchen, welche Getränke sich eignen, Anzeichen für zu wenig Flüssigkeit und Tipps gegen Trinkmuffel.",
    markdown: `Wasser ist lebenswichtig. Schon ein leichter Flüssigkeitsmangel kann Konzentration und Leistungsfähigkeit beeinträchtigen.

## Wie viel sollte man trinken?

Für Erwachsene wird als Orientierung eine Trinkmenge von etwa **1,5 Litern pro Tag** empfohlen. Den Rest der Flüssigkeit liefert die Nahrung. Mehr braucht man bei:
- Hitze
- Sport und körperlicher Arbeit
- Fieber, Durchfall oder Erbrechen

Bei bestimmten Erkrankungen (z. B. Herz- oder Nierenerkrankungen) kann eine andere Trinkmenge nötig sein – das klärt die Ärztin oder der Arzt.

## Die besten Getränke

- **Wasser** (Leitungs- oder Mineralwasser)
- **Ungesüßte Kräuter- und Früchtetees**
- **Saftschorlen** im Verhältnis 1:3 (ein Teil Saft, drei Teile Wasser)

Zuckerhaltige Limonaden und Energydrinks sind keine guten Durstlöscher. Kaffee und schwarzer Tee zählen in normalen Mengen zur Flüssigkeitsbilanz.

## Anzeichen für zu wenig Flüssigkeit

- Durst, trockener Mund
- Dunkler Urin
- Kopfschmerzen, Müdigkeit
- Konzentrationsprobleme

Ältere Menschen haben oft weniger Durstgefühl und sollten bewusst trinken.

## Tipps für Trinkmuffel

- Wasserflasche immer sichtbar dabei haben.
- Zu jeder Mahlzeit ein Glas Wasser.
- Wasser mit Zitrone, Gurke, Minze oder Beeren aromatisieren.
- Trink-App oder Erinnerungen nutzen.`,
    faq: [
      ["Wie viel Wasser sollte ich am Tag trinken?", "Als Orientierung für Erwachsene etwa 1,5 Liter, bei Hitze und Sport mehr."],
      ["Zählt Kaffee zur Trinkmenge?", "In normalen Mengen ja. Wasser und ungesüßter Tee bleiben aber die besten Durstlöscher."],
    ],
    sources: [DGE, GESUNDAT],
  },
  {
    path: "gesundheit-wohlbefinden/ernaehrung/gesunde-snacks",
    description: "Gesunde Snacks für zwischendurch: schnelle Ideen für Büro, Schule und Sport – mit Obst, Gemüse, Nüssen und Joghurt statt Süßigkeiten.",
    markdown: `Der kleine Hunger kommt garantiert – besser, wenn dann etwas Gesundes griffbereit ist. Diese **gesunden Snacks** sind schnell gemacht und halten satt.

## Frisch

- **Gemüsesticks** (Karotte, Paprika, Gurke, Kohlrabi) mit Hummus oder Kräuterquark
- **Obst:** Apfel, Banane, Beeren, Trauben
- **Cherrytomaten** und **Radieschen**

## Mit Eiweiß – macht länger satt

- Naturjoghurt oder Skyr mit Beeren
- Hartgekochtes Ei
- Hüttenkäse auf Vollkornknäckebrot
- Edamame

## Für unterwegs

- **Nüsse** (eine Handvoll ist eine gute Portion)
- Selbst gemachte **Energiekugeln** aus Datteln, Haferflocken und Nüssen
- Vollkornbrot mit Aufstrich
- Trockenobst in kleinen Mengen

## Für Kinder

- Obstspieße
- Apfelschnitze mit Nussmus
- Vollkorn-Mini-Pfannkuchen

## Tipps

- **Vorbereiten:** Am Abend Snackboxen packen.
- **Etiketten lesen:** Viele „Fitness-Riegel“ enthalten viel Zucker.
- **Portionen:** Auch gesunde Snacks liefern Energie – Nüsse sind gesund, aber kalorienreich.
- **Hunger oder Durst?** Manchmal hilft schon ein Glas Wasser.`,
    faq: [
      ["Sind Nüsse ein guter Snack?", "Ja, sie liefern gesunde Fette, Eiweiß und Ballaststoffe. Eine Handvoll pro Tag ist eine gute Portion."],
      ["Welcher Snack macht lange satt?", "Kombinationen aus Eiweiß und Ballaststoffen, etwa Joghurt mit Haferflocken oder Gemüsesticks mit Hummus."],
    ],
    sources: [DGE],
  },
  {
    path: "gesundheit-wohlbefinden/bewegung/fitness-fuer-einsteiger",
    description: "Fitness für Einsteiger: Wie viel Bewegung empfohlen wird, wie du sanft startest, ein einfacher Wochenplan und Tipps, um dranzubleiben.",
    markdown: `Der Einstieg ist oft der schwerste Teil. Die gute Nachricht: Schon wenig Bewegung bringt viel für Gesundheit und Wohlbefinden.

## Wie viel Bewegung wird empfohlen?

Die Weltgesundheitsorganisation (WHO) empfiehlt Erwachsenen:
- **150 bis 300 Minuten** moderate Ausdaueraktivität pro Woche (z. B. zügiges Gehen, Radfahren) **oder** 75 bis 150 Minuten intensive Aktivität
- An mindestens **zwei Tagen** muskelkräftigende Übungen
- Langes Sitzen regelmäßig unterbrechen

Jede Bewegung zählt – auch zehn Minuten.

## Sanft starten

1. **Klein anfangen:** Drei Einheiten à 20–30 Minuten pro Woche.
2. **Etwas wählen, das Spaß macht:** Gehen, Radfahren, Schwimmen, Tanzen.
3. **Langsam steigern:** Erst Dauer, dann Intensität.
4. **Pausen einplanen:** Muskeln wachsen in der Erholung.

## Beispiel-Wochenplan

- **Montag:** 30 Minuten zügig spazieren
- **Mittwoch:** 20 Minuten Kraftübungen zu Hause (siehe „Workouts für zu Hause“)
- **Freitag:** 30 Minuten Radfahren oder Schwimmen
- **Wochenende:** Wanderung oder Ausflug

## Dranbleiben

- Feste Termine im Kalender
- Mit Freunden trainieren
- Fortschritte notieren

## Sicherheit

Wenn du lange inaktiv warst, Vorerkrankungen hast oder älter bist, sprich vor dem Start mit deiner Hausarztpraxis. Bei Schmerzen in der Brust, Schwindel oder Atemnot sofort aufhören.`,
    faq: [
      ["Wie viel Sport ist gesund?", "Die WHO empfiehlt Erwachsenen 150 bis 300 Minuten moderate Bewegung pro Woche plus zweimal Krafttraining."],
      ["Muskelkater – trainieren oder pausieren?", "Bei leichtem Muskelkater ist lockere Bewegung in Ordnung. Intensives Training der betroffenen Muskeln lieber verschieben."],
    ],
    sources: [WHO, GESUND],
  },
  {
    path: "gesundheit-wohlbefinden/bewegung/workouts-fuer-zu-hause",
    description: "Workouts für zu Hause ohne Geräte: ein 20-Minuten-Ganzkörpertraining mit Kniebeugen, Liegestützen und Plank – mit Varianten für Einsteiger.",
    markdown: `Für ein wirksames Training brauchst du kein Fitnessstudio. Mit dem eigenen Körpergewicht kannst du zu Hause alle großen Muskelgruppen trainieren.

## Aufwärmen (5 Minuten)

Auf der Stelle gehen oder locker joggen, Armkreisen, Hüftkreisen, Schulterkreisen.

## 20-Minuten-Ganzkörper-Workout

Jede Übung **40 Sekunden**, dann **20 Sekunden Pause**. Zwei bis drei Runden.

1. **Kniebeugen:** Füße schulterbreit, Po nach hinten, Knie zeigen in Richtung Zehen.
2. **Liegestütze:** Einsteiger auf den Knien oder an einer Wand bzw. Tischkante.
3. **Ausfallschritte:** abwechselnd links und rechts, Oberkörper aufrecht.
4. **Plank (Unterarmstütz):** Körper gerade wie ein Brett, Bauch fest.
5. **Glute Bridge:** Rückenlage, Füße aufgestellt, Becken anheben.
6. **Superman:** Bauchlage, Arme und Beine leicht anheben.

## Cool-down

Leichtes Dehnen von Oberschenkeln, Waden, Brust und Schultern.

## Tipps

- **Technik vor Tempo:** Lieber langsam und sauber.
- **Rutschfeste Unterlage** wie eine Gymnastikmatte.
- **Steigern:** Mehr Runden oder längere Belastungsphasen.
- **Regelmäßigkeit** zählt mehr als Intensität: zwei- bis dreimal pro Woche.

Bei Schmerzen in Gelenken oder Rücken Übung abbrechen und gegebenenfalls ärztlich abklären lassen.`,
    faq: [
      ["Bringt Training ohne Geräte etwas?", "Ja. Übungen mit dem eigenen Körpergewicht stärken Muskeln und Ausdauer – besonders für Einsteiger sehr effektiv."],
      ["Wie oft sollte ich zu Hause trainieren?", "Zwei bis drei Mal pro Woche mit einem Tag Pause dazwischen ist ein guter Start."],
    ],
    sources: [WHO],
  },
  {
    path: "gesundheit-wohlbefinden/bewegung/mehr-bewegung-im-alltag",
    description: "Mehr Bewegung im Alltag: Treppen statt Lift, aktive Pausen, Rad statt Auto – 12 einfache Ideen, die ohne Sporttermin funktionieren.",
    markdown: `Nicht jeder hat Zeit oder Lust auf Sport. Aber jede Bewegung im Alltag zählt – und summiert sich.

## 12 Ideen für mehr Bewegung

1. **Treppen statt Aufzug.**
2. **Kurze Wege zu Fuß** oder mit dem Rad.
3. **Eine Station früher aussteigen** und den Rest gehen.
4. **Telefonate im Gehen.**
5. **Stehpausen:** Jede halbe Stunde kurz aufstehen.
6. **Höhenverstellbarer Schreibtisch** oder Arbeiten im Stehen.
7. **Mittagsspaziergang** statt Kantine-Sitzen.
8. **Wasser holen:** kleine Flasche, öfter auffüllen.
9. **Haushalt aktiv erledigen:** Staubsaugen, Gartenarbeit, Fensterputzen.
10. **Mit Kindern toben** – Fangen spielen zählt!
11. **Zähneputzen auf einem Bein** – trainiert das Gleichgewicht.
12. **Abendspaziergang** nach dem Essen.

## Warum Sitzen ein Problem ist

Langes, ununterbrochenes Sitzen gilt als Gesundheitsrisiko. Die WHO empfiehlt, Sitzzeiten zu reduzieren und regelmäßig zu unterbrechen.

## Schrittzähler als Motivation

Ein Schrittzähler im Handy oder auf der Uhr zeigt, wie viel du dich bewegst. Wichtig ist nicht eine bestimmte Zahl, sondern **mehr als gestern**.`,
    faq: [
      ["Sind 10.000 Schritte nötig?", "Die Zahl ist eine eingängige Marke, aber keine feste Regel. Studien zeigen schon bei weniger Schritten Vorteile – mehr Bewegung als bisher ist das Ziel."],
      ["Reicht Alltagsbewegung als Sport?", "Sie ist eine wichtige Basis. Ergänzend empfehlen Fachleute gezieltes Krafttraining zweimal pro Woche."],
    ],
    sources: [WHO],
  },
  {
    path: "gesundheit-wohlbefinden/bewegung/wandern-und-spazieren",
    description: "Wandern und Spazieren: warum Gehen so gesund ist, wie du die richtige Tour wählst, Ausrüstung, Sicherheit in den Bergen und Ideen für Familien.",
    markdown: `Gehen ist die natürlichste Bewegungsform – gelenkschonend, kostenlos und gut für Körper und Kopf. Ob kurzer Spaziergang oder Tageswanderung: Raus in die Natur lohnt sich.

## Warum Gehen so gut tut

- Stärkt Herz, Kreislauf und Ausdauer
- Schont die Gelenke
- Baut Stress ab – besonders in der Natur
- Lässt sich in jeden Alltag einbauen

## Die richtige Tour wählen

- **Länge und Höhenmeter** realistisch einschätzen.
- **Wegmarkierungen** beachten (in Österreich und der Schweiz z. B. Schwierigkeitsfarben für Bergwege).
- **Einkehr und Rückweg** einplanen.
- **Wetterbericht** prüfen, besonders in den Bergen.

## Ausrüstung

- Feste Schuhe mit Profil
- Wetterfeste Jacke, Zwiebellook
- Wasser und Proviant
- Sonnenschutz
- Handy mit geladenem Akku, Karte oder Wander-App
- Kleines Erste-Hilfe-Set

## Sicherheit in den Bergen

- Früh starten, Gewitter meiden.
- Umkehren ist keine Niederlage.
- Jemandem die Route mitteilen.
- Notruf: **112** (europaweit), in Österreich zusätzlich **140** für die Bergrettung.

## Mit Kindern

Kurze Touren mit Zielen wie Bach, Spielplatz oder Aussichtsturm, viele Pausen und Entdeckerspiele. Ideen findest du bei unseren Ausflugszielen.`,
    faq: [
      ["Welche Schuhe brauche ich zum Wandern?", "Für leichte Wege reichen feste Schuhe mit gutem Profil. In alpinem Gelände sind knöchelhohe Wanderschuhe empfehlenswert."],
      ["Welche Notrufnummer gilt in den Bergen?", "Europaweit die 112, in Österreich zusätzlich die 140 für die Bergrettung."],
    ],
    sources: [{ title: "Österreichischer Alpenverein – Sicher am Berg", url: "https://www.alpenverein.at/" }, WHO],
  },
  {
    path: "gesundheit-wohlbefinden/schlaf/besser-schlafen",
    description: "Besser schlafen: Schlafhygiene-Regeln, ideale Schlafumgebung, Licht, Koffein und Bildschirme – und wann du bei Schlafproblemen ärztliche Hilfe suchen solltest.",
    markdown: `Guter Schlaf ist die Grundlage für Gesundheit, Stimmung und Konzentration. Erwachsene brauchen meist etwa **7 bis 9 Stunden**. Viele Schlafprobleme lassen sich mit einfachen Gewohnheiten verbessern.

## Schlafhygiene: die wichtigsten Regeln

1. **Regelmäßige Zeiten:** Auch am Wochenende ungefähr zur gleichen Zeit aufstehen.
2. **Tageslicht am Morgen:** stärkt den inneren Rhythmus.
3. **Koffein** am Nachmittag und Abend meiden.
4. **Alkohol** hilft beim Einschlafen nicht wirklich – er stört den Schlaf in der zweiten Nachthälfte.
5. **Schwere Mahlzeiten** kurz vor dem Schlafen vermeiden.
6. **Bewegung** tagsüber, aber kein intensiver Sport direkt vor dem Schlafen.
7. **Bildschirme** etwa eine Stunde vorher weglegen.
8. **Das Bett nur zum Schlafen** (und für Intimität) nutzen.

## Wenn du nicht einschlafen kannst

Nach etwa 20 Minuten Wachliegen lieber aufstehen, in einem anderen Raum etwas Ruhiges tun und erst bei Müdigkeit zurück ins Bett. Nicht auf die Uhr schauen.

## Die Schlafumgebung

Dunkel, ruhig und eher kühl. Mehr dazu unter „Schlafzimmer optimieren“, Tipps für den Abend unter „Abendroutine“.

## Wann zum Arzt?

Wenn Schlafprobleme über Wochen anhalten, du tagsüber stark müde bist, laut schnarchst mit Atemaussetzern oder die Beine nachts unruhig sind, sprich mit deiner Hausarztpraxis.`,
    faq: [
      ["Wie viel Schlaf brauchen Erwachsene?", "Die meisten Erwachsenen brauchen etwa 7 bis 9 Stunden Schlaf pro Nacht."],
      ["Hilft ein Mittagsschlaf?", "Ein kurzes Nickerchen von 10 bis 20 Minuten kann erfrischen. Längere Nickerchen am Nachmittag können den Nachtschlaf stören."],
    ],
    sources: [GESUND, GESUNDAT],
  },
  {
    path: "gesundheit-wohlbefinden/schlaf/abendroutine",
    description: "Abendroutine für besseren Schlaf: 60 Minuten vor dem Schlafen bewusst runterfahren – mit Licht, Ritualen, Notizbuch und Entspannungsübungen.",
    markdown: `Unser Körper liebt Rituale. Eine feste **Abendroutine** signalisiert ihm: Jetzt ist Zeit zum Runterfahren.

## Die letzte Stunde vor dem Schlafen

**60 Minuten vorher**
- Bildschirme ausschalten oder zumindest den Nachtmodus nutzen.
- Licht dimmen, warmes Licht statt hellem Deckenlicht.

**45 Minuten vorher**
- Kleinigkeiten für morgen vorbereiten: Kleidung, Tasche.
- Gedanken aufschreiben: To-dos und Sorgen in ein Notizbuch – dann müssen sie nicht im Kopf kreisen.

**30 Minuten vorher**
- Warme Dusche oder Fußbad.
- Kräutertee ohne Koffein.

**15 Minuten vorher**
- Lesen (auf Papier), leise Musik oder eine Entspannungsübung.

## Einfache Entspannungsübungen

- **4-7-8-Atmung:** 4 Sekunden einatmen, 7 halten, 8 ausatmen.
- **Progressive Muskelentspannung:** Muskelgruppen nacheinander anspannen und lösen.
- **Bodyscan:** Mit der Aufmerksamkeit langsam durch den Körper wandern.

## Wichtig

Die Routine muss zu dir passen. Wähle zwei, drei Elemente und bleib einige Wochen dabei. Weitere Tipps findest du unter „Besser schlafen“.`,
    faq: [
      ["Wie lange sollte eine Abendroutine dauern?", "Schon 20 bis 60 Minuten bewusstes Runterfahren können helfen. Wichtiger als die Dauer ist die Regelmäßigkeit."],
      ["Hilft Lesen beim Einschlafen?", "Für viele ja – am besten auf Papier oder einem E-Reader ohne helle Hintergrundbeleuchtung."],
    ],
    sources: [GESUND],
  },
  {
    path: "gesundheit-wohlbefinden/schlaf/schlafzimmer-optimieren",
    description: "Schlafzimmer optimieren: ideale Temperatur, Dunkelheit, Ruhe, Matratze und Kissen – so wird dein Schlafzimmer zur Wohlfühl-Oase für guten Schlaf.",
    markdown: `Die Umgebung beeinflusst den Schlaf stark. Mit ein paar Änderungen wird dein Schlafzimmer zum Ort, an dem du wirklich zur Ruhe kommst.

## Temperatur

Eher **kühl**: Viele schlafen bei etwa **16 bis 19 °C** am besten. Vor dem Schlafen kurz stoßlüften.

## Dunkelheit

- Verdunkelungsvorhänge oder Rollläden
- Standby-Lämpchen abkleben oder Geräte ganz ausschalten
- Schlafmaske als einfache Lösung

## Ruhe

- Ohrstöpsel bei Straßenlärm oder schnarchendem Partner
- Teppiche und Vorhänge dämpfen Geräusche
- Gleichmäßiges Rauschen (White Noise) kann störende Geräusche überdecken

## Matratze und Kissen

- Die richtige **Matratze** ist individuell: Sie sollte die Wirbelsäule stützen, ohne zu drücken. Probeliegen lohnt sich.
- Matratzen nach vielen Jahren Nutzung prüfen – durchgelegen?
- Das **Kissen** passend zur Schlafposition wählen: Seitenschläfer brauchen meist ein höheres Kissen als Rückenschläfer.

## Weniger Ablenkung

- Kein Fernseher und kein Schreibtisch im Blickfeld
- Handy außerhalb der Reichweite, Wecker statt Smartphone
- Aufgeräumt und ruhig gestaltet

## Farben und Licht

Gedeckte, ruhige Farben und warmes, dimmbares Licht unterstützen die Entspannung.`,
    faq: [
      ["Welche Temperatur ist im Schlafzimmer ideal?", "Viele Menschen schlafen bei etwa 16 bis 19 °C am besten."],
      ["Wie oft sollte man die Matratze wechseln?", "Eine feste Zahl gibt es nicht. Ist sie durchgelegen, hart geworden oder wachst du mit Verspannungen auf, ist es Zeit für eine neue."],
    ],
    sources: [GESUND],
  },
  {
    path: "gesundheit-wohlbefinden/achtsamkeit/stress-reduzieren",
    description: "Stress reduzieren im Alltag: Ursachen erkennen, Atemübungen, Pausen, Bewegung und Grenzen setzen – plus Warnsignale, bei denen du Hilfe holen solltest.",
    markdown: `Stress gehört zum Leben – kurzfristig macht er uns sogar leistungsfähiger. Dauerstress belastet aber Körper und Psyche. Diese Strategien helfen, **Stress zu reduzieren**.

## Stressoren erkennen

Notiere eine Woche lang, wann du dich gestresst fühlst. Oft zeigen sich Muster: bestimmte Termine, Menschen, Uhrzeiten oder zu viele Aufgaben auf einmal.

## Sofort-Hilfen

- **Atmung:** Langsam durch die Nase einatmen (4 Sekunden), länger ausatmen (6 Sekunden). Ein paar Minuten reichen.
- **Kurze Bewegung:** Ein Spaziergang um den Block.
- **Pause** vom Bildschirm.

## Langfristige Strategien

1. **Prioritäten setzen:** Was ist wirklich wichtig? Was kann warten oder wegfallen?
2. **Nein sagen** lernen.
3. **Regelmäßige Bewegung** baut Stresshormone ab.
4. **Ausreichend Schlaf.**
5. **Soziale Kontakte** pflegen.
6. **Erholungsinseln:** Hobbys, Natur, Zeit ohne Handy.
7. **Achtsamkeit und Entspannungsverfahren** wie Meditation oder progressive Muskelentspannung.

## Warnsignale

Anhaltende Erschöpfung, Schlafstörungen, Gereiztheit, Konzentrationsprobleme, körperliche Beschwerden ohne erkennbare Ursache oder Niedergeschlagenheit über Wochen sind Signale, dir Unterstützung zu holen – bei der Hausarztpraxis, Beratungsstellen oder Psychotherapie.

**In einer akuten Krise** erreichst du rund um die Uhr Hilfe: in Deutschland die Telefonseelsorge (0800 111 0 111 oder 0800 111 0 222), in Österreich die Telefonseelsorge unter 142.`,
    faq: [
      ["Was hilft schnell gegen Stress?", "Bewusstes, langsames Atmen mit verlängerter Ausatmung, kurze Bewegung und eine Pause vom Bildschirm."],
      ["Wann sollte ich mir Hilfe holen?", "Wenn Erschöpfung, Schlafprobleme oder Niedergeschlagenheit über Wochen anhalten oder den Alltag stark beeinträchtigen."],
    ],
    sources: [GESUND, GESUNDAT, { title: "TelefonSeelsorge Deutschland", url: "https://www.telefonseelsorge.de/" }],
  },
  {
    path: "gesundheit-wohlbefinden/achtsamkeit/achtsamkeit-lernen",
    description: "Achtsamkeit lernen: Was Achtsamkeit bedeutet, einfache Übungen für den Alltag und wie du in wenigen Minuten täglich präsenter und gelassener wirst.",
    markdown: `**Achtsamkeit** bedeutet, den gegenwärtigen Moment bewusst und ohne Bewertung wahrzunehmen. Klingt einfach – ist im hektischen Alltag aber oft schwer. Die gute Nachricht: Achtsamkeit lässt sich trainieren.

## Was Achtsamkeit bringen kann

Studien zu achtsamkeitsbasierten Programmen zeigen, dass regelmäßige Übung helfen kann, Stress besser zu bewältigen und gelassener zu reagieren. Sie ist aber kein Ersatz für eine Behandlung bei psychischen Erkrankungen.

## Einfache Übungen für den Alltag

1. **Drei bewusste Atemzüge** – vor dem Aufstehen, vor einem Meeting, an der roten Ampel.
2. **Achtsames Essen:** Die ersten Bissen einer Mahlzeit ganz bewusst schmecken.
3. **5-4-3-2-1-Übung:** Fünf Dinge sehen, vier hören, drei fühlen, zwei riechen, eins schmecken.
4. **Achtsames Gehen:** Auf die Schritte, den Boden und die Umgebung achten.
5. **Körper-Check:** Wo spüre ich gerade Anspannung?

## Typische Hürden

- **„Meine Gedanken schweifen ab.“** Das ist normal. Die Übung besteht darin, freundlich zurückzukehren.
- **„Ich habe keine Zeit.“** Schon zwei Minuten am Tag sind ein Anfang.

## Dranbleiben

Verknüpfe Übungen mit festen Gewohnheiten, z. B. dem Morgenkaffee. Apps, Kurse oder Bücher können begleiten. Mehr zur formalen Praxis findest du unter „Meditation für Einsteiger“.`,
    faq: [
      ["Was ist der Unterschied zwischen Achtsamkeit und Meditation?", "Meditation ist eine formale Übungspraxis. Achtsamkeit ist eine Haltung, die man durch Meditation, aber auch im Alltag üben kann."],
      ["Wie lange dauert es, bis Achtsamkeit wirkt?", "Viele spüren nach einigen Wochen regelmäßiger kurzer Übungen erste Veränderungen. Wichtig ist die Regelmäßigkeit."],
    ],
    sources: [GESUND],
  },
  {
    path: "gesundheit-wohlbefinden/achtsamkeit/meditation-fuer-einsteiger",
    description: "Meditation für Einsteiger: einfache Anleitung für die erste Atemmeditation, die richtige Haltung, typische Fragen und Tipps für eine tägliche Praxis.",
    markdown: `Meditation muss nicht spirituell oder kompliziert sein. Für den Einstieg reichen ein ruhiger Platz und wenige Minuten.

## Anleitung: Deine erste Atemmeditation (5 Minuten)

1. **Setz dich bequem hin** – auf einen Stuhl oder ein Kissen. Rücken aufrecht, Schultern locker.
2. **Schließe die Augen** oder richte den Blick auf einen Punkt am Boden.
3. **Spüre deinen Atem:** Wie er an der Nase ein- und ausströmt oder wie sich der Bauch hebt und senkt.
4. **Gedanken kommen:** Das ist normal. Bemerke sie und kehre freundlich zum Atem zurück.
5. **Nach fünf Minuten** die Aufmerksamkeit wieder weiten, die Augen öffnen.

## Die richtige Haltung

Aufrecht, aber entspannt. Liegen geht auch – nur schläft man dabei leicht ein.

## Häufige Fragen

- **Muss ich an nichts denken?** Nein. Es geht darum, Gedanken zu bemerken, ohne ihnen zu folgen.
- **Wann ist die beste Zeit?** Viele meditieren morgens, bevor der Tag losgeht. Wichtig ist, dass es zu dir passt.
- **Wie lange?** Starte mit 5 Minuten und steigere langsam.

## Hilfen

- Geführte Meditationen in Apps oder Videos
- Kurse zu MBSR (Achtsamkeitsbasierte Stressreduktion)
- Ein fester Platz und eine feste Zeit

## Hinweis

Bei schweren psychischen Belastungen oder Traumata sollte Meditation mit Fachleuten abgesprochen werden – manchmal kann sie belastende Gefühle verstärken.`,
    faq: [
      ["Wie lange sollte ein Anfänger meditieren?", "Fünf bis zehn Minuten täglich sind ein guter Start. Regelmäßigkeit ist wichtiger als die Länge."],
      ["Ist es schlimm, wenn ich ständig abschweife?", "Nein, das ist völlig normal. Das Zurückkehren zum Atem ist die eigentliche Übung."],
    ],
    sources: [GESUND],
  },
  {
    path: "gesundheit-wohlbefinden/achtsamkeit/positive-routinen",
    description: "Positive Routinen aufbauen: Wie Gewohnheiten entstehen, die Kraft kleiner Schritte, Habit Stacking und Morgen- und Abendroutinen, die wirklich bleiben.",
    markdown: `Unser Alltag besteht zu einem großen Teil aus Gewohnheiten. Wer **positive Routinen** aufbaut, muss sich nicht jeden Tag neu motivieren – das Gute passiert fast automatisch.

## Wie Gewohnheiten entstehen

Eine Gewohnheit folgt meist einem Muster: **Auslöser → Handlung → Belohnung**. Wird dieser Ablauf oft genug wiederholt, läuft er irgendwann automatisch ab. Wie lange das dauert, ist sehr unterschiedlich – oft mehrere Wochen bis Monate.

## Klein anfangen

Statt „ab morgen jeden Tag eine Stunde Sport“ lieber:
- 5 Minuten dehnen nach dem Aufstehen
- 1 Glas Wasser vor dem Frühstück
- 1 Seite lesen vor dem Schlafen

Kleine Schritte sind leichter durchzuhalten und wachsen später von allein.

## Habit Stacking

Hänge die neue Gewohnheit an eine bestehende: „**Nachdem** ich Kaffee gekocht habe, **schreibe ich** drei Dinge auf, für die ich dankbar bin.“

## Beispiel-Routinen

**Morgens:** Wasser trinken, Fenster öffnen, kurz bewegen, Tagesziel festlegen.
**Abends:** Handy weglegen, Tag kurz reflektieren, Kleidung für morgen bereitlegen.

## Dranbleiben

- **Gewohnheitstracker:** Ein Häkchen pro Tag motiviert.
- **Nie zweimal hintereinander auslassen:** Ein Ausrutscher ist okay.
- **Umgebung gestalten:** Die Laufschuhe sichtbar hinstellen, Süßigkeiten außer Sichtweite.`,
    faq: [
      ["Wie lange dauert es, eine Gewohnheit aufzubauen?", "Das ist individuell sehr unterschiedlich – oft mehrere Wochen bis Monate. Wichtiger als ein fester Zeitraum ist es, dranzubleiben."],
      ["Was tun, wenn ich einen Tag auslasse?", "Nicht aufgeben. Ein einzelner ausgelassener Tag ist kein Problem – wichtig ist, am nächsten Tag weiterzumachen."],
    ],
  },
  {
    path: "gesundheit-wohlbefinden/achtsamkeit/motivation-finden",
    description: "Motivation finden: Warum Motivation schwankt, wie klare Ziele, kleine Schritte und Belohnungen helfen und was du tun kannst, wenn gar nichts mehr geht.",
    markdown: `Motivation ist kein Dauerzustand – sie kommt und geht. Wer darauf wartet, wartet oft lange. Die gute Nachricht: Motivation folgt häufig dem **Handeln**, nicht umgekehrt.

## Das Warum klären

Frag dich: **Warum** will ich das? Ein persönlicher Grund („Ich will mit meinen Kindern Fahrrad fahren können“) trägt weiter als ein abstraktes Ziel („fitter werden“).

## Ziele richtig setzen

Ziele sollten **konkret, messbar und realistisch** sein:
- Statt „mehr lesen“: „Jeden Abend 10 Seiten“.
- Große Ziele in Etappen zerlegen.

## Einfach anfangen

- **Zwei-Minuten-Regel:** Starte mit einer Version, die nur zwei Minuten dauert. Oft macht man dann von allein weiter.
- **Hindernisse vorher wegräumen:** Sporttasche packen, Schreibtisch aufräumen.

## Belohnungen

Kleine Belohnungen nach erledigten Aufgaben stärken das Durchhalten. Auch sichtbare Fortschritte – ein Häkchen im Kalender – motivieren.

## Mit anderen

Verabredungen und Gruppen schaffen Verbindlichkeit. Erzähle Freunden von deinem Vorhaben.

## Wenn gar nichts geht

Wenn Antriebslosigkeit, Freudlosigkeit und Niedergeschlagenheit über Wochen anhalten, kann eine Depression dahinterstecken. Das ist keine Willensschwäche, sondern eine behandelbare Erkrankung. Sprich mit deiner Hausarztpraxis oder einer psychotherapeutischen Praxis. In akuten Krisen hilft die Telefonseelsorge – in Deutschland unter 0800 111 0 111, in Österreich unter 142.`,
    faq: [
      ["Was tun, wenn die Motivation fehlt?", "Mit einem sehr kleinen ersten Schritt beginnen. Oft kommt die Motivation erst beim Tun."],
      ["Ist Antriebslosigkeit immer Faulheit?", "Nein. Anhaltende Antriebslosigkeit kann auch Zeichen von Erschöpfung oder Depression sein. Dann ist ärztliche Hilfe sinnvoll."],
    ],
    sources: [GESUND, { title: "Stiftung Deutsche Depressionshilfe", url: "https://www.deutsche-depressionshilfe.de/" }],
  },
  {
    path: "gesundheit-wohlbefinden/achtsamkeit/spiritualitaet-im-alltag",
    description: "Spiritualität im Alltag: Sinn, Dankbarkeit, Stille und Verbundenheit – offene, religionsunabhängige Impulse für mehr Tiefe im täglichen Leben.",
    markdown: `Spiritualität kann für jeden etwas anderes bedeuten: Glaube, Naturverbundenheit, Sinnsuche oder einfach das Gefühl, Teil von etwas Größerem zu sein. Hier geht es um offene, **religionsunabhängige Impulse**.

## Was Spiritualität im Alltag sein kann

- Momente der **Stille** und Besinnung
- **Dankbarkeit** für Kleines
- **Verbundenheit** mit anderen Menschen und der Natur
- Die Frage: **Was ist mir wirklich wichtig?**

## Einfache Impulse

1. **Dankbarkeitstagebuch:** Abends drei Dinge aufschreiben, für die du dankbar bist.
2. **Stille Minuten:** Ein paar Minuten am Tag ohne Handy, Musik oder Gespräch.
3. **Natur erleben:** Bewusst einen Baum, den Himmel oder das Meer betrachten.
4. **Werte klären:** Schreibe auf, was dir im Leben wichtig ist – und ob dein Alltag dazu passt.
5. **Rituale:** Eine Kerze anzünden, ein Spaziergang zum Sonnenuntergang, ein Gebet oder ein Gedicht – was sich für dich stimmig anfühlt.
6. **Gutes tun:** Ehrenamt oder kleine Gesten der Freundlichkeit.

## Gemeinschaft

Viele finden Halt in Gemeinschaften – religiös oder nicht. Gespräche über Sinnfragen mit Freunden oder in Gruppen können bereichern.

## Mit Offenheit

Spiritualität ist persönlich. Es gibt kein Richtig oder Falsch. Wichtig ist, dass du dich dabei frei und gut fühlst – und dass niemand Druck oder Abhängigkeit erzeugt.`,
    faq: [
      ["Muss Spiritualität religiös sein?", "Nein. Viele Menschen erleben Spiritualität in der Natur, in Stille, Dankbarkeit oder Gemeinschaft – ganz ohne Religion."],
      ["Wie starte ich ein Dankbarkeitstagebuch?", "Abends drei konkrete Dinge aufschreiben, die heute gut waren – auch kleine. Regelmäßigkeit ist wichtiger als Länge."],
    ],
  },
  {
    path: "gesundheit-wohlbefinden/alltag/hausapotheke",
    description: "Hausapotheke Checkliste: Verbandsmaterial, Fieberthermometer, Schmerzmittel und mehr – was in jede Hausapotheke gehört und wie du sie richtig lagerst.",
    markdown: `Eine gut sortierte **Hausapotheke** hilft bei kleinen Verletzungen und Beschwerden. Sie ersetzt aber nicht die ärztliche Behandlung.

## Verbandsmaterial

- Pflaster in verschiedenen Größen
- Sterile Kompressen und Mullbinden
- Elastische Binden
- Dreieckstuch
- Rollenpflaster, Verbandschere, Pinzette
- Einmalhandschuhe

## Geräte

- Digitales Fieberthermometer
- Kühlkompresse (im Gefrierfach)
- Zeckenkarte oder Zeckenzange

## Medikamente und Mittel

Welche Medikamente sinnvoll sind, hängt von deinem Haushalt ab. Besprich die Auswahl mit Apotheke oder Hausarztpraxis, besonders bei Kindern, Schwangerschaft, Vorerkrankungen oder regelmäßiger Medikamenteneinnahme. Häufig enthalten:
- Mittel gegen Schmerzen und Fieber
- Wunddesinfektion
- Mittel gegen Durchfall bzw. Elektrolytlösung
- Salbe gegen Insektenstiche oder Sonnenbrand
- Persönlich verordnete Medikamente

## Richtig lagern

- **Kühl, trocken, dunkel** – das Badezimmer ist wegen der Feuchtigkeit ungünstig.
- **Für Kinder unerreichbar** und am besten abschließbar.
- **Beipackzettel** aufbewahren.
- **Einmal im Jahr kontrollieren:** Abgelaufenes ersetzen.

## Entsorgung

Abgelaufene Medikamente niemals in Toilette oder Waschbecken. Je nach Gemeinde gehören sie in den Restmüll oder zu Sammelstellen bzw. Apotheken – erkundige dich vor Ort.

## Notrufnummern

Notruf **112**, Giftnotruf deines Bundeslandes bzw. in Österreich die Vergiftungsinformationszentrale (+43 1 406 43 43) gut sichtbar notieren.`,
    faq: [
      ["Wo bewahre ich die Hausapotheke am besten auf?", "An einem kühlen, trockenen und dunklen Ort, für Kinder unerreichbar – nicht im feuchten Badezimmer."],
      ["Wie entsorge ich alte Medikamente?", "Nicht über Toilette oder Abfluss. Je nach Wohnort über den Restmüll, Schadstoffsammelstellen oder Apotheken."],
    ],
    sources: [GESUND, { title: "Vergiftungsinformationszentrale Österreich", url: "https://goeg.at/vergiftungsinformation" }],
  },
  {
    path: "gesundheit-wohlbefinden/alltag/vorsorge-checkliste",
    description: "Vorsorge-Checkliste für Erwachsene: Gesundheits-Check, Krebsfrüherkennung, Zahnvorsorge und Impfungen – welche Untersuchungen es gibt und wo du dich informierst.",
    markdown: `Vorsorgeuntersuchungen helfen, Krankheiten früh zu erkennen – oft bevor Beschwerden auftreten. Welche Untersuchungen angeboten und von der Krankenkasse bezahlt werden, hängt von **Alter, Geschlecht und Land** ab.

## Typische Vorsorgeangebote

- **Allgemeiner Gesundheits-Check:** in Deutschland der Check-up, in Österreich die **Vorsorgeuntersuchung** der Sozialversicherung. Dabei werden u. a. Blutdruck, Blutwerte und Risikofaktoren geprüft.
- **Krebsfrüherkennung:** z. B. Untersuchungen auf Haut-, Darm-, Gebärmutterhals-, Brust- und Prostatakrebs – jeweils ab bestimmten Altersgrenzen.
- **Zahnvorsorge:** regelmäßige Kontrolle beim Zahnarzt, oft ein- bis zweimal im Jahr.
- **Augenuntersuchung:** besonders bei Diabetes und ab höherem Alter sinnvoll.

## Impfungen

Prüfe deinen Impfpass: Auffrischungen wie Tetanus und Diphtherie sind auch im Erwachsenenalter fällig. Je nach Alter und Risiko kommen weitere Impfungen hinzu. Maßgeblich sind die Empfehlungen der STIKO (Deutschland) bzw. der Impfplan Österreich.

## So behältst du den Überblick

1. Liste deiner letzten Untersuchungen mit Datum anlegen.
2. Termine im Kalender eintragen.
3. Bei der Hausarztpraxis nachfragen, welche Untersuchungen für dich empfohlen sind.
4. Informationen deiner Krankenkasse bzw. Sozialversicherung nutzen.

## Wichtig

Vorsorge ersetzt nicht den Arztbesuch bei Beschwerden. Wenn dir etwas Ungewöhnliches auffällt, warte nicht bis zum nächsten Vorsorgetermin.`,
    faq: [
      ["Welche Vorsorgeuntersuchungen bezahlt die Krankenkasse?", "Das hängt vom Land, Alter und Geschlecht ab. Deine Krankenkasse bzw. Sozialversicherung und deine Hausarztpraxis informieren dich."],
      ["Wie oft sollte ich zur Zahnkontrolle?", "In der Regel ein- bis zweimal pro Jahr."],
    ],
    sources: [GESUND, GESUNDAT, { title: "Robert Koch-Institut – STIKO-Empfehlungen", url: "https://www.rki.de/" }],
  },
  {
    path: "gesundheit-wohlbefinden/alltag/bildschirmzeit-reduzieren",
    description: "Bildschirmzeit reduzieren: Nutzung messen, Benachrichtigungen ausschalten, handyfreie Zonen und Alternativen – praktische Tipps für weniger Handyzeit.",
    markdown: `Smartphone, Laptop, Fernseher – viele verbringen täglich viele Stunden vor Bildschirmen. Wer seine **Bildschirmzeit reduzieren** möchte, braucht weniger Willenskraft, als man denkt – vor allem kluge Einstellungen.

## Schritt 1: Messen

Android und iOS zeigen die tägliche Nutzungszeit pro App. Schau eine Woche lang hin, ohne etwas zu ändern. Wo geht die meiste Zeit hin?

## Schritt 2: Technik nutzen

- **Benachrichtigungen ausschalten** für alles, was nicht wichtig ist.
- **App-Limits** für Social Media und Spiele festlegen.
- **Graustufen-Modus:** Ein farbloses Display ist weniger verlockend.
- **Startbildschirm aufräumen:** Ablenkende Apps in Ordner oder auf die zweite Seite.
- **Fokus- bzw. Nicht-stören-Modus** während Arbeit und Schlaf.

## Schritt 3: Gewohnheiten ändern

- **Handyfreie Zonen:** Esstisch und Schlafzimmer.
- **Wecker statt Smartphone** am Bett.
- **Feste Zeiten** für Nachrichten und E-Mails.
- **Handy in eine andere Tasche oder einen anderen Raum** legen.

## Schritt 4: Alternativen

Bildschirmzeit verschwindet nicht, wenn nichts an ihre Stelle tritt: Bücher, Sport, Treffen, Hobbys, Spaziergänge.

## Für Familien

Gemeinsame Regeln für alle – auch für Erwachsene. Tipps für Kinder findest du unter „Medienkompetenz für Kinder“.`,
    faq: [
      ["Wie sehe ich meine Bildschirmzeit?", "Unter iOS in „Bildschirmzeit“, unter Android meist in „Digital Wellbeing“ bzw. „Digitales Wohlbefinden“ in den Einstellungen."],
      ["Hilft der Graustufen-Modus wirklich?", "Viele berichten, dass das Smartphone ohne Farben weniger reizvoll ist. Einen Versuch ist es wert."],
    ],
  },
  {
    path: "gesundheit-wohlbefinden/alltag/ergonomisch-arbeiten",
    description: "Ergonomisch arbeiten am Schreibtisch: richtige Sitzhaltung, Bildschirmposition, Pausen, Augenentspannung und Übungen gegen Nacken- und Rückenschmerzen.",
    markdown: `Viele Stunden am Schreibtisch können Nacken, Rücken und Augen belasten. Mit einer guten Einrichtung und regelmäßigen Pausen lässt sich viel vorbeugen.

## Richtig sitzen

- **Füße** flach auf dem Boden, Knie etwa im rechten Winkel.
- **Rücken** an der Lehne, Lordosenstütze im unteren Rücken.
- **Schultern** locker, Unterarme liegen auf dem Tisch auf.
- **Handgelenke** gerade bei Tastatur und Maus.

## Bildschirm und Licht

- Oberkante etwa **auf Augenhöhe** oder leicht darunter.
- **Abstand** etwa eine Armlänge.
- Tageslicht **seitlich**, Spiegelungen vermeiden.

## Dynamisch sitzen

Die beste Haltung ist die **nächste**: Positionen regelmäßig wechseln, zwischendurch aufstehen. Ein höhenverstellbarer Tisch hilft beim Wechsel zwischen Sitzen und Stehen.

## Pausen

- Alle 30–60 Minuten kurz aufstehen und bewegen.
- Telefonate im Stehen.

## Augen entlasten: die 20-20-20-Regel

Alle **20 Minuten** für **20 Sekunden** auf etwas in etwa **20 Fuß (6 Meter)** Entfernung schauen. Bewusst blinzeln.

## Kurze Übungen

- Schultern kreisen
- Kopf langsam zur Seite neigen
- Brustdehnung im Türrahmen
- Aufstehen und Rücken strecken

Bei anhaltenden Schmerzen hilft ärztliche oder physiotherapeutische Abklärung. Mehr zur Einrichtung zu Hause findest du unter „Homeoffice einrichten“.`,
    faq: [
      ["Was ist die 20-20-20-Regel?", "Alle 20 Minuten für 20 Sekunden in die Ferne (etwa 6 Meter) schauen, um die Augen zu entlasten."],
      ["Wie oft sollte ich beim Arbeiten aufstehen?", "Etwa alle 30 bis 60 Minuten kurz aufstehen und sich bewegen."],
    ],
    sources: [BAUA],
  },
];
