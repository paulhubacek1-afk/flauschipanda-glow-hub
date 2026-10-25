import type { FillPage } from "../types";

const AA = { title: "Auswärtiges Amt – Reise- und Sicherheitshinweise", url: "https://www.auswaertiges-amt.de/de/ReiseUndSicherheit" };
const BMEIA = { title: "BMEIA – Reiseinformationen (Österreich)", url: "https://www.bmeia.gv.at/reise-services/reiseinformation" };
const EUPET = { title: "Europäische Kommission – Reisen mit Haustieren in der EU", url: "https://europa.eu/youreurope/citizens/travel/carry/animal-plant/index_de.htm" };
const VZ = { title: "Verbraucherzentrale – Reise und Mobilität", url: "https://www.verbraucherzentrale.de/wissen/reise-mobilitaet" };
const AK = { title: "Arbeiterkammer – Konsumentenschutz", url: "https://www.arbeiterkammer.at/" };
const ADAC = { title: "ADAC – Ratgeber Auto", url: "https://www.adac.de/rund-ums-fahrzeug/" };
const OEAMTC = { title: "ÖAMTC – Auto und Mobilität", url: "https://www.oeamtc.at/" };
const KBA = { title: "Kraftfahrt-Bundesamt – Rückrufdatenbank", url: "https://www.kba.de/DE/Themen/Marktueberwachung/Rueckrufe/rueckrufe_node.html" };
const EU_GSR = { title: "Europäische Kommission – Neue Sicherheitsvorschriften für Fahrzeuge", url: "https://single-market-economy.ec.europa.eu/sectors/automotive-industry_en" };
const ECONTROL = { title: "E-Control – Spritpreisrechner", url: "https://www.e-control.at/" };

