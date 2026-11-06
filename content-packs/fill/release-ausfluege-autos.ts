import type { FillPage } from "../types";

/**
 * Release-Lücken (Teil 2): Zoos, Freizeitparks, Familienurlaub und Autos.
 * Bewusst ohne konkrete Preise – Preise ändern sich häufig, die offiziellen Seiten sind verlinkt.
 */

const BERLIN = { title: "Zoo Berlin – Tickets & Preise (offiziell)", url: "https://www.zoo-berlin.de/de/tickets" };
const WIEN = { title: "Tiergarten Schönbrunn – offizielle Website", url: "https://www.zoovienna.at/" };
const MUC = { title: "Tierpark Hellabrunn – offizielle Website", url: "https://www.hellabrunn.de/" };
const LEJ = { title: "Zoo Leipzig – offizielle Website", url: "https://www.zoo-leipzig.de/" };
const ZRH = { title: "Zoo Zürich – offizielle Website", url: "https://www.zoo.ch/" };
const SEALIFE = { title: "SEA LIFE Deutschland – offizielle Website", url: "https://www.visitsealife.com/" };
const EP = { title: "Europa-Park – Tickets (offiziell)", url: "https://www.europapark.de/de/tickets" };
const PHL = { title: "Phantasialand – offizielle Website", url: "https://www.phantasialand.de/" };
const ADAC = { title: "ADAC – Tests und Ratgeber", url: "https://www.adac.de/" };
const OEAMTC = { title: "ÖAMTC – Tests und Ratgeber", url: "https://www.oeamtc.at/" };
const NCAP = { title: "Euro NCAP – Crashtests", url: "https://www.euroncap.com/de" };
const KBA = { title: "Kraftfahrt-Bundesamt", url: "https://www.kba.de/" };

const hotelTips = `## So findest du das passende Hotel

1. **Lage vor Preis:** Ein Hotel mit direkter Bahn- oder Tramverbindung spart oft mehr Zeit und Nerven als ein paar Euro Ersparnis am Stadtrand.
2. **Familienzimmer** oder Apartments mit Küche sind für Familien meist günstiger als zwei Doppelzimmer.
3. **Frühstück** prüfen: Lohnt es sich, oder gibt es gute Bäckereien in der Nähe?
4. **Parken:** Stadthotels verlangen oft Gebühren für die Garage. Mit öffentlichen Verkehrsmitteln anreisen ist meist entspannter.
5. **Stornobedingungen** beachten – gerade bei Ausflügen mit Kindern ändern sich Pläne.
6. **Früh buchen** in Ferienzeiten, an Feiertagen und bei großen Veranstaltungen in der Stadt.`;

