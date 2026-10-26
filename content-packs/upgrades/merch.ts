import type { UpgradePage } from "../types";

const SHOP = { title: "FlauschiPandas Designs bei Spreadshirt", url: "https://www.spreadshirt.de/shop/user/flauschipandas" };

/** Merch-Shop-Seite – wird nur befüllt, solange sie noch leer ist. */
export const merchUpgrades: UpgradePage[] = [
  {
    path: "projekte-community/panda-merch/merch-shop",
    description: "FlauschiPandas Merch: Panda-Designs wie Gamer Panda, DJ Panda und Sleepy Panda auf Pullovern, Hoodies, Tassen und Stickern bei Spreadshirt.",
    focusKeyword: "FlauschiPandas Merch",
    linkAnchors: ["FlauschiPandas Merch", "Panda-Merch", "Merch-Shop"],
    markdown: `Du magst die Pandas der Panda Toolbox? Dann kannst du sie jetzt auch tragen: Im **FlauschiPandas Merch-Shop** gibt es eigene Panda-Designs auf Kleidung und Accessoires.

**[👉 Zum FlauschiPandas Shop bei Spreadshirt](https://www.spreadshirt.de/shop/user/flauschipandas)**

## Die Designs

Jedes Motiv ist ein eigener Panda mit eigenem Charakter, zum Beispiel:

- **Gamer Panda – Mode ON** für alle, die lieber zocken als schlafen
- **DJ Panda – Beat Mode ON** für Musikfans
- **Sleepy Panda – FlauschiPandas Edition** für Morgenmuffel
- **Happy Panda – Love Mode ON** zum Verschenken
- **Baby Panda – Milk Mode ON** für die Kleinsten (und ihre Eltern)
- **Cute Bamboo Panda** – der Klassiker mit Bambus
- **Phasmo-Panda** und **Dark Spirit Panda** für Fans von gruseligen Games
- **Gewitter-Angst-Panda**, **Himmlischer Nephalim-Panda** und **WM Panda Deutschland**

Laufend kommen neue Designs dazu.

## Produkte

Die Motive gibt es auf verschiedenen Produkten, unter anderem:

- **Pullover und Hoodies** in mehreren Farben
- **Tassen** für Tee- und Kaffeepausen
- **Sticker** für Laptop, Handy und Trinkflasche
- weitere **Accessoires** und Produkte für Zuhause

Welche Produkte, Farben und Größen es für ein Motiv gibt, siehst du direkt im Shop.

## So funktioniert die Bestellung

Der Shop läuft über **Spreadshirt**. Das heißt:

1. Design im Shop aussuchen.
2. Produkt, Farbe und Größe wählen.
3. Bei Spreadshirt bestellen und bezahlen.
4. Spreadshirt druckt das Produkt erst nach deiner Bestellung und verschickt es direkt an dich.

Preise, Versandkosten, Lieferzeiten und Rückgabe richten sich nach den Bedingungen von Spreadshirt.

## Warum es den Merch gibt

Die Panda Toolbox ist kostenlos. Mit jedem Merch-Kauf unterstützt du FlauschiPandas und damit auch eigene Projekte wie **Panda GreenTech** – und du bekommst etwas Flauschiges dafür. 🐼

Lust auf mehr Pandas? Schau dir die **Panda-Malvorlagen** und die **Panda-KI-Prompts** an – oder bau dir auf der Startseite im Panda-Baukasten deinen eigenen Flauschipanda.`,
    faq: [
      ["Wo kann ich den FlauschiPandas Merch kaufen?", "Im FlauschiPandas Shop bei Spreadshirt. Dort bestellst und bezahlst du direkt; Spreadshirt druckt und verschickt die Produkte."],
      ["Welche Produkte gibt es?", "Unter anderem Pullover, Hoodies, Tassen, Sticker und weitere Accessoires – je nach Motiv in verschiedenen Farben und Größen."],
      ["Unterstütze ich mit dem Kauf die Panda Toolbox?", "Ja. Mit dem Merch unterstützt du FlauschiPandas und damit auch eigene Projekte wie Panda GreenTech."],
    ],
    sources: [SHOP],
  },
];
