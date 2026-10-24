import type { ContentPack } from "./types";

const NASA = { title: "NASA Science – Solar System", url: "https://science.nasa.gov/solar-system/" };
const ESA = { title: "ESA – Weltraum für Kinder und Erwachsene", url: "https://www.esa.int/Space_in_Member_States/Germany" };
const IAU = { title: "Internationale Astronomische Union (IAU)", url: "https://www.iau.org/" };
const IMO = { title: "International Meteor Organization – Meteor-Kalender", url: "https://www.imo.net/" };
const DLR = { title: "DLR – Deutsches Zentrum für Luft- und Raumfahrt", url: "https://www.dlr.de/" };
const NOAA = { title: "NOAA Space Weather Prediction Center – Polarlicht-Vorhersage", url: "https://www.swpc.noaa.gov/" };
const IUPAC = { title: "IUPAC – Periodensystem der Elemente", url: "https://iupac.org/what-we-do/periodic-table-of-elements/" };
const LEIFI = { title: "LEIFIphysik – Physik verständlich erklärt", url: "https://www.leifiphysik.de/" };

/** Neue Kategorie „Wissenschaft & Astrologie“ – wird einmalig angelegt und befüllt. */
export const wissenschaftPack: ContentPack = {
  id: "wissenschaft-v1",
  categorySlug: "wissenschaft-astrologie",
  createCategory: {
    title: "Wissenschaft & Astrologie",
    description: "Planeten, Sternschnuppen, Atome und Experimente – Wissenschaft spannend erklärt, dazu Sternzeichen und der Unterschied zwischen Astrologie und Astronomie.",
  },
  icon: "atom",
  hue: 265,
  groups: [
    /* ================================================================ */
    {
      slug: "weltall-planeten",
      title: "Weltall & Planeten",
      description: "Unser Sonnensystem, die acht Planeten, Mond und Sonne – spannend und verständlich erklärt.",
      pages: [
        {
          slug: "sonnensystem",
          title: "Unser Sonnensystem einfach erklärt",
          label: "Sonnensystem",
          pageType: "traffic",
          description: "Unser Sonnensystem einfach erklärt: Sonne, acht Planeten, Zwergplaneten, Monde, Asteroiden und Kometen – mit Größenvergleich und spannenden Fakten.",
          focusKeyword: "Sonnensystem",
          linkAnchors: ["Sonnensystem", "Sonnensystems"],
          markdown: `Unser **Sonnensystem** ist etwa 4,6 Milliarden Jahre alt. In seiner Mitte steht die **Sonne** – sie vereint rund 99,8 % der gesamten Masse des Sonnensystems. Um sie kreist alles andere.

## Was gehört zum Sonnensystem?

- **Die Sonne** – ein Stern
- **Acht Planeten:** Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun
- **Zwergplaneten** wie Pluto, Ceres und Eris
- **Monde** – allein Jupiter und Saturn haben jeweils weit über 90 bekannte Monde
- **Asteroiden**, vor allem im Asteroidengürtel zwischen Mars und Jupiter
- **Kometen** und unzählige kleine Gesteins- und Eisbrocken

## Gesteinsplaneten und Gasriesen

Die vier inneren Planeten (Merkur, Venus, Erde, Mars) sind **Gesteinsplaneten** mit fester Oberfläche. Die äußeren Planeten sind **Riesenplaneten**: Jupiter und Saturn bestehen vor allem aus Wasserstoff und Helium, Uranus und Neptun werden auch „Eisriesen“ genannt.

## Merksatz

Mit diesem Satz merkst du dir die Reihenfolge der Planeten: **„Mein Vater erklärt mir jeden Sonntag unseren Nachthimmel.“** – Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun.

## Und Pluto?

Pluto galt lange als neunter Planet. 2006 legte die Internationale Astronomische Union fest, was ein Planet ist – seitdem zählt Pluto zu den **Zwergplaneten**, weil er seine Umlaufbahn nicht von anderen Objekten „freigeräumt“ hat.

## Wie groß ist das alles?

Das Licht der Sonne braucht etwa **8 Minuten und 20 Sekunden** bis zur Erde. Bis zum Neptun sind es schon rund vier Stunden. Mehr über jeden Planeten findest du unter „Planeten im Überblick“.`,
          faq: [
            { q: "Wie viele Planeten hat unser Sonnensystem?", a: "Acht: Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus und Neptun." },
            { q: "Warum ist Pluto kein Planet mehr?", a: "Seit 2006 gilt eine Definition der Internationalen Astronomischen Union. Pluto erfüllt nicht alle Kriterien und zählt seitdem zu den Zwergplaneten." },
          ],
          sources: [NASA, IAU],
        },
        {
          slug: "planeten-im-ueberblick",
          title: "Die acht Planeten im Überblick",
          label: "Planeten im Überblick",
          pageType: "traffic",
          description: "Die acht Planeten im Überblick: Merkur bis Neptun mit Steckbrief, Besonderheiten und spannenden Fakten – plus Vergleichstabelle.",
          focusKeyword: "Planeten",
          linkAnchors: ["Planeten", "acht Planeten"],
          markdown: `Jeder Planet unseres Sonnensystems ist eine eigene Welt. Hier sind die wichtigsten Fakten zu allen acht.

## Merkur

Der **kleinste** Planet und der Sonne am nächsten. Er hat kaum eine Atmosphäre – tagsüber glühend heiß, nachts eisig kalt.

## Venus

Die Venus ist der **heißeste** Planet: Ihre dichte Atmosphäre aus Kohlendioxid erzeugt einen extremen Treibhauseffekt mit Temperaturen um etwa 460 °C. Am Himmel ist sie nach dem Mond das hellste Objekt der Nacht – der „Abend-“ oder „Morgenstern“.

## Erde

Unser Zuhause – der einzige bekannte Planet mit Leben und flüssigem Wasser an der Oberfläche.

## Mars

Der **rote Planet** verdankt seine Farbe Eisenoxid – also Rost – im Staub. Auf dem Mars steht der Olympus Mons, einer der höchsten bekannten Vulkane im Sonnensystem. Rover erkunden seine Oberfläche.

## Jupiter

Der **größte** Planet: Mehr als 1.300 Erden würden hineinpassen. Sein **Großer Roter Fleck** ist ein riesiger Wirbelsturm, der seit Jahrhunderten beobachtet wird.

## Saturn

Berühmt für seine **Ringe** aus Eis- und Gesteinsbrocken. Saturn hat eine so geringe mittlere Dichte, dass er – theoretisch – in einer riesigen Badewanne schwimmen würde.

## Uranus

Uranus ist stark **gekippt**: Er rollt quasi auf der Seite um die Sonne. Dadurch erlebt er extreme Jahreszeiten.

## Neptun

Der äußerste Planet, tiefblau und mit den **schnellsten Winden** im Sonnensystem.`,
          faq: [
            { q: "Welcher Planet ist der größte?", a: "Jupiter. Er ist mehr als doppelt so massereich wie alle anderen Planeten zusammen." },
            { q: "Warum ist Venus heißer als Merkur?", a: "Wegen ihrer dichten Kohlendioxid-Atmosphäre, die einen extremen Treibhauseffekt verursacht." },
          ],
          comparison: {
            title: "Die Planeten im Vergleich",
            columns: ["Typ", "Besonderheit", "Bekannte Monde"],
            rows: [
              { label: "Merkur", values: ["Gesteinsplanet", "kleinster Planet", "keine"] },
              { label: "Venus", values: ["Gesteinsplanet", "heißester Planet", "keine"] },
              { label: "Erde", values: ["Gesteinsplanet", "Leben, flüssiges Wasser", "1"] },
              { label: "Mars", values: ["Gesteinsplanet", "roter Staub, Olympus Mons", "2"] },
              { label: "Jupiter", values: ["Gasriese", "größter Planet", "sehr viele"] },
              { label: "Saturn", values: ["Gasriese", "auffällige Ringe", "sehr viele"] },
              { label: "Uranus", values: ["Eisriese", "rollt auf der Seite", "viele"] },
              { label: "Neptun", values: ["Eisriese", "stärkste Winde", "viele"] },
            ],
            note: "Die Zahl der bekannten Monde der Riesenplaneten ändert sich durch neue Entdeckungen immer wieder.",
          },
          sources: [NASA],
        },
        {
          slug: "der-mond",
          title: "Der Mond: Fakten, Mondphasen und Mondlandung",
          label: "Der Mond",
          pageType: "traffic",
          description: "Der Mond einfach erklärt: Entfernung, Mondphasen, warum wir immer dieselbe Seite sehen, Gezeiten und die erste Mondlandung 1969.",
          focusKeyword: "Mond",
          linkAnchors: ["Mond", "Mondphasen"],
          markdown: `Der **Mond** ist unser nächster Nachbar im All und der einzige Himmelskörper, auf dem bisher Menschen waren.

## Steckbrief

- **Entfernung zur Erde:** im Mittel rund 384.400 km
- **Durchmesser:** etwa ein Viertel der Erde
- **Schwerkraft:** etwa ein Sechstel der Erdanziehung
- **Entstehung:** Nach der verbreitetsten Theorie entstand der Mond aus Trümmern, nachdem ein großer Himmelskörper mit der jungen Erde zusammengestoßen war.

## Die Mondphasen

Der Mond leuchtet nicht selbst, sondern wird von der Sonne angestrahlt. Je nachdem, wie Sonne, Erde und Mond zueinander stehen, sehen wir mehr oder weniger von seiner beleuchteten Seite:

1. **Neumond** – unsichtbar
2. **Zunehmender Mond**
3. **Vollmond**
4. **Abnehmender Mond**

Ein kompletter Zyklus dauert etwa **29,5 Tage**. Merkhilfe für Mitteleuropa: Ist die **rechte Seite** beleuchtet, nimmt der Mond zu – ist die **linke Seite** hell, nimmt er ab.

## Warum sehen wir immer dieselbe Seite?

Der Mond dreht sich genau so schnell um sich selbst, wie er die Erde umrundet (**gebundene Rotation**). Deshalb zeigt er uns stets dieselbe Seite.

## Ebbe und Flut

Die Anziehungskraft des Mondes (und der Sonne) erzeugt die **Gezeiten** der Meere.

## Menschen auf dem Mond

Am **20. Juli 1969** landete Apollo 11 auf dem Mond; Neil Armstrong betrat als erster Mensch die Oberfläche. Bis 1972 waren insgesamt zwölf Astronauten dort. Neue Mondprogramme planen die Rückkehr von Menschen.`,
          faq: [
            { q: "Wie weit ist der Mond entfernt?", a: "Im Mittel etwa 384.400 Kilometer. Weil die Bahn elliptisch ist, schwankt die Entfernung etwas." },
            { q: "Hat der Mond eine dunkle Seite?", a: "Es gibt eine Rückseite, die wir nie sehen – sie ist aber nicht dauerhaft dunkel, sondern wird ebenso von der Sonne beschienen." },
          ],
          sources: [NASA, ESA],
        },
        {
          slug: "die-sonne",
          title: "Die Sonne: unser Stern einfach erklärt",
          label: "Die Sonne",
          pageType: "traffic",
          description: "Die Sonne einfach erklärt: Wie sie Energie erzeugt, wie heiß sie ist, Sonnenflecken, Sonnenwind und warum du nie direkt hineinschauen darfst.",
          focusKeyword: "Sonne",
          linkAnchors: ["Sonne", "Sonnenwind"],
          markdown: `Die **Sonne** ist ein ganz gewöhnlicher Stern – für uns aber der wichtigste. Ohne ihr Licht und ihre Wärme gäbe es kein Leben auf der Erde.

## Woher kommt die Energie?

Im Kern der Sonne verschmelzen Wasserstoffkerne zu Helium – das nennt man **Kernfusion**. Dabei wird enorm viel Energie frei. Im Kern herrschen Temperaturen von rund **15 Millionen Grad Celsius**, an der sichtbaren Oberfläche etwa **5.500 °C**.

## Wie groß ist die Sonne?

Ihr Durchmesser ist etwa **109-mal** so groß wie der der Erde. Rund 1,3 Millionen Erden würden in sie hineinpassen.

## Sonnenflecken und Sonnenwind

- **Sonnenflecken** sind kühlere, dunklere Gebiete mit starken Magnetfeldern. Ihre Zahl schwankt in einem etwa **11-jährigen Zyklus**.
- Die Sonne stößt ständig geladene Teilchen aus – den **Sonnenwind**. Bei starken Ausbrüchen können sie auf der Erde **Polarlichter** auslösen und Satelliten oder Stromnetze stören.

## Wie alt wird die Sonne?

Die Sonne ist etwa 4,6 Milliarden Jahre alt und hat ungefähr die Hälfte ihres Lebens hinter sich. In ferner Zukunft wird sie sich zu einem Roten Riesen aufblähen.

## Achtung, Augen!

**Nie direkt in die Sonne schauen** – auch nicht mit Sonnenbrille, Fernglas oder Teleskop. Das kann die Augen dauerhaft schädigen. Für Sonnenbeobachtungen und Sonnenfinsternisse gibt es spezielle, geprüfte Sonnenfinsternisbrillen bzw. Sonnenfilter.`,
          faq: [
            { q: "Wie heiß ist die Sonne?", a: "An der sichtbaren Oberfläche etwa 5.500 °C, im Kern rund 15 Millionen °C." },
            { q: "Wie lange braucht das Sonnenlicht zur Erde?", a: "Etwa 8 Minuten und 20 Sekunden." },
          ],
          sources: [NASA, ESA],
        },
      ],
    },

    /* ================================================================ */
    {
      slug: "sternenhimmel",
      title: "Sternenhimmel",
      description: "Sternschnuppen, Sternbilder, Polarlichter und Tipps zum Beobachten des Nachthimmels.",
      pages: [
        {
          slug: "sternschnuppen",
          title: "Sternschnuppen: Was sie sind und wann du sie siehst",
          label: "Sternschnuppen",
          pageType: "traffic",
          description: "Sternschnuppen einfach erklärt: Woher sie kommen, die wichtigsten Meteorschauer im Jahr wie Perseiden und Geminiden und Tipps zum Beobachten.",
          focusKeyword: "Sternschnuppen",
          linkAnchors: ["Sternschnuppen", "Perseiden", "Meteorschauer"],
          markdown: `Eine **Sternschnuppe** ist kein Stern, sondern ein winziges Staub- oder Gesteinskorn aus dem All. Es rast mit hoher Geschwindigkeit in die Erdatmosphäre und verglüht dort in etwa **80 bis 120 Kilometern Höhe**. Die leuchtende Spur nennt man **Meteor**.

## Woher kommen Sternschnuppen?

Viele Sternschnuppen stammen aus den Staubspuren von **Kometen**. Kreuzt die Erde auf ihrer Bahn eine solche Spur, sieht man besonders viele – einen **Meteorschauer**. Weil die Erde jedes Jahr ungefähr zur gleichen Zeit dieselben Spuren durchquert, kehren die Schauer regelmäßig wieder.

## Die wichtigsten Meteorschauer

| Meteorschauer | Ungefähres Maximum |
|---|---|
| Quadrantiden | Anfang Januar |
| Lyriden | um den 22. April |
| Perseiden | um den 12./13. August |
| Orioniden | um den 21. Oktober |
| Leoniden | um den 17. November |
| Geminiden | um den 13./14. Dezember |

Die **Perseiden** im Sommer sind besonders beliebt, weil die Nächte warm sind. Die **Geminiden** im Dezember zählen zu den ergiebigsten Schauern des Jahres. Genaue Termine und Prognosen veröffentlicht zum Beispiel die International Meteor Organization.

## Tipps zum Beobachten

1. **Dunkler Ort** fern von Stadtlicht.
2. **Augen gewöhnen:** 20 bis 30 Minuten ohne Handylicht.
3. **Liegestuhl oder Decke** – und einfach in den Himmel schauen. Kein Fernglas nötig.
4. **Nach Mitternacht** sind oft mehr Sternschnuppen zu sehen.
5. **Mondlicht** beachten: Bei Vollmond sieht man weniger.
6. **Warm anziehen**, auch im Sommer.

## Und der Wunsch?

Ob er in Erfüllung geht, kann die Wissenschaft nicht beantworten – schaden tut er sicher nicht. ✨`,
          faq: [
            { q: "Wann sieht man die meisten Sternschnuppen?", a: "Während der großen Meteorschauer wie den Perseiden im August oder den Geminiden im Dezember, am besten in der zweiten Nachthälfte." },
            { q: "Ist eine Sternschnuppe ein Stern?", a: "Nein. Es ist ein winziges Staub- oder Gesteinsteilchen, das in der Atmosphäre verglüht." },
          ],
          sources: [IMO, ESA],
        },
        {
          slug: "sternbilder",
          title: "Sternbilder finden: die wichtigsten Sternbilder am Himmel",
          label: "Sternbilder",
          pageType: "traffic",
          description: "Sternbilder finden leicht gemacht: Großer Wagen, Polarstern, Orion und Kassiopeia – mit Tipps, wie du sie am Nachthimmel entdeckst.",
          focusKeyword: "Sternbilder",
          linkAnchors: ["Sternbilder", "Polarstern", "Großer Wagen"],
          markdown: `Schon vor Jahrtausenden haben Menschen Sterne zu Bildern verbunden und Geschichten dazu erzählt. Heute gibt es offiziell **88 Sternbilder**, festgelegt von der Internationalen Astronomischen Union.

## Der Große Wagen und der Polarstern

Der **Große Wagen** ist kein eigenes Sternbild, sondern Teil des **Großen Bären**. Er ist bei uns das ganze Jahr sichtbar.

So findest du den **Polarstern**: Verlängere die hintere Kante des „Wagenkastens“ etwa fünfmal nach oben. Dort steht ein mäßig heller Stern – der Polarstern. Er zeigt fast genau nach **Norden**.

## Kassiopeia

Ein auffälliges **„W“** (oder „M“) gegenüber dem Großen Wagen, auf der anderen Seite des Polarsterns. Ebenfalls das ganze Jahr sichtbar.

## Orion – der Himmelsjäger

Das bekannteste Wintersternbild: Drei Sterne in einer Reihe bilden den **Gürtel des Orion**. Oben links leuchtet der rötliche **Beteigeuze**, unten rechts der bläuliche **Rigel**.

## Sommerdreieck

Im Sommer bilden die hellen Sterne **Wega**, **Deneb** und **Atair** ein großes Dreieck hoch am Himmel.

## Tipps

- **Sternkarten-Apps** zeigen, was du gerade siehst.
- Mit **Rotlicht** statt weißem Licht bleiben die Augen an die Dunkelheit gewöhnt.
- Sternbilder wandern im Laufe der Nacht und des Jahres über den Himmel – im Winter siehst du andere als im Sommer.

## Sternbilder und Sternzeichen

Die zwölf Tierkreiszeichen der Astrologie tragen die Namen von Sternbildern – sind aber nicht dasselbe. Mehr dazu unter „Astrologie und Astronomie“.`,
          faq: [
            { q: "Wie viele Sternbilder gibt es?", a: "Offiziell 88, festgelegt von der Internationalen Astronomischen Union." },
            { q: "Wie finde ich den Polarstern?", a: "Die hintere Kante des Großen Wagens etwa fünfmal nach oben verlängern – dort steht der Polarstern im Norden." },
          ],
          sources: [IAU],
        },
        {
          slug: "polarlichter",
          title: "Polarlichter: Entstehung und Chancen in Mitteleuropa",
          label: "Polarlichter",
          pageType: "traffic",
          description: "Polarlichter einfach erklärt: Wie Sonnenwind die Atmosphäre zum Leuchten bringt, warum sie grün und rot sind und wann man sie bei uns sieht.",
          focusKeyword: "Polarlichter",
          linkAnchors: ["Polarlichter", "Polarlicht"],
          markdown: `**Polarlichter** – auch Nordlichter genannt – gehören zu den schönsten Naturschauspielen. Sie entstehen, wenn die Sonne die Erde „anstupst“.

## Wie entstehen Polarlichter?

1. Die Sonne schleudert geladene Teilchen ins All – den **Sonnenwind**, bei Ausbrüchen besonders stark.
2. Das **Magnetfeld der Erde** lenkt diese Teilchen vor allem in Richtung der Pole.
3. Dort treffen sie in der oberen Atmosphäre auf Sauerstoff- und Stickstoffatome und regen sie zum **Leuchten** an.

## Warum grün, rot oder lila?

- **Grün:** Sauerstoff in etwa 100 bis 250 km Höhe – die häufigste Farbe.
- **Rot:** Sauerstoff in größeren Höhen.
- **Blau und Violett:** Stickstoff.

## Polarlichter in Deutschland und Österreich?

Normalerweise sieht man sie im hohen Norden – in Skandinavien, Island oder Kanada. Bei **starken Sonnenstürmen** können sie aber auch bei uns sichtbar sein, wie zum Beispiel im Mai 2024. Oft erkennt man sie mit der Handykamera deutlicher als mit bloßem Auge.

## Tipps

- **Vorhersagen** zum Weltraumwetter (z. B. Kp-Index) beobachten.
- **Dunkler Ort** mit freiem Blick nach **Norden**.
- **Handykamera** im Nachtmodus oder mit Langzeitbelichtung nutzen.
- Geduld: Polarlichter kommen und gehen in Wellen.

## Gefährlich?

Für Menschen auf der Erde nicht. Starke Sonnenstürme können aber Satelliten, Funk und Stromnetze stören.`,
          faq: [
            { q: "Kann man Polarlichter in Deutschland sehen?", a: "Ja, bei starken Sonnenstürmen. Das ist selten, kommt aber vor – besonders im Norden Deutschlands, manchmal bis in den Süden." },
            { q: "Was ist der Kp-Index?", a: "Ein Maß für die Störung des Erdmagnetfelds. Je höher der Wert, desto weiter südlich können Polarlichter sichtbar sein." },
          ],
          sources: [NOAA, ESA],
        },
        {
          slug: "sterne-beobachten",
          title: "Sterne beobachten für Einsteiger",
          label: "Sterne beobachten",
          pageType: "standard",
          description: "Sterne beobachten für Einsteiger: der richtige Ort, Apps, Fernglas oder Teleskop und was du mit bloßem Auge am Nachthimmel entdecken kannst.",
          focusKeyword: "Sterne beobachten",
          linkAnchors: ["Sterne beobachten", "Nachthimmel"],
          markdown: `Für den Einstieg in die Himmelsbeobachtung brauchst du kein teures Teleskop. Ein dunkler Ort, Geduld und neugierige Augen reichen.

## Mit bloßem Auge

- **Mond** mit Kratern und Meeren
- **Planeten** wie Venus, Jupiter, Mars und Saturn – sie funkeln weniger als Sterne
- **Sternbilder** wie Großer Wagen und Orion
- **Milchstraße** an sehr dunklen Orten
- **Internationale Raumstation (ISS)** als heller, schnell ziehender Punkt – Überflugzeiten zeigen Apps
- **Sternschnuppen**

## Der richtige Ort

Licht verschmutzt den Himmel. Fahr möglichst aus der Stadt hinaus. Es gibt auch ausgewiesene **Sternenparks** mit besonders dunklem Himmel.

## Hilfsmittel

1. **Sternkarten-App:** Handy zum Himmel halten, Namen werden angezeigt.
2. **Rotlicht-Taschenlampe:** schützt die Dunkeladaption.
3. **Fernglas:** Schon ein normales Fernglas zeigt Jupitermonde, Mondkrater und Sternhaufen.
4. **Teleskop:** Lohnt sich, wenn du dabeibleiben willst. Lass dich am besten in einer Volkssternwarte beraten.

## Volkssternwarten und Planetarien

Viele Sternwarten bieten öffentliche Beobachtungsabende an – ein toller Einstieg, auch für Kinder.

## Sicherheit

**Nie mit Fernglas oder Teleskop in die Sonne schauen!**`,
          faq: [
            { q: "Wie erkenne ich einen Planeten am Himmel?", a: "Planeten funkeln meist weniger als Sterne und stehen in der Nähe der Ekliptik. Eine Sternkarten-App zeigt sie sicher an." },
            { q: "Reicht ein Fernglas zum Sterne beobachten?", a: "Ja, für den Anfang sehr gut. Damit siehst du Mondkrater, Jupitermonde und viele Sternhaufen." },
          ],
          sources: [ESA, DLR],
        },
      ],
    },

    /* ================================================================ */
    {
      slug: "atome-chemie",
      title: "Atome & Chemie",
      description: "Woraus alles besteht: Atome, das Periodensystem und die Aggregatzustände einfach erklärt.",
      pages: [
        {
          slug: "was-ist-ein-atom",
          title: "Was ist ein Atom? Einfach erklärt",
          label: "Was ist ein Atom?",
          pageType: "traffic",
          description: "Was ist ein Atom? Atomkern, Protonen, Neutronen und Elektronen einfach erklärt – mit Größenvergleich und warum Atome fast leer sind.",
          focusKeyword: "Atom",
          linkAnchors: ["Atom", "Atome", "Elektronen"],
          markdown: `Alles um dich herum – Luft, Wasser, dein Handy und du selbst – besteht aus **Atomen**. Sie sind die winzigen Bausteine der Materie.

## Wie ist ein Atom aufgebaut?

- **Atomkern** in der Mitte, bestehend aus
  - **Protonen** (positiv geladen) und
  - **Neutronen** (ungeladen)
- **Elektronen** (negativ geladen) in der **Atomhülle** um den Kern

Die Anzahl der Protonen bestimmt, um welches **Element** es sich handelt: Ein Atom mit einem Proton ist Wasserstoff, eines mit sechs Protonen Kohlenstoff, eines mit acht Sauerstoff.

## Wie klein ist ein Atom?

Ein Atom ist etwa **ein Zehnmillionstel Millimeter** groß. In einem Wassertropfen stecken unvorstellbar viele davon.

## Fast nur leerer Raum

Der Atomkern ist rund **100.000-mal kleiner** als das ganze Atom. Wäre der Kern so groß wie eine Erbse in der Mitte eines Fußballstadions, wären die Elektronen irgendwo auf den Tribünen. Dazwischen: nichts. Trotzdem steckt fast die gesamte Masse im Kern.

## Elektronen „kreisen“ nicht wirklich

Das Bild von Elektronen, die wie Planeten um den Kern fliegen, ist eine Vereinfachung. Nach der Quantenphysik halten sich Elektronen in **Orbitalen** auf – Bereichen, in denen sie mit einer bestimmten Wahrscheinlichkeit anzutreffen sind.

## Atome verbinden sich

Atome können sich zu **Molekülen** verbinden. Wasser (H₂O) besteht aus zwei Wasserstoffatomen und einem Sauerstoffatom.

Welche Elemente es gibt, zeigt das **Periodensystem**.`,
          faq: [
            { q: "Kann man ein Atom sehen?", a: "Mit dem bloßen Auge oder einem Lichtmikroskop nicht. Spezielle Mikroskope wie das Rastertunnelmikroskop können einzelne Atome aber sichtbar machen." },
            { q: "Woraus bestehen Protonen und Neutronen?", a: "Aus noch kleineren Teilchen, den Quarks." },
          ],
          sources: [LEIFI],
        },
        {
          slug: "periodensystem",
          title: "Das Periodensystem einfach erklärt",
          label: "Periodensystem",
          pageType: "traffic",
          description: "Das Periodensystem einfach erklärt: Ordnungszahl, Perioden, Gruppen, Metalle und Edelgase – und wie Mendelejew die Ordnung der Elemente entdeckte.",
          focusKeyword: "Periodensystem",
          linkAnchors: ["Periodensystem", "Elemente"],
          markdown: `Das **Periodensystem der Elemente** ordnet alle bekannten chemischen Elemente. Derzeit sind **118 Elemente** bestätigt.

## Wie ist es aufgebaut?

- Jedes Element hat ein **Symbol** (z. B. H für Wasserstoff, O für Sauerstoff, Fe für Eisen) und eine **Ordnungszahl** – das ist die Zahl der Protonen im Kern.
- Die Elemente sind nach steigender Ordnungszahl sortiert.
- **Zeilen** heißen **Perioden**.
- **Spalten** heißen **Gruppen**. Elemente einer Gruppe verhalten sich chemisch ähnlich.

## Wichtige Gruppen

- **Alkalimetalle** (ganz links, z. B. Natrium): sehr reaktionsfreudig.
- **Halogene** (z. B. Chlor): reagieren gern mit Metallen zu Salzen.
- **Edelgase** (ganz rechts, z. B. Helium, Neon): reagieren kaum.
- Der große Block in der Mitte: **Übergangsmetalle** wie Eisen, Kupfer und Gold.

## Metalle und Nichtmetalle

Die meisten Elemente sind Metalle. Nichtmetalle wie Kohlenstoff, Stickstoff und Sauerstoff stehen oben rechts.

## Eine geniale Idee

Der russische Chemiker **Dmitri Mendelejew** veröffentlichte 1869 eine Ordnung der Elemente – und ließ Lücken für Elemente, die erst später entdeckt wurden. Seine Vorhersagen erwiesen sich als richtig.

## Merkhilfen

Viele Schüler lernen die Hauptgruppen mit Merksätzen. Für den Anfang reicht es, die wichtigsten Symbole zu kennen: H, C, N, O, Na, Cl, Fe, Au.

Was ein Atom genau ist, erfährst du unter „Was ist ein Atom?“.`,
          faq: [
            { q: "Wie viele Elemente gibt es?", a: "Derzeit sind 118 Elemente bestätigt. Einige davon wurden nur im Labor künstlich erzeugt." },
            { q: "Was bedeutet die Ordnungszahl?", a: "Sie gibt die Anzahl der Protonen im Atomkern an und bestimmt damit das Element." },
          ],
          sources: [IUPAC],
        },
        {
          slug: "aggregatzustaende",
          title: "Aggregatzustände: fest, flüssig, gasförmig",
          label: "Aggregatzustände",
          pageType: "standard",
          description: "Aggregatzustände einfach erklärt: fest, flüssig, gasförmig und Plasma – was dabei mit den Teilchen passiert und Beispiele aus dem Alltag.",
          focusKeyword: "Aggregatzustände",
          linkAnchors: ["Aggregatzustände", "Aggregatzustand"],
          markdown: `Wasser kann Eis, flüssig oder Dampf sein. Diese Formen heißen **Aggregatzustände**. Was sich ändert, ist die Bewegung der kleinsten Teilchen.

## Die drei klassischen Zustände

- **Fest:** Die Teilchen sitzen eng und geordnet an ihren Plätzen und schwingen nur. Feste Stoffe behalten ihre Form – z. B. Eis.
- **Flüssig:** Die Teilchen sind nah beieinander, können sich aber aneinander vorbeibewegen. Flüssigkeiten passen sich der Form des Gefäßes an.
- **Gasförmig:** Die Teilchen fliegen frei und weit voneinander entfernt umher und füllen jeden Raum aus.

## Der vierte Zustand: Plasma

Wird ein Gas sehr stark erhitzt, lösen sich Elektronen von den Atomen. So entsteht **Plasma**. Die Sonne besteht aus Plasma, ebenso Blitze und das Leuchten in Polarlichtern.

## Übergänge

| Übergang | Name |
|---|---|
| fest → flüssig | Schmelzen |
| flüssig → fest | Erstarren |
| flüssig → gasförmig | Verdampfen bzw. Verdunsten |
| gasförmig → flüssig | Kondensieren |
| fest → gasförmig | Sublimieren |
| gasförmig → fest | Resublimieren |

## Beispiele aus dem Alltag

- **Kondensieren:** Der Spiegel beschlägt nach dem Duschen.
- **Verdunsten:** Eine Pfütze verschwindet in der Sonne.
- **Resublimieren:** Raureif im Winter.

Bei normalem Luftdruck auf Meereshöhe schmilzt Wasser bei 0 °C und siedet bei 100 °C. In den Bergen siedet es bei niedrigerer Temperatur, weil der Luftdruck geringer ist.`,
          faq: [
            { q: "Was ist der Unterschied zwischen Verdampfen und Verdunsten?", a: "Verdampfen passiert am Siedepunkt im ganzen Stoff, Verdunsten schon unterhalb des Siedepunkts an der Oberfläche." },
            { q: "Ist Feuer ein Plasma?", a: "Normales Kerzenfeuer ist überwiegend ein heißes Gas. Nur sehr heiße Flammen enthalten nennenswerte Plasmaanteile." },
          ],
          sources: [LEIFI],
        },
      ],
    },

    /* ================================================================ */
    {
      slug: "physik-im-alltag",
      title: "Physik im Alltag",
      description: "Schwerkraft, Licht und Strom – Physik, die uns jeden Tag begegnet, verständlich erklärt.",
      pages: [
        {
          slug: "schwerkraft",
          title: "Schwerkraft einfach erklärt",
          label: "Schwerkraft",
          pageType: "standard",
          description: "Schwerkraft einfach erklärt: Warum Dinge fallen, Newton und der Apfel, warum Astronauten schweben und wie stark die Anziehung auf dem Mond ist.",
          focusKeyword: "Schwerkraft",
          linkAnchors: ["Schwerkraft", "Gravitation"],
          markdown: `Warum fällt ein Apfel vom Baum, und warum kreist der Mond um die Erde? Die Antwort ist dieselbe: **Schwerkraft**, auch **Gravitation** genannt.

## Was ist Schwerkraft?

Alle Körper mit Masse ziehen sich gegenseitig an. Je größer die Masse und je kleiner der Abstand, desto stärker die Anziehung. Die Erde ist so massereich, dass sie alles zu sich zieht.

## Newton und Einstein

- **Isaac Newton** beschrieb im 17. Jahrhundert das Gravitationsgesetz: Dieselbe Kraft, die den Apfel fallen lässt, hält den Mond auf seiner Bahn.
- **Albert Einstein** erklärte Gravitation Anfang des 20. Jahrhunderts mit seiner Allgemeinen Relativitätstheorie als **Krümmung von Raum und Zeit**.

## Wie stark ist die Schwerkraft?

Auf der Erde beschleunigt ein fallender Gegenstand (ohne Luftwiderstand) mit etwa **9,81 m/s²**. Auf dem **Mond** ist die Anziehung nur etwa ein **Sechstel** so stark – deshalb hüpften die Apollo-Astronauten so leicht.

## Fallen schwere Dinge schneller?

Ohne Luft fallen alle Gegenstände gleich schnell! Ein berühmtes Experiment auf dem Mond zeigte: Hammer und Feder landeten gleichzeitig. Auf der Erde bremst die Luft die Feder.

## Warum schweben Astronauten?

In der Raumstation gibt es durchaus Schwerkraft. Die Station und die Astronauten **fallen** aber ständig um die Erde herum – sie sind im freien Fall. Deshalb fühlen sie sich schwerelos.`,
          faq: [
            { q: "Gibt es im Weltall keine Schwerkraft?", a: "Doch, Schwerkraft wirkt überall. Astronauten fühlen sich schwerelos, weil sie sich im freien Fall um die Erde befinden." },
            { q: "Wie viel wiege ich auf dem Mond?", a: "Deine Masse bleibt gleich, aber du würdest dich etwa sechsmal leichter fühlen, weil die Anziehung nur ein Sechstel beträgt." },
          ],
          sources: [LEIFI, ESA],
        },
        {
          slug: "licht-und-farben",
          title: "Licht und Farben: Warum ist der Himmel blau?",
          label: "Licht & Farben",
          pageType: "standard",
          description: "Licht und Farben einfach erklärt: Lichtgeschwindigkeit, wie ein Regenbogen entsteht, warum der Himmel blau und der Sonnenuntergang rot ist.",
          focusKeyword: "Licht und Farben",
          linkAnchors: ["Regenbogen", "Lichtgeschwindigkeit"],
          markdown: `Licht ist das Schnellste, was es gibt – und voller Farben, auch wenn es weiß aussieht.

## Wie schnell ist Licht?

Im Vakuum legt Licht rund **300.000 Kilometer pro Sekunde** zurück. In einer Sekunde könnte es etwa siebeneinhalbmal um die Erde reisen.

## Weißes Licht ist bunt

Sonnenlicht enthält alle **Regenbogenfarben**. Ein **Prisma** oder Wassertropfen bricht die Farben unterschiedlich stark und fächert sie auf.

## Wie entsteht ein Regenbogen?

Sonnenlicht fällt in Regentropfen, wird gebrochen, im Tropfen gespiegelt und beim Austreten nochmals gebrochen. Dabei trennen sich die Farben. Du siehst einen Regenbogen, wenn **die Sonne hinter dir** steht und vor dir Regen fällt.

## Warum ist der Himmel blau?

Das Sonnenlicht trifft auf die Gasmoleküle der Luft. **Blaues Licht** wird dabei viel stärker in alle Richtungen gestreut als rotes. Deshalb sieht der Himmel von überall blau aus. Diesen Effekt nennt man **Rayleigh-Streuung**.

## Und warum ist der Sonnenuntergang rot?

Abends steht die Sonne tief. Das Licht muss einen viel längeren Weg durch die Atmosphäre zurücklegen. Das Blau wird unterwegs fast komplett weggestreut – übrig bleiben Gelb, Orange und Rot.

## Farben von Gegenständen

Ein Gegenstand sieht rot aus, weil er vor allem rotes Licht zurückwirft und die anderen Farben schluckt. Schwarz schluckt fast alles, Weiß wirft fast alles zurück.`,
          faq: [
            { q: "Warum ist der Himmel blau?", a: "Blaues Licht wird an den Luftmolekülen viel stärker gestreut als rotes und kommt deshalb aus allen Richtungen zu uns." },
            { q: "Kann man das Ende eines Regenbogens erreichen?", a: "Nein. Ein Regenbogen entsteht durch einen bestimmten Blickwinkel zwischen Sonne, Regentropfen und deinen Augen – er wandert mit, wenn du dich bewegst." },
          ],
          sources: [LEIFI],
        },
        {
          slug: "strom-einfach-erklaert",
          title: "Strom einfach erklärt",
          label: "Strom einfach erklärt",
          pageType: "standard",
          description: "Strom einfach erklärt: Spannung, Stromstärke, Widerstand und Leistung mit dem Wasser-Vergleich – plus wichtige Regeln für den sicheren Umgang mit Strom.",
          focusKeyword: "Strom einfach erklärt",
          linkAnchors: ["Strom", "Spannung"],
          markdown: `Strom kommt aus der Steckdose – aber was ist das eigentlich? Elektrischer **Strom** ist die Bewegung von elektrischen Ladungen, meist von **Elektronen** in einem Leiter wie Kupferdraht.

## Der Wasser-Vergleich

Stell dir einen Wasserkreislauf vor:

- **Spannung (Volt, V)** ist wie der **Druck** in der Leitung – sie treibt den Strom an.
- **Stromstärke (Ampere, A)** ist wie die **Menge Wasser**, die pro Sekunde fließt.
- **Widerstand (Ohm, Ω)** ist wie eine **Verengung** im Rohr, die den Fluss bremst.

Zusammenhang (Ohmsches Gesetz): **Spannung = Widerstand × Stromstärke**.

## Leistung und Energie

- **Leistung (Watt, W)** = Spannung × Stromstärke. Sie zeigt, wie viel Energie ein Gerät pro Sekunde umsetzt.
- **Energie (Kilowattstunde, kWh)** = Leistung × Zeit. Danach wird der Strom bezahlt. Ein Gerät mit 1.000 Watt, das eine Stunde läuft, verbraucht 1 kWh.

Was ein Gerät kostet, kannst du mit unserem Stromkosten-Rechner ausrechnen.

## Gleich- und Wechselstrom

- **Gleichstrom:** fließt immer in dieselbe Richtung – z. B. aus Batterien.
- **Wechselstrom:** ändert ständig die Richtung – so kommt er aus der Steckdose (in Deutschland und Österreich mit 230 Volt und 50 Hertz).

## Sicherheit

- Nie an Steckdosen oder Leitungen hantieren.
- Kaputte Kabel und Geräte nicht benutzen.
- Elektrogeräte von Wasser fernhalten.
- Kinder mit Steckdosensicherungen schützen.

Arbeiten an der Hausinstallation gehören in die Hände von Elektrofachkräften.`,
          faq: [
            { q: "Was ist der Unterschied zwischen Volt und Watt?", a: "Volt ist die Spannung, die den Strom antreibt. Watt ist die Leistung, also wie viel Energie pro Sekunde umgesetzt wird." },
            { q: "Warum sind Batterien ungefährlich, die Steckdose aber nicht?", a: "Haushaltsbatterien haben eine sehr niedrige Spannung. Die 230 Volt aus der Steckdose können lebensgefährliche Ströme durch den Körper treiben." },
          ],
          sources: [LEIFI],
        },
      ],
    },

    /* ================================================================ */
    {
      slug: "experimente",
      title: "Experimente",
      description: "Einfache, sichere Experimente für zu Hause – Wissenschaft zum Anfassen für Kinder und Erwachsene.",
      pages: [
        {
          slug: "experimente-fuer-zu-hause",
          title: "Experimente für zu Hause: 6 einfache Versuche",
          label: "Experimente für zu Hause",
          pageType: "traffic",
          description: "Experimente für zu Hause: 6 einfache und sichere Versuche mit Küchenzutaten – Vulkan, Lavalampe, Regenbogen im Glas und mehr, mit Erklärung.",
          focusKeyword: "Experimente für zu Hause",
          linkAnchors: ["Experimente für zu Hause", "Experimente"],
          markdown: `Wissenschaft macht am meisten Spaß, wenn man sie selbst ausprobiert. Diese **Experimente** gelingen mit Dingen aus Küche und Bad. Kinder bitte nur mit Erwachsenen experimentieren lassen.

## 1. Vulkan aus Natron und Essig

**Du brauchst:** eine kleine Flasche, 2 EL Natron, Essig, Spülmittel, Lebensmittelfarbe.
**So geht's:** Natron, einen Spritzer Spülmittel und Farbe in die Flasche, Essig dazugießen – und der Vulkan schäumt über.
**Warum?** Natron und Essigsäure reagieren und bilden das Gas **Kohlendioxid**, das den Schaum aufbläht.

## 2. Lavalampe

**Du brauchst:** ein hohes Glas, Wasser, Speiseöl, Lebensmittelfarbe, eine Brausetablette.
**So geht's:** Glas zu einem Viertel mit gefärbtem Wasser, Rest mit Öl füllen. Brausetablette hinein.
**Warum?** Öl und Wasser mischen sich nicht. Die Gasbläschen nehmen Wassertropfen mit nach oben.

## 3. Regenbogen im Glas

Unterschiedlich stark gezuckertes, gefärbtes Wasser vorsichtig übereinanderschichten – das schwerste (süßeste) zuerst.
**Warum?** Mehr Zucker = höhere **Dichte**.

## 4. Pfeffer flieht

Pfeffer auf Wasser streuen, Finger mit Spülmittel eintauchen – der Pfeffer flitzt zur Seite.
**Warum?** Spülmittel verringert die **Oberflächenspannung**.

## 5. Ei schwimmt in Salzwasser

Ein rohes Ei sinkt in Leitungswasser. Mit viel Salz im Wasser schwimmt es.
**Warum?** Salzwasser hat eine höhere Dichte.

## 6. Unsichtbare Tinte

Mit Zitronensaft und Wattestäbchen auf Papier schreiben, trocknen lassen. Ein Erwachsener erwärmt das Papier vorsichtig (z. B. am Bügeleisen) – die Schrift erscheint.

## Sicherheit

Schutz für Augen und Kleidung, nichts probieren oder trinken, Erwachsene dabei. Mehr Ideen: „Kristalle züchten“.`,
          faq: [
            { q: "Ab welchem Alter eignen sich diese Experimente?", a: "Mit Begleitung eines Erwachsenen schon für Kindergartenkinder. Ältere Kinder können die Erklärungen selbst nachvollziehen." },
            { q: "Ist der Natron-Essig-Vulkan gefährlich?", a: "Nein, bei kleinen Mengen ist er harmlos. Essig nicht in die Augen bringen und gut lüften." },
          ],
        },
        {
          slug: "kristalle-zuechten",
          title: "Kristalle züchten: so funktioniert's",
          label: "Kristalle züchten",
          pageType: "standard",
          description: "Kristalle züchten zu Hause: Anleitung mit Salz oder Zucker, wie Kristalle wachsen, Tipps für große Kristalle und was du über Sicherheit wissen solltest.",
          focusKeyword: "Kristalle züchten",
          linkAnchors: ["Kristalle züchten", "Kristalle"],
          markdown: `Kristalle sehen aus wie kleine Edelsteine – und du kannst sie zu Hause selbst wachsen lassen. Es braucht nur Geduld.

## Was ist ein Kristall?

In einem **Kristall** sind die Teilchen in einem regelmäßigen, sich wiederholenden Muster angeordnet. Deshalb haben Kristalle glatte Flächen und gerade Kanten. Kochsalzkristalle sind zum Beispiel würfelförmig.

## Anleitung: Salz- oder Zuckerkristalle

**Du brauchst:** Salz oder Zucker, heißes Wasser (ein Erwachsener hilft), ein sauberes Glas, Bindfaden, Stift oder Holzstäbchen.

1. Heißes Wasser ins Glas füllen und so lange **Salz bzw. Zucker einrühren**, bis sich nichts mehr auflöst – die Lösung ist **gesättigt**.
2. Bindfaden an einen Stift knoten und so ins Glas hängen, dass er den Boden nicht berührt.
3. Das Glas an einen ruhigen Ort stellen, wo es nicht wackelt.
4. **Tage bis Wochen warten** – während das Wasser verdunstet, wachsen Kristalle am Faden.

## Warum wachsen Kristalle?

Warmes Wasser kann mehr Stoff lösen als kaltes. Kühlt die Lösung ab und verdunstet Wasser, ist zu viel gelöst – die Teilchen lagern sich am Faden geordnet an.

## Tipps für schönere Kristalle

- **Ruhe:** Nicht bewegen oder anstoßen.
- **Langsames Verdunsten:** Glas mit einem Papiertuch abdecken.
- **Impfkristall:** Einen besonders schönen kleinen Kristall an den Faden binden und in frische, gesättigte Lösung hängen.
- **Farbe:** Ein paar Tropfen Lebensmittelfarbe.

## Sicherheit

Heißes Wasser nur mit Erwachsenen. Für spezielle Kristallsets aus dem Handel die Sicherheitshinweise genau beachten – manche Salze sind nicht zum Verzehr geeignet.`,
          faq: [
            { q: "Wie lange dauert es, bis Kristalle wachsen?", a: "Erste kleine Kristalle zeigen sich oft nach ein bis zwei Tagen, größere brauchen ein bis mehrere Wochen." },
            { q: "Welche Form haben Salzkristalle?", a: "Kochsalz bildet würfelförmige Kristalle." },
          ],
        },
      ],
    },

    /* ================================================================ */
    {
      slug: "astrologie",
      title: "Astrologie & Sternzeichen",
      description: "Die zwölf Sternzeichen, ihre Daten und Symbole – und der Unterschied zwischen Astrologie und Astronomie.",
      pages: [
        {
          slug: "sternzeichen",
          title: "Die 12 Sternzeichen: Daten und Elemente",
          label: "Sternzeichen",
          pageType: "traffic",
          description: "Die 12 Sternzeichen im Überblick: Daten von Widder bis Fische, die vier Elemente der Astrologie und woher die Tierkreiszeichen ihre Namen haben.",
          focusKeyword: "Sternzeichen",
          linkAnchors: ["Sternzeichen", "Tierkreiszeichen"],
          markdown: `„Was ist dein Sternzeichen?“ – Diese Frage kennt fast jeder. Hier findest du alle zwölf **Sternzeichen** der westlichen Astrologie mit ihren Daten.

## Die zwölf Sternzeichen

| Sternzeichen | Zeitraum (ungefähr) | Element |
|---|---|---|
| ♈ Widder | 21. März – 20. April | Feuer |
| ♉ Stier | 21. April – 20. Mai | Erde |
| ♊ Zwillinge | 21. Mai – 21. Juni | Luft |
| ♋ Krebs | 22. Juni – 22. Juli | Wasser |
| ♌ Löwe | 23. Juli – 23. August | Feuer |
| ♍ Jungfrau | 24. August – 23. September | Erde |
| ♎ Waage | 24. September – 23. Oktober | Luft |
| ♏ Skorpion | 24. Oktober – 22. November | Wasser |
| ♐ Schütze | 23. November – 21. Dezember | Feuer |
| ♑ Steinbock | 22. Dezember – 20. Januar | Erde |
| ♒ Wassermann | 21. Januar – 19. Februar | Luft |
| ♓ Fische | 20. Februar – 20. März | Wasser |

Die genauen Grenzen verschieben sich je nach Jahr um etwa einen Tag.

## Woher kommen die Namen?

Die Sonne scheint im Laufe eines Jahres vor verschiedenen Sternbildern entlangzuziehen – entlang des **Tierkreises**. Vor über 2.000 Jahren wurden die zwölf Zeichen nach den Sternbildern auf diesem Weg benannt.

## Sternzeichen ≠ Sternbild

Durch eine langsame Taumelbewegung der Erdachse (**Präzession**) passen die Zeichen heute nicht mehr zu den Sternbildern: Wer laut Kalender „Widder“ ist, wurde meist geboren, als die Sonne vor dem Sternbild Fische stand. Außerdem zieht die Sonne auch durch ein 13. Sternbild, den **Schlangenträger**.

## Was sagt die Wissenschaft?

Viele Menschen lesen Horoskope zum Spaß oder zur Selbstreflexion. **Wissenschaftliche Studien** haben aber keinen Beleg gefunden, dass Sternzeichen Charakter oder Schicksal vorhersagen. Mehr dazu unter „Astrologie und Astronomie“.`,
          faq: [
            { q: "Welches Sternzeichen habe ich?", a: "Das richtet sich nach deinem Geburtsdatum – schau in der Tabelle nach dem passenden Zeitraum." },
            { q: "Gibt es ein 13. Sternzeichen?", a: "In der Astrologie nicht. Astronomisch zieht die Sonne aber auch durch das Sternbild Schlangenträger." },
          ],
          sources: [IAU],
        },
        {
          slug: "astrologie-und-astronomie",
          title: "Astrologie und Astronomie: der Unterschied",
          label: "Astrologie vs. Astronomie",
          pageType: "standard",
          description: "Astrologie und Astronomie: Was beide unterscheidet, woher sie kommen, was die Wissenschaft über Horoskope sagt und warum der Sternenhimmel für beide fasziniert.",
          focusKeyword: "Astrologie und Astronomie",
          linkAnchors: ["Astrologie", "Astronomie"],
          markdown: `Die Wörter klingen ähnlich, gemeint ist aber Grundverschiedenes. Beide schauen in den Sternenhimmel – mit ganz anderen Fragen.

## Astronomie: die Wissenschaft vom Weltall

Die **Astronomie** erforscht Himmelskörper und das Universum mit wissenschaftlichen Methoden: Beobachtung, Messung, Experiment und überprüfbare Theorien. Sie erklärt, wie Sterne entstehen, warum Planeten um die Sonne kreisen oder wie alt das Universum ist.

## Astrologie: Deutung der Sterne

Die **Astrologie** geht davon aus, dass die Stellung von Sonne, Mond und Planeten zum Zeitpunkt der Geburt mit Charakter und Lebensweg zusammenhängt. Daraus entstehen Horoskope.

## Eine gemeinsame Geschichte

Über Jahrtausende waren beide eng verbunden. In alten Kulturen beobachteten Gelehrte den Himmel, um Kalender zu erstellen – und um Zeichen zu deuten. Erst mit der modernen Naturwissenschaft trennten sie sich.

## Was sagt die Forschung?

In vielen Untersuchungen wurde geprüft, ob Sternzeichen Persönlichkeit oder Ereignisse vorhersagen. Ein solcher Zusammenhang konnte **nicht nachgewiesen** werden. Die Astrologie gilt deshalb nicht als Wissenschaft.

## Warum Horoskope trotzdem gefallen

Viele lesen Horoskope zur Unterhaltung, als Anstoß zum Nachdenken oder aus Tradition. Allgemeine Beschreibungen, die auf fast jeden zutreffen, wirken oft erstaunlich persönlich – das nennt man den **Barnum-Effekt**.

## Fazit

Ob Sternzeichen oder Sternbild: Der Blick in den Nachthimmel fasziniert. Wichtige Entscheidungen zu Gesundheit, Geld oder Beziehungen solltest du aber auf verlässliche Informationen stützen. Weiter geht es mit „Sternbilder“ und „Sterne beobachten“.`,
          faq: [
            { q: "Ist Astrologie eine Wissenschaft?", a: "Nein. Ein Zusammenhang zwischen Sternzeichen und Persönlichkeit oder Schicksal konnte wissenschaftlich nicht belegt werden." },
            { q: "Was ist der Barnum-Effekt?", a: "Die Neigung, allgemeine, vage Beschreibungen als zutreffende persönliche Charakterisierung zu empfinden." },
          ],
          sources: [IAU],
        },
      ],
    },
  ],
};
