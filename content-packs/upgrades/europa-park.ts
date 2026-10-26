import type { UpgradePage } from "../types";

/**
 * Pilot „ausführliche Unterseiten“: Europa-Park-Cluster.
 * Jede Seite erfüllt eine eigene Suchabsicht (Tickets/Preise, Hotels, Achterbahnen, mit Kindern, Besuchszeit & Tipps).
 * Stand der Recherche: Oktober 2026.
 */

const EP_TICKETS = { title: "Europa-Park – Tickets & Preise (offizieller Ticketshop)", url: "https://www.europapark.de/de/tickets" };
const EP_HOTELS = { title: "Europa-Park – Hotelübersicht", url: "https://www.europapark.de/de/hoteluebersicht" };
const EP_WINTER = { title: "Europa-Park – Winterzauber (Saison 2026/27)", url: "https://www.europapark.de/de/freizeitpark/infos/planen-sie-ihren-besuch/winterzauber-im-europa-park" };
const EP_ANREISE = { title: "Europa-Park – Anreise", url: "https://www.europapark.de/de/freizeitpark/infos/planen-sie-ihren-besuch/anreise-zum-europa-park" };
const EP_VOLTRON = { title: "Europa-Park – Voltron Nevera powered by Rimac", url: "https://www.europapark.de/de/freizeitpark/attraktionen/voltron-nevera-powered-rimac" };
const SWP_TICKETS = { title: "Schwarzwaldportal – Europa-Park Tickets und Preise (Stand Sept./Okt. 2026)", url: "https://www.schwarzwaldportal.com/europa-park-tickets-und-preise.html" };
const SWP_GROESSE = { title: "Schwarzwaldportal – Größenguide Europa-Park", url: "https://www.schwarzwaldportal.com/welche-attraktionen-darf-mein-kind-im-europa-park-fahren-groessenguide.html" };
const MD_TICKETS = { title: "Monsterdealz – Europa-Park Tickets 2026: Preise, Parken, Rulantica, Wintersaison", url: "https://www.monsterdealz.de/magazin/europa-park-tickets" };
const EP_TIPPS = { title: "Europa-Park – Tipps für Ihren Besuch", url: "https://www.europapark.de/de/freizeitpark/infos/planen-sie-ihren-besuch/tipps-fuer-ihren-besuch-im-europa-park" };
const SWP_ESSEN = { title: "Schwarzwaldportal – Essen im Europa-Park", url: "https://www.schwarzwaldportal.com/essen-im-europa-park.html" };
const HD24 = { title: "heidelberg24 – Die größten Achterbahnen im Europa-Park", url: "https://www.heidelberg24.de/verbraucher/europapark-rust-achterbahn-attraktion-silver-star-blue-fire-wodan-freizeitpark-rangliste-bw-91338913.html" };

