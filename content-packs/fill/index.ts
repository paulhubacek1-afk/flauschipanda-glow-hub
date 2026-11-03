import type { FillPage } from "../types";
import { babysKinder } from "./babys-kinder";
import { greentechPages } from "./greentech";
import { haushaltGesundheit } from "./haushalt-gesundheit";
import { kiCreator } from "./ki-creator";
import { tiereHaustiere } from "./tiere-haustiere";
import { tiereWildtiere } from "./tiere-wildtiere";
import { urlaubAutosMisc } from "./urlaub-autos-misc";
import { toolsMusikFinanzen } from "./tools-musik-finanzen";
import { zoosFreizeitparks } from "./zoos-freizeitparks";

/**
 * Nur redaktionell ausgearbeitete Seiten werden automatisch übernommen.
 * Nicht fertige Seiten bleiben Entwürfe, statt mit wiederholten Platzhaltertexten
 * veröffentlicht zu werden.
 */
export const fillPages: FillPage[] = [
  ...greentechPages,
  ...tiereHaustiere,
  ...tiereWildtiere,
  ...babysKinder,
  ...haushaltGesundheit,
  ...kiCreator,
  ...toolsMusikFinanzen,
  ...zoosFreizeitparks,
  ...urlaubAutosMisc,
];
