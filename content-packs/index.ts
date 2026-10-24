import { pcHardwarePack } from "./pc-hardware";
import { wissenschaftPack } from "./wissenschaft";
import type { ContentPack } from "./types";

/** Alle Inhaltspakete, die beim Start ins CMS übernommen werden (nur in leere Bereiche). */
export const contentPacks: ContentPack[] = [pcHardwarePack, wissenschaftPack];
