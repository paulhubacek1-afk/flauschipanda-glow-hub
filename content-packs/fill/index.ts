import { createProsCons } from "../../lib/editorial";
import { allPageNodes } from "../../lib/hierarchy";
import type { FillPage } from "../types";
import { babysKinder } from "./babys-kinder";
import { createFallbackFillPages } from "./fallback";
import { greentechPages } from "./greentech";
import { haushaltGesundheit } from "./haushalt-gesundheit";
import { kiCreator } from "./ki-creator";
import { tiereHaustiere } from "./tiere-haustiere";
import { tiereWildtiere } from "./tiere-wildtiere";
import { urlaubAutosMisc } from "./urlaub-autos-misc";
import { toolsMusikFinanzen } from "./tools-musik-finanzen";
import { zoosFreizeitparks } from "./zoos-freizeitparks";

/**
 * Kuratierte Artikel haben Vorrang. Für jede übrige Seite der Hierarchie gibt es
 * einen eigenen, thematisch passenden Startartikel. Leere CMS-Seiten werden damit
 * beim nächsten verfügbaren Payload-Start ergänzt.
 */
const curatedPages: FillPage[] = [
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

const titleByPath = new Map(allPageNodes().map((node) => [node.id, node.page.title]));
const curatedPaths = new Set(curatedPages.map((page) => page.path));

const enrichedCurated = curatedPages.map((page) => ({
  ...page,
  prosCons: page.prosCons ?? createProsCons(page.path, titleByPath.get(page.path) ?? page.path.split("/").at(-1) ?? "Thema", page.markdown),
}));

const generatedPages = createFallbackFillPages().filter((page) => !curatedPaths.has(page.path));

export const fillPages: FillPage[] = [...enrichedCurated, ...generatedPages];
