import type { AppState } from "../types/domain";

const STORAGE_KEY = "escape-room-operator-state";

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors
  }
}

export function loadState(): AppState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AppState;
  } catch {
    return null;
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
}

export function exportState(state: AppState): string {
  return JSON.stringify(state, null, 2);
}

export function importState(json: string): AppState | null {
  try {
    const parsed = JSON.parse(json) as AppState;
    if (parsed && typeof parsed === "object" && Array.isArray(parsed.rooms) && Array.isArray(parsed.logs)) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}
