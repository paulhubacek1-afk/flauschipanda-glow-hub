import type { FillPage } from "../types";
import { babysKinder } from "./babys-kinder";
import { greentechPages } from "./greentech";
import { haushaltGesundheit } from "./haushalt-gesundheit";
import { kiCreator } from "./ki-creator";
import { tiereHaustiere } from "./tiere-haustiere";
import { tiereWildtiere } from "./tiere-wildtiere";
import { toolsMusikFinanzen } from "./tools-musik-finanzen";
import { zoosFreizeitparks } from "./zoos-freizeitparks";

/** Inhalte für geplante Seiten – werden nur in noch LEERE Seiten übernommen (Money Pages ausgenommen). */
export const fillPages: FillPage[] = [
  ...greentechPages,
  ...tiereHaustiere,
  ...tiereWildtiere,
  ...babysKinder,
  ...haushaltGesundheit,
  ...kiCreator,
  ...toolsMusikFinanzen,
  ...zoosFreizeitparks,
];
