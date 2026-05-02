const BLOCKLIST = [
  "fuck", "shit", "cunt", "nigger", "faggot", "retard",
];

export function isClean(text: string): boolean {
  const lower = text.toLowerCase();
  return !BLOCKLIST.some((w) => lower.includes(w));
}
