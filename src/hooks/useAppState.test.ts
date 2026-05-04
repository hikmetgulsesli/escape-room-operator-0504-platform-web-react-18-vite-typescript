import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useAppState } from "../hooks/useAppState";
import * as storage from "../utils/storage";

const mockLoadState = vi.spyOn(storage, "loadState");
const mockSaveState = vi.spyOn(storage, "saveState");

describe("useAppState", () => {
  beforeEach(() => {
    mockLoadState.mockReturnValue(null);
    mockSaveState.mockImplementation(() => {});
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it("should start on dashboard screen", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentScreen).toBe("dashboard");
  });

  it("should navigate between screens", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.dispatch({ type: "SET_SCREEN", screen: "logs" });
    });
    expect(result.current.state.currentScreen).toBe("logs");
  });

  it("should filter rooms by status", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.dispatch({ type: "SET_FILTER_STATUS", status: "in-game" });
    });
    const rooms = result.current.getFilteredRooms();
    expect(rooms.every((r) => r.status === "in-game")).toBe(true);
  });

  it("should select a room and switch to operations", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.dispatch({ type: "SELECT_ROOM", roomId: "room-1" });
    });
    expect(result.current.state.selectedRoomId).toBe("room-1");
    expect(result.current.state.currentScreen).toBe("operations");
  });

  it("should add and remove players", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.dispatch({ type: "SELECT_ROOM", roomId: "room-1" });
    });
    const initialCount = result.current.getSelectedRoom()?.players.length ?? 0;
    act(() => {
      result.current.dispatch({ type: "ADD_PLAYER", roomId: "room-1", name: "Test Oyuncu" });
    });
    expect(result.current.getSelectedRoom()?.players.length).toBe(initialCount + 1);
    const newPlayer = result.current.getSelectedRoom()?.players.find((p) => p.name === "Test Oyuncu");
    expect(newPlayer).toBeDefined();
    act(() => {
      result.current.dispatch({ type: "REMOVE_PLAYER", roomId: "room-1", playerId: newPlayer!.id });
    });
    expect(result.current.getSelectedRoom()?.players.length).toBe(initialCount);
  });

  it("should not exceed max players", () => {
    const { result } = renderHook(() => useAppState());
    const room = result.current.state.rooms.find((r) => r.id === "room-3");
    const max = room?.maxPlayers ?? 4;
    for (let i = 0; i < max + 2; i++) {
      act(() => {
        result.current.dispatch({ type: "ADD_PLAYER", roomId: "room-3", name: `Oyuncu ${i}` });
      });
    }
    const updatedRoom = result.current.state.rooms.find((r) => r.id === "room-3");
    expect(updatedRoom?.players.length).toBeLessThanOrEqual(max);
  });

  it("should toggle puzzle status through locked -> unlocked -> solved", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.dispatch({ type: "SELECT_ROOM", roomId: "room-1" });
    });
    const puzzle = result.current.getSelectedRoom()?.puzzles[2];
    expect(puzzle?.status).toBe("locked");
    act(() => {
      result.current.dispatch({ type: "TOGGLE_PUZZLE", roomId: "room-1", puzzleId: puzzle!.id });
    });
    const updated1 = result.current.state.rooms.find((r) => r.id === "room-1")?.puzzles.find((p) => p.id === puzzle!.id);
    expect(updated1?.status).toBe("unlocked");
    act(() => {
      result.current.dispatch({ type: "TOGGLE_PUZZLE", roomId: "room-1", puzzleId: puzzle!.id });
    });
    const updated2 = result.current.state.rooms.find((r) => r.id === "room-1")?.puzzles.find((p) => p.id === puzzle!.id);
    expect(updated2?.status).toBe("solved");
  });

  it("should start, pause, resume and stop a session", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.dispatch({ type: "START_SESSION", roomId: "room-3" });
    });
    expect(result.current.state.rooms.find((r) => r.id === "room-3")?.status).toBe("in-game");
    act(() => {
      result.current.dispatch({ type: "PAUSE_SESSION", roomId: "room-3" });
    });
    expect(result.current.state.rooms.find((r) => r.id === "room-3")?.status).toBe("paused");
    act(() => {
      result.current.dispatch({ type: "RESUME_SESSION", roomId: "room-3" });
    });
    expect(result.current.state.rooms.find((r) => r.id === "room-3")?.status).toBe("in-game");
    act(() => {
      result.current.dispatch({ type: "STOP_SESSION", roomId: "room-3" });
    });
    expect(result.current.state.rooms.find((r) => r.id === "room-3")?.status).toBe("completed");
  });

  it("should reset a room to available", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.dispatch({ type: "RESET_ROOM", roomId: "room-1" });
    });
    const room = result.current.state.rooms.find((r) => r.id === "room-1");
    expect(room?.status).toBe("available");
    expect(room?.players.length).toBe(0);
    expect(room?.puzzles.every((p) => p.status === "locked")).toBe(true);
  });

  it("should toggle emergency mode", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.emergencyActive).toBe(false);
    act(() => {
      result.current.dispatch({ type: "TOGGLE_EMERGENCY" });
    });
    expect(result.current.state.emergencyActive).toBe(true);
    expect(result.current.state.emergencyStartTime).toBeTruthy();
    act(() => {
      result.current.dispatch({ type: "RESOLVE_EMERGENCY" });
    });
    expect(result.current.state.emergencyActive).toBe(false);
  });

  it("should update settings", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.dispatch({ type: "UPDATE_SETTINGS", settings: { operatorName: "Test Operator" } });
    });
    expect(result.current.state.settings.operatorName).toBe("Test Operator");
  });

  it("should send a hint and add to logs", () => {
    const { result } = renderHook(() => useAppState());
    const initialLogCount = result.current.state.logs.length;
    act(() => {
      result.current.dispatch({ type: "SEND_HINT", roomId: "room-1", hint: "Test ipucu" });
    });
    expect(result.current.state.logs.length).toBe(initialLogCount + 1);
    const lastLog = result.current.state.logs[result.current.state.logs.length - 1];
    expect(lastLog.type).toBe("hint");
    expect(lastLog.details).toBe("Test ipucu");
  });

  it("should tick timer for in-game rooms", () => {
    const { result } = renderHook(() => useAppState());
    const roomBefore = result.current.state.rooms.find((r) => r.id === "room-1");
    const beforeTime = roomBefore?.timeRemaining ?? 0;
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    const roomAfter = result.current.state.rooms.find((r) => r.id === "room-1");
    expect(roomAfter?.timeRemaining).toBe(beforeTime - 1);
  });

  it("should persist state to localStorage", () => {
    renderHook(() => useAppState());
    expect(mockSaveState).toHaveBeenCalled();
  });

  it("should load persisted state if available", () => {
    const persisted: import("../types/domain").AppState = {
      currentScreen: "logs",
      selectedRoomId: null,
      rooms: [],
      logs: [],
      filterStatus: "all",
      searchQuery: "",
      logFilterRoom: "all",
      logFilterType: "all",
      emergencyActive: false,
      emergencyStartTime: null,
      settings: { operatorName: "X", accessLevel: "Y", soundAlerts: false, darkMode: true },
    };
    mockLoadState.mockReturnValue(persisted);
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentScreen).toBe("logs");
  });
});

describe("storage utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should export and import state", () => {
    const { result } = renderHook(() => useAppState());
    const exported = storage.exportState(result.current.state);
    const imported = storage.importState(exported);
    expect(imported).toBeTruthy();
    expect(imported?.rooms.length).toBe(result.current.state.rooms.length);
  });

  it("should return null for invalid import", () => {
    expect(storage.importState("not json")).toBeNull();
    expect(storage.importState('{"invalid": true}')).toBeNull();
  });
});
