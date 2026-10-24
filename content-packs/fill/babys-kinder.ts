import type { FillPage } from "../types";

const BZGA = { title: "Kindergesundheit-info.de (BIÖG, ehem. BZgA)", url: "https://www.kindergesundheit-info.de/" };
const GIL = { title: "Netzwerk Gesund ins Leben – Handlungsempfehlungen", url: "https://www.gesund-ins-leben.de/" };
const SIDS = { title: "Gemeinsame Elterninformation zum sicheren Babyschlaf", url: "https://www.kindergesundheit-info.de/themen/sicher-aufwachsen/" };
const SIM = { title: "Klicksafe – Medienkompetenz für Familien", url: "https://www.klicksafe.de/" };
const SAFERINTERNET = { title: "Saferinternet.at – Tipps für Eltern", url: "https://www.saferinternet.at/" };

export const babysKinder: FillPage[] = [
  /* ---------------- Baby-Basics ---------------- */
  {
    path: "babys-kinder/baby-basics/erstausstattung-baby",
    description: "Erstausstattung Baby: Checkliste für Kleidung, Schlafen, Wickeln, Baden und Unterwegs – was du wirklich brauchst und was warten kann.",
    markdown: `Die Liste an Babysachen scheint endlos. Dabei braucht ein Neugeborenes anfangs gar nicht so viel. Diese **Checkliste zur Erstausstattung** hilft dir, das Wichtige vom Überflüssigen zu trennen.

## Kleidung (Größe 50/56)

- 5–7 Bodys (kurz- und langarm)
- 5–7 Strampler oder Hosen mit Fuß
- 2–3 Jäckchen oder Pullis
- 2 Mützchen (dünn), je nach Jahreszeit eine wärmere
- Söckchen
- Ein Overall oder Ausfahrsack für draußen

Tipp: Babys wachsen schnell. Kaufe nicht zu viel in der kleinsten Größe und wasche alles vor dem ersten Tragen.

## Schlafen

- Babybett oder Beistellbett mit fester Matratze
- 2–3 **Schlafsäcke** in passender Größe (statt Decke und Kissen)
- Spannbettlaken

## Wickeln und Pflege

- Wickelunterlage oder Wickelkommode
- Windeln (Einweg oder Stoff)
- Waschlappen, weiche Tücher, Wundschutzcreme
- Digitales Fieberthermometer

## Baden

- Babybadewanne oder Badeeimer
- Badethermometer
- Kapuzenhandtücher

## Unterwegs

- **Kinderwagen** oder Tragehilfe
- **Babyschale** fürs Auto (Pflicht, wenn ihr mit dem Auto fahrt)
- Wickeltasche

## Was warten kann

Hochstuhl, Lauflernhilfe, viele Spielsachen, Schuhe und Fläschchenwärmer braucht ihr anfangs nicht. Vieles gibt es zudem gut erhalten gebraucht – nur bei Matratze und Autositz lieber neu kaufen bzw. die Herkunft genau kennen.`,
    faq: [
      ["Wann sollte man die Erstausstattung kaufen?", "Viele kaufen im zweiten oder dritten Schwangerschaftsdrittel ein. Bis etwa vier bis sechs Wochen vor dem Geburtstermin sollte das Wichtigste da sein."],
      ["Welche Größe brauchen Neugeborene?", "Meist Größe 50 oder 56. Viele Babys passen nur kurz in 50, deshalb lieber mehr in 56 kaufen."],
    ],
    sources: [BZGA, SIDS],
  },
  {
    path: "babys-kinder/baby-basics/kinderwagen",
    description: "Kinderwagen kaufen: Kombikinderwagen, Buggy oder Sportwagen? Worauf es bei Liegefläche, Federung, Faltmaß, Gewicht und Sicherheit ankommt.",
    markdown: `Ein Kinderwagen begleitet euch jeden Tag – vom Spaziergang bis zum Einkauf. Der richtige Wagen hängt stark von eurem Alltag ab.

## Die wichtigsten Typen

- **Kombikinderwagen:** mit Babywanne zum Liegen und später Sportsitz. Ideal ab der Geburt.
- **Sportwagen / Buggy:** leicht und kompakt, für Kinder, die schon sitzen können. Manche Modelle haben eine Liegeposition.
- **Travel-System:** Gestell, auf das sich auch die Babyschale fürs Auto setzen lässt – praktisch für kurze Wege, aber Babys sollten nicht stundenlang in der Babyschale liegen.

## Worauf du achten solltest

1. **Flache Liegefläche** für Neugeborene – wichtig für die Wirbelsäule.
2. **Federung und Räder:** Große, luftgefüllte Räder fahren angenehmer auf Feldwegen, kleine wendige Räder sind gut für die Stadt.
3. **Faltmaß und Gewicht:** Passt der Wagen in den Kofferraum? Kannst du ihn Treppen hinauftragen?
4. **Schiebebügel** höhenverstellbar, besonders bei großen Eltern.
5. **Bremse** leicht bedienbar und sicher.
6. **Einkaufskorb** groß genug.
7. **Sonnen- und Regenschutz.**

## Sicherheit

Achte auf ein geprüftes Modell nach der europäischen Norm **EN 1888** und nutze das Gurtsystem, sobald das Kind sitzt. Hänge keine schweren Taschen an den Schiebebügel – der Wagen kann kippen.

## Gebraucht kaufen?

Gebrauchte Kinderwagen sind oft eine gute Option. Prüfe Bremsen, Räder, Klappmechanismus und Stoffe sorgfältig.`,
    faq: [
      ["Ab wann darf ein Baby im Buggy sitzen?", "Erst wenn es sicher allein sitzen kann, meist etwa ab dem sechsten bis neunten Monat."],
      ["Brauche ich einen Kombikinderwagen?", "Für Neugeborene ist eine flache Liegefläche wichtig. Ein Kombiwagen deckt das ab und wächst mit. Alternativ kann eine Tragehilfe die erste Zeit überbrücken."],
    ],
    sources: [BZGA],
  },
  {
    path: "babys-kinder/baby-basics/babyschlaf",
    description: "Babyschlaf: Wie viel Babys schlafen, sichere Schlafumgebung, Rückenlage und Schlafsack – und Tipps für ruhigere Nächte in den ersten Monaten.",
    markdown: `Babys schlafen viel – aber selten am Stück. Das ist normal und gehört zur Entwicklung. Wichtig ist vor allem eine **sichere Schlafumgebung**.

## Wie viel schlafen Babys?

Neugeborene schlafen oft insgesamt **14 bis 17 Stunden** am Tag, verteilt auf viele kurze Phasen. Einen Tag-Nacht-Rhythmus entwickeln Babys erst nach und nach. Jedes Kind ist anders.

## Sicher schlafen – die wichtigsten Regeln

- **Rückenlage** zum Schlafen.
- **Eigenes Bett im Elternschlafzimmer** im ersten Lebensjahr.
- **Schlafsack** statt Decke, Kissen und Kuscheltiere im Bett.
- **Feste Matratze**, keine Nestchen oder Fellunterlagen.
- **Nicht überwärmen:** Eine Raumtemperatur von etwa 16 bis 18 °C ist ideal. Fühle im Nacken, ob das Baby schwitzt.
- **Rauchfreie Umgebung** – in der Schwangerschaft und danach.
- **Stillen** wirkt schützend.

Diese Empfehlungen senken das Risiko des plötzlichen Kindstods (SIDS).

## Einschlafhilfen

- Feste Rituale: baden, Schlafsack anziehen, Lied singen.
- Gedämpftes Licht am Abend, Tageslicht tagsüber.
- Müdigkeitszeichen erkennen: Augenreiben, Gähnen, Quengeln.

## Wenn die Nächte anstrengend sind

Wechselt euch nachts ab und holt euch Unterstützung. Bei Fragen helfen Hebamme, Kinderarztpraxis oder Schreiambulanzen.`,
    faq: [
      ["Darf mein Baby auf dem Bauch schlafen?", "Zum Schlafen wird die Rückenlage empfohlen. Im Wachzustand und unter Aufsicht ist Bauchlage dagegen gut für die Entwicklung."],
      ["Welche Raumtemperatur ist ideal?", "Etwa 16 bis 18 °C. Ein Schlafsack in passender Stärke hält das Baby warm."],
    ],
    sources: [SIDS, BZGA],
  },
  {
    path: "babys-kinder/baby-basics/babyphone",
    description: "Babyphone kaufen: Audio oder Video, Reichweite, Strahlung, Datenschutz bei WLAN-Modellen und Tipps zur richtigen Aufstellung.",
    markdown: `Ein **Babyphone** gibt Eltern Freiheit: Ihr könnt im Wohnzimmer sitzen, während das Baby schläft. Es gibt viele Modelle – von einfach bis smart.

## Die Typen

- **Audio-Babyphone:** überträgt Geräusche. Einfach, zuverlässig, meist günstig.
- **Video-Babyphone:** mit Kamera und Bildschirm, oft mit Nachtsicht.
- **WLAN- oder App-Babyphone:** Übertragung aufs Smartphone, auch von unterwegs.

## Worauf du achten solltest

1. **Reichweite** passend zu Wohnung oder Haus.
2. **Reichweitenwarnung**, wenn die Verbindung abbricht.
3. **Strahlungsarmer Modus:** Viele Geräte senden nur, wenn das Baby Geräusche macht (Eco-Modus).
4. **Akku-Laufzeit** der Elterneinheit.
5. **Verschlüsselte Übertragung.**

## Datenschutz bei WLAN-Modellen

Bei Babyphones mit Internetverbindung ist Sicherheit besonders wichtig:
- Starkes, eigenes Passwort vergeben.
- Firmware-Updates installieren.
- Auf seriöse Hersteller achten, die regelmäßig Updates liefern.

## Richtig aufstellen

- Mindestens **1 bis 2 Meter Abstand** zum Kinderbett.
- Kabel außer Reichweite des Babys.
- Gerät nicht ins Bett legen.

Ein Babyphone ersetzt nicht die eigene Aufmerksamkeit. Sogenannte Atemmonitore sind für gesunde Babys in der Regel nicht nötig – sprich bei Unsicherheit mit deiner Kinderarztpraxis.`,
    faq: [
      ["Ist die Strahlung eines Babyphones gefährlich?", "Mit Abstand zum Bett und einem Gerät mit Eco-Modus ist die Belastung gering. Das Bundesamt für Strahlenschutz empfiehlt möglichst großen Abstand."],
      ["Brauche ich ein Video-Babyphone?", "Nicht unbedingt. Ein Audio-Babyphone reicht vielen Eltern. Video ist praktisch, wenn ihr nicht bei jedem Geräusch nachsehen wollt."],
    ],
    sources: [{ title: "Bundesamt für Strahlenschutz – Babyphone", url: "https://www.bfs.de/" }],
  },
  {
    path: "babys-kinder/baby-basics/wickeltasche",
    description: "Wickeltasche packen: Checkliste für unterwegs mit Baby – Windeln, Wechselkleidung, Snacks und Notfall-Set – und worauf du beim Kauf achtest.",
    markdown: `Mit Baby unterwegs zu sein, braucht ein bisschen Planung. Eine gut gepackte **Wickeltasche** macht Ausflüge entspannter.

## Checkliste: Was gehört hinein?

**Wickeln**
- Windeln (eine pro zwei bis drei Stunden plus Reserve)
- Feuchttücher oder Waschlappen
- Wickelunterlage
- Wundschutzcreme
- Beutel für gebrauchte Windeln

**Kleidung**
- Wechselbody und -hose (oder zwei)
- Mütze bzw. Sonnenhut je nach Wetter
- Spucktuch

**Essen und Trinken**
- Stilltuch oder Fläschchen mit Milchpulver, abgekochtem Wasser und Thermoskanne
- Später: Snacks und Trinkflasche

**Sonstiges**
- Lieblingskuscheltier oder Schnuller (mit Ersatz)
- Kleines Erste-Hilfe-Set mit Pflastern
- Desinfektionstücher
- Mutter-Kind-Pass bzw. Untersuchungsheft und Versichertenkarte bei längeren Ausflügen

## Worauf beim Kauf achten?

- Viele Fächer und eine Wickelunterlage
- Abwischbares Material
- Befestigung am Kinderwagen
- Als Rucksack oft bequemer als eine Umhängetasche

## Tipp

Packe nach jedem Ausflug direkt wieder auf. Dann ist die Tasche beim nächsten Mal sofort startklar.`,
    faq: [
      ["Brauche ich eine spezielle Wickeltasche?", "Nicht unbedingt. Ein großer Rucksack mit Fächern erfüllt denselben Zweck. Eine Wickelunterlage und ein Beutel für Windeln sind aber praktisch."],
      ["Wie viele Windeln sollte ich mitnehmen?", "Etwa eine Windel pro zwei bis drei Stunden Ausflug, plus zwei als Reserve."],
    ],
  },

  /* ---------------- Baby-Tipps ---------------- */
  {
    path: "babys-kinder/baby-tipps/das-erste-jahr",
    description: "Das erste Babyjahr: Entwicklung Monat für Monat im Überblick – Lächeln, Greifen, Drehen, Sitzen, Krabbeln – plus Vorsorgeuntersuchungen.",
    markdown: `Im ersten Lebensjahr passiert unglaublich viel. Jedes Baby entwickelt sich in seinem eigenen Tempo – die folgenden Angaben sind grobe Orientierungen, keine Pflichttermine.

## Etwa 0–3 Monate

- Hebt den Kopf in Bauchlage kurz an
- **Erstes soziales Lächeln** (oft um die sechste Woche)
- Folgt Gesichtern mit den Augen
- Gurrt und brabbelt

## Etwa 4–6 Monate

- Greift gezielt nach Spielzeug und steckt alles in den Mund
- Dreht sich vom Bauch auf den Rücken und umgekehrt
- Lacht laut
- Beikoststart meist zwischen dem 5. und 7. Monat

## Etwa 7–9 Monate

- Sitzt allein
- Beginnt zu robben oder zu krabbeln
- **Fremdeln** ist normal
- Sagt Silbenketten wie „ba-ba-ba“

## Etwa 10–12 Monate

- Zieht sich hoch, läuft an Möbeln entlang
- Manche machen erste freie Schritte
- Versteht einfache Wörter
- Erstes „Mama“ oder „Papa“ mit Bedeutung

## Vorsorge

Nutzt die **Vorsorgeuntersuchungen** – in Deutschland die U-Untersuchungen, in Österreich die Untersuchungen laut Eltern-Kind-Pass. Sie begleiten die Entwicklung und sind die richtige Gelegenheit für Fragen. Auch Impfungen werden dort besprochen.

Wenn du dir Sorgen um die Entwicklung deines Kindes machst, sprich mit eurer Kinderarztpraxis.`,
    faq: [
      ["Wann fangen Babys an zu krabbeln?", "Viele zwischen dem siebten und zehnten Monat. Manche Kinder lassen das Krabbeln ganz aus und rutschen oder laufen direkt."],
      ["Mein Baby ist später dran – ist das schlimm?", "Die Spannbreite ist groß. Bei Sorgen hilft die Kinderarztpraxis, die die Entwicklung bei den Vorsorgeuntersuchungen beurteilt."],
    ],
    sources: [BZGA],
  },
  {
    path: "babys-kinder/baby-tipps/zahnen",
    description: "Zahnen beim Baby: Wann die ersten Zähne kommen, typische Anzeichen, was wirklich hilft und wann du zum Kinderarzt solltest.",
    markdown: `Die ersten Zähnchen sind ein großer Schritt – und für manche Babys ganz schön anstrengend. Hier erfährst du, was beim **Zahnen** normal ist und was hilft.

## Wann kommen die ersten Zähne?

Meist zwischen dem **sechsten und zehnten Lebensmonat**, häufig zuerst die unteren mittleren Schneidezähne. Manche Babys bekommen ihren ersten Zahn deutlich früher oder später. Bis etwa zum dritten Geburtstag sind die 20 Milchzähne meist vollständig.

## Typische Anzeichen

- Viel Sabbern
- Gerötetes, geschwollenes Zahnfleisch
- Kauen auf Händen und Gegenständen
- Unruhe, schlechterer Schlaf
- Rote Wangen

**Hohes Fieber oder Durchfall** sind keine typischen Zahnungszeichen. Dann solltest du die Kinderarztpraxis kontaktieren.

## Was hilft?

- **Beißringe**, die im Kühlschrank (nicht im Gefrierfach) gekühlt werden
- Sanfte Zahnfleischmassage mit einem sauberen Finger
- Viel Nähe und Trost
- Bei starken Beschwerden: mit der Kinderarztpraxis über geeignete Mittel sprechen

Bernsteinketten werden nicht empfohlen – sie haben keine nachgewiesene Wirkung und bergen Erstickungs- und Strangulationsgefahr.

## Zähne putzen ab dem ersten Zahn

Ab dem ersten Zahn wird geputzt – mit einer weichen Kinderzahnbürste und Kinderzahnpasta mit Fluorid in der empfohlenen Menge (eine reiskorngroße Menge). Besprich die Fluoridvorsorge mit eurer Kinderarztpraxis.`,
    faq: [
      ["Bekommen Babys beim Zahnen Fieber?", "Eine leicht erhöhte Temperatur ist möglich, hohes Fieber aber nicht typisch. Bei Fieber solltest du andere Ursachen ärztlich abklären lassen."],
      ["Wann sollte mein Baby zum Zahnarzt?", "Viele Fachgesellschaften empfehlen einen ersten Zahnarztbesuch ab dem ersten Zahn, spätestens im Kleinkindalter."],
    ],
    sources: [BZGA],
  },
  {
    path: "babys-kinder/baby-tipps/beikost-start",
    description: "Beikost-Start: Wann Babys bereit sind, mit welchem Brei du beginnst, Reihenfolge der Breie und wichtige Tipps zu Allergien und Getränken.",
    markdown: `Irgendwann reicht Milch allein nicht mehr. Der **Beikost-Start** ist für Eltern und Baby ein spannender Schritt.

## Wann ist der richtige Zeitpunkt?

Nach den Empfehlungen des Netzwerks Gesund ins Leben wird Beikost **frühestens mit Beginn des 5. Monats und spätestens mit Beginn des 7. Monats** eingeführt. Zeichen der Bereitschaft:

- Das Baby kann mit Unterstützung aufrecht sitzen und den Kopf halten.
- Es zeigt Interesse am Essen der Eltern.
- Der Zungenstoß-Reflex lässt nach – Brei wird nicht mehr automatisch herausgeschoben.

## Typische Reihenfolge (Breimodell)

1. **Gemüse-Kartoffel-Fleisch-Brei** (oder vegetarisch mit Getreide) mittags – zuerst nur Gemüse, dann schrittweise ergänzen.
2. **Milch-Getreide-Brei** abends, etwa einen Monat später.
3. **Getreide-Obst-Brei** nachmittags, wieder etwa einen Monat später.

Gegen Ende des ersten Lebensjahres geht es nach und nach zum Familienessen über.

## Breifrei (Baby-led Weaning)?

Manche Eltern bieten statt Brei weiche Fingerfood-Stücke an. Wichtig ist, dass das Kind genug Energie und vor allem **Eisen** bekommt und sicher sitzt. Lass dich dazu beraten.

## Wichtige Tipps

- Neue Lebensmittel **einzeln** einführen.
- Kein Salz, Zucker oder Honig im ersten Lebensjahr.
- Kein Allergieschutz durch Vermeiden: Auch potenzielle Allergene wie Ei können im ersten Jahr eingeführt werden.
- Mit dem dritten Brei braucht das Baby zusätzlich etwas zu trinken: Wasser aus dem Becher.`,
    faq: [
      ["Mit welchem Gemüse fange ich an?", "Gut geeignet sind milde Sorten wie Karotte, Pastinake, Kürbis oder Zucchini."],
      ["Darf mein Baby Honig essen?", "Nein, im ersten Lebensjahr nicht – wegen des Risikos für Säuglingsbotulismus."],
    ],
    sources: [GIL],
  },
  {
    path: "babys-kinder/baby-tipps/babys-erste-reise",
    description: "Babys erste Reise: Packliste, Reisen mit Auto, Bahn und Flugzeug, Reisedokumente und Tipps für entspannte Ferien mit Baby.",
    markdown: `Die erste Reise mit Baby ist aufregend. Mit guter Vorbereitung wird sie auch entspannt.

## Das richtige Reiseziel

- **Kurze Anreise**, besonders beim ersten Mal.
- **Gemäßigtes Klima:** Große Hitze ist für Babys belastend.
- **Gute medizinische Versorgung** vor Ort.
- **Familienfreundliche Unterkunft** mit Babybett und Platz.

## Reisedokumente

Auch Babys brauchen für Reisen ins Ausland ein **eigenes Ausweisdokument** (z. B. Kinderreisepass bzw. Reisepass). Kümmere dich rechtzeitig darum und prüfe die Einreisebestimmungen des Ziellandes.

## Unterwegs

- **Auto:** Babyschale rückwärtsgerichtet, regelmäßige Pausen alle ein bis zwei Stunden. Längere Fahrten in der Babyschale vermeiden.
- **Bahn:** Familienbereiche oder Kleinkindabteile nutzen, Platz reservieren.
- **Flugzeug:** Beim Start und bei der Landung trinken lassen oder Schnuller geben – das hilft beim Druckausgleich. Informiere dich bei der Airline zu Babybett und Kinderwagen.

## Packliste-Extras

- Reiseapotheke (vorher mit der Kinderarztpraxis besprechen)
- Sonnenschutz: Babys gehören nicht in die direkte Sonne
- Vertraute Dinge: Schlafsack, Kuscheltier
- Untersuchungsheft und Impfpass

## Erwartungen anpassen

Plant weniger Programm als früher. Der Rhythmus des Babys bestimmt den Tag – und genau so wird es eine schöne Reise.`,
    faq: [
      ["Ab wann darf ein Baby fliegen?", "Viele Airlines nehmen Babys ab wenigen Tagen oder Wochen mit. Kläre den Zeitpunkt mit der Kinderarztpraxis und den Bedingungen der Airline."],
      ["Braucht ein Baby einen eigenen Reisepass?", "Ja, für Auslandsreisen braucht auch ein Baby ein eigenes Ausweisdokument."],
    ],
    sources: [BZGA, { title: "Auswärtiges Amt – Reise- und Sicherheitshinweise", url: "https://www.auswaertiges-amt.de/" }],
  },

  /* ---------------- Lernen ---------------- */
  {
    path: "babys-kinder/lernen/kinder-malvorlagen",
    description: "Kinder-Malvorlagen und Malideen: Motive nach Alter, Tipps für Eltern und kreative Ideen, wie aus Ausmalbildern kleine Lernspiele werden.",
    markdown: `Malen ist eine der schönsten Beschäftigungen für Kinder: Es fördert Feinmotorik, Konzentration und Kreativität. Hier findest du Ideen rund um **Kinder-Malvorlagen**. Eigene Vorlagen zum Ausdrucken ergänzen wir nach und nach.

## Motive nach Alter

- **2–3 Jahre:** große, einfache Formen mit dicken Linien – Sonne, Ball, Apfel, Katze.
- **4–5 Jahre:** Tiere, Fahrzeuge, Prinzessinnen, Dinos mit etwas mehr Details.
- **6–8 Jahre:** Szenen mit Hintergrund, Mandalas, Buchstaben- und Zahlenbilder.
- **Ab 9 Jahren:** detailreiche Mandalas, Comics, Fantasiewelten.

## Aus Malvorlagen werden Lernspiele

- **Farben lernen:** „Male alle Äpfel rot und alle Blätter grün.“
- **Zahlen:** Malen nach Zahlen oder Punkte verbinden.
- **Buchstaben:** Zu jedem Buchstaben ein Bild (A wie Affe).
- **Geschichten:** Kinder malen ein Bild und erzählen eine Geschichte dazu.

## Tipps für Eltern

- Dicke Stifte für kleine Hände, Wachsmalblöcke für die Kleinsten.
- Es gibt kein „falsch“ – ein blauer Hund ist erlaubt!
- Fertige Bilder aufhängen: Das stärkt das Selbstbewusstsein.

Tiermotive findest du bei den Tier-Malvorlagen, Panda-Fans bei den Panda-Malvorlagen.`,
    faq: [
      ["Ab wann können Kinder ausmalen?", "Erste Kritzeleien gibt es schon mit etwa eineinhalb Jahren. Gezieltes Ausmalen innerhalb von Linien gelingt meist ab drei bis vier Jahren."],
      ["Fördern Malvorlagen die Kreativität?", "Sie fördern vor allem Feinmotorik und Konzentration. Für Kreativität sollte es zusätzlich freies Malen auf leerem Papier geben."],
    ],
  },
  {
    path: "babys-kinder/lernen/lernkarten",
    description: "Lernkarten für Kinder: So funktionieren Karteikarten beim Lernen, Ideen für Vokabeln, Einmaleins und Lesen – und wie du sie selbst gestaltest.",
    markdown: `**Lernkarten** sind ein einfaches, aber sehr wirksames Werkzeug: Auf der Vorderseite steht eine Frage, auf der Rückseite die Antwort. Sie eignen sich für Vokabeln, Rechnen, Lesen und Sachwissen.

## Warum Lernkarten funktionieren

- **Aktives Erinnern:** Kinder müssen die Antwort selbst abrufen – das festigt Wissen besser als bloßes Durchlesen.
- **Wiederholung in Abständen:** Mit einem Karteikasten mit mehreren Fächern wiederholt man schwierige Karten öfter.
- **Kurze Einheiten:** Zehn Minuten am Tag sind wirksamer als eine Stunde vor der Prüfung.

## Das Karteikasten-Prinzip

1. Alle neuen Karten liegen in Fach 1.
2. Richtig beantwortet → Karte wandert ein Fach weiter.
3. Falsch beantwortet → zurück in Fach 1.
4. Fach 1 täglich, höhere Fächer seltener üben.

## Ideen für Lernkarten

- **Vokabeln:** Bild auf der Vorderseite, Wort auf der Rückseite.
- **Einmaleins:** „7 × 8“ vorne, „56“ hinten.
- **Lesen:** Silben und kurze Wörter für Leseanfänger.
- **Sachkunde:** Hauptstädte, Tiere, Planeten.

## Selbst gestalten

Selbst geschriebene Karten wirken oft besser, weil schon das Schreiben beim Lernen hilft. Mit Bildern, Farben und kleinen Zeichnungen werden sie zu echten Lieblingskarten. Digitale Lernkarten-Apps sind eine Alternative – achte dabei auf Datenschutz und werbefreie Angebote.`,
    faq: [
      ["Ab welchem Alter eignen sich Lernkarten?", "Mit Bildkarten schon im Kindergartenalter, mit Text vor allem ab der Grundschule."],
      ["Wie oft sollte man mit Lernkarten üben?", "Lieber täglich kurz – etwa zehn bis fünfzehn Minuten – als selten lange."],
    ],
  },
  {
    path: "babys-kinder/lernen/glow-kinderdesigns",
    description: "Glow-Kinderdesigns: leuchtende Ideen fürs Kinderzimmer, Nachtlicht-Bastelei und Glow-Malbilder – mit Sicherheitstipps zu Leuchtfarben und LEDs.",
    markdown: `Leuchtende Sterne an der Decke, ein Nachtlicht in Pandaform oder ein Bild, das im Dunkeln schimmert: **Glow-Designs** begeistern Kinder. Hier sind Ideen im Panda-Toolbox-Stil.

## Ideen fürs Kinderzimmer

- **Leuchtsterne** an der Decke – ein Klassiker.
- **Sanftes Nachtlicht** mit warmem Licht, das nicht zu hell ist.
- **Leuchtende Wandbilder** mit nachleuchtender Farbe.
- **Lichterketten** mit Batterie und Timer.

## Bastelidee: Glow-Glas

1. Ein leeres, sauberes Glas mit Deckel.
2. Innen mit nachleuchtender Bastelfarbe Punkte tupfen.
3. Trocknen lassen, ins Licht stellen – und im Dunkeln leuchtet ein kleiner Sternenhimmel.

## Glow-Malbilder

Kinder malen mit Neonstiften oder Leuchtfarben auf schwarzem Papier. Unter einer UV-Taschenlampe (nur für Erwachsene, nicht in die Augen leuchten) wirken die Bilder besonders spannend.

## Sicherheit

- **Nachleuchtende Farben** und Spielzeuge nur kindgerecht und mit CE-Kennzeichnung kaufen.
- **Knopfzellen-Batterien** außer Reichweite: Verschluckte Knopfzellen sind sehr gefährlich.
- **LED-Lichter** nicht direkt in die Augen.
- Nachts lieber gedämpftes, warmes Licht – helles, bläuliches Licht kann den Schlaf stören.

Mehr Lichtideen für die ganze Wohnung findest du bei den Glow-Wohnideen.`,
    faq: [
      ["Sind Leuchtsterne gesundheitlich unbedenklich?", "Moderne nachleuchtende Produkte sind in der Regel unbedenklich. Achte auf seriöse Hersteller und CE-Kennzeichnung."],
      ["Welches Nachtlicht ist gut für Kinder?", "Ein schwaches, warmweißes Licht, das nicht blendet – gern mit Timer oder Dimmfunktion."],
    ],
  },
  {
    path: "babys-kinder/lernen/lernmaterialien",
    description: "Lernmaterialien für Kinder: gute Spiele, Bücher und Materialien für Lesen, Rechnen und Sachwissen – und woran du hochwertige Lernangebote erkennst.",
    markdown: `Kinder lernen am besten spielerisch. Gute **Lernmaterialien** wecken Neugier, statt Druck zu machen. Hier ein Überblick nach Bereichen.

## Lesen und Schreiben

- **Bilderbücher** und Vorlesen – die wichtigste Grundlage für Sprache.
- **Silbenbücher** für Leseanfänger, bei denen Silben farbig markiert sind.
- **Buchstaben-Spiele** wie Memory mit Anlauten.

## Rechnen

- **Zählmaterial:** Perlen, Würfel, Rechenketten.
- **Brettspiele mit Würfeln** – trainieren ganz nebenbei Zählen und Addieren.
- **Einmaleins-Lernkarten** für Grundschulkinder.

## Sachwissen

- Kindersachbücher zu Tieren, Weltall oder Körper
- Experimentierkästen
- Globus und Weltkarte

## Woran du gute Lernmaterialien erkennst

1. **Altersgerecht:** nicht zu leicht, nicht zu schwer.
2. **Selbstkontrolle:** Kinder können selbst prüfen, ob sie richtig liegen.
3. **Offen:** Raum zum Ausprobieren statt nur richtig oder falsch.
4. **Ohne Werbung und In-App-Käufe** bei digitalen Angeboten.

## Kostenlose Quellen

Öffentliche Bibliotheken verleihen Bücher, Spiele und oft auch Tonies oder Lern-Apps. Bildungsserver der Länder bieten zahlreiche kostenlose Materialien. Und unsere Lernkarten-Tipps helfen beim Selbermachen.`,
    faq: [
      ["Sind Lern-Apps für Kinder sinnvoll?", "Gute Apps können ergänzen, ersetzen aber nicht gemeinsames Spielen und Vorlesen. Achte auf werbefreie Angebote ohne In-App-Käufe und begrenze die Bildschirmzeit."],
      ["Wie fördere ich die Lesefreude?", "Regelmäßiges Vorlesen, Bücher nach den Interessen des Kindes und gemeinsame Bibliotheksbesuche helfen sehr."],
    ],
  },

  /* ---------------- Basteln ---------------- */
  {
    path: "babys-kinder/basteln/bastelideen",
    description: "Bastelideen für Kinder: einfache Projekte mit Papier, Klorollen, Naturmaterial und Salzteig – sortiert nach Alter und mit wenig Material.",
    markdown: `Basteln braucht nicht viel: Papier, Schere, Kleber und ein paar Fundstücke aus Haushalt und Natur reichen. Hier sind **Bastelideen**, die mit wenig Material auskommen.

## Für die Kleinsten (ab ca. 2 Jahren)

- **Fingerfarben-Bilder:** Hände und Füße als Stempel.
- **Reißbilder:** Buntes Papier reißen und auf eine Vorlage kleben.
- **Klebebilder** mit Naturmaterial wie Blättern.

## Für Kindergartenkinder (ca. 3–6 Jahre)

- **Klorollen-Tiere:** Bemalen, Ohren aus Papier, Wackelaugen – fertig ist der Panda oder Fuchs.
- **Salzteig:** 2 Tassen Mehl, 1 Tasse Salz, etwa 1 Tasse Wasser – kneten, formen, trocknen lassen, bemalen.
- **Papierteller-Masken.**
- **Steine bemalen** und als Glückssteine verschenken.

## Für Schulkinder (ab ca. 6 Jahren)

- **Origami:** Schiffe, Kraniche, Frösche.
- **Freundschaftsbänder** knüpfen.
- **Mini-Gewächshaus** aus einer Plastikflasche.
- **Upcycling:** Aus Kartons werden Burgen, Puppenhäuser oder Roboter.

## Tipps

- Unterlage und alte Kleidung bereitlegen.
- Kinderscheren mit runder Spitze verwenden.
- Heißkleber nur durch Erwachsene.
- Nicht das perfekte Ergebnis zählt, sondern der Spaß.

Für verregnete Tage gibt es noch mehr Ideen im Ratgeber „Ideen für Regentage“.`,
    faq: [
      ["Welches Bastelmaterial sollte man zu Hause haben?", "Papier in verschiedenen Farben, Kinderschere, Klebestift, Buntstifte, Wasserfarben und gesammelte Dinge wie Klorollen und Kartons."],
      ["Wie lange hält Salzteig?", "Gut durchgetrocknet oder im Ofen bei niedriger Temperatur gebacken hält er sehr lange, besonders wenn er bemalt und lackiert wird."],
    ],
  },
  {
    path: "babys-kinder/basteln/ideen-fuer-regentage",
    description: "Ideen für Regentage mit Kindern: 15 Beschäftigungen für drinnen – von Höhlenbau über Backen bis Detektivspiel – gegen Langeweile bei schlechtem Wetter.",
    markdown: `Draußen regnet es, drinnen steigt die Unruhe? Mit diesen **Ideen für Regentage** wird es trotzdem ein schöner Tag.

## Kreativ

1. **Höhle bauen** aus Decken, Stühlen und Kissen.
2. **Malen und Basteln** – Ideen findest du bei unseren Bastelideen.
3. **Theater spielen** mit Verkleidungen oder Sockenpuppen.
4. **Ein eigenes Buch** gestalten: Geschichte ausdenken, Bilder malen, zusammenheften.

## In der Küche

5. **Kekse backen** oder Pizza belegen.
6. **Obstspieße** in bunten Mustern.

## Bewegung drinnen

7. **Hindernisparcours** mit Kissen, Seilen und Stühlen.
8. **Tanzparty** mit Lieblingsmusik.
9. **Ballonspiele:** Der Ballon darf den Boden nicht berühren.

## Spiele

10. **Brettspiele und Puzzles.**
11. **Detektivspiel:** Gegenstände verstecken und mit Hinweisen suchen lassen.
12. **Ich sehe was, was du nicht siehst.**

## Ruhig und gemütlich

13. **Vorlesen** oder ein Hörspiel hören.
14. **Experimente:** Lavalampe aus Wasser, Öl und einer Brausetablette.
15. **Regenspaziergang:** Mit Gummistiefeln und Regenjacke in die Pfützen – manchmal ist das die beste Idee!

## Tipp

Legt eine **Regentag-Box** an, in der besondere Spiele und Bastelsachen nur für solche Tage liegen. Dann freuen sich die Kinder sogar auf schlechtes Wetter.`,
    faq: [
      ["Was kann man an Regentagen ohne Bildschirm machen?", "Höhle bauen, backen, basteln, Brettspiele, Hindernisparcours oder ein Regenspaziergang mit Gummistiefeln."],
      ["Wie funktioniert die Lavalampe?", "Ein Glas zu einem Viertel mit Wasser (mit Lebensmittelfarbe) und dann mit Öl füllen, eine Brausetablette hineinwerfen – die Blasen steigen auf und sinken wieder."],
    ],
  },
  {
    path: "babys-kinder/basteln/spiele-fuer-drinnen",
    description: "Spiele für drinnen: Bewegungsspiele, Denkspiele und Partyspiele für Kinder in der Wohnung – mit wenig Material und für verschiedene Altersgruppen.",
    markdown: `Ob Kindergeburtstag oder grauer Nachmittag: Diese **Spiele für drinnen** brauchen wenig Platz und kaum Material.

## Bewegungsspiele

- **Stopptanz:** Musik läuft, alle tanzen – bei Stille einfrieren.
- **Feuer, Wasser, Blitz:** Auf Zuruf schnell eine bestimmte Position einnehmen.
- **Ballon-Volleyball** über eine Schnur.
- **Reise nach Jerusalem.**

## Denk- und Ratespiele

- **Kofferpacken:** „Ich packe in meinen Koffer ...“ – jeder ergänzt einen Gegenstand.
- **Pantomime:** Tiere oder Berufe vorspielen und raten lassen.
- **Stille Post.**
- **Wer bin ich?** mit Zetteln auf der Stirn.

## Suchspiele

- **Schatzsuche** mit kleinen Hinweisen von Zimmer zu Zimmer.
- **Topfschlagen.**
- **Ich sehe was, was du nicht siehst.**

## Für die Kleinsten

- Verstecken von Kuscheltieren
- Fingerspiele und Kniereiter
- Bauklötze-Türme

## Tipps

- Zerbrechliches vorher wegräumen.
- Bei Wettspielen alle gewinnen lassen – zumindest manchmal.
- Ruhige Spiele nach wilden Spielen helfen beim Runterkommen.`,
    faq: [
      ["Welche Spiele eignen sich für Kindergeburtstage drinnen?", "Stopptanz, Topfschlagen, Schatzsuche, Pantomime und Reise nach Jerusalem sind Klassiker, die immer funktionieren."],
      ["Welche Spiele brauchen gar kein Material?", "Kofferpacken, Ich sehe was, was du nicht siehst, Stille Post und Pantomime."],
    ],
  },
  {
    path: "babys-kinder/basteln/spiele-fuer-draussen",
    description: "Spiele für draußen: Klassiker wie Fangen und Verstecken, Naturspiele, Wasserspiele und Ideen für den Garten oder Spielplatz – für Kinder jeden Alters.",
    markdown: `Frische Luft, Bewegung und Toben: Draußen spielen ist gesund und macht glücklich. Hier sind **Spiele für draußen**, vom Klassiker bis zur Naturentdeckung.

## Klassiker

- **Fangen** in allen Varianten (Ochs am Berg, Versteinern, Kettenfangen)
- **Verstecken**
- **Himmel und Hölle** mit Straßenkreide
- **Seilspringen** und **Gummitwist**
- **Sackhüpfen** und **Eierlauf**

## Naturspiele

- **Naturbingo:** Karte mit Dingen, die gefunden werden müssen (Tannenzapfen, Feder, rotes Blatt).
- **Waldsofa bauen** aus Ästen.
- **Spuren lesen** im Schnee oder Matsch.
- **Mandalas aus Naturmaterial** legen.
- **Barfußpfad** mit verschiedenen Untergründen.

## Wasserspiele im Sommer

- Wasserbomben-Fangen
- Planschbecken-Regatta mit Korkschiffchen
- Rasensprenger-Lauf

Bei Wasserspielen gilt: Kinder nie unbeaufsichtigt lassen – auch nicht bei flachem Wasser.

## Auf dem Spielplatz

Neben Rutsche und Schaukel macht ein Spielplatz mit kleinen Aufgaben noch mehr Spaß: „Wer findet drei runde Dinge?“

## Sonnenschutz nicht vergessen

Kopfbedeckung, Sonnencreme, Wasser und Schattenpausen gehören im Sommer dazu.`,
    faq: [
      ["Welche Spiele eignen sich für große Gruppen?", "Fangspiele, Ochs am Berg, Sackhüpfen und Staffelläufe funktionieren auch mit vielen Kindern."],
      ["Was ist Naturbingo?", "Ein Suchspiel: Kinder bekommen eine Karte mit Bildern von Naturdingen und haken ab, was sie finden."],
    ],
  },

  /* ---------------- Ausflüge ---------------- */
  {
    path: "babys-kinder/ausfluege/zoos-mit-kindern",
    description: "Zoos mit Kindern: Tipps für einen entspannten Zoobesuch, die richtige Ausrüstung, beste Zeiten und spannende Zoos in Deutschland, Österreich und der Schweiz.",
    markdown: `Ein Zoobesuch ist für Kinder ein Abenteuer. Mit ein paar Tipps wird er auch für Eltern entspannt.

## Planung

- **Früh starten:** Morgens sind viele Tiere aktiver und die Wege weniger voll.
- **Fütterungszeiten** auf der Website nachsehen und Highlights planen.
- **Nicht alles sehen wollen:** Lieber wenige Tiere in Ruhe beobachten.
- **Tickets online kaufen** spart oft Wartezeit an der Kasse.

## Ausrüstung

- Bequeme Schuhe, Kinderwagen oder Bollerwagen (oft ausleihbar)
- Wasser, Snacks, Sonnen- oder Regenschutz
- Wechselkleidung für die Kleinsten
- Fernglas – macht Kindern großen Spaß

## Ideen für Kinder

- **Tier-Bingo:** Welche Tiere sehen wir heute?
- **Fotodetektive:** Kinder fotografieren ihre Lieblingstiere.
- **Streichelzoo** und Spielplätze als Pausen einplanen.

## Beliebte Zoos

Unsere Ratgeber helfen bei der Planung: Zoo Berlin (mit Pandas), Tiergarten Schönbrunn in Wien (ebenfalls mit Pandas), Tierpark Hellabrunn in München, Zoo Leipzig mit der Tropenhalle Gondwanaland und Zoo Zürich mit der Masoala-Regenwaldhalle.

## Regen?

Viele Zoos haben große Tierhäuser und Hallen. Tipps dazu findest du im Ratgeber „Zoo bei Regen“.`,
    faq: [
      ["Ab welchem Alter lohnt sich der Zoo?", "Schon Kleinkinder haben Freude an Tieren. Richtig spannend wird es ab etwa zwei bis drei Jahren."],
      ["Wie lange sollte man für einen Zoobesuch einplanen?", "Für große Zoos ruhig einen ganzen Tag. Mit kleinen Kindern sind drei bis fünf Stunden oft genug."],
    ],
  },
  {
    path: "babys-kinder/ausfluege/freizeitparks-mit-kindern",
    description: "Freizeitparks mit Kindern: Tipps zu Alter, Größenbeschränkungen, Wartezeiten, Pausen und familienfreundlichen Parks in Deutschland und Österreich.",
    markdown: `Ein Tag im Freizeitpark ist für Kinder ein Highlight. Mit guter Planung bleibt er stressfrei.

## Welcher Park passt?

- **Kleine Kinder:** Familienparks mit Spielplätzen, Kinderkarussells und kleinen Achterbahnen – zum Beispiel der Familypark am Neusiedler See.
- **Größere Kinder und Teenager:** Große Parks mit Achterbahnen wie Europa-Park, Phantasialand oder Heide Park.

## Größe und Alter beachten

Viele Fahrgeschäfte haben **Mindestgrößen**. Messt euer Kind vorher und schaut auf der Park-Website nach, welche Attraktionen möglich sind. So gibt es vor Ort keine Enttäuschungen.

## Tipps für den Tag

1. **Früh da sein** – die ersten Stunden sind am ruhigsten.
2. **Beliebte Attraktionen zuerst** oder gegen Abend.
3. **Pausen** einplanen: Spielplatz, Show, Essen.
4. **Wasser und Snacks** mitnehmen, wenn erlaubt.
5. **Treffpunkt ausmachen**, falls man sich verliert. Telefonnummer auf ein Armband schreiben.
6. **Wechselkleidung** für Wasserbahnen.

## Wann hinfahren?

Wochentage außerhalb der Ferien sind meist deutlich ruhiger. Mehr dazu im Ratgeber „Beste Reisezeit für Freizeitparks“. Wie du bei Tickets sparen kannst, erfährst du unter „Freizeitpark-Tickets sparen“.`,
    faq: [
      ["Ab welchem Alter lohnt sich ein Freizeitpark?", "Familienparks bieten schon für Kinder ab etwa drei Jahren viel. Für große Parks mit Achterbahnen lohnt es sich eher ab dem Grundschulalter."],
      ["Wo finde ich die Mindestgrößen?", "Auf der Website des Parks, meist in der Übersicht der Attraktionen, und am Eingang der Fahrgeschäfte."],
    ],
  },
  {
    path: "babys-kinder/ausfluege/ausflugsziele-oesterreich",
    description: "Ausflugsziele in Österreich mit Kindern: Zoos, Freizeitparks, Naturerlebnisse und Museen in Wien, Niederösterreich, Burgenland und den Alpen.",
    markdown: `Österreich bietet für Familien viele Ausflugsziele – von Wien bis in die Berge. Hier eine Auswahl nach Art.

## Tiere

- **Tiergarten Schönbrunn (Wien):** der älteste noch bestehende Zoo der Welt, mit Pandas, Polarium und Regenwaldhaus.
- **Haus des Meeres (Wien):** Aquarium und Terrarium in einem ehemaligen Flakturm.
- **Wildparks** in vielen Bundesländern mit heimischen Tieren.

## Freizeitparks

- **Familypark (Burgenland):** Österreichs großer Familien-Freizeitpark am Neusiedler See.
- **Wiener Prater:** mit Riesenrad, Karussells und dem großen Grünen Prater zum Spazieren.

## Natur

- **Seen:** Baden und Bootfahren, z. B. Wörthersee, Neusiedler See, Salzkammergut-Seen.
- **Klammen und Wasserfälle:** z. B. die Krimmler Wasserfälle im Salzburger Land.
- **Erlebnisberge** mit Themenwegen und Sommerrodelbahnen.

## Museen

- **Naturhistorisches Museum Wien** mit Dinosauriern
- **ZOOM Kindermuseum** im MuseumsQuartier Wien
- **Technisches Museum Wien**

## Tipp

Viele Bundesländer bieten **Familienpässe oder Ausflugskarten** mit Ermäßigungen. Informiere dich bei der Landesregierung bzw. Tourismusorganisation deines Bundeslandes.`,
    faq: [
      ["Was kann man in Wien mit Kindern unternehmen?", "Tiergarten Schönbrunn, Prater mit Riesenrad, Haus des Meeres, Naturhistorisches Museum und ZOOM Kindermuseum sind beliebte Ziele."],
      ["Gibt es Familienermäßigungen?", "Ja, viele Bundesländer bieten Familienpässe mit Ermäßigungen bei Ausflugszielen an."],
    ],
    sources: [{ title: "Österreich Werbung – Urlaub in Österreich", url: "https://www.austria.info/" }],
  },
  {
    path: "babys-kinder/ausfluege/ausflugsziele-deutschland",
    description: "Ausflugsziele in Deutschland mit Kindern: Zoos, Freizeitparks, Naturerlebnisse und Mitmach-Museen von Nord bis Süd – mit Planungstipps.",
    markdown: `Deutschland ist voller Ausflugsziele für Familien. Hier eine Auswahl, sortiert nach Interessen.

## Tiere

- **Zoo Berlin** – der älteste Zoo Deutschlands, mit Pandas.
- **Zoo Leipzig** – mit der Tropenhalle Gondwanaland.
- **Tierpark Hellabrunn (München)** – nach Kontinenten gegliedert.
- **SEA LIFE**-Aquarien in mehreren Städten.

## Freizeitparks

- **Europa-Park (Rust, Baden-Württemberg)** – Deutschlands größter Freizeitpark.
- **Phantasialand (Brühl bei Köln)** – thematisierte Welten und Achterbahnen.
- **Heide Park (Soltau, Niedersachsen)** – Achterbahnen und Familienbereiche.

## Natur

- **Nationalparks** wie Bayerischer Wald, Harz, Sächsische Schweiz oder Wattenmeer mit Ranger-Touren.
- **Baumwipfelpfade** in mehreren Regionen.
- **Nord- und Ostsee** zum Muschelsammeln und Wattwandern (nur mit Führung!).

## Mitmach-Museen

- **Deutsches Museum (München)** mit Kinderreich
- **Science Center** wie die Phaeno in Wolfsburg
- **Naturkundemuseen** in vielen Städten

## Planungstipps

- Tickets online kaufen und Öffnungszeiten prüfen.
- Bei Freizeitparks Ferienzeiten meiden.
- Regionale **Familienkarten** und Ferienpässe nutzen.`,
    faq: [
      ["Was sind die beliebtesten Freizeitparks in Deutschland?", "Unter anderem Europa-Park, Phantasialand und Heide Park. Mehr dazu in unserem Freizeitpark-Ratgeber."],
      ["Darf man allein ins Watt?", "Wattwanderungen nur mit ortskundiger Führung – die Flut kommt schnell und Priele sind gefährlich."],
    ],
  },

  /* ---------------- Kinder & KI ---------------- */
  {
    path: "babys-kinder/kinder-ki/kinder-ki-prompts",
    description: "KI-Prompts für Kinder und Familien: sichere Ideen für Geschichten, Malvorlagen, Quizfragen und Lernhilfen – gemeinsam mit Erwachsenen nutzen.",
    markdown: `KI-Werkzeuge können für Familien kreative Helfer sein – wenn Erwachsene sie gemeinsam mit Kindern nutzen. Hier sind kindgerechte **Prompt-Ideen**.

## Wichtig vorab

- Viele KI-Dienste sind laut ihren Nutzungsbedingungen **erst ab 13 Jahren** oder mit Zustimmung der Eltern erlaubt – prüft das vorher.
- **Keine persönlichen Daten** eingeben: keine echten Namen, Adressen, Fotos von Kindern.
- KI kann **Fehler machen**. Wissen immer gemeinsam überprüfen.

## Geschichten

- „Erzähle eine kurze Gute-Nacht-Geschichte über einen kleinen Panda, der Angst vor der Dunkelheit hat und mutig wird. Für ein fünfjähriges Kind, maximal 300 Wörter.“
- „Erfinde ein Märchen mit einem Drachen, der Gemüse liebt.“

## Malen und Basteln

- „Beschreibe fünf einfache Motive, die ein Kind mit Kreisen und Dreiecken zeichnen kann.“
- „Schlage drei Bastelideen mit Klorollen und Papier vor.“

## Lernen

- „Erkläre einem Achtjährigen, warum der Himmel blau ist – in einfachen Worten.“
- „Stelle mir zehn Quizfragen zu Pinguinen für die dritte Klasse, mit Lösungen.“
- „Übe mit mir das Einmaleins mit der 7 und lobe mich, wenn ich richtig liege.“

## Gemeinsam reflektieren

Fragt die Kinder: Woher weiß die KI das? Stimmt das wirklich? So lernen sie, Informationen kritisch zu prüfen. Mehr dazu im Ratgeber „Medienkompetenz für Kinder“.`,
    faq: [
      ["Ab welchem Alter dürfen Kinder KI nutzen?", "Das regeln die Nutzungsbedingungen der Anbieter – oft gilt ein Mindestalter von 13 Jahren oder die Zustimmung der Eltern. Jüngere Kinder sollten KI nur gemeinsam mit Erwachsenen nutzen."],
      ["Ist KI-Wissen immer richtig?", "Nein. KI kann überzeugend klingen und trotzdem falsch liegen. Wichtiges sollte man mit verlässlichen Quellen prüfen."],
    ],
    sources: [SIM, SAFERINTERNET],
  },
  {
    path: "babys-kinder/kinder-ki/ki-geschichten-fuer-kinder",
    description: "KI-Geschichten für Kinder: So erstellt ihr gemeinsam persönliche Gute-Nacht-Geschichten mit KI – mit Prompt-Vorlagen und Tipps für Eltern.",
    markdown: `Mit KI lassen sich in Sekunden fantasievolle Geschichten erfinden – mit dem Lieblingstier des Kindes, seinem Hobby oder dem Thema, das es gerade beschäftigt. Wichtig: Erwachsene steuern und lesen mit.

## Prompt-Vorlage für Gute-Nacht-Geschichten

„Schreibe eine ruhige Gute-Nacht-Geschichte für ein Kind im Alter von [Alter] Jahren. Hauptfigur: [Tier oder Figur]. Thema: [z. B. Freundschaft, Mut, erster Kindergartentag]. Länge: etwa [300] Wörter. Einfache Sprache, ein schönes Ende, keine gruseligen Elemente.“

## Ideen

- **Mutgeschichte:** Ein kleiner Panda traut sich zum ersten Mal ins Wasser.
- **Gefühle verstehen:** Ein Fuchs ist wütend und lernt, was ihm hilft.
- **Alltag begleiten:** Eine Pinguin-Familie zieht um.
- **Mitmachgeschichte:** Das Kind entscheidet an zwei Stellen, wie es weitergeht.

## Tipps für Eltern

- **Vorher lesen:** KI-Texte können unpassende Stellen enthalten.
- **Nichts Persönliches eingeben:** Statt echter Namen Fantasienamen verwenden.
- **Gemeinsam weiterspinnen:** Das Kind erfindet die nächste Szene, die KI hilft beim Formulieren.
- **Bilder malen:** Das Kind malt seine Lieblingsszene – mehr Kreativität als ein KI-Bild.

## KI ersetzt nicht das Vorlesen

Die schönste Geschichte bleibt die, die ihr gemeinsam erlebt. KI ist ein Ideengeber – das Kuscheln beim Vorlesen bleibt euer Teil.`,
    faq: [
      ["Kann ich KI-Geschichten ausdrucken und verschenken?", "Für den privaten Gebrauch in der Regel ja. Prüfe die Nutzungsbedingungen des Tools, wenn du Geschichten veröffentlichen oder verkaufen möchtest."],
      ["Wie lang sollte eine Gute-Nacht-Geschichte sein?", "Für Kindergartenkinder reichen etwa 200 bis 400 Wörter – das sind wenige Minuten Vorlesezeit."],
    ],
    sources: [SIM],
  },
  {
    path: "babys-kinder/kinder-ki/medienkompetenz-fuer-kinder",
    description: "Medienkompetenz für Kinder: Bildschirmzeit, sichere Einstellungen, KI und Fake News erkennen – praktische Tipps für Eltern nach Altersstufe.",
    markdown: `Kinder wachsen mit Smartphones, Streaming und KI auf. **Medienkompetenz** heißt, Medien sinnvoll, kritisch und sicher zu nutzen. Eltern sind dabei die wichtigsten Vorbilder.

## Orientierung nach Alter

- **Unter 3 Jahren:** möglichst keine Bildschirmmedien.
- **3–6 Jahre:** kurze Zeiten, ausgewählte Inhalte, immer gemeinsam.
- **6–9 Jahre:** feste Zeiten und Regeln, kindgerechte Angebote.
- **Ab 10 Jahren:** schrittweise mehr Eigenverantwortung, Gespräche über soziale Netzwerke.

## Gemeinsame Regeln

- **Mediennutzungsvertrag:** Regeln schriftlich festhalten (z. B. auf mediennutzungsvertrag.de).
- **Bildschirmfreie Zeiten:** beim Essen und vor dem Schlafen.
- **Geräte nachts** außerhalb des Kinderzimmers.

## Technische Einstellungen

- Jugendschutz- und Kinderprofile in Betriebssystem, Streamingdiensten und App-Stores.
- In-App-Käufe deaktivieren.
- Datenschutzeinstellungen prüfen.

## Kritisch denken lernen

- **Fake News erkennen:** Wer hat das geschrieben? Gibt es andere Quellen?
- **KI verstehen:** KI kann Fehler machen und Bilder fälschen.
- **Werbung erkennen:** Auch Influencer machen Werbung.

## Offen bleiben

Das Wichtigste: Kinder sollen wissen, dass sie mit allem zu euch kommen können – auch wenn sie etwas Verstörendes gesehen haben. Hilfe gibt es bei Initiativen wie klicksafe (Deutschland) und Saferinternet.at (Österreich).`,
    faq: [
      ["Wie viel Bildschirmzeit ist für Kinder okay?", "Fachstellen empfehlen für Kleinkinder sehr wenig oder keine, für Grundschulkinder begrenzte Zeiten mit klaren Regeln. Wichtig ist auch, was angesehen wird."],
      ["Ab wann ein eigenes Smartphone?", "Dafür gibt es kein festes Alter. Viele Fachstellen raten, damit nicht zu früh anzufangen und das Kind schrittweise heranzuführen."],
    ],
    sources: [SIM, SAFERINTERNET, { title: "Schau hin! Was dein Kind mit Medien macht", url: "https://www.schau-hin.info/" }],
  },
];
