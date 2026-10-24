import type { FillPage } from "../types";

const VET = { title: "Bundestierärztekammer – Informationen für Tierhalter", url: "https://www.bundestieraerztekammer.de/" };
const TVT = { title: "Tierärztliche Vereinigung für Tierschutz (TVT) – Merkblätter zur Heimtierhaltung", url: "https://www.tierschutz-tvt.de/" };
const TSB = { title: "Deutscher Tierschutzbund – Haustiere", url: "https://www.tierschutzbund.de/" };

export const tiereHaustiere: FillPage[] = [
  /* ---------------- Hunde ---------------- */
  {
    path: "tiere/hunde/welpenfutter",
    description: "Welpenfutter richtig wählen: Warum Welpen eigenes Futter brauchen, wie oft sie fressen sollten und wann der Wechsel zum Erwachsenenfutter passt.",
    markdown: `Welpen wachsen in wenigen Monaten enorm. Ihr Körper braucht dafür mehr Energie, mehr Eiweiß und ein genau abgestimmtes Verhältnis von **Kalzium und Phosphor** als ein erwachsener Hund. Deshalb gibt es **Welpenfutter** – oft auch „Junior“ oder „Puppy“ genannt.

## Woran du gutes Welpenfutter erkennst

- **Alleinfuttermittel:** Auf der Packung steht „Alleinfuttermittel für Welpen“ bzw. „für alle Lebensphasen“. Ergänzungsfutter reicht als Hauptmahlzeit nicht.
- **Klare Deklaration:** Tierische Proteinquelle an erster Stelle, nachvollziehbare Zutaten.
- **Passend zur Größe:** Welpen großer Rassen wachsen länger und sollten nicht zu schnell zunehmen. Spezielles Futter für große Rassen hilft, Gelenkprobleme zu vermeiden.

## Wie oft und wie viel?

Kleine Mägen vertragen keine großen Portionen. Als grobe Orientierung:

| Alter | Mahlzeiten pro Tag |
|---|---|
| bis ca. 3 Monate | 4 |
| ca. 3–6 Monate | 3 |
| ab ca. 6 Monate | 2–3 |

Die Futtermenge steht auf der Verpackung – sie richtet sich nach dem **erwarteten Endgewicht**. Wiege deinen Welpen regelmäßig und passe die Menge an. Die Rippen sollten fühlbar, aber nicht sichtbar sein.

## Wechsel zum Erwachsenenfutter

Kleine Rassen sind oft mit etwa einem Jahr ausgewachsen, große Rassen brauchen deutlich länger. Stelle das Futter **schrittweise über etwa eine Woche** um, indem du den Anteil des neuen Futters langsam erhöhst. So bleibt der Magen ruhig.

## Häufige Fehler

- Zusätzliche Kalzium-Präparate zu einem Alleinfutter – das kann das Knochenwachstum stören.
- Zu viele Leckerlis: Sie zählen zur Tagesration.
- Ständige Futterwechsel ohne Grund.

Bei Durchfall, Erbrechen oder wenn dein Welpe nicht zunimmt, sprich mit deiner Tierarztpraxis.`,
    faq: [
      ["Ab wann bekommt ein Welpe normales Hundefutter?", "Das hängt von der Rasse ab: Kleine Hunde sind oft mit etwa 9 bis 12 Monaten ausgewachsen, große Rassen erst deutlich später. Deine Tierarztpraxis hilft beim richtigen Zeitpunkt."],
      ["Darf ich meinem Welpen Milch geben?", "Kuhmilch ist nicht nötig und kann Durchfall verursachen. Frisches Wasser sollte immer bereitstehen."],
    ],
    sources: [VET],
  },
  {
    path: "tiere/hunde/trockenfutter",
    description: "Trockenfutter für Hunde: Vorteile, Nachteile, worauf du bei Zutaten achtest und warum dein Hund dabei besonders viel trinken muss.",
    markdown: `**Trockenfutter** ist für viele Hundehalter die praktischste Lösung: lange haltbar, einfach zu portionieren und meist günstiger pro Mahlzeit als Nassfutter. Damit es deinem Hund gut tut, solltest du ein paar Punkte beachten.

## Vorteile

- **Praktisch:** einfach abzumessen, gut zu lagern, auch unterwegs.
- **Ergiebig:** Weil Wasser fehlt, ist die Energie konzentriert – die Portionen sind klein.
- **Als Belohnung nutzbar:** Einen Teil der Tagesration kannst du beim Training verfüttern.

## Nachteile

- **Wenig Feuchtigkeit:** Trockenfutter enthält meist nur rund 10 % Wasser. Dein Hund muss den Rest trinken.
- **Schnell überfüttert:** Weil die Portionen klein aussehen, wird oft zu viel gegeben.

## Worauf du beim Kauf achtest

1. **Alleinfuttermittel** für das passende Lebensalter (Welpe, erwachsen, Senior).
2. **Tierisches Protein** als Hauptzutat, klar benannt.
3. **Fütterungsempfehlung** auf der Packung – sie ist ein Startwert, kein Gesetz.
4. **Krokettengröße** passend zum Hund.

## Richtig füttern

- Frisches Wasser muss **immer** verfügbar sein.
- Die Tagesmenge auf zwei Mahlzeiten verteilen.
- Futter **luftdicht und trocken** lagern, damit es nicht ranzig wird oder Milben anzieht.
- Gewicht regelmäßig kontrollieren.

## Trocken- und Nassfutter kombinieren?

Das geht gut, wenn du die Mengen entsprechend reduzierst. Viele Hunde finden die Mischung abwechslungsreicher. Mehr dazu im Ratgeber zu Nassfutter für Hunde.`,
    faq: [
      ["Sollte ich Trockenfutter einweichen?", "Nötig ist es nicht. Bei Welpen, älteren Hunden mit Zahnproblemen oder Hunden, die wenig trinken, kann leichtes Einweichen helfen."],
      ["Reinigt Trockenfutter die Zähne?", "Nur sehr begrenzt. Zahnpflege durch Kauartikel, Zähneputzen und regelmäßige Kontrollen beim Tierarzt ersetzt es nicht."],
    ],
    sources: [VET],
  },
  {
    path: "tiere/hunde/nassfutter",
    description: "Nassfutter für Hunde: Vorteile, worauf du bei der Deklaration achtest, wie du richtig portionierst und geöffnete Dosen lagerst.",
    markdown: `**Nassfutter** schmeckt vielen Hunden besonders gut. Es enthält viel Feuchtigkeit und eignet sich für wählerische Fresser ebenso wie für Hunde, die wenig trinken.

## Vorteile

- **Hoher Wassergehalt** – oft um die 70 bis 80 %.
- **Sehr schmackhaft**, gut für mäkelige Hunde.
- **Weiche Konsistenz**, angenehm für ältere Hunde.

## Nachteile

- Mehr Verpackungsmüll und meist höhere Kosten pro Tag.
- Geöffnete Dosen verderben schnell.

## Deklaration lesen

Achte auf die Bezeichnung **Alleinfuttermittel**. Bei der Zusammensetzung gilt: Was zuerst steht, ist mengenmäßig am meisten enthalten. Eine **offene Deklaration** mit genauen Prozentangaben ist transparenter als Sammelbegriffe wie „Fleisch und tierische Nebenerzeugnisse“.

Die Angaben zu Rohprotein und Rohfett beziehen sich bei Nassfutter auf das Futter **mit** Wasser. Zum Vergleich mit Trockenfutter musst du auf die Trockensubstanz umrechnen.

## Portionieren und lagern

- Die Fütterungsempfehlung der Packung als Start nehmen und am Gewicht des Hundes anpassen.
- **Geöffnete Dosen** abgedeckt im Kühlschrank lagern und innerhalb von etwa ein bis zwei Tagen verbrauchen.
- Vor dem Füttern auf Zimmertemperatur kommen lassen.
- Reste im Napf nach dem Fressen wegräumen.

## Futterwechsel

Neues Futter über mehrere Tage schrittweise untermischen. So vermeidest du Durchfall. Eine Kombination mit Trockenfutter ist möglich, wenn du die Gesamtmenge im Blick behältst.`,
    faq: [
      ["Ist Nassfutter gesünder als Trockenfutter?", "Nicht grundsätzlich. Entscheidend ist ein vollwertiges Alleinfuttermittel in der richtigen Menge. Nassfutter hilft vor allem Hunden, die wenig trinken."],
      ["Wie lange ist eine geöffnete Dose haltbar?", "Abgedeckt im Kühlschrank etwa ein bis zwei Tage. Hinweise des Herstellers auf der Verpackung haben Vorrang."],
    ],
    sources: [VET],
  },
  {
    path: "tiere/hunde/hundespielzeug",
    description: "Hundespielzeug sicher auswählen: welche Arten es gibt, wie Spielzeug auslastet, worauf du bei Material und Größe achtest und was gefährlich ist.",
    markdown: `Spielen ist für Hunde weit mehr als Zeitvertreib: Es stärkt die Bindung, lastet Kopf und Körper aus und hilft gegen Langeweile. Das passende **Hundespielzeug** hängt von Größe, Alter und Vorlieben deines Hundes ab.

## Die wichtigsten Arten

- **Wurfspielzeug:** Bälle, Frisbees und Dummys für Bewegung und Apportieren.
- **Zerrspielzeug:** Seile und Taue für gemeinsames Spiel – mit klaren Regeln wie „Aus“.
- **Kauspielzeug:** robuste Gummispielzeuge zum Kauen, gut gegen Langeweile.
- **Intelligenzspielzeug:** Futterbälle, Schnüffelteppiche und Denkspiele, bei denen der Hund Futter erarbeitet.
- **Kuscheltiere:** für Hunde, die gern tragen – nicht für Zerstörer.

## Sicherheit geht vor

1. **Größe:** Bälle müssen deutlich größer sein als der Rachen, damit sie nicht verschluckt werden.
2. **Material:** stabil, ohne lose Kleinteile, ohne scharfe Kanten.
3. **Zustand prüfen:** Kaputte Spielzeuge entsorgen, bevor Teile abbrechen.
4. **Keine Stöcke werfen:** Sie können splittern und Verletzungen im Maul verursachen.
5. **Tennisbälle:** Die raue Oberfläche kann den Zahnschmelz abnutzen – lieber spezielle Hundebälle.

## Auslastung statt Dauerbespaßung

Wechsle die Spielzeuge regelmäßig, statt alle gleichzeitig herumliegen zu lassen – so bleiben sie interessant. Schnüffel- und Suchspiele lasten oft stärker aus als wildes Ballwerfen und sind gelenkschonender.

## Spielregeln

Beende das Spiel, bevor dein Hund überdreht. Ein ruhiges Signal wie „Fertig“ hilft ihm, wieder herunterzukommen. Spiel ist außerdem eine gute Gelegenheit, Grundkommandos zu üben.`,
    faq: [
      ["Wie viel Spielzeug braucht ein Hund?", "Wenige gute Spielzeuge reichen. Tausche sie regelmäßig aus, dann bleiben sie spannend."],
      ["Ist Ballspielen schlecht für Hunde?", "In Maßen nicht. Sehr häufiges, wildes Ballwerfen kann aber Gelenke belasten und Hunde aufdrehen. Abwechslung mit Such- und Schnüffelspielen ist ideal."],
    ],
    sources: [TSB],
  },
  {
    path: "tiere/hunde/hundetraining",
    description: "Hundetraining mit Belohnung: Grundkommandos, Leinenführigkeit und typische Fehler – so lernt dein Hund entspannt und mit Freude.",
    markdown: `Ein gut erzogener Hund ist entspannter – und sein Mensch auch. Modernes **Hundetraining** setzt auf **positive Verstärkung**: Erwünschtes Verhalten wird belohnt, damit der Hund es gern wiederholt.

## Die Grundlagen

- **Timing:** Die Belohnung muss innerhalb von ein bis zwei Sekunden kommen.
- **Kurze Einheiten:** Lieber mehrmals täglich fünf Minuten als einmal eine halbe Stunde.
- **Ruhige Umgebung:** Neues zuerst zu Hause üben, dann mit Ablenkung.
- **Einheitliche Signale:** Alle im Haushalt nutzen dieselben Wörter.

## Grundkommandos

1. **Sitz** – die Basis für vieles andere.
2. **Platz** – hilft beim Entspannen.
3. **Bleib** – Dauer langsam steigern.
4. **Hier / Rückruf** – das wichtigste Signal für Sicherheit; immer belohnen, nie schimpfen, wenn der Hund kommt.
5. **Aus** – Gegenstände hergeben.

## Leinenführigkeit

Zieht dein Hund, bleib stehen. Erst wenn die Leine locker ist, geht es weiter. Belohne, wenn er neben dir läuft. Das braucht Geduld, wirkt aber dauerhaft.

## Typische Fehler

- **Strafen:** Sie verunsichern und schaden dem Vertrauen.
- **Zu schnell zu viel Ablenkung.**
- **Unklare Signale** oder ständig wiederholte Kommandos („Sitz, Sitz, Sitz“).

## Hundeschule

Eine gute Hundeschule arbeitet gewaltfrei, in kleinen Gruppen und erklärt dir das Warum. Gerade für Welpen ist eine Welpengruppe wertvoll, weil sie dort andere Hunde und Situationen kennenlernen.

Bei Problemverhalten wie Aggression oder starker Angst hilft eine qualifizierte Trainerin oder eine tierärztliche Verhaltensberatung.`,
    faq: [
      ["Ab wann kann man mit dem Training beginnen?", "Sofort, wenn der Welpe einzieht – mit kurzen, spielerischen Übungen. Hunde lernen ihr ganzes Leben lang."],
      ["Was tun, wenn der Hund nicht kommt?", "Den Rückruf in kleinen Schritten ohne Ablenkung neu aufbauen, immer großzügig belohnen und bis dahin eine Schleppleine verwenden."],
    ],
    sources: [TSB, TVT],
  },
  {
    path: "tiere/hunde/hundepflege",
    description: "Hundepflege von Kopf bis Pfote: Fell bürsten, Krallen, Zähne, Ohren und Augen – so pflegst du deinen Hund richtig und entdeckst Probleme früh.",
    markdown: `Regelmäßige **Hundepflege** hält deinen Hund gesund und ist gleichzeitig eine gute Gelegenheit, Veränderungen früh zu bemerken – etwa Zecken, Hautprobleme oder Zahnstein.

## Fell

- **Kurzhaar:** etwa einmal pro Woche bürsten.
- **Langhaar und Doppelfell:** mehrmals pro Woche, im Fellwechsel täglich.
- **Baden:** nur bei Bedarf und mit Hundeshampoo – zu häufiges Baden trocknet die Haut aus.

## Krallen

Krallen sollten beim Stehen den Boden kaum berühren. Klackern sie auf dem Boden, sind sie zu lang. Kürze sie mit einer Krallenzange in kleinen Schritten – im Inneren verläuft ein Blutgefäß. Unsicher? Lass es dir in der Tierarztpraxis zeigen.

## Zähne

Zahnstein ist bei Hunden sehr verbreitet. Am wirksamsten ist **Zähneputzen** mit Hundezahnpasta – menschliche Zahnpasta ist ungeeignet. Gewöhne deinen Hund langsam daran.

## Ohren und Augen

- Ohren regelmäßig ansehen: Rötung, starker Geruch oder Kopfschütteln sind Warnzeichen.
- Nur das sichtbare Ohr mit einem weichen Tuch reinigen, keine Wattestäbchen.
- Augen bei Bedarf mit einem feuchten, sauberen Tuch auswischen.

## Pfoten

Nach Spaziergängen im Winter Streusalz abspülen. Zwischen den Ballen auf kleine Verletzungen, Grannen oder Fremdkörper achten.

## Parasiten

Kontrolliere das Fell nach Spaziergängen auf **Zecken**. Wie du Flöhe, Zecken und Würmer vorbeugst, besprichst du am besten mit deiner Tierarztpraxis.`,
    faq: [
      ["Wie oft sollte ich meinen Hund baden?", "Nur wenn nötig, etwa nach einem Bad im Schlamm. Regelmäßiges Bürsten reicht für die meisten Hunde."],
      ["Kann ich menschliche Zahnpasta verwenden?", "Nein. Sie kann Stoffe wie Xylit enthalten, die für Hunde giftig sind. Nutze spezielle Hundezahnpasta."],
    ],
    sources: [VET],
  },
  {
    path: "tiere/hunde/faq",
    description: "Hunde-FAQ: Antworten auf häufige Fragen zu Futter, Auslauf, Impfungen, Alleinbleiben und Hundesteuer – kurz und verständlich erklärt.",
    markdown: `Hier findest du kurze Antworten auf Fragen, die uns rund um Hunde besonders oft begegnen. Für Details verlinken wir auf die passenden Ratgeber.

## Ernährung

Ein vollwertiges **Alleinfuttermittel** passend zum Alter ist die Basis. Ob Trockenfutter, Nassfutter oder eine Mischung, hängt von deinem Hund ab. Viele Lebensmittel vom Tisch sind ungeeignet – manche sogar giftig. Mehr dazu unter „Giftige Lebensmittel für Haustiere“.

## Bewegung

Wie viel Auslauf ein Hund braucht, hängt stark von Rasse, Alter und Gesundheit ab. Neben Spaziergängen sind **Kopfarbeit** und Schnüffeln wichtig.

## Gesundheit

Regelmäßige **Impfungen** und Kontrollen in der Tierarztpraxis gehören dazu, ebenso Vorbeugung gegen Parasiten. Einen Impfplan erstellt deine Tierarztpraxis.

## Alleinbleiben

Hunde sind soziale Tiere. Alleinbleiben muss in kleinen Schritten geübt werden. Viele Stunden täglich allein zu sein ist für die meisten Hunde nicht artgerecht.

## Rechtliches

In Deutschland erheben die meisten Gemeinden eine **Hundesteuer**, in Österreich gibt es je nach Bundesland und Gemeinde eine Hundeabgabe. Je nach Region gelten außerdem Pflichten wie Chip, Registrierung, Haftpflichtversicherung oder ein Sachkundenachweis. Erkundige dich bei deiner Gemeinde.`,
    faq: [
      ["Brauche ich eine Hundehaftpflichtversicherung?", "In mehreren Bundesländern in Deutschland ist sie Pflicht, in anderen sehr empfehlenswert. In Österreich hängt es vom Bundesland ab. Ein Schaden durch den Hund kann teuer werden."],
      ["Muss mein Hund gechippt sein?", "In Österreich ist die Kennzeichnung mit Mikrochip und Registrierung Pflicht, in Deutschland in einigen Bundesländern. Für Reisen in der EU ist der Chip ohnehin nötig."],
      ["Wie oft muss ein Hund zum Tierarzt?", "Mindestens einmal im Jahr zur Vorsorge und für Impfungen, ältere Hunde oft häufiger."],
    ],
    sources: [VET, TSB],
  },

  /* ---------------- Katzen ---------------- */
  {
    path: "tiere/katzen/kittenfutter",
    description: "Kittenfutter erklärt: Warum junge Katzen spezielles Futter brauchen, wie oft sie fressen sollten und wann der Wechsel zum Erwachsenenfutter passt.",
    markdown: `Kätzchen verdoppeln ihr Gewicht in den ersten Lebenswochen mehrfach. Dafür brauchen sie besonders viel Energie und Eiweiß. **Kittenfutter** ist genau auf diese Wachstumsphase abgestimmt.

## Was Kittenfutter ausmacht

- **Mehr Energie und Protein** als Futter für erwachsene Katzen.
- **Taurin:** Katzen können es nicht ausreichend selbst bilden – es muss im Futter enthalten sein, was bei Alleinfuttermitteln der Fall ist.
- **Kleinere Stücke** bzw. Kroketten für kleine Mäuler.

## Wie oft füttern?

Junge Kätzchen haben kleine Mägen und fressen gern **mehrere kleine Mahlzeiten** am Tag – oft vier oder mehr. Mit zunehmendem Alter kannst du die Zahl der Mahlzeiten reduzieren. Die Mengenangabe auf der Packung ist ein Startwert; kontrolliere das Gewicht regelmäßig.

## Nass oder trocken?

Katzen trinken von Natur aus wenig. **Nassfutter** liefert viel Flüssigkeit und ist deshalb für viele Katzen ein guter Hauptbestandteil. Trockenfutter kann ergänzen, frisches Wasser sollte immer bereitstehen.

## Wechsel zum Erwachsenenfutter

Die meisten Katzen sind mit etwa einem Jahr ausgewachsen, große Rassen später. Stelle das Futter über etwa eine Woche schrittweise um.

## Keine Kuhmilch

Viele Katzen vertragen den Milchzucker nicht und bekommen Durchfall. Wasser ist das richtige Getränk.

Wenn dein Kätzchen nicht frisst, Durchfall hat oder nicht zunimmt, solltest du zügig eine Tierarztpraxis aufsuchen – bei Jungtieren kann es schnell ernst werden.`,
    faq: [
      ["Ab wann fressen Kätzchen festes Futter?", "Etwa ab der vierten Lebenswoche beginnen sie, neben der Muttermilch feste Nahrung zu probieren. Abgegeben werden sollten Kätzchen frühestens mit etwa zwölf Wochen."],
      ["Können erwachsene Katzen Kittenfutter fressen?", "Gelegentlich schadet es nicht, dauerhaft ist es aber zu energiereich und kann zu Übergewicht führen."],
    ],
    sources: [VET],
  },
  {
    path: "tiere/katzen/katzenspielzeug",
    description: "Katzenspielzeug für Jagdinstinkt und Auslastung: Federangeln, Bälle, Fummelbretter und sichere Spielideen für Wohnungs- und Freigängerkatzen.",
    markdown: `Katzen sind Jäger. Auch die gemütlichste Wohnungskatze möchte schleichen, lauern, springen und „Beute“ fangen. Gutes **Katzenspielzeug** lässt sie genau das tun – und hilft gegen Langeweile und Übergewicht.

## Spielzeug, das den Jagdtrieb weckt

- **Federangeln und Spielangeln:** imitieren Vögel oder Mäuse. Bewege die Beute weg von der Katze, nicht auf sie zu.
- **Bälle und kleine Mäuse:** zum Selberjagen.
- **Fummelbretter und Futterbälle:** Futter muss erarbeitet werden – gut für Kopf und Figur.
- **Tunnel und Kartons:** zum Verstecken und Anschleichen.
- **Kicker-Kissen:** zum Festhalten und Treten, oft mit Katzenminze oder Baldrian.

## Sicherheit

- Schnüre, Bänder und Angeln **nach dem Spiel wegräumen** – verschluckte Schnüre sind gefährlich.
- Keine Kleinteile, die abfallen können.
- Laserpointer nie in die Augen richten. Weil die Katze den Punkt nie fangen kann, beende das Spiel mit einem echten Spielzeug, das sie „erbeuten“ darf.

## So spielst du richtig

Mehrere **kurze Spieleinheiten** am Tag sind ideal. Ein typischer Ablauf: Anschleichen, Jagen, Fangen – danach gibt es eine kleine Mahlzeit. Das entspricht dem natürlichen Rhythmus.

Wechsle Spielzeuge regelmäßig aus. Was eine Woche im Schrank lag, ist danach wieder spannend.`,
    faq: [
      ["Wie lange sollte ich mit meiner Katze spielen?", "Mehrere kurze Einheiten von etwa fünf bis fünfzehn Minuten am Tag sind ideal – besonders für Wohnungskatzen."],
      ["Ist Katzenminze schädlich?", "Nein, sie gilt als unbedenklich. Nicht jede Katze reagiert darauf; die Wirkung lässt nach einigen Minuten nach."],
    ],
    sources: [TSB],
  },
  {
    path: "tiere/katzen/kratzbaum",
    description: "Kratzbaum kaufen: Höhe, Stabilität, Liegeflächen und Standort – so findest du einen Kratzbaum, den deine Katze wirklich nutzt.",
    markdown: `Kratzen ist für Katzen ein Grundbedürfnis: Sie pflegen ihre Krallen, dehnen sich und markieren ihr Revier. Ein guter **Kratzbaum** schützt deine Möbel und bietet zugleich Aussichtspunkt und Rückzugsort.

## Worauf es ankommt

1. **Stabilität:** Der wichtigste Punkt. Wackelt der Baum, wird er gemieden. Große Katzen brauchen dicke Stämme und eine schwere Bodenplatte – oder eine Befestigung an Wand oder Decke.
2. **Höhe:** Katzen lieben erhöhte Plätze. Ein hoher Baum mit Aussicht ist besonders beliebt.
3. **Liegeflächen:** groß genug, damit deine Katze sich ausstrecken kann.
4. **Sisalstämme:** dicht gewickelt und austauschbar, damit der Baum lange hält.
5. **Höhlen:** für Katzen, die sich gern zurückziehen.

## Der richtige Standort

Stelle den Kratzbaum dort auf, wo deine Katze ohnehin gern ist – oft in der Nähe des Fensters oder im Wohnzimmer, nicht in einer abgelegenen Ecke. Katzen kratzen gern nach dem Aufwachen, daher ist ein Platz nahe ihrem Schlafplatz ideal.

## Wenn die Katze trotzdem die Couch nimmt

- Weitere Kratzmöglichkeiten genau dort anbieten, wo sie kratzt (z. B. Kratzbrett).
- Kratzbaum mit Spielangel oder Katzenminze interessant machen.
- Nie bestrafen – stattdessen das richtige Kratzen loben.

## Pflege

Sisal regelmäßig prüfen, abgenutzte Stämme ersetzen und Liegeflächen absaugen.`,
    faq: [
      ["Wie hoch sollte ein Kratzbaum sein?", "So hoch, dass sich deine Katze in voller Länge strecken kann, und gern mit einem erhöhten Aussichtsplatz. Für große Katzen oder mehrere Katzen darf er deutlich höher und stabiler sein."],
      ["Braucht eine Freigängerkatze einen Kratzbaum?", "Ja, auch Freigänger kratzen in der Wohnung. Ein Kratzbaum oder Kratzbrett schützt die Möbel."],
    ],
    sources: [TSB],
  },
  {
    path: "tiere/katzen/katzenklo",
    description: "Katzenklo richtig wählen und aufstellen: Größe, offen oder mit Haube, passende Streu, Anzahl der Toiletten und Reinigung.",
    markdown: `Katzen sind sehr reinliche Tiere. Wenn das **Katzenklo** nicht passt, suchen sie sich schnell einen anderen Ort. Mit ein paar Regeln vermeidest du Unsauberkeit.

## Größe

Die Toilette sollte deutlich **länger als die Katze** sein, damit sie sich bequem drehen und scharren kann. Viele handelsübliche Modelle sind für große Katzen zu klein.

## Offen oder mit Haube?

- **Offene Toiletten** werden von vielen Katzen bevorzugt, weil sie die Umgebung im Blick haben.
- **Haubentoiletten** halten Streu und Geruch besser zurück, Gerüche stauen sich darin aber auch für die Katze. Probiere aus, was deine Katze annimmt.

## Wie viele Katzenklos?

Eine bewährte Faustregel lautet: **Anzahl der Katzen plus eins**. Bei zwei Katzen also drei Toiletten, verteilt auf verschiedene Orte.

## Der richtige Platz

- Ruhig, aber gut erreichbar.
- Nicht neben dem Futternapf.
- Nicht in einem Durchgang, wo die Katze gestört wird.

## Katzenstreu

Klumpende Streu ist praktisch, weil du Verunreinigungen gezielt entfernen kannst. Viele Katzen mögen feine, geruchsneutrale Streu. Wechsle die Sorte nur schrittweise.

## Sauberkeit

Häufchen und Klumpen **mindestens einmal täglich** entfernen und die Toilette regelmäßig komplett reinigen – mit heißem Wasser und mildem Reiniger, ohne stark riechende Mittel.

Wird deine Katze plötzlich unsauber, kann eine Blasenentzündung oder Stress dahinterstecken. Lass das tierärztlich abklären.`,
    faq: [
      ["Warum geht meine Katze nicht aufs Klo?", "Häufige Gründe sind eine schmutzige oder zu kleine Toilette, eine neue Streu, ein ungünstiger Standort oder gesundheitliche Probleme. Bei plötzlicher Unsauberkeit lieber tierärztlich abklären lassen."],
      ["Wie oft muss die Streu komplett gewechselt werden?", "Das hängt von der Streu ab. Klumpen täglich entfernen, die Toilette regelmäßig komplett reinigen und die Streu erneuern."],
    ],
    sources: [TSB],
  },
  {
    path: "tiere/katzen/katzenpflege",
    description: "Katzenpflege leicht gemacht: Fell bürsten, Krallen, Zähne, Augen und Ohren kontrollieren und Krankheitszeichen früh erkennen.",
    markdown: `Katzen putzen sich selbst sehr gründlich. Trotzdem brauchen sie etwas Unterstützung – vor allem Langhaarkatzen und ältere Tiere. Regelmäßige **Katzenpflege** hilft außerdem, Krankheiten früh zu erkennen.

## Fell bürsten

- **Kurzhaarkatzen:** gelegentliches Bürsten, besonders im Fellwechsel.
- **Langhaarkatzen:** am besten täglich, sonst verfilzt das Fell.
- Bürsten reduziert auch **Haarballen**, weil die Katze weniger Haare verschluckt.

Baden ist bei Katzen nur in Ausnahmefällen nötig.

## Krallen

Freigänger nutzen ihre Krallen ab. Bei Wohnungskatzen und Senioren können sie zu lang werden. Kürze nur die durchsichtige Spitze – im rosafarbenen Teil liegen Blutgefäße und Nerven.

## Zähne

Zahnprobleme sind bei Katzen häufig und bleiben oft unbemerkt. Warnzeichen sind Mundgeruch, Sabbern oder vorsichtiges Kauen. Lass die Zähne bei der jährlichen Kontrolle mit ansehen.

## Augen und Ohren

Augen sollten klar sein, ohne Ausfluss. Ohren sauber und geruchlos. Starker Juckreiz oder dunkle Krümel im Ohr können auf Ohrmilben hinweisen.

## Gesundheitscheck beim Kuscheln

Taste deine Katze regelmäßig ab: Gibt es Knoten, Verletzungen oder schmerzhafte Stellen? Achte auf Veränderungen bei Appetit, Trinkmenge und Gewicht. Gerade Katzen verbergen Schmerzen gut.`,
    faq: [
      ["Muss ich meine Katze baden?", "In der Regel nicht. Katzen reinigen sich selbst. Nur bei starker Verschmutzung oder auf tierärztlichen Rat ist ein Bad sinnvoll."],
      ["Woran erkenne ich, dass meine Katze krank ist?", "Rückzug, weniger Appetit, veränderte Trinkmenge, Unsauberkeit oder ein struppiges Fell können Anzeichen sein. Im Zweifel lieber früh zur Tierarztpraxis."],
    ],
    sources: [VET],
  },
  {
    path: "tiere/katzen/katzenversicherung",
    description: "Katzenversicherung verstehen: Unterschied zwischen OP- und Krankenversicherung, typische Leistungen, Wartezeiten und worauf du im Vertrag achtest.",
    markdown: `Tierarztbehandlungen können teuer werden – besonders bei Operationen. Eine **Katzenversicherung** kann diese Kosten abfedern. Bevor du abschließt, solltest du wissen, welche Arten es gibt und worauf es im Kleingedruckten ankommt.

## OP-Versicherung oder Krankenversicherung?

- **OP-Versicherung:** übernimmt Kosten rund um Operationen, oft inklusive Voruntersuchung und Nachbehandlung in einem bestimmten Zeitraum.
- **Krankenversicherung:** zahlt zusätzlich ambulante Behandlungen, je nach Tarif auch Vorsorge wie Impfungen.

## Darauf solltest du achten

1. **Erstattung nach Gebührenordnung:** Bis zu welchem Satz der Gebührenordnung für Tierärzte (GOT) wird erstattet? Im Notdienst werden oft höhere Sätze abgerechnet.
2. **Wartezeit:** Viele Tarife leisten erst nach einer Wartezeit – außer bei Unfällen.
3. **Selbstbeteiligung** und Jahreshöchstgrenzen.
4. **Ausschlüsse:** Vorerkrankungen und bestimmte Erkrankungen sind oft ausgeschlossen.
5. **Eintrittsalter:** Ältere Katzen sind manchmal nicht mehr versicherbar oder teurer.
6. **Kündigungsrecht** des Versicherers im Schadensfall.

## Lohnt sich das?

Das hängt davon ab, ob du eine hohe unerwartete Rechnung aus eigenen Mitteln bezahlen könntest. Eine Alternative ist ein eigenes **Rücklagenkonto** für Tierarztkosten. Wie hoch Behandlungskosten ausfallen können, liest du im Ratgeber zu Tierarztkosten.

Für Freigänger ist zusätzlich eine Absicherung gegen Unfälle besonders interessant. Vergleiche mehrere Angebote und lies die Versicherungsbedingungen vollständig.`,
    faq: [
      ["Brauche ich für meine Katze eine Haftpflichtversicherung?", "Katzen sind in vielen privaten Haftpflichtversicherungen mitversichert. Prüfe deine Police – Hunde und Pferde brauchen dagegen meist eine eigene Tierhalterhaftpflicht."],
      ["Zahlt die Versicherung auch für Vorerkrankungen?", "Meist nicht. Bekannte Erkrankungen vor Vertragsbeginn sind häufig ausgeschlossen – lies die Bedingungen genau."],
    ],
    sources: [{ title: "Verbraucherzentrale – Tierversicherungen", url: "https://www.verbraucherzentrale.de/" }, VET],
  },
  {
    path: "tiere/katzen/faq",
    description: "Katzen-FAQ: Antworten auf häufige Fragen zu Ernährung, Wohnungshaltung, Kastration, Impfungen und Einzel- oder Paarhaltung von Katzen.",
    markdown: `Kurze Antworten auf Fragen rund um Katzen, die uns oft gestellt werden. Ausführlicher wird es in den verlinkten Ratgebern.

## Ernährung

Katzen sind reine **Fleischfresser** und brauchen Nährstoffe wie Taurin aus tierischen Quellen. Ein vollwertiges Alleinfuttermittel ist die Basis. Weil Katzen wenig trinken, ist Nassfutter für viele ein guter Hauptbestandteil.

## Wohnungskatze oder Freigänger?

Beides kann gut funktionieren. **Wohnungskatzen** brauchen viel Beschäftigung, Kratz- und Klettermöglichkeiten. **Freigänger** leben abwechslungsreicher, aber riskanter (Straßenverkehr).

## Allein oder zu zweit?

Viele Katzen sind sozialer als ihr Ruf. Besonders Wohnungskatzen profitieren oft von einer passenden zweiten Katze. Es gibt aber auch Einzelgänger – das hängt vom Charakter ab.

## Kastration

Freigängerkatzen sollten kastriert werden. In Österreich ist die Kastration von Katzen mit Freigang gesetzlich vorgeschrieben (außer bei registrierter Zucht), in vielen deutschen Städten und Gemeinden gibt es ebenfalls Kastrationspflichten. Kastration verhindert ungewollten Nachwuchs und Katzenelend.

## Impfungen und Kennzeichnung

Grundimpfungen gegen Katzenseuche und Katzenschnupfen sind für alle Katzen empfohlen, für Freigänger je nach Situation weitere. Ein **Mikrochip** mit Registrierung hilft, entlaufene Katzen wiederzufinden.`,
    faq: [
      ["Wie alt werden Katzen?", "Viele Katzen werden 12 bis 18 Jahre alt, manche deutlich älter. Wohnungskatzen leben im Schnitt oft länger als Freigänger."],
      ["Darf meine Katze Milch trinken?", "Besser nicht. Viele Katzen vertragen Milchzucker schlecht. Wasser ist das richtige Getränk."],
      ["Wann sollte eine Katze kastriert werden?", "Den passenden Zeitpunkt bespricht man am besten mit der Tierarztpraxis – meist vor der Geschlechtsreife."],
    ],
    sources: [VET, TSB],
  },

  /* ---------------- Pferde ---------------- */
  {
    path: "tiere/pferde/pferdefutter",
    description: "Pferdefutter verstehen: Raufutter als Basis, Kraftfutter nur bei Bedarf, Mineralfutter, Wasser und typische Fütterungsfehler bei Pferden.",
    markdown: `Pferde sind Dauerfresser. In der Natur verbringen sie einen großen Teil des Tages mit Fressen. Ihr Verdauungssystem ist darauf ausgelegt, ständig kleine Mengen **faserreiches Futter** aufzunehmen.

## Raufutter ist die Basis

**Heu**, Gras und Heulage bilden die Grundlage jeder Pferdefütterung. Als Orientierung gilt eine Raufuttermenge von etwa **1,5 bis 2 kg je 100 kg Körpergewicht** pro Tag. Lange Fresspausen von mehr als einigen Stunden sollten vermieden werden – sie belasten Magen und Psyche.

## Kraftfutter nur bei Bedarf

Hafer, Müsli oder Pellets liefern zusätzliche Energie. Viele Freizeitpferde brauchen davon **wenig oder gar nichts**. Zu viel Kraftfutter kann Koliken, Übergewicht und Stoffwechselprobleme begünstigen. Wenn, dann auf mehrere kleine Portionen verteilen.

## Mineralfutter

Heu allein deckt den Bedarf an Mineralstoffen und Spurenelementen oft nicht vollständig. Ein passendes **Mineralfutter** gleicht das aus. Eine Heuanalyse hilft, gezielt zu ergänzen. Ein Salzleckstein sollte zur Verfügung stehen.

## Wasser

Pferde brauchen jederzeit Zugang zu **sauberem Wasser** – auch im Winter muss die Tränke eisfrei sein.

## Typische Fehler

- Schimmeliges oder staubiges Heu verfüttern.
- Plötzliche Futterumstellungen, auch beim Anweiden im Frühjahr.
- Zu große Kraftfutterportionen auf einmal.

Bei Fragen zur Rationsberechnung helfen Tierärztinnen und spezialisierte Futterberater.`,
    faq: [
      ["Wie viel Heu braucht ein Pferd am Tag?", "Als Faustregel etwa 1,5 bis 2 kg Raufutter je 100 kg Körpergewicht. Ein 500-kg-Pferd braucht also etwa 7,5 bis 10 kg."],
      ["Darf mein Pferd Äpfel und Karotten fressen?", "In kleinen Mengen als Leckerli ja. Große Mengen Obst können die Verdauung stören."],
    ],
    sources: [VET, { title: "Bundesministerium für Ernährung und Landwirtschaft – Leitlinien Pferdehaltung", url: "https://www.bmel.de/" }],
  },
  {
    path: "tiere/pferde/pferdezubehoer",
    description: "Pferdezubehör im Überblick: Halfter, Putzzeug, Decken, Gamaschen und Stallbedarf – was du wirklich brauchst und worauf du achtest.",
    markdown: `Rund ums Pferd gibt es unzählige Produkte. Nicht alles ist nötig. Hier findest du das **Pferdezubehör**, das in fast jedem Stall gebraucht wird.

## Grundausstattung

- **Halfter und Führstrick:** passend in der Größe, Strick mit Panikhaken oder sicherem Karabiner.
- **Putzzeug:** Striegel, Kardätsche, Wurzelbürste, Hufkratzer, Mähnenkamm.
- **Hufpflege:** Hufkratzer täglich, Hufpflegemittel nach Bedarf.
- **Erste-Hilfe-Set:** Verbandsmaterial, Desinfektionsmittel, Thermometer und die Nummer der Tierarztpraxis.

## Decken

Ob ein Pferd eine Decke braucht, hängt von Haltung, Fell und Wetter ab. Ungeschorene, gesunde Pferde in Offenstallhaltung brauchen oft keine. Geschorene oder ältere Pferde können eine Regen- oder Winterdecke benötigen. Wichtig: richtige Passform, damit nichts scheuert.

## Beinschutz

Gamaschen und Streichkappen schützen beim Training vor Verletzungen. Nach dem Reiten abnehmen, damit die Beine nicht überhitzen.

## Fliegenschutz

Im Sommer helfen Fliegenmasken, Fliegendecken und geeignete Repellents gegen Insekten.

## Qualität vor Menge

Investiere lieber in wenige, gut sitzende und robuste Teile. Kontrolliere Leder und Nähte regelmäßig. Die Ausrüstung zum Reiten selbst – Sattel, Trense und Helm – findest du im Ratgeber zur Reitausrüstung.`,
    faq: [
      ["Braucht jedes Pferd eine Decke?", "Nein. Viele gesunde, ungeschorene Pferde kommen ohne aus. Geschorene, alte oder kranke Pferde brauchen eher eine Decke – im Zweifel Stall oder Tierarzt fragen."],
      ["Wie oft muss Putzzeug gereinigt werden?", "Regelmäßig auswaschen und trocknen lassen. Bei Hautpilz oder anderen Erkrankungen sollte jedes Pferd sein eigenes Putzzeug haben."],
    ],
    sources: [VET],
  },
  {
    path: "tiere/pferde/reitausruestung",
    description: "Reitausrüstung für Einsteiger: Reithelm, Reitstiefel, Reithose, Handschuhe und Sicherheitsweste – was du brauchst und worauf du beim Kauf achtest.",
    markdown: `Wer mit dem Reiten beginnt, braucht nicht gleich eine komplette Ausstattung. Einige Teile sind aber für die **Sicherheit** unverzichtbar.

## Das Wichtigste: der Reithelm

Ein geprüfter **Reithelm** ist Pflicht – auch bei kurzen Ausritten. Achte auf eine aktuelle Sicherheitsnorm (z. B. EN 1384 oder neuere Prüfnormen) und eine gute Passform: Der Helm darf nicht wackeln und nicht drücken. Nach einem Sturz sollte er ersetzt werden.

## Schuhe

Reitstiefel oder Stiefeletten mit **Absatz** verhindern, dass der Fuß durch den Steigbügel rutscht. Turnschuhe oder Wanderschuhe mit grobem Profil sind ungeeignet.

## Reithose

Reithosen haben keine störenden Innennähte und einen Besatz an Knie oder Gesäß, der Halt gibt. Für die ersten Stunden genügt eine bequeme, eng anliegende Hose ohne dicke Nähte.

## Handschuhe

Sie schützen vor Blasen und Verbrennungen durch die Zügel und verbessern den Griff.

## Sicherheitsweste

Für Springreiten, Geländeritte und Kinder ist eine **Schutzweste** sehr empfehlenswert.

## Ausrüstung fürs Pferd

Sattel und Trense müssen dem Pferd genau passen. Ein schlecht sitzender Sattel verursacht Schmerzen und Verspannungen – lass ihn von einer Sattlerin anpassen. In Reitschulen wird die Ausrüstung fürs Pferd gestellt.

Tipp: Viele Reitschulen verleihen Helme für die ersten Stunden. Kauf dir dann einen eigenen, sobald klar ist, dass du dabeibleibst.`,
    faq: [
      ["Kann ich mit einem Fahrradhelm reiten?", "Nein. Reithelme sind für die typischen Sturzszenarien beim Reiten geprüft. Ein Fahrradhelm bietet nicht denselben Schutz."],
      ["Was brauche ich für die erste Reitstunde?", "Einen geprüften Reithelm (oft leihbar), Schuhe mit Absatz und eine bequeme, eng anliegende Hose. Handschuhe sind empfehlenswert."],
    ],
    sources: [{ title: "Deutsche Reiterliche Vereinigung (FN)", url: "https://www.pferd-aktuell.de/" }],
  },
  {
    path: "tiere/pferde/pferdepflege",
    description: "Pferdepflege Schritt für Schritt: Putzen, Hufe auskratzen, Mähne und Schweif, Zähne und Gesundheitscheck – so bleibt dein Pferd gesund.",
    markdown: `Tägliche **Pferdepflege** ist mehr als Sauberkeit: Beim Putzen stärkst du die Bindung und bemerkst Verletzungen, Schwellungen oder Hautprobleme früh.

## Putzen in der richtigen Reihenfolge

1. **Striegel** in kreisenden Bewegungen: löst Schmutz und Haare, nicht an Kopf und Beinen mit hartem Striegel.
2. **Kardätsche:** in Haarrichtung, entfernt Staub. Zwischendurch am Striegel abstreifen.
3. **Kopf** vorsichtig mit einer weichen Bürste.
4. **Mähne und Schweif** von unten nach oben verlesen, um Haarbruch zu vermeiden.

## Hufe auskratzen

Die Hufe solltest du **vor und nach jedem Reiten** auskratzen – von der Ferse zur Spitze. Achte auf Steine, Geruch (Hinweis auf Strahlfäule) und Risse. Ein Hufschmied oder eine Hufpflegerin kommt in der Regel alle sechs bis acht Wochen.

## Zähne

Pferdezähne wachsen ein Leben lang nach. Scharfe Kanten können Schmerzen verursachen. Lass die Zähne **regelmäßig tierärztlich kontrollieren**.

## Gesundheitscheck

- Augen klar, Nüstern ohne Ausfluss
- Beine ohne Wärme oder Schwellung
- Normales Fressverhalten und Kotabsatz
- Ruhiges Atmen in Ruhe

Bei Koliksymptomen wie Scharren, Wälzen, Schwitzen oder Umsehen zum Bauch sofort die Tierarztpraxis anrufen.`,
    faq: [
      ["Wie oft sollte ein Pferd geputzt werden?", "Vor jedem Reiten gründlich, ansonsten möglichst täglich kurz – auch um Verletzungen früh zu entdecken."],
      ["Wie oft kommt der Hufschmied?", "Meist alle sechs bis acht Wochen, je nach Hufwachstum und Beschlag."],
    ],
    sources: [VET],
  },
  {
    path: "tiere/pferde/pferdeversicherung",
    description: "Pferdeversicherung erklärt: Tierhalterhaftpflicht, OP- und Krankenversicherung fürs Pferd – welche wichtig ist und worauf du achten solltest.",
    markdown: `Pferde sind große, kräftige Tiere – und Tierarztkosten können hoch sein. Eine durchdachte **Pferdeversicherung** schützt dich vor finanziellen Risiken.

## Pferdehalterhaftpflicht: die wichtigste Versicherung

Verursacht dein Pferd einen Schaden – etwa wenn es ausbricht und einen Unfall auslöst – haftest du als Halter in der Regel auch ohne eigenes Verschulden. Die Schäden können sehr hoch sein. Eine **Pferdehalterhaftpflicht** ist deshalb dringend zu empfehlen.

Prüfe:
- ausreichende Deckungssumme
- ob Fremdreiter und Reitbeteiligungen mitversichert sind
- ob Flurschäden und gemietete Stallungen abgedeckt sind

## OP-Versicherung

Sie übernimmt Kosten für Operationen, etwa nach einer Kolik. Wichtig sind Erstattungssatz nach Gebührenordnung, Wartezeiten, Selbstbeteiligung und Höchstgrenzen.

## Krankenversicherung

Zahlt zusätzlich ambulante Behandlungen. Sie ist teurer und lohnt sich vor allem, wenn eine hohe Tierarztrechnung dein Budget sprengen würde.

## Weitere Versicherungen

- **Lebens- und Unfallversicherung** für das Pferd, vor allem bei wertvollen Sportpferden.
- **Unfallversicherung** für dich als Reiter.

Vergleiche mehrere Angebote, lies die Bedingungen und achte auf Ausschlüsse von Vorerkrankungen.`,
    faq: [
      ["Ist eine Pferdehaftpflicht Pflicht?", "Gesetzlich ist sie in Deutschland und Österreich in der Regel nicht vorgeschrieben, Ställe verlangen sie aber oft. Wegen des hohen Risikos ist sie dringend zu empfehlen."],
      ["Sind Reitbeteiligungen automatisch versichert?", "Nicht immer. Prüfe, ob Fremdreiter in deiner Pferdehalterhaftpflicht eingeschlossen sind."],
    ],
    sources: [{ title: "Verbraucherzentrale – Versicherungen", url: "https://www.verbraucherzentrale.de/wissen/geld-versicherungen" }],
  },
  {
    path: "tiere/pferde/faq",
    description: "Pferde-FAQ: häufige Fragen zu Haltung, Kosten, Fütterung, Reitbeteiligung und Gesundheit von Pferden – kurz und verständlich beantwortet.",
    markdown: `Hier beantworten wir Fragen, die Pferdefreunde und Neueinsteiger häufig stellen.

## Haltung

Pferde sind **Herdentiere** und Lauftiere. Artgerecht ist eine Haltung mit Artgenossen, viel Bewegung, Licht, frischer Luft und ständigem Zugang zu Raufutter. Offenstall- und Paddockhaltung kommen dem nahe, Einzelboxen brauchen viel Auslauf als Ausgleich.

## Kosten

Ein eigenes Pferd ist ein großer finanzieller und zeitlicher Aufwand: Stallmiete, Futter, Hufschmied, Tierarzt, Versicherungen, Ausrüstung und Unterricht. Kalkuliere realistisch, bevor du ein Pferd kaufst.

## Reitbeteiligung

Eine **Reitbeteiligung** ist eine gute Möglichkeit, regelmäßig ein Pferd zu reiten und zu versorgen, ohne die volle Verantwortung zu tragen. Kläre schriftlich, wer was bezahlt und ob du versichert bist.

## Gesundheit

Regelmäßige Impfungen, Entwurmung nach Kotprobe, Zahnkontrolle und Hufpflege gehören zur Routine. Eine **Kolik** ist ein Notfall – im Zweifel sofort die Tierarztpraxis rufen.

## Alter

Pferde werden häufig 25 bis 30 Jahre alt. Wer ein Pferd kauft, übernimmt Verantwortung für sehr lange Zeit.`,
    faq: [
      ["Kann man ein Pferd allein halten?", "Nein, Pferde sind Herdentiere und brauchen Artgenossen. Einzelhaltung gilt als nicht artgerecht."],
      ["Ab welchem Alter kann man reiten lernen?", "Viele Reitschulen bieten Kurse ab etwa sechs Jahren an, oft mit Ponys. Für Erwachsene ist es nie zu spät."],
    ],
    sources: [{ title: "BMEL – Leitlinien zur Beurteilung von Pferdehaltungen unter Tierschutzgesichtspunkten", url: "https://www.bmel.de/" }],
  },

  /* ---------------- Kaninchen ---------------- */
  {
    path: "tiere/kaninchen/kaninchenfutter",
    description: "Kaninchenfutter richtig: Heu und frisches Grünfutter als Basis, wenig Trockenfutter, keine Knabberstangen – so ernährst du Kaninchen artgerecht.",
    markdown: `Kaninchen sind **Pflanzenfresser** mit einem empfindlichen Verdauungssystem, das auf ständigen Nachschub an faserreicher Nahrung angewiesen ist. Ihre Zähne wachsen lebenslang nach und müssen durch viel Kauen abgenutzt werden.

## Die Basis: Heu und Grünfutter

- **Heu** muss immer in guter Qualität und unbegrenzt zur Verfügung stehen.
- **Frisches Grünfutter:** Wiesenkräuter, Gras, Blattsalate, Kräuter und Gemüseblätter – täglich und in großer Menge. Neue Sorten langsam anfüttern.
- **Gemüse** wie Karottengrün, Fenchel oder Kohlrabiblätter. Obst nur selten, weil es viel Zucker enthält.

## Was du weglassen solltest

- **Getreidelastiges Trockenfutter** und bunte Mischungen: oft zu energiereich und schlecht für Zähne und Verdauung.
- **Knabberstangen und Joghurtdrops** mit Zucker und Honig.
- **Brot** und Backwaren.
- Giftige Pflanzen wie viele Zierpflanzen, Eibe oder Efeu.

## Wasser

Frisches Wasser in einem schweren Napf, den die Tiere nicht umwerfen können. Viele Kaninchen trinken aus Näpfen mehr als aus Nippeltränken.

## Futter im Wechsel der Jahreszeit

Im Sommer ist die Wiese die beste Quelle. Im Winter ersetzen Salate, Gemüse und Kräuter das frische Grün. Übergänge immer langsam gestalten.

Frisst ein Kaninchen nicht mehr oder setzt keinen Kot ab, ist das ein **Notfall** – sofort zur Tierarztpraxis.`,
    faq: [
      ["Brauchen Kaninchen Trockenfutter?", "In der Regel nicht, wenn sie genug Heu und frisches Grünfutter bekommen. Getreidehaltiges Trockenfutter kann sogar Zahn- und Verdauungsprobleme fördern."],
      ["Dürfen Kaninchen Karotten fressen?", "Ja, aber in Maßen – Karotten enthalten viel Zucker. Das Karottengrün ist ein besonders gutes Futter."],
    ],
    sources: [TVT, TSB],
  },
  {
    path: "tiere/kaninchen/kaninchenstall",
    description: "Kaninchenstall artgerecht: Warum klassische Ställe zu klein sind, wie viel Platz Kaninchen brauchen und wie ein gutes Gehege aussieht.",
    markdown: `Der klassische kleine **Kaninchenstall** aus dem Zoohandel ist für eine dauerhafte Haltung meist viel zu klein. Kaninchen sind Bewegungstiere, die hoppeln, Haken schlagen, buddeln und sich auf zwei Beine stellen möchten.

## Wie viel Platz brauchen Kaninchen?

Tierschutzorganisationen und Tierärztevereinigungen empfehlen für **zwei Kaninchen** eine Grundfläche von mindestens etwa **6 m²** – mehr ist besser. Ein Stall darf allenfalls ein Rückzugsraum innerhalb eines großen Geheges sein.

## Was ein gutes Zuhause bietet

- **Mehrere Etagen und Verstecke:** Häuschen mit zwei Ausgängen, damit sich niemand in die Enge getrieben fühlt.
- **Buddelmöglichkeit:** eine Kiste mit Erde oder Sand.
- **Witterungsschutz** bei Außenhaltung: trockene, zugfreie Schutzhütte, Schatten im Sommer.
- **Ausbruchs- und Raubtiersicherheit:** stabiles Gitter, auch gegen Marder und Füchse, eventuell untergraben.

## Innen oder außen?

Beides ist möglich. Bei **Außenhaltung** brauchen Kaninchen eine wetterfeste Unterkunft und eine langsame Gewöhnung an Kälte. Bei **Innenhaltung** ist ein großes Gehege oder ein kaninchensicheres Zimmer ideal. Kabel und giftige Pflanzen müssen gesichert sein.

## Niemals allein

Kaninchen sind gesellige Tiere und sollten **mindestens zu zweit** gehalten werden. Ein Meerschweinchen ist kein Ersatz für einen Artgenossen.`,
    faq: [
      ["Reicht ein großer Käfig für Kaninchen?", "Für dauerhafte Haltung meist nicht. Kaninchen brauchen viel Platz zum Hoppeln – empfohlen werden für zwei Tiere mindestens etwa 6 m² Gehegefläche."],
      ["Können Kaninchen im Winter draußen leben?", "Ja, wenn sie langsam daran gewöhnt werden und eine trockene, gut isolierte, zugfreie Schutzhütte haben."],
    ],
    sources: [TVT, TSB],
  },
  {
    path: "tiere/kaninchen/kaninchengehege",
    description: "Kaninchengehege bauen: Größe, Sicherheit gegen Raubtiere, Untergrund, Einrichtung und Schatten – so entsteht ein artgerechtes Gehege.",
    markdown: `Ein großes **Kaninchengehege** ist die beste Wohnform für Kaninchen. Hier können sie rennen, springen, buddeln und sich ausruhen – ganz nach ihrem natürlichen Verhalten.

## Größe

Für zwei Kaninchen werden mindestens etwa **6 m²** empfohlen, für jedes weitere Tier mehr. Wichtig ist auch, dass die Fläche nicht zu schmal ist, damit die Tiere richtig Anlauf nehmen können.

## Sicherheit draußen

- **Stabiles Volierengitter** statt dünnem Kaninchendraht – Marder, Füchse und Greifvögel sind eine echte Gefahr.
- **Abdeckung** von oben.
- **Untergrabschutz:** Gitter im Boden eingraben oder Platten verlegen, damit niemand hinaus- oder hineingräbt.

## Einrichtung

- Schutzhütte, trocken und isoliert
- Mehrere Verstecke mit zwei Ausgängen
- Erhöhte Ebenen zum Ausschauhalten
- Buddelkiste
- Heuraufe an einem trockenen Platz
- Schweren Wassernapf

## Untergrund

Naturboden ist ideal, solange er gesichert ist. Teile mit Platten helfen, die Krallen abzunutzen und den Bereich sauber zu halten.

## Schatten

Kaninchen sind hitzeempfindlich. Im Sommer braucht das Gehege **schattige, kühle Bereiche**. Temperaturen über etwa 25 °C können gefährlich werden.

## Innengehege

In der Wohnung lässt sich mit Gittern und Steckelementen ebenfalls ein großes Gehege bauen. Rutschfeste Böden und gesicherte Kabel sind hier besonders wichtig.`,
    faq: [
      ["Welcher Draht eignet sich für ein Kaninchengehege?", "Stabiles, verzinktes Volierengitter. Dünner Sechseckdraht hält Raubtiere wie Marder oft nicht ab."],
      ["Wie schütze ich Kaninchen vor Hitze?", "Schatten, kühle Fliesen, frisches Wasser und gut durchlüftete Rückzugsorte. In Hitzeperioden mehrmals täglich kontrollieren."],
    ],
    sources: [TVT, TSB],
  },
  {
    path: "tiere/kaninchen/kaninchenspielzeug",
    description: "Kaninchenspielzeug und Beschäftigung: Buddelkisten, Futtersuche, Tunnel und Intelligenzspiele – so bleiben Kaninchen aktiv und ausgeglichen.",
    markdown: `Kaninchen langweilen sich schnell, wenn sie nur auf einer kleinen Fläche sitzen. Gute Beschäftigung orientiert sich an ihrem natürlichen Verhalten: **graben, futtersuchen, erkunden und verstecken**.

## Beschäftigungsideen

- **Buddelkiste:** gefüllt mit Erde, Sand oder Papierschnipseln.
- **Futter verstecken:** Kräuter und Gemüse im Gehege verteilen, in Heu verstecken oder in Papprollen stecken.
- **Tunnel und Röhren** aus Weidengeflecht oder Pappe.
- **Kartons mit zwei Ausgängen** – günstig und beliebt.
- **Äste zum Knabbern:** unbehandelte Zweige von Apfel, Birne oder Haselnuss.
- **Intelligenzspielzeug:** Futterspiele mit Klappen oder Schubladen.

## Was ungeeignet ist

- Plastikspielzeug, das zerkaut und verschluckt werden kann.
- Lackiertes oder behandeltes Holz.
- Zweige giftiger Pflanzen wie Eibe, Thuja oder Kirschlorbeer.

## Abwechslung

Verändere die Einrichtung des Geheges ab und zu. Neue Wege, Verstecke und Futterplätze regen die Neugier an.

## Gemeinsam statt allein

Die beste „Beschäftigung“ ist ein Artgenosse. Kaninchen putzen sich gegenseitig, kuscheln und spielen miteinander. Einzelhaltung ist nicht artgerecht.`,
    faq: [
      ["Spielen Kaninchen mit Bällen?", "Manche schubsen leichte Bälle aus Weide oder Heu herum. Wichtiger ist Beschäftigung rund um Futtersuche und Graben."],
      ["Welche Äste dürfen Kaninchen knabbern?", "Unbehandelte Zweige von Obstbäumen wie Apfel und Birne sowie Hasel und Weide eignen sich gut. Giftige Gehölze wie Eibe und Thuja sind tabu."],
    ],
    sources: [TSB],
  },
  {
    path: "tiere/kaninchen/kaninchenpflege",
    description: "Kaninchenpflege: Zähne, Krallen, Fell und Gesundheitscheck – plus Impfungen gegen Myxomatose und RHD und wichtige Warnzeichen.",
    markdown: `Kaninchen pflegen sich selbst. Trotzdem solltest du sie regelmäßig kontrollieren, denn sie zeigen Krankheiten oft erst spät.

## Wöchentlicher Gesundheitscheck

- **Zähne:** Schneidezähne gleichmäßig und nicht zu lang? Fressprobleme oder Sabbern deuten auf Zahnprobleme hin – auch die Backenzähne können betroffen sein.
- **Augen und Nase:** klar, ohne Ausfluss.
- **Fell und Haut:** keine kahlen Stellen, Schuppen oder Parasiten.
- **Po-Bereich:** sauber? Verklebter Kot zieht im Sommer Fliegen an (Fliegenmadenbefall).
- **Gewicht:** regelmäßig wiegen.

## Krallen

Bei Haltung auf weichem Untergrund werden Krallen oft zu lang. Kürze nur die Spitze und lass dir das beim ersten Mal zeigen.

## Fell

Während des Fellwechsels kannst du lose Haare vorsichtig ausbürsten. Langhaarige Kaninchen brauchen regelmäßige Fellpflege. Baden ist nicht nötig.

## Impfungen

Kaninchen sollten gegen **Myxomatose** und **RHD** (Chinaseuche, inklusive RHD-2) geimpft werden – auch reine Wohnungskaninchen, da Erreger z. B. über Insekten oder Grünfutter eingeschleppt werden können.

## Notfälle

Frisst ein Kaninchen nicht, setzt keinen Kot ab, sitzt aufgekrümmt in der Ecke oder knirscht laut mit den Zähnen, ist das ein **Notfall**. Bei Kaninchen kann die Verdauung schnell zum Stillstand kommen.`,
    faq: [
      ["Müssen Wohnungskaninchen geimpft werden?", "Ja, empfohlen wird eine Impfung gegen Myxomatose und RHD auch für Wohnungskaninchen, weil die Erreger eingeschleppt werden können."],
      ["Wie alt werden Kaninchen?", "Bei guter Haltung oft acht bis zwölf Jahre, Zwergkaninchen teils länger."],
    ],
    sources: [VET, TVT],
  },
  {
    path: "tiere/kaninchen/faq",
    description: "Kaninchen-FAQ: Antworten zu Einzelhaltung, Platzbedarf, Ernährung, Kastration, Lebenserwartung und Kaninchen als Haustier für Kinder.",
    markdown: `Kurze Antworten auf häufige Fragen rund um Kaninchen.

## Sind Kaninchen gute Haustiere für Kinder?

Kaninchen sind **keine Kuscheltiere**. Sie sind Fluchttiere und mögen es meist nicht, hochgehoben zu werden. Für Kinder können sie trotzdem wunderbare Mitbewohner sein, wenn Erwachsene die Verantwortung übernehmen und die Kinder lernen, die Tiere zu beobachten statt zu tragen.

## Allein oder in der Gruppe?

Kaninchen brauchen **mindestens einen Artgenossen**. Bewährt hat sich ein kastriertes Männchen mit einem Weibchen.

## Wie viel Platz?

Für zwei Kaninchen werden mindestens etwa 6 m² Gehegefläche empfohlen – dauerhaft in einem kleinen Käfig zu leben, ist nicht artgerecht.

## Was fressen Kaninchen?

Vor allem **Heu und frisches Grünfutter**. Getreidelastiges Trockenfutter und Knabberstangen sind ungeeignet.

## Kastration

Männchen sollten kastriert werden, wenn sie mit Weibchen zusammenleben. Nach der Kastration sind sie noch einige Wochen zeugungsfähig.

## Kosten

Neben Anschaffung und Gehege fallen laufend Kosten für Futter, Einstreu, Impfungen und Tierarzt an. Plane auch Rücklagen für Zahnbehandlungen ein.`,
    faq: [
      ["Kann ein Kaninchen mit einem Meerschweinchen zusammenleben?", "Das wird nicht empfohlen. Beide haben unterschiedliche Bedürfnisse und eine andere Sprache. Jedes Tier braucht Artgenossen."],
      ["Wie alt werden Kaninchen?", "Meist acht bis zwölf Jahre – eine lange Verpflichtung."],
    ],
    sources: [TVT, TSB],
  },

  /* ---------------- Hamster ---------------- */
  {
    path: "tiere/hamster/hamsterfutter",
    description: "Hamsterfutter richtig wählen: Körnermischung, frisches Grün, tierisches Eiweiß und was Hamster auf keinen Fall fressen dürfen.",
    markdown: `Hamster sind **Allesfresser** mit Schwerpunkt auf Samen und Körnern. In der Natur fressen sie außerdem Kräuter, Blätter und Insekten. Das sollte sich in ihrer Ernährung widerspiegeln.

## Die Basis: hochwertige Körnermischung

Eine gute Mischung besteht aus verschiedenen **Saaten, Getreide und Kräutern** – ohne Zuckerzusatz, ohne bunte Pellets und ohne getrocknete Früchte in großer Menge. Achte darauf, dass die Mischung zur Hamsterart passt: Zwerghamster vertragen weniger Fett und Zucker.

## Frisches

Täglich eine kleine Portion **Gemüse oder Kräuter**, z. B. Gurke, Paprika, Karotte, Petersilie oder Feldsalat. Reste aus dem Vorratslager regelmäßig kontrollieren, da Frischfutter dort schimmeln kann.

## Tierisches Eiweiß

Hamster brauchen etwas tierisches Eiweiß: z. B. getrocknete Mehlwürmer, ungewürztes gekochtes Ei oder Insekten – in kleinen Mengen ein paar Mal pro Woche.

## Was tabu ist

- Schokolade, Süßigkeiten und gewürzte Speisen
- Zwiebeln, Knoblauch, Lauch
- Rohe Bohnen und Kartoffeln
- Steinobstkerne
- Bei Zwerghamstern: viel Obst (Diabetes-Risiko)

## Futter verstreuen

Hamster sammeln und horten. Statt eines Napfs kannst du das Futter im Gehege verstreuen – so werden sie beschäftigt und folgen ihrem natürlichen Suchverhalten.`,
    faq: [
      ["Wie viel Futter braucht ein Hamster?", "Etwa ein bis zwei Teelöffel Körnermischung pro Tag, je nach Art und Größe. Das Lager im Blick behalten und die Menge anpassen."],
      ["Dürfen Hamster Obst fressen?", "Goldhamster in kleinen Mengen gelegentlich. Zwerghamster sollten wegen Diabetesgefahr möglichst kein Obst bekommen."],
    ],
    sources: [TVT],
  },
  {
    path: "tiere/hamster/hamsterkaefig",
    description: "Hamsterkäfig oder Gehege: Wie groß ein Hamsterzuhause sein sollte, warum hohe Einstreu wichtig ist und welche Einrichtung Hamster brauchen.",
    markdown: `Viele handelsübliche Hamsterkäfige sind deutlich zu klein. Hamster legen in der Natur nachts weite Strecken zurück und graben verzweigte Baue. Ein **artgerechtes Zuhause** muss das berücksichtigen.

## Größe

Empfohlen wird eine Grundfläche von mindestens etwa **100 × 50 cm** – für Goldhamster gern mehr. Wichtiger als Höhe ist die Grundfläche, denn Hamster sind schlechte Kletterer und können aus der Höhe stürzen.

## Gehege statt Gitterkäfig

Viele Halter nutzen umgebaute Terrarien, Aquarien mit gut belüftetem Deckel oder spezielle Nagerheime. Vorteil: Hier lässt sich **viel Einstreu** einfüllen.

## Einstreu hoch genug

Hamster graben gern. Eine Einstreuhöhe von **20 cm oder mehr** in mindestens einem Teil des Geheges ermöglicht stabile Gänge. Mehr dazu im Ratgeber zur Einstreu.

## Einrichtung

- **Laufrad** in passender Größe (siehe Ratgeber Hamsterrad)
- **Mehrkammerhaus** zum Schlafen und Vorräte anlegen
- **Verstecke**, Röhren und Korkbrücken
- **Sandbad** mit Chinchillasand
- Keine Etagen ohne Absturzsicherung

## Standort

Ruhig, ohne Zugluft und direkte Sonne. Hamster sind **dämmerungs- und nachtaktiv** – im Kinderzimmer kann das nächtliche Rascheln stören, und tagsüber sollte der Hamster nicht geweckt werden.`,
    faq: [
      ["Wie groß sollte ein Hamstergehege sein?", "Mindestens etwa 100 × 50 cm Grundfläche, für Goldhamster gern größer. Viele Käfige aus dem Handel unterschreiten das."],
      ["Dürfen zwei Hamster zusammen wohnen?", "Nein. Goldhamster und die meisten Zwerghamster sind Einzelgänger und können sich ernsthaft verletzen."],
    ],
    sources: [TVT],
  },
  {
    path: "tiere/hamster/hamsterrad",
    description: "Hamsterrad richtig wählen: passende Größe, geschlossene Lauffläche und leiser Lauf – warum ein zu kleines Rad dem Rücken schadet.",
    markdown: `Ein **Hamsterrad** ist für Hamster in Gefangenschaft wichtig, weil sie in der Natur nachts große Strecken laufen. Entscheidend ist die richtige Größe und Bauweise.

## Die richtige Größe

Beim Laufen sollte der **Rücken gerade** bleiben. Ist das Rad zu klein, muss der Hamster den Rücken durchbiegen – das kann auf Dauer zu Problemen führen.

- **Zwerghamster:** etwa 25–30 cm Durchmesser oder mehr
- **Goldhamster:** etwa 30 cm Durchmesser oder mehr

Im Zweifel lieber zu groß als zu klein.

## Bauweise

- **Geschlossene Lauffläche** ohne Sprossen, damit keine Pfoten hängen bleiben.
- **Einseitig offen** und ohne Speichen, an denen sich der Hamster einklemmen kann.
- **Leiser, leichtgängiger Lauf** – Kugellager helfen.
- Stabiler Stand, damit das Rad nicht kippt.

## Laufteller und Laufkugeln

Flache **Laufteller** sind weniger rückenfreundlich und gelten als Ergänzung, nicht als Ersatz. **Laufkugeln**, in denen Hamster durch die Wohnung rollen, werden von Tierschützern abgelehnt: Der Hamster kann nicht selbst anhalten, sieht kaum etwas und kann sich nicht orientieren.

## Wie viel Laufen ist normal?

Hamster laufen nachts oft stundenlang. Das ist normal. Bei extremem, zwanghaftem Laufen kann ein zu kleines oder reizarmes Gehege dahinterstecken – mehr Fläche und Beschäftigung helfen.`,
    faq: [
      ["Wie groß muss ein Hamsterrad sein?", "So groß, dass der Hamster mit geradem Rücken laufen kann – für Goldhamster etwa 30 cm Durchmesser oder mehr, für Zwerghamster etwa 25 bis 30 cm."],
      ["Sind Hamsterkugeln gut?", "Nein, Tierschutzorganisationen raten davon ab. Der Hamster kann nicht selbst entscheiden, wann er aufhört, und gerät leicht in Stress."],
    ],
    sources: [TVT],
  },
  {
    path: "tiere/hamster/einstreu",
    description: "Einstreu für Hamster: welche Streu sich eignet, warum 20 cm Höhe sinnvoll sind und wie du Gänge stabil machst – plus Tipps zur Reinigung.",
    markdown: `Hamster sind Grabkünstler. In der Natur legen sie unterirdische Baue mit Gängen, Schlaf- und Vorratskammern an. Eine passende **Einstreu** in ausreichender Höhe ermöglicht ihnen genau das.

## Welche Einstreu eignet sich?

- **Kleintierstreu aus Holzspänen** (staubarm, unbehandelt) als Basis.
- **Gemischt mit Heu und Stroh**, damit die Gänge stabil bleiben.
- **Hanf- oder Leinenstreu** als Alternative.
- **Zellstoff-Nistmaterial** zum Polstern des Schlafplatzes.

Ungeeignet sind Watte und Kunstfasern (Fasern können sich um Beine wickeln), stark duftende Streu und Katzenstreu.

## Wie hoch?

Damit Gänge nicht einstürzen, empfehlen Fachleute eine Einstreuhöhe von **mindestens etwa 20 cm** – zumindest in einem Teil des Geheges. Mehr ist besser.

## Reinigung

Hamster sind ordentlich und haben meist eine feste **Pinkelecke**. Diese kannst du regelmäßig erneuern. Die komplette Einstreu nur selten wechseln – das zerstört den Bau und stresst den Hamster. Vorräte auf verdorbenes Frischfutter kontrollieren, aber nicht komplett ausräumen.

## Sandbad

Zusätzlich braucht ein Hamster ein **Sandbad** mit Chinchillasand (nicht Vogelsand) für die Fellpflege. Viele nutzen es auch als Toilette.`,
    faq: [
      ["Wie oft muss die Einstreu gewechselt werden?", "Die Pinkelecke regelmäßig, die komplette Einstreu nur selten und teilweise – damit der Hamster seinen Bau nicht verliert."],
      ["Ist Katzenstreu für Hamster geeignet?", "Nein. Klumpende Katzenstreu kann verschluckt werden und ist zum Graben ungeeignet."],
    ],
    sources: [TVT],
  },
  {
    path: "tiere/hamster/hamsterpflege",
    description: "Hamsterpflege: Gesundheitscheck, Zähne, Krallen, Sandbad, Zähmung und typische Krankheitszeichen – so geht es deinem Hamster gut.",
    markdown: `Hamster sind kleine, empfindliche Tiere, die Krankheiten lange verbergen. Ein liebevoller Blick und regelmäßige Kontrollen helfen, Probleme früh zu erkennen.

## Gesundheitscheck

- **Augen:** klar und glänzend
- **Fell:** glatt, ohne kahle Stellen
- **Po:** sauber und trocken – nasser Po kann auf gefährlichen Durchfall hinweisen
- **Zähne:** gleichmäßig, nicht zu lang
- **Gewicht:** regelmäßig mit einer Küchenwaage kontrollieren

## Zähne und Krallen

Die Zähne wachsen ein Leben lang. Äste und hartes Futter helfen beim Abnutzen. Krallen nutzen sich durch Graben und Naturmaterialien ab. Bei Problemen hilft eine Tierarztpraxis mit Erfahrung bei Kleinsäugern.

## Fellpflege

Hamster pflegen sich selbst und brauchen ein **Sandbad**. Baden in Wasser ist für Hamster gefährlich und nicht nötig.

## Zähmung mit Geduld

Hamster sind nachtaktive Einzelgänger. Wecke deinen Hamster nicht tagsüber. Zum Zähmen: abends die Hand mit einem Leckerli ins Gehege legen und ihn kommen lassen. Hochheben am besten in einem Becher oder mit beiden Händen nah über dem Boden.

## Warnzeichen

Appetitlosigkeit, Durchfall, verklebte Augen, Atemgeräusche oder starke Gewichtsabnahme sind Gründe für einen zeitnahen Tierarztbesuch.`,
    faq: [
      ["Darf man einen Hamster baden?", "Nein. Hamster reinigen sich selbst und nutzen dafür ein Sandbad. Wasser kann zu Unterkühlung führen."],
      ["Wie alt werden Hamster?", "Meist nur etwa zwei bis drei Jahre."],
    ],
    sources: [TVT],
  },
  {
    path: "tiere/hamster/faq",
    description: "Hamster-FAQ: Sind Hamster gute Haustiere für Kinder? Antworten zu Einzelhaltung, Nachtaktivität, Gehegegröße, Futter und Lebenserwartung.",
    markdown: `Häufige Fragen rund um Hamster – kurz beantwortet.

## Sind Hamster gute Haustiere für Kinder?

Eher nicht für kleine Kinder. Hamster sind **nachtaktiv**, schlafen tagsüber und reagieren auf Störungen gestresst – manchmal auch mit Beißen. Sie eignen sich besser für Erwachsene oder ältere Kinder, die gern beobachten.

## Allein oder zu zweit?

Goldhamster und die meisten Zwerghamster sind **Einzelgänger**. Zusammen gehalten kommt es zu Kämpfen mit Verletzungen.

## Wie groß muss das Gehege sein?

Mindestens etwa 100 × 50 cm Grundfläche, mit hoher Einstreu zum Graben.

## Was fressen Hamster?

Eine hochwertige Körnermischung, täglich etwas Frisches und gelegentlich tierisches Eiweiß. Zwerghamster sollten kaum Zucker bekommen.

## Brauchen Hamster Auslauf?

In einem großen, gut eingerichteten Gehege ist Auslauf nicht zwingend nötig. Wenn, dann nur in einem gesicherten Auslaufgehege – frei in der Wohnung drohen Verstecke und Gefahren.

## Wie alt werden Hamster?

Meist zwei bis drei Jahre.`,
    faq: [
      ["Warum beißt mein Hamster?", "Meist aus Angst oder weil er geweckt wurde. Geduld, ruhige Bewegungen und Zähmung am Abend helfen."],
      ["Sind Hamster laut?", "Nachts kann das Laufen im Rad und das Graben gut hörbar sein. Ein leiser Laufrad hilft."],
    ],
    sources: [TVT],
  },

  /* ---------------- Meerschweinchen ---------------- */
  {
    path: "tiere/meerschweinchen/meerschweinchenfutter",
    description: "Meerschweinchenfutter: Heu, frisches Grün und Vitamin C – so ernährst du Meerschweinchen artgerecht und vermeidest typische Fehler.",
    markdown: `Meerschweinchen sind reine **Pflanzenfresser** und Dauerfresser. Ihre Zähne wachsen lebenslang, ihr Darm braucht ständigen Nachschub an Rohfaser.

## Heu – immer und unbegrenzt

Gutes, duftendes **Heu** ist die Basis. Es sorgt für Zahnabrieb und gesunde Verdauung.

## Frischfutter jeden Tag

- **Wiese:** Gras, Löwenzahn, Kräuter – ideal im Sommer
- **Blattgemüse und Salate:** z. B. Romana, Feldsalat, Endivie
- **Gemüse:** Paprika, Gurke, Fenchel, Karotte (in Maßen)
- **Obst:** nur selten, wegen des Zuckers

## Vitamin C

Meerschweinchen können – wie wir Menschen – **kein Vitamin C selbst bilden**. Sie müssen es über das Futter aufnehmen. Paprika, Petersilie, Brokkoli und Kräuter sind gute Quellen. Bei abwechslungsreichem Frischfutter sind Zusätze meist nicht nötig.

## Was tabu ist

- Getreide- und zuckerreiches Trockenfutter
- Knabberstangen, Joghurtdrops
- Brot und Backwaren
- Zwiebeln, Knoblauch, Kartoffeln, Avocado
- Giftige Pflanzen

## Umstellung

Neues Frischfutter langsam anfüttern. Meerschweinchen haben einen empfindlichen Magen-Darm-Trakt. Frisst ein Meerschweinchen nicht mehr, ist das ein Notfall.`,
    faq: [
      ["Warum brauchen Meerschweinchen Vitamin C?", "Sie können es nicht selbst herstellen. Ohne genügend Vitamin C drohen Mangelerscheinungen. Frisches Gemüse wie Paprika liefert viel davon."],
      ["Brauchen Meerschweinchen Trockenfutter?", "Bei ausreichend Heu und Frischfutter in der Regel nicht."],
    ],
    sources: [TVT, TSB],
  },
  {
    path: "tiere/meerschweinchen/meerschweinchenkaefig",
    description: "Meerschweinchenkäfig oder Gehege? Warum Standardkäfige zu klein sind, wie viel Platz Meerschweinchen brauchen und wie du richtig einrichtest.",
    markdown: `Der klassische **Meerschweinchenkäfig** aus dem Handel bietet meist viel zu wenig Platz. Meerschweinchen sind zwar keine Springer, aber aktive Tiere, die gern rennen und in der Gruppe leben.

## Wie viel Platz?

Für eine kleine Gruppe von **zwei bis vier Meerschweinchen** werden mindestens etwa **2 m²** Grundfläche empfohlen – mehr ist besser. Etagen zählen nur bedingt, da Meerschweinchen keine guten Kletterer sind.

## Gehege statt Käfig

Viele Halter bauen ein Eigenbau-Gehege oder nutzen große Steckgehege. Vorteile: mehr Platz, bessere Einrichtung, leichtere Reinigung.

## Einrichtung

- **Häuschen mit zwei Ausgängen** – für jedes Tier mindestens eines
- **Heuraufe**, gut erreichbar
- **Wassernapf und/oder Trinkflasche**
- **Unterschlüpfe** aus Holz oder Kork
- Flache **Rampen** statt Leitern

## Einstreu

Saugfähige Kleintierstreu, darauf Heu oder Stroh. Die Pinkelecken regelmäßig reinigen.

## Standort

Hell, ruhig, ohne Zugluft und direkte Sonneneinstrahlung. Meerschweinchen sind **tagaktiv** und freuen sich, wenn sie am Familienleben teilhaben.`,
    faq: [
      ["Wie viele Meerschweinchen sollte man halten?", "Mindestens zwei, besser eine kleine Gruppe. Meerschweinchen sind sehr soziale Tiere."],
      ["Brauchen Meerschweinchen Auslauf?", "Ja, wenn das Gehege nicht sehr groß ist. Täglicher, gesicherter Auslauf hält sie fit."],
    ],
    sources: [TVT, TSB],
  },
  {
    path: "tiere/meerschweinchen/meerschweinchengehege",
    description: "Meerschweinchengehege bauen: Größe, Außenhaltung, Schutz vor Hitze und Raubtieren und die richtige Einrichtung für eine glückliche Gruppe.",
    markdown: `Ein großes **Meerschweinchengehege** bietet Platz für Bewegung und Sozialleben. Ob drinnen oder draußen – ein paar Grundregeln gelten immer.

## Größe

Mindestens etwa **2 m²** für zwei bis vier Tiere, für größere Gruppen entsprechend mehr. Großzügige Flächen fördern das typische „Popcornen“ – fröhliche Luftsprünge.

## Außenhaltung

Meerschweinchen können bei guter Vorbereitung auch draußen leben. Dafür brauchen sie:

- eine **isolierte, trockene Schutzhütte**, im Winter gegebenenfalls zusätzlich gedämmt
- eine **Gruppe**, damit sie sich gegenseitig wärmen
- langsame Gewöhnung im Frühjahr
- **Schutz vor Raubtieren**: stabiles Gitter, Abdeckung, Untergrabschutz

## Hitze ist gefährlich

Meerschweinchen sind sehr **hitzeempfindlich**. Schatten, kühle Rückzugsorte und frisches Wasser sind im Sommer Pflicht. Ab etwa 25 bis 28 °C wird es kritisch.

## Einrichtung

Verstecke mit zwei Ausgängen, mehrere Futterstellen, Heuraufe, Wasser, Tunnel und erhöhte Flächen mit flachen Rampen.

## Gruppe richtig zusammenstellen

Bewährt haben sich ein kastrierter Bock mit mehreren Weibchen oder reine Weibchengruppen. Neue Tiere langsam vergesellschaften.`,
    faq: [
      ["Können Meerschweinchen im Winter draußen bleiben?", "Ja, wenn sie langsam gewöhnt wurden, in einer Gruppe leben und eine gut isolierte, trockene Hütte haben. Kranke oder alte Tiere gehören im Winter ins Haus."],
      ["Welche Temperatur ist für Meerschweinchen ideal?", "Etwa 18 bis 22 °C. Hitze ist gefährlicher als Kälte."],
    ],
    sources: [TVT],
  },
  {
    path: "tiere/meerschweinchen/meerschweinchenpflege",
    description: "Meerschweinchenpflege: Wiegen, Zähne, Krallen, Fell und Gesundheitscheck – so erkennst du Probleme früh und pflegst deine Tiere richtig.",
    markdown: `Meerschweinchen zeigen Schmerzen kaum. Deshalb ist ein regelmäßiger **Gesundheitscheck** besonders wichtig.

## Wöchentlich wiegen

Gewichtsverlust ist oft das erste Anzeichen einer Krankheit – zum Beispiel von Zahnproblemen. Wiege deine Meerschweinchen einmal pro Woche und notiere das Gewicht.

## Zähne

Die Schneidezähne sollten gleichmäßig sein. Probleme an den Backenzähnen zeigen sich durch Gewichtsverlust, Sabbern oder wählerisches Fressen. Viel Heu beugt vor.

## Krallen

Meerschweinchenkrallen wachsen schnell und nutzen sich auf weichem Untergrund kaum ab. Kontrolliere sie regelmäßig und kürze sie bei Bedarf vorsichtig.

## Fell

Kurzhaarige Tiere pflegen sich selbst. **Langhaar-Meerschweinchen** müssen regelmäßig gebürstet und gegebenenfalls am Po gekürzt werden, damit nichts verklebt.

## Warnzeichen

- Appetitlosigkeit
- Aufgeplustertes Sitzen in der Ecke
- Durchfall oder ausbleibender Kot
- Atemgeräusche, verklebte Augen

Bei diesen Anzeichen zügig eine Tierarztpraxis mit Erfahrung bei Kleinsäugern aufsuchen.`,
    faq: [
      ["Wie alt werden Meerschweinchen?", "Meist etwa sechs bis acht Jahre, manche älter."],
      ["Müssen Meerschweinchen gebadet werden?", "Nein, nur in Ausnahmefällen – etwa bei verschmutztem Po bei Langhaartieren – und dann gut abtrocknen."],
    ],
    sources: [TVT, VET],
  },
  {
    path: "tiere/meerschweinchen/faq",
    description: "Meerschweinchen-FAQ: Antworten zu Gruppenhaltung, Platz, Futter, Vitamin C, Kindern und Lebenserwartung – kurz und verständlich.",
    markdown: `Die wichtigsten Fragen rund um Meerschweinchen – kurz beantwortet.

## Wie viele Meerschweinchen sollte ich halten?

**Mindestens zwei**, besser eine kleine Gruppe. In der Schweiz ist die Einzelhaltung von Meerschweinchen sogar gesetzlich verboten; auch in Deutschland und Österreich gilt sie als nicht artgerecht.

## Sind Meerschweinchen gute Tiere für Kinder?

Sie sind tagaktiv und können für Kinder schön zu beobachten sein. Sie sind aber Fluchttiere und keine Kuscheltiere. Ein Erwachsener muss die Verantwortung tragen.

## Was fressen Meerschweinchen?

Heu und viel frisches Grünfutter. Wichtig ist **Vitamin C**, das sie nicht selbst bilden können.

## Wie viel Platz brauchen sie?

Mindestens etwa 2 m² für eine kleine Gruppe.

## Vertragen sich Meerschweinchen mit Kaninchen?

Die gemeinsame Haltung wird nicht empfohlen. Jede Art braucht Artgenossen.

## Wie alt werden sie?

Meist sechs bis acht Jahre.`,
    faq: [
      ["Warum quietschen Meerschweinchen?", "Lautes Quieken bedeutet oft Vorfreude, etwa wenn sie Futter erwarten. Meerschweinchen haben viele verschiedene Laute."],
      ["Was ist Popcornen?", "Kleine Luftsprünge aus Freude – ein gutes Zeichen, dass sich die Tiere wohlfühlen."],
    ],
    sources: [TVT, TSB],
  },

  /* ---------------- Tierwissen ---------------- */
  {
    path: "tiere/tierwissen/haustier-anschaffen",
    description: "Haustier anschaffen: Checkliste zu Zeit, Kosten, Platz, Allergien und Urlaub – und warum ein Tier aus dem Tierheim eine gute Wahl sein kann.",
    markdown: `Ein Haustier bringt viel Freude – und Verantwortung für viele Jahre. Bevor du ein **Haustier anschaffst**, lohnt sich eine ehrliche Bestandsaufnahme.

## Die wichtigsten Fragen

1. **Zeit:** Wie viel Zeit habe ich täglich – auch an stressigen Tagen?
2. **Lebensdauer:** Katzen und Hunde leben oft weit über zehn Jahre, Pferde sogar 25 bis 30.
3. **Kosten:** Futter, Tierarzt, Versicherung, Ausstattung, Steuern – und Rücklagen für Notfälle.
4. **Platz:** Passt das Tier zu Wohnung und Garten?
5. **Vermieter:** Ist Tierhaltung erlaubt? Bei Hunden und Katzen ist oft eine Zustimmung nötig.
6. **Allergien** in der Familie?
7. **Urlaub und Krankheit:** Wer kümmert sich dann?

## Welches Tier passt?

- **Hund:** viel Zeit, Bewegung, Training.
- **Katze:** weniger zeitintensiv, aber lange Verantwortung; Wohnungskatzen brauchen Beschäftigung.
- **Kaninchen und Meerschweinchen:** nur in Gruppen und mit viel Platz.
- **Hamster:** nachtaktive Einzelgänger, eher zum Beobachten.

## Woher?

**Tierheime** und Tierschutzvereine haben viele Tiere, die ein Zuhause suchen – oft mit Beratung und bereits geimpft und gechippt. Beim Kauf von Rassetieren: seriöse Züchter, die Elterntiere zeigen und viele Fragen stellen. Finger weg von Billigangeboten aus dem Internet oder dem Kofferraum – dahinter steckt oft illegaler Welpenhandel.

## Ein Tier ist kein Geschenk

Tiere als Überraschung zu verschenken, ist keine gute Idee. Die ganze Familie sollte die Entscheidung gemeinsam treffen.`,
    faq: [
      ["Was kostet ein Haustier im Monat?", "Das hängt stark von Tierart und Größe ab. Neben laufenden Kosten für Futter und Pflege solltest du Rücklagen für Tierarztkosten einplanen."],
      ["Wie erkenne ich unseriöse Tierhändler?", "Warnzeichen sind sehr niedrige Preise, keine Besichtigung der Mutter, Übergabe an Parkplätzen und fehlende Papiere. Seriöse Abgeber stellen selbst viele Fragen."],
    ],
    sources: [TSB],
  },
  {
    path: "tiere/tierwissen/tierarztkosten",
    description: "Tierarztkosten verstehen: Wie Tierärzte abrechnen, was Notdienste teurer macht, typische Kostenpunkte und wie du für Notfälle vorsorgst.",
    markdown: `Tierarztbesuche gehören zum Leben mit Tieren. Wer weiß, wie abgerechnet wird, kann besser planen und erlebt weniger Überraschungen.

## Wie wird abgerechnet?

In **Deutschland** rechnen Tierärztinnen und Tierärzte nach der **Gebührenordnung für Tierärzte (GOT)** ab. Sie legt für jede Leistung einen Gebührenrahmen fest – meist vom einfachen bis zum dreifachen Satz, je nach Aufwand. Im **Notdienst** gelten gesetzlich höhere Sätze und eine Notdienstgebühr.

In **Österreich** gibt es keine verbindliche Gebührenordnung; die Preise legen die Praxen selbst fest, die Tierärztekammer veröffentlicht Empfehlungen.

## Typische Kostenpunkte

- Allgemeine Untersuchung und Beratung
- Impfungen und Entwurmung
- Kastration
- Zahnbehandlungen (oft unter Narkose)
- Notfälle und Operationen
- Medikamente und Laboruntersuchungen

## So planst du vor

1. **Rücklagen bilden:** einen festen Betrag pro Monat zurücklegen.
2. **Versicherung prüfen:** OP- oder Krankenversicherung, je nach Risiko und Budget.
3. **Vorsorge nutzen:** Regelmäßige Kontrollen entdecken Probleme früh, bevor sie teuer werden.
4. **Kostenvoranschlag:** Bei geplanten Eingriffen vorher fragen.

## Hilfe bei finanziellen Engpässen

Manche Tierschutzvereine und Tiertafeln unterstützen Halter in Notlagen. Sprich deine Tierarztpraxis offen an – oft sind Ratenzahlungen möglich.`,
    faq: [
      ["Warum ist der Notdienst teurer?", "In Deutschland schreibt die Gebührenordnung im Notdienst höhere Gebührensätze und eine Notdienstgebühr vor, weil Praxen nachts und am Wochenende Personal bereithalten."],
      ["Kann ich vorher nach den Kosten fragen?", "Ja. Bei geplanten Behandlungen kannst du um einen Kostenvoranschlag bitten."],
    ],
    sources: [{ title: "Bundestierärztekammer – Gebührenordnung für Tierärzte (GOT)", url: "https://www.bundestieraerztekammer.de/" }, { title: "Österreichische Tierärztekammer", url: "https://www.tieraerztekammer.at/" }],
  },
  {
    path: "tiere/tierwissen/tierversicherungen-im-vergleich",
    description: "Tierversicherungen im Vergleich: Haftpflicht, OP-Versicherung und Krankenversicherung für Hund, Katze und Pferd – was sinnvoll ist und worauf du achtest.",
    markdown: `Für Haustiere gibt es verschiedene Versicherungen. Nicht jede ist für jedes Tier sinnvoll. Hier der Überblick.

## Tierhalterhaftpflicht

Sie zahlt, wenn dein Tier einem anderen einen Schaden zufügt. Für **Hunde und Pferde** ist sie besonders wichtig, da hohe Schäden entstehen können. In mehreren deutschen Bundesländern und teils in Österreich ist eine Hundehaftpflicht vorgeschrieben. Katzen und Kleintiere sind oft in der privaten Haftpflicht mitversichert.

## OP-Versicherung

Übernimmt Kosten für Operationen, meist inklusive Vor- und Nachbehandlung. Günstiger als eine volle Krankenversicherung.

## Tierkrankenversicherung

Deckt zusätzlich ambulante Behandlungen, je nach Tarif auch Vorsorge. Teurer, aber umfassender.

## Worauf du achten solltest

- **Erstattungssatz** (in Deutschland: bis zu welchem GOT-Satz?)
- **Wartezeiten** und **Selbstbeteiligung**
- **Jahreshöchstleistung**
- **Ausschlüsse** (Vorerkrankungen, bestimmte Rassen-Erkrankungen)
- **Eintrittsalter** und Beitragsentwicklung im Alter
- **Kündigungsrechte**

## Selbst vorsorgen als Alternative

Wer diszipliniert spart, kann statt einer Krankenversicherung ein **Rücklagenkonto** anlegen. Für seltene, sehr teure Operationen bietet eine OP-Versicherung trotzdem Sicherheit.`,
    faq: [
      ["Welche Tierversicherung ist am wichtigsten?", "Für Hunde und Pferde die Tierhalterhaftpflicht, weil Schäden an Dritten sehr teuer werden können."],
      ["Lohnt sich eine Tierkrankenversicherung?", "Das hängt davon ab, ob du hohe Tierarztrechnungen selbst stemmen könntest. Vergleiche Leistungen, Ausschlüsse und Beiträge genau."],
    ],
    comparison: {
      title: "Tierversicherungen im Überblick",
      columns: ["Haftpflicht", "OP-Versicherung", "Krankenversicherung"],
      rows: [
        { label: "Zahlt für", values: ["Schäden an Dritten", "Operationen", "Operationen und Behandlungen"] },
        { label: "Besonders wichtig für", values: ["Hunde, Pferde", "alle Tiere", "alle Tiere"] },
        { label: "Beitrag", values: ["eher niedrig", "mittel", "eher hoch"] },
        { label: "Teils Pflicht", values: ["ja, für Hunde je nach Region", "nein", "nein"] },
      ],
    },
    sources: [{ title: "Verbraucherzentrale – Versicherungen", url: "https://www.verbraucherzentrale.de/wissen/geld-versicherungen" }],
  },
  {
    path: "tiere/tierwissen/giftige-lebensmittel-fuer-haustiere",
    description: "Giftige Lebensmittel für Haustiere: Schokolade, Weintrauben, Zwiebeln, Xylit und mehr – was für Hund, Katze und Kleintiere gefährlich ist.",
    markdown: `Was uns schmeckt, kann für Tiere gefährlich sein. Manche Lebensmittel sind schon in kleinen Mengen giftig. Diese Liste zeigt die wichtigsten – sie ist nicht vollständig.

## Gefährlich für Hunde und Katzen

- **Schokolade und Kakao:** enthalten Theobromin. Je dunkler die Schokolade, desto gefährlicher.
- **Weintrauben und Rosinen:** können bei Hunden Nierenversagen auslösen – auch in kleinen Mengen.
- **Zwiebeln, Knoblauch, Lauch, Schnittlauch:** schädigen rote Blutkörperchen, roh, gekocht und als Pulver.
- **Xylit (Birkenzucker):** in zuckerfreien Kaugummis und Süßigkeiten – für Hunde sehr gefährlich.
- **Alkohol und Koffein.**
- **Macadamianüsse:** für Hunde giftig.
- **Rohe Kartoffeln, rohe Bohnen.**
- **Gekochte Knochen:** können splittern.

## Katzen

Zusätzlich: **Lilien** (alle Teile, schon Pollen) sind für Katzen hochgiftig. Auch manche Hundemedikamente und ätherische Öle sind gefährlich.

## Kleintiere und Vögel

**Avocado** ist für Vögel und Nager giftig. Süßigkeiten, Brot und gewürzte Speisen gehören ebenfalls nicht in den Napf.

## Was tun im Notfall?

1. Ruhe bewahren, Verpackung oder Reste aufheben.
2. **Sofort die Tierarztpraxis oder Tierklinik anrufen** – nicht abwarten, bis Symptome auftreten.
3. Kein Erbrechen auf eigene Faust auslösen.

Halte die Nummer des nächsten tierärztlichen Notdienstes griffbereit.`,
    faq: [
      ["Wie viel Schokolade ist für einen Hund gefährlich?", "Das hängt von Sorte und Körpergewicht ab. Dunkle Schokolade ist besonders gefährlich. Bei jeder Aufnahme sofort die Tierarztpraxis anrufen."],
      ["Darf mein Hund Obst essen?", "Viele Obstsorten wie Apfel (ohne Kerngehäuse) oder Banane in kleinen Mengen ja. Weintrauben und Rosinen sind tabu."],
    ],
    sources: [VET, TSB],
  },
];
