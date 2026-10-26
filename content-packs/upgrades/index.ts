import type { UpgradePage } from "../types";
import { europaParkGroup, europaParkUpgrades } from "./europa-park";
import { merchUpgrades } from "./merch";

/** Ausführliche Neufassungen (Pilot: Europa-Park). */
export const upgradePages: UpgradePage[] = [...europaParkUpgrades, ...merchUpgrades];

/** Neue Beschreibungen für Unterthemen (nur wenn noch die alte drinsteht). */
export const groupUpgrades = [europaParkGroup];
