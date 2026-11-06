import type { FillPage } from "../types";

/**
 * Release-Lücken (Teil 1): Ratgeber für Tiere, KI, Tools und Finanzen,
 * die in der Seitenstruktur angelegt, aber noch ohne Text waren.
 */

const VET = { title: "Bundestierärztekammer – Informationen für Tierhalter", url: "https://www.bundestieraerztekammer.de/" };
const TVT = { title: "Tierärztliche Vereinigung für Tierschutz (TVT) – Merkblätter", url: "https://www.tierschutz-tvt.de/" };
const VZ = { title: "Verbraucherzentrale – Versicherungen und Geld", url: "https://www.verbraucherzentrale.de/" };
const AK = { title: "Arbeiterkammer – Konsumentenschutz", url: "https://www.arbeiterkammer.at/konsumentenschutz" };

export const releaseRatgeber: FillPage[] = [
  /* ================= Tiere: Hunde ================= */
  {
    path: "tiere/hunde/hundebetten",
    description: "Hundebetten richtig auswählen: passende Größe messen, orthopädische Betten für ältere Hunde, waschbare Materialien und der beste Platz.",
    focusKeyword: "Hundebett",
    linkAnchors: ["Hundebett", "Hundebetten"],
    markdown: `Hunde verschlafen und dösen einen großen Teil des Tages – erwachsene Hunde oft **12 bis 14 Stunden**, Welpen und Senioren noch mehr. Ein gutes **Hundebett** ist deshalb keine Spielerei, sondern ein fester Rückzugsort, der Gelenke schont und für Ruhe sorgt.

## Die richtige Größe

Miss deinen Hund, während er ausgestreckt auf der Seite liegt: von der Nasenspitze bis zum Schwanzansatz. Gib **etwa 20 bis 30 cm** dazu – so hat er Platz, sich zu strecken.

- **Rollt sich gern ein?** Ein rundes Bett oder ein Bett mit Rand passt gut.
- **Liegt gern lang ausgestreckt?** Eher ein rechteckiges Kissen oder eine Matratze.
- **Lehnt den Kopf gern an?** Ein Bett mit erhöhtem Rand („Nackenrolle“) ist ideal.

## Die wichtigsten Arten

| Art | Gut für | Darauf achten |
|---|---|---|
| Hundekissen | junge, gesunde Hunde | Füllung darf nicht schnell flach werden |
| Bett mit Rand | Hunde, die sich einrollen | Einstieg bei Senioren niedrig halten |
| Orthopädisches Bett | ältere Hunde, große Rassen, Gelenkprobleme | formstabiler Schaum statt loser Füllung |
| Hundematte | Auto, Box, Sommer | leicht zu reinigen, rutschfest |
| Erhöhtes Liegebett | warme Tage, Garten | Luft zirkuliert, kühlt |

## Material und Pflege

- **Abnehmbarer, waschbarer Bezug** – das wichtigste Kriterium im Alltag.
- **Robuster Stoff** wie Cordura, Kunstleder oder dichter Polyester für Hunde, die gern buddeln oder kauen.
- **Wasserabweisende Innenhülle**, falls dein Hund nass vom Spaziergang kommt oder ein Welpe noch nicht stubenrein ist.
- **Rutschfester Boden**, damit das Bett auf Parkett nicht wegrutscht.

Wasche den Bezug regelmäßig und sauge das Bett zwischendurch ab. Das reduziert Haare, Schmutz und Milben.

## Der beste Platz

Hunde möchten dabei sein, aber nicht mitten im Durchgang liegen. Gut ist eine **ruhige Ecke**, von der aus dein Hund die Familie sieht – ohne Zugluft und nicht direkt an der Heizung. Viele Hunde freuen sich über **zwei Liegeplätze**, etwa im Wohnzimmer und im Schlafzimmer.

## Für Senioren und große Hunde

Ältere Hunde und große Rassen profitieren von **orthopädischem Schaum** (z. B. Viscoschaum), der das Gewicht verteilt. Ein **niedriger Einstieg** erleichtert das Aufstehen. Wenn dein Hund steif aufsteht oder ungern liegt, lass die Gelenke in der Tierarztpraxis anschauen.`,
    faq: [
      ["Wie groß muss ein Hundebett sein?", "Miss deinen Hund ausgestreckt von der Nase bis zum Schwanzansatz und gib etwa 20 bis 30 cm dazu. Hunde, die sich einrollen, kommen auch mit etwas kleineren runden Betten aus."],
      ["Braucht mein Hund ein orthopädisches Bett?", "Für ältere Hunde, große Rassen und Hunde mit Gelenkproblemen lohnt es sich. Junge, gesunde Hunde liegen auch auf einem guten Kissen bequem."],
      ["Wie oft sollte ich das Hundebett waschen?", "Den Bezug am besten alle ein bis zwei Wochen waschen, bei Bedarf öfter. Zwischendurch absaugen hilft gegen Haare und Milben."],
    ],
    sources: [TVT, VET],
  },
  {
    path: "tiere/hunde/hundeversicherung",
    description: "Hundeversicherung erklärt: Hundehaftpflicht, OP- und Krankenversicherung im Vergleich, wo die Haftpflicht Pflicht ist und worauf du im Tarif achtest.",
    focusKeyword: "Hundeversicherung",
    linkAnchors: ["Hundeversicherung", "Hundehaftpflicht"],
    markdown: `Ein Hund bringt viel Freude – und ein paar finanzielle Risiken. Rund um den Hund gibt es drei Versicherungsarten. Die wichtigste ist die **Hundehaftpflicht**, die beiden anderen sind je nach Situation sinnvoll.

## 1. Hundehaftpflicht – die wichtigste

Als Halter haftest du für Schäden, die dein Hund verursacht – auch ohne eigenes Verschulden. Läuft dein Hund auf die Straße und verursacht einen Unfall, können schnell sehr hohe Summen entstehen. Die private Haftpflicht deckt Hunde in der Regel **nicht** ab.

**Wo sie Pflicht ist (Stand 2026):**

- **Deutschland – für alle Hunde:** Berlin, Hamburg, Niedersachsen, Sachsen-Anhalt, Schleswig-Holstein und Thüringen.
- **Deutschland – für bestimmte Hunde:** In den meisten anderen Ländern gilt die Pflicht für Listenhunde oder als gefährlich eingestufte Hunde, in Nordrhein-Westfalen zusätzlich für große Hunde (ab 40 cm Schulterhöhe oder 20 kg). Mecklenburg-Vorpommern kennt keine Pflicht.
- **Österreich:** Die Regeln sind Ländersache. In Wien ist eine Haftpflichtversicherung für alle Hunde vorgeschrieben, andere Bundesländer verlangen sie vor allem für Listenhunde.

Auch wo sie nicht vorgeschrieben ist, raten Verbraucherschützer dringend dazu.

**Darauf achten:**
- **Deckungssumme:** mindestens 10 Millionen Euro pauschal für Personen-, Sach- und Vermögensschäden sind heute üblich.
- **Mietsachschäden** (z. B. zerkratzte Türen in der Mietwohnung)
- **Fremdhüter** mitversichert, etwa wenn Freunde den Hund ausführen
- **Welpen** des eigenen Hundes und **Auslandsaufenthalte**
- **Selbstbeteiligung** – senkt den Beitrag, muss aber im Schadensfall bezahlt werden

## 2. Hunde-OP-Versicherung

Sie zahlt Operationen und meist auch Vor- und Nachbehandlung. Tierarztkosten sind in Deutschland seit der neuen **Gebührenordnung für Tierärzte (GOT) 2022** deutlich gestiegen – eine Operation kann schnell mehrere tausend Euro kosten. Eine OP-Versicherung ist ein guter Mittelweg zwischen Kosten und Schutz.

## 3. Hundekrankenversicherung

Sie übernimmt zusätzlich ambulante Behandlungen, Medikamente und oft Vorsorge. Das ist der umfassendste, aber auch teuerste Schutz.

## Worauf du bei OP- und Krankenversicherung achtest

1. **Wartezeiten** – oft einige Wochen bis Monate, bei bestimmten Erkrankungen länger.
2. **Ausschlüsse** – Vorerkrankungen und rassetypische Erkrankungen sind häufig ausgeschlossen.
3. **Erstattung bis zu welchem GOT-Satz** – ideal ist bis zum 3- oder 4-fachen Satz (Notdienst).
4. **Jahreshöchstleistung** und **Selbstbeteiligung**
5. **Eintrittsalter** – je jünger der Hund, desto leichter der Abschluss.

## Alternative: selbst sparen

Wer eine Krankenversicherung zu teuer findet, kann jeden Monat einen festen Betrag für Tierarztkosten zurücklegen. Das funktioniert, solange keine teure Behandlung früh nötig wird – genau dafür ist die OP-Versicherung gedacht.

*Dieser Ratgeber ersetzt keine persönliche Versicherungsberatung. Vergleiche die Bedingungen der Anbieter genau.*`,
    faq: [
      ["Ist eine Hundehaftpflicht Pflicht?", "In Deutschland in Berlin, Hamburg, Niedersachsen, Sachsen-Anhalt, Schleswig-Holstein und Thüringen für alle Hunde, in den meisten anderen Ländern für bestimmte Hunde. In Österreich ist sie zum Beispiel in Wien für alle Hunde vorgeschrieben."],
      ["Zahlt meine private Haftpflicht für Schäden durch meinen Hund?", "In der Regel nicht. Hunde brauchen eine eigene Hundehalterhaftpflicht. Kleintiere wie Katzen sind dagegen meist in der privaten Haftpflicht mitversichert."],
      ["Lohnt sich eine OP-Versicherung für Hunde?", "Für viele Halter ja, weil Operationen schnell mehrere tausend Euro kosten können. Achte auf Wartezeiten, Ausschlüsse und die Erstattung nach GOT-Satz."],
    ],
    sources: [
      { title: "Stiftung Warentest – Hundehaftpflicht im Vergleich", url: "https://www.test.de/Hundehaftpflichtversicherung-Vergleich-4988920-5823642/" },
      { title: "transparent-beraten – Wo die Hundehaftpflicht Pflicht ist", url: "https://www.transparent-beraten.de/hundehaftpflichtversicherung/pflicht/" },
      VZ,
      VET,
    ],
  },

  /* ================= Tiere: Katzen ================= */
  {
    path: "tiere/katzen/gesundes-katzenfutter",
    description: "Gesundes Katzenfutter erkennen: Warum Katzen Fleisch und Taurin brauchen, wie du das Etikett liest, wie viel Wasser wichtig ist und typische Fehler.",
    focusKeyword: "gesundes Katzenfutter",
    linkAnchors: ["gesundes Katzenfutter", "Katzenfutter"],
    markdown: `Katzen sind **echte Fleischfresser**. Anders als Hunde können sie wichtige Nährstoffe nicht selbst aus pflanzlicher Nahrung herstellen. Gesundes **Katzenfutter** muss deshalb auf ihre besonderen Bedürfnisse zugeschnitten sein.

## Was Katzen unbedingt brauchen

- **Tierisches Eiweiß:** die Hauptenergiequelle der Katze.
- **Taurin:** eine Aminosäure, die Katzen kaum selbst bilden. Fehlt sie, drohen Herz- und Augenschäden. Gutes Alleinfutter enthält ausreichend Taurin.
- **Vitamin A und Arachidonsäure:** kommen in tierischen Zutaten vor und müssen über das Futter aufgenommen werden.
- **Wasser:** Katzen stammen von Wüstentieren ab und trinken von Natur aus wenig. Einen großen Teil ihres Wassers nehmen sie über das Futter auf.

## So liest du das Etikett

1. **„Alleinfuttermittel“** – nur dann deckt das Futter alle Nährstoffe. „Ergänzungsfuttermittel“ (z. B. viele Snacks) reicht als Hauptmahlzeit nicht.
2. **Zusammensetzung:** Die Zutaten stehen nach Menge sortiert. Eine klar benannte tierische Quelle sollte vorne stehen.
3. **Offene oder geschlossene Deklaration:** Genaue Prozentangaben („40 % Huhn“) sind transparenter als Sammelbegriffe wie „Fleisch und tierische Nebenerzeugnisse“.
4. **Lebensphase:** Kitten, erwachsene Katzen und Senioren haben unterschiedlichen Bedarf.

Viel Getreide oder Zucker braucht eine Katze nicht. Ein kleiner Kohlenhydratanteil ist in Ordnung, sollte aber nicht im Vordergrund stehen.

## Nass, trocken oder beides?

**Nassfutter** liefert viel Feuchtigkeit und gilt deshalb für die meisten Katzen als gute Basis. **Trockenfutter** ist praktisch, enthält aber kaum Wasser. Eine Mischung funktioniert, wenn deine Katze genug trinkt. Mehr dazu in unseren Ratgebern zu Nassfutter und Trockenfutter für Katzen.

## Typische Fehler

- **Kuhmilch:** Viele erwachsene Katzen vertragen Laktose nicht – Durchfall ist die Folge. Wasser reicht.
- **Hundefutter:** enthält zu wenig Taurin und ist für Katzen ungeeignet.
- **Vegane Ernährung:** für Katzen nicht artgerecht und riskant.
- **Zu viele Leckerlis:** Sie zählen zur Tagesration und fördern Übergewicht.
- **Ständiger Futterwechsel:** Neues Futter immer über einige Tage untermischen.

## Wie viel Futter?

Die Menge auf der Packung ist ein Startwert. Entscheidend sind Gewicht, Alter, Aktivität und ob deine Katze kastriert ist – kastrierte Katzen brauchen oft weniger Energie. Die Rippen sollten fühlbar, aber nicht sichtbar sein. Bei Unsicherheit hilft deine Tierarztpraxis.`,
    faq: [
      ["Was ist das wichtigste bei Katzenfutter?", "Ein Alleinfuttermittel mit hohem Anteil tierischer Zutaten und ausreichend Taurin – passend zur Lebensphase deiner Katze."],
      ["Dürfen Katzen Milch trinken?", "Besser nicht. Viele erwachsene Katzen vertragen keine Laktose. Frisches Wasser ist das richtige Getränk."],
      ["Kann ich meiner Katze Hundefutter geben?", "Nein. Hundefutter enthält zu wenig Taurin und andere Nährstoffe, die Katzen brauchen."],
    ],
    sources: [VET, TVT],
  },
  {
    path: "tiere/katzen/trockenfutter",
    description: "Trockenfutter für Katzen: Vorteile und Nachteile, warum Katzen dabei genug trinken müssen, richtige Menge, Lagerung und Kombination mit Nassfutter.",
    focusKeyword: "Trockenfutter Katze",
    linkAnchors: ["Trockenfutter für Katzen"],
    markdown: `**Trockenfutter** ist bei Katzenhaltern beliebt: Es ist lange haltbar, einfach zu portionieren und kann eine Weile im Napf stehen. Damit es deiner Katze gut tut, solltest du vor allem auf eines achten: **genug Flüssigkeit**.

## Vorteile

- **Praktisch:** einfach zu lagern und abzumessen.
- **Ergiebig:** Die Energie ist konzentriert, die Portionen sind klein.
- **Gut für Futterspiele:** Kroketten lassen sich in Fummelbrettern und Futterbällen verstecken – das beschäftigt Wohnungskatzen.

## Nachteile

- **Kaum Wasser:** Trockenfutter enthält meist nur rund 10 % Feuchtigkeit, Nassfutter dagegen etwa 70 bis 80 %.
- **Schnell überfüttert:** Ein paar Kroketten zu viel summieren sich. Übergewicht ist bei Katzen ein häufiges Problem.
- **Trinkmenge:** Katzen trinken von Natur aus wenig. Bekommen sie nur Trockenfutter, nehmen manche zu wenig Flüssigkeit auf – das kann die Harnwege belasten.

## So fütterst du Trockenfutter richtig

1. **Alleinfuttermittel** passend zur Lebensphase wählen.
2. **Tagesmenge abwiegen** und über den Tag verteilen, statt den Napf ständig nachzufüllen.
3. **Wasser attraktiv machen:** mehrere Wassernäpfe, nicht direkt neben dem Futter, gern ein Trinkbrunnen.
4. **Gewicht kontrollieren** – einmal im Monat wiegen reicht.

## Kombination mit Nassfutter

Viele Fachleute empfehlen, Trockenfutter **mit Nassfutter zu kombinieren** – zum Beispiel morgens und abends Nassfutter und einen kleinen Teil Trockenfutter für Futterspiele. Wichtig: Die Gesamtmenge muss stimmen. Ziehe die Trockenfutter-Menge von der Tagesration ab.

## Lagerung

Trockenfutter **luftdicht, kühl und trocken** lagern – am besten in der Originaltüte in einer verschließbaren Box. So wird das Fett nicht ranzig und Vorratsmilben haben keine Chance. Geöffnete Packungen innerhalb einiger Wochen aufbrauchen.

## Wann zum Tierarzt?

Wenn deine Katze häufig zur Katzentoilette geht, nur kleine Mengen Urin absetzt, beim Urinieren maunzt oder Blut im Urin hat, sofort zur Tierarztpraxis. Bei Katern kann ein Harnröhrenverschluss lebensgefährlich sein.`,
    faq: [
      ["Ist Trockenfutter schlecht für Katzen?", "Nicht grundsätzlich. Entscheidend ist ein vollwertiges Alleinfutter, die richtige Menge und dass deine Katze genug trinkt. Viele Katzen profitieren von einer Kombination mit Nassfutter."],
      ["Wie viel Trockenfutter braucht eine Katze am Tag?", "Das hängt von Gewicht, Alter und Aktivität ab. Die Angabe auf der Packung ist ein Startwert – abwiegen und das Gewicht der Katze regelmäßig kontrollieren."],
      ["Darf Trockenfutter den ganzen Tag im Napf stehen?", "Bei schlanken Katzen, die sich gut einteilen, geht das. Bei Neigung zu Übergewicht besser die abgewogene Tagesmenge auf mehrere Portionen verteilen."],
    ],
    sources: [VET, TVT],
  },
  {
    path: "tiere/katzen/nassfutter",
    description: "Nassfutter für Katzen: Warum der hohe Wassergehalt wichtig ist, wie du die Deklaration liest, richtig portionierst und geöffnete Dosen lagerst.",
    focusKeyword: "Nassfutter Katze",
    linkAnchors: ["Nassfutter für Katzen"],
    markdown: `**Nassfutter** kommt dem natürlichen Beutetier der Katze am nächsten: viel Feuchtigkeit, viel tierisches Eiweiß. Für die meisten Katzen ist es eine sehr gute Basis.

## Warum Nassfutter Katzen gut tut

- **Hoher Wassergehalt** von etwa 70 bis 80 % – ideal für Katzen, die wenig trinken.
- **Schmackhaft** – auch wählerische Katzen fressen es meist gern.
- **Weniger Kalorien pro Gramm** als Trockenfutter, dadurch leichter zu dosieren.

## Nachteile

- Geöffnete Dosen verderben schnell.
- Mehr Verpackung und meist höhere Kosten pro Tag.
- Im Napf trocknet es an – Reste nach etwa einer halben bis einer Stunde wegräumen.

## Deklaration lesen

- **„Alleinfuttermittel“** muss draufstehen, sonst ist es nur eine Ergänzung.
- **Klar benannte Fleischquelle** am Anfang der Zutatenliste.
- **Offene Deklaration** mit Prozentangaben ist transparenter.
- **Zucker oder Karamell** braucht eine Katze nicht.

Die Werte für Rohprotein und Rohfett beziehen sich auf das Futter **mit** Wasser. Willst du Nass- und Trockenfutter vergleichen, rechne auf die Trockensubstanz um: Wert ÷ (100 − Feuchtigkeit) × 100.

## Wie viel und wie oft?

Katzen fressen in der Natur viele kleine Mahlzeiten. Teile die Tagesmenge auf **zwei bis vier Portionen** auf. Die Fütterungsempfehlung der Packung ist ein Startwert – Gewicht und Figur deiner Katze sind der beste Maßstab.

## Lagern

- **Geöffnete Dosen** abgedeckt im Kühlschrank aufbewahren und innerhalb von etwa ein bis zwei Tagen verbrauchen.
- Vor dem Füttern auf **Zimmertemperatur** kommen lassen – kaltes Futter riecht weniger und wird oft verschmäht.
- Näpfe nach jeder Mahlzeit spülen.

## Futterwechsel

Neues Nassfutter über **fünf bis sieben Tage** schrittweise untermischen. Katzen sind oft geprägt auf bestimmte Sorten – Geduld lohnt sich. Frisst deine Katze länger als einen Tag gar nichts, sprich mit deiner Tierarztpraxis: Hungern ist für Katzen gefährlich.`,
    faq: [
      ["Ist Nassfutter besser als Trockenfutter für Katzen?", "Für viele Katzen ja, weil es viel Feuchtigkeit liefert. Wichtig ist aber vor allem, dass es ein vollwertiges Alleinfutter in der richtigen Menge ist."],
      ["Wie lange darf Nassfutter im Napf stehen?", "Am besten nicht länger als etwa eine halbe bis eine Stunde, im Sommer kürzer. Reste danach wegwerfen."],
      ["Warum frisst meine Katze ihr Nassfutter nicht?", "Häufige Gründe sind kaltes Futter aus dem Kühlschrank, ein abrupter Sortenwechsel oder ein unpassender Futterplatz. Frisst sie länger als einen Tag nichts, zum Tierarzt."],
    ],
    sources: [VET, TVT],
  },

  /* ================= KI ================= */
  {
    path: "ki/bildgeneratoren/bildgeneratoren-im-vergleich",
    description: "KI-Bildgeneratoren im Vergleich 2026: Midjourney, ChatGPT, Gemini, Adobe Firefly, FLUX und Stable Diffusion – Stärken, Kosten, Rechte.",
    focusKeyword: "KI Bildgenerator Vergleich",
    linkAnchors: ["Bildgeneratoren im Vergleich", "KI-Bildgeneratoren"],
    markdown: `KI-Bildgeneratoren verwandeln einen Textbefehl – den **Prompt** – in ein Bild. Die Auswahl ist groß, und jedes Tool hat eigene Stärken. Dieser Vergleich zeigt dir, welches Werkzeug zu welchem Zweck passt.

## Die bekanntesten Bildgeneratoren

| Tool | Anbieter | Stärke | Zugang |
|---|---|---|---|
| **Midjourney** | Midjourney | sehr ästhetische, künstlerische Bilder | Abo, kein dauerhaftes Gratis-Angebot |
| **ChatGPT (Bildgenerierung)** | OpenAI | versteht lange Anweisungen, gut für Bearbeitung im Chat | eingeschränkt kostenlos, mehr im Abo |
| **Google Gemini** | Google | schnelle Bearbeitung vorhandener Bilder, konsistente Figuren | eingeschränkt kostenlos, mehr im Abo |
| **Adobe Firefly** | Adobe | auf lizenziertem Material trainiert, in Photoshop und Express integriert | Gratis-Kontingent, mehr mit Adobe-Abo |
| **FLUX** | Black Forest Labs (Freiburg) | präzise Prompt-Umsetzung, lesbare Schrift im Bild | über Partner-Apps und Schnittstellen |
| **Stable Diffusion** | Stability AI & Community | offen, lokal nutzbar, sehr anpassbar | kostenlos lokal, technisches Wissen nötig |
| **Ideogram** | Ideogram | Logos, Poster und Text im Bild | Gratis-Kontingent und Abo |

Die Tools entwickeln sich schnell. Neue Modellversionen erscheinen oft im Abstand weniger Monate – prüfe vor einem Abo, was die aktuelle Version kann.

## Welches Tool für welchen Zweck?

- **Kunstvolle Bilder, Wallpaper, Konzeptkunst:** Midjourney
- **Schnell etwas ausprobieren, im Gespräch verfeinern:** ChatGPT oder Gemini
- **Bilder mit Text (Poster, Thumbnails, Logos-Entwürfe):** Ideogram oder FLUX
- **Kommerzielle Nutzung mit möglichst geringem Rechte-Risiko:** Adobe Firefly
- **Volle Kontrolle, eigene Modelle, Datenschutz:** Stable Diffusion lokal auf dem eigenen PC

## Worauf du beim Vergleich achtest

1. **Bildqualität und Stil** – teste denselben Prompt in mehreren Tools.
2. **Text im Bild** – viele Tools verschreiben sich noch bei Wörtern.
3. **Bearbeitung** – kannst du nur einzelne Bildbereiche ändern?
4. **Kosten** – Gratis-Kontingente sind oft klein, Abos rechnen sich erst bei regelmäßiger Nutzung.
5. **Nutzungsrechte** – darfst du die Bilder kommerziell verwenden?
6. **Datenschutz** – werden deine Eingaben und Uploads für das Training verwendet?

## Rechte und Kennzeichnung

Ob KI-Bilder urheberrechtlich geschützt sind, ist in vielen Ländern noch nicht abschließend geklärt. Verwende **keine geschützten Figuren, Marken oder echten Personen** in Prompts für Bilder, die du veröffentlichst. Die **EU-KI-Verordnung (AI Act)** sieht Transparenzpflichten für KI-generierte Inhalte vor – kennzeichne KI-Bilder deshalb offen, etwa mit „KI-generiert“.

## Tipp für den Einstieg

Starte mit einem Tool, das ein Gratis-Kontingent hat, und lerne den Aufbau guter Prompts: **Motiv, Stil, Licht, Perspektive, Format**. Vorlagen findest du in unseren Bild-Prompts.`,
    faq: [
      ["Welcher KI-Bildgenerator ist der beste?", "Das hängt vom Zweck ab: Midjourney punktet bei der Ästhetik, ChatGPT und Gemini beim Verfeinern im Gespräch, Ideogram und FLUX bei Text im Bild und Adobe Firefly bei der kommerziellen Nutzung."],
      ["Gibt es kostenlose KI-Bildgeneratoren?", "Ja. ChatGPT, Gemini, Adobe Firefly und Ideogram bieten begrenzte Gratis-Kontingente. Stable Diffusion kann man kostenlos lokal nutzen, braucht dafür aber einen leistungsfähigen PC."],
      ["Muss ich KI-Bilder kennzeichnen?", "Die EU-KI-Verordnung sieht Transparenzpflichten vor, und viele Plattformen verlangen eine Kennzeichnung. Eine offene Angabe wie „KI-generiert“ ist auf jeden Fall empfehlenswert."],
    ],
    sources: [
      { title: "Adobe Firefly – Übersicht", url: "https://www.adobe.com/de/products/firefly.html" },
      { title: "Black Forest Labs – FLUX", url: "https://bfl.ai/" },
      { title: "EU-KI-Verordnung (AI Act) – Europäische Kommission", url: "https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai" },
    ],
  },

  /* ================= Tools & Apps ================= */
  {
    path: "tools-apps/canva-alternativen/kostenlose-canva-alternativen",
    description: "Kostenlose Canva-Alternativen: Adobe Express, Affinity, Kittl, Photopea, GIMP, Inkscape und Penpot – was die Gratis-Versionen wirklich können.",
    focusKeyword: "kostenlose Canva Alternativen",
    linkAnchors: ["kostenlose Canva-Alternativen", "Canva-Alternativen"],
    markdown: `**Canva** ist beliebt, weil man damit ohne Designkenntnisse schnell Social-Media-Posts, Flyer und Präsentationen gestaltet. Viele Funktionen und Vorlagen gibt es aber nur im Pro-Abo. Diese **kostenlosen Alternativen** lohnen einen Blick.

## Die Alternativen im Überblick

### Adobe Express
Die direkte Konkurrenz zu Canva: Vorlagen für Social Media, Flyer und Videos, Schriften, Stockfotos und einfache KI-Funktionen. Die **Gratis-Version** ist großzügig, Premium-Vorlagen und mehr KI-Kontingent kosten extra.
**Gut für:** Social-Media-Grafiken, kurze Videos, Einsteiger.

### Affinity
Die professionellen Programme für Fotobearbeitung, Vektorgrafik und Layout. Affinity gehört seit 2024 zu Canva und ist inzwischen **kostenlos nutzbar** – einzelne KI-Funktionen sind an ein Canva-Abo gebunden.
**Gut für:** alle, die mehr Kontrolle wollen als in einem Vorlagen-Editor.

### Kittl
Online-Editor mit Schwerpunkt auf **Typografie, Logos und Print-Designs** (z. B. T-Shirts). Die Gratis-Version hat Einschränkungen bei Export und Vorlagen.
**Gut für:** Merch, Logos, auffällige Schriftzüge.

### Photopea
Bildbearbeitung im Browser, die stark an Photoshop erinnert und sogar PSD-Dateien öffnet. **Kostenlos mit Werbung.**
**Gut für:** Fotobearbeitung ohne Installation.

### GIMP und Krita
Freie Programme für Fotobearbeitung (GIMP) und digitales Malen (Krita). **Komplett kostenlos**, Open Source, aber ohne Vorlagen-Bibliothek.
**Gut für:** Bildbearbeitung und Illustration.

### Inkscape
Freies Vektorgrafik-Programm, ähnlich wie Illustrator. **Kostenlos und Open Source.**
**Gut für:** Logos, Icons, Plotter- und Laserdateien.

### Penpot
Open-Source-Werkzeug für **Webdesign und App-Oberflächen**, im Browser oder selbst gehostet.
**Gut für:** Webseiten-Entwürfe und UI-Design im Team.

## Was „kostenlos“ bedeutet

- **Wasserzeichen** oder geringere Exportauflösung bei manchen Tools
- **Premium-Vorlagen** und Stockfotos oft nur im Abo
- **KI-Funktionen** meist mit begrenztem Kontingent
- **Werbung** bei manchen Browser-Tools

## Rechte beachten

Schriften, Fotos und Vorlagen haben eigene Lizenzen. Prüfe vor allem bei **kommerzieller Nutzung** (z. B. Merch oder Werbung), ob die Elemente dafür freigegeben sind. Eigene Fotos und freie Schriften (z. B. aus Google Fonts) sind auf der sicheren Seite.

Welche Alternative zu welchem Zweck passt, zeigt dir unser Vergleich der Canva-Alternativen.`,
    faq: [
      ["Was ist die beste kostenlose Canva-Alternative?", "Für Vorlagen und Social Media ist Adobe Express am nächsten an Canva. Für mehr Kontrolle eignen sich Affinity, GIMP oder Inkscape."],
      ["Ist Affinity wirklich kostenlos?", "Affinity ist seit der Übernahme durch Canva kostenlos nutzbar. Einzelne KI-Funktionen setzen ein Canva-Abo voraus – die aktuellen Bedingungen stehen beim Anbieter."],
      ["Darf ich Gratis-Vorlagen kommerziell nutzen?", "Das hängt von der Lizenz ab. Prüfe vor dem Verkauf von Produkten oder bei Werbung die Lizenzbedingungen für Vorlagen, Schriften und Fotos."],
    ],
    sources: [
      { title: "Adobe Express", url: "https://www.adobe.com/de/express/" },
      { title: "Affinity", url: "https://www.affinity.studio/" },
      { title: "Inkscape", url: "https://inkscape.org/de/" },
      { title: "GIMP", url: "https://www.gimp.org/" },
    ],
  },
  {
    path: "tools-apps/canva-alternativen/canva-alternativen-im-vergleich",
    description: "Canva-Alternativen im Vergleich: Adobe Express, Affinity, Kittl, Figma, Photopea und VistaCreate nach Einsatzzweck, Kosten und Lernaufwand.",
    focusKeyword: "Canva Alternativen Vergleich",
    linkAnchors: ["Canva-Alternativen im Vergleich"],
    markdown: `Ob Social-Media-Grafik, Logo oder App-Design: Für jede Aufgabe gibt es ein Tool, das besser passt als ein Allrounder. Dieser **Vergleich** hilft dir bei der Wahl der richtigen Canva-Alternative.

## Vergleichstabelle

| Tool | Am besten für | Lernaufwand | Kosten | Läuft auf |
|---|---|---|---|---|
| **Canva** (Referenz) | alles mit Vorlagen | sehr gering | Gratis + Pro-Abo | Browser, Apps |
| **Adobe Express** | Social Media, kurze Videos | sehr gering | Gratis + Premium | Browser, Apps |
| **VistaCreate** | Social-Media-Vorlagen, Animationen | gering | Gratis + Pro | Browser, Apps |
| **Kittl** | Logos, Typografie, Merch | gering | Gratis + Abo | Browser |
| **Figma** | Web- und App-Design, Teamarbeit | mittel | Gratis-Starter + Abo | Browser, Desktop |
| **Photopea** | Fotobearbeitung im Browser | mittel | gratis mit Werbung | Browser |
| **Affinity** | professionelle Bild-, Vektor- und Layoutarbeit | mittel bis hoch | kostenlos nutzbar | Desktop |

## So triffst du die Wahl

### Du willst schnell schöne Posts?
**Adobe Express** oder **VistaCreate**. Beide setzen wie Canva auf Vorlagen, Drag-and-drop und fertige Animationen.

### Du gestaltest Merch, Logos oder Schriftzüge?
**Kittl** ist auf Typografie und Druckvorlagen spezialisiert. Für saubere Vektordateien eignen sich Affinity oder das kostenlose Inkscape.

### Du entwirfst Webseiten oder Apps?
**Figma** ist Standard für Oberflächen-Design und Zusammenarbeit im Team. Eine quelloffene Alternative ist Penpot.

### Du bearbeitest vor allem Fotos?
**Photopea** im Browser oder **Affinity** auf dem Desktop.

## Kriterien, die oft übersehen werden

1. **Export:** Welche Formate (PNG, SVG, PDF für Druck mit Beschnitt)?
2. **Markenkit:** Lassen sich eigene Farben, Logos und Schriften speichern?
3. **Teamfunktionen:** Kommentare, Freigaben, gemeinsame Ordner.
4. **Offline-Nutzung:** Browser-Tools brauchen Internet.
5. **Datenschutz:** Wo liegen deine Dateien? Für Firmen wichtig.
6. **Lizenzen** für Vorlagen, Fotos und Schriften bei kommerzieller Nutzung.

## Fazit

Für die meisten, die Canva ersetzen wollen, ist **Adobe Express** der einfachste Umstieg. Wer mehr Kontrolle möchte, kombiniert ein Vorlagen-Tool mit einem Profi-Programm wie **Affinity**. Für Web- und App-Design führt kaum ein Weg an **Figma** vorbei.

Komplett kostenlose Optionen haben wir in den kostenlosen Canva-Alternativen gesammelt.`,
    faq: [
      ["Welche Canva-Alternative ist am einfachsten?", "Adobe Express und VistaCreate funktionieren sehr ähnlich wie Canva und sind ohne Vorkenntnisse nutzbar."],
      ["Ist Figma eine Canva-Alternative?", "Für Web- und App-Design ja. Für schnelle Social-Media-Posts mit Vorlagen ist Figma aber aufwendiger als Canva."],
      ["Welche Alternative eignet sich für Druckdateien?", "Für professionelle Druck-PDFs eignen sich Affinity oder Adobe-Programme. Prüfe beim Export Beschnitt, Auflösung und Farbprofil."],
    ],
    sources: [
      { title: "Adobe Express", url: "https://www.adobe.com/de/express/" },
      { title: "Figma", url: "https://www.figma.com/de-de/" },
      { title: "Kittl", url: "https://www.kittl.com/" },
    ],
  },
  {
    path: "tools-apps/keyword-tools/kostenlose-keyword-tools",
    description: "Kostenlose Keyword-Tools für SEO und YouTube: Google Keyword-Planer, Search Console, Google Trends, AnswerThePublic, Ahrefs Keyword Generator und mehr.",
    focusKeyword: "kostenlose Keyword Tools",
    linkAnchors: ["kostenlose Keyword-Tools", "Keyword-Recherche"],
    markdown: `Gute Inhalte beginnen mit einer Frage: **Wonach suchen Menschen wirklich?** Keyword-Tools zeigen dir Suchbegriffe, Fragen und Trends. Viele davon sind kostenlos – zumindest in einer Basisversion.

## Die besten kostenlosen Keyword-Tools

### Google Search Console
Zeigt dir, **bei welchen Suchanfragen deine eigene Website** bereits erscheint – mit Klicks, Impressionen und Position. Das ist die wertvollste Datenquelle überhaupt, weil sie echte Daten aus der Google-Suche liefert.
**Voraussetzung:** eigene, bestätigte Website.

### Google Keyword-Planer
Teil von Google Ads. Liefert Keyword-Ideen und **Suchvolumen-Spannen**. Genaue Zahlen gibt es meist nur mit aktiven Werbekampagnen, für die Ideensuche reicht die kostenlose Nutzung.
**Voraussetzung:** Google-Ads-Konto (es muss keine Anzeige laufen).

### Google Trends
Zeigt, wie sich das **Interesse an einem Begriff über die Zeit** entwickelt – auch nach Ländern und Regionen. Perfekt für saisonale Themen wie „Freizeitpark Tickets“ oder „Halloween Kostüm“.

### Google-Suche selbst
- **Autovervollständigung:** Tippe den Anfang ein und notiere die Vorschläge.
- **„Ähnliche Fragen“:** zeigt, was Nutzer zusätzlich wissen wollen.
- **„Ähnliche Suchanfragen“** am Ende der Seite.

### AnswerThePublic und AlsoAsked
Sammeln **Fragen** rund um ein Thema („wie“, „warum“, „was“). Ideal für FAQ-Bereiche. Kostenlos mit wenigen Abfragen pro Tag.

### Ahrefs Keyword Generator und Semrush (Gratis-Version)
Die großen SEO-Suiten bieten **eingeschränkte Gratis-Abfragen** mit Suchvolumen und Schwierigkeit. Für den Einstieg reicht das oft.

### Für YouTube
Die **YouTube-Suchvorschläge** und der Tab **„Recherche“ in YouTube Studio** zeigen, wonach Zuschauer suchen. Erweiterungen wie vidIQ oder TubeBuddy haben Gratis-Versionen.

## So gehst du vor

1. **Seed-Keyword** festlegen, z. B. „Hundefutter“.
2. Mit Google-Vorschlägen und AnswerThePublic **Varianten und Fragen** sammeln.
3. Im Keyword-Planer oder einem Gratis-Tool **Suchvolumen** grob prüfen.
4. Die **Suchergebnisse anschauen:** Welche Art von Seite rankt (Ratgeber, Shop, Video)?
5. Pro Seite **ein Hauptthema** wählen und verwandte Begriffe natürlich einbauen.
6. Nach einigen Wochen in der **Search Console** prüfen, wofür die Seite tatsächlich gefunden wird.

## Typische Fehler

- Nur auf große Keywords mit hohem Suchvolumen zielen – **Longtail-Keywords** (längere, genauere Suchanfragen) sind leichter zu erreichen.
- Keywords unnatürlich oft wiederholen. Google bewertet heute vor allem, ob die Seite die Frage **wirklich beantwortet**.
- Die Suchintention ignorieren: Wer „kaufen“ sucht, will keinen langen Ratgeber.

Kostenpflichtige Profi-Tools vergleichen wir unter „Keyword-Tools im Vergleich“.`,
    faq: [
      ["Welches kostenlose Keyword-Tool ist das beste?", "Für die eigene Website ist die Google Search Console am wertvollsten, weil sie echte Suchdaten liefert. Für neue Ideen eignen sich Google Trends, die Google-Vorschläge und AnswerThePublic."],
      ["Ist der Google Keyword-Planer kostenlos?", "Ja, du brauchst nur ein Google-Ads-Konto. Ohne laufende Kampagnen zeigt er Suchvolumen allerdings meist nur als grobe Spanne."],
      ["Was sind Longtail-Keywords?", "Längere, spezifische Suchanfragen wie „Trockenfutter für ältere Katzen mit Nierenproblemen“. Sie haben weniger Suchvolumen, aber weniger Konkurrenz und eine klarere Absicht."],
    ],
    sources: [
      { title: "Google Search Console", url: "https://search.google.com/search-console/about" },
      { title: "Google Trends", url: "https://trends.google.de/" },
      { title: "Google Search Central – SEO-Leitfaden für Einsteiger", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de" },
    ],
  },
  {
    path: "tools-apps/keyword-tools/keyword-tools-im-vergleich",
    description: "Keyword-Tools im Vergleich: Semrush, Ahrefs, Sistrix, Ubersuggest und Google-Tools nach Datenqualität, DACH-Daten, Funktionen und Preis-Leistung.",
    focusKeyword: "Keyword Tools Vergleich",
    linkAnchors: ["Keyword-Tools im Vergleich"],
    markdown: `Wer regelmäßig Inhalte für Google oder YouTube erstellt, kommt mit Gratis-Tools irgendwann an Grenzen. Dieser **Vergleich** zeigt, wofür sich die bekannten Profi-Tools eignen – und ob sich ein Abo für dich lohnt.

## Vergleichstabelle

| Tool | Stärke | Daten für DACH | Für wen | Kosten |
|---|---|---|---|---|
| **Google Search Console** | echte Daten der eigenen Seite | ja | alle Websitebetreiber | kostenlos |
| **Google Keyword-Planer** | Ideen, Suchvolumen-Spannen | ja | Einsteiger, Werbetreibende | kostenlos |
| **Semrush** | All-in-one: Keywords, Wettbewerb, Werbung | gut | Profis, Agenturen | Abo |
| **Ahrefs** | Backlinks, Keyword-Schwierigkeit | gut | SEO-Profis | Abo |
| **Sistrix** | Sichtbarkeitsindex, sehr starke DACH-Daten | sehr gut | deutschsprachige Websites | Abo |
| **Ubersuggest** | einfache Bedienung | mittel | Einsteiger, kleine Seiten | günstiges Abo |
| **vidIQ / TubeBuddy** | YouTube-Keywords und Tags | mittel | YouTube-Creator | Gratis + Abo |

## Was die Tools unterscheidet

### Datenqualität
Kein externes Tool kennt die exakten Google-Zahlen. Suchvolumen sind **Schätzungen**. Für Deutschland, Österreich und die Schweiz liefern Tools mit großer DACH-Datenbasis (z. B. Sistrix) oft verlässlichere Werte.

### Keyword-Schwierigkeit
Die meisten Tools zeigen einen Wert, wie schwer es ist, für ein Keyword auf Seite 1 zu kommen. Jedes Tool rechnet anders – **vergleiche nur Werte innerhalb desselben Tools**.

### Wettbewerbsanalyse
Profi-Tools zeigen, **für welche Keywords Konkurrenten ranken**. Das ist oft die schnellste Quelle für neue Themenideen.

### Rank-Tracking
Wöchentliche oder tägliche Kontrolle, auf welcher Position deine Seiten stehen.

## Lohnt sich ein Abo?

**Ja, wenn …**
- du mehrere Artikel pro Woche veröffentlichst,
- du mit der Website Geld verdienst (Affiliate, Werbung, Kunden),
- du Konkurrenten systematisch analysieren willst.

**Eher nicht, wenn …**
- du gerade erst startest – dann reichen Search Console, Keyword-Planer und Google-Vorschläge,
- du nur gelegentlich schreibst.

Viele Anbieter haben **Testphasen**. Plane die Recherche für mehrere Monate vor und nutze den Test gezielt.

## Unsere Empfehlung

1. **Basis für alle:** Google Search Console und Keyword-Planer.
2. **Deutschsprachige Website mit Ambitionen:** Sistrix oder Semrush.
3. **Fokus auf Backlinks:** Ahrefs.
4. **YouTube:** vidIQ oder TubeBuddy, ergänzt durch YouTube Studio.

Gratis-Tools für den Einstieg findest du unter „Kostenlose Keyword-Tools“.`,
    faq: [
      ["Welches Keyword-Tool ist das beste für Deutschland und Österreich?", "Sistrix ist für deutschsprachige Märkte besonders stark. Semrush und Ahrefs bieten ebenfalls gute DACH-Daten und mehr internationale Funktionen."],
      ["Sind die Suchvolumen in Keyword-Tools genau?", "Nein, es sind Schätzungen. Echte Zahlen für deine eigene Website liefert nur die Google Search Console."],
      ["Brauche ich als Anfänger ein kostenpflichtiges Tool?", "Meist nicht. Search Console, Keyword-Planer, Google Trends und die Google-Vorschläge reichen für den Start."],
    ],
    sources: [
      { title: "Google Search Console", url: "https://search.google.com/search-console/about" },
      { title: "Sistrix", url: "https://www.sistrix.de/" },
      { title: "Semrush", url: "https://de.semrush.com/" },
      { title: "Ahrefs", url: "https://ahrefs.com/de" },
    ],
  },

  /* ================= Finanzen ================= */
  {
    path: "finanzen-sparen/budget/budget-apps",
    description: "Budget-Apps im Überblick: Funktionen, Bankanbindung, Datenschutz und welche Haushaltsbuch-App zu dir passt – plus die Budget-Funktionen deiner Bank.",
    focusKeyword: "Budget App",
    linkAnchors: ["Budget-Apps", "Haushaltsbuch-App"],
    markdown: `Ein Budget funktioniert nur, wenn du weißt, **wohin dein Geld fließt**. Budget-Apps nehmen dir das Rechnen ab: Sie sortieren Ausgaben, zeigen Verträge und warnen, wenn eine Kategorie überzogen ist.

## Drei Arten von Budget-Apps

### 1. Apps mit Bankanbindung
Sie lesen deine Kontobewegungen automatisch ein (in der EU über die **PSD2-Schnittstelle** der Banken) und ordnen sie Kategorien zu. Beispiele aus dem deutschsprachigen Raum sind **Finanzguru** oder **Outbank**, auf dem Mac **MoneyMoney**.
**Vorteil:** kaum Aufwand. **Nachteil:** Du gibst einem Drittanbieter Einblick in deine Kontodaten.

### 2. Manuelle Haushaltsbuch-Apps
Du trägst Ausgaben selbst ein, z. B. mit **Money Manager** oder **Monefy**.
**Vorteil:** keine Bankdaten nötig, du wirst dir jeder Ausgabe bewusst. **Nachteil:** Disziplin erforderlich.

### 3. Methoden-Apps
Apps wie **YNAB** („You Need A Budget“) setzen auf eine feste Methode: Jeder Euro bekommt eine Aufgabe, bevor er ausgegeben wird.
**Vorteil:** sehr wirksam, wenn man dranbleibt. **Nachteil:** meist kostenpflichtig, Einarbeitung nötig.

## Budget-Funktionen deiner Bank

Viele Banking-Apps können inzwischen selbst **Ausgaben kategorisieren** und Monatsübersichten anzeigen – etwa George bei Erste Bank und Sparkasse in Österreich oder die Apps vieler deutscher Sparkassen und Direktbanken. Prüfe zuerst, was deine Bank-App kann. Das ist oft die datensparsamste Lösung.

## Worauf du achten solltest

| Kriterium | Frage |
|---|---|
| **Datenschutz** | Wo werden Daten gespeichert (EU)? Werden sie für Werbung genutzt? |
| **Sicherheit** | Zwei-Faktor-Anmeldung, App-Sperre per PIN oder Fingerabdruck? |
| **Kosten** | Gratis mit Werbung, Einmalkauf oder Abo? |
| **Kategorien** | Lassen sie sich anpassen? |
| **Mehrere Konten** | Auch Partnerkonto, Kreditkarte, Depot? |
| **Export** | Kannst du deine Daten als CSV sichern? |

## So startest du mit deinem Budget

1. **Einnahmen** des Monats notieren.
2. **Fixkosten** erfassen: Miete, Versicherungen, Abos, Handy.
3. **Variable Ausgaben** einen Monat lang beobachten.
4. Ein Ziel setzen, z. B. **10 % sparen** oder eine bekannte Regel wie 50/30/20 (Bedarf/Wünsche/Sparen) als Orientierung nutzen.
5. Einmal pro Woche fünf Minuten in die App schauen.

Viele Apps finden außerdem **vergessene Abos** – oft der schnellste Weg, jeden Monat Geld zu sparen.

*Dieser Ratgeber ist keine Finanzberatung. Prüfe bei Apps mit Bankzugang die Datenschutzerklärung genau.*`,
    faq: [
      ["Sind Budget-Apps mit Bankanbindung sicher?", "Seriöse Anbieter nutzen die gesetzlich geregelte PSD2-Schnittstelle und verschlüsseln die Daten. Du gibst trotzdem einem Drittanbieter Einblick – lies die Datenschutzerklärung und nutze Zwei-Faktor-Anmeldung."],
      ["Gibt es kostenlose Budget-Apps?", "Ja, viele Apps haben eine kostenlose Basisversion. Auch die Banking-App deiner Bank bietet oft schon eine Ausgabenübersicht."],
      ["Was ist die 50/30/20-Regel?", "Eine Faustregel: etwa 50 % des Nettoeinkommens für Notwendiges, 30 % für Wünsche und 20 % zum Sparen. Sie ist eine Orientierung, kein starres Gesetz."],
    ],
    sources: [VZ, AK],
  },
  {
    path: "finanzen-sparen/finanz-basics/girokonto-vergleichen",
    description: "Girokonto vergleichen: Kontoführungsgebühren, Kartenkosten, Dispozinsen, Bargeld und Basiskonto – mit Checkliste und offiziellen Vergleichsrechnern.",
    focusKeyword: "Girokonto vergleichen",
    linkAnchors: ["Girokonto vergleichen", "Girokonto"],
    markdown: `Das **Girokonto** ist die Basis aller Finanzen – und kann unnötig viel Geld kosten. Ein Vergleich lohnt sich, denn zwischen kostenlosen Konten und Konten mit vielen Einzelgebühren liegen schnell **mehr als 100 Euro pro Jahr**.

## Diese Kosten solltest du vergleichen

| Kostenpunkt | Worauf achten |
|---|---|
| **Kontoführung** | monatliche Grundgebühr – gibt es Bedingungen wie Mindestgeldeingang? |
| **Debitkarte** | Jahresgebühr für Debit- oder Girocard |
| **Kreditkarte** | inklusive oder gegen Aufpreis? |
| **Bargeld** | wie oft kostenlos abheben – im Inland und im Ausland? |
| **Überweisungen** | beleglose Überweisungen sollten kostenlos sein |
| **Dispozinsen** | Zinsen bei Überziehung – oft sehr hoch |
| **Fremdwährung** | Gebühren bei Kartenzahlung außerhalb des Euroraums |

## Filialbank oder Direktbank?

- **Filialbanken** bieten persönliche Beratung und Einzahlungen am Schalter, verlangen aber häufiger Kontoführungsgebühren.
- **Direktbanken und Smartphone-Banken** sind oft günstiger oder kostenlos, Bargeld bekommst du über Automaten oder an der Supermarktkasse.

Überlege, wie oft du wirklich eine Filiale brauchst.

## Gesetzliche Hilfen

- **Entgeltinformation:** Banken in der EU müssen vor Vertragsabschluss eine standardisierte **Entgeltinformation** mit allen Gebühren aushändigen. Damit lassen sich Konten direkt vergleichen. Kostenlos geht das in Österreich mit dem Bankenrechner der Arbeiterkammer.
- **Deutschland:** Nach dem Zahlungskontengesetz gibt es zertifizierte Vergleichswebsites. Einen unabhängigen Vergleich bietet auch die Stiftung Warentest.
- **Österreich:** Die Arbeiterkammer betreibt einen kostenlosen **Bankenrechner** für Kontopakete.
- **Basiskonto:** In der EU hat jede Person mit rechtmäßigem Aufenthalt Anspruch auf ein Konto mit Grundfunktionen – auch ohne festen Wohnsitz oder bei schlechter Bonität.

## Kontowechsel – einfacher als gedacht

Banken müssen beim **Kontowechsel helfen**: Auf Wunsch informiert die neue Bank Arbeitgeber und Zahlungspartner und übernimmt Daueraufträge. Trotzdem:

1. Neues Konto eröffnen.
2. Kontowechselservice nutzen oder Zahlungspartner selbst informieren.
3. Altes Konto noch **ein bis zwei Monate parallel** laufen lassen.
4. Erst dann kündigen.

## Checkliste

- [ ] Grundgebühr und Bedingungen geprüft
- [ ] Kartengebühren verglichen
- [ ] Bargeldversorgung passt zu meinem Alltag
- [ ] Dispozins notiert (Überziehung möglichst vermeiden)
- [ ] Einlagensicherung im Heimatland vorhanden
- [ ] App und Sicherheit (Zwei-Faktor-Freigabe) passen

*Dieser Ratgeber ist keine Finanzberatung. Konditionen ändern sich häufig – maßgeblich ist die Entgeltinformation der Bank.*`,
    faq: [
      ["Gibt es noch kostenlose Girokonten?", "Ja, vor allem bei Direkt- und Smartphone-Banken. Achte aber auf Bedingungen wie einen Mindestgeldeingang und auf Kosten für Karten oder Bargeld."],
      ["Wie vergleiche ich Girokonten am besten?", "Mit der standardisierten Entgeltinformation der Banken und unabhängigen Vergleichen, etwa von Stiftung Warentest in Deutschland oder dem Bankenrechner der Arbeiterkammer in Österreich."],
      ["Was ist ein Basiskonto?", "Ein Girokonto mit Grundfunktionen, auf das in der EU jede Person mit rechtmäßigem Aufenthalt Anspruch hat – auch bei schlechter Bonität."],
    ],
    sources: [
      { title: "Stiftung Warentest – Geld und Banken", url: "https://www.test.de/" },
      { title: "Arbeiterkammer – Bankenrechner", url: "https://www.bankenrechner.at/" },
      VZ,
    ],
  },
];
