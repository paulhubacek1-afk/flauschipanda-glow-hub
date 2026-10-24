import {
  Baby,
  Bot,
  Car,
  Clapperboard,
  FerrisWheel,
  HeartPulse,
  House,
  Monitor,
  Music,
  PawPrint,
  PiggyBank,
  Plane,
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
  heart: HeartPulse,
  plane: Plane,
  monitor: Monitor,
};

export function CategoryIcon({ name, className }: { name: IconName; className?: string }) {
  if (name === "panda") return <PandaLogo className={cn("drop-shadow-none", className)} sizes="96px" />;
  const Icon = icons[name] ?? PawPrint;
  return <Icon className={className} aria-hidden="true" />;
}
