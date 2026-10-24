import type { FillPage } from "../types";

const BERLIN = { title: "Zoo Berlin – offizielle Website", url: "https://www.zoo-berlin.de/" };
const WIEN = { title: "Tiergarten Schönbrunn – offizielle Website", url: "https://www.zoovienna.at/" };
const MUC = { title: "Tierpark Hellabrunn – offizielle Website", url: "https://www.hellabrunn.de/" };
const LEJ = { title: "Zoo Leipzig – offizielle Website", url: "https://www.zoo-leipzig.de/" };
const ZRH = { title: "Zoo Zürich – offizielle Website", url: "https://www.zoo.ch/" };
const SEALIFE = { title: "SEA LIFE Deutschland – offizielle Website", url: "https://www.visitsealife.com/" };
const EP = { title: "Europa-Park – offizielle Website", url: "https://www.europapark.de/" };
const PHL = { title: "Phantasialand – offizielle Website", url: "https://www.phantasialand.de/" };
const HP = { title: "Heide Park Resort – offizielle Website", url: "https://www.heide-park.de/" };
const FP = { title: "Familypark – offizielle Website", url: "https://www.familypark.at/" };
const PRATER = { title: "Wiener Prater – offizielle Website", url: "https://www.praterwien.com/" };

/** Bausteine für wiederkehrende Abschnitte – jede Seite bleibt trotzdem eigenständig. */
const priceNote = (name: string) =>
  `Preise ändern sich regelmäßig. Die aktuellen, verbindlichen Preise findest du immer auf der offiziellen Website von ${name}. Wir nennen deshalb bewusst keine Beträge, sondern zeigen dir, wie du das passende Ticket findest und sparst.`;

