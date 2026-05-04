export type RoomStatus = "available" | "in-game" | "paused" | "completed" | "maintenance";

export type PuzzleStatus = "locked" | "unlocked" | "solved";

export type LogType = "info" | "warning" | "error" | "hint" | "player" | "system" | "puzzle" | "emergency" | "entry_exit";

export type AppScreen = "dashboard" | "operations" | "logs" | "settings" | "analytics" | "support";

export interface Player {
  id: string;
  name: string;
}

export interface Puzzle {
  id: string;
  name: string;
  status: PuzzleStatus;
}

export interface InventoryItem {
  id: string;
  name: string;
  icon: string;
  active: boolean;
}

export interface Room {
  id: string;
  name: string;
  sector: string;
  status: RoomStatus;
  difficulty: "DÜŞÜK" | "ORTA" | "YÜKSEK";
  maxPlayers: number;
  players: Player[];
  puzzles: Puzzle[];
  inventory: InventoryItem[];
  timeRemaining: number; // seconds
  totalTime: number; // seconds
  elapsedTime: number; // seconds
  startTime: string | null;
  image?: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  roomId: string;
  roomName: string;
  type: LogType;
  title: string;
  details: string;
}

export interface AppSettings {
  operatorName: string;
  accessLevel: string;
  soundAlerts: boolean;
  darkMode: boolean;
}

export interface AppState {
  currentScreen: AppScreen;
  selectedRoomId: string | null;
  rooms: Room[];
  logs: LogEntry[];
  filterStatus: "all" | "available" | "in-game" | "paused" | "maintenance";
  searchQuery: string;
  logFilterRoom: string;
  logFilterType: LogType | "all";
  emergencyActive: boolean;
  emergencyStartTime: string | null;
  settings: AppSettings;
}

export type AppAction =
  | { type: "SET_SCREEN"; screen: AppScreen }
  | { type: "SELECT_ROOM"; roomId: string }
  | { type: "START_SESSION"; roomId: string }
  | { type: "PAUSE_SESSION"; roomId: string }
  | { type: "RESUME_SESSION"; roomId: string }
  | { type: "STOP_SESSION"; roomId: string }
  | { type: "RESET_ROOM"; roomId: string }
  | { type: "ADD_PLAYER"; roomId: string; name: string }
  | { type: "REMOVE_PLAYER"; roomId: string; playerId: string }
  | { type: "TOGGLE_PUZZLE"; roomId: string; puzzleId: string }
  | { type: "SEND_HINT"; roomId: string; hint: string }
  | { type: "SET_FILTER_STATUS"; status: AppState["filterStatus"] }
  | { type: "SET_SEARCH"; query: string }
  | { type: "SET_LOG_FILTERS"; room: string; filterType: LogType | "all" }
  | { type: "TOGGLE_EMERGENCY" }
  | { type: "RESOLVE_EMERGENCY" }
  | { type: "UPDATE_SETTINGS"; settings: Partial<AppSettings> }
  | { type: "CLEAR_STORAGE" }
  | { type: "RESET_TO_DEFAULTS" }
  | { type: "IMPORT_STATE"; state: AppState }
  | { type: "TICK_TIMER"; roomId: string };