export const urlaubAutosMisc: FillPage[] = [
  /* ================= Urlaubsziele ================= */
  {
    path: "urlaub-reisen/urlaubsziele/urlaub-in-oesterreich",
    description: "Urlaub in Österreich: Berge, Seen und Städte – die schönsten Regionen für Sommer und Winter, Familienurlaub und Tipps zu Anreise und Vignette.",
    markdown: `Österreich ist klein, aber vielfältig: Alpen, glasklare Seen, Weinregionen und kulturreiche Städte liegen oft nur wenige Stunden voneinander entfernt.

## Berge

- **Tirol** und **Vorarlberg:** hohe Gipfel, Skigebiete, Wandern und Klettern.
- **Salzburger Land:** Bergdörfer, Nationalpark Hohe Tauern, Krimmler Wasserfälle.
- **Steiermark** und **Kärnten:** sanftere Berge, viele Almen.

## Seen

- **Salzkammergut:** Wolfgangsee, Attersee, Hallstätter See.
- **Kärntner Seen:** Wörthersee, Millstätter See, Ossiacher See – oft mit Badewasser bis über 25 °C im Sommer.
- **Neusiedler See** im Burgenland: Steppensee, Radfahren, Vogelbeobachtung.

## Städte

- **Wien:** Museen, Kaffeehäuser, Tiergarten Schönbrunn, Prater.
- **Salzburg:** Altstadt (UNESCO-Welterbe), Mozart.
- **Graz** und **Innsbruck**: lebendige Universitätsstädte.

## Sommer oder Winter?

- **Sommer:** Wandern, Baden, Radfahren, Erlebnisberge.
- **Winter:** Skifahren, Rodeln, Winterwandern, Adventmärkte.

## Praktische Tipps

- **Vignette:** Für Autobahnen und Schnellstraßen brauchst du eine Vignette – auch als **digitale Vignette** erhältlich. Manche Strecken sind zusätzlich mautpflichtig.
- **Gästekarten:** Viele Regionen bieten Gästekarten mit kostenlosen oder ermäßigten Leistungen.
- **Bahn:** Österreich ist gut per Zug erreichbar.

Ideen für Familien findest du unter „Familienurlaub planen“ und „Ausflugsziele Österreich“.`,
    faq: [
      ["Brauche ich in Österreich eine Vignette?", "Für Autobahnen und Schnellstraßen ja – als Klebevignette oder digitale Vignette. Einige Strecken sind zusätzlich mautpflichtig."],
      ["Wann ist die beste Reisezeit für Österreich?", "Für Wandern und Baden Juni bis September, für Wintersport etwa Dezember bis März."],
    ],
    sources: [{ title: "Österreich Werbung", url: "https://www.austria.info/" }, { title: "ASFINAG – Vignette und Maut", url: "https://www.asfinag.at/" }],
  },
  {
    path: "urlaub-reisen/urlaubsziele/urlaub-in-deutschland",
    description: "Urlaub in Deutschland: Küsten, Mittelgebirge, Alpen und Städte – die beliebtesten Regionen, Ideen für Familien und Tipps für günstigen Urlaub im eigenen Land.",
    markdown: `Deutschland bietet für jeden Geschmack etwas – vom Wattenmeer bis zur Zugspitze.

## Küste

- **Nordsee:** Wattenmeer (UNESCO-Welterbe), Inseln wie Sylt, Föhr, Norderney und Borkum, Wattwanderungen mit Führung.
- **Ostsee:** Sandstrände, Seebäder, Rügen, Usedom, Fischland-Darß.

## Mittelgebirge

- **Schwarzwald:** Wälder, Wasserfälle, Kuckucksuhren.
- **Harz:** Brocken, Wandern, historische Städte.
- **Sächsische Schweiz:** Elbsandsteingebirge mit spektakulären Felsen.
- **Eifel, Rhön, Thüringer Wald** und mehr.

## Alpen und Seen

- **Bayerische Alpen:** Wandern, Klettern, Skifahren, Zugspitze.
- **Bodensee:** Radfahren, Baden, Inseln Mainau und Lindau.
- **Chiemsee** und **Königssee**.

## Städte

Berlin, Hamburg, München, Köln, Dresden, Leipzig – jede mit eigenem Charakter. Tipps unter „Städtereisen“.

## Mit Kindern

Freizeitparks, Zoos, Bauernhofurlaub, Ferienwohnungen an der Küste. Mehr unter „Ausflugsziele Deutschland“.

## Praktisch

- **Bahn:** Mit Sparpreisen und regionalen Tickets lässt sich viel erreichen.
- **Nebensaison:** Mai, Juni und September sind oft günstiger und ruhiger.
- **Kurtaxe** in vielen Urlaubsorten einplanen.`,
    faq: [
      ["Wo ist es in Deutschland im Sommer am schönsten?", "Das hängt von deinen Vorlieben ab: Küste für Strand, Mittelgebirge und Alpen für Wandern, Seen für Baden und Radfahren."],
      ["Wann ist Urlaub in Deutschland günstiger?", "In der Nebensaison, etwa Mai, Juni oder September außerhalb der Schulferien."],
    ],
    sources: [{ title: "Deutsche Zentrale für Tourismus", url: "https://www.germany.travel/" }],
  },
  {
    path: "urlaub-reisen/urlaubsziele/urlaub-am-meer",
    description: "Urlaub am Meer: Nordsee, Ostsee, Mittelmeer und Adria im Vergleich – beste Reisezeit, Strände für Familien, Sicherheit beim Baden und Packliste.",
    markdown: `Sonne, Sand und Wellenrauschen: Urlaub am Meer ist für viele der Inbegriff von Erholung. Hier ein Überblick über beliebte Ziele aus Deutschland und Österreich.

## Beliebte Meeresziele

| Ziel | Charakter | Typische Badezeit |
|---|---|---|
| Nordsee | Wattenmeer, Gezeiten, frische Brise | Hochsommer |
| Ostsee | Sandstrände, kaum Gezeiten, familienfreundlich | Sommer |
| Adria (Italien, Kroatien, Slowenien) | gut mit dem Auto erreichbar, viele Familienstrände | Juni bis September |
| Mittelmeer (Spanien, Frankreich, Griechenland …) | warm, lange Saison | etwa Juni bis Oktober |

## Tipps für Familien

- **Flach abfallende Sandstrände** sind ideal für kleine Kinder.
- **Bewachte Strände** mit Badeaufsicht wählen.
- **Schatten** einplanen: Sonnenschirm oder Strandmuschel.

## Sicherheit beim Baden

- **Flaggen beachten:** Rot bedeutet meist Badeverbot.
- **Strömungen** ernst nehmen – nicht gegen eine Strömung anschwimmen, sondern parallel zum Ufer.
- **Kinder nie unbeaufsichtigt** lassen, auch nicht im flachen Wasser.
- An der Nordsee: **Gezeiten** beachten, Wattwanderungen nur mit Führung.

## Sonnenschutz

Hoher Lichtschutzfaktor, Mittagssonne meiden, Kopfbedeckung, UV-Shirts für Kinder.

## Packliste

Badesachen, Strandtuch, Sonnenschutz, Wasserschuhe für Steinstrände, Spielzeug, Reiseapotheke. Mehr unter „Packliste Urlaub“.`,
    faq: [
      ["Welches Meer ist für kleine Kinder am besten?", "Ruhige, flach abfallende Sandstrände – etwa an vielen Stellen der Ostsee oder der oberen Adria."],
      ["Was tun bei einer Strömung?", "Ruhig bleiben, nicht gegen die Strömung schwimmen, sondern parallel zum Ufer, und Aufmerksamkeit auf sich lenken."],
    ],
    sources: [{ title: "DLRG – Baderegeln", url: "https://www.dlrg.de/informieren/freizeit-im-wasser/baderegeln/" }],
  },
  {
    path: "urlaub-reisen/urlaubsziele/staedtereisen",
    description: "Städtereisen planen: Anreise, Unterkunft, City-Cards, Sehenswürdigkeiten und Tipps für Kurztrips nach Wien, Berlin, München, Hamburg und mehr.",
    markdown: `Ein verlängertes Wochenende reicht für eine **Städtereise** voller Eindrücke. Mit guter Planung bleibt Zeit zum Genießen.

## Planung

1. **Anreise:** Bahn ist bei Städten oft entspannter als das Auto – keine Parkplatzsuche.
2. **Unterkunft:** zentral oder gut an den Nahverkehr angebunden.
3. **City-Card prüfen:** Viele Städte bieten Karten mit Nahverkehr und Rabatten auf Museen und Attraktionen.
4. **Highlights auswählen** statt alles abhaken.

## Beliebte Städte (Auswahl)

- **Wien:** Kaffeehäuser, Schönbrunn, Museumsquartier, Prater.
- **Berlin:** Geschichte, Museumsinsel, Kiez-Kultur.
- **München:** Altstadt, Englischer Garten, Biergärten.
- **Hamburg:** Hafen, Speicherstadt, Elbphilharmonie.
- **Salzburg:** Altstadt, Festung, Mozart.
- **Leipzig** und **Dresden:** Kultur und Architektur.

## Tipps

- **Free Walking Tours** für einen ersten Überblick (Trinkgeld üblich).
- **Museen** an weniger vollen Tagen oder früh besuchen.
- **Lokale Viertel** abseits der Hauptattraktionen erkunden.
- **Bequeme Schuhe** – man läuft mehr als gedacht.

## Städtereise mit Kindern

Zoos, Spielplätze und Mitmach-Museen einplanen. Mehr unter „Ausflugsziele Deutschland“ und „Ausflugsziele Österreich“.`,
    faq: [
      ["Lohnt sich eine City-Card?", "Wenn du viele Museen und Attraktionen besuchst und öffentliche Verkehrsmittel nutzt, oft ja. Rechne mit deinem Programm nach."],
      ["Wie viele Tage braucht man für eine Städtereise?", "Für viele Städte reichen zwei bis vier Tage für die wichtigsten Highlights."],
    ],
  },
  {
    path: "urlaub-reisen/urlaubsziele/urlaub-in-den-bergen",
    description: "Urlaub in den Bergen: Wandern, Hütten, Bergbahnen und Familienangebote – plus Sicherheitstipps, Ausrüstung und beste Reisezeit für Alpenurlaub.",
    markdown: `Frische Luft, weite Ausblicke und Hüttenzauber: **Urlaub in den Bergen** ist Erholung pur – im Sommer wie im Winter.

## Sommer in den Bergen

- **Wandern** auf markierten Wegen von leicht bis anspruchsvoll
- **Hüttentouren** mit Übernachtung
- **Bergbahnen** für bequeme Gipfelerlebnisse
- **Klettersteige** (nur mit Ausrüstung und Erfahrung)
- **Bergseen** zum Abkühlen

## Winter in den Bergen

Skifahren, Langlaufen, Rodeln, Schneeschuhwandern und Winterwandern.

## Mit Familie

- **Erlebnisberge** mit Spielplätzen und Themenwegen
- **Kurze Wanderungen** mit Ziel: Alm, See, Wasserfall
- **Sommerrodelbahnen**

## Sicherheit

1. **Tour realistisch planen** – Länge, Höhenmeter und Kondition.
2. **Wetterbericht** prüfen – Gewitter am Nachmittag sind häufig.
3. **Früh starten.**
4. **Umkehren** ist keine Schande.
5. **Notruf:** 112, in Österreich auch 140 (Bergrettung).

## Ausrüstung

Feste Schuhe, Regenjacke, Wärmeschicht, Sonnenschutz, Wasser, Proviant, Erste-Hilfe-Set, geladenes Handy.

Mehr unter „Wandern und Spazieren“ und „Urlaub in Österreich“.`,
    faq: [
      ["Wann ist die beste Zeit zum Wandern in den Alpen?", "Meist von Juni bis Oktober, in hohen Lagen eher Juli bis September."],
      ["Welche Notrufnummer gilt in den Bergen?", "Europaweit die 112, in Österreich zusätzlich die 140 für die Bergrettung."],
    ],
    sources: [{ title: "Österreichischer Alpenverein", url: "https://www.alpenverein.at/" }, { title: "Deutscher Alpenverein", url: "https://www.alpenverein.de/" }],
  },

  /* ================= Familienurlaub ================= */
  {
    path: "urlaub-reisen/familienurlaub/familienurlaub-planen",
    description: "Familienurlaub planen: Reiseziel, Unterkunft, Anreise, Budget und Programm – mit Checkliste für einen entspannten Urlaub mit Kindern jeden Alters.",
    markdown: `Ein gelungener Familienurlaub beginnt mit guter Planung. Diese Schritte helfen, dass sich alle erholen – Kinder und Eltern.

## 1. Bedürfnisse klären

Was wünschen sich die Kinder, was die Erwachsenen? Strand, Berge, Stadt, Bauernhof? Kinder in die Auswahl einzubeziehen erhöht die Vorfreude.

## 2. Reiseziel

- **Anreisezeit** passend zum Alter der Kinder
- **Klima:** Große Hitze ist für Kleinkinder anstrengend
- **Medizinische Versorgung** vor Ort

## 3. Unterkunft

- **Familienhotel** mit Kinderbetreuung und Spielbereichen
- **Ferienwohnung** mit Küche und Platz
- **Bauernhof** mit Tieren
- **Camping** für Abenteuerlustige

## 4. Anreise

Auto, Bahn oder Flugzeug? Pausen, Beschäftigung und Snacks einplanen. Mehr in „Urlaub mit Baby“ und „Urlaub mit Kleinkind“.

## 5. Budget

Unterkunft, Anreise, Verpflegung, Ausflüge, Versicherungen. Nebensaison und frühes Buchen sparen oft.

## 6. Programm

- Nicht zu viel planen
- Feste Ruhezeiten
- Wechsel aus Aktivität und Entspannung

## Checkliste

- Ausweisdokumente für alle (auch Kinder!)
- Reiseversicherung prüfen
- Reiseapotheke
- Impfstatus checken
- Lieblingskuscheltier

Mehr unter „Packliste Urlaub“ und „Reiseversicherung“.`,
    faq: [
      ["Brauchen Kinder einen eigenen Reisepass?", "Ja, für Auslandsreisen brauchen auch Kinder ein eigenes Ausweisdokument."],
      ["Wann sollte man einen Familienurlaub buchen?", "Für Schulferien möglichst früh – Familienunterkünfte sind dann schnell ausgebucht."],
    ],
    sources: [AA, BMEIA],
  },
  {
    path: "urlaub-reisen/familienurlaub/urlaub-mit-baby",
    description: "Urlaub mit Baby: das richtige Reiseziel, Anreise mit Auto, Bahn oder Flugzeug, Dokumente, Reiseapotheke und Packliste für entspannte Ferien.",
    markdown: `Mit Baby zu verreisen ist gut machbar – das Tempo bestimmt allerdings der jüngste Reisende. Ausführliche Tipps für die allererste Reise findest du auch unter „Babys erste Reise“.

## Reiseziel

- **Kurze Anreise**, gerade beim ersten Mal
- **Moderates Klima**
- **Gute medizinische Versorgung**
- **Unterkunft mit Babybett**, Platz und eventuell Küche

## Anreise

- **Auto:** Babyschale rückwärtsgerichtet, Pausen alle ein bis zwei Stunden.
- **Bahn:** Kleinkindabteil oder Familienbereich reservieren, Platz zum Wickeln und Herumtragen.
- **Flugzeug:** Beim Start und bei der Landung trinken lassen oder Schnuller geben. Regeln der Airline zu Babybett, Kinderwagen und Babynahrung prüfen.

## Dokumente

Auch Babys brauchen für Auslandsreisen ein **eigenes Ausweisdokument**. Rechtzeitig beantragen.

## Reiseapotheke

Mit der Kinderarztpraxis besprechen: Fiebermittel in Babydosierung, Thermometer, Kochsalzlösung für die Nase, Wund- und Sonnenschutz.

## Sonne

Babys gehören **nicht in die direkte Sonne**. Schatten, leichte Kleidung, Sonnenhut.

## Packliste-Extras

Schlafsack, vertraute Spieluhr, Tragetuch, Windeln für die ersten Tage, Babynahrung, Spucktücher.`,
    faq: [
      ["Ab wann kann man mit einem Baby verreisen?", "Grundsätzlich schon früh. Sprich vorher mit der Kinderarztpraxis, besonders bei Flugreisen oder Fernreisen."],
      ["Brauche ich Sonnencreme für mein Baby?", "Babys im ersten Lebensjahr sollten vor allem durch Schatten und Kleidung geschützt werden. Zu Sonnencreme berät die Kinderarztpraxis."],
    ],
    sources: [{ title: "Kindergesundheit-info.de – Reisen mit Kindern", url: "https://www.kindergesundheit-info.de/" }, AA],
  },
  {
    path: "urlaub-reisen/familienurlaub/urlaub-mit-kleinkind",
    description: "Urlaub mit Kleinkind: kindgerechte Ziele, Beschäftigung für die Anreise, Tagesrhythmus, Sicherheit am Wasser und Tipps für erholsame Familienferien.",
    markdown: `Kleinkinder sind neugierig, mobil und brauchen trotzdem viel Routine. So wird der Urlaub für alle schön.

## Das richtige Ziel

- **Kurze Anreise**
- **Natur und Bewegung:** Strand, Bauernhof, Seen, Familienhotels mit Spielbereichen
- **Unterkunft mit Platz**, kindersicher und mit Rückzugsmöglichkeit für den Mittagsschlaf

## Anreise

- **Beschäftigung einpacken:** Bücher, Sticker, kleines Spielzeug, Hörspiele
- **Snacks und Getränke** griffbereit
- **Pausen** auf Spielplätzen
- **Reisen zur Schlafenszeit** kann lange Fahrten erleichtern

## Tagesrhythmus

- Mittagsschlaf und Essenszeiten möglichst beibehalten
- Nicht mehr als ein großes Programm pro Tag
- Viel Zeit für freies Spiel

## Sicherheit

- **Am Wasser** immer in Griffweite bleiben – auch am Pool.
- **Schwimmhilfen** ersetzen keine Aufsicht.
- **Sonnenschutz:** UV-Kleidung, Hut, Schatten.
- **Unterkunft checken:** Balkone, Treppen, Steckdosen.

## Wenn das Kind krank wird

Reiseapotheke dabei, Versicherungsunterlagen griffbereit, Kontakt zur nächsten Kinderarztpraxis vor Ort heraussuchen.`,
    faq: [
      ["Welche Urlaubsziele eignen sich für Kleinkinder?", "Ziele mit kurzer Anreise, Natur und Platz zum Spielen – etwa Bauernhöfe, flache Strände oder Familienhotels."],
      ["Wie beschäftige ich mein Kind auf langen Fahrten?", "Mit Büchern, Stickern, kleinen Spielzeugen, Hörspielen, Snacks und regelmäßigen Pausen."],
    ],
  },

  /* ================= Urlaub mit Hund ================= */
  {
    path: "urlaub-reisen/mit-hund/urlaub-mit-hund-planen",
    description: "Urlaub mit Hund planen: hundefreundliche Ziele, Einreisebestimmungen mit EU-Heimtierausweis, Anreise, Unterkunft und Checkliste für Hund und Halter.",
    markdown: `Mit dem Hund in den Urlaub – für viele Halter ein Muss. Mit guter Planung wird es für alle entspannt.

## Hundefreundliche Ziele

- **Wanderregionen** in Österreich, Deutschland und der Schweiz
- **Hundestrände** an Nord- und Ostsee sowie an vielen Seen
- **Ferienhäuser** mit eingezäuntem Garten

Vor Ort informieren: Leinenpflicht, Hundeverbote an Stränden in der Saison, Maulkorbpflicht in öffentlichen Verkehrsmitteln (z. B. in Österreich teils üblich).

## Einreisebestimmungen in der EU

Für Reisen innerhalb der EU braucht dein Hund in der Regel:
- einen **Mikrochip**
- den **EU-Heimtierausweis**
- eine gültige **Tollwutimpfung** (bei der Erstimpfung gilt eine Wartezeit, bevor die Einreise möglich ist)

Einige Länder verlangen zusätzlich eine **Bandwurmbehandlung** vor der Einreise. Prüfe die aktuellen Regeln des Ziellandes rechtzeitig.

## Anreise

- **Auto:** Hund gesichert transportieren – Transportbox oder Sicherheitsgeschirr. Pausen und Wasser einplanen. **Nie im heißen Auto lassen.**
- **Bahn:** Regeln zu Ticket, Leine und Maulkorb des jeweiligen Bahnunternehmens beachten.
- **Flugzeug:** Nur in Ausnahmefällen – Stress und Risiko sind hoch.

## Unterkunft

Mehr unter „Hundefreundliche Hotels“. Packliste unter „Packliste für den Hund“.`,
    faq: [
      ["Was braucht mein Hund für Reisen in der EU?", "In der Regel Mikrochip, EU-Heimtierausweis und eine gültige Tollwutimpfung. Manche Länder verlangen zusätzlich eine Bandwurmbehandlung."],
      ["Darf mein Hund an den Strand?", "Das hängt vom Ort ab. Viele Strände haben eigene Hundebereiche, in der Saison gilt oft ein Hundeverbot an Badestränden."],
    ],
    sources: [EUPET, AA],
  },
  {
    path: "urlaub-reisen/mit-hund/hundefreundliche-hotels",
    description: "Hundefreundliche Hotels finden: Worauf du achten solltest, typische Regeln und Kosten, Fragen vor der Buchung und Verhalten im Hotel mit Hund.",
    markdown: `„Hunde willkommen“ ist nicht gleich „hundefreundlich“. Diese Tipps helfen bei der Suche nach der richtigen Unterkunft.

## Woran du echte Hundefreundlichkeit erkennst

- Hunde dürfen in **Zimmer und Restaurant** (oder es gibt Alternativen)
- **Hundebett und Näpfe** im Zimmer
- **Auslaufflächen** oder Wanderwege direkt vor der Tür
- **Gassi-Beutel**, Hundedusche, Handtücher
- Eventuell **Hundesitting** oder Tipps zu Tierarztpraxen in der Nähe

## Fragen vor der Buchung

1. Wie viele und welche Hunde sind erlaubt (Größe, Anzahl)?
2. Was kostet der Hund pro Nacht?
3. Darf der Hund allein im Zimmer bleiben?
4. Wo darf der Hund nicht hin (Wellness, Frühstücksraum)?
5. Gibt es Hundestrände oder Freilaufflächen in der Nähe?

## Verhalten im Hotel

- **Decke** mitbringen, wenn der Hund aufs Bett oder Sofa darf.
- **Nicht allein lassen**, wenn er bellt oder unsicher ist.
- **Leine** in Gemeinschaftsbereichen.
- **Ruhezeiten** respektieren.

## Alternativen

**Ferienhäuser mit Garten** sind oft entspannter als Hotels – besonders mit großen oder jungen Hunden.

Allgemeine Tipps unter „Urlaub mit Hund planen“.`,
    faq: [
      ["Kostet ein Hund im Hotel extra?", "Meist ja, oft ein Betrag pro Nacht. Die Höhe variiert stark."],
      ["Darf mein Hund allein im Hotelzimmer bleiben?", "Das regelt jedes Hotel selbst. Frage vor der Buchung nach."],
    ],
  },
  {
    path: "urlaub-reisen/mit-hund/reisen-mit-haustier",
    description: "Reisen mit Haustier: Was für Hunde, Katzen und Kleintiere gilt, EU-Regeln, Transportboxen, Stress vermeiden und wann ein Tiersitter die bessere Wahl ist.",
    markdown: `Nicht nur Hunde reisen mit. Doch nicht jedes Haustier ist ein guter Reisebegleiter.

## Hunde

Die meisten Hunde reisen gern mit, wenn sie gut vorbereitet sind. Details unter „Urlaub mit Hund planen“.

## Katzen

Katzen sind sehr **ortsgebunden**. Reisen bedeuten für viele Katzen Stress. Oft ist eine **vertraute Betreuung zu Hause** (Tiersitter, Nachbarn) die bessere Wahl. Muss die Katze mit, gelten in der EU ähnliche Regeln wie bei Hunden: Mikrochip, EU-Heimtierausweis, Tollwutimpfung.

## Kleintiere

Kaninchen, Meerschweinchen und Hamster sind sehr stressanfällig und reagieren empfindlich auf Temperaturwechsel. Sie bleiben besser zu Hause in vertrauter Umgebung mit zuverlässiger Betreuung.

## Transport

- **Stabile, gut belüftete Transportbox**, im Auto gesichert.
- Die Box vorher zu Hause positiv bekannt machen.
- **Nie** Tiere im geparkten Auto lassen – es wird schnell lebensgefährlich heiß.

## Einreiseregeln

Innerhalb der EU gelten einheitliche Grundregeln für Hunde, Katzen und Frettchen. Für andere Tiere und Länder außerhalb der EU gelten teils andere Vorschriften – informiere dich frühzeitig.

## Alternativen

- Tiersitter, die ins Haus kommen
- Tierpensionen (vorher besichtigen)
- Familie und Freunde

Sprich mit der Tierarztpraxis, wenn dein Tier alt oder krank ist.`,
    faq: [
      ["Kann ich meine Katze mit in den Urlaub nehmen?", "Möglich, aber für viele Katzen sehr stressig. Oft ist Betreuung zu Hause die bessere Lösung."],
      ["Welche Regeln gelten in der EU für Katzen?", "Ähnlich wie für Hunde: Mikrochip, EU-Heimtierausweis und gültige Tollwutimpfung."],
    ],
    sources: [EUPET],
  },
  {
    path: "urlaub-reisen/mit-hund/packliste-fuer-den-hund",
    description: "Packliste für den Hund: Dokumente, Futter, Näpfe, Leinen, Erste-Hilfe-Set, Schlafplatz und Sicherheit – alles, was dein Hund im Urlaub braucht.",
    markdown: `Mit dieser **Packliste** vergisst du nichts für deinen Hund.

## Dokumente

- **EU-Heimtierausweis** mit gültiger Tollwutimpfung
- **Nachweis der Hundehaftpflicht**
- Kontaktdaten der eigenen Tierarztpraxis
- Ein aktuelles **Foto** des Hundes (falls er entläuft)

## Futter und Wasser

- Gewohntes **Futter** für die ganze Reise (Futterwechsel kann Durchfall auslösen)
- **Leckerlis**
- **Faltbare Näpfe**
- **Wasser** für die Fahrt

## Ausrüstung

- **Halsband/Geschirr** mit Adressanhänger und Handynummer
- **Leine** und eventuell Schleppleine
- **Maulkorb**, falls am Reiseziel oder in Verkehrsmitteln nötig
- **Kotbeutel**
- **Transportbox** oder Sicherheitsgeschirr fürs Auto

## Komfort

- **Eigene Decke** oder Hundebett – vertrauter Geruch beruhigt
- **Lieblingsspielzeug**
- **Handtuch** für nasse Pfoten

## Gesundheit

- **Erste-Hilfe-Set:** Verbandsmaterial, Zeckenzange, Pfotenschutz
- Regelmäßige **Medikamente**
- **Parasitenschutz** passend zum Reiseziel (mit Tierarztpraxis besprechen)

## Sicherheit bei Hitze

Kühlmatte, Schatten und viel Wasser im Sommer. Nie im geparkten Auto lassen.`,
    faq: [
      ["Soll ich das Futter im Urlaub wechseln?", "Besser nicht. Nimm das gewohnte Futter mit, um Verdauungsprobleme zu vermeiden."],
      ["Braucht mein Hund einen Maulkorb?", "Das hängt vom Reiseziel und den Verkehrsmitteln ab. Informiere dich vor der Reise."],
    ],
    sources: [EUPET],
  },

  /* ================= Reiseplanung ================= */
  {
    path: "urlaub-reisen/reiseplanung/packliste-urlaub",
    description: "Packliste Urlaub: Dokumente, Kleidung, Hygiene, Reiseapotheke, Technik und Extras für Strand, Berge und Städtereisen – zum Abhaken.",
    markdown: `Mit dieser **Packliste** vergisst du im Urlaub nichts Wichtiges.

## Dokumente und Geld

- Personalausweis bzw. Reisepass (Gültigkeit prüfen!)
- Führerschein, Fahrzeugpapiere
- Krankenversicherungskarte, Auslandsreisekrankenversicherung
- Buchungsbestätigungen, Tickets
- Bank- und Kreditkarten, etwas Bargeld
- Kopien wichtiger Dokumente (digital und auf Papier)

## Kleidung

- Kleidung nach Wetter und Aktivitäten – Zwiebellook
- Regenjacke
- Bequeme Schuhe
- Badesachen
- Schlafkleidung

## Hygiene

- Zahnbürste, Zahnpasta, Duschgel, Shampoo
- Sonnencreme, After-Sun
- Insektenschutz
- Persönliche Pflegeprodukte

## Reiseapotheke

- Persönliche Medikamente (genug für die ganze Reise)
- Schmerz- und Fiebermittel
- Pflaster, Desinfektion
- Mittel gegen Durchfall und Reiseübelkeit

## Technik

- Handy und Ladegerät
- Powerbank
- Reiseadapter (je nach Land)
- Kopfhörer

## Extras

- **Strand:** Strandtuch, Sonnenhut, Wasserschuhe
- **Berge:** Wanderschuhe, Rucksack, Trinkflasche
- **Stadt:** kleiner Tagesrucksack, bequeme Schuhe

Für Hunde gibt es eine eigene Packliste.`,
    faq: [
      ["Wie lange muss mein Reisepass noch gültig sein?", "Das hängt vom Zielland ab – manche verlangen eine Gültigkeit von mehreren Monaten über das Reiseende hinaus. Prüfe die Einreisebestimmungen."],
      ["Brauche ich einen Reiseadapter?", "In vielen europäischen Ländern nicht, in einigen (z. B. Großbritannien, Schweiz teils) schon. Prüfe die Steckdosen deines Reiseziels."],
    ],
    sources: [AA, BMEIA],
  },
  {
    path: "urlaub-reisen/reiseplanung/guenstig-reisen",
    description: "Günstig reisen: Nebensaison, flexible Daten, Frühbucher, Bahn-Sparpreise, Ferienwohnungen und Spartipps vor Ort – so wird der Urlaub bezahlbar.",
    markdown: `Urlaub muss kein Vermögen kosten. Mit diesen Tipps reist du günstiger.

## Zeitpunkt

- **Nebensaison:** außerhalb der Schulferien oft deutlich günstiger und ruhiger.
- **Flexible Daten:** Schon ein Tag früher oder später kann viel ausmachen.
- **Frühbucher** oder **Last Minute** – je nach Reiseart.

## Anreise

- **Bahn-Sparpreise** frühzeitig buchen.
- **Fernbusse** für kurze und mittlere Strecken.
- **Fahrgemeinschaften** beim Auto – Kosten teilen (unser Spritkosten-Rechner hilft).
- **Flugpreise vergleichen** und Gepäckgebühren einrechnen.

## Unterkunft

- **Ferienwohnung** mit Küche – selbst kochen spart viel.
- **Camping** oder **Jugendherbergen** – auch für Familien.
- **Lage abwägen:** etwas außerhalb ist günstiger, aber Fahrtkosten bedenken.

## Vor Ort

- **Gästekarten** und **City-Cards** nutzen.
- **Kostenlose Aktivitäten:** Wandern, Strand, Parks, Free Walking Tours.
- **Supermarkt** statt Restaurant für Frühstück und Mittagessen.
- **Leitungswasser**, wo es trinkbar ist.

## Vorsicht

Sehr billige Angebote genau prüfen: Sind alle Gebühren enthalten? Ist der Anbieter seriös? Bei Pauschalreisen sind Kunden besser geschützt als bei einzeln gebuchten Leistungen.`,
    faq: [
      ["Wann ist Urlaub am günstigsten?", "Meist in der Nebensaison außerhalb der Schulferien und Feiertage."],
      ["Ist eine Pauschalreise sicherer?", "Pauschalreisende haben in der EU besondere Rechte, etwa bei Insolvenz des Veranstalters oder Mängeln."],
    ],
    sources: [VZ, AK],
  },
  {
    path: "urlaub-reisen/reiseplanung/reiseversicherung",
    description: "Reiseversicherung verstehen: Auslandsreisekranken-, Reiserücktritts- und Gepäckversicherung – was wirklich sinnvoll ist und worauf du achten solltest.",
    markdown: `Vor jeder Reise stellt sich die Frage: Welche **Reiseversicherung** brauche ich? Nicht jede ist sinnvoll.

## Auslandsreisekrankenversicherung – sehr wichtig

Die gesetzliche Krankenversicherung zahlt im Ausland oft nur eingeschränkt – und **Rücktransporte** in der Regel nicht. Eine **Auslandsreisekrankenversicherung** ist günstig und deckt Behandlungskosten und medizinisch sinnvollen Rücktransport. Viele Experten empfehlen sie für jede Auslandsreise.

**Tipp:** Jahrespolicen lohnen sich oft schon ab einer Reise pro Jahr. Manche Kreditkarten enthalten Versicherungsschutz – Bedingungen genau prüfen.

## Reiserücktrittsversicherung – je nach Reise

Sie zahlt Stornokosten, wenn du die Reise aus versicherten Gründen (z. B. Krankheit) nicht antreten kannst. Sinnvoll bei **teuren, lange im Voraus gebuchten** Reisen. Achte auf die versicherten Gründe und eventuelle Selbstbeteiligung.

## Reiseabbruchversicherung

Erstattet Kosten, wenn du die Reise vorzeitig beenden musst.

## Gepäckversicherung – oft verzichtbar

Viele Ausschlüsse und Bedingungen. Teilweise besteht Schutz über die Hausratversicherung.

## Worauf achten?

- Weltweit oder Europa?
- Höchstdauer pro Reise
- Vorerkrankungen
- Selbstbeteiligung
- Familienpolicen

Unabhängige Beratung bieten Verbraucherzentralen bzw. die Arbeiterkammer.`,
    faq: [
      ["Welche Reiseversicherung ist am wichtigsten?", "Die Auslandsreisekrankenversicherung, weil sie Behandlungen und Rücktransporte im Ausland absichert."],
      ["Gilt meine Krankenversicherung im EU-Ausland?", "Mit der Europäischen Krankenversicherungskarte gibt es Leistungen nach den Regeln des Gastlandes – Rücktransporte und private Behandlungen sind meist nicht abgedeckt."],
    ],
    sources: [VZ, AK],
  },
  {
    path: "urlaub-reisen/reiseplanung/roadtrip-planen",
    description: "Roadtrip planen: Route, Etappen, Übernachtungen, Fahrzeugcheck, Maut und Vignetten in Europa – mit Tipps für Roadtrips mit Kindern und Hund.",
    markdown: `Ein **Roadtrip** bedeutet Freiheit: anhalten, wo es schön ist, und flexibel bleiben. Mit guter Planung bleibt er entspannt.

## Route planen

- **Etappen** von höchstens drei bis vier Stunden Fahrzeit pro Tag – mit Kindern eher weniger.
- **Highlights** entlang der Strecke markieren.
- **Puffertage** für spontane Stopps.

## Übernachtungen

- In der Hauptsaison **vorab buchen**.
- In der Nebensaison spontan möglich.
- Campingplätze für Wohnmobil oder Zelt.

## Fahrzeug-Check vor der Abfahrt

- **Reifendruck** und Profil (siehe „Reifendruck prüfen“)
- Öl, Kühlwasser, Scheibenwischwasser
- Licht und Bremsen
- **Pflichtausstattung** des Reiselandes (Warnwesten, Warndreieck, Verbandskasten – teils mehr)

## Maut und Vignetten

Viele Länder haben **Vignetten** (z. B. Österreich, Schweiz, Slowenien) oder **streckenbezogene Maut** (z. B. Italien, Frankreich, Kroatien). Informiere dich vorab – Strafen können hoch sein.

## Kosten

Mit unserem **Spritkosten-Rechner** schätzt du die Treibstoffkosten. Dazu kommen Maut, Parken und Übernachtungen.

## Mit Kindern und Hund

Regelmäßige Pausen an Spielplätzen und Hundewiesen, Hörspiele und Snacks. Mehr unter „Urlaub mit Kleinkind“ und „Urlaub mit Hund planen“.`,
    faq: [
      ["Wie viele Stunden sollte man pro Tag fahren?", "Für einen entspannten Roadtrip etwa drei bis vier Stunden, mit Kindern eher weniger."],
      ["Welche Länder haben eine Vignette?", "Zum Beispiel Österreich, die Schweiz und Slowenien. Andere Länder erheben Maut pro Strecke."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "urlaub-reisen/reiseplanung/reise-apps",
    description: "Reise-Apps: nützliche Apps für Navigation, Offline-Karten, Übersetzung, Bahn, Wetter, Sicherheit und Reiseplanung – plus Tipps zu Datenschutz und Roaming.",
    markdown: `Das Smartphone ist im Urlaub Reiseführer, Karte und Dolmetscher zugleich. Diese **App-Kategorien** sind besonders nützlich.

## Navigation und Karten

- **Kartendienste** mit Navigation für Auto, Rad und Fußwege
- **Offline-Karten** herunterladen – spart mobile Daten und funktioniert ohne Netz
- Spezielle **Wander-Apps** mit Höhenprofilen

## Öffentlicher Verkehr

- Apps der **Bahngesellschaften** (z. B. DB, ÖBB, SBB) für Tickets und Echtzeitinfos
- Nahverkehrs-Apps der Städte

## Übersetzung

- **Übersetzungs-Apps** mit Kamerafunktion für Speisekarten und Schilder
- Offline-Sprachpakete herunterladen

## Sicherheit

- Die App **„Sicher reisen“** des Auswärtigen Amts (Deutschland) bzw. die **Auslandsservice-App** des Außenministeriums (Österreich) mit Reisehinweisen.
- **Notrufnummern** des Landes speichern (europaweit 112).

## Wetter

Eine zuverlässige Wetter-App mit Unwetterwarnungen – besonders in den Bergen.

## Organisation

- Buchungsbestätigungen gesammelt in einer App oder Notiz
- Gemeinsame Reisekosten-Apps für Gruppen

## Tipps

- **Roaming:** In der EU gilt „Roam like at home“ – außerhalb der EU können hohe Kosten entstehen.
- **Akku:** Powerbank mitnehmen.
- **Datenschutz:** Standortfreigaben prüfen.`,
    faq: [
      ["Fallen in der EU Roaminggebühren an?", "Innerhalb der EU gilt in der Regel „Roam like at home“. Außerhalb der EU, auch in der Schweiz, können Kosten anfallen."],
      ["Wie nutze ich Karten ohne Internet?", "In vielen Karten-Apps lassen sich Gebiete vorab offline herunterladen."],
    ],
    sources: [AA, BMEIA],
  },

  /* ================= Unterkünfte ================= */
  {
    path: "urlaub-reisen/unterkuenfte/hotel-finden",
    description: "Hotel finden: Lage, Bewertungen richtig lesen, Stornobedingungen, Direktbuchung vs. Buchungsportal und Warnsignale für Betrug bei Unterkünften.",
    markdown: `Die Wahl des Hotels kann einen Urlaub prägen. So findest du eine passende Unterkunft.

## 1. Lage zuerst

Was willst du erleben? Strand, Altstadt, Natur? Eine gute Lage spart Zeit und Fahrtkosten. Prüfe die Lage auf einer Karte und die Anbindung an öffentliche Verkehrsmittel.

## 2. Bewertungen richtig lesen

- **Viele Bewertungen** sind aussagekräftiger als wenige.
- **Aktuelle Bewertungen** zählen mehr als alte.
- **Kritik genau lesen:** Ist sie für dich relevant (z. B. Lärm, Sauberkeit)?
- **Extreme Bewertungen** mit Vorsicht betrachten.

## 3. Ausstattung

WLAN, Frühstück, Parkplatz, Klimaanlage, Familienzimmer, Barrierefreiheit – was ist dir wichtig?

## 4. Preis und Bedingungen

- **Gesamtpreis** inklusive Steuern, Ortstaxe und Gebühren vergleichen.
- **Stornobedingungen** beachten: Flexible Tarife kosten oft etwas mehr.
- **Direktbuchung beim Hotel** kann Vorteile haben (z. B. Upgrades, Flexibilität) – vergleichen lohnt sich.

## Betrug vermeiden

- Auf bekannten Plattformen oder direkt beim Hotel buchen.
- **Nie** außerhalb der Plattform per Überweisung zahlen, wenn ein Anbieter darum bittet.
- Bei Nachrichten mit Zahlungsaufforderung und Zeitdruck skeptisch sein.

Ferienwohnung oder Hotel? Siehe „Ferienwohnung oder Hotel“.`,
    faq: [
      ["Ist Direktbuchung beim Hotel günstiger?", "Manchmal. Hotels bieten teils eigene Vorteile. Ein Vergleich mit Buchungsportalen lohnt sich."],
      ["Woran erkenne ich Buchungsbetrug?", "An Aufforderungen, außerhalb der Plattform zu zahlen, Zeitdruck und ungewöhnlichen Zahlungswegen."],
    ],
    sources: [VZ, { title: "Watchlist Internet – Betrug bei Unterkünften", url: "https://www.watchlist-internet.at/" }],
  },
  {
    path: "urlaub-reisen/unterkuenfte/ferienwohnung-oder-hotel",
    description: "Ferienwohnung oder Hotel? Vor- und Nachteile im Vergleich – Platz, Kosten, Service, Flexibilität und welche Unterkunft zu Familien, Paaren und Gruppen passt.",
    markdown: `Beide Unterkunftsarten haben ihre Stärken. Die richtige Wahl hängt davon ab, wie du Urlaub machst.

## Für eine Ferienwohnung spricht

- **Mehr Platz** und oft getrennte Schlafzimmer
- **Eigene Küche** – selbst kochen spart Geld
- **Flexibilität:** keine festen Essenszeiten
- **Ideal für Familien und Gruppen**
- Oft **Waschmaschine** und Balkon oder Garten

## Für ein Hotel spricht

- **Service:** Reinigung, Rezeption, Frühstück
- **Kein Haushalt** im Urlaub
- **Extras:** Pool, Wellness, Kinderbetreuung
- **Kurze Aufenthalte** ohne Mindestaufenthalt
- **Hilfe bei Problemen** rund um die Uhr

## Kosten

Für längere Aufenthalte und größere Gruppen ist eine Ferienwohnung oft günstiger. Achte auf **Endreinigung**, **Kaution** und **Nebenkosten**.

## Unsere Faustregel

- **Familie mit Kindern, eine Woche oder länger:** Ferienwohnung oder Familienhotel
- **Paar, Kurztrip in die Stadt:** Hotel
- **Gruppe:** Ferienhaus

Mehr zur Hotelsuche unter „Hotel finden“.`,
    faq: [
      ["Ist eine Ferienwohnung günstiger als ein Hotel?", "Bei längeren Aufenthalten und mehreren Personen oft ja, besonders wenn ihr selbst kocht. Endreinigung und Gebühren einrechnen."],
      ["Was ist bei Ferienwohnungen zu beachten?", "Endreinigung, Kaution, Mindestaufenthalt, Check-in-Regeln und ob Bettwäsche und Handtücher inklusive sind."],
    ],
    comparison: {
      title: "Ferienwohnung und Hotel im Vergleich",
      columns: ["Ferienwohnung", "Hotel"],
      rows: [
        { label: "Platz", values: ["meist mehr", "meist weniger"] },
        { label: "Selbst kochen", values: ["ja", "selten"] },
        { label: "Service", values: ["wenig", "viel"] },
        { label: "Ideal für", values: ["Familien, Gruppen, längere Aufenthalte", "Kurztrips, Paare, Erholung ohne Haushalt"] },
        { label: "Zusatzkosten", values: ["Endreinigung, Kaution", "Frühstück, Parken, Ortstaxe"] },
      ],
    },
  },
  {
    path: "urlaub-reisen/unterkuenfte/camping-fuer-einsteiger",
    description: "Camping für Einsteiger: Zelt, Wohnwagen oder Wohnmobil, Ausrüstung, Campingplatz finden, Regeln zum Wildcampen und Tipps für das erste Mal.",
    markdown: `Camping ist Urlaub nah an der Natur – und für viele Familien eine günstige Alternative. So gelingt der Einstieg.

## Welche Campingart passt?

- **Zelt:** günstig und naturnah, ideal für den Einstieg.
- **Wohnwagen:** mehr Komfort, braucht ein passendes Zugfahrzeug.
- **Wohnmobil:** flexibel und komfortabel – zum Ausprobieren mieten.
- **Glamping und Mobilheime:** Camping-Feeling mit festem Dach.

## Grundausstattung (Zelt)

- Zelt, Isomatten oder Luftmatratzen, Schlafsäcke passend zur Temperatur
- Stirnlampe
- Campingkocher, Geschirr, Kühlbox
- Campingstühle und Tisch
- Erste-Hilfe-Set, Mückenschutz

Tipp: Ausrüstung zuerst **leihen oder im Garten testen**.

## Campingplatz finden

- Lage, Sanitäranlagen, Schatten, Strom
- Familienfreundlichkeit, Hundeerlaubnis
- In der Hauptsaison **reservieren**

## Wildcampen

In Deutschland und Österreich ist **Wildcampen meist verboten** oder stark eingeschränkt; Regeln unterscheiden sich nach Bundesland und Gemeinde. In Nationalparks und Naturschutzgebieten gelten strenge Verbote. Nutze offizielle Plätze.

## Camping-Knigge

Ruhezeiten einhalten, Platz sauber hinterlassen, Müll trennen, Rücksicht auf Nachbarn.

## Erstes Mal

Nicht zu weit wegfahren, nur ein bis zwei Nächte, und bei gutem Wetter starten.`,
    faq: [
      ["Ist Wildcampen in Österreich erlaubt?", "In der Regel nicht bzw. nur sehr eingeschränkt – die Regeln unterscheiden sich nach Bundesland und Gemeinde. Offizielle Campingplätze sind die sichere Wahl."],
      ["Was brauche ich fürs erste Mal Zelten?", "Zelt, Isomatte, passenden Schlafsack, Stirnlampe, einfachen Kocher und Geschirr. Vieles kann man leihen."],
    ],
    sources: [ADAC, OEAMTC],
  },

  /* ================= Autos & Mobilität ================= */
  {
    path: "autos-mobilitaet/fahrzeugportraets/klassiker",
    description: "Auto-Klassiker: Was Oldtimer und Youngtimer sind, H-Kennzeichen und historische Zulassung, Kauf, Pflege und Kosten eines klassischen Autos.",
    markdown: `Klassische Autos wecken Erinnerungen und Leidenschaft. Wer mit dem Gedanken an einen **Oldtimer** oder **Youngtimer** spielt, sollte ein paar Grundlagen kennen.

## Oldtimer und Youngtimer

- **Youngtimer:** meist Fahrzeuge, die rund 20 bis 30 Jahre alt sind – noch alltagstauglich, oft günstiger.
- **Oldtimer:** in Deutschland in der Regel ab **30 Jahren** und mit gutem, weitgehend originalem Zustand.

## H-Kennzeichen (Deutschland)

Fahrzeuge ab 30 Jahren können mit einem **Oldtimer-Gutachten** ein **H-Kennzeichen** bekommen. Vorteile: pauschale Kfz-Steuer und Einfahrt in Umweltzonen. Voraussetzung ist ein guter, weitgehend originaler Zustand.

## Historische Fahrzeuge in Österreich

In Österreich gibt es die Eintragung als **historisches Fahrzeug** mit eigenen Regeln, u. a. zur Mindestalter und zu einer begrenzten Zahl an Fahrtagen pro Jahr. Details kennen ÖAMTC und Oldtimerclubs.

## Kauf

- **Rost** ist der größte Feind – Schweller, Radläufe, Unterboden prüfen.
- **Ersatzteilversorgung** für das Modell klären.
- **Gutachten** eines Sachverständigen einholen.
- **Historie** und Belege prüfen.

## Kosten

Neben dem Kaufpreis: Werkstatt, Ersatzteile, Garage, spezielle Oldtimerversicherung.

## Pflege

Trocken unterstellen, regelmäßig bewegen, Flüssigkeiten prüfen, im Winter oft abgemeldet bzw. mit Saisonkennzeichen.`,
    faq: [
      ["Ab wann ist ein Auto ein Oldtimer?", "In Deutschland in der Regel ab 30 Jahren – für das H-Kennzeichen braucht es zusätzlich ein Gutachten über den guten, originalen Zustand."],
      ["Was bringt ein H-Kennzeichen?", "Eine pauschale Kfz-Steuer und freie Fahrt in Umweltzonen."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/marken-modelle/automarken-im-ueberblick",
    description: "Automarken im Überblick: deutsche, europäische, asiatische und amerikanische Hersteller, Konzerne hinter den Marken und worauf es bei der Markenwahl ankommt.",
    markdown: `Viele Automarken gehören zu großen Konzernen und teilen sich Technik. Ein Überblick hilft beim Einordnen.

## Deutsche Hersteller und Konzerne

- **Volkswagen-Konzern:** u. a. Volkswagen, Audi, Škoda, Seat/Cupra, Porsche.
- **BMW Group:** BMW, Mini, Rolls-Royce.
- **Mercedes-Benz Group:** Mercedes-Benz, Mercedes-AMG, Mercedes-Maybach.

## Europäische Hersteller

- **Stellantis:** u. a. Peugeot, Citroën, Opel, Fiat, Jeep, Alfa Romeo.
- **Renault-Gruppe:** Renault, Dacia, Alpine.
- **Volvo Cars** (Schweden).

## Asiatische Hersteller

- **Toyota** (mit Lexus), **Honda**, **Mazda**, **Nissan**, **Suzuki**, **Subaru** (Japan)
- **Hyundai** und **Kia** (Südkorea)
- Wachsende Zahl **chinesischer Marken** in Europa, besonders bei Elektroautos

## Amerikanische Hersteller

**Ford** und **Tesla** sind in Europa stark vertreten.

## Worauf es bei der Markenwahl ankommt

- **Zuverlässigkeit:** Pannenstatistiken und Tests geben Hinweise.
- **Werkstattnetz** in deiner Nähe.
- **Garantie** – manche Hersteller bieten längere Garantien.
- **Wertverlust.**
- **Bedienkonzept und Software.**

Wichtiger als die Marke ist oft das konkrete Modell und seine Ausstattung – mehr unter „Modellvergleiche“ und „Ausstattung vergleichen“.`,
    faq: [
      ["Welche Marken gehören zum VW-Konzern?", "Unter anderem Volkswagen, Audi, Škoda, Seat/Cupra und Porsche."],
      ["Welche Automarke ist am zuverlässigsten?", "Das variiert nach Modell und Jahrgang. Pannenstatistiken von Automobilclubs und Tests geben gute Hinweise."],
    ],
    sources: [ADAC],
  },
  {
    path: "autos-mobilitaet/marken-modelle/modellvergleiche",
    description: "Modellvergleiche richtig machen: Kriterien von Platz bis Kosten, Testberichte lesen, Probefahrt-Checkliste und warum die Gesamtkosten entscheiden.",
    markdown: `Zwei Autos sehen auf dem Papier ähnlich aus – im Alltag unterscheiden sie sich oft deutlich. So vergleichst du Modelle sinnvoll.

## Die wichtigsten Kriterien

1. **Platz:** Innenraum, Kofferraum, Kindersitze, Anhängelast.
2. **Antrieb:** Verbrenner, Hybrid, Plug-in-Hybrid oder Elektro – siehe „Elektro, Hybrid oder Verbrenner“.
3. **Verbrauch** bzw. Reichweite im Alltag.
4. **Sicherheit:** Euro-NCAP-Ergebnisse und Assistenzsysteme.
5. **Zuverlässigkeit:** Pannenstatistiken, Rückrufe.
6. **Bedienung:** Touchscreen vs. Tasten, Software.
7. **Gesamtkosten:** Kaufpreis, Versicherung, Steuer, Wartung, Wertverlust.

## Testberichte lesen

- **Mehrere Quellen** vergleichen.
- **Alltagstests** sind aussagekräftiger als reine Datenblätter.
- Auf die **getestete Motorisierung und Ausstattung** achten.

## Probefahrt-Checkliste

- Sitzposition und Übersicht
- Ein- und Ausstieg
- Kindersitz einbauen
- Kofferraum mit eigenem Gepäck testen
- Bedienung während der Fahrt
- Geräusche bei Autobahntempo

## Gesamtkosten berechnen

Mit unserem Betriebskosten-Rechner kannst du zwei Fahrzeuge direkt vergleichen. Mehr unter „Kosten pro Kilometer“.`,
    faq: [
      ["Wo finde ich unabhängige Crashtests?", "Bei Euro NCAP, das Neuwagen in Crashtests und Assistenzsystem-Tests bewertet."],
      ["Wie lange sollte eine Probefahrt dauern?", "Mindestens eine halbe Stunde, möglichst mit Stadt, Landstraße und Autobahn."],
    ],
    sources: [{ title: "Euro NCAP", url: "https://www.euroncap.com/de/" }, ADAC],
  },
  {
    path: "autos-mobilitaet/antriebe/plug-in-hybrid-erklaert",
    description: "Plug-in-Hybrid erklärt: Wie PHEVs funktionieren, elektrische Reichweite, Laden, Verbrauch in der Praxis und für wen sich ein Plug-in-Hybrid lohnt.",
    markdown: `Ein **Plug-in-Hybrid** (PHEV) kombiniert einen Verbrennungsmotor mit einem Elektromotor und einer Batterie, die an der Steckdose geladen werden kann.

## So funktioniert er

- **Elektrisch fahren:** Kürzere Strecken sind rein elektrisch möglich.
- **Hybridbetrieb:** Ist die Batterie leer, arbeitet das Auto wie ein normaler Hybrid.
- **Laden:** an der Haushaltssteckdose, Wallbox oder öffentlichen Ladesäule.

## Elektrische Reichweite

Je nach Modell oft einige Dutzend Kilometer, bei neueren Modellen teils deutlich mehr (Herstellerangaben nach WLTP). Im Winter und bei hohem Tempo sinkt die Reichweite.

## Verbrauch: Theorie und Praxis

Die offiziellen Verbrauchswerte sind sehr niedrig, weil sie einen hohen elektrischen Anteil annehmen. **In der Praxis** hängt alles davon ab, wie oft geladen wird. Untersuchungen zeigen: Wird selten geladen, verbrauchen Plug-in-Hybride oft deutlich mehr als angegeben – das zusätzliche Gewicht der Batterie kostet Sprit.

## Für wen lohnt er sich?

- Wer **zu Hause oder bei der Arbeit laden** kann
- Wer viele **kurze Strecken** fährt, aber gelegentlich lange Reisen macht
- Wer noch nicht ganz auf ein Elektroauto umsteigen möchte

## Für wen eher nicht?

- Wer **kaum laden** kann
- Wer fast nur **Langstrecke** fährt

Einen Vergleich aller Antriebe findest du unter „Elektro, Hybrid oder Verbrenner“, Infos zum Laden unter „Elektroauto zu Hause laden“.`,
    faq: [
      ["Muss man einen Plug-in-Hybrid laden?", "Fahren kann er auch ohne Laden. Sinnvoll und sparsam ist er aber nur, wenn er regelmäßig geladen wird."],
      ["Was ist der Unterschied zum normalen Hybrid?", "Ein normaler (Voll-)Hybrid lädt seine kleine Batterie nur beim Fahren und Bremsen. Ein Plug-in-Hybrid hat eine größere Batterie, die extern geladen wird."],
    ],
    sources: [ADAC, { title: "Umweltbundesamt – Plug-in-Hybride", url: "https://www.umweltbundesamt.de/" }],
  },
  {
    path: "autos-mobilitaet/antriebe/wasserstoffauto",
    description: "Wasserstoffauto erklärt: Brennstoffzelle, Tanken, Reichweite, Tankstellennetz, Kosten und Effizienz im Vergleich zum Elektroauto.",
    markdown: `Ein **Wasserstoffauto** ist meist ein **Brennstoffzellenfahrzeug** (FCEV). Es fährt elektrisch – den Strom erzeugt es aber an Bord aus Wasserstoff.

## So funktioniert es

1. Wasserstoff wird in **Hochdrucktanks** gespeichert.
2. In der **Brennstoffzelle** reagiert er mit Sauerstoff aus der Luft.
3. Dabei entsteht **Strom** für den Elektromotor – und als „Abgas“ nur **Wasserdampf**.

## Vorteile

- **Kurze Tankzeit** – ähnlich wie beim Verbrenner, wenige Minuten.
- **Lokal emissionsfrei.**
- Gute **Reichweiten**.

## Nachteile

- **Sehr wenige Tankstellen:** Das Netz ist in Deutschland und Österreich klein, einige Stationen wurden in den letzten Jahren sogar geschlossen.
- **Wenig Modellauswahl** für Privatkunden.
- **Effizienz:** Bei der Herstellung, dem Transport und der Rückverwandlung von Wasserstoff in Strom geht viel Energie verloren. Ein batterieelektrisches Auto nutzt Strom deutlich effizienter.
- **Herkunft des Wasserstoffs:** Klimafreundlich ist er nur, wenn er mit erneuerbarem Strom erzeugt wird („grüner Wasserstoff“).

## Zukunft

Viele Fachleute sehen Wasserstoff eher bei **schweren Nutzfahrzeugen**, in der Industrie, im Schiffs- und Flugverkehr als bei Pkw. Für Privatautos setzen die meisten Hersteller vor allem auf Batterieantriebe.

Den Vergleich der Antriebe findest du unter „Elektro, Hybrid oder Verbrenner“.`,
    faq: [
      ["Ist ein Wasserstoffauto ein Elektroauto?", "Ja, es fährt mit einem Elektromotor. Den Strom erzeugt eine Brennstoffzelle an Bord aus Wasserstoff."],
      ["Wie viele Wasserstofftankstellen gibt es?", "In Deutschland und Österreich nur wenige. Prüfe vor dem Kauf, ob es in deiner Nähe eine gibt."],
    ],
    sources: [ADAC, { title: "Umweltbundesamt – Wasserstoff", url: "https://www.umweltbundesamt.de/" }],
  },
  {
    path: "autos-mobilitaet/autotechnik/automatikgetriebe",
    description: "Automatikgetriebe erklärt: Wandlerautomatik, Doppelkupplungsgetriebe, CVT und Elektroauto – Unterschiede, Vor- und Nachteile und richtige Bedienung.",
    markdown: `Immer mehr Autos fahren mit **Automatik**. Doch Automatik ist nicht gleich Automatik.

## Die wichtigsten Bauarten

- **Wandlerautomatik:** Ein hydrodynamischer Drehmomentwandler sorgt für sanftes Anfahren. Moderne Wandler haben viele Gänge und schalten komfortabel.
- **Doppelkupplungsgetriebe (DSG/DCT):** Zwei Kupplungen bereiten den nächsten Gang vor – sehr schnelle Gangwechsel, effizient. Beim Rangieren manchmal etwas ruckelig.
- **Stufenloses Getriebe (CVT):** Keine festen Gänge, sondern stufenlose Übersetzung. Häufig in Hybriden. Bei starker Beschleunigung kann der Motor gleichmäßig hochdrehen („Gummiband-Effekt“).
- **Automatisiertes Schaltgetriebe:** Ein Schaltgetriebe, bei dem ein Computer schaltet – heute selten.

## Elektroautos

Elektroautos haben meist **nur einen Gang**. Der Elektromotor liefert in einem großen Drehzahlbereich Kraft – ein Getriebe mit vielen Gängen ist nicht nötig.

## Bedienung

- **P** = Parken, **R** = Rückwärts, **N** = Neutral, **D** = Fahren
- Beim Anhalten im Stau auf der Bremse bleiben – nicht jedes Mal in N schalten.
- Erst nach dem vollständigen Stillstand in P schalten.

## Führerschein

In Deutschland und Österreich gibt es Regelungen, wie man mit Automatik-Fahrstunden auch Schaltwagen fahren darf – oft über zusätzliche Schaltstunden bzw. eine Testfahrt. Frag deine Fahrschule nach den aktuellen Regeln.`,
    faq: [
      ["Was ist besser: DSG oder Wandler?", "Beide sind ausgereift. Doppelkupplungen schalten sehr schnell, Wandler gelten als besonders komfortabel. Es kommt auf Modell und Vorlieben an."],
      ["Haben Elektroautos ein Getriebe?", "Meist nur ein einstufiges Untersetzungsgetriebe – also im Grunde einen Gang."],
    ],
    sources: [ADAC],
  },
  {
    path: "autos-mobilitaet/autotechnik/bremsen",
    description: "Bremsen am Auto: Scheibenbremse, Trommelbremse, ABS und Rekuperation erklärt – Warnzeichen für Verschleiß, Bremsflüssigkeit und Wartung.",
    markdown: `Die Bremsen sind das wichtigste Sicherheitssystem am Auto. Wer die Grundlagen kennt, erkennt Probleme früh.

## Bauarten

- **Scheibenbremse:** Bremsbeläge pressen auf eine rotierende Bremsscheibe. Standard an der Vorderachse, oft auch hinten.
- **Trommelbremse:** Bremsbacken drücken von innen gegen eine Trommel. Noch an der Hinterachse mancher Fahrzeuge – auch bei einigen Elektroautos, weil sie dort wenig genutzt wird und weniger korrodiert.

## Hydraulik und Bremsflüssigkeit

Die Kraft vom Pedal wird über **Bremsflüssigkeit** übertragen. Sie zieht mit der Zeit Wasser an, wodurch der Siedepunkt sinkt. Hersteller schreiben deshalb einen **regelmäßigen Wechsel** vor – oft alle zwei Jahre.

## ABS und ESP

- **ABS** verhindert das Blockieren der Räder – das Auto bleibt lenkbar.
- **ESP** stabilisiert das Fahrzeug durch gezieltes Abbremsen einzelner Räder.

## Rekuperation

Elektro- und Hybridautos bremsen oft mit dem **Elektromotor** und gewinnen dabei Energie zurück. Die mechanischen Bremsen werden weniger genutzt – können dafür aber rosten.

## Warnzeichen

- **Quietschen oder Schleifen**
- **Längerer Bremsweg** oder weiches Pedal
- **Vibrationen** beim Bremsen
- **Ziehen** zu einer Seite
- **Warnleuchte** im Cockpit

Bei diesen Anzeichen sofort in die Werkstatt. Bremsenarbeiten gehören in Fachhände.`,
    faq: [
      ["Wie oft muss die Bremsflüssigkeit gewechselt werden?", "Viele Hersteller schreiben einen Wechsel etwa alle zwei Jahre vor. Maßgeblich ist das Serviceheft."],
      ["Warum rosten Bremsen bei Elektroautos?", "Weil sie durch die Rekuperation seltener genutzt werden. Gelegentliches kräftiges Bremsen hilft, die Scheiben sauber zu halten."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/autotechnik/assistenzsysteme",
    description: "Fahrassistenzsysteme erklärt: Notbremsassistent, Spurhalteassistent, Tempomat, Müdigkeitswarner und welche Systeme in der EU für Neuwagen Pflicht sind.",
    markdown: `Moderne Autos haben zahlreiche **Assistenzsysteme**. Sie können Unfälle verhindern – ersetzen aber nie die Aufmerksamkeit am Steuer.

## Pflicht in der EU

Mit der EU-Verordnung über die allgemeine Fahrzeugsicherheit sind für **neu zugelassene Pkw seit Juli 2024** unter anderem vorgeschrieben:
- **Intelligenter Geschwindigkeitsassistent** (warnt bei Tempoüberschreitung)
- **Notbremsassistent**
- **Notfall-Spurhalteassistent**
- **Müdigkeits- und Aufmerksamkeitswarner**
- **Rückfahrassistent** (Kamera oder Sensoren)
- **Ereignisdatenspeicher**
- Vorrüstung für alkoholempfindliche Wegfahrsperren

## Weitere verbreitete Systeme

- **Adaptiver Tempomat (ACC):** hält Abstand zum Vordermann.
- **Spurhalte- und Spurführungsassistent.**
- **Totwinkelwarner.**
- **Verkehrszeichenerkennung.**
- **Einparkassistent.**
- **Fernlichtassistent.**

## Grenzen

- Sensoren können bei **Regen, Schnee oder Schmutz** eingeschränkt sein.
- Systeme erkennen nicht jede Situation.
- **Fahrer bleibt verantwortlich** – auch beim Fahren mit Assistenzsystemen.

## Tipps

- Systeme in der Bedienungsanleitung verstehen.
- Kameras und Sensoren sauber halten.
- Nach Unfällen oder Scheibentausch Kalibrierung prüfen lassen.

Was bei höheren Automatisierungsstufen gilt, erklärt unser Ratgeber „Autonomes Fahren“.`,
    faq: [
      ["Welche Assistenzsysteme sind in der EU Pflicht?", "Für Neuzulassungen seit Juli 2024 unter anderem Notbremsassistent, Notfall-Spurhalteassistent, intelligenter Geschwindigkeitsassistent, Müdigkeitswarner und Rückfahrassistent."],
      ["Kann ich den Geschwindigkeitsassistenten ausschalten?", "In der Regel ja, er ist bei jedem Start aber wieder aktiv."],
    ],
    sources: [EU_GSR, ADAC],
  },
  {
    path: "autos-mobilitaet/pflege/auto-waschen",
    description: "Auto waschen: Waschanlage, SB-Box oder Handwäsche – Vor- und Nachteile, richtige Reihenfolge, Lackschutz und was beim Waschen zu Hause erlaubt ist.",
    markdown: `Regelmäßiges Waschen schützt den Lack vor Vogelkot, Streusalz und Insekten. Welche Methode passt zu dir?

## Waschmöglichkeiten

- **Waschstraße / Portalanlage:** schnell und bequem. Moderne Anlagen mit Textilbürsten sind lackschonend.
- **SB-Waschbox:** günstig, gründlich, du bestimmst selbst.
- **Handwäsche zu Hause:** In vielen Gemeinden in Deutschland und Österreich **nicht erlaubt** oder eingeschränkt, weil Öl- und Schmutzreste ins Grundwasser gelangen können. Informiere dich vor Ort.

## Richtige Reihenfolge (SB-Box)

1. **Vorwäsche:** Grobschmutz mit Hochdruck und Vorwaschmittel lösen – Abstand zum Lack halten.
2. **Felgen** separat reinigen.
3. **Hauptwäsche** von oben nach unten.
4. **Gründlich abspülen.**
5. **Wachs / Glanzspülung** als Schutz.
6. **Trocknen** mit Mikrofasertuch gegen Wasserflecken.

## Tipps

- **Vogelkot und Insekten** schnell entfernen – sie greifen den Lack an.
- **Im Winter** häufiger waschen, besonders den Unterboden, wegen Streusalz.
- **Nicht in praller Sonne** waschen.
- **Waschbürsten in SB-Boxen** vorher ausspülen – Sandkörner verkratzen den Lack.

## Lackschutz

Wachs oder Versiegelung ein- bis zweimal im Jahr schützt den Lack und erleichtert die Reinigung. Innenreinigung findest du unter „Innenraum reinigen“, Winterpflege unter „Autopflege im Winter“.`,
    faq: [
      ["Darf ich mein Auto zu Hause waschen?", "In vielen Gemeinden ist das verboten oder eingeschränkt. Informiere dich bei deiner Gemeinde."],
      ["Schaden Waschanlagen dem Lack?", "Moderne Anlagen mit Textil- oder Schaumstoffbürsten gelten als schonend. Vorher grobe Verschmutzungen abspülen."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/pflege/innenraum-reinigen",
    description: "Innenraum reinigen: Schritt-für-Schritt-Anleitung für Saugen, Polster, Kunststoff, Scheiben und Gerüche – mit Hausmitteln und den richtigen Reinigern.",
    markdown: `Ein sauberer Innenraum macht das Fahren angenehmer – und erhält den Wert des Autos. So gehst du vor.

## Schritt für Schritt

1. **Ausräumen:** Müll, Fußmatten, lose Gegenstände.
2. **Saugen:** von oben nach unten – Sitze, Ritzen, Boden, Kofferraum. Fugendüse für enge Stellen.
3. **Fußmatten** ausklopfen bzw. waschen.
4. **Kunststoff und Armaturen** mit einem leicht feuchten Mikrofasertuch und mildem Reiniger abwischen. Bildschirme nur mit geeigneten Tüchern.
5. **Polster:** Flecken mit Polsterreiniger behandeln, nicht durchnässen.
6. **Leder:** Spezieller Lederreiniger und Pflege.
7. **Scheiben innen:** Glasreiniger und trockenes Mikrofasertuch – gegen Schlieren und beschlagene Scheiben.
8. **Lüften** und trocknen lassen.

## Gerüche entfernen

- Ursache finden und beseitigen (Essensreste, feuchte Matten).
- **Innenraumfilter** wechseln – er wird oft vergessen.
- Natron auf Polstern einwirken lassen und absaugen.
- Gut lüften.

## Tipps

- **Kleine Bürsten oder Pinsel** für Lüftungsschlitze.
- **Kindersitze** ausbauen und darunter reinigen.
- **Müllbeutel** im Auto schafft dauerhaft Ordnung.

## Häufigkeit

Grob monatlich saugen, gründliche Reinigung je nach Nutzung mehrmals im Jahr.`,
    faq: [
      ["Wie oft sollte man den Innenraumfilter wechseln?", "Meist im Rahmen der Inspektion – oft etwa einmal im Jahr. Maßgeblich sind die Herstellerangaben."],
      ["Wie bekomme ich beschlagene Scheiben weg?", "Scheiben innen gründlich reinigen, Innenraumfilter prüfen und feuchte Matten trocknen. Die Klimaanlage hilft beim Entfeuchten."],
    ],
    sources: [ADAC],
  },
  {
    path: "autos-mobilitaet/zubehoer/dachboxen",
    description: "Dachboxen: Größe und Volumen, Dachlast, Montage, Fahrverhalten, Höchstgeschwindigkeit und Alternativen wie Heckträger – Tipps für den Urlaub.",
    markdown: `Für Urlaub, Skitage oder Campingausflüge reicht der Kofferraum oft nicht. Eine **Dachbox** schafft zusätzlichen Platz.

## Größe und Volumen

- **Volumen** (in Litern) passend zum Gepäck – für Skier ist vor allem die **Länge** wichtig.
- **Öffnung** von beiden Seiten ist sehr praktisch.
- **Abschließbar** und mit Schnellbefestigung.

## Dachlast beachten

Jedes Auto hat eine **maximale Dachlast** (im Fahrzeugschein bzw. in der Bedienungsanleitung). Sie umfasst **Grundträger + Box + Inhalt**. Überladung gefährdet die Fahrsicherheit.

## Montage

1. Passende **Grundträger** (Dachträger) für das Fahrzeug.
2. Box mittig und fest montieren.
3. Vor jeder Fahrt den Sitz prüfen.

## Beladung

- **Leichtes** Gepäck in die Box, Schweres in den Kofferraum.
- Gleichmäßig verteilen und sichern.

## Fahren mit Dachbox

- **Höchstgeschwindigkeit** des Herstellers beachten – häufig wird **130 km/h** empfohlen.
- **Mehr Seitenwind-Empfindlichkeit** und längerer Bremsweg.
- **Höhere Durchfahrtshöhe** – Achtung bei Garagen und Parkhäusern!
- **Mehrverbrauch** – Box nach dem Urlaub abnehmen.

## Alternativen

- **Heckträger** auf der Anhängerkupplung (für Fahrräder oder Boxen)
- **Anhänger** für sehr viel Gepäck

Dachboxen kann man auch **mieten**, z. B. bei Automobilclubs oder im Fachhandel.`,
    faq: [
      ["Wie schnell darf man mit Dachbox fahren?", "Es gilt die Empfehlung des Box-Herstellers, häufig maximal 130 km/h."],
      ["Wo finde ich die maximale Dachlast?", "In der Bedienungsanleitung bzw. den Fahrzeugpapieren. Sie gilt für Träger, Box und Inhalt zusammen."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/sparen/guenstig-tanken",
    description: "Günstig tanken: die beste Tageszeit, Preis-Apps, Unterschiede zwischen Deutschland und Österreich, freie Tankstellen und Spritkosten-Rechner.",
    markdown: `Spritpreise schwanken stark – oft sogar mehrmals am Tag. Mit den richtigen Tricks sparst du bei jeder Tankfüllung.

## Die beste Tageszeit

- **Deutschland:** Spritpreise ändern sich viele Male am Tag. Auswertungen von Automobilclubs zeigen: Am **Abend** ist es meist am günstigsten, am Morgen am teuersten.
- **Österreich:** Tankstellen dürfen ihre Preise **nur einmal täglich, um 12 Uhr mittags, erhöhen** – Senkungen sind jederzeit möglich. Vor 12 Uhr ist es daher oft günstiger als direkt danach.

## Preis-Apps nutzen

- **Deutschland:** Apps auf Basis der Markttransparenzstelle für Kraftstoffe zeigen aktuelle Preise.
- **Österreich:** Der **Spritpreisrechner der E-Control** zeigt die günstigsten Tankstellen.

## Weitere Tipps

1. **Autobahntankstellen meiden** – sie sind meist deutlich teurer.
2. **Freie Tankstellen** vergleichen.
3. **Nicht für wenige Cent weit fahren** – der Umweg kostet auch Sprit.
4. **Tankrabatte** von Kundenkarten prüfen.
5. **Grenznah tanken** kann sich lohnen – Regeln zur Mitnahme von Kanistern beachten.

## Verbrauch senken

Der günstigste Liter ist der, den man nicht verbraucht – Tipps unter „Sprit sparen“.

## Spritkosten berechnen

Mit dem Rechner unten auf dieser Seite berechnest du die Kosten deiner Fahrt.`,
    faq: [
      ["Wann ist Tanken in Deutschland am günstigsten?", "Auswertungen zeigen, dass die Preise meist abends am niedrigsten und morgens am höchsten sind."],
      ["Wann ist Tanken in Österreich am günstigsten?", "Preiserhöhungen sind nur einmal täglich um 12 Uhr erlaubt. Vormittags ist es daher oft günstiger."],
    ],
    sources: [ADAC, ECONTROL, { title: "Bundeskartellamt – Markttransparenzstelle für Kraftstoffe", url: "https://www.bundeskartellamt.de/" }],
  },
  {
    path: "autos-mobilitaet/sparen/kfz-versicherung-sparen",
    description: "Kfz-Versicherung sparen: Haftpflicht, Teil- und Vollkasko, Schadenfreiheitsrabatt, Wechselstichtag, Werkstattbindung und weitere Spartipps.",
    markdown: `Die **Kfz-Versicherung** gehört zu den größten Fixkosten rund ums Auto. Wer vergleicht und clever wählt, kann jedes Jahr sparen.

## Die Versicherungsarten

- **Kfz-Haftpflicht:** Pflicht. Zahlt Schäden, die du anderen zufügst.
- **Teilkasko:** zusätzlich z. B. Diebstahl, Glasbruch, Wildunfall, Sturm, Hagel, Brand.
- **Vollkasko:** zusätzlich selbst verschuldete Schäden am eigenen Auto und Vandalismus. Sinnvoll vor allem bei neuen und wertvollen Autos.

## Spartipps

1. **Regelmäßig vergleichen.**
2. **Wechseltermin kennen:** In Deutschland laufen viele Verträge zum 1. Januar – gekündigt werden muss dann in der Regel bis zum **30. November**. In Österreich gelten andere Fristen.
3. **Selbstbeteiligung** wählen – senkt den Beitrag.
4. **Werkstattbindung** akzeptieren – oft günstiger.
5. **Fahrerkreis** einschränken.
6. **Kilometerleistung** realistisch angeben.
7. **Jährliche Zahlung** statt monatlich – oft günstiger.
8. **Vollkasko** bei älteren Autos überdenken.

## Schadenfreiheitsrabatt

In Deutschland sinkt der Beitrag mit jedem schadenfreien Jahr (Schadenfreiheitsklasse). Kleine Schäden selbst zu bezahlen kann sich lohnen – rechne nach. In Österreich gibt es mit dem **Bonus-Malus-System** ein ähnliches Prinzip.

## Achtung

Nicht nur auf den Preis schauen – Leistungen wie grobe Fahrlässigkeit, Neuwertentschädigung und Marderbiss-Folgeschäden vergleichen.`,
    faq: [
      ["Bis wann muss ich meine Kfz-Versicherung kündigen?", "In Deutschland bei Verträgen zum 1. Januar in der Regel bis zum 30. November. Prüfe deinen Vertrag; nach einem Schaden oder einer Beitragserhöhung gibt es Sonderkündigungsrechte."],
      ["Lohnt sich Vollkasko für ein altes Auto?", "Oft nicht, weil der Fahrzeugwert gering ist. Rechne Beitrag und möglichen Schaden gegeneinander."],
    ],
    sources: [VZ, AK],
  },
  {
    path: "autos-mobilitaet/fuehrerschein-verkehr/fahrstunden",
    description: "Fahrstunden: Ablauf der Fahrausbildung, Pflicht-Sonderfahrten in Deutschland, L17 und Mehrphasenausbildung in Österreich und Tipps, um Kosten zu sparen.",
    markdown: `Nach der Theorie geht es ans Steuer. So läuft die praktische Ausbildung ab – und so behältst du die Kosten im Griff.

## Deutschland: Klasse B

- **Übungsstunden:** keine feste Mindestanzahl – so viele, wie du brauchst.
- **Pflicht-Sonderfahrten:** je 45 Minuten
  - 5 Überlandfahrten
  - 4 Autobahnfahrten
  - 3 Nachtfahrten
- **Begleitetes Fahren ab 17 (BF17):** Nach bestandener Prüfung mit 17 darfst du mit eingetragenen Begleitpersonen fahren.

## Österreich: Klasse B

- **Ausbildung in der Fahrschule** mit festgelegten Inhalten
- **L17:** Ausbildungsfahrten mit Begleitperson schon vor dem 18. Geburtstag, kombiniert mit Fahrschulstunden
- **Mehrphasenausbildung** nach dem Führerschein: Perfektionsfahrten und ein Fahrsicherheitstraining innerhalb der ersten Monate

## Kosten sparen

1. **Theorie gründlich lernen** – siehe „Führerschein-Theorie lernen“.
2. **Regelmäßig fahren:** Lange Pausen kosten zusätzliche Stunden.
3. **Gut vorbereitet** in jede Stunde: Was wurde zuletzt geübt?
4. **Fahrschulen vergleichen:** Preise für Grundgebühr, Fahrstunden und Prüfung.
5. **Ehrliches Feedback** einholen, bevor du dich zur Prüfung anmeldest – eine wiederholte Prüfung kostet extra.

## Prüfungsangst

Ruhig atmen, Fehler nicht dramatisieren, nach Unsicherheiten fragen. Prüferinnen und Prüfer wollen sicheres Fahren sehen, nicht Perfektion.`,
    faq: [
      ["Wie viele Fahrstunden braucht man?", "Das ist individuell. In Deutschland sind 12 Sonderfahrten Pflicht, die Zahl der Übungsstunden hängt vom eigenen Lernfortschritt ab."],
      ["Was ist L17?", "In Österreich die Möglichkeit, schon vor dem 18. Geburtstag mit einer Begleitperson Ausbildungsfahrten zu machen."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/fuehrerschein-verkehr/mobilitaet-ohne-auto",
    description: "Mobilität ohne Auto: Öffis, Fahrrad, E-Bike, Carsharing und Mitfahrgelegenheiten – wie der Alltag ohne eigenes Auto gelingt und was es spart.",
    markdown: `Ein eigenes Auto kostet viel Geld – auch wenn es nur herumsteht. Für viele, besonders in Städten, ist ein Leben ohne Auto gut möglich.

## Die Bausteine

- **Öffentlicher Verkehr:** Bus, Bahn, Straßenbahn. Zeitkarten wie das **Deutschlandticket** oder das **KlimaTicket** in Österreich machen Pendeln planbar.
- **Fahrrad und E-Bike:** für Wege bis etwa 10–15 km oft die schnellste Lösung in der Stadt.
- **Lastenrad:** für Einkäufe und Kinder.
- **Carsharing:** Auto nur bei Bedarf – siehe „Carsharing“.
- **Mietwagen** für Urlaube.
- **Mitfahrgelegenheiten** und **Taxi** für Ausnahmen.

## Was es spart

Zu den Kosten eines eigenen Autos gehören Wertverlust, Versicherung, Steuer, Wartung, Reifen, Parken und Sprit. Mit unserem Betriebskosten-Rechner siehst du, was dein Auto wirklich kostet.

## Tipps für den Umstieg

1. **Testmonat:** Auto einen Monat stehen lassen und Alternativen ausprobieren.
2. **Wege analysieren:** Welche Strecken fährst du regelmäßig?
3. **Kombinieren:** Rad zum Bahnhof, Bahn zur Arbeit.
4. **Notfallplan:** Carsharing-Anmeldung für spontane Fahrten.

## Grenzen

Auf dem Land oder bei bestimmten Berufen und Lebenssituationen ist ein eigenes Auto oft nötig. Auch dort lassen sich aber einzelne Fahrten ersetzen.`,
    faq: [
      ["Was ist das KlimaTicket?", "Ein Jahresticket in Österreich für öffentliche Verkehrsmittel – österreichweit oder regional."],
      ["Lohnt sich Carsharing statt eigenem Auto?", "Für Menschen, die selten fahren, oft ja. Rechne deine Fahrten mit den Tarifen durch."],
    ],
    sources: [{ title: "KlimaTicket Österreich", url: "https://www.klimaticket.at/" }, { title: "Umweltbundesamt – Mobilität", url: "https://www.umweltbundesamt.de/" }],
  },
  {
    path: "autos-mobilitaet/zukunft/software-im-auto",
    description: "Software im Auto: Infotainment, Over-the-Air-Updates, digitale Zusatzfunktionen, Datenschutz und Cybersicherheit – was moderne Autos digital können.",
    markdown: `Moderne Autos sind rollende Computer. Software steuert heute vieles – vom Motor über Assistenzsysteme bis zum Navigationssystem.

## Infotainment

- **Navigation**, Musik, Telefon
- **Smartphone-Integration** über Apple CarPlay oder Android Auto
- **Sprachsteuerung**
- **Apps** und Streaming direkt im Auto

## Over-the-Air-Updates

Viele Fahrzeuge erhalten **Updates per Mobilfunk** – wie ein Smartphone. Damit lassen sich Fehler beheben, Funktionen verbessern und Sicherheitslücken schließen, ohne in die Werkstatt zu fahren.

## Funktionen auf Abruf

Manche Hersteller bieten Funktionen gegen Aufpreis oder im **Abo** an, die per Software freigeschaltet werden – etwa Komfort- oder Assistenzfunktionen. Prüfe vor dem Kauf, was dauerhaft enthalten ist.

## Datenschutz

Autos sammeln viele Daten: Standort, Fahrverhalten, Nutzungsdaten. Prüfe:
- Welche Daten werden gesammelt und übertragen?
- Was kannst du in den Einstellungen abschalten?
- Persönliche Daten (Telefonbuch, Ziele) vor Verkauf oder Mietwagenrückgabe **löschen**.

## Cybersicherheit

In der EU gelten Vorgaben zur Cybersicherheit und zu Software-Updates für neue Fahrzeugtypen (UN-Regelungen R155 und R156). Updates installieren ist wichtig.

## Zukunft

„Software-definierte Fahrzeuge“ werden über die Lebensdauer weiterentwickelt. Mehr zur Automatisierung unter „Autonomes Fahren“.`,
    faq: [
      ["Was sind Over-the-Air-Updates?", "Software-Updates, die das Auto über Mobilfunk erhält – ohne Werkstattbesuch."],
      ["Wie lösche ich meine Daten aus dem Auto?", "In den Einstellungen des Infotainments gibt es meist eine Funktion zum Zurücksetzen bzw. Löschen persönlicher Daten."],
    ],
    sources: [ADAC, { title: "UNECE – Regelungen zu Cybersicherheit und Software-Updates", url: "https://unece.org/" }],
  },
  {
    path: "autos-mobilitaet/zukunft/carsharing",
    description: "Carsharing erklärt: Free-Floating, stationsbasiert und privat – Kosten, Versicherung, Ablauf und für wen sich Carsharing statt eigenem Auto lohnt.",
    markdown: `Beim **Carsharing** teilen sich viele Menschen Autos. Man zahlt nur, wenn man fährt – Versicherung, Wartung und Reparaturen übernimmt der Anbieter.

## Die Modelle

- **Free-Floating:** Autos stehen im Stadtgebiet verteilt und werden per App gefunden und geöffnet. Abgestellt wird irgendwo im Geschäftsgebiet. Abrechnung meist pro Minute oder Kilometer.
- **Stationsbasiert:** Autos haben feste Standorte und werden vorab gebucht. Oft günstiger für längere Fahrten.
- **Privates Carsharing:** Privatleute vermieten ihr Auto über Plattformen.

## Kosten

- Anmeldegebühr (teils)
- Zeit- und/oder Kilometerpreis
- Pakete für Stunden oder Tage
- Selbstbeteiligung bei Schäden – teils gegen Aufpreis reduzierbar

## Für wen lohnt sich das?

- **Wenigfahrer** in Städten mit gutem Angebot
- Als Ergänzung zu ÖPNV und Fahrrad
- Für Einkäufe, Ausflüge und Transporte

Wie viel dein eigenes Auto kostet, kannst du mit unserem Betriebskosten-Rechner ermitteln und vergleichen.

## Ablauf

1. Registrieren, Führerschein verifizieren.
2. Auto in der App finden bzw. buchen.
3. Vor der Fahrt **Schäden prüfen und melden**.
4. Fahren, parken, beenden.

## Tipps

- Tarife vergleichen – Minutenpreise lohnen sich bei kurzen Fahrten, Pakete bei langen.
- Bedingungen zum Tanken/Laden und Parken beachten.
- Auf Sauberkeit und Rückgabezeit achten.`,
    faq: [
      ["Ist Carsharing versichert?", "Ja, die Autos sind über den Anbieter versichert. Bei Schäden gilt meist eine Selbstbeteiligung."],
      ["Ab welchem Alter darf man Carsharing nutzen?", "Das legt der Anbieter fest – oft gelten Mindestalter und Mindestdauer des Führerscheinbesitzes."],
    ],
    sources: [{ title: "Bundesverband CarSharing", url: "https://carsharing.de/" }],
  },
  {
    path: "autos-mobilitaet/autokauf/neuwagen-kaufen",
    description: "Neuwagen kaufen: Konfiguration, Rabatte, Tageszulassungen, Finanzierung, Lieferzeit und Übergabe – Checkliste für den Kauf eines neuen Autos.",
    markdown: `Ein Neuwagen ist eine große Investition. Mit guter Vorbereitung bekommst du das passende Auto zum fairen Preis.

## 1. Bedarf klären

Wie viele Kilometer pro Jahr? Welche Strecken? Wie viele Personen? Welcher Antrieb passt? Siehe „Elektro, Hybrid oder Verbrenner“.

## 2. Modelle vergleichen

Testberichte, Euro-NCAP-Ergebnisse, Probefahrten – mehr unter „Modellvergleiche“.

## 3. Ausstattung konfigurieren

- **Ausstattungslinien** vergleichen – oft ist eine höhere Linie günstiger als viele Einzelextras.
- Nur Extras wählen, die du wirklich nutzt.
- Wiederverkaufswert bedenken (z. B. Assistenzsysteme, Farbe).

Mehr unter „Ausstattung vergleichen“.

## 4. Preis verhandeln

- **Mehrere Angebote** einholen, auch von Händlern in anderen Regionen.
- **Rabatte** gibt es beim Händler, über Neuwagenportale oder bei Aktionen.
- **Tageszulassungen** und **Vorführwagen** sind oft deutlich günstiger.

## 5. Finanzierung

Barkauf, Finanzierung oder Leasing? Vergleiche Gesamtkosten – siehe „Leasing oder Kauf“.

## 6. Kaufvertrag

Lieferzeit, Preisänderungsklauseln, Ausstattung und Inzahlungnahme schriftlich festhalten.

## 7. Übergabe

Auto genau prüfen: Lack, Ausstattung, Zubehör, Papiere, zwei Schlüssel. Mängel ins Übergabeprotokoll.`,
    faq: [
      ["Was ist eine Tageszulassung?", "Ein Neuwagen, der kurz auf einen Händler zugelassen war. Er ist meist günstiger, du bist aber nicht Erstbesitzer."],
      ["Wann ist der beste Zeitpunkt für den Neuwagenkauf?", "Oft vor einem Modellwechsel oder am Ende von Quartalen, wenn Händler Ziele erreichen wollen. Garantien gibt es dafür aber nicht."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/autokauf/leasing-oder-kauf",
    description: "Leasing oder Kauf: Kosten, Flexibilität, Risiken und Restwert im Vergleich – für Privatpersonen und Selbstständige, mit Checkliste für Leasingverträge.",
    markdown: `Kaufen, finanzieren oder leasen? Jede Variante hat Vor- und Nachteile. Entscheidend sind deine Fahrleistung, dein Budget und wie lange du das Auto fahren willst.

## Kauf (bar oder finanziert)

- **Das Auto gehört dir** (bei Finanzierung nach der letzten Rate).
- **Keine Kilometerbegrenzung**, keine Rückgaberegeln.
- **Lohnt sich besonders bei langer Haltedauer.**
- Risiko: Wertverlust trägst du selbst.

## Leasing

- **Du mietest das Auto** für eine feste Laufzeit.
- **Planbare Raten**, oft neueres Auto.
- **Kilometerleasing:** feste Kilometer – Mehrkilometer kosten extra.
- **Restwertleasing:** Risiko bei Abweichung vom kalkulierten Restwert.
- **Bei Rückgabe:** Schäden über normale Gebrauchsspuren hinaus werden berechnet.

## Für Selbstständige

Leasingraten können betrieblich absetzbar sein – lass dich steuerlich beraten.

## Vergleich der Gesamtkosten

Rechne alle Kosten über die Laufzeit: Anzahlung, Raten, Schlussrate oder Restwert, Versicherung (bei Leasing oft Vollkasko-Pflicht), Wartung, Rückgabekosten.

## Checkliste Leasingvertrag

- Laufzeit und Kilometer realistisch?
- Kosten für Mehr- und Minderkilometer
- Wer trägt das Restwertrisiko?
- Rückgabebedingungen und Gutachten
- Wartung und Versicherung inklusive?`,
    faq: [
      ["Ist Leasing günstiger als Kaufen?", "Nicht grundsätzlich. Über lange Haltedauer ist Kaufen oft günstiger, Leasing bietet dafür planbare Raten und ein neueres Auto."],
      ["Was passiert bei Schäden am Leasingauto?", "Schäden, die über normale Gebrauchsspuren hinausgehen, werden bei der Rückgabe meist in Rechnung gestellt."],
    ],
    comparison: {
      title: "Kauf und Leasing im Vergleich",
      columns: ["Kauf", "Leasing"],
      rows: [
        { label: "Eigentum", values: ["ja", "nein"] },
        { label: "Kilometergrenze", values: ["keine", "meist vereinbart"] },
        { label: "Monatliche Belastung", values: ["hoch bei Finanzierung, keine bei Barkauf", "planbare Rate"] },
        { label: "Wertverlust-Risiko", values: ["bei dir", "je nach Vertrag beim Leasinggeber oder bei dir"] },
        { label: "Ideal für", values: ["lange Haltedauer, viele Kilometer", "regelmäßiger Autowechsel, planbare Kosten"] },
      ],
    },
    sources: [VZ, ADAC],
  },
  {
    path: "autos-mobilitaet/autokauf/auto-verkaufen",
    description: "Auto verkaufen: privat, an Händler oder Ankaufportal – Wert ermitteln, Inserat, Probefahrt, Kaufvertrag, Bezahlung und Abmeldung sicher erledigen.",
    markdown: `Ein Auto zu verkaufen ist kein Hexenwerk – mit der richtigen Vorbereitung erzielst du einen fairen Preis und vermeidest Ärger.

## Verkaufswege

- **Privatverkauf:** meist höchster Erlös, aber mehr Aufwand.
- **Händler / Inzahlungnahme:** bequem, oft weniger Geld.
- **Ankaufportale:** schnell, Preis vorher vergleichen.

## Wert ermitteln

- **Bewertungsportale** und Automobilclubs
- **Vergleichbare Inserate** (Modell, Baujahr, Kilometer, Ausstattung)
- **Gutachten** bei wertvollen Fahrzeugen

## Vorbereitung

- Auto **reinigen** innen und außen
- **Unterlagen** bereitlegen: Fahrzeugpapiere, Serviceheft, Rechnungen, Prüfberichte
- Kleine Mängel beheben oder offen benennen

## Inserat

Gute Fotos bei Tageslicht, ehrliche Beschreibung, alle Mängel nennen.

## Probefahrt

Ausweis und Führerschein kopieren bzw. fotografieren, **mitfahren**, Versicherungsschutz klären.

## Kaufvertrag

Schriftlich, mit Musterverträgen von Automobilclubs. Darin: Daten von Käufer und Verkäufer, Fahrzeugdaten, Preis, Kilometerstand, bekannte Mängel, **Gewährleistungsausschluss** bei Privatverkauf, Übergabezeitpunkt.

## Bezahlung

**Bar bei Übergabe** (Geldscheine prüfen) oder Überweisung, die **vor** der Übergabe gutgeschrieben ist. Vorsicht bei Schecks und „Treuhanddiensten“.

## Danach

Fahrzeug **abmelden** oder Umschreibung sicherstellen, Versicherung informieren, persönliche Daten im Auto löschen.`,
    faq: [
      ["Muss ich beim Privatverkauf Gewährleistung geben?", "Privatverkäufer können die Gewährleistung im Vertrag ausschließen – bekannte Mängel müssen aber angegeben werden."],
      ["Wie schütze ich mich vor Betrug?", "Nur bei sicherer Zahlung übergeben, keine Schecks oder dubiosen Treuhanddienste akzeptieren und den Kaufvertrag schriftlich abschließen."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/kosten-vergleiche/kosten-pro-kilometer",
    description: "Kosten pro Kilometer berechnen: Wertverlust, Fixkosten und Betriebskosten richtig einrechnen – mit Rechner zum Vergleichen von zwei Fahrzeugen.",
    markdown: `Was kostet ein Kilometer mit dem eigenen Auto wirklich? Die meisten denken nur an den Sprit – dabei machen andere Posten oft den größeren Teil aus.

## Die Kostenarten

- **Wertverlust:** oft der größte Posten, besonders bei Neuwagen.
- **Fixkosten:** Versicherung, Kfz-Steuer, Garage oder Stellplatz, Prüfungen.
- **Betriebskosten:** Kraftstoff bzw. Strom, Wartung, Reifen, Reparaturen, Pflege.

## So rechnest du

**Kosten pro km = Summe aller Jahreskosten ÷ gefahrene km pro Jahr**

Je weniger du fährst, desto höher sind die Kosten pro Kilometer – weil die Fixkosten auf weniger Kilometer verteilt werden.

## Rechner

Mit dem **Betriebskosten-Rechner** unten auf dieser Seite vergleichst du zwei Fahrzeuge: Fahrleistung, Verbrauch, Energiepreis, Versicherung, Steuer, Wartung und Wertverlust eintragen – der Rechner zeigt Kosten pro Jahr, Monat und Kilometer.

## Typische Erkenntnisse

- Ein günstiger Gebrauchtwagen kann trotz höherem Verbrauch günstiger sein als ein neues Auto mit hohem Wertverlust.
- Elektroautos haben oft niedrigere Betriebskosten, aber je nach Modell höheren Wertverlust oder Anschaffungspreis.
- Bei wenigen Kilometern pro Jahr lohnt sich der Vergleich mit Carsharing und ÖPNV.

## Weiterlesen

„Betriebskosten berechnen“, „Mobilität ohne Auto“ und „Elektro, Hybrid oder Verbrenner“.`,
    faq: [
      ["Was ist der größte Kostenfaktor beim Auto?", "Bei vielen Autos – besonders Neuwagen – ist es der Wertverlust."],
      ["Wie berechne ich die Kosten pro Kilometer?", "Alle Jahreskosten addieren und durch die jährlich gefahrenen Kilometer teilen."],
    ],
    sources: [ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/kosten-vergleiche/ausstattung-vergleichen",
    description: "Ausstattung vergleichen: sinnvolle Extras von Assistenzsystemen bis Sitzheizung, Ausstattungslinien vs. Einzeloptionen und Wiederverkaufswert.",
    markdown: `Die Ausstattung kann den Preis eines Autos stark erhöhen. Welche Extras lohnen sich – und welche nicht?

## Ausstattungslinien oder Einzeloptionen?

Hersteller bieten **Ausstattungslinien** (Basis, Mitte, Top) und **Einzeloptionen** bzw. Pakete. Oft ist eine höhere Linie günstiger als viele Einzelextras. Vergleiche genau, was jeweils enthalten ist.

## Oft sinnvoll

- **Assistenzsysteme** wie adaptiver Tempomat, Totwinkelwarner (viele Grundfunktionen sind inzwischen Pflicht – siehe „Assistenzsysteme“)
- **Klimaautomatik**
- **Smartphone-Integration**
- **Rückfahrkamera** / Parksensoren
- **LED-Scheinwerfer**
- **Sitz- und Lenkradheizung** in kalten Regionen
- Bei Elektroautos: **Wärmepumpe** für bessere Winterreichweite

## Oft verzichtbar

- Sehr große Felgen (teurere Reifen, weniger Komfort)
- Teure Sonderlackierungen
- Ambientebeleuchtung in vielen Farben
- Teure Soundsysteme, wenn du wenig Musik hörst

## Wiederverkaufswert

Gefragte Extras (z. B. Assistenzsysteme, Navigation, Anhängerkupplung) können den Wiederverkaufswert stützen. Sehr spezielle Extras bringen beim Verkauf selten ihren Aufpreis zurück.

## Tipps

1. **Eigene Prioritäten** aufschreiben.
2. **Probefahrt** mit der gewünschten Ausstattung.
3. **Pakete** genau lesen.
4. **Gesamtkosten** im Blick – mehr unter „Kosten pro Kilometer“.`,
    faq: [
      ["Welche Extras steigern den Wiederverkaufswert?", "Häufig gefragte Extras wie Assistenzsysteme, Navigation, Klimaautomatik und Anhängerkupplung."],
      ["Lohnt sich eine Wärmepumpe im Elektroauto?", "In kalten Regionen oft ja, weil sie im Winter Energie spart und die Reichweite verbessert."],
    ],
    sources: [ADAC],
  },
  {
    path: "autos-mobilitaet/news/rueckrufe",
    description: "Auto-Rückrufe: Wie Rückrufaktionen ablaufen, wo du prüfst, ob dein Auto betroffen ist (KBA-Datenbank), deine Rechte und was du tun solltest.",
    markdown: `Immer wieder rufen Hersteller Fahrzeuge zurück, um Sicherheits- oder Qualitätsmängel zu beheben. So erfährst du, ob dein Auto betroffen ist.

## Wie läuft ein Rückruf ab?

1. Ein Mangel wird festgestellt – durch Hersteller oder Behörden.
2. Der Hersteller informiert Behörden und **schreibt betroffene Halter an**.
3. Die Reparatur in der Vertragswerkstatt ist in der Regel **kostenlos**.

Bei sicherheitsrelevanten Rückrufen überwacht in Deutschland das **Kraftfahrt-Bundesamt (KBA)** die Durchführung. Halter können über die Zulassungsdaten ermittelt und angeschrieben werden.

## Ist mein Auto betroffen?

- **Brief vom Hersteller** – ernst nehmen und zeitnah Termin vereinbaren.
- **KBA-Rückrufdatenbank:** Dort kannst du nach Marke und Modell suchen.
- **Hersteller-Websites:** Viele bieten eine Abfrage per Fahrzeug-Identifizierungsnummer (FIN).
- **EU Safety Gate:** Europäisches Schnellwarnsystem für gefährliche Produkte, auch Fahrzeuge.
- In Österreich informieren Hersteller und Importeure; Automobilclubs veröffentlichen Rückrufe ebenfalls.

## Was tun?

- **Termin vereinbaren** und Reparatur durchführen lassen.
- Bei **akuter Gefahr** (z. B. Bremsen, Airbags) nach Anweisungen des Herstellers handeln – eventuell nicht weiterfahren.
- **Nachweis** der Reparatur aufbewahren – wichtig beim Verkauf.

## Gebrauchtwagenkauf

Vor dem Kauf prüfen, ob offene Rückrufe bestehen.`,
    faq: [
      ["Kostet die Reparatur bei einem Rückruf etwas?", "In der Regel nicht – der Hersteller übernimmt die Kosten der Rückrufmaßnahme."],
      ["Wo kann ich prüfen, ob mein Auto zurückgerufen wird?", "In Deutschland in der Rückrufdatenbank des KBA sowie bei den Herstellern über die Fahrgestellnummer."],
    ],
    sources: [KBA, { title: "EU Safety Gate", url: "https://ec.europa.eu/safety-gate-alerts/" }, OEAMTC],
  },

  /* ================= Projekte & Panda ================= */
  {
    path: "projekte-community/ueber/faq",
    description: "FAQ zur Panda Toolbox: Was das Portal ist, ob es kostenlos ist, wie wir mit Werbung und Affiliate-Links umgehen, Datenschutz und Flauschipanda.",
    markdown: `Hier beantworten wir Fragen rund um die **Panda Toolbox**.

## Was ist die Panda Toolbox?

Ein Themen- und Communityportal mit Ratgebern zu Tieren, Zoos, Freizeitparks, KI, Tools, Finanzen, Gesundheit, Wissenschaft und vielem mehr – verständlich erklärt und übersichtlich nach Kategorien und Unterthemen geordnet.

## Ist die Panda Toolbox kostenlos?

Ja. Alle Inhalte sind ohne Bezahlschranke frei zugänglich.

## Wie finanziert sich die Seite?

Über **Werbung** und **Affiliate-Links**: Kaufst du über einen solchen Link, erhalten wir eventuell eine Provision – für dich ändert sich der Preis nicht. Werbung und Affiliate-Links sind **immer gekennzeichnet**. Mehr dazu auf der Seite „Transparenz & Werbung“.

## Was ist Panda GreenTech?

Ein Projekt rund um umweltfreundliche Energie-Ideen, das du freiwillig unterstützen kannst – mehr unter „Was ist Panda GreenTech?“.

## Wer ist der Panda unten rechts?

Das ist **Flauschipanda**, unser Panda-Buddy. Er gibt Tipps, schlägt passende Artikel vor und sammelt Bambus, während du stöberst. Du kannst ihn über das Menü verkleinern und im Footer wieder einblenden.

## Speichert Flauschipanda meine Daten?

Flauschipanda merkt sich Interessen und gesammelten Bambus nur in deinem Browser – und dauerhaft nur mit deiner Einwilligung bzw. wenn du „Sammlung merken“ einschaltest. Nichts davon wird an uns übertragen.

## Stimmen die Inhalte?

Wir recherchieren sorgfältig und nennen Quellen. Trotzdem können sich Informationen ändern. Bei Gesundheit, Recht und Finanzen ersetzen unsere Ratgeber keine persönliche Beratung.

## Wie kann ich Kontakt aufnehmen?

Über die Kontaktseite bzw. die Angaben im Impressum.`,
    faq: [
      ["Ist die Panda Toolbox wirklich gratis?", "Ja, alle Inhalte sind kostenlos und ohne Anmeldung nutzbar."],
      ["Wie erkenne ich Werbung auf der Seite?", "Werbung und Affiliate-Links sind immer gekennzeichnet. Details stehen auf der Seite „Transparenz & Werbung“."],
    ],
  },
  {
    path: "panda-branding/panda-story/panda-glow-style",
    description: "Der Panda-Glow-Style: Türkis und Lila, dunkle Flächen, leuchtende Akzente und Flauschipanda – so sieht die Designsprache der Panda Toolbox aus.",
    markdown: `Die Panda Toolbox hat einen eigenen Look: den **Panda-Glow-Style**. Hier erfährst du, woraus er besteht.

## Die Farben

- **Türkis** – frisch, modern, klar
- **Lila** – kreativ, verspielt, besonders
- **Dunkle Flächen** als Bühne, damit die Farben leuchten
- **Weiß und helles Grau** für gut lesbaren Text

Türkis und Lila werden oft als **Verlauf** kombiniert – etwa in Überschriften-Akzenten, Buttons und im Halstuch von Flauschipanda.

## Der Glow

Leuchtende Kanten, weiche Schatten in Türkis und Lila und sanft schimmernde Hintergründe sorgen für den typischen Glow. Wichtig ist dabei **Lesbarkeit**: Text bleibt klar, der Glow setzt nur Akzente.

## Flauschipanda

Unser Maskottchen trägt ein Türkis-Lila-Halstuch, knabbert Bambus und passt seinen Look den Themen an – mit KI-Brille, Sonnenhut, Astronautenhelm oder Schlafmütze.

## Animationen

- Inhalte gleiten beim Scrollen sanft herein.
- Karten leuchten beim Darüberfahren.
- In der Kategorie Wissenschaft & Astrologie funkeln Sterne und fliegen Atome.
- Ein kleiner Bambuswald wächst am Rand, je mehr Bambus du sammelst.

Wer „Bewegung reduzieren“ im Betriebssystem eingestellt hat, sieht eine ruhige Version.

## Selbst ausprobieren

Wie du den Glow-Look in eigenen Designs umsetzt, erklären wir unter „Glow-Design“ und „Glow-Bilder erstellen“.`,
    faq: [
      ["Welche Farben nutzt die Panda Toolbox?", "Vor allem Türkis und Lila auf dunklem Hintergrund, ergänzt durch helle Schrift."],
      ["Kann ich die Animationen ausschalten?", "Wenn du in deinem Betriebssystem „Bewegung reduzieren“ aktivierst, zeigt die Seite eine ruhige Version."],
    ],
  },
  {
    path: "panda-branding/panda-designs/panda-malvorlagen",
    description: "Panda-Malvorlagen und Malideen: Panda in 6 einfachen Schritten zeichnen, Ausmal-Tipps und kreative Ideen wie Glow-Panda und Panda-Familie.",
    markdown: `Pandas sind perfekte Malmotive: schwarz-weiß, rund und zum Knuddeln. Hier lernst du, wie du einen Panda zeichnest. Eigene **Panda-Malvorlagen** zum Ausdrucken ergänzen wir nach und nach.

## Panda zeichnen in 6 Schritten

1. **Kopf:** Ein großer Kreis.
2. **Ohren:** Zwei kleine Halbkreise oben links und rechts – schwarz ausmalen.
3. **Augenflecken:** Zwei schräge Ovale, die zur Nase hin zeigen – schwarz, mit einem weißen Punkt als Auge darin.
4. **Nase und Mund:** Eine kleine Dreiecksnase und ein „w“ als Mund.
5. **Körper:** Ein großes, rundes Oval unter dem Kopf.
6. **Arme und Beine:** Vier runde, schwarze Formen – und ein Bambusstab in der Pfote!

## Ausmal-Ideen

- **Klassisch:** schwarz-weiß mit grünem Bambus
- **Glow-Panda:** schwarzes Papier, Panda mit Neonstiften in Türkis und Lila
- **Panda-Familie:** großer und kleiner Panda nebeneinander
- **Panda-Abenteuer:** Panda mit Sonnenhut am Strand, Panda als Astronaut

## Wissen beim Malen

- Warum ist der Panda schwarz-weiß? Fachleute vermuten Tarnung und Kommunikation.
- Was frisst er? Fast nur Bambus.

Mehr Panda-Wissen gibt es in unseren Panda-Fakten für Kinder.`,
    faq: [
      ["Ist ein Panda leicht zu zeichnen?", "Ja! Er besteht fast nur aus Kreisen und Ovalen – ideal für Kinder und Anfänger."],
      ["Wie male ich einen Glow-Panda?", "Auf schwarzem Papier mit Neon- oder Leuchtstiften die Umrisse in Türkis und Lila nachziehen."],
    ],
  },
  {
    path: "panda-branding/panda-designs/panda-ki-prompts",
    description: "Panda-KI-Prompts: kopierfertige Vorlagen für Panda-Bilder mit KI – niedlich, realistisch, Glow-Look, Abenteuer und Kinderbuch-Stil.",
    markdown: `Pandas sind eines der beliebtesten Motive für KI-Bilder. Diese **Panda-Prompts** kannst du direkt kopieren und anpassen.

## Niedlich

- „Ein flauschiger Babypanda schläft auf einem Ast, umgeben von Bambusblättern, weiches Morgenlicht, Kinderbuchillustration“
- „Zwei Pandas kuscheln im Schnee, Aquarell, Pastellfarben“

## Realistisch

- „Großer Panda frisst Bambus in einem nebligen Bergwald in China, Naturfotografie, Teleobjektiv“

## Glow-Look im Panda-Toolbox-Stil

- „Ein Panda aus leuchtenden Neonlinien in Türkis und Lila, schwarzer Hintergrund, minimalistisch, Glow-Effekt“
- „Panda mit Türkis-Lila-Halstuch hält einen leuchtenden Bambusstab, 3D, dunkler Hintergrund“

## Abenteuer

- „Ein Panda als Astronaut schwebt zwischen Planeten und Sternschnuppen, Comic-Stil“
- „Panda mit Sonnenhut am Strand baut eine Sandburg, fröhlich, Cartoon“
- „Panda als Erfinder in einer Werkstatt mit Werkzeugkiste, warmes Licht“

## Tipps

- **Stil** und **Licht** immer nennen.
- **Varianten** erzeugen und die beste verfeinern.
- **Pfoten und Augen** genau prüfen – KI hat damit manchmal Probleme.

## Rechte und Kennzeichnung

Prüfe die Nutzungsbedingungen des Bildgenerators und kennzeichne KI-Bilder, wenn du sie veröffentlichst. Grundlagen unter „Tierbilder mit KI“ und „Bild-Prompts“.`,
    faq: [
      ["Wie bekomme ich einen Panda im Glow-Stil?", "Im Prompt „Neonlinien“, „Glow-Effekt“, „Türkis und Lila“ und „dunkler Hintergrund“ angeben."],
      ["Darf ich KI-Panda-Bilder als Logo nutzen?", "Das hängt von den Nutzungsbedingungen des Tools ab. Für Logos sind eigene oder beauftragte Designs rechtlich sicherer."],
    ],
  },
];