export const zoosFreizeitparks: FillPage[] = [
  /* ================= Zoo Berlin ================= */
  {
    path: "zoos/zoo-berlin/preise",
    description: "Zoo Berlin Preise: Ticketarten, Ermäßigungen, Kombiticket mit dem Aquarium, Jahreskarte und Spartipps – so findest du das günstigste Ticket.",
    markdown: `Der **Zoo Berlin** ist der älteste Zoo Deutschlands (gegründet 1844) und einer der artenreichsten der Welt. Hier erfährst du, welche Tickets es gibt und wie du sparen kannst.

## Ticketarten

- **Tageskarte Zoo** für Erwachsene, Kinder und Ermäßigungsberechtigte
- **Familienkarten** für Eltern mit Kindern
- **Kombiticket Zoo + Aquarium:** Das **Aquarium Berlin** liegt direkt am Zoo und hat einen eigenen Eintritt. Mit dem Kombiticket siehst du beides.
- **Jahreskarte** für Vielbesucher

Kleine Kinder haben häufig freien Eintritt – die Altersgrenzen stehen auf der Website.

## Spartipps

1. **Online kaufen:** Spart Wartezeit an der Kasse.
2. **Jahreskarte prüfen:** Lohnt sich oft schon bei wenigen Besuchen im Jahr.
3. **Ermäßigungen** für Schüler, Studierende, Menschen mit Behinderung und weitere Gruppen nachfragen – Nachweis mitnehmen.
4. **Kombiticket**, wenn du auch ins Aquarium möchtest.

## Gut zu wissen

${priceNote("Zoo Berlin")}

Ticketkauf und Einlass erklären wir unter „Zoo Berlin Tickets“, Öffnungszeiten unter „Zoo Berlin Öffnungszeiten“.`,
    faq: [
      ["Ist das Aquarium im Zoo-Ticket enthalten?", "Nein, das Aquarium Berlin hat einen eigenen Eintritt. Es gibt aber Kombitickets für Zoo und Aquarium."],
      ["Lohnt sich eine Jahreskarte?", "Wer mehrmals im Jahr kommt, spart häufig. Rechne mit den aktuellen Preisen auf der Website nach."],
    ],
    sources: [BERLIN],
  },
  {
    path: "zoos/zoo-berlin/oeffnungszeiten",
    description: "Zoo Berlin Öffnungszeiten: Wie sich Sommer- und Winterzeiten unterscheiden, letzter Einlass, Feiertage, Anfahrt und die beste Besuchszeit.",
    markdown: `Der **Zoo Berlin** hat das ganze Jahr geöffnet. Die genauen Öffnungszeiten hängen von der Jahreszeit ab – im Sommer länger, im Winter kürzer.

## Was du wissen solltest

- **Sommer- und Winterzeiten:** Im Frühjahr und Sommer schließt der Zoo später als im Winter.
- **Letzter Einlass:** meist eine gewisse Zeit vor Schließung.
- **Tierhäuser** schließen teils früher als das Gelände.
- **Feiertage und Sonderveranstaltungen** können abweichende Zeiten haben.

Die **aktuellen Öffnungszeiten** stehen immer auf der offiziellen Website – schau vor deinem Besuch nach.

## Die beste Besuchszeit

- **Morgens** sind viele Tiere aktiver und die Wege leerer.
- **Wochentage** außerhalb der Ferien sind ruhiger.
- **Fütterungszeiten** stehen auf der Website und an den Gehegen.

## Anfahrt

Der Zoo liegt mitten in der City West am **Bahnhof Zoologischer Garten** – mit S-Bahn, U-Bahn, Regionalzügen und Bussen sehr gut erreichbar. Eingänge sind das **Löwentor** am Hardenbergplatz und das **Elefantentor** an der Budapester Straße. Parkplätze in der Umgebung sind begrenzt und kostenpflichtig – öffentliche Verkehrsmittel sind meist die bessere Wahl.

## Weitere Infos

Tickets und Preise unter „Zoo Berlin Tickets“ und „Zoo Berlin Preise“, Tipps für den Besuch unter „Zoo Berlin Tipps“.`,
    faq: [
      ["Hat der Zoo Berlin im Winter geöffnet?", "Ja, der Zoo ist ganzjährig geöffnet – im Winter mit kürzeren Öffnungszeiten."],
      ["Welche Eingänge hat der Zoo Berlin?", "Das Löwentor am Hardenbergplatz und das Elefantentor an der Budapester Straße."],
    ],
    sources: [BERLIN],
  },
  {
    path: "zoos/zoo-berlin/pandas",
    description: "Pandas im Zoo Berlin: Meng Meng, Jiao Qing und die Zwillinge Leni und Lotti – Geschichte des Panda Garden und Tipps für deinen Besuch bei den Pandas.",
    focusKeyword: "Pandas im Zoo Berlin",
    markdown: `Der **Zoo Berlin** ist der einzige Zoo in Deutschland mit **Großen Pandas** – und für Panda-Fans ein Pflichtbesuch.

## Die Berliner Pandas

- **Meng Meng** (Weibchen) und **Jiao Qing** (Männchen) leben seit **2017** im eigens gebauten **Panda Garden**. Sie sind Leihgaben aus China im Rahmen eines Forschungs- und Artenschutzprogramms.
- **2019** kamen die Zwillinge **Pit und Paule** zur Welt – die ersten in Deutschland geborenen Großen Pandas. Sie zogen 2023 nach China.
- Im **August 2024** wurde Meng Meng erneut Mutter von Zwillingen: **Leni und Lotti**.

Weil Jungtiere nach einigen Jahren nach China umziehen, kann sich die Besetzung ändern. Den aktuellen Stand findest du auf der Website des Zoos.

## Der Panda Garden

Die Anlage ist chinesisch inspiriert gestaltet, mit Kletterbäumen, Bambus und Innenbereichen. Pandas mögen es kühl – an heißen Tagen sind sie oft drinnen.

## Tipps für den Besuch

1. **Früh kommen:** Morgens sind Pandas oft aktiver, besonders zur Fütterung.
2. **Geduld:** Pandas schlafen viel. Ein zweiter Besuch am Nachmittag lohnt sich.
3. **Nicht klopfen oder blitzen:** Fotos ohne Blitz.
4. **Kühle Tage** sind ideal.

## Mehr zu Pandas

Alles über Pandas findest du in unserem Panda-Steckbrief und unter „Wo kann man Pandas sehen?“.`,
    faq: [
      ["Seit wann gibt es Pandas im Zoo Berlin?", "Seit 2017 leben Meng Meng und Jiao Qing im Panda Garden des Zoo Berlin."],
      ["Wie heißen die Panda-Zwillinge in Berlin?", "Die 2024 geborenen Zwillinge heißen Leni und Lotti. Die ersten Zwillinge Pit und Paule (geboren 2019) leben inzwischen in China."],
    ],
    sources: [BERLIN],
  },
  {
    path: "zoos/zoo-berlin/aquarium",
    description: "Aquarium Berlin am Zoo: Fische, Reptilien, Amphibien und Insekten auf drei Etagen – Tickets, Kombiticket mit dem Zoo und Tipps für den Besuch.",
    markdown: `Direkt neben dem Zoo liegt das **Aquarium Berlin** – eines der artenreichsten Aquarien Europas. Es ist ein eigenes Haus mit eigenem Eintritt und eine gute Ergänzung zum Zoobesuch, besonders bei schlechtem Wetter.

## Was dich erwartet

Auf **drei Etagen** zeigt das Aquarium:
- **Fische** aus Süß- und Salzwasser, darunter Haie und Korallenriffe
- **Reptilien** wie Krokodile, Schlangen und Echsen
- **Amphibien** wie Frösche und Salamander
- **Insekten und Spinnentiere**

Das historische Gebäude mit dem bekannten Eingang an der Budapester Straße ist selbst schon sehenswert.

## Tickets

- **Einzelticket Aquarium**
- **Kombiticket Zoo + Aquarium** – lohnt sich, wenn du beides besuchen möchtest

Die aktuellen Preise und Öffnungszeiten stehen auf der offiziellen Website.

## Tipps

- **Bei Regen** ideal – siehe auch „Zoo bei Regen“.
- **Ruhige Zeiten:** vormittags unter der Woche.
- **Mit Kindern:** Die Krokodilhalle und die Haie sind meist Highlights.
- **Fotografieren** ohne Blitz – das schont die Tiere und spiegelt weniger.

## Hinweis

Das Aquarium Berlin am Zoo ist nicht zu verwechseln mit anderen Aquarien in Berlin. Informiere dich vorher, welches Haus du besuchen möchtest.`,
    faq: [
      ["Ist das Aquarium Berlin Teil des Zoos?", "Es liegt direkt am Zoo und gehört zur selben Gesellschaft, hat aber einen eigenen Eintritt. Kombitickets sind möglich."],
      ["Wie lange dauert ein Besuch im Aquarium?", "Viele Besucher planen ein bis zwei Stunden ein."],
    ],
    sources: [BERLIN],
  },
  {
    path: "zoos/zoo-berlin/tipps",
    description: "Zoo Berlin Tipps: Highlights, Route, Fütterungen, Essen, Kinderwagen und Spielplätze – so wird dein Besuch im ältesten Zoo Deutschlands entspannt.",
    markdown: `Der **Zoo Berlin** ist groß und artenreich. Mit diesen Tipps holst du das Beste aus deinem Besuch heraus.

## Highlights

- **Panda Garden** mit den Großen Pandas
- **Raubtiere** und **Menschenaffen**
- **Flusspferde** mit Unterwasser-Einblick
- **Vogelhaus**
- Historische Tierhäuser und Tore wie das **Elefantentor**

## Planung

1. **Website checken:** Öffnungszeiten, Fütterungszeiten, Baustellen.
2. **Online-Ticket** kaufen.
3. **Früh starten** – Pandas und viele andere Tiere sind morgens aktiver.
4. **Route festlegen:** Mit Kindern lieber wenige Highlights in Ruhe.

## Mit Kindern

- Spielplätze für Pausen nutzen.
- Kinderwagen oder Bollerwagen mitnehmen.
- Tier-Bingo oder Fotojagd machen.

## Essen und Trinken

Im Zoo gibt es gastronomische Angebote. Viele Familien nehmen zusätzlich eigene Snacks und Getränke mit – erkundige dich vorab nach den aktuellen Regeln.

## Kombinieren

- **Aquarium Berlin** direkt nebenan (Kombiticket)
- **Tiergarten** und **Kurfürstendamm** in Laufweite

## Rücksicht

Nicht an Scheiben klopfen, nicht füttern, ohne Blitz fotografieren – so bleibt es für Tiere und Menschen angenehm.

Weitere Infos: „Zoo Berlin Tickets“, „Zoo Berlin Preise“, „Pandas im Zoo Berlin“.`,
    faq: [
      ["Wie viel Zeit sollte ich für den Zoo Berlin einplanen?", "Für die wichtigsten Highlights mindestens einen halben Tag, für einen ausführlichen Besuch einen ganzen Tag."],
      ["Ist der Zoo Berlin kinderwagenfreundlich?", "Die Wege sind überwiegend gut befahrbar. In manchen Tierhäusern kann es eng werden."],
    ],
    sources: [BERLIN],
  },

  /* ================= Tiergarten Schönbrunn ================= */
  {
    path: "zoos/tiergarten-schoenbrunn/tickets",
    description: "Tiergarten Schönbrunn Tickets: Online-Tickets, Jahreskarte, Ermäßigungen und Kombitickets – so kommst du ohne Wartezeit in den ältesten Zoo der Welt.",
    markdown: `Der **Tiergarten Schönbrunn** in Wien wurde **1752** gegründet und ist der älteste noch bestehende Zoo der Welt. So kommst du am besten an dein Ticket.

## Wo kaufen?

- **Online-Ticketshop** auf der offiziellen Website – spart Wartezeit an den Kassen, besonders an Wochenenden und in den Ferien.
- **Kassen** an den Eingängen.

## Ticketarten

- Tageskarten für Erwachsene und Kinder
- Ermäßigungen für bestimmte Gruppen (Nachweis mitnehmen)
- **Jahreskarte** für Vielbesucher – bei Wienern sehr beliebt
- Teils **Kombitickets** mit anderen Sehenswürdigkeiten in Schönbrunn

Welche Tickets aktuell angeboten werden, steht auf der Website.

## Gut zu wissen

- Der Tiergarten liegt im **Schlosspark Schönbrunn** im 13. Bezirk (Hietzing).
- Mit der **U4** (Station Hietzing bzw. Schönbrunn) und mehreren Straßenbahn- und Buslinien gut erreichbar.
- Online-Tickets gelten oft für ein bestimmtes Datum oder Zeitfenster – Bedingungen beachten.

Preise und Spartipps unter „Tiergarten Schönbrunn Preise“, Öffnungszeiten unter „Tiergarten Schönbrunn Öffnungszeiten“.`,
    faq: [
      ["Muss ich Tickets vorab online kaufen?", "Nicht zwingend, aber an vollen Tagen spart es Wartezeit. Prüfe auf der Website, ob es Zeitfenster gibt."],
      ["Wie komme ich zum Tiergarten Schönbrunn?", "Zum Beispiel mit der U4 bis Hietzing oder Schönbrunn und dann zu Fuß durch den Schlosspark."],
    ],
    sources: [WIEN],
  },
  {
    path: "zoos/tiergarten-schoenbrunn/preise",
    description: "Tiergarten Schönbrunn Preise: Ticketarten, Ermäßigungen, Jahreskarte und Spartipps für Familien – und wo du die aktuellen Preise findest.",
    markdown: `Was kostet ein Besuch im **Tiergarten Schönbrunn**? Hier findest du die Ticketarten und Tipps zum Sparen.

## Ticketarten im Überblick

- **Erwachsene**
- **Kinder** – sehr kleine Kinder häufig kostenlos
- **Ermäßigungen** z. B. für Studierende, Senioren oder Menschen mit Behinderung
- **Jahreskarte** – für alle, die öfter kommen
- **Gruppen- und Schultarife**

## Spartipps

1. **Jahreskarte:** Wer in Wien oder Umgebung wohnt, hat sie oft nach wenigen Besuchen wieder herinnen.
2. **Ermäßigungsnachweise** mitnehmen.
3. **Online kaufen** – Preise und Vorteile auf der Website vergleichen.
4. **Eigene Jause** mitnehmen, sofern erlaubt – die Hausordnung informiert.
5. **Familienangebote** und Aktionstage im Blick behalten.

## Gut zu wissen

${priceNote("Tiergarten Schönbrunn")}

## Was ist inklusive?

Mit dem Eintritt besuchst du das gesamte Zoogelände inklusive Tierhäuser wie **Polarium**, **Regenwaldhaus** und **Aquarien- und Terrarienhaus**. Einige Sonderangebote wie Führungen kosten extra.`,
    faq: [
      ["Ist der Eintritt für Kinder frei?", "Für sehr kleine Kinder in der Regel ja. Die genauen Altersgrenzen stehen auf der Website."],
      ["Sind die Tierhäuser im Eintritt enthalten?", "Ja, die Tierhäuser auf dem Zoogelände sind im regulären Eintritt enthalten. Führungen und Sonderangebote kosten teils extra."],
    ],
    sources: [WIEN],
  },
  {
    path: "zoos/tiergarten-schoenbrunn/oeffnungszeiten",
    description: "Tiergarten Schönbrunn Öffnungszeiten: ganzjährig geöffnet, Unterschiede zwischen Sommer und Winter, Tierhäuser, beste Besuchszeit und Anfahrt.",
    markdown: `Der **Tiergarten Schönbrunn** ist **an allen Tagen im Jahr** geöffnet. Die Schließzeiten richten sich nach der Jahreszeit.

## Was du wissen solltest

- **Öffnung am Morgen**, Schließzeit je nach Monat unterschiedlich – im Sommer länger, im Winter früher.
- **Tierhäuser** können vor dem Gelände schließen.
- An besonderen Tagen sind **abweichende Zeiten** möglich.

Die aktuellen Öffnungszeiten findest du auf der offiziellen Website.

## Beste Besuchszeit

- **Vormittags unter der Woche** ist es am ruhigsten.
- **Pandas** sind morgens oft aktiver.
- **Kühle oder regnerische Tage:** Die Tierhäuser lohnen sich besonders – siehe „Zoo bei Regen“.
- **Winter:** Wenig Andrang, viele Tiere sind auch bei Kälte draußen aktiv.

## Anfahrt

- **U4** bis Hietzing oder Schönbrunn
- Straßenbahn- und Buslinien nach Hietzing
- Durch den **Schlosspark** zu Fuß zu den Eingängen

Parken in der Umgebung ist begrenzt – öffentliche Verkehrsmittel sind empfehlenswert.

## Kombinieren

Der Zoo liegt im Park von **Schloss Schönbrunn** – ein Spaziergang zur Gloriette oder durch die Gärten passt perfekt dazu.`,
    faq: [
      ["Hat der Tiergarten Schönbrunn das ganze Jahr geöffnet?", "Ja, an allen Tagen des Jahres – mit je nach Saison unterschiedlichen Schließzeiten."],
      ["Wann ist am wenigsten los?", "Meist vormittags an Wochentagen außerhalb der Schulferien."],
    ],
    sources: [WIEN],
  },
  {
    path: "zoos/tiergarten-schoenbrunn/pandas",
    description: "Pandas im Tiergarten Schönbrunn: Lan Yun und He Feng seit 2025 in Wien – Geschichte der Panda-Haltung, Zuchterfolge und Tipps für den Besuch.",
    focusKeyword: "Pandas im Tiergarten Schönbrunn",
    markdown: `Der **Tiergarten Schönbrunn** hält seit 2003 **Große Pandas** und ist für seine Zuchterfolge international bekannt.

## Die aktuellen Pandas

Im **April 2025** kamen zwei neue Pandas aus China nach Wien: das Weibchen **Lan Yun** und das Männchen **He Feng**. Sie leben in der Panda-Anlage des Tiergartens.

## Eine besondere Geschichte

- Von 2003 an lebten **Yang Yang** und **Long Hui** in Wien, später **Yuan Yuan**.
- In Schönbrunn kamen mehrere Pandababys zur Welt – darunter **2007 Fu Long**, der erste in Europa auf natürlichem Weg gezeugte und geborene Panda in einem Zoo, und später **Zwillinge**.
- 2023 starb Yang Yang, 2024 kehrte Yuan Yuan nach China zurück.

## Tipps für den Panda-Besuch

1. **Früh kommen:** Morgens und zu Fütterungszeiten sind Pandas oft aktiv.
2. **Geduld:** Pandas schlafen viel – ein zweiter Blick am Nachmittag lohnt sich.
3. **Kühles Wetter:** Bei Hitze ziehen sich Pandas gern ins Innere zurück.
4. **Ruhig verhalten**, keine Blitzfotos.

Da sich Bestände und Anlagen ändern können, informiere dich vorab auf der Website. Mehr über Pandas: Panda-Steckbrief und „Wo kann man Pandas sehen?“.`,
    faq: [
      ["Gibt es in Wien Pandas?", "Ja. Im Tiergarten Schönbrunn leben seit 2025 die Pandas Lan Yun und He Feng."],
      ["Wurden in Schönbrunn Pandas geboren?", "Ja, mehrmals. 2007 kam Fu Long zur Welt, später folgten weitere Jungtiere, darunter Zwillinge."],
    ],
    sources: [WIEN, { title: "Freizeitpark-Welt – Die Großen Pandas sind zurück im Tiergarten Schönbrunn", url: "https://www.freizeitpark-welt.de/zoo/tiergarten_schoenbrunn/news/die-grossen-pandas-sind-zurueck-im-tiergarten-schoenbrunn-n5885" }],
  },
  {
    path: "zoos/tiergarten-schoenbrunn/tipps",
    description: "Tiergarten Schönbrunn Tipps: Highlights wie Pandas, Polarium und Regenwaldhaus, die beste Route, Essen, Kinder und Kombination mit dem Schloss.",
    markdown: `Der **Tiergarten Schönbrunn** verbindet historische Architektur mit modernen Anlagen. Diese Tipps helfen bei der Planung.

## Highlights

- **Pandas** in der Panda-Anlage
- **Polarium** mit Eisbären, Pinguinen und Robben
- **Regenwaldhaus** mit tropischem Klima
- **Aquarien- und Terrarienhaus**
- **Giraffenpark** und **Elefantenpark**
- **ORANG.erie** mit Orang-Utans
- Der historische **Kaiserpavillon** im Zentrum

## Route und Planung

- **Online-Ticket** und Website-Check vorab.
- **Kernzeit morgens** für Pandas und aktive Tiere.
- **Höhenunterschiede:** Teile des Geländes liegen am Hang – bequeme Schuhe!
- Mit Kindern **Spielplatz-** und **Streichelzoo-Pausen** einplanen.

## Essen

Mehrere gastronomische Angebote auf dem Gelände, darunter das Café im Kaiserpavillon.

## Kombinieren mit Schönbrunn

- **Schlosspark** und **Gloriette** mit Blick über Wien
- **Palmenhaus** gleich neben dem Tiergarten
- **Schloss Schönbrunn** (separater Eintritt)

## Rücksicht

Tiere nicht füttern, nicht an Scheiben klopfen, keine Blitzfotos.`,
    faq: [
      ["Wie lange sollte man für den Tiergarten Schönbrunn einplanen?", "Für die Highlights einen halben Tag, für einen gründlichen Besuch einen ganzen Tag."],
      ["Ist der Tiergarten mit Kinderwagen gut machbar?", "Großteils ja, an manchen Stellen gibt es Steigungen."],
    ],
    sources: [WIEN],
  },

  /* ================= Tierpark Hellabrunn ================= */
  {
    path: "zoos/tierpark-hellabrunn/tickets",
    description: "Tierpark Hellabrunn Tickets: online kaufen, Jahreskarte, Ermäßigungen und Anfahrt mit der U3 – alles für deinen Besuch im Münchner Geo-Zoo.",
    markdown: `Der **Tierpark Hellabrunn** in München liegt an der Isar und gilt als erster **Geo-Zoo** der Welt: Die Tiere leben nach Kontinenten geordnet.

## Wo kaufen?

- **Online-Ticketshop** auf der offiziellen Website
- **Kassen** an den Eingängen

Online-Tickets sparen an vollen Tagen Wartezeit.

## Ticketarten

- Tageskarten für Erwachsene, Kinder und Ermäßigungsberechtigte
- Familienangebote
- **Jahreskarte** – beliebt bei Münchnern
- Gruppen- und Schultarife

## Eingänge

Hellabrunn hat zwei Haupteingänge: den **Flamingo-Eingang** und den **Isar-Eingang**.

## Anfahrt

- **U3** bis Thalkirchen (Tierpark)
- Buslinien in Richtung Tierpark
- Mit dem Rad entlang der Isar
- Parkplätze am Tierpark (kostenpflichtig, an vollen Tagen schnell belegt)

Preise und Spartipps unter „Tierpark Hellabrunn Preise“, Öffnungszeiten unter „Tierpark Hellabrunn Öffnungszeiten“.`,
    faq: [
      ["Welche U-Bahn fährt zum Tierpark Hellabrunn?", "Die U3 bis zur Station Thalkirchen (Tierpark)."],
      ["Was ist ein Geo-Zoo?", "Ein Zoo, in dem die Tiere nach ihren Herkunftskontinenten angeordnet sind. Hellabrunn gilt als erster Geo-Zoo der Welt."],
    ],
    sources: [MUC],
  },
  {
    path: "zoos/tierpark-hellabrunn/preise",
    description: "Tierpark Hellabrunn Preise: Ticketarten, Ermäßigungen, Familienangebote und Jahreskarte – plus Tipps, wie du beim Besuch in München sparst.",
    markdown: `Was kostet ein Tag im **Tierpark Hellabrunn**? Hier sind die Ticketarten und Spartipps im Überblick.

## Ticketarten

- **Erwachsene**
- **Kinder** – Kleinkinder oft frei
- **Ermäßigt** – z. B. für Studierende, Schüler, Senioren oder Menschen mit Behinderung
- **Familienangebote**
- **Jahreskarte**

## Spartipps

1. **Jahreskarte:** Lohnt sich für Münchner und Umgebung schnell.
2. **Online-Tickets** prüfen.
3. **Nachweise** für Ermäßigungen mitnehmen.
4. **Mit öffentlichen Verkehrsmitteln** anreisen spart Parkgebühren.
5. **Picknick:** Erkundige dich nach den Regeln für eigene Verpflegung.

## Gut zu wissen

${priceNote("Tierpark Hellabrunn")}

## Was ist im Eintritt enthalten?

Der Eintritt gilt für den gesamten Tierpark inklusive Tierhäuser wie **Polarwelt** und **Dschungelzelt**. Sonderführungen und Erlebnisangebote kosten meist extra.`,
    faq: [
      ["Gibt es eine Jahreskarte für Hellabrunn?", "Ja. Für Vielbesucher ist sie oft deutlich günstiger als einzelne Tagestickets."],
      ["Ist der Eintritt für Kleinkinder frei?", "In der Regel ja. Die genaue Altersgrenze steht auf der Website."],
    ],
    sources: [MUC],
  },
  {
    path: "zoos/tierpark-hellabrunn/oeffnungszeiten",
    description: "Tierpark Hellabrunn Öffnungszeiten: Sommer- und Winterzeiten, letzter Einlass, beste Besuchszeit und Tipps für einen entspannten Tag an der Isar.",
    markdown: `Der **Tierpark Hellabrunn** ist **ganzjährig** geöffnet. Wie bei den meisten Zoos unterscheiden sich die Zeiten im Sommer und Winter.

## Was du wissen solltest

- **Sommerzeit:** länger geöffnet
- **Winterzeit:** frühere Schließung
- **Letzter Einlass** vor Schließung beachten
- **Tierhäuser** können eigene Zeiten haben
- An **Feiertagen** und bei Veranstaltungen sind Abweichungen möglich

Die aktuellen Zeiten stehen auf der offiziellen Website.

## Beste Besuchszeit

- **Morgens** unter der Woche
- **Herbst und Winter:** angenehm ruhig, viele Tiere sind bei kühlen Temperaturen aktiv
- **Heiße Sommertage:** früh kommen, Schattenwege nutzen

## Highlights für die Planung

- **Polarwelt** mit Eisbären und Pinguinen
- **Elefantenhaus**
- **Mühlendorf** mit Streichelgehege
- **Dschungelzelt**
- Die **Isarauen** direkt am Tierpark

## Kombinieren

Ein Spaziergang oder eine Radtour an der **Isar** passt perfekt zum Tierparkbesuch.`,
    faq: [
      ["Hat Hellabrunn im Winter geöffnet?", "Ja, der Tierpark ist ganzjährig geöffnet – im Winter mit kürzeren Zeiten."],
      ["Wann ist im Tierpark am wenigsten los?", "Vormittags unter der Woche außerhalb der bayerischen Schulferien."],
    ],
    sources: [MUC],
  },
  {
    path: "zoos/tierpark-hellabrunn/tipps",
    description: "Tierpark Hellabrunn Tipps: Highlights im Münchner Geo-Zoo, Route nach Kontinenten, Kinder, Essen und die schönsten Ecken an der Isar.",
    markdown: `Der **Tierpark Hellabrunn** liegt idyllisch in den Isarauen und ist nach Kontinenten gegliedert. So planst du deinen Besuch.

## Highlights

- **Polarwelt** mit Eisbären, Pinguinen und Robben
- **Elefantenhaus**, einst ein Wahrzeichen des Tierparks
- **Dschungelzelt** mit Tieren aus tropischen Regionen
- **Mühlendorf** mit Haustierrassen und Streichelgehege
- **Afrika-Bereich** mit Giraffen und Nashörnern
- Großvoliere und vielfältige Vogelwelt

## Route

Weil die Tiere nach **Kontinenten** angeordnet sind, kannst du eine „Weltreise“ machen. Lege vorher fest, welche Kontinente dir am wichtigsten sind.

## Mit Kindern

- **Streichelgehege** im Mühlendorf
- Spielplätze für Pausen
- Bollerwagen oder Kinderwagen – viele Wege sind lang

## Essen

Mehrere Restaurants und Kioske auf dem Gelände. Für eigene Verpflegung die aktuelle Hausordnung beachten.

## Tipps

- **Bequeme Schuhe** – das Gelände ist weitläufig.
- **Online-Ticket** und Fütterungszeiten vorab checken.
- **Mit dem Rad** an der Isar anreisen.

Tickets, Preise und Öffnungszeiten findest du in unseren anderen Hellabrunn-Ratgebern.`,
    faq: [
      ["Wie groß ist der Tierpark Hellabrunn?", "Sehr weitläufig – plane für einen gründlichen Besuch mehrere Stunden bis einen ganzen Tag ein."],
      ["Gibt es in Hellabrunn einen Streichelzoo?", "Ja, im Mühlendorf können Kinder Haustiere aus der Nähe erleben."],
    ],
    sources: [MUC],
  },

  /* ================= Zoo Leipzig ================= */
  {
    path: "zoos/zoo-leipzig/tickets",
    description: "Zoo Leipzig Tickets: online kaufen, Jahreskarte, Ermäßigungen und Anfahrt – mit Tipps zur Tropenhalle Gondwanaland und zur Bootsfahrt.",
    markdown: `Der **Zoo Leipzig** wurde **1878** gegründet und ist heute einer der modernsten Zoos Europas – bekannt für die Tropenhalle **Gondwanaland**.

## Wo kaufen?

- **Online-Ticketshop** der offiziellen Website
- **Kassen** am Haupteingang

Online-Tickets sparen an Wochenenden und in den Ferien Wartezeit.

## Ticketarten

- Tageskarten für Erwachsene und Kinder
- Ermäßigungen
- Familienangebote
- **Jahreskarte**

## Gondwanaland

Die Tropenhalle ist im Zooeintritt enthalten. Die **Bootsfahrt** auf dem Urwaldfluss kann extra kosten und ist an vollen Tagen schnell ausgebucht – informiere dich vorab.

## Anfahrt

Der Zoo liegt **nahe dem Leipziger Hauptbahnhof** und ist zu Fuß, mit Straßenbahn oder Bus gut erreichbar. Parkhäuser gibt es in der Umgebung.

Preise unter „Zoo Leipzig Preise“, Öffnungszeiten unter „Zoo Leipzig Öffnungszeiten“.`,
    faq: [
      ["Ist Gondwanaland im Eintritt enthalten?", "Ja, die Tropenhalle gehört zum Zoo. Für die Bootsfahrt kann ein Zusatzticket nötig sein."],
      ["Wie weit ist der Zoo Leipzig vom Hauptbahnhof?", "Nicht weit – er ist vom Hauptbahnhof aus zu Fuß oder mit der Straßenbahn gut erreichbar."],
    ],
    sources: [LEJ],
  },
  {
    path: "zoos/zoo-leipzig/preise",
    description: "Zoo Leipzig Preise: Ticketarten, Ermäßigungen, Jahreskarte und Zusatzkosten wie die Gondwanaland-Bootsfahrt – mit Spartipps für Familien.",
    markdown: `Ein Tag im **Zoo Leipzig** lohnt sich – mit diesen Infos findest du das passende Ticket.

## Ticketarten

- **Erwachsene**
- **Kinder** – Kleinkinder häufig frei
- **Ermäßigungen**
- **Familienangebote**
- **Jahreskarte**

## Zusatzkosten

- **Bootsfahrt** in Gondwanaland
- **Führungen** und Erlebnisangebote
- **Parken**

## Spartipps

1. **Jahreskarte** bei mehreren Besuchen pro Jahr.
2. **Online kaufen** und Angebote vergleichen.
3. **Ermäßigungsnachweise** mitnehmen.
4. **Mit Bahn und Tram** anreisen – der Zoo liegt zentral.
5. **Nebensaison** nutzen, wenn es Aktionen gibt.

## Gut zu wissen

${priceNote("Zoo Leipzig")}`,
    faq: [
      ["Kostet die Bootsfahrt in Gondwanaland extra?", "Häufig ja. Die aktuellen Bedingungen stehen auf der Website des Zoos."],
      ["Gibt es eine Familienkarte?", "Der Zoo bietet Angebote für Familien an. Details und Preise findest du auf der offiziellen Website."],
    ],
    sources: [LEJ],
  },
  {
    path: "zoos/zoo-leipzig/oeffnungszeiten",
    description: "Zoo Leipzig Öffnungszeiten: ganzjährig geöffnet, Unterschiede nach Saison, Zeiten für Gondwanaland und die beste Besuchszeit.",
    markdown: `Der **Zoo Leipzig** hat **ganzjährig** geöffnet. Je nach Jahreszeit ändern sich die Öffnungszeiten.

## Was du wissen solltest

- **Sommer:** längere Öffnungszeiten
- **Winter:** kürzere Öffnungszeiten
- **Gondwanaland** und andere Tierhäuser können eigene Zeiten haben
- **Letzter Einlass** vor Schließung
- **Sonderveranstaltungen** wie Abendöffnungen

Die aktuellen Zeiten stehen immer auf der offiziellen Website.

## Beste Besuchszeit

- **Gondwanaland am Morgen:** weniger Andrang, angenehmeres Klima
- **Unter der Woche** außerhalb der sächsischen Schulferien
- **Im Winter** ist die Tropenhalle ein warmes Highlight

## Planung

Der Zoo ist in **Themenwelten** gegliedert: Gondwanaland, Pongoland, Asien, Afrika (Kiwara-Savanne), Südamerika und Himalaya. Plane genug Zeit ein – an einem Tag schafft man nicht alles in Ruhe.`,
    faq: [
      ["Hat der Zoo Leipzig im Winter geöffnet?", "Ja, ganzjährig – im Winter mit kürzeren Zeiten. Die Tropenhalle Gondwanaland ist dann besonders beliebt."],
      ["Wann ist Gondwanaland am wenigsten voll?", "Meist morgens kurz nach Öffnung an Wochentagen."],
    ],
    sources: [LEJ],
  },
  {
    path: "zoos/zoo-leipzig/tipps",
    description: "Zoo Leipzig Tipps: Gondwanaland mit Bootsfahrt, Pongoland, Kiwara-Savanne und Himalaya – die besten Highlights und Planungstipps für deinen Besuch.",
    markdown: `Der **Zoo Leipzig** setzt auf große, naturnahe Themenwelten. So erlebst du die Highlights.

## Highlights

- **Gondwanaland:** riesige Tropenhalle mit Urwald, Hängebrücken, Baumwipfelpfad und **Bootsfahrt** auf dem Urwaldfluss.
- **Pongoland:** Menschenaffen-Anlage, eng verbunden mit der Forschung des Max-Planck-Instituts für evolutionäre Anthropologie.
- **Kiwara-Savanne:** Giraffen, Zebras und Antilopen in einer afrikanischen Landschaft.
- **Himalaya** mit Tieren aus den Gebirgsregionen Asiens.
- **Asien** mit dem Elefantentempel Ganesha Mandir.

## Planungstipps

1. **Mit Gondwanaland starten**, bevor es voll wird.
2. **Bootsfahrt** früh buchen bzw. Zeiten checken.
3. **Bequeme Schuhe** – die Wege sind lang.
4. **Zwiebellook** – in Gondwanaland ist es warm und feucht.

## Mit Kindern

Spielplätze, Streichelbereiche und viele Tiere zum Anschauen auf Augenhöhe. Pausen fest einplanen.

## Kombinieren

Die Leipziger Innenstadt ist nah – ideal für einen Städtetrip mit Zoobesuch.`,
    faq: [
      ["Was ist Gondwanaland?", "Eine große Tropenhalle im Zoo Leipzig mit Urwaldlandschaft, tropischen Tieren, Baumwipfelpfad und Bootsfahrt."],
      ["Wie viel Zeit braucht man für den Zoo Leipzig?", "Für einen gründlichen Besuch einen ganzen Tag."],
    ],
    sources: [LEJ],
  },

  /* ================= Zoo Zürich ================= */
  {
    path: "zoos/zoo-zuerich/tickets",
    description: "Zoo Zürich Tickets: online kaufen, Jahresabo, Ermäßigungen und Anfahrt mit dem Tram – alles für deinen Besuch im Masoala-Regenwald und Elefantenpark.",
    markdown: `Der **Zoo Zürich** liegt auf dem **Zürichberg** und ist bekannt für große, naturnahe Anlagen wie den Masoala-Regenwald und den Kaeng-Krachan-Elefantenpark.

## Wo kaufen?

- **Online-Ticketshop** auf der offiziellen Website
- **Kassen** am Eingang

## Ticketarten

- Tagestickets für Erwachsene, Jugendliche und Kinder
- Ermäßigungen
- **Jahresabo** für Vielbesucher

## Anfahrt

- Mit dem **Tram** bis zur Haltestelle **Zoo** – von der Zürcher Innenstadt gut erreichbar.
- Parkplätze sind begrenzt und kostenpflichtig – öffentliche Verkehrsmittel sind empfehlenswert.

## Währung

In der Schweiz wird in **Schweizer Franken (CHF)** bezahlt. Karten werden in der Regel akzeptiert.

Preise unter „Zoo Zürich Preise“, Öffnungszeiten unter „Zoo Zürich Öffnungszeiten“.`,
    faq: [
      ["Wie komme ich zum Zoo Zürich?", "Am einfachsten mit dem Tram bis zur Haltestelle Zoo."],
      ["Kann ich im Zoo Zürich mit Euro zahlen?", "Die Währung ist der Schweizer Franken. Ob Euro akzeptiert werden, steht auf der Website – Kartenzahlung ist meist möglich."],
    ],
    sources: [ZRH],
  },
  {
    path: "zoos/zoo-zuerich/preise",
    description: "Zoo Zürich Preise: Ticketarten in Schweizer Franken, Ermäßigungen, Jahresabo und Spartipps für Familien aus Deutschland und Österreich.",
    markdown: `Die Schweiz gilt als teures Reiseland – mit ein paar Tipps wird der Besuch im **Zoo Zürich** trotzdem planbar.

## Ticketarten

- **Erwachsene**
- **Jugendliche** und **Kinder** – Kleinkinder oft frei
- **Ermäßigungen** für bestimmte Gruppen
- **Jahresabo**

Bezahlt wird in **Schweizer Franken (CHF)**.

## Spartipps

1. **Online buchen** und Angebote prüfen.
2. **Verpflegung mitbringen**, sofern erlaubt – Restaurants in der Schweiz sind vergleichsweise teuer.
3. **Öffentliche Verkehrsmittel:** Für Touristen gibt es Tageskarten oder Gästekarten für den Zürcher Nahverkehr.
4. **Kombiangebote** mit Bahnfahrt prüfen – in der Schweiz gibt es teils Freizeitangebote mit ÖV-Rabatt.

## Gut zu wissen

${priceNote("Zoo Zürich")}`,
    faq: [
      ["In welcher Währung zahlt man im Zoo Zürich?", "In Schweizer Franken (CHF)."],
      ["Ist der Masoala-Regenwald im Eintritt enthalten?", "Ja, die Masoala-Halle gehört zum regulären Zoobesuch."],
    ],
    sources: [ZRH],
  },
  {
    path: "zoos/zoo-zuerich/oeffnungszeiten",
    description: "Zoo Zürich Öffnungszeiten: ganzjährig geöffnet, Sommer- und Winterzeiten, Masoala-Halle, Pinguin-Parade im Winter und beste Besuchszeit.",
    markdown: `Der **Zoo Zürich** ist **ganzjährig** geöffnet, mit unterschiedlichen Öffnungszeiten im Sommer und Winter.

## Was du wissen solltest

- **Sommer:** längere Öffnungszeiten
- **Winter:** kürzere Öffnungszeiten
- Die **Masoala-Halle** und andere Häuser können abweichende Zeiten haben
- **Letzter Einlass** beachten

Aktuelle Zeiten stehen auf der offiziellen Website.

## Besonderheit im Winter: Pinguin-Parade

Bei kühlen Temperaturen spazieren die **Königspinguine** in der kalten Jahreszeit durch den Zoo – ein Highlight für Familien. Ob und wann die Parade stattfindet, hängt von Wetter und Tieren ab; Termine stehen auf der Website.

## Beste Besuchszeit

- **Morgens** unter der Woche
- **Masoala-Halle** früh besuchen, bevor es voll wird
- **Winter:** ruhige Atmosphäre, Pinguin-Parade, warme Tropenhalle

## Wetter

Der Zoo liegt am **Zürichberg** etwas erhöht. Bei Regen bieten Masoala-Halle und Tierhäuser Unterschlupf.`,
    faq: [
      ["Wann findet die Pinguin-Parade statt?", "In der kalten Jahreszeit bei passenden Temperaturen. Die aktuellen Termine veröffentlicht der Zoo auf seiner Website."],
      ["Hat der Zoo Zürich im Winter geöffnet?", "Ja, ganzjährig – im Winter mit kürzeren Öffnungszeiten."],
    ],
    sources: [ZRH],
  },
  {
    path: "zoos/zoo-zuerich/tipps",
    description: "Zoo Zürich Tipps: Masoala-Regenwald, Kaeng-Krachan-Elefantenpark, Lewa-Savanne und Pinguin-Parade – Highlights und Planung für deinen Besuch.",
    markdown: `Der **Zoo Zürich** setzt auf große, naturnahe Lebensräume und Artenschutzprojekte. Diese Highlights solltest du nicht verpassen.

## Highlights

- **Masoala-Regenwald:** Eine große Halle, die den Regenwald Madagaskars nachbildet – mit frei lebenden Tieren wie Lemuren, Vögeln und Chamäleons. Der Zoo unterstützt Naturschutz im Masoala-Nationalpark auf Madagaskar.
- **Kaeng-Krachan-Elefantenpark:** weitläufige Anlage für Asiatische Elefanten mit großem Elefantenhaus.
- **Lewa-Savanne:** afrikanische Landschaft mit Giraffen, Nashörnern, Zebras und weiteren Arten.
- **Pinguin-Parade** im Winter.

## Planungstipps

1. **Masoala zuerst** – morgens ist es ruhiger.
2. **Geduld in Masoala:** Viele Tiere leben frei in der Halle – gut hinschauen!
3. **Bequeme Schuhe**, das Gelände liegt am Hang.
4. **Zwiebellook** für die tropische Halle.

## Mit Kindern

Spielplätze, Streichelzoo und viele Tiere zum Entdecken.

## Kombinieren

Vom Zürichberg hast du schöne Ausblicke. Die Innenstadt und der Zürichsee sind mit dem Tram schnell erreicht.`,
    faq: [
      ["Was ist die Masoala-Halle?", "Eine große Regenwaldhalle im Zoo Zürich, die den Lebensraum auf Madagaskar nachbildet – mit frei lebenden Tieren."],
      ["Wie lange braucht man für den Zoo Zürich?", "Für die Highlights einen halben Tag, für einen ausführlichen Besuch einen ganzen Tag."],
    ],
    sources: [ZRH],
  },

  /* ================= SEA LIFE ================= */
  {
    path: "zoos/sea-life/tickets",
    description: "SEA LIFE Tickets: online günstiger buchen, Zeitfenster, Jahreskarten und Kombitickets – so planst du deinen Besuch in einem SEA LIFE Aquarium.",
    markdown: `**SEA LIFE** ist eine Kette von Großaquarien, die zum Freizeitunternehmen Merlin Entertainments gehört. In Deutschland gibt es mehrere Standorte (siehe „SEA LIFE Standorte“).

## Wo kaufen?

- **Online** auf der offiziellen Website – häufig günstiger als an der Kasse
- **Vor Ort** an der Kasse

## Ticketarten

- Tagestickets für Erwachsene und Kinder (Kleinkinder oft frei)
- Familientickets
- **Jahreskarten** – teils auch mit Zugang zu anderen Merlin-Attraktionen
- **Kombitickets** mit anderen Attraktionen am Standort

## Zeitfenster

Für viele Standorte wählst du beim Online-Kauf ein **Datum und Zeitfenster**. Sei pünktlich – so verteilt sich der Andrang besser.

## Spartipps

1. **Online buchen** statt Kasse.
2. **Nebenzeiten** wählen – manche Standorte bieten dann günstigere Preise.
3. **Jahreskarte**, wenn du mehrere Attraktionen besuchen willst.
4. Aktionen und Gutscheine prüfen.

Die aktuellen Preise und Bedingungen findest du auf der offiziellen Website des jeweiligen Standorts.`,
    faq: [
      ["Sind SEA LIFE Tickets online günstiger?", "Häufig ja. Vergleiche die Preise auf der Website mit den Preisen an der Kasse."],
      ["Muss ich ein Zeitfenster buchen?", "An vielen Standorten wählst du beim Online-Kauf ein Datum und eine Uhrzeit."],
    ],
    sources: [SEALIFE],
  },
  {
    path: "zoos/sea-life/standorte",
    description: "SEA LIFE Standorte in Deutschland: Hannover, Konstanz, München, Oberhausen, Speyer und Timmendorfer Strand – Überblick und Besonderheiten.",
    markdown: `In Deutschland gibt es mehrere **SEA LIFE**-Aquarien. Jedes hat eigene Schwerpunkte, oft passend zur Region.

## Standorte in Deutschland

- **SEA LIFE Hannover**
- **SEA LIFE Konstanz** am Bodensee
- **SEA LIFE München** im Olympiapark
- **SEA LIFE Oberhausen**
- **SEA LIFE Speyer**
- **SEA LIFE Timmendorfer Strand** an der Ostsee

Die früheren Standorte in **Berlin** und **Königswinter** sind inzwischen geschlossen.

## Was dich typischerweise erwartet

- Rundgang von heimischen Gewässern bis zu tropischen Meeren
- **Haie**, Rochen, Quallen, Seepferdchen und Korallenriffe
- **Unterwassertunnel** an einigen Standorten
- Mitmachstationen und Fütterungen
- Je nach Standort Pinguine, Seehunde oder andere Arten

Die Tiere und Bereiche unterscheiden sich je nach Standort.

## In Österreich und der Schweiz

In Österreich und der Schweiz gibt es keine SEA-LIFE-Standorte. Eine Alternative in Wien ist zum Beispiel das **Haus des Meeres**.

## Hinweis

Standorte können sich ändern. Prüfe vor dem Besuch auf der offiziellen Website, ob dein Wunschstandort geöffnet ist.`,
    faq: [
      ["Welche SEA LIFE Standorte gibt es in Deutschland?", "Unter anderem Hannover, Konstanz, München, Oberhausen, Speyer und Timmendorfer Strand. Berlin und Königswinter sind geschlossen."],
      ["Gibt es SEA LIFE in Österreich?", "Nein. In Wien bietet zum Beispiel das Haus des Meeres eine Alternative."],
    ],
    sources: [SEALIFE, { title: "familienreisefieber.de – SEA LIFE Standorte", url: "https://www.familienreisefieber.de/sea-life-standorte-preise-tipps/" }],
  },
  {
    path: "zoos/sea-life/mit-kindern",
    description: "SEA LIFE mit Kindern: ideales Alter, Kinderwagen, Mitmachstationen, Fütterungen und Tipps für einen entspannten Aquariumsbesuch mit der Familie.",
    markdown: `Ein **SEA-LIFE**-Aquarium ist für Kinder ein Erlebnis: Haie über dem Kopf, leuchtende Quallen und Fische zum Anfassen nah. Mit diesen Tipps wird der Besuch entspannt.

## Für welches Alter?

Schon Kleinkinder staunen über bunte Fische. Ab dem Kindergartenalter machen Mitmachstationen und Fütterungen besonders viel Spaß. Der Rundgang dauert meist **ein bis zwei Stunden** – gut für kleine Beine.

## Tipps

1. **Zeitfenster am Vormittag** buchen – weniger Andrang.
2. **Fütterungs- und Vortragszeiten** vorab checken.
3. **Kinderwagen:** Viele Standorte sind barrierearm, an manchen Stellen ist es eng. Eine Trage kann praktischer sein – informiere dich vorab.
4. **Rockpool / Mitmachbecken:** Wo vorhanden, dürfen Kinder unter Anleitung Meerestiere aus der Nähe betrachten.
5. **Ohne Blitz** fotografieren.

## Lernen nebenbei

- Fragt: Was frisst ein Hai? Warum leuchten Quallen?
- Viele Standorte haben Rätselrallyes für Kinder.

## Kombinieren

Viele Standorte liegen in Freizeitgebieten – etwa im Olympiapark München oder am Bodensee in Konstanz. Plant den Tag mit weiteren Aktivitäten.`,
    faq: [
      ["Wie lange dauert ein SEA LIFE Besuch?", "Meist ein bis zwei Stunden, je nach Standort und Tempo."],
      ["Ist SEA LIFE für Kleinkinder geeignet?", "Ja, die bunten Becken begeistern auch die Kleinsten. Für Kinderwagen die Infos des Standorts beachten."],
    ],
    sources: [SEALIFE],
  },
  {
    path: "zoos/sea-life/tipps",
    description: "SEA LIFE Tipps: beste Besuchszeit, Zeitfenster, Fütterungen, Fotografieren und was du über Tierschutz und Artenschutzprojekte wissen solltest.",
    markdown: `Mit diesen Tipps wird dein Besuch in einem **SEA-LIFE**-Aquarium entspannter und spannender.

## Planung

- **Online buchen** und ein frühes Zeitfenster wählen.
- **Wochentage außerhalb der Ferien** sind ruhiger.
- **Fütterungen und Vorträge** vorab auf der Website nachsehen.

## Vor Ort

- **Langsam gehen:** Viele Tiere sind gut getarnt – Seepferdchen und Plattfische entdeckt man erst auf den zweiten Blick.
- **Unterwassertunnel:** Wo vorhanden, ein Höhepunkt – Haie und Rochen schwimmen über dich hinweg.
- **Infotafeln** lesen – oft mit spannenden Fakten.

## Fotografieren

- **Ohne Blitz** – das schont die Tiere und verhindert Spiegelungen.
- Kamera nah an die Scheibe halten, um Reflexionen zu vermeiden.

## Tierschutz

SEA LIFE betont Engagement für Artenschutz, etwa für Meeresschildkröten oder Seepferdchen. Wie bei allen Tierhaltungen gibt es auch kritische Stimmen zur Haltung von Meerestieren in Aquarien. Informiere dich, wenn dir das Thema wichtig ist.

## Regenwetter-Tipp

Aquarien sind ideale Ausflugsziele bei schlechtem Wetter – mehr Ideen unter „Zoo bei Regen“.`,
    faq: [
      ["Darf man bei SEA LIFE fotografieren?", "In der Regel ja, aber ohne Blitz."],
      ["Wann ist bei SEA LIFE wenig los?", "Meist vormittags an Wochentagen außerhalb der Schulferien."],
    ],
    sources: [SEALIFE],
  },

  /* ================= Zoo-Ratgeber ================= */
  {
    path: "zoos/ratgeber/zoos-mit-pandas-in-europa",
    description: "Zoos mit Pandas in Europa: Berlin, Wien, Pairi Daiza, Rhenen, Kopenhagen und Madrid – Überblick, aktuelle Hinweise und Tipps für den Panda-Besuch.",
    focusKeyword: "Zoos mit Pandas in Europa",
    markdown: `Große Pandas sind in Europa nur in wenigen Zoos zu sehen. Alle sind Leihgaben Chinas im Rahmen von Forschungs- und Schutzprogrammen – deshalb ändern sich die Standorte gelegentlich.

## Zoos mit Großen Pandas (Stand Herbst 2026)

| Zoo | Land | Hinweis |
|---|---|---|
| Zoo Berlin | Deutschland | Meng Meng, Jiao Qing und Zwillinge (2024 geboren) |
| Tiergarten Schönbrunn, Wien | Österreich | Lan Yun und He Feng seit 2025 |
| Pairi Daiza | Belgien | großer Themenpark mit chinesischem Bereich |
| Ouwehands Dierenpark, Rhenen | Niederlande | Panda-Anlage „Pandasia“ |
| Zoo Kopenhagen | Dänemark | Panda-Anlage in Yin-Yang-Form |
| Zoo Aquarium Madrid | Spanien | neues Panda-Paar |

Weitere Pandas leben z. B. im Moskauer Zoo. Einige Zoos – etwa in Edinburgh oder Ähtäri (Finnland) – haben ihre Pandas inzwischen nach China zurückgegeben, ebenso der ZooParc de Beauval in Frankreich.

**Bitte vor jedem Besuch auf der Website des Zoos prüfen**, ob die Pandas zu sehen sind.

## Tipps für den Panda-Besuch

- **Morgens** und zu **Fütterungszeiten** sind Pandas aktiver.
- **Kühle Tage** bevorzugen – bei Hitze bleiben sie gern drinnen.
- **Geduld** mitbringen.

## Mehr

- „Pandas im Zoo Berlin“
- „Pandas im Tiergarten Schönbrunn“
- Panda-Steckbrief und Fakten für Kinder`,
    faq: [
      ["Wo gibt es in Europa Pandas?", "Unter anderem in Berlin, Wien, Pairi Daiza (Belgien), Rhenen (Niederlande), Kopenhagen und Madrid. Den aktuellen Stand vor dem Besuch prüfen."],
      ["Warum ändern sich die Panda-Zoos?", "Pandas sind Leihgaben Chinas mit befristeten Verträgen. Jungtiere ziehen meist nach einigen Jahren nach China."],
    ],
    sources: [{ title: "Wikipedia – Giant pandas around the world", url: "https://en.wikipedia.org/wiki/Giant_pandas_around_the_world" }, BERLIN, WIEN],
  },
  {
    path: "zoos/ratgeber/zoo-jahreskarte",
    description: "Zoo-Jahreskarte: Wann sie sich lohnt, wie du richtig rechnest, Familien- und Partnerkarten, Zusatzvorteile und worauf du beim Kauf achten solltest.",
    markdown: `Wer gern in den Zoo geht, sollte über eine **Jahreskarte** nachdenken. Sie lohnt sich oft schneller als gedacht.

## Wann lohnt sie sich?

Ganz einfach: **Preis der Jahreskarte ÷ Preis eines Tagestickets** = Anzahl Besuche, ab der sie sich lohnt. Bei vielen Zoos liegt dieser Wert nur bei wenigen Besuchen.

Rechne mit den aktuellen Preisen deines Zoos nach – unser Prozentrechner hilft beim Vergleichen.

## Arten von Jahreskarten

- **Einzelperson**
- **Partnerkarte**
- **Familienkarte** – oft für Eltern mit eigenen Kindern
- **Kinder- und Ermäßigungskarten**

## Zusatzvorteile

Je nach Zoo:
- Rabatte im Zooshop oder in der Gastronomie
- Ermäßigter Eintritt in Partnerzoos
- Exklusive Veranstaltungen
- Kein Anstehen an der Kasse

## Worauf achten?

1. **Gültigkeit:** 12 Monate ab Kauf oder Kalenderjahr?
2. **Personalisiert?** Meist mit Foto und nicht übertragbar.
3. **Wer ist bei Familienkarten eingeschlossen?** Großeltern? Enkel?
4. **Zusatzleistungen** wie Bootsfahrten sind oft nicht inklusive.

## Kleine Besuche, viel Erlebnis

Mit Jahreskarte musst du nicht alles an einem Tag sehen. Kurze Besuche von ein, zwei Stunden machen besonders mit Kindern mehr Spaß.`,
    faq: [
      ["Ab wie vielen Besuchen lohnt sich eine Jahreskarte?", "Teile den Preis der Jahreskarte durch den Preis eines Tagestickets – bei vielen Zoos sind es nur wenige Besuche."],
      ["Kann ich meine Jahreskarte verleihen?", "Meist nicht, da sie personalisiert ist. Die Bedingungen stehen beim jeweiligen Zoo."],
    ],
  },
  {
    path: "zoos/ratgeber/zoobesuch-mit-kindern",
    description: "Zoobesuch mit Kindern: Checkliste, Spielideen, Pausen, Essen und Tipps gegen Quengeln – so wird der Tag im Zoo für die ganze Familie schön.",
    markdown: `Ein Tag im Zoo ist für Kinder aufregend. Mit guter Vorbereitung bleibt er auch für Eltern entspannt.

## Checkliste

- Online-Tickets
- Wasser und Snacks
- Sonnen- oder Regenschutz, Wechselkleidung
- Kinderwagen, Trage oder Bollerwagen
- Feuchttücher und Pflaster
- Handynummer der Eltern auf einem Armband oder Zettel in der Jackentasche

## Spielideen im Zoo

- **Tier-Bingo:** Karte mit Tieren vorbereiten und abhaken.
- **Geräusche-Detektiv:** Welches Tier macht welches Geräusch?
- **Fotojagd:** Das Kind fotografiert seine drei Lieblingstiere.
- **Farbensuche:** Finde ein rotes, ein gelbes, ein gestreiftes Tier.

## Pausen

- Spielplätze bewusst einplanen.
- Nicht alles sehen wollen – lieber wenige Tiere in Ruhe.
- Eine ruhige Ecke für Snacks.

## Gegen Quengeln

- **Ziele vorher besprechen:** „Heute besuchen wir die Elefanten und die Pinguine.“
- **Fütterungen** als Highlights.
- **Rechtzeitig gehen**, bevor alle müde sind.

## Wenn sich Kinder verlaufen

Vorher einen **Treffpunkt** ausmachen und Kindern erklären: Bei Mitarbeitenden des Zoos oder an der Kasse Hilfe holen.

Mehr Ideen unter „Zoos mit Kindern“.`,
    faq: [
      ["Wie lange hält ein Kleinkind im Zoo durch?", "Oft zwei bis vier Stunden. Pausen und ein Mittagsschlaf im Kinderwagen verlängern den Tag."],
      ["Was tun, wenn sich ein Kind verläuft?", "Vorher einen Treffpunkt ausmachen und dem Kind zeigen, an wen es sich wenden kann – zum Beispiel an Zoomitarbeitende."],
    ],
  },
  {
    path: "zoos/ratgeber/zoo-bei-regen",
    description: "Zoo bei Regen: Warum sich ein Besuch bei schlechtem Wetter lohnt, die besten Tierhäuser und Tropenhallen und was du einpacken solltest.",
    markdown: `Regen? Kein Grund, den Zoobesuch abzusagen! Bei schlechtem Wetter sind die Wege leer – und viele Tiere sind trotzdem aktiv.

## Vorteile bei Regen

- **Wenig Andrang** – mehr Platz an den Gehegen.
- **Viele Tiere mögen kühles, feuchtes Wetter.**
- **Tierhäuser und Hallen** werden zum Highlight.

## Zoos mit großen Hallen

- **Zoo Leipzig:** Tropenhalle **Gondwanaland**
- **Zoo Zürich:** **Masoala-Regenwald**
- **Tiergarten Schönbrunn:** **Regenwaldhaus**, **Polarium**, **Aquarien- und Terrarienhaus**
- **Zoo Berlin:** zahlreiche Tierhäuser und das benachbarte **Aquarium Berlin**
- **Tierpark Hellabrunn:** **Dschungelzelt**, **Polarwelt** und Elefantenhaus
- **SEA LIFE**-Aquarien – komplett überdacht

## Packliste

- Regenjacke und Regenhose, besonders für Kinder
- Wasserdichte Schuhe
- Wechselsocken
- Regenschutz für den Kinderwagen

## Tipps

1. **Route nach Häusern planen:** von Halle zu Halle.
2. **Pausen in Restaurants** einlegen.
3. **Gewitter:** Bei Unwettern Anweisungen des Zoos folgen.

So wird der Regentag zum Geheimtipp.`,
    faq: [
      ["Sind Zoos bei Regen geöffnet?", "Ja, Zoos haben auch bei Regen geöffnet. Bei Unwettern können einzelne Bereiche aus Sicherheitsgründen geschlossen werden."],
      ["Welcher Zoo eignet sich besonders bei Regen?", "Zoos mit großen Hallen wie der Zoo Leipzig (Gondwanaland) oder der Zoo Zürich (Masoala) sind ideal."],
    ],
  },

  /* ================= Europa-Park ================= */
  {
    path: "freizeitparks/europa-park/hotels",
    description: "Europa-Park Hotels: die sechs Erlebnishotels, Camp Resort und Camping im Überblick – Themen, Vorteile für Hotelgäste und Tipps zur Buchung.",
    markdown: `Der **Europa-Park** in Rust (Baden-Württemberg) ist Deutschlands größter Freizeitpark. Wer mehrere Tage bleibt, kann in einem der parkeigenen **Erlebnishotels** übernachten.

## Die Erlebnishotels

- **Krønasår** – skandinavisches Museumshotel, nahe der Wasserwelt Rulantica
- **Colosseo** – italienisches Ambiente rund um ein römisches Kolosseum
- **Bell Rock** – im Stil Neuenglands mit Leuchtturm
- **Santa Isabel** – portugiesisches Kloster-Ambiente
- **Castillo Alcazar** – spanische Ritterburg
- **El Andaluz** – andalusische Finca

Dazu kommen das **Camp Resort** (z. B. Tipis, Blockhütten, Planwagen) und ein **Campingplatz**.

## Vorteile für Hotelgäste

Je nach Angebot zum Beispiel:
- kurze Wege zum Park
- Vorteile beim Parkeintritt bzw. bei Tickets
- thematisierte Restaurants und Bars

Die aktuellen Vorteile stehen auf der offiziellen Website.

## Tipps zur Buchung

1. **Früh buchen** – besonders in Ferienzeiten und zur Halloween- und Wintersaison.
2. **Pakete** mit Hotel und Eintritt vergleichen.
3. **Alternativen** in der Region (Rust, Ringsheim, Herbolzheim) prüfen – oft günstiger.

Achterbahnen und Tipps findest du in unseren weiteren Europa-Park-Ratgebern.`,
    faq: [
      ["Wie viele Hotels hat der Europa-Park?", "Sechs Erlebnishotels sowie das Camp Resort und einen Campingplatz."],
      ["Gibt es Vorteile für Hotelgäste?", "Ja, je nach Angebot. Die aktuellen Vorteile stehen auf der offiziellen Website."],
    ],
    sources: [EP],
  },
  {
    path: "freizeitparks/europa-park/achterbahnen",
    description: "Achterbahnen im Europa-Park: Silver Star, Blue Fire, Wodan, Voltron Nevera und mehr – Überblick nach Intensität, von Familie bis Adrenalin.",
    markdown: `Der **Europa-Park** bietet Achterbahnen für alle Mutstufen. Hier ein Überblick über bekannte Bahnen – sortiert nach Intensität.

## Für Adrenalin-Fans

- **Silver Star** – eine der höchsten Achterbahnen Europas, mit großem First Drop.
- **Blue Fire Megacoaster** – startet per Katapult und hat Inversionen.
- **Wodan – Timburcoaster** – rasante Holzachterbahn.
- **Voltron Nevera powered by Rimac** – Launch-Coaster, 2024 eröffnet, mit mehreren Abschüssen und einem drehbaren Teil.

## Mittlere Intensität

- **Euro-Mir** – Bahn mit sich drehenden Wagen rund um verspiegelte Türme.
- **Eurosat – CanCan Coaster** – Indoor-Achterbahn.
- **Matterhorn-Blitz** – wilde Maus in der Schweizer Themenwelt.
- **Schweizer Bobbahn** – Bob-Achterbahn.

## Für Familien

- **Pegasus** – Familienachterbahn im griechischen Bereich.
- **Alpenexpress Enzian** – gemütliche Bahn.
- **Arthur** – Dark-Ride-Achterbahn durch eine Märchenwelt.

## Wasserachterbahnen

**Poseidon** und **Atlantica SuperSplash** – hier wird man nass!

## Tipps

- **Mindestgrößen** vorher auf der Website prüfen.
- **Beliebte Bahnen** gleich morgens oder am Abend fahren.
- Die App des Parks zeigt **Wartezeiten** an.

Das Angebot ändert sich gelegentlich – den aktuellen Stand findest du auf der offiziellen Website.`,
    faq: [
      ["Welche ist die höchste Achterbahn im Europa-Park?", "Der Silver Star gehört zu den höchsten Achterbahnen Europas."],
      ["Welche Achterbahnen eignen sich für Kinder?", "Zum Beispiel Pegasus, Alpenexpress Enzian und Arthur – Mindestgrößen auf der Website beachten."],
    ],
    sources: [EP],
  },
  {
    path: "freizeitparks/europa-park/mit-kindern",
    description: "Europa-Park mit Kindern: familienfreundliche Attraktionen, Mindestgrößen, Pausen, Shows und Tipps für einen entspannten Tag mit Kleinkindern und Schulkindern.",
    markdown: `Der **Europa-Park** ist nach europäischen Ländern thematisiert und bietet viel für Familien – von Kinderkarussells bis zu Shows.

## Für die Kleinsten

- Kinderbereiche wie **Grimms Märchenwald** und weitere Themenbereiche mit Kinderattraktionen
- Karussells, Bootsfahrten und Kindereisenbahnen
- **Shows** mit Musik, Akrobatik und Figuren
- Spielplätze für Pausen

## Für Schulkinder

- Familienachterbahnen wie **Pegasus** oder **Arthur**
- Wasserbahnen
- Dark Rides

## Größe beachten

Viele Attraktionen haben **Mindestgrößen** und teilweise Begleitpflichten. Miss dein Kind vorher und schaue auf der Website nach. So gibt es keine Tränen in der Warteschlange.

## Tipps

1. **Früh da sein** – die ersten Stunden sind am ruhigsten.
2. **Plan machen:** Welche Bereiche sind euch wichtig?
3. **Mittagspause** an ruhigem Ort.
4. **Wechselkleidung** für Wasserbahnen.
5. **Treffpunkt** vereinbaren und Handynummer auf ein Armband.
6. **Mehrtägiger Besuch:** Der Park ist zu groß für einen Tag – Hotels unter „Europa-Park Hotels“.

## Ruhebereiche

Für Babys gibt es Wickel- und Stillmöglichkeiten – Infos auf der Website.`,
    faq: [
      ["Ab welchem Alter lohnt sich der Europa-Park?", "Auch Kleinkinder finden viele passende Attraktionen und Shows. Für die großen Achterbahnen sind Mindestgrößen nötig."],
      ["Kann man den Europa-Park an einem Tag schaffen?", "Die Highlights ja, den ganzen Park in Ruhe eher in zwei bis drei Tagen."],
    ],
    sources: [EP],
  },
  {
    path: "freizeitparks/europa-park/tipps",
    description: "Europa-Park Tipps: beste Reisezeit, Tickets mit Datum, App für Wartezeiten, Saisonen wie Halloween und Winter sowie die Wasserwelt Rulantica.",
    markdown: `Mit diesen Tipps holst du mehr aus deinem Tag im **Europa-Park** heraus.

## Vor dem Besuch

1. **Tickets online** und datiert kaufen – an vollen Tagen kann der Park ausgebucht sein.
2. **Öffnungszeiten und Saison** prüfen: Neben der Sommersaison gibt es eine Halloween- und eine Wintersaison.
3. **App laden** – sie zeigt Wartezeiten, Showzeiten und den Parkplan.
4. **Anreise:** mit dem Auto über die A5, mit der Bahn über den Bahnhof Ringsheim/Europa-Park und Busanbindung.

## Im Park

- **Früh kommen** und die beliebtesten Bahnen zuerst fahren.
- **Mittags Shows** schauen, wenn die Warteschlangen am längsten sind.
- **Abends** sind viele Bahnen leerer.
- **Wasser und Sonnenschutz** im Sommer.

## Beste Reisezeit

- **Wochentage außerhalb der Ferien** in Deutschland, Frankreich und der Schweiz – der Park liegt nahe der Grenzen.
- **Frühjahr und Herbst** sind oft angenehmer als Hochsommer.

Mehr unter „Beste Reisezeit für Freizeitparks“.

## Rulantica

Direkt neben dem Park liegt die Wasserwelt **Rulantica** mit eigenem Eintritt – ideal für einen zweiten Tag.

## Mehrere Tage

Der Park ist riesig. Für zwei oder mehr Tage lohnen sich Hotels (siehe „Europa-Park Hotels“) und Mehrtagestickets.`,
    faq: [
      ["Muss man Europa-Park Tickets vorab kaufen?", "Empfehlenswert, da an vollen Tagen das Kontingent begrenzt sein kann und datierte Tickets oft nötig sind."],
      ["Was ist Rulantica?", "Die Wasserwelt des Europa-Park Resorts mit eigenem Eintritt, direkt neben dem Freizeitpark."],
    ],
    sources: [EP],
  },

  /* ================= Phantasialand ================= */
  {
    path: "freizeitparks/phantasialand/hotels",
    description: "Phantasialand Hotels: Ling Bao, Matamba und Charles Lindbergh im Überblick – Themen, Lage und Tipps für einen Kurzurlaub in Brühl bei Köln.",
    markdown: `Das **Phantasialand** in Brühl bei Köln hat drei eigene Themenhotels direkt am Park.

## Die Hotels

- **Hotel Ling Bao** – chinesisch inspiriert, mit asiatischer Architektur und Küche.
- **Hotel Matamba** – afrikanisch inspiriert, im Themenbereich „Deep in Africa“.
- **Hotel Charles Lindbergh** – im Stil der Luftfahrtpioniere, angebunden an die Themenwelt Rookburgh.

## Vorteile

Kurze Wege in den Park und thematisierte Atmosphäre. Welche Extras es aktuell für Hotelgäste gibt, steht auf der offiziellen Website.

## Alternativen

Die Region **Köln/Bonn** bietet viele Hotels in allen Preisklassen. Brühl selbst ist eine sehenswerte Stadt mit den UNESCO-Welterbe-Schlössern **Augustusburg und Falkenlust**.

## Tipps

1. **Früh buchen**, besonders für Wochenenden und Ferien.
2. **Pakete** aus Übernachtung und Eintritt vergleichen.
3. **Wintertraum:** In der Wintersaison sind Hotels und Park besonders stimmungsvoll.

Achterbahnen und Tipps findest du in unseren weiteren Phantasialand-Ratgebern.`,
    faq: [
      ["Wie viele Hotels hat das Phantasialand?", "Drei Themenhotels: Ling Bao, Matamba und Charles Lindbergh."],
      ["Was kann man in Brühl außer dem Phantasialand machen?", "Zum Beispiel die Schlösser Augustusburg und Falkenlust besuchen, die zum UNESCO-Welterbe gehören."],
    ],
    sources: [PHL],
  },
  {
    path: "freizeitparks/phantasialand/achterbahnen",
    description: "Achterbahnen im Phantasialand: Taron, Black Mamba, F.L.Y., Colorado Adventure und mehr – Überblick nach Intensität und Tipps gegen Wartezeiten.",
    markdown: `Das **Phantasialand** ist bekannt für dicht thematisierte Welten und spektakuläre Achterbahnen auf vergleichsweise kleiner Fläche.

## Für Adrenalin-Fans

- **Taron** (Klugheim) – Launch-Coaster mit zwei Abschüssen durch eine Felsenlandschaft.
- **Black Mamba** (Deep in Africa) – Inverted Coaster, bei dem die Beine frei hängen.
- **F.L.Y.** (Rookburgh) – Flying Coaster, bei dem man liegend „fliegt“.

## Mittlere Intensität

- **Colorado Adventure** (Mexico) – Minenbahn durch eine Westernlandschaft.
- **Winja's Fear & Force** – Indoor-Achterbahnen.

## Für Familien

- **Raik** (Klugheim) – Familien-Boomerang.
- Weitere Familienbahnen und Kinderattraktionen in verschiedenen Themenbereichen.

## Wasser

- **Chiapas** – Wildwasserbahn
- **River Quest** – Rafting

## Tipps

- **Mindestgrößen** vorab auf der Website prüfen.
- **Beliebte Bahnen** früh am Tag fahren.
- **Lose Gegenstände** wegpacken – bei manchen Bahnen gibt es Schließfächer oder Kontrollen.

Das Angebot kann sich ändern – den aktuellen Stand findest du auf der offiziellen Website.`,
    faq: [
      ["Welche Achterbahn im Phantasialand ist am intensivsten?", "Viele nennen Taron, Black Mamba oder F.L.Y. als Highlights für Adrenalin-Fans."],
      ["Gibt es Achterbahnen für Kinder im Phantasialand?", "Ja, zum Beispiel Raik und weitere Familienattraktionen. Mindestgrößen beachten."],
    ],
    sources: [PHL],
  },
  {
    path: "freizeitparks/phantasialand/mit-kindern",
    description: "Phantasialand mit Kindern: familienfreundliche Bereiche, Mindestgrößen, Shows, Pausen und Tipps für einen entspannten Tag in Brühl.",
    markdown: `Das **Phantasialand** hat den Ruf eines Parks für Achterbahn-Fans – bietet aber auch viel für Familien.

## Für Kinder

- **Kinderbereiche** mit Karussells und kleinen Fahrgeschäften
- **Familienachterbahnen** wie Raik
- **Wasserattraktionen** wie Chiapas oder River Quest (Mindestgrößen beachten)
- **Shows** im Park
- Spielplätze und Kletterbereiche

## Mindestgrößen

Viele der großen Bahnen haben hohe **Mindestgrößen**. Prüfe vor dem Besuch auf der Website, welche Attraktionen für dein Kind möglich sind. Mit kleinen Kindern ist es sinnvoll, die Erwartungen vorher abzustimmen.

## Tipps

1. **Früh da sein.**
2. **Plan machen:** Die Themenwelten sind verwinkelt.
3. **Pausen** in ruhigen Bereichen einplanen.
4. **Wechselkleidung** für Wasserbahnen.
5. **Treffpunkt** für den Fall, dass man sich verliert.

## Wann hinfahren?

Wochentage außerhalb der Ferien in Nordrhein-Westfalen und den Nachbarländern sind oft ruhiger. In der Wintersaison ist der Park stimmungsvoll, aber nicht alle Bahnen fahren.`,
    faq: [
      ["Ist das Phantasialand für Kleinkinder geeignet?", "Es gibt einige Kinderattraktionen, viele Highlights sind aber für größere Kinder. Vorher Mindestgrößen prüfen."],
      ["Gibt es Shows im Phantasialand?", "Ja, der Park bietet Shows. Das aktuelle Programm steht auf der Website."],
    ],
    sources: [PHL],
  },
  {
    path: "freizeitparks/phantasialand/tipps",
    description: "Phantasialand Tipps: Tickets mit Datum, beste Besuchszeit, Reihenfolge der Attraktionen, Wintertraum und Anreise nach Brühl bei Köln.",
    markdown: `Mit diesen Tipps erlebst du das **Phantasialand** entspannter.

## Vor dem Besuch

1. **Datierte Tickets online kaufen** – an beliebten Tagen begrenzt.
2. **Öffnungszeiten und Saison** prüfen, inklusive Wintersaison „Wintertraum“.
3. **App** für Wartezeiten und Parkplan nutzen.
4. **Anreise:** mit dem Auto über die A553 bzw. A1/A61, mit öffentlichen Verkehrsmitteln aus Köln oder Bonn mit Bahn und Bus.

## Im Park

- **Früh die Highlights fahren**, z. B. in Klugheim und Rookburgh.
- **Mittags Shows und Essen**, wenn die Schlangen lang sind.
- **Gegen Abend** oft kürzere Wartezeiten.
- **Lose Gegenstände** sichern – bei einigen Bahnen gelten strenge Regeln.

## Themenwelten genießen

Das Phantasialand lebt von seiner Gestaltung. Nimm dir Zeit, durch **Berlin**, **China Town**, **Mystery**, **Mexico**, **Deep in Africa**, **Klugheim** und **Rookburgh** zu schlendern.

## Übernachten

Für einen Kurzurlaub bieten sich die Parkhotels an – siehe „Phantasialand Hotels“.

Allgemeine Spartipps unter „Freizeitpark-Tickets sparen“.`,
    faq: [
      ["Welche Themenwelten gibt es im Phantasialand?", "Unter anderem Berlin, China Town, Mystery, Mexico, Deep in Africa, Klugheim und Rookburgh."],
      ["Ist das Phantasialand im Winter geöffnet?", "Es gibt eine Wintersaison („Wintertraum“) mit eingeschränktem Angebot. Termine stehen auf der Website."],
    ],
    sources: [PHL],
  },

  /* ================= Heide Park ================= */
  {
    path: "freizeitparks/heide-park/tickets",
    description: "Heide Park Tickets: online günstiger kaufen, datierte Tickets, Jahreskarten und Kombiangebote – so sparst du beim Besuch in Soltau.",
    markdown: `Das **Heide Park Resort** in Soltau (Niedersachsen) ist einer der größten Freizeitparks Norddeutschlands und gehört zu Merlin Entertainments.

## Wo kaufen?

- **Online** auf der offiziellen Website – oft günstiger als an der Tageskasse
- **Tageskasse** vor Ort

## Ticketarten

- **Tagestickets** – oft mit Datum und unterschiedlichen Preisen je nach Tag
- **Kinder-** und **Familientickets**
- **Jahreskarten** – teils mit Zugang zu weiteren Merlin-Attraktionen
- **Kurzurlaub-Pakete** mit Übernachtung

## Spartipps

1. **Früh online buchen** – an vielen Tagen günstiger.
2. **Ruhige Tage** wählen – teils mit niedrigeren Preisen.
3. **Jahreskarte** für mehrere Besuche oder Merlin-Attraktionen.
4. **Aktionen** und Gutscheine prüfen.

Die aktuellen Preise und Bedingungen stehen auf der offiziellen Website.`,
    faq: [
      ["Sind Heide Park Tickets online günstiger?", "Häufig ja. Vergleiche die Online-Preise mit der Tageskasse."],
      ["Wo liegt der Heide Park?", "In Soltau in der Lüneburger Heide, Niedersachsen."],
    ],
    sources: [HP],
  },
  {
    path: "freizeitparks/heide-park/hotels",
    description: "Heide Park Hotels: Abenteuerhotel und Holiday Camp direkt am Park sowie Unterkünfte in der Lüneburger Heide – Tipps für deinen Kurzurlaub.",
    markdown: `Für einen Kurzurlaub im **Heide Park Resort** gibt es Unterkünfte direkt am Park.

## Unterkünfte am Park

- **Abenteuerhotel** – thematisiertes Hotel mit Zimmern in verschiedenen Abenteuer-Stilen.
- **Holiday Camp** – Übernachtung in thematisierten Hütten bzw. Lodges, besonders bei Familien beliebt.

Welche Vorteile Gäste aktuell haben und welche Pakete es gibt, steht auf der offiziellen Website.

## Alternativen in der Region

Die **Lüneburger Heide** bietet viele Hotels, Pensionen und Ferienwohnungen. Ein Aufenthalt lässt sich gut mit Ausflügen verbinden:
- **Heideblüte** im Spätsommer
- **Lüneburg** mit historischer Altstadt
- **Wildparks** und weitere Freizeitparks in der Region

## Tipps

1. **Pakete** mit Übernachtung und Eintritt vergleichen.
2. **Früh buchen** für Ferien und Wochenenden.
3. **Zwei Parktage** einplanen, wenn ihr alles in Ruhe erleben wollt.`,
    faq: [
      ["Hat der Heide Park ein eigenes Hotel?", "Ja, das Abenteuerhotel. Zusätzlich gibt es das Holiday Camp mit Hütten bzw. Lodges."],
      ["Was kann man in der Umgebung machen?", "Die Lüneburger Heide erkunden, Lüneburg besuchen oder weitere Wild- und Freizeitparks ansehen."],
    ],
    sources: [HP],
  },
  {
    path: "freizeitparks/heide-park/achterbahnen",
    description: "Achterbahnen im Heide Park: Colossos, Krake, Desert Race, Flug der Dämonen und mehr – Überblick von Familienbahn bis Adrenalin-Kick.",
    markdown: `Der **Heide Park** ist bekannt für seine Achterbahnen. Hier ein Überblick über bekannte Bahnen.

## Für Adrenalin-Fans

- **Colossos – Kampf der Giganten** – eine der höchsten Holzachterbahnen Europas, nach umfassender Renovierung wiedereröffnet.
- **Krake** – Dive Coaster mit senkrechtem Fall auf eine Wasserfläche zu.
- **Desert Race** – Launch-Coaster mit kräftiger Beschleunigung.
- **Flug der Dämonen** – Wing Coaster, bei dem die Sitze seitlich der Schiene hängen.

## Mittlere Intensität und Familien

- **Big Loop** – klassische Looping-Achterbahn.
- **Familienachterbahnen** und Kinderbahnen in verschiedenen Bereichen.

## Weitere Attraktionen

Wasserbahnen, Freifalltürme und Fahrgeschäfte für alle Altersgruppen.

## Tipps

- **Mindestgrößen** vorab auf der Website prüfen.
- **App** für Wartezeiten nutzen.
- **Früh oder spät** fahren, wenn die Schlangen kürzer sind.

Attraktionen können sich ändern oder zeitweise geschlossen sein – den aktuellen Stand zeigt die offizielle Website.`,
    faq: [
      ["Was ist die bekannteste Achterbahn im Heide Park?", "Colossos, eine der höchsten Holzachterbahnen Europas."],
      ["Gibt es Achterbahnen für Kinder?", "Ja, mehrere Familien- und Kinderachterbahnen. Mindestgrößen beachten."],
    ],
    sources: [HP],
  },
  {
    path: "freizeitparks/heide-park/mit-kindern",
    description: "Heide Park mit Kindern: Familienattraktionen, Kinderbereiche, Mindestgrößen, Shows und Tipps für einen entspannten Familientag in Soltau.",
    markdown: `Neben großen Achterbahnen bietet der **Heide Park** viele Attraktionen für Familien und Kinder.

## Für Kinder

- **Kinderbereiche** mit Karussells, kleinen Bahnen und Spielplätzen
- **Familienachterbahnen**
- **Wasserattraktionen** (Mindestgrößen beachten)
- **Shows** und Walk-Act-Figuren

## Mindestgrößen

Viele Attraktionen haben Größenvorgaben. Die Übersicht steht auf der Website – vorher messen und Erwartungen abstimmen.

## Tipps für Familien

1. **Früh da sein** und mit Familienattraktionen beginnen, bevor es voll wird.
2. **Pausen auf Spielplätzen.**
3. **Wechselkleidung** für Wasserbahnen.
4. **Picknick-Regeln** vorab prüfen.
5. **Holiday Camp** für einen Kurzurlaub mit Übernachtung.

## Kombinieren

Die **Lüneburger Heide** bietet weitere familienfreundliche Ausflugsziele wie Wildparks und Naturerlebnisse.`,
    faq: [
      ["Ist der Heide Park für Kleinkinder geeignet?", "Ja, es gibt Kinderbereiche und Familienattraktionen. Für große Achterbahnen gelten Mindestgrößen."],
      ["Kann man im Heide Park übernachten?", "Ja, im Abenteuerhotel oder im Holiday Camp."],
    ],
    sources: [HP],
  },
  {
    path: "freizeitparks/heide-park/tipps",
    description: "Heide Park Tipps: beste Reisezeit, Anreise nach Soltau, App, Wartezeiten, Halloween-Saison und wie du den Tag im Park optimal planst.",
    markdown: `So holst du das Beste aus deinem Tag im **Heide Park Resort** heraus.

## Vor dem Besuch

1. **Online-Tickets** mit Datum – oft günstiger.
2. **Öffnungszeiten** prüfen – die Saison läuft in der Regel von Frühjahr bis Herbst, mit Halloween-Events.
3. **App** für Wartezeiten und Parkplan.
4. **Anreise:** Der Park liegt an der A7 bei Soltau. Mit der Bahn bis Soltau und weiter mit dem Bus.

## Im Park

- **Morgens die großen Bahnen** fahren.
- **Mittags Shows und Pause.**
- **Am Nachmittag/Abend** sinken oft die Wartezeiten.
- **Bei Regen:** Viele Bahnen fahren weiter, Wetterkleidung mitnehmen.

## Beste Reisezeit

Wochentage außerhalb der niedersächsischen und norddeutschen Schulferien sind meist ruhiger. Mehr unter „Beste Reisezeit für Freizeitparks“.

## Kurzurlaub

Mit Übernachtung im Abenteuerhotel oder Holiday Camp und einem zweiten Parktag wird es entspannter.`,
    faq: [
      ["Wann hat der Heide Park geöffnet?", "Meist in einer Saison von Frühjahr bis Herbst. Genaue Termine stehen auf der offiziellen Website."],
      ["Wie komme ich ohne Auto zum Heide Park?", "Mit der Bahn bis Soltau und dann mit dem Bus zum Park."],
    ],
    sources: [HP],
  },

  /* ================= Familypark ================= */
  {
    path: "freizeitparks/familypark/tickets",
    description: "Familypark Tickets: online kaufen, Saisonkarte, Geburtstagsaktionen und Anreise zum Freizeitpark am Neusiedler See im Burgenland.",
    markdown: `Der **Familypark** in **Sankt Margarethen im Burgenland** nahe dem Neusiedler See ist Österreichs großer Familien-Freizeitpark. Er richtet sich vor allem an Familien mit Kindern.

## Wo kaufen?

- **Online-Ticketshop** auf der offiziellen Website
- **Kassa** vor Ort

## Ticketarten

- Tagestickets für Erwachsene und Kinder (kleine Kinder oft frei)
- Ermäßigungen
- **Saisonkarte** für Vielbesucher

## Saison

Der Familypark hat in einer **Saison von Frühjahr bis Herbst** geöffnet, teils mit Halloween- und Winterveranstaltungen. Die genauen Termine stehen auf der Website.

## Anreise

- **Mit dem Auto:** aus Wien über die A4 bzw. A3, Parkplätze am Park
- **Öffentlich:** Verbindungen über Eisenstadt bzw. regionale Busse – Fahrplan vorab prüfen

Preise und Spartipps findest du auf der offiziellen Website, Attraktionen unter „Attraktionen im Familypark“.`,
    faq: [
      ["Wo liegt der Familypark?", "In Sankt Margarethen im Burgenland, nahe dem Neusiedler See."],
      ["Gibt es eine Saisonkarte?", "Ja, für Vielbesucher gibt es Saisonkarten. Die aktuellen Angebote stehen auf der Website."],
    ],
    sources: [FP],
  },
  {
    path: "freizeitparks/familypark/hotels",
    description: "Familypark Hotels und Unterkünfte: Übernachten am Neusiedler See und im Burgenland – Hotels, Ferienwohnungen und Familienangebote in der Umgebung.",
    markdown: `Der **Familypark** hat kein großes eigenes Hotelresort wie manche deutschen Parks. Die Region rund um den **Neusiedler See** bietet aber viele Unterkünfte für Familien.

## Wo übernachten?

- **Sankt Margarethen** und Nachbarorte – kurze Wege zum Park
- **Rust** am Neusiedler See – malerische Altstadt mit Storchennestern
- **Eisenstadt** – Landeshauptstadt mit Schloss Esterházy
- **Podersdorf** und andere Seeorte – ideal für Badeurlaub

## Unterkunftsarten

- Familienhotels
- Ferienwohnungen und Pensionen
- Weingüter mit Zimmern
- Campingplätze am See

## Ausflüge kombinieren

- **Neusiedler See:** Baden, Radfahren, Segeln
- **Nationalpark Neusiedler See – Seewinkel** mit vielen Vogelarten
- **Steinbruch St. Margarethen** – bekannt für Opernaufführungen im Sommer

## Tipps

1. Früh buchen in den Sommerferien.
2. Familienangebote der Unterkünfte vergleichen.
3. Radverleih nutzen – die Region ist flach und radfreundlich.`,
    faq: [
      ["Hat der Familypark ein eigenes Hotel?", "Kein großes eigenes Resort. In der Region gibt es aber zahlreiche Hotels, Pensionen und Ferienwohnungen."],
      ["Was kann man in der Umgebung unternehmen?", "Baden und Radfahren am Neusiedler See, den Nationalpark Seewinkel erkunden oder Rust und Eisenstadt besuchen."],
    ],
    sources: [FP, { title: "Burgenland Tourismus", url: "https://www.burgenland.info/" }],
  },
  {
    path: "freizeitparks/familypark/attraktionen",
    description: "Attraktionen im Familypark: Themenwelten, Familienachterbahnen, Wasserbahnen, Spielplätze und Shows – was dich im Freizeitpark am Neusiedler See erwartet.",
    markdown: `Der **Familypark** ist auf Familien mit Kindern ausgerichtet. Statt extremer Achterbahnen stehen gemeinsame Erlebnisse im Mittelpunkt.

## Was dich erwartet

- **Themenwelten** mit unterschiedlichen Gestaltungen – vom Märchen- bis zum Abenteuerbereich
- **Familienachterbahnen**, die Kinder und Eltern gemeinsam fahren können
- **Wasserbahnen** zum Nasswerden an heißen Tagen
- **Karussells** und Fahrgeschäfte für Kleinkinder
- **Große Spielplätze** und Kletterbereiche
- **Tiere** zum Anschauen in einigen Bereichen
- **Shows** und Veranstaltungen

## Für welches Alter?

Besonders geeignet für Kinder im **Kindergarten- und Grundschulalter**. Für einige Attraktionen gelten Mindestgrößen bzw. Begleitpflichten.

## Neuheiten

Der Park erweitert sein Angebot regelmäßig. Eine aktuelle Liste aller Attraktionen mit Größenangaben findest du auf der offiziellen Website.

## Tipps

- **Früh da sein** an Wochenenden und in den Ferien.
- **Wechselkleidung** für Wasserbahnen.
- **Schattenplätze** für Pausen nutzen.`,
    faq: [
      ["Gibt es im Familypark große Achterbahnen?", "Der Schwerpunkt liegt auf Familienattraktionen. Es gibt Achterbahnen, die Kinder und Erwachsene gemeinsam fahren können."],
      ["Für welches Alter ist der Familypark ideal?", "Vor allem für Kinder im Kindergarten- und Grundschulalter."],
    ],
    sources: [FP],
  },
  {
    path: "freizeitparks/familypark/mit-kindern",
    description: "Familypark mit Kindern: Tipps für Kleinkinder und Schulkinder, Pausen, Verpflegung, Mindestgrößen und wie der Tag am Neusiedler See entspannt wird.",
    markdown: `Der **Familypark** ist genau für Familien gemacht. Mit diesen Tipps wird der Tag noch schöner.

## Mit Kleinkindern

- Viele Karussells und ruhige Fahrgeschäfte
- Spielplätze und Sandbereiche
- Kinderwagenfreundliche Wege
- Wickelmöglichkeiten

## Mit Schulkindern

- Familienachterbahnen und Wasserbahnen
- Kletter- und Abenteuerbereiche
- Shows

## Tipps

1. **Mindestgrößen** vorab auf der Website prüfen.
2. **Früh starten** – vormittags ist es ruhiger.
3. **Sonnenschutz:** Kappe, Sonnencreme, Wasser.
4. **Wechselkleidung** für Wasserattraktionen.
5. **Pausen** im Schatten.
6. **Treffpunkt** vereinbaren.

## Verpflegung

Im Park gibt es gastronomische Angebote. Ob eigene Verpflegung erlaubt ist, steht in der Hausordnung.

## Nach dem Park

Ein Sprung in den **Neusiedler See** oder ein Eis in **Rust** runden den Tag ab. Mehr Ideen unter „Ausflugsziele Österreich“.`,
    faq: [
      ["Ist der Familypark kinderwagenfreundlich?", "Großteils ja. Details zu Barrierefreiheit stehen auf der Website."],
      ["Wie lange sollte man im Familypark bleiben?", "Mit Kindern meist einen ganzen Tag."],
    ],
    sources: [FP],
  },
  {
    path: "freizeitparks/familypark/tipps",
    description: "Familypark Tipps: beste Besuchszeit, Saisonkarte, Anreise aus Wien, Events wie Halloween und Kombination mit dem Neusiedler See.",
    markdown: `So wird dein Besuch im **Familypark** entspannt.

## Beste Besuchszeit

- **Wochentage** außerhalb der österreichischen Schulferien
- **Frühsommer und Spätsommer** – angenehme Temperaturen
- **Vormittags** kürzere Wartezeiten

## Tickets

- **Online kaufen** und Angebote vergleichen
- **Saisonkarte** für Familien aus der Region – oft schnell rentabel

## Anreise

- Aus **Wien** etwa eine Stunde mit dem Auto
- Öffentliche Verbindungen vorab prüfen

## Events

Der Park bietet saisonale Veranstaltungen, z. B. zu **Halloween** oder im Winter. Termine stehen auf der Website.

## Kombinieren

- **Neusiedler See** zum Baden und Radfahren
- **Rust** mit Storchennestern
- **Steinbruch St. Margarethen**
- **Eisenstadt** mit Schloss Esterházy

## Packliste

Sonnenschutz, Wasser, Wechselkleidung, bequeme Schuhe, Powerbank fürs Handy.`,
    faq: [
      ["Wie weit ist der Familypark von Wien entfernt?", "Mit dem Auto etwa eine Stunde, je nach Verkehr."],
      ["Lohnt sich die Saisonkarte?", "Für Familien aus der Region oft schon nach wenigen Besuchen. Rechne mit den aktuellen Preisen nach."],
    ],
    sources: [FP],
  },

  /* ================= Wiener Prater ================= */
  {
    path: "freizeitparks/wiener-prater/tickets",
    description: "Wiener Prater Tickets: freier Eintritt in den Wurstelprater, Fahrchips pro Attraktion, Riesenrad-Tickets und Spartipps für Familien.",
    markdown: `Der **Wiener Prater** funktioniert anders als die meisten Freizeitparks: Der **Eintritt in den Wurstelprater ist frei**. Bezahlt wird pro Attraktion.

## So funktioniert es

- Jedes **Fahrgeschäft** wird von einem eigenen Betreiber geführt.
- Tickets bzw. Chips kaufst du **direkt an der jeweiligen Attraktion**.
- Preise unterscheiden sich je nach Fahrgeschäft.
- Einige Betreiber bieten **Mehrfahrten-Karten** oder Familienangebote.

## Wiener Riesenrad

Für das **Riesenrad** gibt es eigene Tickets – vor Ort oder online. Es gibt auch besondere Angebote wie Fahrten in speziellen Waggons.

## Spartipps

1. **Budget festlegen**, besonders mit Kindern – die Kosten summieren sich schnell.
2. **Mehrfahrten-Karten** bei Lieblingsattraktionen nutzen.
3. **Kostenlose Erlebnisse:** Spaziergang im **Grünen Prater**, auf der **Hauptallee**, Spielplätze.
4. **Aktionstage** mancher Betreiber nutzen.

## Saison

Viele Attraktionen haben von etwa **Mitte März bis Ende Oktober** geöffnet, einige ganzjährig – darunter das Riesenrad. Aktuelle Infos auf der offiziellen Website.`,
    faq: [
      ["Kostet der Prater Eintritt?", "Nein, der Eintritt in den Wurstelprater ist frei. Bezahlt wird pro Fahrgeschäft."],
      ["Hat der Prater im Winter offen?", "Viele Attraktionen haben eine Saison von Frühjahr bis Herbst, einige – wie das Riesenrad – sind ganzjährig geöffnet."],
    ],
    sources: [PRATER, { title: "Wiener Riesenrad", url: "https://www.wienerriesenrad.com/" }],
  },
  {
    path: "freizeitparks/wiener-prater/hotels",
    description: "Hotels am Wiener Prater: Übernachten in der Leopoldstadt nahe Riesenrad und Praterstern – Lage, Anbindung und Tipps für einen Wien-Städtetrip.",
    markdown: `Der **Prater** liegt in der **Leopoldstadt** (2. Bezirk), nur wenige Minuten von der Wiener Innenstadt entfernt. Für einen Städtetrip ist die Gegend ein guter Ausgangspunkt.

## Lage und Anbindung

- **Praterstern** ist ein wichtiger Verkehrsknoten mit U1, U2, S-Bahn und Straßenbahnen.
- Die **Innenstadt** ist in wenigen Minuten erreichbar.
- **Messe Wien** und **Wirtschaftsuniversität** liegen am Prater – bei Messen steigen die Hotelpreise.

## Unterkunftsarten

- Hotels verschiedener Preisklassen rund um Praterstern und Messe
- Apartments und Ferienwohnungen in der Leopoldstadt
- Hostels für Budget-Reisende

## Tipps

1. **Messetermine** prüfen – dann wird es teurer und voller.
2. **Lage zur U-Bahn** beachten.
3. **Ruhige Zimmer** wählen, wenn das Hotel direkt an einer Hauptstraße liegt.
4. **Vienna City Card** oder Wiener Linien-Tickets für öffentliche Verkehrsmittel prüfen.

## Was in der Nähe liegt

- **Grüner Prater** und **Hauptallee** für Spaziergänge und Radtouren
- **Augarten**
- **Donaukanal** mit Bars und Cafés

Tipps für Familien unter „Wiener Prater mit Kindern“.`,
    faq: [
      ["Wie weit ist der Prater von der Innenstadt?", "Mit der U-Bahn nur wenige Minuten – der Prater liegt im 2. Bezirk direkt neben der Innenstadt."],
      ["Wann sind Hotels am Prater teuer?", "Besonders bei Messen in der Messe Wien und zu großen Veranstaltungen."],
    ],
    sources: [PRATER, { title: "WienTourismus", url: "https://www.wien.info/" }],
  },
  {
    path: "freizeitparks/wiener-prater/attraktionen",
    description: "Attraktionen im Wiener Prater: Riesenrad, Praterturm, Liliputbahn, Achterbahnen, Geisterbahnen und Klassiker – vom Familienkarussell bis zum Nervenkitzel.",
    markdown: `Der **Wurstelprater** bietet eine bunte Mischung aus historischen Klassikern und modernen Fahrgeschäften.

## Klassiker

- **Wiener Riesenrad** – 1897 erbaut, ein Wahrzeichen Wiens. Aus den Waggons hast du einen weiten Blick über die Stadt.
- **Liliputbahn** – Miniatureisenbahn durch den Grünen Prater.
- **Geisterbahnen** und **Grottenbahnen** – teils mit langer Tradition.
- **Autodrom** und **Ponykarussell**-Tradition.

## Nervenkitzel

- **Praterturm** – ein sehr hohes Kettenkarussell mit Blick über Wien.
- **Achterbahnen**, Freifalltürme und Überkopf-Fahrgeschäfte.

## Für Familien

- Kinderkarussells, Kinderachterbahnen, Bootsfahrten
- Spielplätze
- Schießbuden und Spiele

## Außerdem

- **Madame Tussauds Wien** am Riesenradplatz
- Restaurants, Biergärten und die legendären Prater-Imbisse

## Hinweis

Weil die Attraktionen von verschiedenen Betreibern geführt werden, ändert sich das Angebot immer wieder. Eine aktuelle Übersicht findest du auf der offiziellen Website des Praters.`,
    faq: [
      ["Wie alt ist das Wiener Riesenrad?", "Es wurde 1897 erbaut und ist eines der bekanntesten Wahrzeichen Wiens."],
      ["Was ist der Praterturm?", "Ein sehr hohes Kettenkarussell im Prater mit Blick über Wien."],
    ],
    sources: [PRATER, { title: "Wiener Riesenrad", url: "https://www.wienerriesenrad.com/" }],
  },
  {
    path: "freizeitparks/wiener-prater/mit-kindern",
    description: "Wiener Prater mit Kindern: familienfreundliche Attraktionen, Budget-Tipps, Spielplätze, Liliputbahn und Grüner Prater für einen schönen Familientag.",
    markdown: `Der **Wiener Prater** ist bei Familien sehr beliebt – mit ein paar Tipps bleibt auch das Budget im Rahmen.

## Für Kinder

- **Kinderkarussells** und kleine Achterbahnen
- **Liliputbahn** durch den Grünen Prater
- **Riesenrad** – auch für Kinder ein Erlebnis
- **Spielplätze** im Prater und im Grünen Prater
- **Streichel- und Ponyangebote** je nach Saison

## Budget im Griff

Weil jede Fahrt einzeln bezahlt wird, summieren sich die Kosten schnell:
1. **Budget vorab festlegen** – z. B. eine bestimmte Anzahl an Fahrten pro Kind.
2. **Mehrfahrten-Karten** bei Lieblingsattraktionen.
3. **Kostenlose Pausen** auf Spielplätzen und Wiesen einbauen.

## Tipps

- **Wochentage** und **Nachmittage** sind oft ruhiger als Wochenendabende.
- **Kinderwagen:** Die Wege sind gut befahrbar.
- **Treffpunkt** am Riesenrad vereinbaren.
- **Mindestgrößen** an den Fahrgeschäften beachten.

## Grüner Prater

Gleich hinter dem Vergnügungspark beginnt der weitläufige **Grüne Prater** mit Wiesen, Wäldern und der **Hauptallee** – ideal zum Radfahren, Picknicken und Toben.`,
    faq: [
      ["Ist der Prater für Kleinkinder geeignet?", "Ja, es gibt viele Kinderkarussells, kleine Bahnen und Spielplätze."],
      ["Wie spart man im Prater mit Kindern?", "Vorher ein Budget festlegen, Mehrfahrten-Karten nutzen und kostenlose Spielplätze und den Grünen Prater einplanen."],
    ],
    sources: [PRATER],
  },
  {
    path: "freizeitparks/wiener-prater/tipps",
    description: "Wiener Prater Tipps: beste Zeit, Riesenrad bei Sonnenuntergang, Anreise mit der U-Bahn, Essen, Grüner Prater und Kombination mit der Wiener Innenstadt.",
    markdown: `Der **Wiener Prater** ist Vergnügungspark, Naherholungsgebiet und Wiener Institution zugleich. So erlebst du ihn am besten.

## Anreise

- **U1** oder **U2** bis **Praterstern**
- Straßenbahn und S-Bahn bis Praterstern
- Mit dem Rad über die Hauptallee

Parken ist begrenzt – öffentlich anreisen ist am einfachsten.

## Beste Zeit

- **Nachmittags unter der Woche** – entspannt
- **Abends** – Lichter und Stimmung, besonders schön im Riesenrad
- **Saison:** Viele Attraktionen von etwa Mitte März bis Ende Oktober, einige ganzjährig

## Riesenrad-Tipp

Eine Fahrt zum **Sonnenuntergang** bietet besonders schöne Ausblicke über Wien.

## Essen

Vom klassischen Imbiss bis zum Biergarten und traditionellen Gasthäusern gibt es viel Auswahl.

## Grüner Prater

Die **Hauptallee** ist rund vier Kilometer lang und ideal zum Spazieren, Laufen und Radfahren. Das **Lusthaus** am Ende ist ein beliebtes Ausflugsziel.

## Kombinieren

- **Donaukanal**
- **Augarten**
- Innenstadt mit Stephansdom – nur wenige U-Bahn-Stationen entfernt`,
    faq: [
      ["Wie komme ich zum Prater?", "Mit der U1 oder U2 bis Praterstern."],
      ["Wann ist der Prater am schönsten?", "Viele lieben die Abendstimmung mit den Lichtern und eine Riesenradfahrt zum Sonnenuntergang."],
    ],
    sources: [PRATER],
  },

  /* ================= Freizeitpark-Ratgeber ================= */
  {
    path: "freizeitparks/ratgeber/freizeitpark-tickets-sparen",
    description: "Freizeitpark-Tickets sparen: Online-Rabatte, ruhige Tage, Jahreskarten, Kombitickets, Gutscheine und Pakete – so kostet der Parkbesuch weniger.",
    markdown: `Freizeitparks können ins Geld gehen – besonders für Familien. Mit diesen Tipps sparst du bei den **Tickets**.

## 1. Online kaufen

Viele Parks bieten online **günstigere Preise** als an der Tageskasse. Oft gilt: Je früher, desto günstiger.

## 2. Ruhige Tage wählen

Einige Parks haben **dynamische Preise** – an weniger gefragten Tagen ist der Eintritt günstiger. Unter der Woche außerhalb der Ferien ist es außerdem leerer.

## 3. Jahres- und Saisonkarten

Wer zwei- oder dreimal im Jahr kommt, spart mit einer Jahreskarte oft schon. Manche Karten gelten in mehreren Parks einer Unternehmensgruppe.

## 4. Kombitickets und Pakete

Übernachtung plus Eintritt oder Park plus Wasserwelt im Paket sind oft günstiger als einzeln.

## 5. Gutscheine und Aktionen

- Aktionen von Partnern (z. B. auf Verpackungen oder bei Mobilitätsanbietern)
- Geburtstagsaktionen
- Rabatte für Vereine und Gruppen

## 6. Nebenkosten im Blick

- **Parken**, **Essen und Getränke**, **Souvenirs**, **Fotos** von Fahrgeschäften
- Eigene Verpflegung, wenn erlaubt

## Vorsicht

Tickets nur bei offiziellen Stellen kaufen. Weiterverkauf über private Anbieter birgt das Risiko ungültiger oder gefälschter Tickets.`,
    faq: [
      ["Sind Freizeitpark-Tickets online günstiger?", "Bei vielen Parks ja – vor allem bei frühzeitiger Buchung."],
      ["Lohnt sich eine Jahreskarte?", "Oft schon ab zwei bis drei Besuchen. Rechne mit den aktuellen Preisen nach."],
    ],
  },
  {
    path: "freizeitparks/ratgeber/beste-reisezeit-fuer-freizeitparks",
    description: "Beste Reisezeit für Freizeitparks: Ferien, Wochentage, Wetter, Saisonevents wie Halloween und Winter – so vermeidest du lange Wartezeiten.",
    markdown: `Ob ein Freizeitpark-Tag entspannt wird, hängt stark von der **Reisezeit** ab.

## Die wichtigsten Regeln

1. **Wochentage statt Wochenenden.**
2. **Außerhalb der Schulferien** – auch der Nachbarländer! Parks nahe Grenzen haben Besucher aus mehreren Ländern.
3. **Feiertage und Brückentage meiden.**

## Saison im Überblick

- **Frühjahr (Saisonstart):** oft ruhig, angenehme Temperaturen, nicht immer alle Attraktionen geöffnet.
- **Frühsommer:** lange Tage, oft gutes Wetter – außerhalb der Ferien ideal.
- **Hochsommer/Ferien:** am vollsten, heiß.
- **Herbst:** Halloween-Events sind sehr beliebt – an Wochenenden voll, unter der Woche besser.
- **Winter:** Einige Parks haben Winteröffnungen mit Lichterglanz, aber eingeschränktem Angebot.

## Wetter

Leichter Regen sorgt oft für **leerere Parks**. Viele Bahnen fahren weiter – bei Gewitter und Sturm können Attraktionen pausieren.

## Tageszeit

- **Morgens:** die ersten ein bis zwei Stunden nutzen.
- **Mittags:** Shows und Essen.
- **Abends:** oft kürzere Wartezeiten.

## Hilfsmittel

- **Park-Apps** mit Live-Wartezeiten
- **Crowd-Kalender** von Fan-Seiten als Orientierung`,
    faq: [
      ["Wann ist in Freizeitparks am wenigsten los?", "Unter der Woche außerhalb der Schulferien und Feiertage, oft auch im Frühjahr und bei leichtem Regen."],
      ["Lohnt sich ein Besuch zu Halloween?", "Die Events sind beliebt, an Wochenenden aber sehr voll. Wochentage sind entspannter."],
    ],
  },
  {
    path: "freizeitparks/ratgeber/freizeitparks-in-oesterreich",
    description: "Freizeitparks in Österreich: Familypark, Wiener Prater und weitere Parks und Erlebnisberge im Überblick – mit Tipps für Familien.",
    markdown: `Österreich hat keine riesigen Achterbahn-Resorts, dafür viele familienfreundliche Freizeitparks und Erlebnisangebote in den Bergen.

## Bekannte Freizeitparks

- **Familypark (Burgenland):** großer Familien-Freizeitpark am Neusiedler See – siehe unsere Familypark-Ratgeber.
- **Wiener Prater:** traditionsreicher Vergnügungspark mit Riesenrad und freiem Eintritt – Bezahlung pro Fahrgeschäft.
- **Regionale Freizeitparks und Märchenparks** in mehreren Bundesländern, oft mit Fokus auf jüngere Kinder.

## Erlebnisberge

Viele Bergbahnen bieten im Sommer **Erlebnisberge** mit:
- Sommerrodelbahnen
- Themenwanderwegen
- Abenteuerspielplätzen
- Hochseilgärten

## Tipps

1. **Saison beachten:** Viele Parks haben von Frühjahr bis Herbst geöffnet.
2. **Familienpässe** der Bundesländer bieten oft Ermäßigungen.
3. **Kombinieren** mit Badeseen oder Bergen für einen Familienurlaub.

## Für Achterbahn-Fans

Wer große Achterbahnen sucht, findet sie in Deutschland, etwa im Europa-Park, Phantasialand oder Heide Park.`,
    faq: [
      ["Was ist der größte Freizeitpark Österreichs?", "Der Familypark im Burgenland gilt als einer der größten Freizeitparks Österreichs."],
      ["Kostet der Wiener Prater Eintritt?", "Nein, der Eintritt in den Wurstelprater ist frei – bezahlt wird pro Attraktion."],
    ],
    sources: [FP, PRATER, { title: "Österreich Werbung", url: "https://www.austria.info/" }],
  },
  {
    path: "freizeitparks/ratgeber/freizeitparks-in-deutschland",
    description: "Freizeitparks in Deutschland: Europa-Park, Phantasialand, Heide Park und weitere große Parks im Überblick – Schwerpunkte, Region und Tipps.",
    markdown: `Deutschland hat einige der bekanntesten Freizeitparks Europas. Hier ein Überblick über große Parks.

## Die großen Drei

- **Europa-Park (Rust, Baden-Württemberg):** Deutschlands größter Freizeitpark, nach europäischen Ländern thematisiert, mit Hotels und der Wasserwelt Rulantica.
- **Phantasialand (Brühl bei Köln, NRW):** dicht thematisierte Welten und spektakuläre Achterbahnen.
- **Heide Park Resort (Soltau, Niedersachsen):** großer Park mit vielen Achterbahnen, beliebt in Norddeutschland.

## Weitere bekannte Parks (Auswahl)

- **Movie Park Germany** (Bottrop, NRW) – Film-Thema
- **Hansa-Park** (Sierksdorf, Ostsee) – direkt an der Ostsee
- **LEGOLAND Deutschland** (Günzburg, Bayern) – für Familien mit jüngeren Kindern
- **Holiday Park** (Haßloch, Pfalz)
- **Erlebnispark Tripsdrill** (Baden-Württemberg)

## Wie wählen?

- **Kleine Kinder:** Familienparks oder Parks mit großen Kinderbereichen.
- **Achterbahn-Fans:** Europa-Park, Phantasialand, Heide Park.
- **Mehrtägiger Urlaub:** Parks mit eigenen Hotels.

## Tipps

- Ferien der Bundesländer und Nachbarländer beachten.
- Online-Tickets vergleichen.
- Mehr unter „Freizeitpark-Tickets sparen“ und „Beste Reisezeit für Freizeitparks“.`,
    faq: [
      ["Welcher ist der größte Freizeitpark Deutschlands?", "Der Europa-Park in Rust."],
      ["Welcher Freizeitpark eignet sich für kleine Kinder?", "Zum Beispiel LEGOLAND Deutschland oder Parks mit großen Kinderbereichen – Mindestgrößen vorher prüfen."],
    ],
    sources: [EP, PHL, HP],
  },
];
