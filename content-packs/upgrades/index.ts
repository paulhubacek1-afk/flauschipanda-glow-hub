import type { UpgradePage } from "../types";
import { europaParkGroup, europaParkUpgrades } from "./europa-park";

/** Ausführliche Neufassungen (Pilot: Europa-Park). */
export const upgradePages: UpgradePage[] = [...europaParkUpgrades];

/** Neue Beschreibungen für Unterthemen (nur wenn noch die alte drinsteht). */
export const groupUpgrades = [europaParkGroup];
