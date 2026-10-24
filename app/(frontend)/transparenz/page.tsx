import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Transparenz: Werbung, Affiliate-Links & Faktenprüfung",
  description: "Wie die Panda Toolbox Geld verdient, wie wir Werbung und Affiliate-Links kennzeichnen und wie wir Fakten prüfen.",
  alternates: { canonical: "/transparenz" },
};

export default function TransparenzPage() {
  return (
    <LegalPage title="Transparenz & Werbung" href="/transparenz">
      <p>
        Die Panda Toolbox ist kostenlos lesbar. Damit das so bleibt, verdienen wir an einigen Stellen Geld. Hier erklären
        wir offen, wie – und wie wir dafür sorgen, dass Empfehlungen trotzdem ehrlich bleiben.
      </p>

      <h2 id="affiliate">Affiliate-Links</h2>
      <p>
        Manche Links führen zu Händlern, mit denen wir eine Partnerschaft haben. Diese Links markieren wir mit einem
        Sternchen (<strong>*</strong>) und zusätzlich mit einem Hinweis am Artikelanfang. Kaufst du über einen solchen
        Link, erhalten wir eventuell eine Provision. Der Preis ändert sich für dich dadurch nicht.
      </p>
      <ul>
        <li>Wir empfehlen nur Produktarten, die zum Thema des Artikels passen und einen echten Nutzen haben.</li>
        <li>Eine Provision entscheidet nicht darüber, ob oder wie wir etwas bewerten.</li>
        <li>Preise und Verfügbarkeit nennen wir nur, wenn sie geprüft sind – maßgeblich ist immer der Händler.</li>
      </ul>

      <h2 id="werbung">Werbeanzeigen</h2>
      <p>
        Werbeflächen sind klar mit „Anzeige“ beschriftet und optisch vom redaktionellen Inhalt getrennt. Sie werden nur
        geladen, wenn du in den Cookie-Einstellungen der Kategorie „Werbung“ zugestimmt hast.
      </p>

      <h2 id="spenden">Spenden an Panda GreenTech</h2>
      <p>
        Auf vielen Seiten findest du die Spendenbox von Panda GreenTech. Spenden sind freiwillig und haben keinen
        Einfluss auf unsere Inhalte oder Empfehlungen. Wofür Spenden verwendet werden, beschreiben wir direkt in der
        Spendenbox und auf der Seite zu Panda GreenTech.
      </p>

      <h2 id="faktenpruefung">Faktenprüfung</h2>
      <p>
        Technische Angaben, Preise und rechtliche Informationen prüfen wir vor der Veröffentlichung anhand zuverlässiger
        Quellen, etwa Herstellerangaben, Behörden, Normungsorganisationen oder Automobilclubs. Jeder Artikel nennt am
        Ende seine Quellen und seinen Stand. Ältere Artikel werden regelmäßig zur Überprüfung vorgemerkt.
      </p>

      <h2 id="ki">Einsatz von KI</h2>
      <p>
        Wir nutzen KI-Werkzeuge als Hilfe, etwa für Entwürfe oder Gliederungen. Kein KI-generierter Text wird ungeprüft
        veröffentlicht – jeder Artikel wird von einem Menschen kontrolliert und freigegeben.
      </p>
    </LegalPage>
  );
}
