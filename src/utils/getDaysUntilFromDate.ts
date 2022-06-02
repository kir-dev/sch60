function calculateDays(date: Date | string) {
  if (typeof date === "string") return "-";
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
}

export function getTileText(date: Date | string) {
  const days = calculateDays(date);
  if (days === "-") return days;
  if (days === 0) return "Mai";
  if (days < 0) return "Vége";
  return days;
}

export function getCardText(date: Date | string) {
  const days = calculateDays(date);
  if (days === 0) return "Ma";
  if (days < 0) return "Vége";
  return days + " nap múlva";
}
