import type { FillPage } from "../types";
import { babysKinder } from "./babys-kinder";
import { tiereHaustiere } from "./tiere-haustiere";
import { tiereWildtiere } from "./tiere-wildtiere";

/** Inhalte für geplante Seiten – werden nur in noch LEERE Seiten übernommen (Money Pages ausgenommen). */
export const fillPages: FillPage[] = [...tiereHaustiere, ...tiereWildtiere, ...babysKinder];
