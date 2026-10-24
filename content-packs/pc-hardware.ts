import { pcGroupsPart1 } from "./pc-hardware-1";
import { pcGroupsPart2 } from "./pc-hardware-2";
import type { ContentPack } from "./types";

/** Inhaltspaket „PC & Hardware“: 7 Unterthemen mit 20 fertigen Ratgeberseiten. */
export const pcHardwarePack: ContentPack = {
  id: "pc-hardware-v1",
  categorySlug: "pc-und-hardware",
  icon: "monitor",
  hue: 250,
  groups: [...pcGroupsPart1, ...pcGroupsPart2],
};
