import type { FillPage } from "../types";

const WWF = { title: "WWF – Artenporträts", url: "https://www.wwf.de/themen-projekte/bedrohte-tier-und-pflanzenarten" };
const IUCN = { title: "IUCN Red List of Threatened Species", url: "https://www.iucnredlist.org/" };
const DBBW = { title: "DBBW – Dokumentations- und Beratungsstelle des Bundes zum Thema Wolf", url: "https://www.dbb-wolf.de/" };
const NABU = { title: "NABU – Tiere und Pflanzen", url: "https://www.nabu.de/tiere-und-pflanzen/index.html" };

export const tiereWildtiere: FillPage[] = [
  /* ---------------- Pandas ---------------- */
  {
    path: "tiere/pandas/steckbrief",
    description: "Großer Panda Steckbrief: Größe, Gewicht, Lebensraum, Nahrung, Lebenserwartung und Gefährdung – alle wichtigen Fakten auf einen Blick.",
    focusKeyword: "Panda Steckbrief",
    markdown: `Der **Große Panda** ist eines der bekanntesten Tiere der Welt – und das Wappentier vieler Naturschutzprojekte. Hier sind die wichtigsten Fakten in Kürze.

| Merkmal | Großer Panda |
|---|---|
| Wissenschaftlicher Name | Ailuropoda melanoleuca |
| Familie | Bären (Ursidae) |
| Körperlänge | etwa 1,2 bis 1,8 m |
| Gewicht | meist etwa 70 bis 125 kg, Männchen schwerer als Weibchen |
| Verbreitung | Bergwälder in Zentralchina (Sichuan, Shaanxi, Gansu) |
| Nahrung | zu rund 99 % Bambus |
| Lebensweise | Einzelgänger |
| Lebenserwartung | in freier Natur etwa 15 bis 20 Jahre, in Zoos oft länger |
| Gefährdung (IUCN) | gefährdet („vulnerable“) |

## Aussehen

Das schwarz-weiße Fell ist unverwechselbar: schwarze Ohren, Augenflecken, Beine und ein schwarzes Band über den Schultern. Pandas haben einen verlängerten Handwurzelknochen, der wie ein **sechster Finger** funktioniert und beim Festhalten von Bambus hilft.

## Bambus-Spezialist

Obwohl Pandas zu den Raubtieren gehören, fressen sie fast nur Bambus. Weil Bambus wenig Energie liefert, verbringen sie täglich viele Stunden mit Fressen.

## Nachwuchs

Weibchen sind nur an wenigen Tagen im Jahr empfängnisbereit. Ein neugeborener Panda ist winzig – nur etwa 100 bis 200 Gramm schwer, rosa und fast nackt.

## Gefährdung

Dank Schutzgebieten und Aufforstung hat sich der Bestand erholt. 2016 stufte die IUCN den Großen Panda von „stark gefährdet“ auf **„gefährdet“** herab. Die letzte große Zählung in China ergab rund 1.860 wild lebende Tiere.`,
    faq: [
      ["Wie schwer ist ein Panda?", "Erwachsene Große Pandas wiegen meist etwa 70 bis 125 kg, Männchen sind schwerer als Weibchen."],
      ["Ist der Panda vom Aussterben bedroht?", "Er gilt laut IUCN seit 2016 als „gefährdet“, nicht mehr als „stark gefährdet“. Schutzmaßnahmen haben den Bestand stabilisiert."],
      ["Ist der Rote Panda mit dem Großen Panda verwandt?", "Nur entfernt. Der Rote Panda bildet eine eigene Familie und ist kein Bär."],
    ],
    sources: [WWF, IUCN],
  },
  {
    path: "tiere/pandas/lebensraum",
    description: "Lebensraum der Pandas: kühle Bergwälder in Zentralchina, Bambus als Lebensgrundlage, Schutzgebiete und warum zerschnittene Wälder ein Problem sind.",
    markdown: `Große Pandas leben nur an einem Ort der Welt: in den **Bergwäldern Zentralchinas**. Ihr Lebensraum liegt in den Provinzen **Sichuan, Shaanxi und Gansu**.

## Wie sieht der Lebensraum aus?

- **Kühle, feuchte Bergwälder** mit dichtem Bambus-Unterwuchs
- Höhenlagen von etwa 1.200 bis über 3.000 Metern
- Nadel- und Laubmischwälder, oft nebelig und regnerisch

Im Sommer ziehen Pandas oft in höhere Lagen, im Winter weiter nach unten – sie halten **keinen Winterschlaf**.

## Ohne Bambus kein Panda

Pandas brauchen große Bambusbestände. Bambus blüht bei vielen Arten nur alle paar Jahrzehnte – danach stirbt der Bestand großflächig ab. Pandas müssen dann in andere Gebiete ausweichen können.

## Bedrohung: zerschnittene Wälder

Straßen, Landwirtschaft und Siedlungen haben den Lebensraum in viele kleine Inseln zerteilt. Kleine, isolierte Gruppen können kaum Partner finden. Deshalb werden **Wildtierkorridore** angelegt, die Waldgebiete wieder verbinden.

## Schutzgebiete

China hat zahlreiche Panda-Reservate eingerichtet und 2021 den großen **Giant-Panda-Nationalpark** gegründet, der viele Gebiete zusammenfasst. Die Schutzgebiete helfen auch vielen anderen Arten wie dem Roten Panda oder dem Goldstumpfnasenaffen.

Wo du Pandas außerhalb Chinas sehen kannst, erfährst du im Ratgeber „Wo kann man Pandas sehen?“.`,
    faq: [
      ["Wo leben Pandas in freier Wildbahn?", "Nur in den Bergwäldern Zentralchinas, vor allem in den Provinzen Sichuan, Shaanxi und Gansu."],
      ["Halten Pandas Winterschlaf?", "Nein. Bambus liefert zu wenig Energie, um Fettreserven anzulegen. Pandas wandern im Winter in tiefere, wärmere Lagen."],
    ],
    sources: [WWF, IUCN],
  },
  {
    path: "tiere/pandas/ernaehrung",
    description: "Was fressen Pandas? Bambus macht rund 99 % der Nahrung aus – warum Pandas so viel fressen müssen und was sonst noch auf dem Speiseplan steht.",
    focusKeyword: "Was fressen Pandas",
    markdown: `Große Pandas sind berühmt für ihre Liebe zum Bambus. Tatsächlich besteht ihre Nahrung zu etwa **99 % aus Bambus** – Blättern, Stängeln und jungen Sprossen.

## Warum so viel?

Pandas gehören eigentlich zu den Raubtieren. Ihr Verdauungssystem ist kurz und eher für Fleisch gebaut. Bambus können sie deshalb nur schlecht verwerten. Um satt zu werden, fressen sie täglich **viele Kilogramm Bambus** und verbringen oft **10 bis 14 Stunden** mit Fressen.

Je nach Jahreszeit bevorzugen sie unterschiedliche Teile: im Frühjahr gern die nährstoffreichen jungen Sprossen, sonst Blätter und Halme.

## Der „Pandadaumen“

Ein verlängerter Handwurzelknochen funktioniert wie ein zusätzlicher Daumen. Damit halten Pandas die Bambusstangen geschickt fest. Kräftige Kiefer und breite Backenzähne zermahlen die harten Halme.

## Was fressen Pandas sonst?

Sehr selten fressen wild lebende Pandas auch andere Pflanzen oder kleine Tiere. In Zoos bekommen sie neben Bambus spezielle Futterkuchen, Obst oder Gemüse als Ergänzung.

## Energiesparer

Weil Bambus wenig Energie liefert, bewegen sich Pandas eher gemächlich und schlafen viel. So sparen sie Kraft.

## Bambus im Zoo

Zoos mit Pandas brauchen große Mengen frischen Bambus – oft aus eigenen Plantagen oder speziellen Lieferungen.`,
    faq: [
      ["Wie viel Bambus frisst ein Panda am Tag?", "Je nach Jahreszeit und Bambusteil viele Kilogramm – oft werden Mengen von etwa 10 bis 40 kg genannt."],
      ["Fressen Pandas auch Fleisch?", "Sehr selten. Ihr Verdauungstrakt wäre dafür geeignet, sie haben sich aber auf Bambus spezialisiert."],
    ],
    sources: [WWF],
  },
  {
    path: "tiere/pandas/fakten-fuer-kinder",
    description: "Panda-Fakten für Kinder: 12 spannende und kindgerechte Fakten über Große Pandas – vom Pandadaumen bis zum winzigen Pandababy.",
    markdown: `Pandas sind flauschig, schwarz-weiß und echte Bambus-Fans! Hier sind spannende **Panda-Fakten für Kinder**.

## 12 Panda-Fakten

1. **Pandas sind Bären.** Der Große Panda gehört zur Familie der Bären.
2. **Sie leben nur in China** – in kühlen, nebligen Bergwäldern.
3. **Bambus, Bambus, Bambus!** Fast alles, was ein Panda frisst, ist Bambus.
4. **Fressen dauert lange:** Pandas futtern viele Stunden am Tag.
5. **Ein Extra-Daumen:** Pandas haben einen Knochen an der Pfote, der wie ein sechster Finger hilft, Bambus festzuhalten.
6. **Winzige Babys:** Ein Pandababy ist so klein wie eine Tafel Schokolade, rosa und fast ohne Fell.
7. **Erst später schwarz-weiß:** Die typischen Flecken bekommen Pandababys nach ein paar Wochen.
8. **Gute Kletterer:** Junge Pandas klettern gern auf Bäume.
9. **Sie können schwimmen.**
10. **Pandas sind meist Einzelgänger** und leben allein.
11. **Kein Winterschlaf:** Auch im Schnee sind Pandas unterwegs.
12. **Es gibt wieder mehr Pandas!** Dank Naturschutz sind sie weniger bedroht als früher.

## Quiz-Frage

Warum müssen Pandas so viel fressen? – Weil Bambus nur wenig Energie hat. Deshalb fressen Pandas sehr viel davon und bewegen sich gemütlich, um Kraft zu sparen.

## Basteltipp

Male einen Panda aus! Ideen findest du bei unseren Panda-Malvorlagen.`,
    faq: [
      ["Wie groß ist ein Pandababy?", "Ein neugeborener Panda wiegt nur etwa 100 bis 200 Gramm – ungefähr so viel wie eine Tafel Schokolade."],
      ["Wie alt werden Pandas?", "In der Natur etwa 15 bis 20 Jahre, in Zoos oft älter."],
    ],
    sources: [WWF],
  },
  {
    path: "tiere/pandas/wo-sehen",
    description: "Wo kann man Pandas sehen? Zoos mit Großen Pandas in Europa, darunter Berlin und Wien, plus Tipps für den besten Besuch bei den Pandas.",
    focusKeyword: "Wo kann man Pandas sehen",
    markdown: `Große Pandas leben in freier Wildbahn nur in China. In Europa kannst du sie in einigen wenigen Zoos sehen. Alle Pandas außerhalb Chinas sind Leihgaben der Volksrepublik China im Rahmen von Forschungs- und Zuchtprogrammen.

## Zoos mit Großen Pandas in Europa (Auswahl)

- **Zoo Berlin (Deutschland):** Meng Meng und Jiao Qing, dazu die 2024 geborenen Zwillinge Leni und Lotti.
- **Tiergarten Schönbrunn, Wien (Österreich):** Seit 2025 leben hier die Pandas Lan Yun und He Feng.
- **Pairi Daiza (Belgien)**
- **Ouwehands Dierenpark, Rhenen (Niederlande)**
- **Zoo Kopenhagen (Dänemark)**
- **Zoo Aquarium Madrid (Spanien)**

Pandas wechseln immer wieder den Standort, weil Leihverträge enden oder Jungtiere nach China zurückkehren. **Prüfe vor dem Besuch auf der Website des Zoos**, ob die Pandas zu sehen sind.

## Tipps für den Panda-Besuch

- **Früh kommen:** Morgens sind Pandas oft aktiver – und die Anlagen weniger voll.
- **Fütterungszeiten** auf der Zoo-Website nachsehen.
- **Geduld:** Pandas schlafen viel. Ein zweiter Blick später am Tag lohnt sich.
- **Kühle Tage:** Pandas mögen es kühl und sind bei Hitze oft im Innengehege.

Mehr zu den einzelnen Zoos findest du in unseren Ratgebern zum Zoo Berlin und zum Tiergarten Schönbrunn sowie im Überblick „Zoos mit Pandas in Europa“.`,
    faq: [
      ["Wo kann man in Deutschland Pandas sehen?", "Im Zoo Berlin. Er ist derzeit der einzige Zoo in Deutschland mit Großen Pandas."],
      ["Gibt es in Österreich Pandas?", "Ja, im Tiergarten Schönbrunn in Wien. Dort leben seit 2025 die Pandas Lan Yun und He Feng."],
    ],
    sources: [
      { title: "Zoo Berlin – Große Pandas", url: "https://www.zoo-berlin.de/" },
      { title: "Tiergarten Schönbrunn", url: "https://www.zoovienna.at/" },
      { title: "Freizeitpark-Welt – Neue Pandas im Tiergarten Schönbrunn", url: "https://www.freizeitpark-welt.de/zoo/tiergarten_schoenbrunn/news/die-grossen-pandas-sind-zurueck-im-tiergarten-schoenbrunn-n5885" },
    ],
  },

  /* ---------------- Wölfe ---------------- */
  {
    path: "tiere/woelfe/steckbrief",
    description: "Wolf Steckbrief: Größe, Gewicht, Rudel, Nahrung, Verbreitung und Rückkehr nach Mitteleuropa – die wichtigsten Fakten zum Wolf kompakt.",
    focusKeyword: "Wolf Steckbrief",
    markdown: `Der **Wolf** ist der Stammvater aller Haushunde und eines der anpassungsfähigsten Raubtiere der Welt. Nach langer Abwesenheit ist er nach Mitteleuropa zurückgekehrt.

| Merkmal | Wolf |
|---|---|
| Wissenschaftlicher Name | Canis lupus |
| Familie | Hunde (Canidae) |
| Schulterhöhe | etwa 60 bis 90 cm |
| Gewicht (Mitteleuropa) | meist etwa 25 bis 45 kg |
| Lebensweise | Familienverband (Rudel) |
| Nahrung | vor allem Rehe, Rothirsche, Wildschweine |
| Lebenserwartung | in freier Natur oft unter 10 Jahre |
| Verbreitung | Nordamerika, Europa, Asien |

## Das Rudel

Ein Wolfsrudel ist eine **Familie**: ein Elternpaar mit seinen Jungen aus dem aktuellen und dem vorigen Jahr. Junge Wölfe verlassen das Rudel meist mit ein bis zwei Jahren und suchen sich ein eigenes Revier – dabei legen sie teils Hunderte Kilometer zurück.

## Rückkehr nach Mitteleuropa

In Deutschland wurde der Wolf im 19. Jahrhundert ausgerottet. Seit dem Jahr 2000 leben wieder Wölfe in der **Lausitz**, seither breiten sie sich aus. Auch in Österreich und der Schweiz gibt es wieder Wölfe und Rudel.

## Schutzstatus

Der Wolf ist in Europa geschützt. Der Schutzstatus wurde auf EU-Ebene in den letzten Jahren gelockert und wird politisch diskutiert – die genauen Regeln unterscheiden sich je nach Land.

## Wolf und Mensch

Wölfe sind meist scheu. Begegnungen sind selten. Wichtig: Wölfe nie füttern oder anlocken.`,
    faq: [
      ["Wie groß ist ein Wolf?", "Mitteleuropäische Wölfe haben meist eine Schulterhöhe von etwa 60 bis 90 cm und wiegen etwa 25 bis 45 kg."],
      ["Seit wann gibt es wieder Wölfe in Deutschland?", "Seit dem Jahr 2000 leben wieder wilde Wölfe in Deutschland, zuerst in der Lausitz in Sachsen."],
    ],
    sources: [DBBW, NABU],
  },
  {
    path: "tiere/woelfe/lebensraum",
    description: "Lebensraum der Wölfe: Wälder, Truppenübungsplätze und offene Landschaften – wie Wölfe Reviere bilden und warum sie so anpassungsfähig sind.",
    markdown: `Wölfe sind echte **Anpassungskünstler**. Sie leben in arktischer Tundra, Wäldern, Steppen und Gebirgen. Entscheidend ist nicht die Landschaft, sondern genug Beute und ausreichend Ruhe.

## Wo leben Wölfe?

Weltweit kommen Wölfe in Nordamerika, Europa und Asien vor. In Mitteleuropa leben sie vor allem in:

- großen **Waldgebieten**
- dünn besiedelten Regionen
- ehemaligen oder aktiven **Truppenübungsplätzen**, wo sie ungestört sind

## Das Revier

Ein Rudel beansprucht ein festes **Revier**. In Mitteleuropa ist es oft etwa 150 bis 350 km² groß – je nach Beuteangebot. Wölfe markieren ihr Revier mit Urin, Kot und Heulen.

## Weite Wanderungen

Junge Wölfe verlassen ihre Familie und suchen sich ein neues Revier. Dabei legen sie teilweise Hunderte Kilometer zurück, durchqueren Flüsse, Felder und sogar Siedlungsränder. So erklärt sich, warum Wölfe auch in Gegenden auftauchen, in denen lange keine lebten.

## Gefahren

Die häufigste Todesursache bei Wölfen in Deutschland ist der **Straßenverkehr**. Wildbrücken und Grünbrücken helfen nicht nur Wölfen, sondern vielen Wildtieren.

## Konflikte

Wo Wölfe leben, sind Weidetiere wie Schafe und Ziegen gefährdet. Herdenschutz mit Elektrozäunen und Herdenschutzhunden ist die wirksamste Vorbeugung und wird vielerorts gefördert.`,
    faq: [
      ["Wie groß ist ein Wolfsrevier?", "In Mitteleuropa meist etwa 150 bis 350 Quadratkilometer, abhängig vom Beuteangebot."],
      ["Leben Wölfe nur im Wald?", "Nein. Sie sind sehr anpassungsfähig und leben auch in offenen Landschaften, solange es genug Beute und Rückzugsorte gibt."],
    ],
    sources: [DBBW, NABU],
  },
  {
    path: "tiere/woelfe/ernaehrung",
    description: "Was fressen Wölfe? Rehe, Rothirsche und Wildschweine stehen ganz oben – wie Wölfe jagen, wie viel sie fressen und warum Weidetiere geschützt werden müssen.",
    focusKeyword: "Was fressen Wölfe",
    markdown: `Wölfe sind **Fleischfresser**. In Mitteleuropa ernähren sie sich vor allem von wilden Huftieren.

## Was steht auf dem Speiseplan?

Untersuchungen in Deutschland zeigen: Die Nahrung besteht überwiegend aus

- **Rehen** (den größten Anteil)
- **Rothirschen**
- **Wildschweinen**
- in manchen Gebieten Damhirschen und Mufflons

Kleinere Tiere wie Hasen spielen eine kleinere Rolle. Nutztiere machen insgesamt nur einen geringen Anteil aus – für betroffene Tierhalter ist jeder Riss aber ein großes Problem.

## Wie jagen Wölfe?

Wölfe jagen oft gemeinsam im Rudel. Sie suchen gezielt nach schwachen, kranken oder jungen Tieren, denn diese sind leichter zu erbeuten. Dadurch tragen Wölfe zu einer gesunden Wildpopulation bei.

## Wie viel frisst ein Wolf?

Im Durchschnitt braucht ein Wolf etwa **3 bis 4 kg Fleisch am Tag**. Nach einer erfolgreichen Jagd kann er auf einmal viel mehr fressen und danach einige Tage ohne Nahrung auskommen.

## Wolf und Weidetiere

Ungeschützte Schafe und Ziegen sind leichte Beute. **Herdenschutz** – wolfsabweisende Elektrozäune und Herdenschutzhunde – senkt die Zahl der Übergriffe deutlich.

## Bitte nicht füttern!

Gefütterte Wölfe verlieren ihre Scheu vor Menschen. Das kann gefährlich werden – für Mensch und Wolf.`,
    faq: [
      ["Wie viel frisst ein Wolf am Tag?", "Im Durchschnitt etwa 3 bis 4 kg Fleisch, nach einer erfolgreichen Jagd auch deutlich mehr auf einmal."],
      ["Fressen Wölfe Schafe?", "Ja, ungeschützte Weidetiere sind leichte Beute. Guter Herdenschutz verhindert die meisten Übergriffe."],
    ],
    sources: [DBBW],
  },
  {
    path: "tiere/woelfe/fakten-fuer-kinder",
    description: "Wolf-Fakten für Kinder: Rudel, Heulen, Welpen und Spurensuche – 10 spannende und kindgerechte Fakten über Wölfe.",
    markdown: `Wölfe sind schlau, schnell und leben in Familien. Hier kommen spannende **Wolf-Fakten für Kinder**!

## 10 Fakten über Wölfe

1. **Der Wolf ist der Urahn aller Hunde** – vom Dackel bis zur Dogge.
2. **Ein Rudel ist eine Familie:** Mama, Papa und ihre Kinder leben zusammen.
3. **Wölfe heulen,** um sich zu verständigen und anderen Rudeln zu zeigen: Hier wohnen wir!
4. **Wolfswelpen** werden im Frühling geboren, in einer Höhle, dem Bau.
5. **Am Anfang sind sie blind** und trinken nur Milch.
6. **Super Nase:** Wölfe riechen viel besser als Menschen.
7. **Lange Strecken:** Ein Wolf kann in einer Nacht viele Kilometer laufen.
8. **Junge Wölfe ziehen aus,** wenn sie groß sind, und gründen eine eigene Familie.
9. **Wölfe sind scheu** und gehen Menschen meist aus dem Weg.
10. **Sie sind zurück:** In Deutschland und Österreich leben wieder wilde Wölfe.

## Spuren lesen

Wolfsspuren sehen aus wie große Hundespuren. Wölfe laufen aber oft schnurgerade und setzen die Hinterpfote genau in den Abdruck der Vorderpfote – so sparen sie Kraft.

## Was tun, wenn man einen Wolf sieht?

Stehen bleiben, ruhig sein und dem Wolf Platz lassen. Nicht weglaufen, nicht füttern. Am besten einem Erwachsenen Bescheid sagen. Ein Wolf ist ein Wildtier, kein Kuscheltier.`,
    faq: [
      ["Warum heulen Wölfe?", "Um mit ihrer Familie in Kontakt zu bleiben und anderen Wölfen zu zeigen, dass das Revier besetzt ist."],
      ["Heulen Wölfe den Mond an?", "Nein, das ist ein Mythos. Sie heulen nachts einfach, weil sie dann besonders aktiv sind."],
    ],
    sources: [DBBW, NABU],
  },
  {
    path: "tiere/woelfe/wo-sehen",
    description: "Wo kann man Wölfe sehen? Wildparks und Wolfsgehege in Deutschland und Österreich, Wolfsinformationszentren und Tipps für das Beobachten in der Natur.",
    markdown: `Wilde Wölfe sind scheu und dämmerungsaktiv. Sie in freier Wildbahn zu sehen, ist ein seltener Glücksfall. In Wildparks und Zoos kannst du sie aber gut beobachten.

## Wildparks und Zoos

Viele Wildparks und Tierparks in Deutschland, Österreich und der Schweiz halten Wölfe in großen, naturnahen Gehegen. Besonders interessant sind Einrichtungen, die über die Rückkehr des Wolfes informieren.

Einige Beispiele:
- **Wolfscenter und Wildparks** in Niedersachsen und Brandenburg
- **Nationalpark Bayerischer Wald** mit Tierfreigelände
- **Wildparks in Österreich** mit Wolfsgehegen

Weil Öffnungszeiten und Tierbestände sich ändern, solltest du vor dem Besuch auf der jeweiligen Website nachsehen.

## Wolfsinformationszentren

In Regionen mit Wölfen gibt es Informationsstellen und Ausstellungen, z. B. in der **Lausitz**, wo die ersten Wölfe nach Deutschland zurückkehrten. Dort erfährst du viel über Spuren, Lebensweise und Herdenschutz.

## Wölfe in der Natur entdecken

- Eher Spuren als Tiere: Pfotenabdrücke, Kot mit Haaren und Knochenresten.
- Geführte **Spurensuche-Touren** mit Rangern.
- Abstand halten, Hunde anleinen, nichts füttern.

## Wolfsbeobachtungen melden

Wer einen Wolf sieht oder Spuren findet, kann das in Deutschland den zuständigen Stellen der Bundesländer melden. Das hilft beim Wolfsmonitoring.`,
    faq: [
      ["Wo sieht man Wölfe in Deutschland am ehesten?", "In Wildparks und Zoos mit Wolfsgehegen. In freier Natur sind Wölfe scheu und selten zu sehen."],
      ["Ist es gefährlich, einem Wolf zu begegnen?", "Gesunde, wilde Wölfe meiden Menschen in der Regel. Ruhig bleiben, Abstand halten und nie füttern."],
    ],
    sources: [DBBW],
  },

  /* ---------------- Füchse ---------------- */
  {
    path: "tiere/fuechse/steckbrief",
    description: "Fuchs Steckbrief: Rotfuchs Größe, Gewicht, Nahrung, Lebensraum, Fortpflanzung und Lebenserwartung – die wichtigsten Fakten kompakt erklärt.",
    focusKeyword: "Fuchs Steckbrief",
    markdown: `Der **Rotfuchs** ist das häufigste Raubtier Mitteleuropas. Er lebt in Wäldern, Feldern und längst auch mitten in Städten.

| Merkmal | Rotfuchs |
|---|---|
| Wissenschaftlicher Name | Vulpes vulpes |
| Familie | Hunde (Canidae) |
| Körperlänge | etwa 60 bis 90 cm, plus Schwanz (Lunte) 30 bis 50 cm |
| Gewicht | meist etwa 5 bis 8 kg |
| Nahrung | Allesfresser: Mäuse, Insekten, Regenwürmer, Früchte, Aas |
| Lebensweise | meist dämmerungs- und nachtaktiv |
| Fortpflanzung | Paarung im Winter (Ranzzeit), Junge im Frühjahr |
| Lebenserwartung | in freier Natur oft nur wenige Jahre |

## Aussehen

Rotbraunes Fell, weiße Kehle, dunkle „Strümpfe“ an den Beinen und ein buschiger Schwanz mit oft weißer Spitze. Die großen Ohren hören Mäuse sogar unter der Schneedecke.

## Mäusesprung

Typisch ist der **Mäusesprung**: Der Fuchs lauscht, springt hoch in die Luft und landet mit den Vorderpfoten auf der Maus.

## Familie

Im Frühjahr kommen im Bau meist vier bis sechs Welpen zur Welt. Beide Eltern kümmern sich, teilweise helfen auch ältere Geschwister.

## Füchse in der Stadt

Stadtfüchse finden Futter in Gärten, Parks und Mülltonnen. Bitte **nicht füttern** – so bleiben sie scheu.`,
    faq: [
      ["Wie schwer wird ein Fuchs?", "Ein Rotfuchs wiegt meist etwa 5 bis 8 kg – deutlich weniger, als sein buschiges Fell vermuten lässt."],
      ["Wie heißt der Schwanz des Fuchses?", "In der Jägersprache heißt er Lunte oder Rute."],
    ],
    sources: [NABU],
  },
  {
    path: "tiere/fuechse/lebensraum",
    description: "Lebensraum der Füchse: Wald, Feld und Stadt – wie Rotfüchse ihren Bau anlegen, warum sie in Städte ziehen und wie man mit Stadtfüchsen umgeht.",
    markdown: `Kaum ein Wildtier ist so anpassungsfähig wie der **Rotfuchs**. Er lebt fast überall auf der Nordhalbkugel – von der Arktis bis in die Wüste – und hat auch die Städte erobert.

## Wald und Feld

Klassisch lebt der Fuchs in **abwechslungsreichen Landschaften**: Waldränder, Hecken, Wiesen und Felder. Hier findet er Mäuse, Insekten und Früchte und zugleich Verstecke.

## Der Fuchsbau

Füchse graben einen **Bau** oder nutzen bestehende Höhlen, manchmal sogar gemeinsam mit Dachsen. Den Bau nutzen sie vor allem zur Aufzucht der Jungen und bei schlechtem Wetter. Den Rest des Jahres ruhen sie oft oberirdisch in dichtem Gebüsch.

## Füchse in der Stadt

In vielen Städten leben heute Füchse – in Parks, auf Friedhöfen, in Gärten und auf Bahngeländen. Gründe:

- reichlich Nahrung (Abfälle, Komposthaufen, Haustierfutter)
- viele Verstecke
- keine Jagd

## Tipps für ein gutes Nebeneinander

- Füchse **nicht füttern**.
- Mülltonnen schließen, kein Katzen- oder Hundefutter draußen stehen lassen.
- Komposthaufen ohne gekochte Essensreste und Fleisch.
- Kaninchen und Hühner in sicheren Gehegen halten.

## Fuchsbandwurm

Füchse können den **Fuchsbandwurm** übertragen. Waldbeeren und Fallobst vom Boden vor dem Verzehr gründlich waschen oder erhitzen, nach der Gartenarbeit Hände waschen und Hunde regelmäßig entwurmen lassen.`,
    faq: [
      ["Warum leben Füchse in der Stadt?", "Weil sie dort viel Nahrung, Verstecke und Ruhe vor der Jagd finden."],
      ["Ist ein Fuchs in der Stadt gefährlich?", "Gesunde Füchse meiden Menschen. Nicht füttern und Abstand halten. Wirkt ein Fuchs krank oder auffällig zahm, die örtlichen Behörden informieren."],
    ],
    sources: [NABU],
  },
  {
    path: "tiere/fuechse/ernaehrung",
    description: "Was fressen Füchse? Mäuse, Regenwürmer, Insekten, Früchte und Aas – warum der Rotfuchs ein echter Allesfresser ist und wie er jagt.",
    focusKeyword: "Was fressen Füchse",
    markdown: `Der Rotfuchs ist ein echter **Allesfresser** und Gelegenheitsjäger. Er frisst, was die Jahreszeit gerade bietet.

## Lieblingsbeute: Mäuse

**Wühlmäuse und Feldmäuse** machen einen großen Teil der Nahrung aus. Damit ist der Fuchs ein natürlicher Helfer in Land- und Forstwirtschaft. Mit seinen feinen Ohren hört er Mäuse unter Gras und Schnee und fängt sie mit dem typischen **Mäusesprung**.

## Was sonst noch?

- **Regenwürmer** – besonders nach Regen
- **Insekten und Käfer**
- **Früchte und Beeren** im Sommer und Herbst
- **Kaninchen, junge Hasen, Vögel und Eier**
- **Aas** – damit „räumt“ der Fuchs die Natur auf
- in Städten auch **Essensreste**

## Vorratshaltung

Hat ein Fuchs mehr Beute, als er fressen kann, vergräbt er Reste an verschiedenen Stellen und holt sie später.

## Füchse und Haustiere

Ungeschützte Hühner und Kaninchen können zur Beute werden. Ein stabiles, nachts geschlossenes Gehege mit Untergrabschutz verhindert das zuverlässig.

## Bitte nicht füttern

Gefütterte Füchse verlieren ihre Scheu und gewöhnen sich an Menschen – das führt oft zu Konflikten.`,
    faq: [
      ["Fressen Füchse Katzen?", "Das kommt praktisch nicht vor. Erwachsene Katzen sind wehrhaft, Füchse meiden Konflikte mit ihnen meist."],
      ["Fressen Füchse Obst?", "Ja, vor allem im Spätsommer und Herbst fressen Füchse gern Beeren, Kirschen, Pflaumen und Fallobst."],
    ],
    sources: [NABU],
  },
  {
    path: "tiere/fuechse/fakten-fuer-kinder",
    description: "Fuchs-Fakten für Kinder: Mäusesprung, Fuchsbau, Welpen und Stadtfüchse – 10 spannende und kindgerechte Fakten über den Rotfuchs.",
    markdown: `Der Fuchs ist schlau, flink und hat einen wunderschönen buschigen Schwanz. Hier sind spannende **Fuchs-Fakten für Kinder**!

## 10 Fakten über Füchse

1. **Füchse gehören zur Hundefamilie** – sie sind mit Wölfen und Hunden verwandt.
2. **Super Ohren:** Ein Fuchs hört eine Maus, die unter der Erde raschelt.
3. **Der Mäusesprung:** Füchse springen hoch in die Luft und landen direkt auf der Maus.
4. **Der Schwanz heißt Lunte.** Im Winter wickelt sich der Fuchs darin ein wie in eine Decke.
5. **Füchse wohnen im Bau** – einer Höhle unter der Erde.
6. **Fuchsbabys heißen Welpen.** Sie kommen im Frühling zur Welt.
7. **Allesfresser:** Füchse fressen Mäuse, Würmer, Käfer und Beeren.
8. **Stadtfüchse:** Manche Füchse leben mitten in der Stadt.
9. **Füchse bellen** – das klingt manchmal fast wie ein Schrei.
10. **Augen wie eine Katze:** Füchse sehen in der Dämmerung sehr gut.

## Rätsel

Ich bin rot, habe einen buschigen Schwanz und springe auf Mäuse. Wer bin ich? – Der Fuchs!

## Wichtig

Füchse sind Wildtiere. Wenn du einen siehst: freuen, beobachten, Abstand halten – und nie füttern oder anfassen.`,
    faq: [
      ["Wie viele Welpen bekommt eine Füchsin?", "Meist vier bis sechs Welpen, manchmal mehr."],
      ["Können Füchse bellen?", "Ja! Füchse bellen, kreischen und keckern – besonders in der Paarungszeit im Winter."],
    ],
    sources: [NABU],
  },
  {
    path: "tiere/fuechse/wo-sehen",
    description: "Wo kann man Füchse sehen? Wildparks, Stadtparks und die besten Zeiten in der Natur – mit Tipps, wie du Füchse beobachtest, ohne sie zu stören.",
    markdown: `Füchse leben fast überall in Mitteleuropa – trotzdem bekommt man sie selten zu Gesicht. Mit ein paar Tipps steigen deine Chancen.

## In der Natur

- **Dämmerung:** Füchse sind vor allem in der Morgen- und Abenddämmerung unterwegs.
- **Waldränder und Wiesen:** Hier jagen sie Mäuse. Mit einem Fernglas aus der Entfernung beobachten.
- **Winter:** Im Schnee sind Füchse und ihre Spuren besonders gut zu sehen.
- **Frühsommer:** Junge Füchse spielen manchmal vor dem Bau – bitte großen Abstand halten.

## In der Stadt

In vielen Städten leben Füchse in Parks, auf Friedhöfen und Bahnanlagen. Abends lassen sie sich manchmal ganz in der Nähe blicken. Auch hier gilt: nicht füttern, nicht anlocken.

## Wildparks und Tierparks

Viele Wild- und Tierparks halten Rotfüchse, manche auch Polarfüchse. Dort kannst du sie in Ruhe beobachten und mehr über sie erfahren.

## Fair beobachten

- Abstand halten und leise sein.
- Hunde anleinen.
- Baue nie betreten oder Welpen anfassen.
- Fotos ohne Blitz.`,
    faq: [
      ["Wann sieht man Füchse am häufigsten?", "In der Dämmerung am Morgen und Abend, im Winter auch tagsüber."],
      ["Darf ich einen Fuchs füttern?", "Nein. Gefütterte Füchse verlieren ihre Scheu, was zu Problemen für Mensch und Tier führt."],
    ],
    sources: [NABU],
  },

  /* ---------------- Pinguine ---------------- */
  {
    path: "tiere/pinguine/steckbrief",
    description: "Pinguin Steckbrief: Arten, Größe, Lebensraum, Nahrung und Besonderheiten der flugunfähigen Meeresvögel der Südhalbkugel – kompakt erklärt.",
    focusKeyword: "Pinguin Steckbrief",
    markdown: `Pinguine sind Vögel, die nicht fliegen, aber hervorragend schwimmen können. Ihre Flügel sind zu Flossen geworden, mit denen sie unter Wasser regelrecht „fliegen“.

| Merkmal | Pinguine |
|---|---|
| Familie | Pinguine (Spheniscidae) |
| Anzahl der Arten | etwa 18 (je nach Einteilung 17 bis 20) |
| Größte Art | Kaiserpinguin, etwa 1,1 bis 1,3 m |
| Kleinste Art | Zwergpinguin, etwa 30 bis 40 cm |
| Verbreitung | Südhalbkugel, Galápagos-Pinguin am Äquator |
| Nahrung | Fische, Krill, Tintenfische |
| Lebensweise | meist in großen Kolonien |

## Perfekt fürs Meer

- **Stromlinienförmiger Körper** und Flossen zum schnellen Schwimmen.
- **Dichtes Gefieder** und eine Fettschicht schützen vor Kälte.
- Das **schwarz-weiße Kleid** tarnt im Wasser: Von oben sieht man den dunklen Rücken vor dem dunklen Meer, von unten den hellen Bauch vor dem hellen Himmel.

## Nicht nur im Eis

Viele denken bei Pinguinen an die Antarktis. Doch nur wenige Arten leben dort dauerhaft. Andere brüten in Südamerika, Südafrika, Australien, Neuseeland oder auf den Galápagosinseln.

## Brutpflege

Beim **Kaiserpinguin** brütet das Männchen das Ei im antarktischen Winter auf seinen Füßen aus – wochenlang ohne zu fressen.

## Gefährdung

Mehrere Pinguinarten sind bedroht, unter anderem durch Klimawandel, Überfischung und Meeresverschmutzung.`,
    faq: [
      ["Wie viele Pinguinarten gibt es?", "Etwa 18 Arten – je nach wissenschaftlicher Einteilung werden 17 bis 20 gezählt."],
      ["Leben Pinguine am Nordpol?", "Nein. Pinguine leben nur auf der Südhalbkugel, eine Art am Äquator. Am Nordpol gibt es keine Pinguine."],
    ],
    sources: [WWF, IUCN],
  },
  {
    path: "tiere/pinguine/lebensraum",
    description: "Lebensraum der Pinguine: von der Antarktis bis zum Äquator – wo die verschiedenen Pinguinarten leben, brüten und welche Gefahren ihnen drohen.",
    markdown: `Pinguine leben ausschließlich auf der **Südhalbkugel** – mit einer kleinen Ausnahme: Der Galápagos-Pinguin brütet direkt am Äquator, teils knapp nördlich davon.

## Wo leben Pinguine?

- **Antarktis:** Kaiserpinguine und Adeliepinguine leben dauerhaft im Eis.
- **Subantarktische Inseln:** Königspinguine, Felsenpinguine und andere.
- **Südamerika:** Magellan- und Humboldtpinguine an den Küsten Chiles, Argentiniens und Perus.
- **Südafrika und Namibia:** Brillenpinguine.
- **Australien und Neuseeland:** Zwergpinguine und Gelbaugenpinguine.
- **Galápagosinseln:** Galápagos-Pinguine.

## Leben zwischen Land und Meer

Pinguine verbringen einen Großteil ihres Lebens im **Meer**. An Land kommen sie vor allem zum Brüten, zur Mauser und zum Ausruhen. Viele Arten brüten in riesigen **Kolonien** mit Tausenden Paaren.

## Kalte Meeresströmungen

Selbst Pinguine in wärmeren Regionen leben dort, wo **kalte, nährstoffreiche Meeresströmungen** viele Fische bringen – etwa der Humboldtstrom vor Südamerika.

## Bedrohungen

- **Klimawandel:** Meereis schmilzt, Nahrungsquellen wie Krill verändern sich.
- **Überfischung** der Beutetiere.
- **Ölverschmutzung** und Plastik im Meer.
- An Land: eingeschleppte Raubtiere und Störungen der Brutplätze.`,
    faq: [
      ["Leben alle Pinguine im Eis?", "Nein. Nur wenige Arten leben dauerhaft in der Antarktis. Viele brüten an gemäßigten Küsten in Südamerika, Afrika, Australien und Neuseeland."],
      ["Warum gibt es keine Pinguine am Nordpol?", "Pinguine haben sich auf der Südhalbkugel entwickelt und konnten die warmen Tropengewässer nie dauerhaft überqueren."],
    ],
    sources: [WWF],
  },
  {
    path: "tiere/pinguine/ernaehrung",
    description: "Was fressen Pinguine? Fische, Krill und Tintenfische – wie Pinguine tauchen, jagen, Salzwasser trinken und ihre Küken füttern.",
    focusKeyword: "Was fressen Pinguine",
    markdown: `Pinguine sind **Fleischfresser** und holen ihre gesamte Nahrung aus dem Meer.

## Was steht auf dem Speiseplan?

- **Fische** wie Sardinen, Sardellen oder Antarktisfische
- **Krill** – kleine Krebstiere, die in riesigen Schwärmen vorkommen
- **Tintenfische**

Welche Beute überwiegt, hängt von Art und Region ab. Adeliepinguine fressen zum Beispiel viel Krill, Humboldtpinguine vor allem Schwarmfische.

## Meister im Tauchen

Pinguine jagen unter Wasser. Kaiserpinguine können **mehrere hundert Meter tief** und viele Minuten lang tauchen. Kleinere Arten bleiben eher in den oberen Wasserschichten.

## Schnabel und Zunge

Ihre Zunge und der Gaumen haben nach hinten gerichtete Stacheln aus Horn. So rutscht die glitschige Beute nicht wieder heraus. Pinguine schlucken ihre Beute ganz.

## Salzwasser trinken?

Pinguine können Meerwasser trinken. Eine **Salzdrüse** über den Augen filtert überschüssiges Salz heraus, das dann über den Schnabel abtropft.

## Küken füttern

Die Eltern würgen vorverdaute Nahrung hervor und füttern damit ihre Küken. Die Altvögel wechseln sich oft ab: Einer jagt im Meer, der andere bewacht das Küken.`,
    faq: [
      ["Wie tief können Pinguine tauchen?", "Kaiserpinguine erreichen Tiefen von mehreren hundert Metern. Kleinere Arten tauchen meist deutlich flacher."],
      ["Trinken Pinguine Salzwasser?", "Ja. Eine Salzdrüse über den Augen scheidet überschüssiges Salz wieder aus."],
    ],
    sources: [WWF],
  },
  {
    path: "tiere/pinguine/fakten-fuer-kinder",
    description: "Pinguin-Fakten für Kinder: 12 lustige und spannende Fakten über Pinguine – vom Watscheln bis zum Kaiserpinguin-Papa, der das Ei ausbrütet.",
    markdown: `Pinguine watscheln lustig an Land und flitzen im Wasser wie kleine Torpedos. Hier sind spannende **Pinguin-Fakten für Kinder**!

## 12 Pinguin-Fakten

1. **Pinguine sind Vögel** – sie haben Federn und legen Eier.
2. **Fliegen können sie nicht,** aber sie „fliegen“ unter Wasser mit ihren Flossen.
3. **Es gibt etwa 18 Pinguinarten.**
4. **Der Kaiserpinguin ist der Größte** – so groß wie ein Grundschulkind.
5. **Der Zwergpinguin ist der Kleinste** – nur etwa 30 bis 40 cm groß.
6. **Pinguine leben nur auf der Südhalbkugel,** nicht am Nordpol bei den Eisbären.
7. **Bauchrutschen:** Auf dem Eis rutschen manche Pinguine auf dem Bauch – das geht schneller!
8. **Kaiserpinguin-Papas** halten das Ei wochenlang auf ihren Füßen warm.
9. **Kuscheln gegen Kälte:** Kaiserpinguine stehen dicht aneinander und wechseln sich am kalten Rand ab.
10. **Jeder Pinguin hat eine eigene Stimme** – so finden sich Eltern und Küken in der Kolonie.
11. **Pinguine trinken Salzwasser** und niesen das Salz wieder aus.
12. **Schwarz-weiß ist Tarnung** – im Wasser sind sie von oben und unten schwer zu sehen.

## Mitmach-Idee

Watschle wie ein Pinguin: Füße zusammen, Arme an den Körper, kleine Schritte – und dabei ein Ei (einen Ball) auf den Füßen balancieren!`,
    faq: [
      ["Wie schnell schwimmen Pinguine?", "Viele Arten schwimmen mit etwa 5 bis 10 km/h, Eselspinguine kurzzeitig deutlich schneller."],
      ["Frieren Pinguine?", "Kaum: Dichte Federn und eine Fettschicht halten sie warm. Kaiserpinguine kuscheln sich außerdem eng aneinander."],
    ],
    sources: [WWF],
  },
  {
    path: "tiere/pinguine/wo-sehen",
    description: "Wo kann man Pinguine sehen? Zoos und Aquarien mit Pinguinen in Deutschland, Österreich und der Schweiz sowie Tipps für Pinguin-Paraden und Fütterungen.",
    markdown: `Viele Zoos in Deutschland, Österreich und der Schweiz halten Pinguine – oft Humboldt-, Brillen-, Esels- oder Königspinguine.

## Beispiele für Zoos mit Pinguinen

- **Tiergarten Schönbrunn (Wien):** Im Polarium leben unter anderem Felsenpinguine und Königspinguine.
- **Zoo Zürich:** Bekannt für die Pinguin-Parade der Königspinguine im Winter.
- **Tierpark Hellabrunn (München):** Polarwelt mit Pinguinen.
- **Zoo Leipzig, Zoo Berlin** und viele weitere Zoos halten ebenfalls Pinguine.
- Auch einige **SEA LIFE**-Aquarien zeigen Pinguine.

Weil sich Tierbestände und Anlagen ändern, informierst du dich am besten vor dem Besuch auf der Website des Zoos.

## Pinguin-Paraden

Einige Zoos bieten im Winter **Pinguin-Spaziergänge** an, bei denen die Königspinguine durch den Zoo watscheln – wenn es kalt genug ist und die Tiere Lust haben.

## Fütterungen

Schaufütterungen mit kommentierender Tierpflegerin sind ein Highlight, gerade für Kinder. Die Zeiten stehen meist auf der Zoo-Website oder am Eingang.

## In freier Wildbahn

Wer reist, kann Pinguine in Südafrika (Boulders Beach), Südamerika, Australien, Neuseeland oder der Antarktis sehen. Auch hier gilt: Abstand halten und die Tiere nicht stören.`,
    faq: [
      ["Wo gibt es eine Pinguin-Parade?", "Zum Beispiel im Zoo Zürich, wo Königspinguine bei kalten Temperaturen im Winter durch den Zoo spazieren. Termine stehen auf der Zoo-Website."],
      ["Wo kann man in Österreich Pinguine sehen?", "Unter anderem im Tiergarten Schönbrunn in Wien."],
    ],
    sources: [{ title: "Zoo Zürich", url: "https://www.zoo.ch/" }, { title: "Tiergarten Schönbrunn", url: "https://www.zoovienna.at/" }],
  },

  /* ---------------- Malvorlagen ---------------- */
  {
    path: "tiere/tier-malvorlagen/hunde-malvorlagen",
    description: "Hunde-Malvorlagen und Malideen: Hund in 6 einfachen Schritten zeichnen, Ausmal-Tipps für Kinder und Ideen für eigene Hunde-Bilder.",
    markdown: `Hunde gehören zu den beliebtesten Motiven zum Malen. Hier zeigen wir dir, wie du ganz einfach einen Hund zeichnest und ausmalst. Fertige **Hunde-Malvorlagen** zum Ausdrucken ergänzen wir nach und nach.

## Hund zeichnen in 6 Schritten

1. **Kopf:** Zeichne einen großen Kreis.
2. **Schnauze:** Unten am Kreis ein kleines Oval mit einer runden Nase.
3. **Ohren:** Zwei lange, hängende Tropfen an den Seiten – oder zwei spitze Dreiecke für einen Schäferhund.
4. **Körper:** Ein liegendes Oval unter dem Kopf.
5. **Beine und Schwanz:** Vier kurze Rechtecke mit runden Pfoten und ein geschwungener Schwanz.
6. **Gesicht:** Zwei Punkte als Augen, ein Lächeln – fertig!

## Ausmal-Ideen

- Male deinen eigenen Hund oder den Hund deiner Großeltern.
- Erfinde Fellmuster: Flecken wie ein Dalmatiner, gestreift oder in Regenbogenfarben.
- Gib deinem Hund einen Hintergrund: Wiese, Garten, Strand.

## Tipps für Eltern

- Dicke Stifte erleichtern kleinen Kindern das Malen.
- Ausdrucken auf etwas dickerem Papier, wenn mit Wasserfarben gemalt wird.
- Malen fördert Feinmotorik und Konzentration – und macht Spaß!

Weitere Tier-Ideen findest du bei den Katzen-, Pferde- und Zootier-Malvorlagen.`,
    faq: [
      ["Ab welchem Alter eignen sich Malvorlagen?", "Einfache Motive mit dicken Linien schon ab etwa zwei bis drei Jahren, detailreichere Vorlagen für ältere Kinder."],
      ["Welche Stifte eignen sich am besten?", "Für kleine Kinder dicke Wachsmalstifte oder Buntstifte, für ältere Kinder Filzstifte und Aquarellstifte."],
    ],
  },
  {
    path: "tiere/tier-malvorlagen/katzen-malvorlagen",
    description: "Katzen-Malvorlagen und Malideen: Katze in einfachen Schritten zeichnen, Ausmal-Ideen und kreative Muster für Kinder und Erwachsene.",
    markdown: `Ob schlafend, spielend oder auf der Fensterbank – Katzen sind wunderbare Malmotive. Hier lernst du, wie du eine Katze zeichnest. Fertige **Katzen-Malvorlagen** zum Ausdrucken folgen nach und nach.

## Sitzende Katze in 6 Schritten

1. **Kopf:** Ein Kreis.
2. **Ohren:** Zwei Dreiecke oben auf dem Kopf.
3. **Körper:** Eine große Birnenform unter dem Kopf.
4. **Pfoten:** Zwei kleine Halbkreise unten am Körper.
5. **Schwanz:** Ein langer, geschwungener Bogen, der um die Pfoten liegt.
6. **Gesicht:** Augen, ein kleines Dreieck als Nase, ein „w“ als Mund und Schnurrhaare.

## Ausmal-Ideen

- **Tigerkatze:** orange mit dunklen Streifen.
- **Glückskatze:** weiß mit orangen und schwarzen Flecken.
- **Nachtkatze:** schwarze Katze mit leuchtend gelben Augen unter einem Sternenhimmel.
- **Fantasiekatze:** mit Glitzer, Blumen oder Mustern.

## Kreative Variante

Zeichne mehrere Katzen in verschiedenen Posen: eingerollt beim Schlafen, mit Wollknäuel spielend oder auf dem Kratzbaum. So entsteht eine kleine Katzengeschichte.`,
    faq: [
      ["Wie zeichne ich eine schlafende Katze?", "Zeichne ein liegendes Oval als Körper, einen Kreis als Kopf daneben und lege den Schwanz um den Körper. Geschlossene Augen als kleine Bögen."],
      ["Gibt es Katzen-Malvorlagen für Erwachsene?", "Ja, detailreiche Mandala- und Muster-Motive sind beliebt. Wir ergänzen auch solche Vorlagen nach und nach."],
    ],
  },
  {
    path: "tiere/tier-malvorlagen/pferde-malvorlagen",
    description: "Pferde-Malvorlagen und Malideen: Pferd zeichnen Schritt für Schritt, Fellfarben zum Ausmalen und Ideen für Einhorn- und Ponybilder.",
    markdown: `Pferde zu zeichnen gilt als schwierig – mit einfachen Grundformen gelingt es aber auch Anfängern. Fertige **Pferde-Malvorlagen** zum Ausdrucken ergänzen wir nach und nach.

## Pferd zeichnen mit Grundformen

1. **Körper:** ein großes, liegendes Oval.
2. **Brust und Hinterteil:** je ein Kreis vorne und hinten im Oval.
3. **Hals:** zwei schräge Linien nach oben.
4. **Kopf:** ein kleiner Kreis für die Stirn und ein kleinerer für das Maul, verbunden zu einer länglichen Form.
5. **Beine:** lange, schlanke Linien mit kleinen Hufen. Die Gelenke als kleine Kreise einzeichnen.
6. **Mähne und Schweif:** geschwungene Linien.

## Fellfarben zum Ausmalen

- **Fuchs:** rotbraun mit gleichfarbiger Mähne
- **Rappe:** schwarz
- **Schimmel:** weiß bis grau
- **Brauner:** braun mit schwarzer Mähne und schwarzem Schweif
- **Schecke:** große weiße und farbige Flecken

## Fantasie-Ideen

Mach aus deinem Pferd ein **Einhorn** mit Horn und Regenbogenmähne oder ein **Pegasus** mit Flügeln. Auch ein Pony mit geflochtener Mähne und Blumen ist ein schönes Motiv.`,
    faq: [
      ["Warum ist ein Pferd schwer zu zeichnen?", "Wegen der langen Beine und der Proportionen. Mit Grundformen wie Kreisen und Ovalen wird es viel einfacher."],
      ["Welche Farbe hat ein Fuchs-Pferd?", "Ein Fuchs ist rotbraun und hat Mähne und Schweif in derselben oder einer helleren Farbe."],
    ],
  },
  {
    path: "tiere/tier-malvorlagen/wildtier-malvorlagen",
    description: "Wildtier-Malvorlagen und Malideen: Fuchs, Igel, Eule und Reh einfach zeichnen – plus Wissensfragen zum Ausmalen für Kinder.",
    markdown: `Fuchs, Igel, Eule und Reh – unsere heimischen Wildtiere sind wunderbare Malmotive. Hier findest du einfache Zeichenideen. Fertige **Wildtier-Malvorlagen** zum Ausdrucken folgen nach und nach.

## Einfache Zeichenideen

- **Fuchs:** Ein Dreieck als Kopf mit zwei spitzen Ohren, ein Oval als Körper und ein dicker, buschiger Schwanz mit weißer Spitze.
- **Igel:** Ein halber Kreis als Körper, vorne eine spitze Schnauze, und viele kleine Striche als Stacheln.
- **Eule:** Ein großes Ei als Körper, zwei große Kreise als Augen, ein kleiner Dreiecksschnabel und Federohren.
- **Reh:** Ein Oval als Körper, schlanke Beine, große Ohren und – beim Rehkitz – weiße Punkte auf dem Rücken.
- **Eichhörnchen:** Ein kleiner Körper mit einem riesigen, geschwungenen Schwanz und Pinselohren.

## Wissen beim Ausmalen

Stelle beim Malen Fragen:
- Welche Farbe hat ein Eichhörnchen? (rotbraun oder dunkelbraun)
- Warum hat das Rehkitz Punkte? (Tarnung im Wald)
- Wann schläft der Igel? (im Winter hält er Winterschlaf)

## Naturbild

Male mehrere Tiere in eine Waldszene: Bäume, Pilze, ein Bach und die Tiere dazwischen. Mehr über Füchse erfährst du in unseren Fuchs-Fakten für Kinder.`,
    faq: [
      ["Welche Wildtiere sind leicht zu zeichnen?", "Igel, Eule und Fuchs lassen sich mit einfachen Grundformen besonders leicht zeichnen."],
      ["Wie kann ich Malen mit Lernen verbinden?", "Beim Ausmalen über Lebensraum, Nahrung und Farben der Tiere sprechen oder gemeinsam ein kurzes Tierquiz machen."],
    ],
  },
  {
    path: "tiere/tier-malvorlagen/zootier-malvorlagen",
    description: "Zootier-Malvorlagen und Malideen: Panda, Giraffe, Elefant, Löwe und Pinguin einfach zeichnen – ideal vor oder nach dem Zoobesuch.",
    markdown: `Vor oder nach dem Zoobesuch macht das Malen von Zootieren besonders viel Spaß. Hier sind Zeichenideen für die beliebtesten Tiere. Fertige **Zootier-Malvorlagen** zum Ausdrucken ergänzen wir nach und nach.

## Zootiere einfach zeichnen

- **Panda:** Ein großer Kreis als Kopf, zwei runde schwarze Ohren, schwarze ovale Augenflecken und ein runder Körper – dazu ein grüner Bambusstab!
- **Giraffe:** Ein ovaler Körper, vier lange Beine, ein sehr langer Hals, kleiner Kopf mit zwei Hörnchen und braune Flecken.
- **Elefant:** Ein großer Körper, vier dicke Beine, große Ohren und ein langer Rüssel.
- **Löwe:** Ein Kreis als Gesicht und drumherum eine wilde, zackige Mähne.
- **Pinguin:** Eine Eiform, ein weißer Bauch, kleine Flossen und orangefarbene Füße.

## Zoo-Mal-Spiel

Malt nach dem Zoobesuch alle Tiere, die ihr gesehen habt, und gestaltet daraus ein eigenes **Zoo-Poster** mit Gehegen, Wegen und Schildern.

## Panda-Extra

Für Panda-Fans gibt es eigene Ideen bei den Panda-Malvorlagen. Und wo man Pandas in Europa sehen kann, erfährst du im Ratgeber „Wo kann man Pandas sehen?“.`,
    faq: [
      ["Welches Zootier ist am leichtesten zu zeichnen?", "Pinguin und Panda bestehen aus wenigen runden Formen und gelingen deshalb besonders leicht."],
      ["Wie mache ich aus Malvorlagen ein Lernspiel?", "Zu jedem Tier eine Frage stellen, etwa was es frisst oder wo es lebt, und die Antwort auf das Bild schreiben."],
    ],
  },

  /* ---------------- Tier-KI-Prompts ---------------- */
  {
    path: "tiere/tier-ki-prompts/tierbilder-mit-ki",
    description: "Tierbilder mit KI erstellen: So schreibst du gute Prompts für Tierfotos, Illustrationen und Comics – mit Beispielen und Tipps zu Stil, Licht und Rechten.",
    markdown: `Mit KI-Bildgeneratoren entstehen in Sekunden beeindruckende **Tierbilder** – vom realistischen Foto bis zur niedlichen Illustration. Der Schlüssel ist ein guter **Prompt**.

## Aufbau eines guten Prompts

1. **Motiv:** Welches Tier, was tut es? „Ein junger Rotfuchs, der im Schnee springt“
2. **Umgebung:** „im verschneiten Winterwald bei Sonnenaufgang“
3. **Stil:** „realistische Naturfotografie“ oder „Aquarell-Illustration für ein Kinderbuch“
4. **Licht und Stimmung:** „warmes Gegenlicht, ruhige Stimmung“
5. **Details:** „detailreiches Fell, geringe Schärfentiefe“

## Beispiel-Prompts

- „Ein schlafender Panda auf einem Ast, umgeben von Bambusblättern, weiches Morgenlicht, Naturfotografie“
- „Eine Katze mit Astronautenhelm schwebt durchs All, Comic-Stil, kräftige Farben“
- „Ein Hund im Herbstlaub, Aquarell, Pastellfarben, Kinderbuchillustration“

## Tipps

- **Eine Idee pro Bild** – zu viele Elemente verwirren die KI.
- **Variieren:** Mehrere Versionen erstellen und die beste weiterentwickeln.
- **Pfoten und Beine prüfen:** KI-Bilder haben manchmal zu viele Beine oder seltsame Pfoten.

## Rechte und Kennzeichnung

Lies die Nutzungsbedingungen des Tools, bevor du Bilder kommerziell nutzt. Erstelle keine täuschend echten Bilder, die als echte Fotos ausgegeben werden – und kennzeichne KI-Bilder, wenn du sie veröffentlichst.

Mehr Vorlagen findest du bei den Hunde- und Katzen-Prompts sowie in unserem Bereich KI-Bildgeneratoren.`,
    faq: [
      ["Welcher KI-Bildgenerator eignet sich für Tierbilder?", "Viele aktuelle Bildgeneratoren liefern gute Tierbilder. Einen Vergleich findest du im Bereich KI-Bildgeneratoren."],
      ["Darf ich KI-Tierbilder verkaufen?", "Das hängt von den Nutzungsbedingungen des jeweiligen Tools und dem Recht deines Landes ab. Prüfe die Bedingungen vor einer kommerziellen Nutzung."],
    ],
  },
  {
    path: "tiere/tier-ki-prompts/hunde-prompts",
    description: "Hunde-Prompts für KI-Bilder: Vorlagen für realistische Hundefotos, Comics, Porträts und lustige Szenen – einfach kopieren und anpassen.",
    markdown: `Diese **Hunde-Prompts** kannst du kopieren und an deinen Lieblingshund anpassen. Ersetze die Begriffe in eckigen Klammern.

## Realistische Hundefotos

- „Porträt eines [Golden Retrievers] im Gegenlicht auf einer Sommerwiese, Naturfotografie, weiches Bokeh“
- „Ein [Border Collie] springt nach einem Frisbee, Bewegungsunschärfe, Sportfotografie“
- „Ein [Dackel] schläft eingerollt auf einer Wolldecke vor dem Kamin, gemütliche Stimmung“

## Lustige Szenen

- „Ein [Mops] als Koch mit Kochmütze in einer Küche, Pixar-ähnlicher 3D-Stil“
- „Ein [Husky] fährt Schlitten mit Sonnenbrille, Comic-Stil, kräftige Farben“
- „Ein [Corgi] als Superheld mit Umhang über der Stadt, Cartoon“

## Kunst und Illustration

- „Ein [Beagle] als Aquarell, Pastellfarben, weißer Hintergrund“
- „Minimalistische Linienzeichnung eines [Schäferhunds], eine durchgehende Linie“
- „Ein Hund im Stil eines Pop-Art-Posters, vier Farbvarianten“

## So wird dein Hund getroffen

- Nenne **Rasse, Fellfarbe und Besonderheiten**: „schwarz-weißer Mischling mit einem Schlappohr“.
- Beschreibe **Pose und Umgebung**.
- Manche Tools erlauben ein Referenzfoto – beachte dabei die Datenschutzhinweise.

Mehr Grundlagen findest du im Ratgeber „Tierbilder mit KI“.`,
    faq: [
      ["Kann die KI meinen eigenen Hund nachzeichnen?", "Manche Tools können mit einem Referenzbild arbeiten. Beschreibe sonst Rasse, Fellfarbe und Merkmale möglichst genau."],
      ["Warum sehen die Pfoten manchmal komisch aus?", "Bildgeneratoren haben mit Pfoten, Beinen und Zehen oft noch Probleme. Mehrere Varianten erzeugen und die beste wählen hilft."],
    ],
  },
  {
    path: "tiere/tier-ki-prompts/katzen-prompts",
    description: "Katzen-Prompts für KI-Bilder: kopierfertige Vorlagen für Katzenfotos, Fantasy-Katzen, Comics und Kunststile – mit Tipps für bessere Ergebnisse.",
    markdown: `Katzen sind im Internet die Stars – und bei KI-Bildern ebenso. Diese **Katzen-Prompts** kannst du direkt verwenden und anpassen.

## Realistische Katzenbilder

- „Eine [Maine-Coon-Katze] sitzt auf einer Fensterbank im Regen, sanftes Licht, Fotografie“
- „Ein [rotes Kätzchen] spielt mit einem Wollknäuel, Nahaufnahme, geringe Schärfentiefe“
- „Eine [schwarze Katze] mit grünen Augen im Mondlicht, mystische Stimmung“

## Fantasy und Lustiges

- „Eine Katze als Zauberin mit Spitzhut und leuchtendem Zauberstab, Fantasy-Illustration“
- „Eine Katze als Astronautin auf dem Mond, Comic-Stil“
- „Eine Katze als Café-Barista, die Latte Art macht, gemütlicher 3D-Stil“

## Kunststile

- „Katze im Stil eines japanischen Holzschnitts“
- „Katze als Glasmalerei-Fenster, leuchtende Farben“
- „Katze als minimalistisches Logo, flaches Design, zwei Farben“

## Tipps

- **Fellmuster** genau beschreiben: getigert, dreifarbig, Smoking-Katze.
- **Gefühl** nennen: neugierig, verschlafen, frech.
- **Seitenverhältnis** passend wählen: hoch für Handy-Hintergründe, quer für Banner.

Grundlagen zu Prompts findest du bei „Tierbilder mit KI“, weitere Vorlagen bei den Hunde-Prompts und Fantasietieren.`,
    faq: [
      ["Wie beschreibe ich das Fell meiner Katze?", "Mit Begriffen wie getigert, gestromt, dreifarbig (Glückskatze), schildpattfarben oder Smoking-Katze (schwarz mit weißer Brust)."],
      ["Welches Format eignet sich für Handy-Hintergründe?", "Ein Hochformat, zum Beispiel 9:16."],
    ],
  },
  {
    path: "tiere/tier-ki-prompts/fantasietiere-mit-ki",
    description: "Fantasietiere mit KI erschaffen: Prompts für Mischwesen, Glow-Tiere und Fabelwesen – plus Tipps, wie du eigene Kreaturen entwirfst.",
    markdown: `Mit KI kannst du Tiere erschaffen, die es nie gegeben hat: einen Panda mit Schmetterlingsflügeln, einen leuchtenden Kristallfuchs oder ein Wolkenpferd. So entwirfst du deine eigenen **Fantasietiere**.

## Die Fantasietier-Formel

**[Tier A] + [Eigenschaft von Tier B oder Element] + [Umgebung] + [Stil]**

Beispiele:
- „Ein Panda mit Schmetterlingsflügeln in einem leuchtenden Bambuswald, Fantasy-Illustration“
- „Ein Fuchs aus blauen Kristallen in einer Eishöhle, glitzerndes Licht, 3D-Rendering“
- „Ein Pferd aus Wolken, das über einen Sonnenuntergang galoppiert, verträumter Stil“
- „Eine Katze mit Pfauenfedern-Schwanz in einem Märchengarten, Aquarell“

## Glow-Fantasietiere

Passend zum Panda-Toolbox-Stil:
- „Ein leuchtender Neon-Panda in Türkis und Lila, dunkler Hintergrund, Glow-Effekt“
- „Biolumineszente Qualle in Form eines Hasen, schwebend im dunklen Ozean“

## Eigene Kreatur entwerfen

1. Name ausdenken („Bambusdrache“).
2. Lebensraum festlegen.
3. Besondere Fähigkeit: leuchtet, fliegt, kann sich tarnen.
4. Aussehen beschreiben: Farben, Größe, Gesichtsausdruck.
5. Im Prompt kombinieren und mehrere Varianten erzeugen.

## Kreativ-Idee für Kinder

Kinder malen zuerst ihr Fantasietier auf Papier und beschreiben es dann gemeinsam mit einem Erwachsenen für die KI. Das trainiert Sprache und Fantasie.`,
    faq: [
      ["Wie bekomme ich einheitliche Bilder desselben Fantasietiers?", "Den Prompt möglichst gleich lassen und nur die Szene ändern. Manche Tools bieten Funktionen für Charakter-Konsistenz oder Referenzbilder."],
      ["Was ist ein Glow-Effekt?", "Leuchtende Farben, die wie Neonlicht wirken – meist auf dunklem Hintergrund."],
    ],
  },
];
