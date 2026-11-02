/**
 * Jahreszeiten und Feiertags-Design der Panda Toolbox.
 * Die Datumsgrenzen werden bewusst in der Zeitzone Europe/Vienna ausgewertet.
 */

export const SEASONAL_THEMES = ["spring", "summer", "autumn", "halloween", "winter", "christmas"] as const;
export type SeasonalTheme = (typeof SEASONAL_THEMES)[number];

export function getSeasonalTheme(date: Date = new Date()): SeasonalTheme {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Vienna",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  if ((month === 10 && day >= 15) || (month === 11 && day <= 3)) return "halloween";
  if (month === 12 || (month === 1 && day <= 6)) return "christmas";
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month === 9 || month === 10 || month === 11) return "autumn";
  return "winter";
}
