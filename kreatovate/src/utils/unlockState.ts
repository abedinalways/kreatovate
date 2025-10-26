const KEY = "solution_unlocked";
const TOKEN_KEY = "solution_token";

export function getUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY) === "true";
}

export function setUnlocked(v: boolean): void {
  if (typeof window === "undefined") return;
  if (v) localStorage.setItem(KEY, "true");
  else localStorage.removeItem(KEY);
}

export function saveToken(token?: string) {
  if (typeof window === "undefined" || !token) return;
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}
