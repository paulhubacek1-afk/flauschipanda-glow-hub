import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dateFormatter = new Intl.DateTimeFormat("de-AT", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Vienna",
});

export function formatDate(date: Date) {
  return dateFormatter.format(date);
}

export function toIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
