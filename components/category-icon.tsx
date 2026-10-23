import {
  Baby,
  Bot,
  Car,
  Clapperboard,
  FerrisWheel,
  House,
  Music,
  PawPrint,
  PiggyBank,
  Trees,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/lib/hierarchy";
import { cn } from "@/lib/utils";

import { PandaLogo } from "./panda-logo";

const icons: Record<Exclude<IconName, "panda">, LucideIcon> = {
  paw: PawPrint,
  baby: Baby,
  house: House,
  bot: Bot,
  clapperboard: Clapperboard,
  wrench: Wrench,
  music: Music,
  piggy: PiggyBank,
  trees: Trees,
  ferris: FerrisWheel,
  car: Car,
  users: Users,
};

export function CategoryIcon({ name, className }: { name: IconName; className?: string }) {
  if (name === "panda") return <PandaLogo className={cn("drop-shadow-none", className)} />;
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
