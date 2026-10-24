import type { FillPage } from "../types";

const OPENAI = { title: "OpenAI – ChatGPT Hilfe und Nutzungsrichtlinien", url: "https://help.openai.com/" };
const ANTHROPIC = { title: "Anthropic – Claude Dokumentation und Hilfe", url: "https://support.claude.com/" };
const GOOGLE = { title: "Google – Gemini Hilfe", url: "https://support.google.com/gemini/" };
const GSEO = { title: "Google Search Central – Leitfaden zu KI-generierten Inhalten", url: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" };
const AIACT = { title: "Europäische Kommission – KI-Verordnung (AI Act)", url: "https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai" };
const DSB = { title: "Datenschutzbehörde Österreich", url: "https://www.dsb.gv.at/" };
const BFDI = { title: "Der Bundesbeauftragte für den Datenschutz (BfDI)", url: "https://www.bfdi.bund.de/" };
const YT = { title: "YouTube-Hilfe – Creator", url: "https://support.google.com/youtube/" };
const YTPP = { title: "YouTube-Partnerprogramm – Voraussetzungen", url: "https://support.google.com/youtube/answer/72851" };

export const kiCreator: FillPage[] = [
  /* ================= KI ================= */
  {
    path: "ki/chatgpt/seo",
    description: "ChatGPT für SEO nutzen: Keyword-Ideen, Gliederungen, Meta-Beschreibungen und FAQ – mit Prompt-Vorlagen und den Grenzen, die du kennen musst.",
    markdown: `**ChatGPT** kann bei vielen SEO-Aufgaben Zeit sparen. Es ersetzt aber weder echte Suchdaten noch Fachwissen. So nutzt du es sinnvoll.

## Wofür ChatGPT bei SEO hilft

- **Themenideen und Suchintentionen** sammeln
- **Gliederungen** für Artikel entwerfen
- **Meta-Beschreibungen** und Titel-Varianten formulieren
- **FAQ-Fragen** aus Kundensicht ableiten
- **Strukturierte Daten** (Schema.org) als Entwurf erstellen
- Texte **vereinfachen** oder umschreiben

## Wofür nicht

- **Suchvolumen und Wettbewerb:** ChatGPT kennt keine aktuellen Suchdaten. Dafür brauchst du Keyword-Tools.
- **Fakten ungeprüft übernehmen:** KI kann sich irren.
- **Massenhaft Texte ohne Mehrwert:** Google bewertet Inhalte nach Qualität und Nutzen, nicht nach ihrer Herkunft – reine Masseninhalte ohne Mehrwert können als Spam eingestuft werden.

## Prompt-Vorlagen

- „Nenne 15 Fragen, die Menschen zum Thema [Thema] haben, sortiert nach Suchintention (informativ, kommerziell, transaktional).“
- „Erstelle eine Gliederung mit H2- und H3-Überschriften für einen Ratgeber zu [Keyword] für [Zielgruppe].“
- „Schreibe 5 Meta-Beschreibungen mit 140 bis 155 Zeichen für eine Seite über [Thema]. Aktiv formuliert, mit Nutzenversprechen.“
- „Formuliere diesen Absatz verständlicher für Einsteiger, ohne Fachbegriffe zu verlieren: [Text]“

## Der richtige Workflow

1. Keywords mit einem Tool recherchieren.
2. ChatGPT für Gliederung und Ideen nutzen.
3. Selbst schreiben bzw. stark überarbeiten – mit eigener Erfahrung.
4. Fakten prüfen, Quellen ergänzen.
5. Ergebnisse in der Search Console beobachten.

Passende Werkzeuge findest du bei unseren Keyword-Tools.`,
    faq: [
      ["Bestraft Google KI-Texte?", "Google bewertet Inhalte nach Qualität und Nutzen, nicht danach, wie sie erstellt wurden. Massenhaft erzeugte Inhalte ohne Mehrwert verstoßen aber gegen die Spam-Richtlinien."],
      ["Kann ChatGPT Suchvolumen anzeigen?", "Nein, ChatGPT hat keine verlässlichen aktuellen Suchdaten. Dafür eignen sich Keyword-Tools."],
    ],
    sources: [GSEO, OPENAI],
  },
  {
    path: "ki/chatgpt/youtube",
    description: "ChatGPT für YouTube: Videoideen, Skripte, Titel, Beschreibungen und Kapitel mit KI erstellen – Prompt-Vorlagen und Tipps für authentische Videos.",
    markdown: `Für YouTube-Creator ist **ChatGPT** ein praktischer Assistent – von der ersten Idee bis zur Videobeschreibung. Deine Persönlichkeit kann es aber nicht ersetzen.

## Einsatzbereiche

- **Videoideen** für deine Nische finden
- **Skripte** und Sprechtexte strukturieren
- **Titel und Thumbnail-Texte** testen
- **Beschreibungen, Kapitel und Hashtags**
- **Kommentare** auswerten und Fragen für neue Videos sammeln

## Prompt-Vorlagen

- „Ich habe einen YouTube-Kanal über [Thema] für [Zielgruppe]. Schlage 20 Videoideen vor, die typische Probleme meiner Zuschauer lösen.“
- „Schreibe einen Hook für die ersten 15 Sekunden eines Videos über [Thema]. Neugierig machen, ohne zu übertreiben.“
- „Erstelle eine Skript-Gliederung für ein 8-minütiges Video: Hook, Problem, 3 Lösungsschritte, Fazit, Call-to-Action.“
- „Gib mir 10 Titelvarianten unter 60 Zeichen für dieses Video: [Zusammenfassung].“
- „Erstelle aus diesem Transkript Kapitelmarken mit Zeitstempeln: [Transkript]“

## Authentisch bleiben

- **Eigene Erfahrungen** und Meinungen einbauen – das unterscheidet dich.
- **In deiner Sprache sprechen:** KI-Skripte laut lesen und anpassen.
- **Keine Clickbait-Versprechen**, die das Video nicht hält.

## Kennzeichnung

YouTube verlangt eine Offenlegung, wenn realistisch wirkende Inhalte mit KI verändert oder erzeugt wurden. Prüfe die aktuellen Richtlinien in YouTube Studio.

Mehr Tipps findest du bei „YouTube-Kanal starten“ und „Videoideen finden“.`,
    faq: [
      ["Darf ich KI-Skripte für YouTube nutzen?", "Ja. Wichtig ist, dass der Inhalt Mehrwert bietet und du realistisch wirkende KI-Inhalte gemäß den YouTube-Richtlinien offenlegst."],
      ["Kann ChatGPT Thumbnails erstellen?", "Mit Bildfunktionen können Entwürfe entstehen. Für klickstarke Thumbnails helfen aber Design-Tools und eigene Fotos."],
    ],
    sources: [YT, OPENAI],
  },
  {
    path: "ki/chatgpt/blogging",
    description: "ChatGPT fürs Bloggen: Themenfindung, Gliederung, Rohentwurf und Überarbeitung – so nutzt du KI als Schreibassistent, ohne deine eigene Stimme zu verlieren.",
    markdown: `**ChatGPT** kann Bloggerinnen und Bloggern viel Arbeit abnehmen – vor allem bei Struktur und Formulierung. Die besten Blogartikel entstehen aber, wenn KI unterstützt und der Mensch schreibt.

## Ein bewährter Ablauf

1. **Thema und Zielgruppe** festlegen.
2. **Fragen sammeln:** „Welche Fragen hat [Zielgruppe] zu [Thema]?“
3. **Gliederung erstellen** lassen und anpassen.
4. **Eigene Notizen** und Erfahrungen zu jedem Abschnitt schreiben.
5. **Formulieren lassen:** „Mach aus meinen Notizen einen flüssigen Absatz in lockerem Ton.“
6. **Überarbeiten:** Ton, Fakten, Beispiele, Länge.
7. **Titel und Meta-Beschreibung** variieren lassen.

## Hilfreiche Prompts

- „Hier ist mein Rohtext. Kürze ihn um 20 %, ohne Inhalt zu verlieren.“
- „Finde unklare Stellen und schlage einfachere Formulierungen vor.“
- „Schreibe drei Einleitungen in unterschiedlichen Stilen: persönlich, sachlich, mit Frage.“
- „Erstelle eine FAQ mit fünf Fragen zu diesem Artikel.“

## Deine Stimme behalten

Gib ChatGPT Beispiele deiner bisherigen Texte und bitte es, den Stil zu treffen. Lies alles laut – klingt es nach dir?

## Fakten und Quellen

ChatGPT kann Fakten erfinden („halluzinieren“). Prüfe Zahlen, Zitate und Daten immer mit verlässlichen Quellen und verlinke sie.

## Transparenz

Viele Leser schätzen es, wenn klar ist, wie ein Text entstanden ist. Ein kurzer Hinweis zur KI-Unterstützung schafft Vertrauen.`,
    faq: [
      ["Kann ich mit ChatGPT komplette Blogartikel schreiben?", "Technisch ja, aber ohne eigene Erfahrung, Prüfung und Überarbeitung fehlen oft Tiefe und Genauigkeit."],
      ["Erkennt Google KI-Texte?", "Entscheidend für Google ist die Qualität. Hilfreiche, geprüfte Inhalte können gut ranken – egal, wie sie entstanden sind."],
    ],
    sources: [GSEO, OPENAI],
  },
  {
    path: "ki/chatgpt/affiliate-marketing",
    description: "ChatGPT im Affiliate-Marketing: Produktvergleiche strukturieren, Texte formulieren und Ideen finden – mit ehrlicher Kennzeichnung und geprüften Fakten.",
    markdown: `Im Affiliate-Marketing verdienst du eine Provision, wenn Besucher über deinen Link etwas kaufen. **ChatGPT** kann bei Recherche-Struktur und Texten helfen – Vertrauen und Ehrlichkeit musst du selbst liefern.

## Wo KI hilft

- **Vergleichstabellen** strukturieren (Kriterien, Spalten)
- **Kaufberatungs-Gliederungen** („Worauf achten beim Kauf von …“)
- **FAQ** aus Kundensicht
- **Texte verständlicher** machen
- **Ideen** für Themen und Zielgruppen

## Wo du selbst ran musst

- **Produktdaten:** Preise, technische Daten und Verfügbarkeit ändern sich. Immer beim Hersteller oder Händler prüfen.
- **Eigene Tests und Erfahrungen:** Das macht Empfehlungen glaubwürdig.
- **Ehrliche Nachteile** nennen.

## Prompt-Beispiele

- „Welche 8 Kriterien sind beim Kauf von [Produktkategorie] für [Zielgruppe] am wichtigsten? Erkläre jedes in einem Satz.“
- „Erstelle eine Gliederung für einen Kaufratgeber zu [Produktkategorie] mit Abschnitt für typische Fehlkäufe.“
- „Formuliere diese Testnotizen zu einer fairen Produktbeschreibung mit Vor- und Nachteilen: [Notizen]“

## Kennzeichnung ist Pflicht

Affiliate-Links sind Werbung und müssen **klar gekennzeichnet** werden – zum Beispiel mit einem Hinweis und einem Sternchen am Link. Auf der Panda Toolbox machen wir das genauso. Erfundene Bewertungen oder Testsiegel sind tabu.

## Weiterlesen

Wie Affiliate-Marketing grundsätzlich funktioniert, erklären wir im Ratgeber „Affiliate-Marketing Einstieg“.`,
    faq: [
      ["Muss ich Affiliate-Links kennzeichnen?", "Ja. Affiliate-Links sind Werbung und müssen für Leser klar erkennbar gekennzeichnet sein."],
      ["Darf ChatGPT Produktbewertungen schreiben?", "Erfundene Erfahrungsberichte sind irreführend und unzulässig. KI kann aber deine echten Testnotizen sauber formulieren."],
    ],
    sources: [OPENAI, { title: "Die Medienanstalten – Leitfaden Werbekennzeichnung", url: "https://www.die-medienanstalten.de/" }],
  },
  {
    path: "ki/claude/prompts",
    description: "Claude Prompts: Vorlagen für Texte, Analyse, Zusammenfassungen und Code – plus Tipps für bessere Antworten mit Kontext und klaren Anweisungen.",
    markdown: `**Claude** ist ein KI-Assistent von Anthropic. Wie bei anderen Sprachmodellen gilt: Je klarer dein Prompt, desto besser die Antwort.

## Grundregeln für gute Prompts

1. **Kontext geben:** Wer bist du, wofür brauchst du das Ergebnis?
2. **Aufgabe klar benennen:** Was genau soll herauskommen?
3. **Format festlegen:** Liste, Tabelle, Fließtext, Länge.
4. **Beispiele zeigen:** Ein gutes Beispiel sagt mehr als lange Beschreibungen.
5. **Schritt für Schritt:** Komplexe Aufgaben in Teilschritte zerlegen.

## Prompt-Vorlagen

**Zusammenfassen**
„Fasse dieses Dokument in 5 Stichpunkten zusammen und nenne am Ende die drei wichtigsten offenen Fragen: [Text]“

**Texte überarbeiten**
„Überarbeite diesen Text für [Zielgruppe]. Ton: freundlich und klar. Erkläre kurz, was du geändert hast.“

**Analyse**
„Vergleiche diese beiden Angebote in einer Tabelle nach Preis, Leistung, Laufzeit und Risiken: [Angebote]“

**Lernen**
„Erkläre mir [Thema] wie einem Anfänger. Stelle mir danach drei Fragen, um mein Verständnis zu prüfen.“

**Brainstorming**
„Gib mir 10 unterschiedliche Ideen für [Ziel]. Bewerte jede kurz nach Aufwand und Wirkung.“

## Tipps

- **Nachfragen** ist erwünscht: Bitte Claude, Rückfragen zu stellen, wenn Informationen fehlen.
- **Rollen** helfen: „Antworte als erfahrene Lektorin.“
- **Lange Dokumente:** Claude kann mit umfangreichen Texten arbeiten – gib klare Anweisungen, worauf es achten soll.
- **Prüfen:** Auch Claude kann Fehler machen. Wichtige Fakten selbst kontrollieren.

Mehr zu Schreib- und Programmieraufgaben findest du in unseren Claude-Ratgebern.`,
    faq: [
      ["Was ist der Unterschied zwischen Claude und ChatGPT?", "Beide sind KI-Assistenten verschiedener Anbieter mit ähnlichen Grundfunktionen. Sie unterscheiden sich in Stil, Funktionen und Modellen – am besten ausprobieren."],
      ["Sollte ich persönliche Daten in Claude eingeben?", "Gib so wenig persönliche oder vertrauliche Daten wie möglich ein und prüfe die Datenschutzeinstellungen deines Kontos."],
    ],
    sources: [ANTHROPIC],
  },
  {
    path: "ki/claude/texte-schreiben",
    description: "Texte schreiben mit Claude: E-Mails, Artikel und Social-Media-Posts entwerfen, Stil anpassen und überarbeiten – mit Beispielen und Profi-Tipps.",
    markdown: `**Claude** eignet sich gut als Schreibpartner: zum Entwerfen, Überarbeiten und Strukturieren von Texten. So holst du das Beste heraus.

## Typische Schreibaufgaben

- **E-Mails:** höflich absagen, nachfassen, Feedback geben
- **Artikel und Blogposts:** Gliederung, Rohfassung, Überarbeitung
- **Social Media:** Posts in verschiedenen Längen und Tonarten
- **Bewerbungen:** Anschreiben strukturieren (Inhalte selbst liefern!)
- **Zusammenfassungen** langer Dokumente

## So bekommst du gute Texte

1. **Ziel und Leser nennen:** „E-Mail an einen Kunden, der seit zwei Wochen nicht geantwortet hat.“
2. **Ton festlegen:** freundlich, sachlich, locker, verbindlich.
3. **Eckdaten liefern:** Fakten, Termine, Namen.
4. **Länge vorgeben.**
5. **Mehrere Varianten** anfordern und die beste kombinieren.

## Beispiel

„Schreibe eine kurze, freundliche E-Mail an mein Team: Das Meeting am Donnerstag verschiebt sich auf Freitag, 10 Uhr. Bitte um kurze Bestätigung. Maximal 80 Wörter.“

## Eigenen Stil trainieren

Füge zwei oder drei eigene Texte ein und bitte Claude, den Stil zu beschreiben. Diese Beschreibung kannst du künftig in Prompts verwenden.

## Überarbeiten statt neu schreiben

Oft am wertvollsten: „Hier ist mein Entwurf. Mach ihn klarer und kürzer, aber behalte meinen Ton.“

## Grenzen

Fakten, Zahlen und Zitate immer prüfen. Persönliche Erfahrungen, Meinungen und echte Beispiele kann nur der Mensch liefern.`,
    faq: [
      ["Kann Claude meinen Schreibstil nachahmen?", "Mit Beispieltexten kann Claude einen Stil gut annähern. Das Ergebnis solltest du trotzdem prüfen und anpassen."],
      ["Darf ich KI-Texte beruflich nutzen?", "In der Regel ja. Prüfe die Richtlinien deines Arbeitgebers, besonders beim Umgang mit vertraulichen Daten."],
    ],
    sources: [ANTHROPIC],
  },
  {
    path: "ki/claude/programmieren",
    description: "Programmieren mit Claude: Code erklären, Fehler finden, Funktionen schreiben und Tests erstellen – Tipps für sichere und effiziente Zusammenarbeit mit KI.",
    markdown: `KI-Assistenten wie **Claude** können beim Programmieren viel Zeit sparen – vom Erklären fremden Codes bis zum Schreiben von Tests. Mit Anthropic gibt es außerdem **Claude Code**, ein Werkzeug für agentisches Programmieren direkt im Projekt.

## Einsatzbereiche

- **Code erklären:** „Was macht diese Funktion? Erkläre Zeile für Zeile.“
- **Fehler finden:** Fehlermeldung und Code einfügen und nach der Ursache fragen.
- **Funktionen schreiben:** mit klaren Anforderungen und Beispielen.
- **Refactoring:** Code lesbarer und wartbarer machen.
- **Tests:** Unit-Tests für bestehende Funktionen erstellen.
- **Dokumentation:** Kommentare und README-Abschnitte.

## So formulierst du gute Coding-Prompts

1. **Sprache und Version** nennen (z. B. TypeScript, Python 3.12).
2. **Kontext:** Framework, relevante Dateien, Ziel.
3. **Anforderungen** als Liste.
4. **Beispiele** für Ein- und Ausgaben.
5. **Randfälle** erwähnen.

## Sicher arbeiten

- **Code verstehen**, bevor du ihn übernimmst.
- **Testen**, testen, testen.
- **Keine Geheimnisse** wie Passwörter oder API-Schlüssel in Prompts.
- **Sicherheitslücken prüfen:** Eingaben validieren, SQL-Injection und XSS vermeiden.
- **Lizenzen** und Firmenrichtlinien beachten.

## Lernen mit KI

Für Einsteiger ist Claude ein geduldiger Tutor: „Erkläre mir Schleifen in Python mit drei Übungsaufgaben steigender Schwierigkeit.“`,
    faq: [
      ["Kann ich KI-generierten Code einfach übernehmen?", "Nur nach Prüfung. KI-Code kann Fehler oder Sicherheitslücken enthalten – lesen, verstehen und testen gehört dazu."],
      ["Was ist Claude Code?", "Ein Werkzeug von Anthropic, mit dem Claude direkt in Code-Projekten arbeiten kann, etwa Dateien lesen, ändern und Befehle ausführen."],
    ],
    sources: [ANTHROPIC, { title: "Claude Code – Dokumentation", url: "https://docs.claude.com/" }],
  },
  {
    path: "ki/gemini/prompts",
    description: "Gemini Prompts: Vorlagen für Recherche, Texte, Planung und Bildanalyse mit Googles KI-Assistent – plus Tipps für präzisere Antworten.",
    markdown: `**Gemini** ist der KI-Assistent von Google. Er kann Texte schreiben, Fragen beantworten, Bilder analysieren und ist in viele Google-Dienste eingebunden.

## Grundregeln

- **Konkret sein:** Was genau willst du wissen oder erstellen?
- **Kontext geben:** Zielgruppe, Zweck, Länge, Format.
- **Nachschärfen:** Ergebnisse mit Folgefragen verbessern.

## Prompt-Vorlagen

**Recherche-Einstieg**
„Gib mir einen Überblick über [Thema] in 5 Punkten und nenne Quellen, die ich mir genauer ansehen sollte.“

**Planung**
„Erstelle einen Wochenplan für [Ziel] mit täglichen Aufgaben von maximal 30 Minuten.“

**Texte**
„Schreibe eine kurze Produktbeschreibung für [Produkt] in freundlichem Ton, maximal 100 Wörter.“

**Bildanalyse**
„Was ist auf diesem Foto zu sehen? Beschreibe es so, dass es als Alternativtext für eine Website taugt.“

**Lernen**
„Erkläre [Thema] mit einer Analogie aus dem Alltag und stelle mir drei Kontrollfragen.“

## Tipps

- Prüfe Fakten und Quellenangaben – auch Gemini kann sich irren.
- Achte auf die **Datenschutzeinstellungen** in deinem Google-Konto, z. B. ob Unterhaltungen gespeichert werden.
- Für Alltagsideen siehe „Gemini im Alltag“.`,
    faq: [
      ["Ist Gemini kostenlos?", "Es gibt eine kostenlose Version sowie kostenpflichtige Angebote mit erweiterten Funktionen. Die aktuellen Bedingungen stehen bei Google."],
      ["Kann Gemini Bilder verstehen?", "Ja, Gemini kann Bilder analysieren und beschreiben. Lade keine sensiblen Bilder hoch."],
    ],
    sources: [GOOGLE],
  },
  {
    path: "ki/gemini/alltag",
    description: "Gemini im Alltag: Wie Googles KI bei Planung, E-Mails, Kochen, Reisen und Lernen hilft – praktische Beispiele und Datenschutz-Tipps.",
    markdown: `KI-Assistenten wie **Gemini** können im Alltag viele kleine Aufgaben erleichtern. Hier einige praktische Beispiele.

## Organisation

- „Hilf mir, meinen Tag zu planen: Diese Aufgaben habe ich: [Liste]. Ich habe von 9 bis 17 Uhr Zeit.“
- „Erstelle eine Checkliste für den Umzug in vier Wochen.“

## Kommunikation

- „Formuliere eine höfliche Absage für eine Einladung am Samstag.“
- „Fasse diese lange E-Mail in drei Sätzen zusammen.“

## Kochen

- „Ich habe Kartoffeln, Spinat, Eier und Feta. Was kann ich in 30 Minuten kochen?“
- „Mach daraus einen Wochenplan für zwei Personen mit Einkaufsliste.“

## Reisen

- „Schlage einen entspannten Tagesplan für Wien mit Kindern vor.“
- „Was sollte ich für eine Herbstwanderung einpacken?“

Prüfe Öffnungszeiten, Preise und aktuelle Infos immer auf den offiziellen Seiten.

## Lernen

- „Erkläre mir den Unterschied zwischen Zinsen und Rendite.“
- „Übe mit mir englische Vokabeln zum Thema Reisen.“

## Datenschutz

- Keine sensiblen Daten wie Gesundheitsinformationen, Passwörter oder Kontonummern eingeben.
- In den Google-Kontoeinstellungen festlegen, ob Aktivitäten gespeichert werden.

## Grenzen

Gemini kann sich irren. Bei Gesundheit, Recht und Finanzen ersetzt es keine fachliche Beratung.`,
    faq: [
      ["Kann Gemini Termine in meinen Kalender eintragen?", "Je nach Gerät und Einstellungen kann Gemini mit Google-Diensten wie Kalender zusammenarbeiten. Die Funktionen unterscheiden sich je nach Version."],
      ["Speichert Gemini meine Fragen?", "Das hängt von deinen Kontoeinstellungen ab. In den Aktivitätseinstellungen von Google kannst du das steuern."],
    ],
    sources: [GOOGLE],
  },
  {
    path: "ki/bildgeneratoren/glow-bilder-erstellen",
    description: "Glow-Bilder mit KI erstellen: Prompts für Neon-Effekte, Leuchtfarben und dunkle Hintergründe – Schritt für Schritt zum perfekten Glow-Look.",
    markdown: `Leuchtende Farben auf dunklem Grund, Neonlicht und schimmernde Kanten: **Glow-Bilder** wirken modern und auffällig – perfekt für Social Media, Wallpaper oder Thumbnails.

## Die Zutaten für den Glow-Look

- **Dunkler Hintergrund:** Schwarz, Dunkelblau oder Dunkellila.
- **Leuchtfarben:** Türkis, Cyan, Magenta, Violett.
- **Lichtbegriffe im Prompt:** „Neon“, „Glow“, „leuchtende Konturen“, „Biolumineszenz“, „Rim Light“.
- **Atmosphäre:** Nebel, Partikel, Reflexionen auf nassem Boden.

## Prompt-Vorlagen

- „Ein niedlicher Panda aus leuchtenden Neonlinien in Türkis und Lila, schwarzer Hintergrund, minimalistisch, Glow-Effekt“
- „Futuristische Stadt bei Nacht, Neonschilder spiegeln sich auf nasser Straße, Cyberpunk, cinematisch“
- „Biolumineszenter Wald mit leuchtenden Pilzen und Glühwürmchen, Fantasy, magische Stimmung“
- „Abstrakter Hintergrund mit weichen Lichtwellen in Türkis und Violett, für Präsentationsfolien“

## Schritt für Schritt

1. Motiv festlegen.
2. Farben und Hintergrund bestimmen.
3. Stil wählen: Linienkunst, 3D, Fotografie, Illustration.
4. Varianten erstellen und die beste verfeinern.
5. In einem Bildbearbeitungsprogramm Helligkeit und Kontrast nachjustieren.

## Nachbearbeitung

Mit Ebenen, Weichzeichner und der Ebenenmethode „Negativ multiplizieren“ (Screen) lässt sich ein Glow auch nachträglich verstärken. Kostenlose Programme findest du unter „Kostenlose Bildbearbeitung“.

## Rechte

Prüfe die Nutzungsbedingungen des Bildgenerators, bevor du Bilder kommerziell verwendest.`,
    faq: [
      ["Welche Farben wirken am besten für Glow-Bilder?", "Leuchtende Töne wie Türkis, Cyan, Magenta und Violett auf einem sehr dunklen Hintergrund."],
      ["Kann ich einen Glow-Effekt nachträglich hinzufügen?", "Ja, mit duplizierten, weichgezeichneten Ebenen im Modus „Negativ multiplizieren“ bzw. „Screen“."],
    ],
  },
  {
    path: "ki/ki-basics/was-ist-ki",
    description: "Was ist KI? Künstliche Intelligenz einfach erklärt: maschinelles Lernen, Sprachmodelle, Beispiele aus dem Alltag und die wichtigsten Grenzen.",
    focusKeyword: "Was ist KI",
    markdown: `**Künstliche Intelligenz (KI)** bezeichnet Computersysteme, die Aufgaben erledigen, für die man früher menschliche Intelligenz brauchte: Sprache verstehen, Bilder erkennen, Texte schreiben oder Entscheidungen vorbereiten.

## Wie lernt eine KI?

Die meisten heutigen KI-Systeme beruhen auf **maschinellem Lernen**. Statt jede Regel einzeln zu programmieren, lernt das System aus vielen Beispielen Muster. Ein Bilderkennungssystem sieht zum Beispiel sehr viele Katzenfotos und lernt so, Katzen zu erkennen.

Besonders erfolgreich sind **neuronale Netze** – Rechenmodelle, die lose vom Gehirn inspiriert sind – und das sogenannte **Deep Learning** mit vielen Schichten.

## Sprachmodelle

Chatbots wie ChatGPT, Claude oder Gemini basieren auf **großen Sprachmodellen** (Large Language Models, LLMs). Sie wurden mit riesigen Textmengen trainiert und berechnen, welche Wörter in einem Zusammenhang wahrscheinlich folgen. Dadurch können sie erstaunlich gut schreiben, zusammenfassen und erklären.

## KI im Alltag

- Sprachassistenten und Übersetzungsdienste
- Empfehlungen bei Streaming und Online-Shops
- Spamfilter
- Navigations-Apps
- Gesichtserkennung beim Entsperren des Handys
- Fahrassistenzsysteme im Auto

## Grenzen

- **Fehler:** Sprachmodelle können falsche Fakten überzeugend formulieren.
- **Verzerrungen:** KI übernimmt Vorurteile aus Trainingsdaten.
- **Kein echtes Verstehen** im menschlichen Sinn – darüber wird in der Forschung diskutiert.
- **Datenschutz** und Urheberrecht werfen Fragen auf.

Wie du typische Fehler vermeidest, erfährst du unter „KI-Fehler vermeiden“.`,
    faq: [
      ["Was ist der Unterschied zwischen KI und maschinellem Lernen?", "Maschinelles Lernen ist ein Teilbereich der KI: Systeme lernen aus Daten, statt fest programmierte Regeln zu befolgen."],
      ["Kann KI denken wie ein Mensch?", "Heutige KI-Systeme können viele Aufgaben beeindruckend lösen, funktionieren aber anders als das menschliche Denken. Ob und wie sie „verstehen“, wird diskutiert."],
    ],
    sources: [AIACT, { title: "Bundesamt für Sicherheit in der Informationstechnik – Künstliche Intelligenz", url: "https://www.bsi.bund.de/" }],
  },
  {
    path: "ki/ki-basics/ki-fehler-vermeiden",
    description: "KI-Fehler vermeiden: Halluzinationen, veraltetes Wissen, Verzerrungen und Datenschutz – so prüfst du KI-Antworten und nutzt Chatbots verantwortungsvoll.",
    markdown: `KI-Chatbots sind beeindruckend – aber nicht unfehlbar. Wer die typischen Schwächen kennt, nutzt sie sicherer.

## Die häufigsten Fehlerquellen

1. **Halluzinationen:** Die KI erfindet Fakten, Zitate, Quellen oder Studien, die es nicht gibt – oft sehr überzeugend formuliert.
2. **Veraltetes Wissen:** Modelle haben einen Wissensstand bis zu einem bestimmten Zeitpunkt. Aktuelle Ereignisse, Preise oder Gesetze kennen sie oft nicht – es sei denn, sie können im Web suchen.
3. **Rechenfehler** bei komplexen Berechnungen.
4. **Verzerrungen (Bias)** aus den Trainingsdaten.
5. **Missverständnisse** durch unklare Prompts.

## So prüfst du KI-Antworten

- **Quellen nachprüfen:** Existiert die genannte Quelle wirklich? Sagt sie das Behauptete?
- **Gegenfragen stellen:** „Wie sicher bist du dir? Welche Annahmen hast du getroffen?“
- **Zweite Quelle:** Wichtige Fakten mit offiziellen Seiten oder Fachliteratur abgleichen.
- **Zahlen nachrechnen.**

## Hochriskante Bereiche

Bei **Gesundheit, Recht, Finanzen und Sicherheit** ersetzt KI keine fachliche Beratung. Nutze sie zur Vorbereitung von Fragen, nicht als letzte Instanz.

## Datenschutz

Keine Passwörter, Gesundheitsdaten, Kundendaten oder Geschäftsgeheimnisse eingeben. Mehr dazu unter „KI und Datenschutz“.

## Gute Gewohnheit

Betrachte KI wie einen schnellen, belesenen, aber manchmal unzuverlässigen Kollegen: Sehr hilfreich – aber du trägst die Verantwortung für das Ergebnis.`,
    faq: [
      ["Was sind KI-Halluzinationen?", "Erfundene Informationen, die ein KI-Modell überzeugend als Fakten ausgibt – etwa nicht existierende Studien oder falsche Zahlen."],
      ["Wie erkenne ich falsche KI-Antworten?", "Quellen prüfen, mit verlässlichen Seiten abgleichen und kritisch nachfragen. Besonders bei konkreten Zahlen, Zitaten und Namen ist Vorsicht geboten."],
    ],
    sources: [{ title: "Verbraucherzentrale – Künstliche Intelligenz", url: "https://www.verbraucherzentrale.de/wissen/digitale-welt" }],
  },
  {
    path: "ki/ki-basics/ki-workflows",
    description: "KI-Workflows aufbauen: wiederkehrende Aufgaben mit KI strukturieren, Prompt-Bibliotheken anlegen und Ergebnisse prüfen – Beispiele für Alltag und Beruf.",
    markdown: `Ein **KI-Workflow** ist ein fester Ablauf, in dem KI an bestimmten Stellen Arbeit übernimmt – und Menschen an anderen prüfen und entscheiden. So wird KI vom Spielzeug zum echten Werkzeug.

## Warum Workflows statt Einzelprompts?

- **Gleichbleibende Qualität**
- **Zeitersparnis** bei wiederkehrenden Aufgaben
- **Weniger Fehler**, weil Prüfschritte fest eingeplant sind

## Aufbau eines Workflows

1. **Aufgabe zerlegen:** Welche Schritte gibt es?
2. **KI-geeignete Schritte erkennen:** Entwürfe, Zusammenfassungen, Strukturierung.
3. **Prompt-Vorlagen** für jeden Schritt schreiben.
4. **Prüfschritte** festlegen: Wer kontrolliert was?
5. **Dokumentieren** und verbessern.

## Beispiel: Blogartikel

1. Mensch: Thema und Zielgruppe festlegen.
2. KI: Fragen der Zielgruppe sammeln.
3. KI: Gliederung erstellen → Mensch passt an.
4. Mensch: Notizen und Erfahrungen.
5. KI: Rohtext aus Notizen.
6. Mensch: Überarbeiten, Fakten prüfen, Quellen.
7. KI: Meta-Beschreibung und Social-Posts.

## Beispiel: E-Mail-Postfach

KI fasst lange Mails zusammen und schlägt Antworten vor – du entscheidest und sendest.

## Prompt-Bibliothek

Speichere gute Prompts in einem Dokument oder Notiztool, sortiert nach Aufgaben. So musst du nicht jedes Mal neu formulieren.

## Nächster Schritt

Wenn Abläufe sehr gleichförmig sind, lassen sie sich teilweise automatisieren – mehr dazu unter „KI-Automatisierung“.`,
    faq: [
      ["Was ist eine Prompt-Bibliothek?", "Eine Sammlung bewährter Prompts, die du für wiederkehrende Aufgaben wiederverwendest und weiter verbesserst."],
      ["Welche Aufgaben eignen sich für KI-Workflows?", "Wiederkehrende Aufgaben mit Text oder Struktur, etwa Zusammenfassungen, Entwürfe, Klassifizierung oder Formatierung – immer mit menschlicher Prüfung."],
    ],
  },
  {
    path: "ki/ki-basics/ki-automatisierung",
    description: "KI-Automatisierung erklärt: Wie KI mit Automatisierungs-Tools zusammenarbeitet, sinnvolle Einsatzbeispiele, Risiken und wie du klein anfängst.",
    markdown: `**KI-Automatisierung** verbindet KI-Modelle mit Automatisierungswerkzeugen. Abläufe laufen dann ganz oder teilweise selbstständig – etwa wenn eine neue E-Mail eintrifft oder ein Formular ausgefüllt wird.

## Wie funktioniert das?

Ein typischer Ablauf besteht aus:
1. **Auslöser:** z. B. neue E-Mail, neue Zeile in einer Tabelle, neuer Kalendereintrag.
2. **KI-Schritt:** Text zusammenfassen, kategorisieren, Antwort entwerfen.
3. **Aktion:** Ergebnis speichern, Nachricht senden, Aufgabe anlegen.

Werkzeuge dafür sind Automatisierungsplattformen, die viele Apps verbinden. Einige bieten KI-Schritte direkt an, andere über Schnittstellen.

## Sinnvolle Beispiele

- Eingehende Anfragen nach Thema sortieren
- Meeting-Notizen automatisch zusammenfassen
- Kundenfeedback nach Stimmung auswerten
- Social-Media-Posts aus einem Blogartikel vorbereiten (zur Freigabe)
- Rechnungen aus E-Mails erfassen

## Risiken

- **Fehler multiplizieren sich:** Ein falscher Schritt wird hundertfach wiederholt.
- **Datenschutz:** Personenbezogene Daten fließen an externe Dienste. Prüfe Auftragsverarbeitungsverträge und Serverstandorte.
- **Kosten:** API-Aufrufe und Plattformen können Gebühren verursachen.
- **Kontrollverlust:** Automatisch versendete Nachrichten ohne Prüfung können peinlich werden.

## Klein anfangen

1. Eine einfache, wiederkehrende Aufgabe wählen.
2. Erst mit **Freigabeschritt** (Mensch prüft) automatisieren.
3. Testen und Fehler beobachten.
4. Erst dann ausbauen.

Werkzeuge im Vergleich findest du unter „Workflow-Tools im Vergleich“ und „Automatisierung für Einsteiger“.`,
    faq: [
      ["Brauche ich Programmierkenntnisse für KI-Automatisierung?", "Für viele No-Code-Plattformen nicht. Für komplexere Abläufe helfen Grundkenntnisse über Schnittstellen (APIs)."],
      ["Ist KI-Automatisierung DSGVO-konform?", "Das hängt von den Diensten, Verträgen und Daten ab. Bei personenbezogenen Daten sind Auftragsverarbeitungsverträge und eine sorgfältige Prüfung nötig."],
    ],
    sources: [BFDI, DSB],
  },
  {
    path: "ki/ki-basics/ki-und-datenschutz",
    description: "KI und Datenschutz: Was mit deinen Eingaben passiert, welche Daten tabu sind, Einstellungen in ChatGPT, Claude und Gemini und was der EU AI Act regelt.",
    markdown: `Wer KI-Chatbots nutzt, gibt Informationen preis. Damit das nicht zum Risiko wird, solltest du wissen, was mit deinen Daten passiert.

## Was passiert mit meinen Eingaben?

Je nach Anbieter und Einstellungen werden Unterhaltungen **gespeichert** und können – teils abhängig von deiner Einwilligung oder Einstellung – auch zur **Verbesserung der Modelle** genutzt werden. Bei Unternehmensversionen gelten oft strengere Regeln. Lies die Datenschutzhinweise des Anbieters.

## Diese Daten gehören nicht in einen Chatbot

- Passwörter und Zugangsdaten
- Gesundheitsdaten
- Bank- und Kreditkartendaten
- Ausweisnummern
- Daten von Kunden, Patienten oder Kollegen
- Geschäftsgeheimnisse

## Einstellungen prüfen

Viele Anbieter bieten Optionen, um
- den Chatverlauf zu deaktivieren oder zu löschen,
- der Nutzung für das Training zu widersprechen,
- temporäre Chats zu nutzen.

Sieh in den Konto- und Datenschutzeinstellungen nach.

## Im Beruf

Unternehmen brauchen Regeln für den KI-Einsatz: Welche Tools sind erlaubt? Welche Daten dürfen hinein? Bei personenbezogenen Daten gilt die DSGVO – oft sind Verträge zur Auftragsverarbeitung nötig.

## Der EU AI Act

Die europäische **KI-Verordnung (AI Act)** regelt KI-Systeme nach ihrem Risiko. Sie verbietet bestimmte Anwendungen, stellt Anforderungen an Hochrisiko-Systeme und schreibt Transparenz vor – zum Beispiel, dass man erkennen können muss, wenn man mit einem Chatbot spricht oder KI-generierte Inhalte vor sich hat. Die Pflichten gelten schrittweise.

Bei Fragen helfen die Datenschutzbehörden deines Landes.`,
    faq: [
      ["Werden meine Chats zum Training verwendet?", "Das hängt vom Anbieter, deinem Tarif und deinen Einstellungen ab. In den Datenschutzeinstellungen kannst du das oft steuern."],
      ["Was regelt der EU AI Act?", "Er teilt KI-Systeme nach Risiko ein, verbietet bestimmte Anwendungen und schreibt unter anderem Transparenzpflichten vor. Die Regeln treten schrittweise in Kraft."],
    ],
    sources: [AIACT, BFDI, DSB],
  },
  {
    path: "ki/prompts/bild-prompts",
    description: "Bild-Prompts für KI-Bildgeneratoren: Aufbau, Stilbegriffe, Licht, Perspektive und 15 Vorlagen für Fotos, Illustrationen, Logos und Wallpaper.",
    markdown: `Ein guter **Bild-Prompt** beschreibt nicht nur das Motiv, sondern auch Stil, Licht und Perspektive. So entstehen gezieltere Ergebnisse.

## Aufbau

**Motiv + Handlung + Umgebung + Stil + Licht + Perspektive + Details**

Beispiel: „Ein alter Leuchtturm an einer felsigen Küste, Sturm, Wellen brechen, Ölgemälde, dramatisches Abendlicht, Weitwinkel, detailreich“

## Nützliche Begriffe

- **Stil:** Fotografie, Aquarell, Ölgemälde, Bleistiftzeichnung, 3D-Render, Pixel Art, Flat Design, Anime
- **Licht:** goldene Stunde, Gegenlicht, Studiolicht, Neonlicht, weiches Licht
- **Perspektive:** Nahaufnahme, Vogelperspektive, Froschperspektive, Weitwinkel
- **Stimmung:** gemütlich, mystisch, verträumt, dramatisch

## 15 Vorlagen

1. „Gemütliches Café im Herbst, Regen am Fenster, warmes Licht, Fotografie“
2. „Minimalistisches Logo eines Pandas, flaches Design, zwei Farben“
3. „Bergsee im Morgennebel, Spiegelung, Landschaftsfotografie“
4. „Kinderbuchillustration: Fuchs und Hase picknicken, Aquarell“
5. „Isometrische Darstellung eines kleinen Büros, 3D, Pastellfarben“
6. „Neon-Panda auf dunklem Hintergrund, Türkis und Lila“
7. „Produktfoto einer Keramiktasse auf Holz, Studiolicht“
8. „Fantasy-Schloss auf einer schwebenden Insel, Sonnenuntergang“
9. „Retro-Poster einer Großstadt, 70er-Jahre-Stil“
10. „Makroaufnahme eines Tautropfens auf einem Blatt“
11. „Pixel-Art-Wald mit kleinem Häuschen“
12. „Abstrakter Hintergrund mit Wellen in Blau und Violett“
13. „Comic-Szene: Roboter gießt Pflanzen“
14. „Schwarz-Weiß-Porträt einer Katze, kontrastreich“
15. „Weihnachtsmarkt bei Nacht, Lichterketten, Schnee“

## Tipps

- **Negativ-Angaben** (falls das Tool sie unterstützt): z. B. „ohne Text“.
- **Seitenverhältnis** wählen: 1:1 für Instagram, 16:9 für YouTube, 9:16 für Stories.
- **Keine echten Personen** täuschend nachbilden.`,
    faq: [
      ["Wie lang sollte ein Bild-Prompt sein?", "Ein bis drei Sätze reichen meist. Wichtig ist, Motiv, Stil und Stimmung klar zu beschreiben."],
      ["Warum steht Text im Bild oft falsch?", "Viele Bildgeneratoren haben noch Schwierigkeiten mit Schrift. Text besser nachträglich in einem Grafikprogramm einfügen."],
    ],
  },
  {
    path: "ki/prompts/business-prompts",
    description: "Business-Prompts für KI: Vorlagen für E-Mails, Meetings, Strategie, Marketing und Kundenservice – professionell, effizient und mit Prüfschritt.",
    markdown: `KI kann im Berufsalltag viel Routinearbeit abnehmen. Diese **Business-Prompts** sind sofort einsetzbar. Ersetze die Begriffe in eckigen Klammern.

## E-Mail und Kommunikation

- „Schreibe eine professionelle E-Mail an [Empfänger], um [Anliegen]. Ton: freundlich und verbindlich. Maximal 120 Wörter.“
- „Formuliere diese Nachricht diplomatischer: [Text]“
- „Fasse diesen E-Mail-Verlauf in 5 Stichpunkten zusammen und nenne offene Aufgaben.“

## Meetings

- „Erstelle eine Agenda für ein 30-minütiges Meeting zum Thema [Thema] mit Zeitangaben.“
- „Mach aus diesen Notizen ein Protokoll mit Entscheidungen und To-dos mit Verantwortlichen: [Notizen]“

## Strategie und Analyse

- „Erstelle eine SWOT-Analyse für [Geschäftsidee] mit je 4 Punkten.“
- „Welche Fragen sollte ich mir stellen, bevor ich [Entscheidung] treffe?“
- „Vergleiche diese Optionen in einer Tabelle nach Kosten, Aufwand, Risiko und Nutzen.“

## Marketing

- „Beschreibe drei Zielgruppen-Personas für [Produkt].“
- „Schreibe 5 Varianten einer Überschrift für eine Landingpage zu [Angebot].“

## Kundenservice

- „Entwirf eine freundliche Antwort auf diese Beschwerde, entschuldige dich für [Problem] und biete [Lösung] an.“

## Wichtig

- **Keine vertraulichen Daten** in öffentliche KI-Tools.
- **Ergebnisse prüfen** – vor allem Zahlen und Zusagen an Kunden.
- **Firmenrichtlinien** zum KI-Einsatz beachten.`,
    faq: [
      ["Darf ich Firmendaten in ChatGPT eingeben?", "Nur, wenn dein Unternehmen das erlaubt und passende Verträge bzw. Business-Versionen nutzt. Vertrauliche und personenbezogene Daten gehören nicht in öffentliche Tools."],
      ["Wie mache ich KI-Texte professioneller?", "Zielgruppe, Ton und Länge genau vorgeben und das Ergebnis selbst überarbeiten."],
    ],
    sources: [BFDI],
  },
  {
    path: "ki/prompts/schreib-prompts",
    description: "Schreib-Prompts für KI: Vorlagen für Geschichten, Gedichte, Blogartikel, Überarbeitung und Schreibblockaden – kreativ schreiben mit KI als Partner.",
    markdown: `Ob Schreibblockade oder Feinschliff: KI kann beim Schreiben inspirieren und unterstützen. Diese **Schreib-Prompts** helfen dir in jeder Phase.

## Ideen finden

- „Gib mir 10 ungewöhnliche Ideen für eine Kurzgeschichte im Genre [Genre].“
- „Was wäre, wenn …? Nenne 10 Ausgangssituationen für eine Geschichte.“
- „Schlage 5 Blogthemen zu [Thema] vor, die Einsteiger interessieren.“

## Struktur

- „Erstelle eine Drei-Akt-Struktur für eine Geschichte über [Idee].“
- „Gliedere einen Ratgeberartikel zu [Thema] mit H2-Überschriften.“

## Schreiben

- „Schreibe den Anfang einer Geschichte in der Ich-Perspektive, die mit einem überraschenden Satz beginnt.“
- „Beschreibe einen Wald im Herbst mit allen fünf Sinnen.“
- „Schreibe ein kurzes Gedicht über [Thema], ohne Reime.“

## Überarbeiten

- „Lies meinen Text und nenne die drei größten Schwächen: [Text]“
- „Kürze diesen Absatz um die Hälfte, ohne Kernaussage zu verlieren.“
- „Ersetze Füllwörter und Passivkonstruktionen.“
- „Schreibe diesen Dialog natürlicher.“

## Gegen Schreibblockaden

- „Stell mir 5 Fragen zu meiner Figur, die mir helfen, sie besser zu verstehen.“
- „Schreibe drei mögliche nächste Szenen – ich wähle eine aus.“

## Dein Text bleibt deiner

Nutze KI als Sparringspartner. Die besten Texte entstehen, wenn du die Vorschläge kritisch auswählst und mit eigener Stimme weiterschreibst.`,
    faq: [
      ["Kann KI beim kreativen Schreiben helfen?", "Ja, vor allem beim Ideenfinden, Strukturieren und Überarbeiten. Die eigene Stimme und Erfahrung bleiben wichtig."],
      ["Darf ich KI-Texte veröffentlichen?", "In der Regel ja, wenn die Nutzungsbedingungen es erlauben. Prüfe, ob Kennzeichnungspflichten oder Vorgaben von Verlagen und Wettbewerben gelten."],
    ],
  },
  {
    path: "ki/prompts/lern-prompts",
    description: "Lern-Prompts für KI: So nutzt du ChatGPT, Claude und Gemini als Lernhilfe – Erklärungen, Quizfragen, Lernpläne und Feedback zu eigenen Lösungen.",
    markdown: `KI kann eine geduldige Lernpartnerin sein: Sie erklärt so oft wie nötig, stellt Fragen und gibt Feedback. Wichtig ist, aktiv zu lernen – nicht nur Antworten abzuholen.

## Verstehen

- „Erkläre mir [Thema] so, als wäre ich 12 Jahre alt.“
- „Erkläre [Begriff] mit einer Analogie aus dem Alltag.“
- „Was sind die drei häufigsten Missverständnisse zu [Thema]?“

## Üben

- „Stelle mir 10 Quizfragen zu [Thema] mit steigender Schwierigkeit. Warte nach jeder Frage auf meine Antwort.“
- „Erstelle Lernkarten (Frage/Antwort) zu diesem Text: [Text]“
- „Gib mir eine Übungsaufgabe zu [Thema] und prüfe meinen Lösungsweg.“

## Planen

- „Erstelle einen Lernplan für die Prüfung in [Fach] in 4 Wochen, 45 Minuten pro Tag.“
- „Teile dieses Kapitel in fünf Lernabschnitte auf.“

## Feedback

- „Hier ist meine Lösung. Wo liegt mein Fehler? Verrate die Lösung noch nicht, sondern gib mir einen Hinweis.“
- „Bewerte meinen Aufsatz nach Struktur, Argumentation und Sprache.“

## Sprachen lernen

- „Führe mit mir ein einfaches Gespräch auf Englisch über Hobbys und korrigiere meine Fehler am Ende.“

## Tipps

- **Hinweise statt Lösungen** verlangen – so lernst du mehr.
- **Fakten prüfen**, besonders bei Daten und Formeln.
- **Schulregeln beachten:** Viele Schulen und Hochschulen haben Regeln für KI bei Hausarbeiten.`,
    faq: [
      ["Ist es Schummeln, mit KI zu lernen?", "Zum Verstehen und Üben ist KI eine legitime Hilfe. Bei Prüfungen und Hausarbeiten gelten die Regeln der Schule oder Hochschule."],
      ["Wie lerne ich mit KI am effektivsten?", "Aktiv: sich abfragen lassen, Hinweise statt fertiger Lösungen verlangen und das Gelernte in eigenen Worten erklären."],
    ],
  },
  {
    path: "ki/prompts/social-media-prompts",
    description: "Social-Media-Prompts für KI: Vorlagen für Instagram, TikTok, LinkedIn und YouTube – Posts, Captions, Hooks, Hashtags und Redaktionspläne.",
    markdown: `KI hilft dabei, regelmäßig gute Inhalte für Social Media zu planen und zu schreiben. Diese **Social-Media-Prompts** decken die wichtigsten Aufgaben ab.

## Ideen und Planung

- „Erstelle einen Redaktionsplan für 4 Wochen auf Instagram für [Thema/Marke], 3 Posts pro Woche, mit Format (Reel, Karussell, Bild).“
- „Gib mir 20 Content-Ideen für [Zielgruppe], die Probleme lösen oder unterhalten.“

## Captions

- „Schreibe 3 Instagram-Captions zu diesem Bild: [Beschreibung]. Ton: [locker/inspirierend], mit Frage an die Community am Ende.“
- „Formuliere einen LinkedIn-Post über [Erfahrung], persönlich, mit einer klaren Lernerkenntnis.“

## Hooks für Kurzvideos

- „Schreibe 10 Hooks für die ersten 3 Sekunden eines TikTok-Videos über [Thema].“
- „Mach aus diesem Blogartikel ein Skript für ein 45-Sekunden-Reel: [Text]“

## Hashtags

- „Schlage 15 passende Hashtags zu [Thema] vor – Mischung aus großen und Nischen-Hashtags.“

Prüfe, ob die Hashtags wirklich genutzt werden – KI kennt keine aktuellen Trends.

## Community

- „Formuliere freundliche Antworten auf diese drei Kommentare: [Kommentare]“

## Wichtig

- Werbung und Kooperationen **kennzeichnen**.
- KI-Bilder je nach Plattform-Richtlinie **offenlegen**.
- **Authentisch bleiben:** Eigene Fotos, Meinungen und Geschichten machen den Unterschied.

Passende Werkzeuge findest du unter „Social-Media-Planer“.`,
    faq: [
      ["Kennt KI aktuelle Trends?", "Meist nicht zuverlässig. Prüfe Trends und Hashtags direkt auf der Plattform."],
      ["Muss ich KI-Inhalte auf Social Media kennzeichnen?", "Viele Plattformen verlangen die Offenlegung realistisch wirkender KI-Inhalte. Prüfe die jeweiligen Richtlinien."],
    ],
  },

  /* ================= Creator ================= */
  {
    path: "creator/youtube/youtube-kanal-starten",
    description: "YouTube-Kanal starten: Nische finden, Kanal einrichten, Ausrüstung für den Anfang, erstes Video planen und regelmäßig veröffentlichen – Schritt für Schritt.",
    markdown: `Einen **YouTube-Kanal zu starten** ist einfach – erfolgreich zu werden braucht Geduld und einen klaren Plan. Diese Schritte helfen beim Start.

## 1. Nische und Zielgruppe

Worüber kannst und willst du lange Videos machen? Für wen? Eine klare Nische („Gartentipps für Balkone“) ist am Anfang leichter als ein Kanal über alles.

## 2. Kanal einrichten

- Google-Konto und Kanal anlegen
- **Kanalname:** einprägsam, leicht zu buchstabieren
- **Profilbild und Banner** im eigenen Stil
- **Kanalbeschreibung:** Worum geht es, für wen, wie oft?
- **Kanal-Trailer** für neue Besucher

## 3. Ausrüstung für den Anfang

Du brauchst weniger, als du denkst:
- **Smartphone** mit guter Kamera
- **Mikrofon** – Ton ist wichtiger als Bild!
- **Licht:** Fensterlicht oder eine einfache Leuchte
- **Schnittprogramm:** Es gibt gute kostenlose Programme (siehe „Kostenlose Videobearbeitung“)

## 4. Das erste Video

- Ein konkretes Problem lösen oder eine Frage beantworten.
- **Hook** in den ersten Sekunden.
- Klare Struktur, kein langes Intro.
- Aussagekräftiger Titel und Thumbnail.

## 5. Regelmäßigkeit

Lieber realistisch planen – etwa ein Video pro Woche oder alle zwei Wochen – und dabei bleiben.

## 6. Lernen

YouTube Studio zeigt, wie lange Zuschauer bleiben und wo sie abspringen. Nutze diese Daten, um besser zu werden.

Weiter geht es mit „Algorithmus-Tipps“ und „Thumbnails gestalten“.`,
    faq: [
      ["Wie viel kostet es, einen YouTube-Kanal zu starten?", "Der Kanal selbst ist kostenlos. Mit Smartphone, einfachem Mikrofon und kostenloser Software kannst du mit sehr kleinem Budget starten."],
      ["Wie oft sollte ich Videos hochladen?", "So oft, wie du gute Qualität dauerhaft schaffst. Regelmäßigkeit ist wichtiger als Häufigkeit."],
    ],
    sources: [YT],
  },
  {
    path: "creator/youtube/algorithmus-tipps",
    description: "YouTube-Algorithmus verstehen: Klickrate, Wiedergabedauer, Zuschauerzufriedenheit – praktische Tipps, damit YouTube deine Videos mehr Menschen empfiehlt.",
    markdown: `Der YouTube-Algorithmus ist kein Geheimnis-Schalter. YouTube beschreibt das Ziel selbst so: Zuschauern Videos empfehlen, die sie gern sehen und mit denen sie zufrieden sind. Wer das versteht, macht automatisch „algorithmusfreundliche“ Videos.

## Worauf YouTube achtet

- **Klicken Zuschauer?** Titel und Thumbnail entscheiden (Klickrate).
- **Bleiben sie dran?** Wiedergabedauer und Zuschauerbindung.
- **Sind sie zufrieden?** Likes, Kommentare, Umfragen, ob sie weiterschauen.
- **Passt das Video zu ihren Interessen?**

## Praktische Tipps

1. **Starker Einstieg:** Die ersten 30 Sekunden entscheiden. Sofort zeigen, worum es geht.
2. **Versprechen halten:** Titel und Thumbnail müssen zum Inhalt passen – Clickbait schadet langfristig.
3. **Struktur und Tempo:** Längen rausschneiden, visuelle Abwechslung.
4. **Serien und Playlists:** Zuschauer schauen das nächste Video.
5. **Endbildschirme und Infokarten** für passende Videos.
6. **Konsistente Themen:** Ein klarer Kanal hilft YouTube, die richtigen Zuschauer zu finden.
7. **Community-Interaktion:** Auf Kommentare antworten.

## Zahlen in YouTube Studio

- **Klickrate (CTR)** der Impressionen
- **Durchschnittliche Wiedergabedauer**
- **Zuschauerbindung:** Wo springen Leute ab?
- **Traffic-Quellen:** Suche, Startseite, vorgeschlagene Videos

## Was nicht hilft

Gekaufte Abos oder Views, Sub4Sub und irreführende Tags verstoßen gegen Richtlinien oder bringen nichts.`,
    faq: [
      ["Ist die Videolänge wichtig für den Algorithmus?", "Nicht die Länge an sich, sondern ob Zuschauer dranbleiben und zufrieden sind. Das Video sollte so lang sein, wie der Inhalt es braucht."],
      ["Helfen Tags noch?", "Tags spielen laut YouTube eine geringe Rolle, etwa bei häufigen Falschschreibungen. Titel, Beschreibung und Inhalt sind wichtiger."],
    ],
    sources: [YT],
  },
  {
    path: "creator/youtube/thumbnails-gestalten",
    description: "YouTube-Thumbnails gestalten: Größe, Kontrast, Gesichter, wenig Text und klare Botschaft – Regeln für Thumbnails, die geklickt werden.",
    markdown: `Das **Thumbnail** ist das Plakat deines Videos. Zusammen mit dem Titel entscheidet es, ob jemand klickt.

## Technische Vorgaben

- **Auflösung:** 1280 × 720 Pixel (Seitenverhältnis 16:9)
- **Formate:** JPG, PNG oder GIF (ohne Animation)
- **Dateigröße:** Die zulässige Maximalgröße steht in der YouTube-Hilfe
- Benutzerdefinierte Thumbnails erfordern ein bestätigtes Konto.

## Gestaltungsregeln

1. **Eine klare Botschaft:** Was ist das Versprechen des Videos?
2. **Gut lesbar auch winzig:** Viele schauen am Handy. Teste dein Thumbnail stark verkleinert.
3. **Starker Kontrast** und kräftige Farben.
4. **Gesichter mit Emotion** ziehen Aufmerksamkeit.
5. **Wenig Text:** maximal drei bis vier Wörter – nicht den Titel wiederholen.
6. **Wiedererkennbarer Stil:** Farben, Schrift, Aufbau.
7. **Rechte unten freihalten:** Dort steht die Videolänge.

## Titel und Thumbnail zusammen denken

Titel und Bild sollten sich ergänzen: Der Titel erklärt, das Bild weckt Neugier.

## Testen

YouTube bietet Möglichkeiten, verschiedene Thumbnails zu testen. Beobachte die Klickrate und passe an.

## Ehrlich bleiben

Irreführende Thumbnails können Zuschauer enttäuschen und gegen Richtlinien verstoßen. Werkzeuge findest du unter „Thumbnail-Tools“.`,
    faq: [
      ["Welche Größe muss ein YouTube-Thumbnail haben?", "1280 × 720 Pixel im Format 16:9. Die maximale Dateigröße nennt die YouTube-Hilfe."],
      ["Wie viel Text sollte auf ein Thumbnail?", "So wenig wie möglich – meist reichen drei bis vier gut lesbare Wörter."],
    ],
    sources: [YT],
  },
  {
    path: "creator/youtube/viral-shorts",
    description: "YouTube Shorts erstellen: Format, Hook, Loop-Effekt, Ideen und wie Shorts deinem Kanal helfen können – mit ehrlichem Blick auf Viralität.",
    markdown: `**YouTube Shorts** sind kurze Hochkantvideos. Sie können viele neue Zuschauer bringen – virale Erfolge lassen sich aber nicht planen. Gute Shorts erhöhen die Chancen.

## Format

- **Hochformat** (9:16)
- Kurze Dauer – YouTube erlaubt Shorts bis zu einer bestimmten Maximallänge; prüfe die aktuelle Grenze in der YouTube-Hilfe.
- Am besten direkt in der YouTube-App oder mit Schnittprogrammen erstellen.

## Was gute Shorts ausmacht

1. **Hook in der ersten Sekunde:** Sofort Spannung, eine Frage oder ein überraschendes Bild.
2. **Ein Gedanke pro Short.**
3. **Schnelles Tempo**, keine Einleitung.
4. **Untertitel:** Viele schauen ohne Ton.
5. **Loop-Effekt:** Ein Ende, das nahtlos zum Anfang passt, lädt zum Wiederholen ein.
6. **Klare Auflösung** oder Pointe am Ende.

## Ideen

- Ein Tipp in 30 Sekunden
- Vorher-Nachher
- Ausschnitte aus langen Videos mit Verweis
- Antworten auf Kommentare
- Hinter den Kulissen

## Shorts und langer Content

Shorts können neue Zuschauer auf deinen Kanal bringen. Verlinke passende lange Videos, damit Interessierte weiterschauen.

## Realistisch bleiben

Viralität hängt von vielen Faktoren ab. Konstanz, Qualität und eine klare Nische bringen langfristig mehr als die Jagd nach dem einen Hit.

Werkzeuge findest du unter „Tools für YouTube-Shorts“.`,
    faq: [
      ["Wie lang darf ein YouTube Short sein?", "YouTube hat die Maximallänge in der Vergangenheit angepasst. Die aktuelle Grenze steht in der YouTube-Hilfe."],
      ["Bringen Shorts Abonnenten?", "Sie können neue Zuschauer erreichen. Wie viele davon abonnieren, hängt davon ab, ob dein Kanal ihnen weiteren passenden Inhalt bietet."],
    ],
    sources: [YT],
  },
  {
    path: "creator/branding/branding-fuer-creator",
    description: "Branding für Creator: Positionierung, visuelle Identität, Tonalität und Wiedererkennung – so baust du eine Marke auf, die zu dir passt.",
    markdown: `Als Creator bist du selbst die Marke. Gutes **Branding** sorgt dafür, dass Menschen dich wiedererkennen, verstehen, wofür du stehst, und gern wiederkommen.

## 1. Positionierung

Beantworte drei Fragen:
- **Für wen** machst du Inhalte?
- **Welches Problem** löst du oder welches Gefühl gibst du?
- **Was unterscheidet dich?**

Daraus entsteht ein Satz wie: „Ich zeige Einsteigern, wie sie mit wenig Geld schöne Pflanzenecken gestalten.“

## 2. Visuelle Identität

- **Farben:** zwei bis drei Hauptfarben (mehr unter „Farbschema finden“)
- **Schriften:** eine für Überschriften, eine für Text
- **Logo** oder Signet (siehe „Logo erstellen“)
- **Bildstil:** Licht, Filter, Perspektiven
- **Vorlagen** für Thumbnails und Posts

## 3. Tonalität

Wie sprichst du? Locker, witzig, ruhig, fachlich? Bleib auf allen Kanälen konsistent.

## 4. Wiedererkennung

- Gleicher Name und gleiches Profilbild überall
- Wiederkehrende Formate, Begrüßung oder Sätze
- Ein Maskottchen oder Symbol (wie unser Panda Bambus)

## 5. Werte

Wofür stehst du – und wofür nicht? Das hilft bei Entscheidungen zu Kooperationen und Themen.

## Weiterentwickeln

Branding darf wachsen. Prüfe regelmäßig, ob es noch zu dir und deinem Publikum passt.`,
    faq: [
      ["Brauche ich als kleiner Creator ein Branding?", "Ja, schon ein einfaches, konsistentes Auftreten hilft, wiedererkannt zu werden. Es muss nicht teuer sein."],
      ["Wie viele Farben sollte meine Marke haben?", "Zwei bis drei Hauptfarben plus neutrale Töne reichen meist."],
    ],
  },
  {
    path: "creator/branding/glow-design",
    description: "Glow-Design für Creator: Neon-Look, Leuchteffekte und dunkle Hintergründe für Thumbnails, Logos und Social Media – mit Tipps zu Lesbarkeit und Kontrast.",
    markdown: `Der **Glow-Look** – leuchtende Farben auf dunklem Grund – ist auffällig und modern. Richtig eingesetzt, macht er Thumbnails, Logos und Posts unverwechselbar.

## Grundprinzipien

- **Dunkler Hintergrund** als Bühne: Schwarz, Dunkelblau, Aubergine.
- **Ein bis zwei Leuchtfarben**, z. B. Türkis und Lila.
- **Weicher Schein** um Schrift oder Formen.
- **Sparsamkeit:** Nicht alles muss leuchten – Akzente wirken stärker.

## Glow-Effekt in Design-Tools

Das Prinzip ist in den meisten Programmen gleich:
1. Element (Text oder Form) duplizieren.
2. Die untere Kopie **weichzeichnen** (Gaußscher Weichzeichner).
3. Deckkraft anpassen, eventuell Ebenenmodus „Negativ multiplizieren“ (Screen) oder „Aufhellen“.
4. Für stärkeren Glow mehrere Ebenen mit unterschiedlicher Unschärfe kombinieren.

Viele Tools haben auch fertige Effekte wie „Leuchten“ oder „Schatten“ mit heller Farbe.

## Lesbarkeit

- **Kontrast prüfen:** Leuchtende Schrift auf dunklem Grund ist gut lesbar, zu viel Glow macht sie aber unscharf.
- **Dicke Schriften** wirken mit Glow besser als dünne.
- **Barrierefreiheit:** Wichtige Infos nicht nur über Farbe vermitteln.

## Einsatz

- Thumbnails mit leuchtendem Schlüsselwort
- Logo-Varianten für dunkle Hintergründe
- Story-Vorlagen und Wallpaper

Ideen für Bilder findest du unter „Glow-Bilder erstellen“, Werkzeuge unter „Glow-Plugins“.`,
    faq: [
      ["Wie erstelle ich einen Neon-Effekt?", "Element duplizieren, die Kopie weichzeichnen und im Modus „Negativ multiplizieren“ darunterlegen. Mehrere Ebenen verstärken den Effekt."],
      ["Ist Glow-Design gut lesbar?", "Ja, wenn Kontrast stimmt und der Glow sparsam eingesetzt wird. Zu viel Leuchten macht Schrift unscharf."],
    ],
  },
  {
    path: "creator/branding/logo-erstellen",
    description: "Logo erstellen: Was ein gutes Logo ausmacht, Logo-Arten, Schritt-für-Schritt-Anleitung, kostenlose Tools und worauf du rechtlich achten solltest.",
    markdown: `Ein Logo ist das Gesicht deiner Marke. Es muss nicht kompliziert sein – im Gegenteil: Die besten Logos sind **einfach, einprägsam und vielseitig**.

## Logo-Arten

- **Wortmarke:** nur Schrift (der Name)
- **Bildmarke:** Symbol ohne Text
- **Wort-Bild-Marke:** Kombination aus Symbol und Schrift
- **Monogramm:** Initialen

## Was ein gutes Logo ausmacht

1. **Einfach:** auch winzig als Profilbild erkennbar
2. **Einprägsam**
3. **Zeitlos** statt kurzfristiger Trends
4. **Vielseitig:** funktioniert farbig, schwarz-weiß, hell und dunkel
5. **Passend** zu Zielgruppe und Thema

## Schritt für Schritt

1. **Ideen sammeln:** Begriffe, die deine Marke beschreiben.
2. **Skizzieren:** Mit Stift und Papier viele Varianten.
3. **Digitalisieren:** In einem Vektorprogramm umsetzen, damit es beliebig skalierbar ist.
4. **Farben und Schrift** wählen.
5. **Testen:** klein, groß, auf verschiedenen Hintergründen.
6. **Dateien exportieren:** SVG, PNG mit transparentem Hintergrund, Varianten für hell/dunkel.

## Werkzeuge

Kostenlose Vektorprogramme und Online-Designtools reichen für den Start. Übersichten findest du unter „Design-Tools für Einsteiger“ und „Kostenlose Canva-Alternativen“.

## Rechtliches

- Keine fremden Logos oder geschützten Figuren kopieren.
- Bei KI-generierten Logos Nutzungsbedingungen prüfen.
- Vor der Nutzung recherchieren, ob ein ähnlicher Name oder ein ähnliches Logo bereits als **Marke** eingetragen ist (z. B. in den Datenbanken der Markenämter).`,
    faq: [
      ["In welchem Format sollte ich mein Logo speichern?", "Als Vektordatei (SVG) für beliebige Größen und als PNG mit transparentem Hintergrund für den Alltag."],
      ["Kann ich mein Logo als Marke schützen?", "Ja, über eine Markenanmeldung beim nationalen Markenamt oder beim EUIPO. Lass dich bei Bedarf beraten."],
    ],
    sources: [{ title: "DPMA – Marken", url: "https://www.dpma.de/marken/" }, { title: "Österreichisches Patentamt – Marken", url: "https://www.patentamt.at/" }],
  },
  {
    path: "creator/branding/farbschema-finden",
    description: "Farbschema finden: Farbpsychologie, Farbkreis-Harmonien, die 60-30-10-Regel und Kontrast – so findest du Markenfarben, die zu dir passen.",
    markdown: `Farben lösen Gefühle aus und machen eine Marke wiedererkennbar. Ein durchdachtes **Farbschema** ist deshalb eine der wichtigsten Branding-Entscheidungen.

## Farbwirkung (grobe Orientierung)

- **Blau:** Vertrauen, Ruhe, Kompetenz
- **Türkis:** frisch, modern, klar
- **Lila:** kreativ, besonders, verspielt
- **Grün:** Natur, Wachstum, Gesundheit
- **Gelb/Orange:** Energie, Optimismus
- **Rot:** Leidenschaft, Dringlichkeit
- **Schwarz:** Eleganz, Stärke

Farbwirkung hängt auch von Kultur und Kontext ab – nimm sie als Richtung, nicht als Regel.

## Farbharmonien

- **Komplementär:** gegenüberliegende Farben im Farbkreis (kontrastreich)
- **Analog:** benachbarte Farben (harmonisch) – z. B. Türkis und Blau
- **Triade:** drei gleichmäßig verteilte Farben (lebendig)

## Die 60-30-10-Regel

- **60 %** Grund- oder neutrale Farbe
- **30 %** Sekundärfarbe
- **10 %** Akzentfarbe für Buttons und Highlights

## Kontrast und Barrierefreiheit

Text muss gut lesbar sein. Prüfe Farbkombinationen mit einem **Kontrast-Checker** gegen die WCAG-Empfehlungen.

## So findest du deine Farben

1. Drei Adjektive für deine Marke festlegen.
2. Moodboard mit Bildern sammeln.
3. Mit Online-Farbwerkzeugen Paletten erzeugen.
4. Auf Thumbnails, Profilbild und Website testen.
5. Farbcodes (HEX/RGB) festhalten.`,
    faq: [
      ["Wie viele Farben braucht eine Marke?", "Meist zwei bis drei Hauptfarben plus neutrale Töne wie Weiß, Grau oder Schwarz."],
      ["Was ist ein HEX-Code?", "Eine sechsstellige Farbangabe wie #22D3EE, mit der sich eine Farbe in Design-Tools und auf Websites exakt festlegen lässt."],
    ],
    sources: [{ title: "W3C – Web Content Accessibility Guidelines (WCAG)", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" }],
  },
  {
    path: "creator/content-planung/content-plan-erstellen",
    description: "Content-Plan erstellen: Ziele, Themen-Säulen, Formate und Redaktionskalender – mit Vorlage und Tipps, wie du regelmäßig postest, ohne auszubrennen.",
    markdown: `Ein **Content-Plan** nimmt den täglichen Druck „Was poste ich heute?“ weg. Mit Planung wird Content regelmäßiger, besser und entspannter.

## 1. Ziele festlegen

Was willst du erreichen? Mehr Reichweite, Community, Verkäufe, Bekanntheit? Davon hängen Themen und Formate ab.

## 2. Themen-Säulen

Lege **drei bis fünf Themenbereiche** fest, die zu dir und deiner Zielgruppe passen. Beispiel für einen Kochkanal:
- Schnelle Alltagsrezepte
- Spartipps in der Küche
- Grundtechniken
- Hinter den Kulissen

## 3. Formate

Kurzvideo, langes Video, Karussell, Story, Newsletter, Livestream – kombiniere Formate, die zu deinen Stärken passen.

## 4. Redaktionskalender

Eine einfache Tabelle reicht:

| Datum | Plattform | Säule | Thema | Format | Status |
|---|---|---|---|---|---|
| Mo | YouTube | Rezepte | 15-Minuten-Pasta | Video | Schnitt |

## 5. Batching

Produziere ähnliche Inhalte in einem Rutsch: einen Drehtag für mehrere Videos, einen Schreibtag für Captions.

## 6. Recycling

Aus einem langen Video werden Shorts, Zitate, ein Blogartikel und ein Newsletter.

## 7. Auswerten

Einmal im Monat: Was lief gut? Was nicht? Plan anpassen.

## Ausbrennen vermeiden

Realistisch planen, Puffer einbauen und Pausen ankündigen. Lieber weniger, dafür dauerhaft.`,
    faq: [
      ["Wie weit im Voraus sollte ich planen?", "Viele planen grob einen Monat voraus und detailliert ein bis zwei Wochen. Flexibilität für aktuelle Themen sollte bleiben."],
      ["Welche Tools eignen sich für Content-Planung?", "Schon eine Tabelle oder ein Kalender reicht. Spezielle Planer findest du unter „Social-Media-Planer“."],
    ],
  },
  {
    path: "creator/content-planung/storytelling",
    description: "Storytelling für Creator: Heldenreise, Spannungsbogen und Hook – so erzählst du Geschichten, die Zuschauer fesseln, mit Beispielen für Video und Social Media.",
    markdown: `Menschen erinnern sich an Geschichten, nicht an Fakten. Gutes **Storytelling** macht aus Informationen Erlebnisse – und hält Zuschauer bis zum Ende.

## Die Grundzutaten

1. **Figur:** Mit wem fiebern wir mit? (Du, ein Kunde, ein Tier …)
2. **Ziel:** Was will die Figur erreichen?
3. **Hindernis:** Was steht im Weg?
4. **Wendepunkt:** Was ändert sich?
5. **Auflösung:** Wie geht es aus – und was lernen wir?

## Einfache Story-Strukturen

**Problem – Lösung – Ergebnis**
„Mein Balkon war leer und grau. Mit diesen drei Pflanzen wurde er zur grünen Oase.“

**Vorher – Nachher – Brücke**
Zeige den Ausgangszustand, das Ergebnis und dann den Weg dorthin.

**Heldenreise (vereinfacht)**
Aufbruch → Herausforderungen → Krise → Erfolg → Rückkehr mit Erkenntnis.

## Der Hook

Die ersten Sekunden entscheiden. Starte mit:
- einer überraschenden Aussage
- einer Frage, die das Publikum sich stellt
- dem spannendsten Moment (und dann zurückspulen)

## Für Kurzvideos

Ein Konflikt, ein Wendepunkt, eine Pointe. Kein Vorgeplänkel.

## Authentizität

Echte Erfahrungen – auch Fehler und Misserfolge – machen Geschichten glaubwürdig und nahbar.`,
    faq: [
      ["Was ist ein Hook?", "Der Einstieg eines Videos oder Posts, der in den ersten Sekunden neugierig macht und zum Weiterschauen bewegt."],
      ["Funktioniert Storytelling auch bei Sachthemen?", "Ja. Auch Ratgeber werden spannender, wenn sie anhand eines konkreten Beispiels oder einer Person erzählt werden."],
    ],
  },
  {
    path: "creator/content-planung/videoideen-finden",
    description: "Videoideen finden: 12 Quellen für Content-Ideen – von Kommentaren und Suchvorschlägen bis zu Trends – plus Methoden gegen die Ideenflaute.",
    markdown: `Die Ideenflaute kennt jeder Creator. Dabei liegen gute **Videoideen** oft direkt vor dir. Diese Quellen helfen.

## 12 Ideenquellen

1. **Kommentare** unter deinen Videos: Welche Fragen kommen immer wieder?
2. **Suchvorschläge** auf YouTube und Google: Tippe dein Thema ein und sieh, was ergänzt wird.
3. **Fragen-Plattformen** und Foren zu deinem Thema.
4. **Deine eigenen Erfahrungen:** Was hast du kürzlich gelernt oder falsch gemacht?
5. **Erfolgreiche Videos** in deiner Nische: Was funktioniert – und was fehlt?
6. **Trends** auf der Plattform (passend zu deinem Thema).
7. **Saisonale Anlässe:** Jahreszeiten, Feiertage, Schulstart.
8. **Fortsetzungen** deiner erfolgreichsten Videos.
9. **Mythen und Irrtümer** in deinem Fachgebiet.
10. **Vergleiche** („X oder Y?“).
11. **Challenges und Experimente.**
12. **Keyword-Tools** für Suchanfragen (siehe „Keyword-Tools für YouTube“).

## Methoden

- **Ideen-Speicher:** Jede Idee sofort in eine Notiz-App.
- **Mindmap:** Ein Thema in die Mitte, Unterthemen drumherum.
- **Formate kombinieren:** Thema × Format (Tutorial, Vlog, Test, Top-Liste).

## Ideen bewerten

Frag dich: Interessiert das meine Zielgruppe? Kann ich das gut umsetzen? Gibt es eine eigene Perspektive?

KI kann beim Brainstorming helfen – Vorlagen dazu findest du unter „ChatGPT für YouTube“.`,
    faq: [
      ["Wie finde ich Videoideen, nach denen gesucht wird?", "Suchvorschläge auf YouTube, Fragen in Kommentaren und Keyword-Tools zeigen, wonach Menschen tatsächlich suchen."],
      ["Darf ich Ideen anderer Creator aufgreifen?", "Themen sind nicht geschützt. Kopiere aber keine Inhalte, sondern bring deine eigene Perspektive ein."],
    ],
  },
  {
    path: "creator/monetarisierung/geld-verdienen-mit-youtube",
    description: "Geld verdienen mit YouTube: Partnerprogramm, Kanalmitgliedschaften, Sponsoring, Affiliate und eigene Produkte – Voraussetzungen und realistische Erwartungen.",
    markdown: `Mit YouTube Geld zu verdienen ist möglich – aber selten schnell. Die meisten Creator kombinieren mehrere Einnahmequellen.

## YouTube-Partnerprogramm

Über das **YouTube-Partnerprogramm (YPP)** kannst du an Werbeeinnahmen und weiteren Funktionen beteiligt werden. Voraussetzungen sind unter anderem eine Mindestzahl an Abonnenten und Wiedergabestunden bzw. Shorts-Aufrufen sowie die Einhaltung der Richtlinien. Die genauen, aktuellen Schwellen stehen in der YouTube-Hilfe.

## Weitere Einnahmen auf YouTube

- **Kanalmitgliedschaften:** monatliche Unterstützung durch Fans
- **Super Chat, Super Sticker, Super Thanks**
- **YouTube Premium-Einnahmen**
- **Shopping-Funktionen** für Merch

## Einnahmen außerhalb von YouTube

- **Sponsoring und Kooperationen** (siehe „Sponsoring“)
- **Affiliate-Links** (siehe „Affiliate für Creator“)
- **Eigene Produkte:** Kurse, E-Books, Merch, Vorlagen
- **Plattformen für Unterstützer**

## Realistische Erwartungen

- Werbeeinnahmen hängen stark von Thema, Zielgruppe und Region ab.
- Viele Kanäle brauchen lange, bis Einnahmen spürbar werden.
- Mehrere Standbeine machen unabhängiger.

## Steuern und Kennzeichnung

Einnahmen müssen versteuert werden – ab bestimmten Umsätzen ist gegebenenfalls ein Gewerbe anzumelden. Werbung muss gekennzeichnet werden. Lass dich bei Steuerfragen beraten.`,
    faq: [
      ["Ab wie vielen Abonnenten verdient man auf YouTube Geld?", "Für das Partnerprogramm gelten Mindestanforderungen an Abonnenten und Wiedergabezeit bzw. Shorts-Aufrufe. Die aktuellen Werte stehen in der YouTube-Hilfe. Sponsoring und Affiliate sind auch mit kleineren Kanälen möglich."],
      ["Muss ich YouTube-Einnahmen versteuern?", "Ja. Wie und ab wann hängt vom Land und deiner Situation ab – eine Steuerberatung hilft."],
    ],
    sources: [YTPP],
  },
  {
    path: "creator/monetarisierung/affiliate-fuer-creator",
    description: "Affiliate-Marketing für Creator: Wie Partnerlinks funktionieren, passende Programme finden, glaubwürdig empfehlen und korrekt als Werbung kennzeichnen.",
    markdown: `Mit **Affiliate-Links** verdienst du eine Provision, wenn jemand über deinen Link etwas kauft. Für Creator ist das eine beliebte Einnahmequelle – wenn sie ehrlich eingesetzt wird.

## So funktioniert es

1. Du meldest dich bei einem **Partnerprogramm** an (direkt bei Händlern oder über Affiliate-Netzwerke).
2. Du bekommst persönliche **Links**.
3. Kauft jemand über deinen Link, erhältst du eine **Provision** – für die Käufer ändert sich der Preis in der Regel nicht.

## Passende Produkte wählen

- Nur empfehlen, was du **wirklich nutzt** oder getestet hast.
- Produkte, die zu deinem Thema und Publikum passen.
- Auf Qualität und guten Kundenservice achten – schlechte Produkte schaden deinem Ruf.

## Wo Links platzieren?

- Videobeschreibung, angepinnter Kommentar
- Link-in-Bio-Seite (siehe „Link-in-Bio-Tools“)
- Blogartikel und Newsletter
- Vergleichstabellen auf deiner Website

## Kennzeichnung – Pflicht!

Affiliate-Links sind Werbung. Kennzeichne sie **klar und gut sichtbar**, z. B. mit „Werbung/Affiliate-Link“ oder einem Sternchen mit Erklärung. In Videos solltest du zusätzlich mündlich bzw. im Bild darauf hinweisen und auf YouTube die Funktion zur Offenlegung bezahlter Werbung nutzen, wenn zutreffend.

## Vertrauen vor Provision

Ehrliche Empfehlungen inklusive Nachteilen bauen langfristig Vertrauen auf. Mehr Grundlagen findest du unter „Affiliate-Marketing Einstieg“.`,
    faq: [
      ["Kosten Affiliate-Links die Käufer mehr?", "In der Regel nicht. Die Provision zahlt der Händler."],
      ["Wie kennzeichne ich Affiliate-Links richtig?", "Deutlich und direkt am Link bzw. im Video, etwa mit „Werbung“ oder „Affiliate-Link“. Die Medienanstalten bieten Leitfäden zur Kennzeichnung."],
    ],
    sources: [{ title: "Die Medienanstalten – Leitfaden Werbekennzeichnung", url: "https://www.die-medienanstalten.de/" }, { title: "KommAustria / RTR – Werbung in sozialen Medien", url: "https://www.rtr.at/" }],
  },
  {
    path: "creator/monetarisierung/sponsoring",
    description: "Sponsoring für Creator: Wie du Kooperationen findest, Preise kalkulierst, Verträge prüfst und Werbung richtig kennzeichnest – ein Leitfaden für Einsteiger.",
    markdown: `Sponsoring und Markenkooperationen sind für viele Creator die wichtigste Einnahmequelle. So gehst du professionell vor.

## Kooperationen finden

- **Mediakit** erstellen: Wer bist du, wer ist dein Publikum, Reichweite, Beispiele, Kontakt.
- **Marken selbst anschreiben**, deren Produkte du nutzt.
- **Influencer-Plattformen und Agenturen.**
- **Gute Inhalte** – Marken finden dich oft von selbst.

## Was macht dich interessant?

Nicht nur Reichweite zählt. Marken achten auf **Zielgruppe**, **Engagement** (Kommentare, Interaktion) und **Glaubwürdigkeit**. Kleine, engagierte Communities sind oft sehr wertvoll.

## Preise kalkulieren

Berücksichtige Aufwand (Konzept, Dreh, Schnitt), Reichweite, Nutzungsrechte und Exklusivität. Es gibt keine feste Formel – vergleiche dich mit Creatorn ähnlicher Größe und verhandle.

## Vertrag prüfen

- Leistungen und Deadlines
- Freigabeprozess und Anzahl der Korrekturschleifen
- **Nutzungsrechte:** Darf die Marke dein Video für eigene Werbung nutzen? Wie lange?
- Exklusivität
- Zahlungsziel

## Kennzeichnung

Bezahlte Kooperationen, kostenlose Produkte und Reisen sind **Werbung** und müssen klar gekennzeichnet werden – am Anfang des Beitrags, gut sichtbar. Nutze auch die Plattform-Funktionen zur Offenlegung.

## Zu dir passen

Sag Nein zu Kooperationen, die nicht zu deinen Werten passen. Deine Glaubwürdigkeit ist dein wichtigstes Kapital.`,
    faq: [
      ["Was gehört in ein Mediakit?", "Kurze Vorstellung, Themen, Zielgruppe (Alter, Region, Interessen), Reichweite und Engagement, Beispiele früherer Arbeiten und Kontaktdaten."],
      ["Muss ich kostenlose Produkte als Werbung kennzeichnen?", "In der Regel ja, wenn du sie präsentierst. Auch Geschenke gelten als Gegenleistung."],
    ],
    sources: [{ title: "Die Medienanstalten – Leitfaden Werbekennzeichnung", url: "https://www.die-medienanstalten.de/" }],
  },
  {
    path: "creator/community/community-aufbauen",
    description: "Community aufbauen als Creator: Interaktion, Wiedererkennung, Mitmachformate und Moderation – so entsteht eine treue Community statt nur Follower.",
    markdown: `Follower schauen zu – eine **Community** macht mit. Eine treue Gemeinschaft ist für Creator wertvoller als reine Reichweite.

## Was eine Community ausmacht

- Menschen kommen **wieder**.
- Sie **reden mit** – mit dir und untereinander.
- Sie fühlen sich **zugehörig**.

## So baust du sie auf

1. **Antworte auf Kommentare** – besonders am Anfang so viele wie möglich.
2. **Stell Fragen** in Videos und Posts und greife Antworten auf.
3. **Mitmachformate:** Umfragen, Challenges, Q&A, Zuschauer-Ideen umsetzen.
4. **Wiederkehrende Rituale:** feste Begrüßung, Insider, Serienformate.
5. **Livestreams** für direkte Interaktion.
6. **Eigene Räume:** Discord-Server, Newsletter, Gruppen (siehe „Discord für Creator“).
7. **Wertschätzung zeigen:** Community-Mitglieder erwähnen, Fan-Kunst teilen (mit Erlaubnis).

## Regeln und Moderation

Eine gute Community braucht klare Regeln: respektvoller Umgang, kein Hass, keine Spam-Links. Moderiere konsequent – Hilfe von vertrauenswürdigen Moderatoren entlastet.

## Grenzen setzen

Du musst nicht rund um die Uhr erreichbar sein. Feste Zeiten für Kommentare und klare Kanäle für Anfragen schützen vor Überlastung.

## Langfristig denken

Communities wachsen langsam, sind aber stabil. Sie tragen dich auch durch Phasen, in denen der Algorithmus nicht mitspielt.`,
    faq: [
      ["Wie bekomme ich mehr Kommentare?", "Konkrete Fragen stellen, auf Kommentare antworten und Ideen aus der Community sichtbar umsetzen."],
      ["Wie gehe ich mit Hasskommentaren um?", "Klare Regeln aufstellen, Hasskommentare löschen und melden, Wiederholungstäter blockieren. Bei strafbaren Inhalten können Meldestellen helfen."],
    ],
  },
  {
    path: "creator/community/discord-fuer-creator",
    description: "Discord für Creator: Server aufsetzen, Kanäle und Rollen planen, Moderation, Sicherheitseinstellungen und Ideen, wie deine Community aktiv bleibt.",
    markdown: `Ein **Discord-Server** gibt deiner Community einen eigenen Treffpunkt – mit Chat, Sprachkanälen und Events. So richtest du ihn sinnvoll ein.

## Server planen

Starte mit **wenigen Kanälen**. Zu viele leere Kanäle wirken verlassen. Beispiel:

- **#willkommen** – Regeln und Infos
- **#ankündigungen** – neue Videos, Livestreams
- **#allgemein** – Plaudern
- **#themen-austausch** – passend zu deiner Nische
- **#zeig-was** – Werke der Community
- **Sprachkanal** für gemeinsame Events

## Rollen

- **Moderatoren** mit klaren Rechten
- **Mitglieder** nach Bestätigung der Regeln
- Optional Rollen für Unterstützer oder Interessen

## Sicherheit und Moderation

- **Regeln** klar formulieren und bestätigen lassen.
- **Sicherheitseinstellungen** nutzen: Verifizierungsstufe, Filter für unangemessene Inhalte, AutoMod.
- **Vertrauenswürdige Moderatoren** aus der Community.
- **Altersvorgaben** von Discord beachten.

## Aktivität fördern

- Regelmäßige Events: Watchpartys, Q&A, Spieleabende
- Exklusive Einblicke hinter die Kulissen
- Fragen und Umfragen
- Community-Mitglieder vorstellen

## Grenzen

Ein Server braucht Pflege. Plane Zeit ein oder hol dir Hilfe – lieber ein kleiner, aktiver Server als ein großer, unbetreuter.`,
    faq: [
      ["Ist Discord für Creator kostenlos?", "Ja, ein Server ist kostenlos. Zusätzliche Funktionen gibt es über kostenpflichtige Angebote."],
      ["Ab welchem Alter darf man Discord nutzen?", "Discord setzt ein Mindestalter voraus, das je nach Land variiert. Die aktuellen Angaben stehen in den Nutzungsbedingungen."],
    ],
    sources: [{ title: "Discord – Safety Center", url: "https://discord.com/safety" }],
  },
  {
    path: "creator/community/mit-kommentaren-arbeiten",
    description: "Mit Kommentaren arbeiten: Kommentare als Ideenquelle, gute Antworten, Umgang mit Kritik und Hass sowie Moderationswerkzeuge auf YouTube und Instagram.",
    markdown: `Kommentare sind Feedback, Ideenquelle und Community-Pflege in einem. Wer klug damit umgeht, wird besser – und hält gleichzeitig Hass fern.

## Kommentare als Goldgrube

- **Häufige Fragen** werden zu neuen Videos.
- **Kritik** zeigt, was verbessert werden kann.
- **Lob** zeigt, was funktioniert.

Lege eine Liste an und sammle wiederkehrende Fragen.

## Gute Antworten

- **Schnell** in den ersten Stunden nach Veröffentlichung – das fördert Interaktion.
- **Persönlich**, nicht nur „Danke!“.
- **Gegenfragen** stellen, um Gespräche anzuregen.
- **Hilfreiche Kommentare anpinnen.**

## Konstruktive Kritik

Atmen, nicht sofort reagieren. Danke für sachliche Hinweise, korrigiere Fehler offen. Das wirkt souverän und schafft Vertrauen.

## Hass und Trolle

- **Nicht füttern:** Provokationen ignorieren.
- **Löschen, melden, blockieren** bei Beleidigungen und Hetze.
- **Strafbare Inhalte** können angezeigt werden. Beratungsstellen unterstützen Betroffene von Hass im Netz.

## Moderationswerkzeuge

- **Wortfilter** mit blockierten Begriffen
- **Kommentare zur Prüfung zurückhalten**
- **Moderatoren** ernennen
- Kommentare bei sensiblen Themen einschränken

## Selbstschutz

Du musst nicht alles lesen. Setz dir Zeitfenster und hol dir Unterstützung, wenn Kommentare belasten.`,
    faq: [
      ["Soll ich auf negative Kommentare antworten?", "Auf sachliche Kritik ja, freundlich und kurz. Auf Beleidigungen und Provokationen besser nicht – löschen, melden oder blockieren."],
      ["Wo bekomme ich Hilfe bei Hass im Netz?", "In Deutschland zum Beispiel bei HateAid, in Österreich bei der Beratungsstelle #GegenHassimNetz von ZARA."],
    ],
    sources: [{ title: "HateAid", url: "https://hateaid.org/" }, { title: "ZARA – Beratungsstelle #GegenHassimNetz", url: "https://zara.or.at/" }],
  },
];