export const releaseAusfluegeAutos: FillPage[] = [
  /* ================= Zoos ================= */
  {
    path: "zoos/zoo-berlin/tickets",
    description: "Zoo Berlin Tickets: online deutlich günstiger als an der Kasse, Kombiticket mit Aquarium, Jahreskarte mit Tierpark, freier Eintritt für Kinder unter 4.",
    focusKeyword: "Zoo Berlin Tickets",
    linkAnchors: ["Zoo Berlin Tickets", "Tickets für den Zoo Berlin"],
    markdown: `Der **Zoo Berlin** ist der älteste Zoo Deutschlands und mit seinen Pandas eines der beliebtesten Ausflugsziele der Hauptstadt. Hier erfährst du, welche **Tickets** es gibt und wie du beim Kauf am meisten sparst.

## Online oder an der Kasse?

Der wichtigste Tipp zuerst: **Kauf dein Ticket online.** Der Zoo Berlin verlangt an der Tageskasse spürbar höhere Preise als im Online-Shop – bei einer Familie macht das schnell einen zweistelligen Betrag aus. Das Ticket bekommst du als PDF oder aufs Handy und kommst damit direkt durch den Einlass.

## Die Ticketarten

| Ticket | Was drin ist |
|---|---|
| **Tageskarte Zoo** | Eintritt in den Zoo Berlin |
| **Kombiticket Zoo + Aquarium** | Zoo und das Aquarium Berlin direkt am Zoo |
| **Ermäßigte Tickets** | für Berechtigte mit Nachweis, z. B. Schüler, Studierende, Menschen mit Behinderung |
| **Jahreskarte** | wahlweise Zoo, Zoo + Aquarium oder Zoo + Aquarium + Tierpark Berlin |
| **Gruppentickets** | ab 20 Personen, Kitas und Schulen mit eigenen Angeboten |

**Kinder unter 4 Jahren** haben freien Eintritt. Kinder von 4 bis 15 Jahren zahlen den Kinderpreis, ab 16 Jahren gilt der Erwachsenenpreis.

## Kombiticket mit dem Aquarium

Das **Aquarium Berlin** liegt direkt am Elefantentor und hat einen eigenen Eingang. Bei Regen ist es ein idealer Rückzugsort. Kombitickets für den Besuchstag gibt es nur bis zum frühen Nachmittag – plane den Aquariumsbesuch also mit ein.

## Wann lohnt sich die Jahreskarte?

Die Jahreskarte rechnet sich meist schon nach **drei bis vier Besuchen**. Besonders interessant für Berliner Familien ist die Variante, die auch den **Tierpark Berlin** in Friedrichsfelde und das Aquarium einschließt. Für Familien gibt es eigene Familien-Jahreskarten. Jahreskarteninhaber müssen sich für das Aquarium vorab kostenlos anmelden.

## Eingänge und Anreise

- **Löwentor** am Hardenbergplatz – direkt beim Bahnhof Zoologischer Garten (S-Bahn, U-Bahn, Regionalzüge)
- **Elefantentor** an der Budapester Straße – nahe Kurfürstendamm und Aquarium

## Spartipps auf einen Blick

1. **Online kaufen** statt an der Kasse.
2. **Kombiticket** nur nehmen, wenn ihr das Aquarium wirklich besucht.
3. **Jahreskarte** ab dem dritten Besuch durchrechnen.
4. **Ermäßigungsnachweis** nicht vergessen.
5. **Essen mitnehmen** – Picknick ist erlaubt.

Aktuelle Preise und Bedingungen findest du auf der offiziellen Website. Öffnungszeiten und Tipps für den Besuch stehen in unseren weiteren Zoo-Berlin-Ratgebern.`,
    faq: [
      ["Sind Zoo-Berlin-Tickets online günstiger?", "Ja, deutlich. An der Tageskasse gelten höhere Preise als im Online-Shop."],
      ["Ab welchem Alter brauchen Kinder ein Ticket für den Zoo Berlin?", "Kinder unter 4 Jahren haben freien Eintritt. Von 4 bis 15 Jahren gilt der Kinderpreis."],
      ["Gibt es eine Jahreskarte für Zoo, Aquarium und Tierpark?", "Ja. Die Jahreskarte gibt es für den Zoo allein, für Zoo und Aquarium sowie für Zoo, Aquarium und Tierpark Berlin."],
    ],
    sources: [BERLIN],
  },
  {
    path: "zoos/zoo-berlin/hotels",
    description: "Hotels in der Nähe vom Zoo Berlin: die besten Lagen rund um Bahnhof Zoo, Kurfürstendamm und Tiergarten – mit Tipps für Familien und Anreise.",
    focusKeyword: "Hotel Zoo Berlin",
    linkAnchors: ["Hotels am Zoo Berlin", "Hotel in der Nähe vom Zoo Berlin"],
    markdown: `Der **Zoo Berlin** liegt mitten in der **City West** – zwischen Kurfürstendamm, Tiergarten und Bahnhof Zoologischer Garten. Wer hier übernachtet, ist in wenigen Minuten am Zoo und gleichzeitig zentral für Ausflüge in ganz Berlin.

## Die besten Lagen

### Rund um den Bahnhof Zoologischer Garten
Direkt am **Löwentor**. Hier halten S-Bahn, die U-Bahn-Linien U2 und U9 sowie Regionalzüge. Ideal, wenn du mit dem Zug anreist. In der Umgebung gibt es viele Hotels aller Preisklassen – teils mit Blick auf den Zoo, wie das Designhotel im Bikini-Haus an der Budapester Straße.

### Kurfürstendamm und Tauentzienstraße
Wenige Gehminuten zum **Elefantentor** und zum Aquarium. Gute Mischung aus Hotels, Restaurants und Einkaufsmöglichkeiten (z. B. KaDeWe). Etwas lebhafter, aber sehr praktisch.

### Charlottenburg
Ruhiger, mit vielen kleineren Hotels und Pensionen in Altbauten. Über die U-Bahn in wenigen Stationen am Zoo. Oft günstiger als direkt am Ku'damm.

### Tiergarten und Hansaviertel
Grün und ruhig, nördlich des Zoos. Gut für Familien, die morgens einen Spaziergang durch den Tiergarten machen möchten.

## Für Familien

- **Familienzimmer** und Apartments gibt es vor allem in Charlottenburg und rund um den Ku'damm.
- Hotels nahe dem **Bahnhof Zoo** sparen mit Kindern lange Wege – nach dem Zoobesuch ist man schnell zurück.
- Mit dem Kinderwagen sind breite Gehwege und Aufzüge an den U-Bahn-Stationen wichtig. Nicht jede Station ist barrierefrei – vorher prüfen.

## Anreise mit dem Auto?

Rund um den Zoo ist Parken teuer und knapp. Wenn das Hotel keinen eigenen Parkplatz anbietet, ist ein **Parkhaus** oder das Auto ganz stehen zu lassen meist die beste Wahl. In Berlin kommst du mit S- und U-Bahn überallhin.

${hotelTips}

## Kombinieren lohnt sich

Von der City West erreichst du auch den **Tierpark Berlin** mit der U5 sowie viele Sehenswürdigkeiten wie das Brandenburger Tor. Mit einer Zoo-Jahreskarte inklusive Tierpark lassen sich beide Zoos an verschiedenen Tagen besuchen.

Tickets und Öffnungszeiten findest du in unseren Zoo-Berlin-Ratgebern.`,
    faq: [
      ["Wo übernachtet man am besten für einen Besuch im Zoo Berlin?", "Rund um den Bahnhof Zoologischer Garten und den Kurfürstendamm – von dort sind beide Zoo-Eingänge in wenigen Minuten zu Fuß erreichbar."],
      ["Gibt es ein Hotel mit Blick auf den Zoo Berlin?", "Ja, einige Hotels an der Budapester Straße, etwa im Bikini-Haus, haben Zimmer mit Blick auf Teile des Zoos."],
      ["Brauche ich in Berlin ein Auto?", "Nein. S-Bahn, U-Bahn und Busse verbinden alle Sehenswürdigkeiten. Parken in der City West ist teuer und knapp."],
    ],
    sources: [BERLIN, { title: "visitBerlin – offizielles Tourismusportal", url: "https://www.visitberlin.de/de" }],
  },
  {
    path: "zoos/tiergarten-schoenbrunn/hotels",
    description: "Hotels in der Nähe vom Tiergarten Schönbrunn: Hietzing, Penzing, Westbahnhof und Mariahilf – die besten Lagen in Wien für Zoo- und Schlossbesuch.",
    focusKeyword: "Hotel Tiergarten Schönbrunn",
    linkAnchors: ["Hotels beim Tiergarten Schönbrunn", "Hotel in der Nähe von Schönbrunn"],
    markdown: `Der **Tiergarten Schönbrunn** im 13. Wiener Bezirk ist der älteste noch bestehende Zoo der Welt (gegründet 1752) und liegt im Schlosspark von Schönbrunn. Eine Übernachtung in der Nähe verbindet Zoo, Schloss und Wiener Innenstadt ideal.

## Die besten Lagen

### Hietzing
Direkt am **Hietzinger Tor** des Schlossparks, von dort ist der Zoo schnell zu Fuß erreichbar. Ruhiger Villenbezirk mit Kaffeehäusern und einigen traditionsreichen Hotels in Sichtweite des Schlosses. Die **U4** (Station Hietzing) bringt dich in etwa 15 Minuten in die Innenstadt.

### Rund um die U4-Station Schönbrunn
Am Haupteingang des Schlosses, auf der Seite von Meidling und Rudolfsheim-Fünfhaus. Hier gibt es mehrere Mittelklasse-Hotels mit guter Anbindung.

### Westbahnhof und Mariahilfer Straße
Sehr praktisch bei Anreise mit dem Zug: Vom **Westbahnhof** fahren Straßenbahnen und die U-Bahn Richtung Schönbrunn. Die Mariahilfer Straße ist Wiens größte Einkaufsstraße, mit großer Hotelauswahl in allen Preisklassen.

### Penzing
Westlich von Schönbrunn, oft etwas günstiger und ruhiger. Gute Wahl für Familien mit Auto.

## Für Familien

- Der Tiergarten ist groß und hügelig – eine Unterkunft in **Gehweite** erspart nach einem langen Tag die Fahrt mit müden Kindern.
- Familienzimmer und Apartments sind in Hietzing und Penzing häufiger zu finden als in der Innenstadt.
- Wer Zoo, Schloss und **Wüstenhaus** oder das **Labyrinth** im Schlosspark kombinieren will, plant am besten zwei Tage ein.

## Anreise

Wien hat ein sehr gutes öffentliches Netz. Mit U4 und den Straßenbahnlinien 10 und 60 erreichst du die Eingänge zum Schlosspark bequem. Parken rund um Schönbrunn ist begrenzt und gebührenpflichtig, in Wien gilt in fast allen Bezirken die **Kurzparkzone**.

${hotelTips}

Tickets, Preise und die Pandas von Schönbrunn findest du in unseren weiteren Ratgebern.`,
    faq: [
      ["Welche U-Bahn fährt zum Tiergarten Schönbrunn?", "Die U4 mit den Stationen Schönbrunn und Hietzing. Vom Hietzinger Tor ist der Zoo-Eingang schnell erreichbar."],
      ["Wo übernachtet man am besten für Schönbrunn?", "In Hietzing für kurze Wege und Ruhe, rund um den Westbahnhof und die Mariahilfer Straße für gute Anbindung und große Auswahl."],
      ["Kann man Zoo und Schloss an einem Tag besuchen?", "Ja, beide liegen im selben Park. Mit Kindern sind zwei Tage aber entspannter."],
    ],
    sources: [WIEN, { title: "Wien Tourismus – offizielles Portal", url: "https://www.wien.info/de" }],
  },
  {
    path: "zoos/tierpark-hellabrunn/hotels",
    description: "Hotels in der Nähe vom Tierpark Hellabrunn: Thalkirchen, Sendling, Harlaching und Innenstadt – mit Anreise über U3 und Bus sowie Tipps für Familien.",
    focusKeyword: "Hotel Tierpark Hellabrunn",
    linkAnchors: ["Hotels beim Tierpark Hellabrunn", "Hotel in der Nähe von Hellabrunn"],
    markdown: `Der **Tierpark Hellabrunn** liegt im Süden Münchens an der Isar, im Stadtteil Thalkirchen. Er war 1911 einer der ersten **Geo-Zoos** der Welt, in dem Tiere nach Kontinenten angeordnet sind. Hier erfährst du, wo du für deinen Besuch am besten übernachtest.

## Die besten Lagen

### Thalkirchen und Sendling
Am nächsten zum Zoo. Von der U-Bahn-Station **Thalkirchen (Tierpark)** der Linie **U3** sind es nur wenige Minuten zu Fuß zum Flamingo-Eingang. Sendling bietet mehrere Hotels der Mittelklasse und gute Verbindungen in die Innenstadt.

### Harlaching
Auf der anderen Isarseite, ruhig und grün. Zum **Isar-Eingang** des Tierparks geht es über die Isarauen. Gute Wahl für Familien, die Ruhe suchen.

### Innenstadt und Hauptbahnhof
Die größte Auswahl an Hotels. Mit der U3 ab Marienplatz bist du in etwa einer Viertelstunde am Tierpark. Ideal, wenn du München auch ansonsten erkunden möchtest.

### Camping an der Isar
In unmittelbarer Nähe zum Tierpark liegt ein **Campingplatz** an der Isar – beliebt bei Familien mit Wohnmobil oder Zelt im Sommer.

## Für Familien

- Der Tierpark ist weitläufig. Eine Unterkunft entlang der **U3** macht An- und Abreise einfach.
- In den Isarauen rund um den Zoo gibt es Spielplätze und Badestellen für einen zweiten Ausflugstag.
- Zur **Oktoberfest-Zeit** (Ende September bis Anfang Oktober) und bei großen Messen sind Hotels in München deutlich teurer und schnell ausgebucht – dann lohnt sich frühes Buchen besonders.

## Anreise mit dem Auto

Am Tierpark gibt es Parkplätze, die an schönen Wochenenden schnell voll sind. Viele Münchner Hotels verlangen Gebühren für die Garage. Öffentliche Verkehrsmittel sind meist die entspanntere Wahl.

${hotelTips}

Tickets, Preise und Öffnungszeiten findest du in unseren weiteren Hellabrunn-Ratgebern.`,
    faq: [
      ["Wie komme ich zum Tierpark Hellabrunn?", "Mit der U3 bis Thalkirchen (Tierpark) – von dort sind es wenige Minuten zu Fuß zum Flamingo-Eingang. Der Isar-Eingang ist mit dem Bus erreichbar."],
      ["Wo übernachtet man am besten für Hellabrunn?", "In Thalkirchen oder Sendling für kurze Wege, in der Innenstadt für die größte Auswahl und gute U3-Verbindung."],
      ["Wann sind Hotels in München besonders teuer?", "Zur Oktoberfest-Zeit und während großer Messen. Dann frühzeitig buchen oder auf ruhigere Termine ausweichen."],
    ],
    sources: [MUC, { title: "München Tourismus – offizielles Portal", url: "https://www.muenchen.travel/" }],
  },
  {
    path: "zoos/zoo-leipzig/hotels",
    description: "Hotels in der Nähe vom Zoo Leipzig: Innenstadt, Hauptbahnhof und Waldstraßenviertel – kurze Wege zum Zoo, Gondwanaland-Tipps und Familienzimmer.",
    focusKeyword: "Hotel Zoo Leipzig",
    linkAnchors: ["Hotels beim Zoo Leipzig", "Hotel in der Nähe vom Zoo Leipzig"],
    markdown: `Der **Zoo Leipzig** liegt erstaunlich zentral: nur etwa **zehn bis fünfzehn Minuten zu Fuß** vom Hauptbahnhof entfernt. Mit der Tropenhalle **Gondwanaland** ist er auch bei schlechtem Wetter ein Erlebnis. Für die Übernachtung hast du deshalb viele gute Möglichkeiten.

## Die besten Lagen

### Rund um den Hauptbahnhof
Ideal bei Anreise mit dem Zug. Hier gibt es Hotels aller Preisklassen, und der Zoo ist zu Fuß erreichbar. Nach dem Zoobesuch bist du schnell zurück im Zimmer.

### Innenstadt
Leipzigs Altstadt ist kompakt. Von dort erreichst du den Zoo zu Fuß oder mit der Straßenbahn in wenigen Minuten – und hast abends Restaurants und Sehenswürdigkeiten wie die Thomaskirche direkt vor der Tür. Das Völkerschlachtdenkmal erreichst du mit der Straßenbahn.

### Waldstraßenviertel und Gohlis
Westlich bzw. nördlich des Zoos. Ruhige Gründerzeitviertel nahe dem Rosental-Park. Hier gibt es kleinere Hotels und viele Ferienwohnungen – gut für Familien.

## Für Familien

- **Ferienwohnungen** mit Küche sind in Leipzig weit verbreitet und für Familien oft günstiger als Hotels.
- Der Zoo braucht **einen ganzen Tag**, mit Gondwanaland eher mehr. Viele Familien verteilen den Besuch auf zwei Tage.
- Die **Bootsfahrt** durch Gondwanaland und die Fütterungen sind Höhepunkte – Zeiten am Morgen im Zooplan prüfen.

## Anreise

- **Zug:** Leipzig Hauptbahnhof, dann zu Fuß oder mit der Straßenbahn.
- **Auto:** Am Zoo gibt es ein Parkhaus. Viele Innenstadthotels verlangen Parkgebühren – Hotels am Stadtrand mit Straßenbahnanschluss sind eine Alternative.

${hotelTips}

## Gut zu wissen

Zu großen Messen (z. B. der Leipziger Buchmesse im Frühjahr) steigen die Hotelpreise in Leipzig deutlich. Prüfe den Messekalender, bevor du buchst.

Tickets, Preise und Tipps für den Zoo Leipzig findest du in unseren weiteren Ratgebern.`,
    faq: [
      ["Wie weit ist der Zoo Leipzig vom Hauptbahnhof entfernt?", "Etwa zehn bis fünfzehn Minuten zu Fuß. Alternativ fahren Straßenbahnen in die Nähe des Zoos."],
      ["Wo übernachtet man am besten für den Zoo Leipzig?", "Rund um den Hauptbahnhof und in der Innenstadt – beides ist zu Fuß gut mit dem Zoo verbunden."],
      ["Wann sind Hotels in Leipzig teuer?", "Vor allem zu großen Messen wie der Leipziger Buchmesse. Den Messekalender vor dem Buchen prüfen."],
    ],
    sources: [LEJ, { title: "Leipzig Tourismus – offizielles Portal", url: "https://www.leipzig.travel/de/" }],
  },
  {
    path: "zoos/zoo-zuerich/hotels",
    description: "Hotels in der Nähe vom Zoo Zürich: Zürichberg, Fluntern, Innenstadt und Oerlikon – mit Anreise per Tram, Spartipps für die teure Stadt und Familienideen.",
    focusKeyword: "Hotel Zoo Zürich",
    linkAnchors: ["Hotels beim Zoo Zürich", "Hotel in der Nähe vom Zoo Zürich"],
    markdown: `Der **Zoo Zürich** liegt auf dem **Zürichberg** im Osten der Stadt, umgeben von Wald. Bekannt ist er für den **Kaeng Krachan Elefantenpark** und die **Masoala-Regenwaldhalle**. Zürich ist eine teure Stadt – mit der richtigen Lage sparst du trotzdem Zeit und Geld.

## Die besten Lagen

### Zürichberg und Fluntern
Am nächsten zum Zoo und ruhig im Grünen. Hier gibt es einige gehobene Hotels mit Blick über Stadt und See. Ideal, wenn du Ruhe suchst und das Budget es zulässt.

### Innenstadt und Hauptbahnhof
Die größte Auswahl. Vom **Hauptbahnhof** bringt dich die Tram in etwa 20 Minuten bis zur Endstation **Zoo**. Du bist zentral für die Altstadt, den See und Ausflüge.

### Oerlikon und Zürich Nord
Moderner Stadtteil mit eigenem S-Bahnhof. Hotels sind hier oft günstiger als in der Innenstadt, die Anbindung ist sehr gut.

### Außerhalb der Stadt
Wer sparen möchte, schaut in Orten entlang der **S-Bahn** – etwa Richtung Winterthur oder Zürichsee. Die Schweizer Bahn ist pünktlich und eng getaktet.

## Für Familien

- Der Zoo ist groß und hügelig – plane einen ganzen Tag.
- Viele Hotels bieten Familienzimmer, in Zürich sind **Apartments** mit Küche eine gute Möglichkeit, bei den Restaurantpreisen zu sparen.
- Im Wald rund um den Zoo gibt es Spazierwege und Spielplätze für einen entspannten Abschluss.

## Anreise und ÖV

- Tram bis zur Haltestelle **Zoo** (Endstation), alternativ Bus.
- Hotelgäste in Zürich erhalten je nach Unterkunft Vergünstigungen für den **öffentlichen Verkehr** – frag bei der Buchung nach.
- Parken am Zoo ist begrenzt und gebührenpflichtig.

${hotelTips}

## Tipp: Preise in Franken

Zürich gehört zu den teuersten Städten Europas. Vergleiche Hotelpreise in **Franken und Euro** und beachte, dass Kartenzahlungen in Franken bei manchen Banken Fremdwährungsgebühren kosten.

Tickets, Preise und Tipps für den Zoo Zürich findest du in unseren weiteren Ratgebern.`,
    faq: [
      ["Wie komme ich zum Zoo Zürich?", "Mit der Tram bis zur Endstation Zoo – vom Hauptbahnhof dauert die Fahrt etwa 20 Minuten."],
      ["Wo übernachtet man günstig für den Zoo Zürich?", "In Oerlikon oder in Orten entlang der S-Bahn außerhalb der Stadt. Die Anbindung ist sehr gut."],
      ["Gibt es Hotels direkt beim Zoo Zürich?", "Auf dem Zürichberg gibt es einige Hotels in Zoonähe, meist im gehobenen Preissegment."],
    ],
    sources: [ZRH, { title: "Zürich Tourismus – offizielles Portal", url: "https://www.zuerich.com/de" }],
  },
  {
    path: "zoos/sea-life/hotels",
    description: "Hotels in der Nähe von SEA LIFE: Übernachtungstipps für Hannover, Konstanz, München, Oberhausen, Speyer und Timmendorfer Strand – mit Ausflugsideen.",
    focusKeyword: "SEA LIFE Hotel",
    linkAnchors: ["Hotels in der Nähe von SEA LIFE", "SEA LIFE Hotel"],
    markdown: `Ein Besuch in einem **SEA-LIFE**-Aquarium dauert meist zwei bis drei Stunden – perfekt als Teil eines Wochenendausflugs. Weil jeder Standort in einer anderen Region liegt, findest du hier Übernachtungstipps für alle deutschen SEA-LIFE-Aquarien.

## SEA LIFE Hannover
Liegt in **Herrenhausen**, direkt bei den berühmten **Herrenhäuser Gärten**. Hotels findest du in der Innenstadt und rund um den Hauptbahnhof – mit der Stadtbahn bist du schnell dort. Kombiniere den Besuch mit den Gärten und, für Familien, dem Erlebnis-Zoo Hannover.

## SEA LIFE Konstanz
Am **Hafen von Konstanz** am Bodensee. Ein Schwerpunkt ist die Unterwasserwelt des Rheins und des Bodensees. Hotels in der Altstadt und am See sind zu Fuß erreichbar. Ausflugsideen: Schiffsfahrt zur Blumeninsel **Mainau**, Abstecher in die Schweiz.

## SEA LIFE München
Im **Olympiapark**. Übernachte in Schwabing, Neuhausen oder Milbertshofen – die U-Bahn hält direkt am Olympiazentrum. Kombinierbar mit Olympiaturm und BMW Welt.

## SEA LIFE Oberhausen
An der **Neuen Mitte Oberhausen** neben dem Einkaufszentrum Westfield Centro. Rund um das Centro gibt es mehrere Hotels, teils mit Familienzimmern. Ausflugsideen: Gasometer, LEGOLAND Discovery Centre und Freizeitangebote im Ruhrgebiet.

## SEA LIFE Speyer
Am **Rheinufer** in Speyer, unweit des Doms und des **Technik Museums Speyer**. Kleine Hotels und Pensionen in der Altstadt, auch Wohnmobilstellplätze in der Nähe.

## SEA LIFE Timmendorfer Strand
Direkt an der **Ostsee**. Hier lässt sich der Aquariumsbesuch mit einem Strandurlaub verbinden. Hotels, Ferienwohnungen und Pensionen gibt es entlang der Lübecker Bucht – in der Hauptsaison früh buchen.

## Kombitickets und Kurzurlaub

SEA LIFE gehört zu **Merlin Entertainments**, zu denen auch Freizeitparks und weitere Attraktionen gehören. Prüfe auf der offiziellen Website, ob es für deinen Standort **Kombitickets** oder Pakete mit Übernachtung gibt. Online gebuchte Tickets mit Zeitfenster sind meist günstiger als an der Kasse.

${hotelTips}

Mehr zu Tickets, Standorten und dem Besuch mit Kindern findest du in unseren weiteren SEA-LIFE-Ratgebern.`,
    faq: [
      ["Wie viele SEA LIFE gibt es in Deutschland?", "Unter anderem in Hannover, Konstanz, München, Oberhausen, Speyer und Timmendorfer Strand. Die aktuelle Liste steht auf der offiziellen Website."],
      ["Lohnt sich eine Übernachtung für SEA LIFE?", "Für den Aquariumsbesuch allein meist nicht, aber jeder Standort lässt sich gut mit weiteren Ausflugszielen zu einem Wochenende kombinieren."],
      ["Gibt es SEA LIFE Pakete mit Hotel?", "Je nach Standort und Saison bietet Merlin Entertainments Kurzurlaub-Pakete an. Die aktuellen Angebote stehen auf der offiziellen Website."],
    ],
    sources: [SEALIFE],
  },

  /* ================= Freizeitparks ================= */
  {
    path: "freizeitparks/europa-park/tickets",
    description: "Europa-Park Tickets: datierte Online-Tickets mit Tagespreisen, Aufpreis an der Kasse, freier Eintritt für Kleinkinder und Geburtstagskinder, 2-Tages-Tickets.",
    focusKeyword: "Europa-Park Tickets",
    linkAnchors: ["Europa-Park Tickets", "Tickets für den Europa-Park"],
    markdown: `Der **Europa-Park** in Rust ist Deutschlands größter Freizeitpark und wurde mehrfach als bester Freizeitpark der Welt ausgezeichnet. Damit dein Besuch nicht teurer wird als nötig, erklären wir dir das **Ticketsystem**.

## So funktioniert das Ticketsystem

- **Datierte Tickets:** Online kaufst du ein Ticket für einen **bestimmten Tag**.
- **Tagesabhängige Preise:** Der Preis hängt vom Datum ab – an ruhigen Tagen ist es günstiger, in Ferien und an Wochenenden teurer.
- **Kasse vor Ort:** An der Tageskasse zahlst du einen **Aufpreis** pro Ticket, und Tickets gibt es dort nur, solange noch Kapazität frei ist. Online kaufen ist also günstiger und sicherer.

## Ticketarten

| Ticket | Für wen |
|---|---|
| **Tagesticket Erwachsene** | ab 12 Jahren |
| **Tagesticket Kinder** | 4 bis 11 Jahre |
| **Senioren** | ab 60 Jahren zum ermäßigten Preis |
| **2-Tages-Ticket** | für zwei Parktage, günstiger als zwei Einzeltickets |
| **Kombiticket mit Rulantica** | Park und Wasserwelt, nur an ausgewählten Tagen |
| **ResortPass (Jahreskarte)** | für Vielbesucher, in mehreren Stufen |

**Kinder bis 3 Jahre** haben freien Eintritt. **Geburtstagskinder bis 12 Jahre** kommen an ihrem Geburtstag mit Ausweis kostenlos in den Park.

## Rulantica ist extra

Die Wasserwelt **Rulantica** gehört zum Resort, ist aber **nicht im Parkticket enthalten**. Es gibt eigene Tickets und an ausgewählten Tagen Kombitickets.

## Spartipps

1. **Früh online buchen** und einen günstigen Tag wählen – unter der Woche außerhalb der Ferien.
2. **2-Tages-Ticket** statt zwei Einzeltickets, wenn ihr länger bleibt.
3. **Hotelpakete** vergleichen: Übernachtung im Resort und Eintritt zusammen können sich lohnen.
4. **Geburtstag** nutzen – Kinder bis 12 Jahre kommen dann gratis.
5. **Parkgebühr einplanen** – der Besucherparkplatz kostet pro Tag extra.
6. **ResortPass** durchrechnen, wenn ihr mehrmals im Jahr kommt.

## Saisonen

Neben der Sommersaison öffnet der Europa-Park zur **Halloween-Zeit** und in der **Wintersaison** (Ende November bis Anfang Januar, an Heiligabend und am ersten Weihnachtstag geschlossen). Die Preise unterscheiden sich je nach Saison.

Preise und Bedingungen ändern sich regelmäßig. Verbindlich sind die Angaben im offiziellen Ticketshop. Hotels, Achterbahnen und Tipps für Familien findest du in unseren weiteren Europa-Park-Ratgebern.`,
    faq: [
      ["Sind Europa-Park Tickets online günstiger?", "Ja. An der Tageskasse gibt es einen Aufpreis pro Ticket, und Tickets werden dort nur verkauft, solange Kapazität frei ist."],
      ["Ab welchem Alter kostet der Europa-Park Eintritt?", "Kinder bis 3 Jahre sind frei. Von 4 bis 11 Jahren gilt der Kinderpreis, ab 12 Jahren der Erwachsenenpreis."],
      ["Ist Rulantica im Europa-Park-Ticket enthalten?", "Nein. Rulantica hat eigene Tickets. An ausgewählten Tagen gibt es Kombitickets."],
      ["Haben Kinder am Geburtstag freien Eintritt?", "Ja, Kinder bis 12 Jahre kommen an ihrem Geburtstag mit Ausweis kostenlos in den Europa-Park."],
    ],
    sources: [EP],
  },
  {
    path: "freizeitparks/phantasialand/tickets",
    description: "Phantasialand Tickets: nur online, datiert und mit Tagespreisen – Kinder bis 3 frei, Geburtstagskinder bis 11 gratis, Wintertraum und Spartipps.",
    focusKeyword: "Phantasialand Tickets",
    linkAnchors: ["Phantasialand Tickets", "Tickets für das Phantasialand"],
    markdown: `Das **Phantasialand** in Brühl bei Köln ist bekannt für seine aufwendig gestalteten Themenwelten und spektakulären Achterbahnen wie Taron oder F.L.Y. Beim **Ticketkauf** gibt es ein paar Besonderheiten, die du kennen solltest.

## Das Wichtigste vorab

- **Nur online:** Tickets gibt es ausschließlich im **Online-Shop** – eine klassische Tageskasse gibt es nicht.
- **Datiert:** Jedes Ticket gilt für einen festen Tag. **Umbuchung und Stornierung sind ausgeschlossen.**
- **Tagespreise:** Jeder Kalendertag hat einen eigenen Preis. Ruhige Tage sind deutlich günstiger als Ferien und Wochenenden.
- **Am Besuchstag** kannst du noch bis mittags online kaufen, solange das Kontingent reicht.

## Ticketarten und Altersgrenzen

| Alter | Ticket |
|---|---|
| **0 bis 3 Jahre** | kostenlos, Altersnachweis mitnehmen |
| **4 bis 11 Jahre** | Kinderticket |
| **ab 12 Jahren** | Erwachsenenticket |

**Geburtstagskinder bis einschließlich 11 Jahre** kommen an ihrem tatsächlichen Geburtstag kostenlos in den Park – wenn sie **vorab reserviert** sind und am Eingang einen Ausweis zeigen.

## Spartipps

1. **Preiskalender vergleichen:** Der Unterschied zwischen dem günstigsten und dem teuersten Tag ist groß.
2. **Unter der Woche außerhalb der NRW-Schulferien** besuchen.
3. **Wintertraum:** In der Wintersaison (Mitte November bis Ende Januar, mit einzelnen Schließtagen) sind die Tickets meist günstiger. Nicht alle Attraktionen fahren im Winter.
4. **Parkgebühr einplanen** – der Parkplatz kostet pro Auto und Tag extra. Gäste der Parkhotels parken kostenlos.
5. **Geburtstag** nutzen und rechtzeitig reservieren.

## Hotels und Kurzurlaub

Das Phantasialand hat eigene **Themenhotels** direkt am Park. Pakete mit Übernachtung und Eintritt können sich lohnen, besonders für zwei Tage. Für Übernachtungen in Brühl fällt eine kleine **Beherbergungssteuer** an. Mehr dazu in unserem Ratgeber zu den Phantasialand-Hotels.

## Anreise

Der Park liegt zwischen Köln und Bonn. Mit dem Zug fährst du bis Brühl, von dort gibt es eine Busverbindung. Mit dem Auto über die A553 oder A1.

Preise und Bedingungen ändern sich regelmäßig – verbindlich ist der offizielle Online-Shop. Achterbahnen und Tipps für Familien findest du in unseren weiteren Phantasialand-Ratgebern.`,
    faq: [
      ["Kann man Phantasialand Tickets an der Kasse kaufen?", "Nein. Tickets gibt es nur im Online-Shop, am Besuchstag noch bis mittags, solange das Kontingent reicht."],
      ["Kann ich ein Phantasialand Ticket umbuchen?", "Nein. Die Tickets gelten für einen festen Tag, Umbuchung und Stornierung sind ausgeschlossen."],
      ["Haben Kinder am Geburtstag freien Eintritt im Phantasialand?", "Ja, Kinder bis einschließlich 11 Jahre an ihrem Geburtstag – sie müssen vorab reserviert werden und am Eingang einen Ausweis zeigen."],
    ],
    sources: [PHL],
  },

  /* ================= Urlaub ================= */
  {
    path: "urlaub-reisen/familienurlaub/familienhotels",
    description: "Familienhotels finden: Worauf es bei Kinderbetreuung, Familienzimmern, Essen und Lage ankommt – plus Gütesiegel wie Kinderhotels und Familotel erklärt.",
    focusKeyword: "Familienhotel",
    linkAnchors: ["Familienhotels", "Familienhotel"],
    markdown: `Ein gutes **Familienhotel** macht den Urlaub für Eltern und Kinder entspannter: Die Kleinen haben Spaß, die Großen echte Pausen. Doch nicht jedes Hotel, das „familienfreundlich“ draufschreibt, ist es auch.

## Woran du ein echtes Familienhotel erkennst

### Zimmer
- **Familienzimmer oder Suiten** mit getrenntem Schlafbereich – Eltern wollen abends nicht im Dunkeln sitzen.
- **Babyausstattung** auf Anfrage: Gitterbett, Wickelauflage, Babyphone, Flaschenwärmer.
- **Sicherheit:** Steckdosensicherungen, Treppenschutz, sichere Balkone.

### Betreuung
- **Kinderbetreuung** nach Altersgruppen – im Idealfall schon für Kleinkinder.
- **Betreuungszeiten** prüfen: Täglich mehrere Stunden oder nur an manchen Tagen?
- **Qualifikation** der Betreuer und Gruppengröße.

### Essen
- **Kindermenüs** oder ein eigenes Kinderbuffet
- **Frühe Essenszeiten** für Kinder, damit Eltern später in Ruhe essen können
- Rücksicht auf **Allergien** und Unverträglichkeiten

### Angebote
- **Hallenbad** mit Kinderbecken – wichtig bei schlechtem Wetter
- **Spielzimmer, Spielplatz, Bauernhof** oder Kinderprogramm
- Nähe zu **Ausflugszielen** wie Zoos, Freizeitparks oder Wanderwegen

## Gütesiegel und Hotelgruppen

Im Alpenraum und in Deutschland haben sich Familienhotels zu Verbünden mit eigenen Qualitätskriterien zusammengeschlossen:

- **Kinderhotels Europa** – ein Verbund von Familienhotels vor allem in Österreich, Südtirol und Deutschland mit festgelegten Mindeststandards, etwa bei Betreuung und Ausstattung.
- **Familotel** – Familienhotels in Deutschland und Nachbarländern mit Schwerpunkt auf Betreuung und Vollpension.
- Außerdem bieten viele **Ferienregionen** eigene Familien-Gütesiegel.

Ein Siegel ist ein guter Anhaltspunkt, ersetzt aber nicht den Blick auf das konkrete Angebot.

## Hotel oder Ferienwohnung?

| | Familienhotel | Ferienwohnung |
|---|---|---|
| Kinderbetreuung | oft inklusive | nein |
| Essen | inklusive oder Halbpension | selbst kochen |
| Platz | begrenzt | meist mehr |
| Kosten | höher | meist günstiger |
| Erholung für Eltern | hoch | abhängig von der Organisation |

## Spartipps

1. **Nebensaison** wählen, wenn eure Kinder noch nicht schulpflichtig sind.
2. **Kinderfestpreise** und Ermäßigungen vergleichen – sie unterscheiden sich stark.
3. **All-inclusive-Pakete** durchrechnen: Getränke, Betreuung und Freizeitangebote können viel ausmachen.
4. **Frühbucherrabatte** für Schulferien nutzen.

Weitere Ideen für den Familienurlaub findest du in unseren Ratgebern zu Urlaubszielen und Freizeitparks.`,
    faq: [
      ["Was macht ein gutes Familienhotel aus?", "Familienzimmer mit getrenntem Schlafbereich, Kinderbetreuung nach Altersgruppen, kinderfreundliches Essen, ein Hallenbad und Angebote auch bei schlechtem Wetter."],
      ["Was sind Kinderhotels?", "Kinderhotels Europa ist ein Verbund von Familienhotels, vor allem in Österreich, Südtirol und Deutschland, mit gemeinsamen Mindeststandards."],
      ["Ist ein Familienhotel teurer als eine Ferienwohnung?", "Meist ja, dafür sind Betreuung, Essen und Freizeitangebote oft inklusive. Für Eltern kann das deutlich erholsamer sein."],
    ],
    sources: [
      { title: "Kinderhotels Europa", url: "https://www.kinderhotels.com/" },
      { title: "Familotel", url: "https://www.familotel.com/" },
    ],
  },

  /* ================= Autos ================= */
  {
    path: "autos-mobilitaet/fahrzeugportraets/modellportraets",
    description: "Modellporträts verstehen: So liest du Fahrzeugdaten wie WLTP-Verbrauch, Leistung, Ladeleistung, Kofferraum und Crashtest-Sterne richtig – mit Checkliste.",
    focusKeyword: "Auto Datenblatt verstehen",
    linkAnchors: ["Modellporträts", "Fahrzeugdaten verstehen"],
    markdown: `In unseren **Modellporträts** stellen wir Autos verständlich vor – ohne Werbesprache. Damit du Fahrzeuge selbst vergleichen kannst, erklären wir hier, was die wichtigsten **Daten im Datenblatt** wirklich bedeuten.

## Leistung und Drehmoment

- **Leistung (kW/PS):** Die Höchstleistung des Motors. 1 kW entspricht rund 1,36 PS.
- **Drehmoment (Nm):** Wie kräftig das Auto anzieht. Elektroautos haben ihr volles Drehmoment sofort – deshalb wirken sie oft spritziger, als die PS-Zahl vermuten lässt.
- **0–100 km/h:** Gut zum Vergleichen, im Alltag aber selten entscheidend.

## Verbrauch und Reichweite (WLTP)

Seit 2018 werden Verbrauch, CO₂ und Reichweite nach dem **WLTP-Verfahren** gemessen. Es ist realistischer als der alte NEFZ, liegt im Alltag aber meist **unter** den tatsächlichen Werten:

- **Verbrenner:** Rechne mit etwas Mehrverbrauch, vor allem auf der Autobahn.
- **Elektroauto:** Im Winter und bei hohem Tempo kann die Reichweite deutlich sinken.
- **Plug-in-Hybrid:** Die Normwerte sind nur erreichbar, wenn du sehr regelmäßig lädst.

## Für Elektroautos besonders wichtig

| Wert | Was er bedeutet |
|---|---|
| **Batteriekapazität (netto, kWh)** | nutzbare Energie – entscheidend für die Reichweite |
| **AC-Ladeleistung (kW)** | Laden an Wallbox und Säule, z. B. 11 kW |
| **DC-Ladeleistung (kW)** | Schnellladen – die Spitze ist weniger wichtig als die durchschnittliche Ladekurve |
| **Ladezeit 10–80 %** | der praktischste Vergleichswert für lange Fahrten |

## Platz und Alltag

- **Kofferraumvolumen:** Achte darauf, ob bis zur Abdeckung oder bis zum Dach gemessen wurde.
- **Anhängelast:** wichtig für Wohnwagen und Fahrradträger.
- **Wendekreis** und Außenmaße für die Garage.
- **Zuladung:** Wie viel Gewicht darf zusätzlich zu Fahrer und Tank rein?

## Sicherheit

**Euro NCAP** testet Neuwagen in Crashtests und vergibt bis zu **fünf Sterne**. Wichtig: Die Anforderungen werden regelmäßig strenger – ein Fünf-Sterne-Ergebnis von vor vielen Jahren ist nicht direkt mit einem aktuellen vergleichbar. Schau dir auch die Einzelwertungen für Erwachsene, Kinder und Fußgänger an.

## Kosten

Der Kaufpreis ist nur ein Teil. Für einen fairen Vergleich zählen **Versicherung, Steuer, Wartung, Energie und Wertverlust**. Wie du das berechnest, zeigt unser Ratgeber zu den Betriebskosten.

## Checkliste für deinen Vergleich

- [ ] WLTP-Werte mit Alltagstests (z. B. ADAC) abgleichen
- [ ] Ladekurve statt nur Spitzenladeleistung prüfen
- [ ] Kofferraum und Zuladung zu deinem Alltag passend
- [ ] aktuelles Euro-NCAP-Ergebnis
- [ ] Gesamtkosten pro Monat statt nur Kaufpreis`,
    faq: [
      ["Wie realistisch sind WLTP-Werte?", "Realistischer als die alten NEFZ-Werte, im Alltag aber meist etwas zu niedrig. Bei Elektroautos sinkt die Reichweite vor allem im Winter und bei hohem Tempo."],
      ["Was ist wichtiger beim Elektroauto: Batterie oder Ladeleistung?", "Beides. Für den Alltag zählt die nutzbare Batteriekapazität, für lange Strecken die Ladezeit von 10 auf 80 Prozent."],
      ["Sind fünf Euro-NCAP-Sterne immer gleich gut?", "Nein. Die Testanforderungen werden regelmäßig verschärft. Vergleiche Ergebnisse aus ähnlichen Jahren."],
    ],
    sources: [NCAP, ADAC, OEAMTC],
  },
  {
    path: "autos-mobilitaet/fahrzeugportraets/neuvorstellungen",
    description: "Neuvorstellungen bei Autos richtig einordnen: Weltpremiere, Marktstart, Lieferzeit und Facelift erklärt – und warum du auf erste Tests warten solltest.",
    focusKeyword: "Auto Neuvorstellungen",
    linkAnchors: ["Neuvorstellungen", "neue Automodelle"],
    markdown: `Jedes Jahr stellen Hersteller zahlreiche neue Modelle vor. Zwischen der glänzenden **Weltpremiere** und dem Auto vor deiner Tür liegt aber oft viel Zeit. Hier erfährst du, wie du **Neuvorstellungen** richtig einordnest.

## Die Begriffe

| Begriff | Bedeutung |
|---|---|
| **Studie / Concept Car** | Ausblick auf ein mögliches Modell – oft nie in Serie |
| **Weltpremiere** | erste offizielle Vorstellung des Serienmodells |
| **Bestellstart** | ab jetzt kann man konfigurieren und bestellen |
| **Marktstart** | erste Auslieferungen an Kunden |
| **Facelift / Modellpflege** | Überarbeitung eines bestehenden Modells, z. B. neue Lichter, Software oder Motoren |
| **Neue Generation** | weitgehend neu entwickeltes Modell |

Zwischen Weltpremiere und Marktstart vergehen oft **mehrere Monate**, manchmal mehr als ein Jahr.

## Was bei Neuvorstellungen oft fehlt

- **Endgültige Preise** und Ausstattungsvarianten
- **Homologierte WLTP-Werte** – zunächst oft nur „vorläufige“ Angaben
- **Unabhängige Tests** von Automobilclubs und Fachmedien
- **Crashtest-Ergebnisse** von Euro NCAP
- Erfahrungen mit **Software und Zuverlässigkeit**

## Warum Warten sich lohnen kann

1. **Kinderkrankheiten:** Die ersten Produktionsmonate bringen häufiger Software-Updates und Rückrufe.
2. **Preise:** Einführungsangebote sind nicht immer die günstigsten – später kommen oft Aktionen und Basisversionen.
3. **Lieferzeiten:** Bei beliebten Modellen kann es lange dauern.
4. **Tests:** Erst Alltagstests zeigen, wie realistisch Reichweite und Verbrauch sind.

## Wann früh kaufen sinnvoll ist

- Du **brauchst** das Konzept (z. B. ein bestimmtes Elektroauto-Format) und es gibt keine Alternative.
- Der Hersteller bietet **attraktive Konditionen** für Erstkunden.
- Es handelt sich um ein **Facelift** eines bewährten Modells – das Risiko ist kleiner.

## So bleibst du informiert

- **Automessen** wie die IAA Mobility in München, der Genfer Autosalon bzw. Nachfolgeformate und internationale Messen
- **Herstellerseiten** und Pressebereiche
- **Fachmedien** und die Testberichte von ADAC und ÖAMTC
- **Euro NCAP** für Crashtest-Ergebnisse neuer Modelle

In unseren Modellporträts erklären wir, wie du Fahrzeugdaten richtig liest – so kannst du jede Neuvorstellung selbst einordnen.`,
    faq: [
      ["Was ist der Unterschied zwischen Facelift und neuer Generation?", "Ein Facelift überarbeitet ein bestehendes Modell, etwa Optik, Technik oder Software. Eine neue Generation ist weitgehend neu entwickelt."],
      ["Wie lange dauert es von der Premiere bis zur Auslieferung?", "Oft mehrere Monate, manchmal über ein Jahr. Bestellstart und Marktstart werden meist separat angekündigt."],
      ["Sollte man ein neues Automodell sofort kaufen?", "Wer kann, wartet erste unabhängige Tests und einige Monate Serienproduktion ab. Bei einem Facelift eines bewährten Modells ist das Risiko kleiner."],
    ],
    sources: [ADAC, OEAMTC, NCAP],
  },
  {
    path: "autos-mobilitaet/zubehoer/dashcams",
    description: "Dashcams: Was in Deutschland, Österreich und der Schweiz erlaubt ist, welche Funktionen wichtig sind und wie du sie datenschutzkonform nutzt.",
    focusKeyword: "Dashcam erlaubt",
    linkAnchors: ["Dashcams", "Dashcam"],
    markdown: `Eine **Dashcam** filmt aus dem Auto heraus das Verkehrsgeschehen. Nach einem Unfall kann ein Video helfen, den Hergang zu klären. Doch rechtlich gibt es große Unterschiede zwischen den Ländern – vor allem beim **Datenschutz**.

## Was ist erlaubt?

### Deutschland
- Der **Bundesgerichtshof** hat 2018 entschieden, dass Dashcam-Aufnahmen im Zivilprozess als **Beweismittel** verwertet werden können – auch wenn die Aufnahme datenschutzrechtlich problematisch war.
- **Dauerhaftes, anlassloses Filmen** verstößt aber gegen den Datenschutz und kann Bußgelder nach sich ziehen.
- **Zulässig** ist eine Kamera, die kurze Sequenzen laufend **überschreibt** und nur bei einem Ereignis (z. B. Aufprall) speichert.

### Österreich
Hier sind die Regeln **deutlich strenger**. Laut ÖAMTC ist eine Dashcam nur in engen Grenzen zulässig:
- nur **anlassbezogene** Speicherung, etwa durch einen Aufprallsensor ausgelöst,
- Aufnahme nur im **unmittelbaren Nahbereich**, keine hochauflösenden Weitwinkelaufnahmen, auf denen Personen oder Kennzeichen in der Ferne erkennbar sind,
- **Verschlüsselung** und Zugriffsschutz,
- **keine Veröffentlichung** im Internet.
Bei Verstößen drohen empfindliche Strafen nach dem Datenschutzrecht.

### Schweiz
Dashcams sind nicht ausdrücklich verboten, der Eidgenössische Datenschutzbeauftragte rät aber von dauerhaften Aufnahmen ab. Ob Aufnahmen vor Gericht verwertet werden, entscheidet der Einzelfall.

### Im Urlaub
In einigen Ländern sind Dashcams eingeschränkt oder verboten. Informiere dich vor der Reise beim Automobilclub.

## Diese Funktionen sind wichtig

- **Loop-Aufnahme:** überschreibt alte Aufnahmen automatisch.
- **G-Sensor:** sichert die Sequenz bei einem Aufprall.
- **Bildqualität bei Nacht** und Gegenlicht.
- **Abschaltbare Tonaufnahme** – Gespräche im Auto aufzunehmen ist heikel.
- **Parküberwachung** – aus Datenschutzgründen nur sehr eingeschränkt nutzen.
- **Sichere Befestigung**, die das Sichtfeld nicht einschränkt.

## Datenschutzkonform nutzen

1. **Keine Daueraufzeichnung** speichern.
2. Aufnahmen nur **im Ereignisfall** sichern und an Polizei, Versicherung oder Gericht weitergeben.
3. **Nie im Internet veröffentlichen**, wenn Personen oder Kennzeichen erkennbar sind.
4. Gespeicherte Videos **löschen**, sobald sie nicht mehr gebraucht werden.

*Dieser Ratgeber ersetzt keine Rechtsberatung. Die Rechtslage kann sich ändern.*`,
    faq: [
      ["Sind Dashcams in Deutschland erlaubt?", "Der Besitz ja. Dauerhaftes Filmen ist aber datenschutzwidrig. Kameras mit Loop-Aufnahme, die nur bei einem Ereignis speichern, gelten als vertretbar. Aufnahmen können vor Gericht als Beweis dienen."],
      ["Darf ich in Österreich eine Dashcam benutzen?", "Nur in sehr engen Grenzen: anlassbezogene Speicherung, kein Weitwinkel mit erkennbaren Personen oder Kennzeichen in der Ferne, Verschlüsselung und keine Veröffentlichung."],
      ["Darf ich Dashcam-Videos auf Social Media posten?", "Wenn Personen oder Kennzeichen erkennbar sind, nein. Das verletzt Persönlichkeits- und Datenschutzrechte."],
    ],
    sources: [
      { title: "ÖAMTC – Zulässigkeit von Dashcams in Österreich", url: "https://www.oeamtc.at/thema/vorschriften-strafen/zulaessigkeit-von-dashcams-im-oesterreichischen-strassenverkehr-16180594" },
      ADAC,
      { title: "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)", url: "https://www.edoeb.admin.ch/" },
    ],
  },
  {
    path: "autos-mobilitaet/zubehoer/kindersitze",
    description: "Kindersitze richtig wählen: i-Size (R129) erklärt, Kindersitzpflicht in Deutschland und Österreich, rückwärts fahren, Isofix und typische Einbaufehler.",
    focusKeyword: "Kindersitz",
    linkAnchors: ["Kindersitze", "Kindersitz"],
    markdown: `Ein passender **Kindersitz** schützt bei einem Unfall Leben. Doch Normen, Altersgruppen und Einbauarten verwirren viele Eltern. Hier bekommst du den Überblick.

## Wie lange gilt die Kindersitzpflicht?

| Land | Pflicht für Kinder … |
|---|---|
| **Deutschland** | bis 12 Jahre, die kleiner als 150 cm sind |
| **Österreich** | bis 14 Jahre, die kleiner als 135 cm sind |
| **Schweiz** | bis 12 Jahre, die kleiner als 150 cm sind |

Wer größer ist, darf den normalen Gurt nutzen. Fachleute empfehlen aber, eine Sitzerhöhung mit Rückenlehne so lange zu verwenden, bis der Gurt richtig über Schulter und Becken verläuft.

## Die Normen: R129 (i-Size) und R44

- **UN R129 (i-Size)** ist die aktuelle Norm. Sitze werden nach **Körpergröße** statt nach Gewicht eingeteilt, ein **Seitenaufpralltest** ist Pflicht und Kinder fahren mindestens bis **15 Monate rückwärts**.
- **ECE R44** ist die ältere Norm. Neue R44-Sitze werden in der EU seit September 2024 nicht mehr verkauft. **Vorhandene R44/04-Sitze dürfen weiter benutzt werden.**

Beim Neukauf solltest du einen **R129-Sitz** wählen.

## Rückwärts fahren – so lange wie möglich

Bei einem Frontalaufprall verteilt ein rückwärtsgerichteter Sitz die Kräfte auf den ganzen Rücken. Der Kopf eines Kleinkinds ist im Verhältnis schwer, der Nacken noch schwach. Deshalb gilt: **so lange wie möglich rückwärts**, mindestens bis 15 Monate.

**Wichtig:** Ein rückwärtsgerichteter Sitz auf dem Beifahrersitz ist nur erlaubt, wenn der **Front-Airbag deaktiviert** ist.

## Isofix oder Gurt?

- **Isofix** verbindet den Sitz fest mit der Karosserie. Einbaufehler werden seltener. Bei i-Size-Sitzen ist Isofix Standard (Ausnahme: Babyschalen).
- **Gurtbefestigte Sitze** sind flexibler einsetzbar, z. B. in älteren Autos oder Zweitwagen. Hier ist der richtige Gurtverlauf entscheidend.

## Typische Fehler

1. **Gurt zu locker:** Zwischen Gurt und Kind sollte höchstens eine flache Hand passen.
2. **Dicke Winterjacke:** Sie macht den Gurt locker – Jacke ausziehen und darüber eine Decke legen.
3. **Zu früher Wechsel** in die nächste Sitzgruppe.
4. **Gebrauchte Sitze unbekannter Herkunft:** Nach einem Unfall kann ein Sitz unsichtbar beschädigt sein.
5. **Sitz nicht ausprobiert:** Nicht jeder Sitz passt in jedes Auto – vor dem Kauf im eigenen Auto testen.

## Testergebnisse nutzen

Automobilclubs wie **ADAC und ÖAMTC** testen Kindersitze regelmäßig gemeinsam mit Verbraucherorganisationen auf Sicherheit, Bedienung und Schadstoffe. Die Ergebnisse sind eine gute Entscheidungshilfe.

*Die Angaben geben einen Überblick, maßgeblich sind die aktuellen gesetzlichen Bestimmungen und die Anleitung des Sitzherstellers.*`,
    faq: [
      ["Bis wann braucht ein Kind einen Kindersitz?", "In Deutschland und der Schweiz bis 12 Jahre oder 150 cm, in Österreich bis 14 Jahre oder 135 cm – je nachdem, was zuerst erreicht wird."],
      ["Darf ich meinen alten R44-Kindersitz noch benutzen?", "Ja. Neue R44-Sitze werden in der EU nicht mehr verkauft, vorhandene R44/04-Sitze dürfen aber weiter verwendet werden."],
      ["Wie lange sollte mein Kind rückwärts fahren?", "So lange wie möglich, mindestens aber bis 15 Monate. Rückwärtsgerichtete Sitze schützen Kopf und Nacken besser."],
    ],
    sources: [
      { title: "ÖAMTC – Kindersitz: Pflicht, Normen und Tipps", url: "https://www.oeamtc.at/thema/kindersicherheit/kindersitz-27519473" },
      ADAC,
    ],
  },
  {
    path: "autos-mobilitaet/news/branchen-news",
    description: "Autobranche verstehen: Die großen Themen wie Elektromobilität, CO₂-Flottengrenzwerte, Software und Zölle erklärt – und verlässliche Quellen für News.",
    focusKeyword: "Autobranche News",
    linkAnchors: ["Branchen-News", "Autobranche"],
    markdown: `Die Autoindustrie steckt im größten Umbruch seit Jahrzehnten. Auf dieser Seite erklären wir die **großen Themen**, die hinter den täglichen Schlagzeilen stehen – damit du Nachrichten aus der Branche besser einordnen kannst.

## Die großen Themen

### Elektromobilität
Der Anteil von Elektroautos an den Neuzulassungen wächst, aber unterschiedlich schnell je nach Land. Wichtige Treiber sind **Preise, Ladeinfrastruktur und Förderungen**. Nachrichten über Absatzzahlen, Werksumstellungen und neue Batterietechnik drehen sich meist um diese Frage.

### CO₂-Flottengrenzwerte der EU
Hersteller müssen den durchschnittlichen CO₂-Ausstoß ihrer verkauften Neuwagen senken – sonst drohen Strafzahlungen. Das Ziel für 2035 und mögliche Anpassungen werden politisch intensiv diskutiert. Viele Entscheidungen der Hersteller (Modellpalette, Preise, Rabatte auf E-Autos) hängen direkt damit zusammen.

### Software und das „vernetzte Auto“
Autos werden zunehmend über Software definiert: **Over-the-Air-Updates**, Assistenzsysteme, Infotainment, Abo-Funktionen. Für Hersteller ist das ein neues Geschäftsfeld, für Kunden eine Frage von Datenschutz und Kosten.

### Wettbewerb aus China
Chinesische Hersteller drängen mit günstigen Elektroautos nach Europa. Die EU hat dafür **Zusatzzölle** auf in China gebaute Elektroautos eingeführt. Daraus ergeben sich Schlagzeilen über Handelsstreit, neue Werke in Europa und Preiskämpfe.

### Zulieferer und Arbeitsplätze
Elektroautos brauchen weniger Teile als Verbrenner. Viele Zulieferer müssen sich neu aufstellen – Nachrichten über Stellenabbau oder neue Werke hängen oft damit zusammen.

### Autonomes Fahren
Assistenzsysteme werden immer leistungsfähiger. Wie weit selbstfahrende Autos wirklich sind, erklären wir im Ratgeber zu den Stufen des autonomen Fahrens.

## So liest du Auto-News richtig

1. **Quelle prüfen:** Pressemitteilung eines Herstellers, unabhängiges Fachmedium oder Meinungsbeitrag?
2. **Zahlen einordnen:** Prozentangaben brauchen eine Basis. „+50 %“ kann auch von sehr niedrigem Niveau sein.
3. **Ankündigung ≠ Realität:** Pläne und Ziele ändern sich häufig.
4. **Land beachten:** Zulassungszahlen und Förderungen unterscheiden sich zwischen Deutschland, Österreich und der Schweiz.

## Verlässliche Quellen

- **Kraftfahrt-Bundesamt (KBA)** – offizielle Zulassungszahlen für Deutschland
- **Statistik Austria** – Kfz-Neuzulassungen in Österreich
- **ADAC und ÖAMTC** – Tests, Verbraucherinformationen und Einordnung
- **Europäische Kommission** – Regeln zu CO₂ und Fahrzeugsicherheit

Aktuelle Rückrufe findest du in unserem Ratgeber zu Rückrufen.`,
    faq: [
      ["Wo finde ich offizielle Zulassungszahlen?", "Für Deutschland beim Kraftfahrt-Bundesamt, für Österreich bei Statistik Austria."],
      ["Was sind CO₂-Flottengrenzwerte?", "EU-Vorgaben für den durchschnittlichen CO₂-Ausstoß aller Neuwagen eines Herstellers. Wer sie überschreitet, muss Strafzahlungen leisten."],
      ["Warum gibt es Zölle auf Elektroautos aus China?", "Die EU hat Zusatzzölle eingeführt, weil sie unfaire staatliche Subventionen in China sieht. Das Thema ist Teil eines größeren Handelsstreits."],
    ],
    sources: [
      KBA,
      { title: "Statistik Austria – Kfz-Neuzulassungen", url: "https://www.statistik.at/" },
      { title: "Europäische Kommission – CO₂-Standards für Pkw", url: "https://climate.ec.europa.eu/eu-action/transport/road-transport-reducing-co2-emissions-vehicles_de" },
      ADAC,
    ],
  },
];