export const europaParkUpgrades: UpgradePage[] = [
  /* ------------------------------------------------------------------ */
  {
    path: "freizeitparks/europa-park/tickets",
    description:
      "Europa-Park Tickets 2026: aktuelle Preise für Erwachsene, Kinder und Senioren, wer gratis reinkommt, Tageskasse vs. online, Parken, Rulantica und Spartipps.",
    focusKeyword: "Europa-Park Tickets",
    linkAnchors: ["Europa-Park Tickets", "Europa-Park Preise", "Eintritt im Europa-Park"],
    markdown: `Wer in den **Europa-Park** will, braucht ein **datiertes Ticket** – und der Preis hängt vom Besuchstag ab. Hier findest du alle Preise für 2026 auf einen Blick, wer gratis hineinkommt, was das Parken kostet und wie viel ein Familientag realistisch kostet.

> **Stand: Oktober 2026.** Der Europa-Park arbeitet mit tagesabhängigen Preisen. Den genauen Preis für deinen Wunschtag siehst du nur im offiziellen Ticketshop.

## Preise 2026 auf einen Blick

| Ticket | Online | an der Tageskasse |
|---|---|---|
| Erwachsene (ab 12 Jahren) | 67,00 – 76,00 € | 77,00 – 86,00 € |
| Kinder (4 – 11 Jahre) | 56,50 – 65,00 € | 66,50 – 75,00 € |
| Senioren (ab 60 Jahren) | 56,50 – 65,00 € | 66,50 – 75,00 € |
| Kinder bis 3 Jahre | gratis | gratis |

**Online ist immer günstiger:** An der Tageskasse kommen pro Ticket **10 €** dazu – und an vollen Tagen gibt es vor Ort nur noch Tickets, solange Kapazität frei ist.

## Wer kommt gratis in den Europa-Park?

- **Kinder bis einschließlich 3 Jahre** – ohne Ticket.
- **Geburtstagskinder bis 12 Jahre** – am Geburtstag gratis, mit Ausweis bzw. Kinderreisepass als Nachweis.

## Mehrtages- und Kombitickets

| Ticket | Erwachsene | Kinder / Senioren |
|---|---|---|
| 2-Tages-Ticket | 127,00 – 143,50 € | 105,00 – 119,00 € |
| 2-Tages-Ticket mit Übernachtung im Resort (Bestpreis) | 127,00 € | 105,00 € |
| 3-Tages-Ticket (nur mit Übernachtung) | 160,00 € | 133,00 € |

Wer zwei Tage bleibt, spart gegenüber zwei Einzeltickets. Mit Übernachtung in einem der Europa-Park-Hotels gilt der **Bestpreis** – mehr dazu unter „Europa-Park Hotels“.

## Parken

| Option | Preis pro Tag |
|---|---|
| Besucherparkplatz | 10,00 € |
| Reservierter Parkplatz am Haupteingang | 32,00 € |
| Tagescamper / Wohnmobil | 20,00 € |
| Motorrad, Fahrrad | gratis |

Hotelgäste parken kostenlos. Das Parkticket kannst du vorab online kaufen.

## Rulantica: eigener Eintritt

Die Wasserwelt **Rulantica** direkt neben dem Park ist **nicht** im Europa-Park-Ticket enthalten:

- Tageskarte Erwachsene: 41,00 – 54,00 €
- Kinder (4 – 11) und Senioren: 38,00 – 51,00 €
- Abendticket ab 17 Uhr und „Moonlight“-Ticket ab 19 Uhr sind günstiger
- Kinder bis 3 Jahre: gratis

Kombitickets Park + Rulantica gibt es nur an ausgewählten Terminen.

## Beispielrechnung: Familientag

Familie mit zwei Erwachsenen und zwei Kindern (6 und 9 Jahre), Anreise mit dem Auto, Tickets online:

| Posten | günstiger Tag | teurer Tag |
|---|---|---|
| 2 × Erwachsene | 134,00 € | 152,00 € |
| 2 × Kinder | 113,00 € | 130,00 € |
| Parken | 10,00 € | 10,00 € |
| **Summe Eintritt + Parken** | **257,00 €** | **292,00 €** |

An der Tageskasse wären es **40 € mehr**. Dazu kommen Essen und Getränke – wer Proviant mitbringt (erlaubt, außer Glasflaschen, Messer und Alkohol), spart hier am meisten. Hat eines der Kinder an dem Tag Geburtstag, fällt sein Ticket weg.

## So sparst du beim Eintritt

1. **Immer online buchen** – spart 10 € pro Person.
2. **Günstigen Tag wählen:** Der Preisunterschied zwischen günstigstem und teuerstem Tag liegt bei bis zu 9 € pro Erwachsenem. Werktage außerhalb der Ferien sind meist günstiger und leerer.
3. **Geburtstag nutzen:** Kinder bis 12 haben am Geburtstag freien Eintritt.
4. **Zwei Tage statt zwei Einzelbesuche** – das 2-Tages-Ticket ist günstiger.
5. **Mit Übernachtung** gilt der Bestpreis für Mehrtagestickets.
6. **Gruppen ab 20 Personen** zahlen einen Festpreis; Schulklassen haben eigene Tarife.
7. **Jahreskarte (ResortPass)** lohnt sich erst ab mehreren Besuchen pro Jahr – Verfügbarkeit vorher prüfen.

## Wichtige Ticket-Regeln

- Tickets sind **datumsgebunden** – plane deinen Tag vorher.
- Der Online-Preis ist **unabhängig davon, wie früh** du buchst – frühes Buchen sichert aber den Wunschtag.
- Die Tagesticketpreise gelten auch in der **Halloween- und Wintersaison**; die Öffnungszeiten sind dann kürzer (Details unter „Europa-Park Tipps“).

## Checkliste vor dem Kauf

- [ ] Wunschtag und Saison geprüft (Öffnungszeiten!)
- [ ] Alter aller Mitreisenden am Besuchstag (unter 4? Geburtstag?)
- [ ] Parkticket gleich mitbuchen
- [ ] Rulantica dazu? Dann eigenes Ticket
- [ ] Mehrere Tage? Hotel + Bestpreis vergleichen

Welche Achterbahnen sich lohnen, liest du unter „Achterbahnen im Europa-Park“, Tipps für Familien unter „Europa-Park mit Kindern“.`,
    faq: [
      ["Was kostet der Europa-Park 2026?", "Online kostet ein Tagesticket für Erwachsene je nach Tag 67 bis 76 €, für Kinder von 4 bis 11 Jahren und Senioren ab 60 Jahren 56,50 bis 65 €. An der Tageskasse kommen 10 € pro Ticket dazu."],
      ["Ist der Europa-Park für Kinder unter 4 Jahren kostenlos?", "Ja, Kinder bis einschließlich 3 Jahre brauchen kein Ticket."],
      ["Haben Kinder am Geburtstag freien Eintritt?", "Ja, Kinder bis 12 Jahre kommen an ihrem Geburtstag gratis in den Park. Ein Ausweis als Nachweis ist nötig."],
      ["Kann ich Europa-Park Tickets an der Tageskasse kaufen?", "Ja, aber 10 € teurer als online und nur, solange an dem Tag noch Kapazität frei ist. An vollen Tagen kann der Park ausverkauft sein."],
      ["Was kostet das Parken im Europa-Park?", "Der Besucherparkplatz kostet 10 € pro Tag, reserviertes Parken am Haupteingang 32 €. Hotelgäste parken kostenlos."],
      ["Ist Rulantica im Europa-Park-Ticket enthalten?", "Nein. Die Wasserwelt Rulantica hat einen eigenen Eintritt, für Erwachsene je nach Tag 41 bis 54 €."],
    ],
    comparison: {
      title: "Online oder Tageskasse?",
      columns: ["Online", "Tageskasse"],
      rows: [
        { label: "Preis Erwachsene", values: ["67 – 76 €", "77 – 86 €"] },
        { label: "Preis Kinder (4–11)", values: ["56,50 – 65 €", "66,50 – 75 €"] },
        { label: "Garantierter Eintritt", values: ["ja (datiert)", "nur bei freier Kapazität"] },
        { label: "Parkticket vorab", values: ["ja", "nein"] },
      ],
      note: "Stand Oktober 2026, Preise je nach Besuchstag.",
    },
    sources: [EP_TICKETS, SWP_TICKETS, MD_TICKETS],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "freizeitparks/europa-park/hotels",
    description:
      "Europa-Park Hotels im Vergleich: alle 6 Erlebnishotels, Tipi-Dorf und Camping mit Thema, Kategorie, Einstiegspreis, Gäste-Vorteilen und Tipps für Familien.",
    focusKeyword: "Europa-Park Hotels",
    linkAnchors: ["Europa-Park Hotels", "Hotels im Europa-Park", "Übernachtung im Europa-Park"],
    markdown: `Der **Europa-Park** ist zu groß für einen Tag – viele Besucher übernachten deshalb direkt im Resort. Hier vergleichen wir alle **Europa-Park Hotels**, das Tipi-Dorf und den Campingplatz: Was bietet welches Hotel, was kostet der Einstieg, und welches passt zu dir?

> **Stand: Oktober 2026.** Die Einstiegspreise stammen aus der offiziellen Hotelübersicht und gelten pro Person bzw. pro Nacht. An Wochenenden, in Ferien und in der Halloween- und Wintersaison liegen die Preise oft deutlich höher.

## Alle Hotels im Vergleich

| Unterkunft | Thema | Kategorie | ab | gut für |
|---|---|---|---|---|
| **Krønasår** | skandinavisches Naturkundemuseum | 4 Sterne Superior | 88,50 € p. P. | Kombination mit Rulantica |
| **Colosseo** | Italien, antikes Rom | 4 Sterne Superior | 100,50 € p. P. | großes Hotel mit Piazza-Flair |
| **Bell Rock** | Neuengland mit Leuchtturm | 4 Sterne Superior | 88,50 € p. P. | Paare, Themenfans |
| **Santa Isabel** | Kloster | 4 Sterne Superior | 88,50 € p. P. | ruhigere Atmosphäre |
| **El Andaluz** | spanische Finca | 4 Sterne | 94,00 € p. P. | Familien, mediterranes Flair |
| **Castillo Alcazar** | mittelalterliche Ritterburg | 4 Sterne | 83,50 € p. P. | Familien mit Ritter-Fans |
| **Riverside Western Lodge** | Wilder Westen | – | 83,50 € p. P. | Western-Fans, etwas günstiger |
| **Tipi Town** | Winnetou-Dorf mit Tipis, Planwagen, Blockhütten | – | 138,00 € / Nacht | Abenteuer, Schulklassen |
| **Caravaning** | Stellplätze für Wohnmobil und Wohnwagen | – | 29,00 € / Nacht | Camper |
| **Camping** | Zeltplätze im Grünen | – | 18,00 € / Nacht | kleines Budget |

Alle Unterkünfte liegen in unmittelbarer Nähe von Europa-Park und Rulantica.

## Vorteile für Hotelgäste

Laut Europa-Park gehören für Übernachtungsgäste unter anderem dazu:

- **früherer Einlass** in den Europa-Park und in Rulantica
- **Bestpreis für Mehrtagestickets** (2-Tages-Ticket ab 127 € für Erwachsene, 3-Tages-Ticket 160 € – siehe „Europa-Park Tickets“)
- **kostenloses Parken**
- **bevorzugte Buchung** für das Erlebnisrestaurant Eatrenalin
- **kostenlose Stornierung** bis 3 Tage vor Anreise (nicht bei Spartarifen)
- Angebote wie **„Kids for free“** für Kinder von 4 bis 11 Jahren in bestimmten Zeiträumen

## Welches Hotel passt zu wem?

- **Familien mit kleineren Kindern:** Castillo Alcazar (Ritterburg) und El Andaluz bieten den günstigsten Einstieg unter den Erlebnishotels.
- **Rulantica-Fans:** Krønasår liegt direkt bei der Wasserwelt – praktisch für einen Wasserpark-Tag.
- **Großes Hotelgefühl:** Colosseo mit Piazza, Bars und vielen Restaurants.
- **Thema statt Trubel:** Bell Rock und Santa Isabel.
- **Abenteuer und kleines Budget:** Tipi Town, Riverside Western Lodge und Camping in der Silver Lake City.

## Beispielrechnung: zwei Tage mit Übernachtung

Zwei Erwachsene, zwei Kinder (4–11), eine Nacht im günstigsten Erlebnishotel zum Einstiegspreis, 2-Tages-Tickets zum Bestpreis:

| Posten | Betrag |
|---|---|
| Übernachtung (4 × 83,50 €, Einstiegspreis) | ab 334,00 € |
| 2-Tages-Tickets (2 × 127 € + 2 × 105 €) | 464,00 € |
| Parken | 0 € (Hotelgäste) |
| **Summe** | **ab ca. 798 €** |

Gilt ein „Kids for free“-Angebot, sinkt der Übernachtungspreis deutlich. In der Hochsaison liegt die Summe oft spürbar höher.

## Alternativen in der Umgebung

Ferienwohnungen und Pensionen in **Rust, Ringsheim, Herbolzheim, Kappel-Grafenhausen** oder im nahen **Elsass** sind oft günstiger. Dann zahlst du allerdings Parken und bekommst keinen Bestpreis bzw. früheren Einlass.

## Buchungstipps

1. **Früh buchen** – vor allem für Ferien, Halloween und Wintersaison.
2. **Direkt beim Europa-Park buchen**, um Vorteile wie Bestpreis und flexible Stornierung zu nutzen.
3. **Pakete vergleichen:** Hotel + Tickets im Paket kann günstiger sein als einzeln.
4. **Unter der Woche** übernachten – oft günstiger als am Wochenende.

Alles zu Eintritt und Preisen steht unter „Europa-Park Tickets“, die beste Reisezeit unter „Europa-Park Tipps“.`,
    faq: [
      ["Wie viele Hotels hat der Europa-Park?", "Sechs Erlebnishotels (Krønasår, Colosseo, Bell Rock, Santa Isabel, El Andaluz, Castillo Alcazar) sowie die Silver Lake City mit Riverside Western Lodge, Tipi Town, Caravaning und Camping."],
      ["Welches Europa-Park Hotel ist am günstigsten?", "Unter den Erlebnishotels starten Castillo Alcazar und die Riverside Western Lodge bei 83,50 € pro Person (Stand Oktober 2026). Am günstigsten übernachtet man auf dem Campingplatz ab 18 € pro Nacht."],
      ["Welche Vorteile haben Hotelgäste im Europa-Park?", "Unter anderem früheren Einlass in Park und Rulantica, Bestpreise für Mehrtagestickets und kostenloses Parken."],
      ["Welches Hotel liegt am nächsten an Rulantica?", "Das Hotel Krønasår gehört zu Rulantica und liegt direkt bei der Wasserwelt."],
      ["Lohnt sich eine Übernachtung im Europa-Park?", "Für zwei oder mehr Tage meist ja: Mit Übernachtung gelten Bestpreise für Mehrtagestickets, Parken ist inklusive und man kommt früher in den Park."],
    ],
    comparison: {
      title: "Erlebnishotel oder Silver Lake City?",
      columns: ["Erlebnishotels", "Silver Lake City (Lodge, Tipi, Camping)"],
      rows: [
        { label: "Einstiegspreis", values: ["ab 83,50 € p. P.", "ab 18 € pro Nacht (Zelt)"] },
        { label: "Komfort", values: ["4-Sterne-Hotel, Restaurants, Wellness", "einfach bis rustikal"] },
        { label: "Erlebnis", values: ["Themenwelten (Rom, Burg, Leuchtturm …)", "Western-Abenteuer, Natur"] },
        { label: "Ideal für", values: ["Familien, Paare, Komfort", "Abenteuer, kleines Budget, Gruppen"] },
      ],
      note: "Stand Oktober 2026, laut offizieller Hotelübersicht.",
    },
    sources: [EP_HOTELS, MD_TICKETS],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "freizeitparks/europa-park/achterbahnen",
    description:
      "Achterbahnen im Europa-Park: alle Coaster mit Höhe, Tempo, Mindestgröße und Mindestalter – von Familienbahnen bis Silver Star, Blue Fire, Wodan und Voltron.",
    focusKeyword: "Achterbahnen im Europa-Park",
    linkAnchors: ["Achterbahnen im Europa-Park", "Europa-Park Achterbahnen", "Silver Star", "Voltron Nevera"],
    markdown: `Der **Europa-Park** hat über ein Dutzend Achterbahnen – vom gemütlichen Familien-Coaster bis zur höchsten Achterbahn Deutschlands. Hier findest du alle wichtigen Bahnen mit **Höhe, Tempo, Mindestgröße und Mindestalter** und einen Plan, in welcher Reihenfolge du sie am besten fährst.

> Mindestgrößen und -alter laut Parkangaben bzw. Größenguide (Stand 2026). **Maßgeblich sind die Messlatten am Eingang jeder Attraktion.**

## Die großen Vier

| Achterbahn | Themenbereich | Höhe | Tempo | Mindestgröße / -alter |
|---|---|---|---|---|
| **Silver Star** | Frankreich | 73 m | 127 km/h | 140 cm / 11 Jahre |
| **Voltron Nevera powered by Rimac** | Kroatien | 32,5 m | 100 km/h | 130 cm / 8 Jahre |
| **Blue Fire Megacoaster** | Island | 38 m | 100 km/h | 130 cm / 7 Jahre |
| **Wodan – Timburcoaster** | Island | gut 40 m | über 100 km/h | 120 cm / 6 Jahre |

- **Silver Star** (2002): höchste Achterbahn Deutschlands, 1.620 m Strecke – ein Klassiker mit gewaltigem First Drop, aber ohne Überschläge.
- **Voltron Nevera** (2024): vier Abschüsse, sieben Überschläge, 1.385 m Strecke – laut Park die längste Achterbahn mit Inversionen und der längste Launch-Coaster Europas.
- **Blue Fire** (2009): Katapultstart, Überschläge, 1.056 m – ideal als „erster Looping“ für Jugendliche.
- **Wodan** (2012): Holzachterbahn mit viel Airtime, 1.050 m – rau und rasant.

## Mittlere Intensität

| Achterbahn | Themenbereich | Mindestgröße / -alter | Begleitung |
|---|---|---|---|
| **Euro-Mir** (drehende Wagen) | Russland | 130 cm / 8 Jahre | unter 10 Jahren mit Erwachsenem |
| **Matterhorn-Blitz** (wilde Maus) | Schweiz | 120 cm / 6 Jahre | unter 10 Jahren mit Erwachsenem |
| **Poseidon** (Wasserachterbahn) | Griechenland | 120 cm / 6 Jahre | unter 10 Jahren mit Erwachsenem |
| **Eurosat – CanCan Coaster** (Indoor) | Frankreich | auf der Messlatte prüfen | – |
| **Schweizer Bobbahn** | Schweiz | auf der Messlatte prüfen | – |

## Für Familien und Einsteiger

| Achterbahn | Themenbereich | Mindestgröße / -alter | Begleitung |
|---|---|---|---|
| **Arthur – The Ride** (Dark Ride) | Königreich der Minimoys | 100 cm / 4 Jahre | unter 6 Jahren mit Erwachsenem |
| **Alpenexpress Enzian** | Österreich | 100 cm / 4 Jahre | unter 8 Jahren mit Erwachsenem |
| **Atlantica SuperSplash** (Wasser) | Portugal | 100 cm / 4 Jahre | unter 8 Jahren mit Erwachsenem |
| **Ba-a-a Express** | Irland | ca. 90–95 cm / 3 Jahre | – |
| **Pegasus** | Griechenland | auf der Messlatte prüfen | – |

Einen eigenen Größen-Plan für Kinder findest du unter „Europa-Park mit Kindern“.

## VR-Erlebnisse

Bei **Eurosat Coastiality** und **Alpenexpress Coastiality** fährst du mit VR-Brille durch virtuelle Welten – eine Ergänzung, wenn du die Bahn schon kennst.

## In welcher Reihenfolge fahren?

1. **Zur Öffnung:** direkt zu **Voltron Nevera** (Kroatien) – die Schlange wächst schnell.
2. **Danach:** nach Island zu **Blue Fire** und **Wodan**.
3. **Vormittags:** **Silver Star** in Frankreich, solange die Warteschlange noch kurz ist.
4. **Mittags:** Wasserbahnen (**Poseidon**, **Atlantica**) und Shows, wenn es am vollsten ist.
5. **Abends:** Lieblingsbahn noch einmal – kurz vor Schluss sind die Wartezeiten oft am kürzesten.

## Tipps gegen lange Wartezeiten

- **Wartezeiten in der App** checken und spontan umplanen.
- **Unter der Woche außerhalb der Ferien** kommen – siehe „Europa-Park Tipps“.
- **Hotelgäste** kommen früher in den Park – siehe „Europa-Park Hotels“.
- **Lose Gegenstände** (Handy, Kappe, Brille) vorher sichern – bei Silver Star und Co. besonders wichtig.

## Gesundheit

Die großen Achterbahnen sind nicht geeignet bei Schwangerschaft, Herz-Kreislauf- oder Rückenproblemen. Die Hinweise am Eingang jeder Attraktion gelten verbindlich.`,
    faq: [
      ["Welche ist die höchste Achterbahn im Europa-Park?", "Der Silver Star mit 73 Metern Höhe und bis zu 127 km/h – er ist die höchste Achterbahn Deutschlands."],
      ["Welche Achterbahn im Europa-Park ist die neueste?", "Voltron Nevera powered by Rimac, 2024 eröffnet: vier Abschüsse, sieben Überschläge und 1.385 Meter Strecke."],
      ["Ab wie viel Zentimetern darf man Silver Star fahren?", "Ab 140 cm Körpergröße und 11 Jahren. Maßgeblich ist die Messlatte am Eingang."],
      ["Welche Achterbahn ist gut für die erste große Fahrt?", "Wodan (ab 120 cm) ohne Überschläge oder Blue Fire (ab 130 cm) mit kurzen Überschlägen – beide intensiv, aber kürzer als Silver Star."],
      ["Welche Achterbahnen können kleine Kinder fahren?", "Zum Beispiel Ba-a-a Express (ab ca. 90–95 cm), Arthur, Alpenexpress Enzian und Atlantica SuperSplash (je ab 100 cm, mit Begleitung)."],
    ],
    sources: [EP_VOLTRON, HD24, SWP_GROESSE],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "freizeitparks/europa-park/mit-kindern",
    description:
      "Europa-Park mit Kindern: Attraktionen nach Alter und Größe, Gratis-Eintritt für Kleinkinder und Geburtstagskinder, Tagesplan, Packliste und Tipps für Familien.",
    focusKeyword: "Europa-Park mit Kindern",
    linkAnchors: ["Europa-Park mit Kindern", "Europa-Park mit Kleinkind", "Europa-Park für Familien"],
    markdown: `Der **Europa-Park** ist einer der familienfreundlichsten Freizeitparks Europas – aber auch einer der größten. Mit dem richtigen Plan wird der Tag für Kinder ein Highlight statt eines Marathons. Hier erfährst du, was in welchem Alter passt, wer gratis hineinkommt und wie ein entspannter Familientag aussieht.

## Gratis-Eintritt für Kinder

- **Bis einschließlich 3 Jahre:** freier Eintritt.
- **Geburtstagskinder bis 12 Jahre:** am Geburtstag gratis (Ausweis mitnehmen).
- Kinder von 4 bis 11 Jahren zahlen den ermäßigten Kindertarif – Preise unter „Europa-Park Tickets“.

## Was passt in welchem Alter?

### 0 – 3 Jahre

- Karussells, Kinderbereiche und Bootsfahrten
- Shows mit Musik und Figuren
- **Ba-a-a Express** (ab ca. 90–95 cm), **Roter Baron**, **Mini Scooter** (ab 90 cm)
- Wickelräume u. a. am Haupteingang, in „Irland – Welt der Kinder“, in Grimms Märchenwald und im Königreich der Minimoys

### 4 – 7 Jahre

- Familienachterbahnen: **Arthur**, **Alpenexpress Enzian** (je ab 100 cm, mit Begleitung)
- **Atlantica SuperSplash** (ab 100 cm) – Wechselkleidung einpacken!
- **Silverstone-Piste** (ab 100 cm)
- Ab 120 cm und 6 Jahren: **Matterhorn-Blitz** und **Poseidon** (mit Erwachsenem)

### 8 – 12 Jahre

- Ab 130 cm und 8 Jahren: **Euro-Mir** und **Voltron Nevera**
- Ab 130 cm und 7 Jahren: **Blue Fire**
- Ab 120 cm und 6 Jahren: **Wodan** (unter 10 Jahren mit Erwachsenem)
- Ab 140 cm und 11 Jahren: **Silver Star**

## Größen-Check: Diese Bahnen gehen ab …

| Größe | zusätzlich möglich (Auswahl) |
|---|---|
| ab ca. 90 cm | Ba-a-a Express, Roter Baron, Mini Scooter |
| ab 100 cm | Arthur, Alpenexpress Enzian, Atlantica SuperSplash, Silverstone-Piste |
| ab 120 cm | Matterhorn-Blitz, Poseidon, Wodan |
| ab 130 cm | Blue Fire, Euro-Mir, Voltron Nevera |
| ab 140 cm | Silver Star |

Zusätzlich gelten **Mindestalter und Begleitpflichten**. Miss dein Kind vor dem Besuch – maßgeblich sind die Messlatten am Eingang. Alle Werte findest du unter „Achterbahnen im Europa-Park“.

## So sieht ein entspannter Familientag aus

| Zeit | Plan |
|---|---|
| zur Öffnung | die wichtigste Bahn eures Kindes zuerst – die Schlangen sind noch kurz |
| Vormittag | Themenbereich nach Themenbereich statt kreuz und quer |
| Mittag | Picknick (z. B. im Schlosspark Balthasar im Themenbereich Deutschland) oder Restaurant, danach eine Show im Sitzen |
| Nachmittag | Wasserbahnen, wenn es warm ist; kleine Kinder machen Mittagsschlaf im Buggy |
| Abend | Lieblingsbahn noch einmal – oft kurze Wartezeiten |

## Packliste für Familien

- [ ] Tickets (datiert) und Parkticket
- [ ] Ausweis für Geburtstagskinder
- [ ] Buggy (Leih-Kinderwagen vor Ort: 5 € + 50 € Pfand, nur für Kinder, die schon sitzen können)
- [ ] Wechselkleidung und Handtuch (Wasserbahnen!)
- [ ] Sonnencreme, Kappe, Trinkflaschen
- [ ] Snacks und Proviant
- [ ] Armband mit Handynummer der Eltern
- [ ] Powerbank für die App
- [ ] Regenjacke

## Tipps von Eltern für Eltern

1. **Zwei Tage statt einem:** Der Park ist für Kinderbeine riesig. Mit Übernachtung gelten Bestpreise – siehe „Europa-Park Hotels“.
2. **Treffpunkt ausmachen**, falls ihr euch verliert, und das Personal ansprechen lassen.
3. **Erwartungen klären:** Sagt vorher, welche Bahnen wegen der Größe noch nicht gehen.
4. **Ruhige Tage wählen:** Werktage außerhalb der Ferien – siehe „Europa-Park Tipps“.
5. **Winter-Tipp:** In der Wintersaison gibt es Kinderskischule und Snow-Tubes.

## Rulantica als zweiter Tag

Die Wasserwelt **Rulantica** direkt nebenan hat flache Kinderbecken und Rutschen für alle Altersstufen – mit eigenem Eintritt.`,
    faq: [
      ["Ab welchem Alter lohnt sich der Europa-Park?", "Schon für Kleinkinder: Bis 3 Jahre ist der Eintritt frei, und es gibt viele Karussells, Shows und Kinderbahnen ab etwa 90 cm."],
      ["Welche Achterbahnen dürfen Kinder ab 100 cm fahren?", "Unter anderem Arthur, Alpenexpress Enzian und Atlantica SuperSplash – kleinere Kinder nur mit Begleitung eines Erwachsenen."],
      ["Haben Kinder am Geburtstag freien Eintritt im Europa-Park?", "Ja, Kinder bis 12 Jahre kommen an ihrem Geburtstag gratis in den Park, mit Ausweis als Nachweis."],
      ["Darf man Essen in den Europa-Park mitnehmen?", "Ja, eigenes Essen und Getränke sind erlaubt – ausgenommen Glasflaschen, Messer und Alkohol. Es gibt auch Picknickplätze, etwa im Schlosspark Balthasar."],
      ["Reicht ein Tag im Europa-Park mit Kindern?", "Für die Highlights ja. Entspannter sind zwei Tage, idealerweise mit Übernachtung und Mehrtagesticket."],
    ],
    sources: [SWP_GROESSE, SWP_TICKETS, EP_TIPPS, SWP_ESSEN],
  },

  /* ------------------------------------------------------------------ */
  {
    path: "freizeitparks/europa-park/tipps",
    description:
      "Europa-Park Tipps 2026/27: beste Besuchszeit, Saisonkalender mit Halloween und Winter, Anreise mit Auto, Bahn und Flug, Tagesplan gegen Warteschlangen.",
    focusKeyword: "Europa-Park Tipps",
    linkAnchors: ["Europa-Park Tipps", "beste Besuchszeit im Europa-Park", "Europa-Park Öffnungszeiten"],
    markdown: `Wann ist im **Europa-Park** am wenigsten los, welche Saison lohnt sich, und wie kommst du am besten hin? Hier sind die wichtigsten **Tipps für deinen Besuch** – mit Saisonkalender 2026/27, Anreise und einem Tagesplan gegen lange Schlangen.

## Saisonkalender 2026/27

| Saison | Zeitraum | Öffnungszeiten |
|---|---|---|
| Sommersaison inkl. Halloween | 28. März – 1. November 2026 | ab 9 Uhr |
| HALLOWinter | 2. – 27. November 2026 | 11 Uhr bis mindestens 19 Uhr |
| Wintersaison | 28. November 2026 – 9. Januar 2027 | 11 Uhr bis mindestens 19 Uhr |
| geschlossen | 24. und 25. Dezember 2026 | – |

Am **10. Januar 2027** ist der Park nur für Hotelgäste und geladene Gäste geöffnet. Die Tagesticketpreise sind im Winter gleich wie im Sommer – die Tage sind aber kürzer.

## Die beste Besuchszeit

- **Werktage (Di – Do) außerhalb der Ferien** sind am ruhigsten.
- **Achtung Ferien in drei Ländern:** Der Park liegt nahe Frankreich und der Schweiz. Auch dortige Ferien und Feiertage machen den Park voll.
- **Frühjahr (April, Mai) und September** bieten oft angenehme Temperaturen und weniger Andrang als der Hochsommer.
- **Halloween** ist beliebt und voll – früh buchen.
- **Winter** ist stimmungsvoll (Weihnachtsmarkt, Eislaufen, Shows), aber nicht alle Achterbahnen fahren bei Eis, Schnee oder Wind.

## Anreise

- **Auto:** über die A5, **Ausfahrt 57b Rust**. Navi-Adresse: Europa-Park-Straße 2, 77977 Rust. Parken 10 € pro Tag, vorab online buchbar.
- **Bahn & Bus:** bis **Ringsheim/Europa-Park** oder **Herbolzheim**, weiter mit den Buslinien 570, 572 oder 7231.
- **Aus der Schweiz:** am Wochenende mit dem RailCoaster direkt ab Basel und Zürich.
- **Fernbus:** FlixBus verbindet das Resort mit vielen Städten.
- **Flugzeug:** nächste Flughäfen sind Lahr (ca. 20 km), Straßburg und Karlsruhe/Baden-Baden (je ca. 64 km) sowie EuroAirport Basel (ca. 90 km).

## Tagesplan gegen Warteschlangen

1. **30 Minuten vor Öffnung da sein** – Taschenkontrolle und Einlass dauern.
2. **Die meistgefragte Bahn zuerst** (z. B. Voltron Nevera oder Silver Star).
3. **Themenbereiche nacheinander abarbeiten** statt hin und her laufen.
4. **Mittags Shows und Restaurants**, wenn die Schlangen am längsten sind.
5. **Abends die Lieblingsbahnen** – kurz vor Schluss wird es oft leerer.
6. **App nutzen:** Wartezeiten, Showzeiten und Parkplan immer dabei.

## Geld sparen

- **Tickets online** kaufen – an der Tageskasse 10 € teurer (alle Preise unter „Europa-Park Tickets“).
- **Proviant** mitnehmen (ohne Glasflaschen, Messer und Alkohol) – Picknickplätze gibt es z. B. im Themenbereich Deutschland.
- **Schließfächer** am Haupteingang nutzen statt schwerer Rucksäcke.
- **Zwei Tage** mit Mehrtagesticket statt zwei Einzelbesuche.
- **Kinder bis 3** und **Geburtstagskinder bis 12** kommen gratis.

## Rulantica und Eatrenalin

- **Rulantica:** Die Wasserwelt nebenan hat eigenen Eintritt – ideal als zweiter Tag oder bei Regen.
- **Eatrenalin:** ein Erlebnis-Restaurant mit Dinner-Show im Resort, eigene Buchung.

## Checkliste für deinen Besuch

- [ ] Datum gewählt (Werktag, keine Ferien in DE/FR/CH?)
- [ ] Tickets und Parkticket online gekauft
- [ ] App geladen, Lieblingsbahnen markiert
- [ ] Mindestgrößen der Kinder geprüft – siehe „Europa-Park mit Kindern“
- [ ] Übernachtung nötig? – siehe „Europa-Park Hotels“
- [ ] Wetter gecheckt, Regenjacke oder Sonnencreme

Welche Achterbahnen sich lohnen, liest du unter „Achterbahnen im Europa-Park“.`,
    faq: [
      ["Wann ist im Europa-Park am wenigsten los?", "An Werktagen außerhalb der Ferien in Deutschland, Frankreich und der Schweiz, besonders im Frühjahr und im September."],
      ["Wann hat der Europa-Park 2026 geöffnet?", "Die Sommersaison inkl. Halloween läuft vom 28. März bis 1. November 2026, danach folgen HALLOWinter (2. bis 27. November) und die Wintersaison (28. November 2026 bis 9. Januar 2027)."],
      ["Wie lange hat der Europa-Park im Winter geöffnet?", "In der Wintersaison täglich ab 11 Uhr bis mindestens 19 Uhr, am 24. und 25. Dezember ist geschlossen."],
      ["Wie komme ich mit dem Zug zum Europa-Park?", "Bis zum Bahnhof Ringsheim/Europa-Park oder Herbolzheim und weiter mit den Buslinien 570, 572 oder 7231."],
      ["Fahren im Winter alle Achterbahnen?", "Nein, bei Eis, Schnee, Wind oder extremen Temperaturen können Attraktionen kurzfristig geschlossen bleiben."],
    ],
    sources: [EP_WINTER, EP_ANREISE, EP_TIPPS, MD_TICKETS],
  },
];

/** Neue Beschreibung des Unterthemas (= Übersichtsseite), wenn sie noch die ursprüngliche ist. */
export const europaParkGroup = {
  path: "/freizeitparks/europa-park",
  oldDescription: "Europa-Park: Tickets, Übernachtung, Attraktionen und Tipps für einen gelungenen Tag.",
  description:
    "Europa-Park Besucherinfos 2026: Tickets und Preise, Hotels, Achterbahnen mit Mindestgrößen, Tipps für Familien und die beste Besuchszeit – alles auf einen Blick.",
};
