import type { Metadata } from "next";

import { PandaGames } from "@/components/panda-games";

export const metadata: Metadata = {
  title: "Panda Games",
  description: "Kostenlose Panda-Minispiele: Glückskapsel, Bambus-Fangen, Memory und Reaktionsspiel. Sammle Bambus-Boni für Flauschipanda.",
  alternates: { canonical: "/spiele" },
};

export default function PandaGamesPage() {
  return <PandaGames />;
}
