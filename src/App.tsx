import { useEffect } from "react";
import { useAppState } from "./hooks/useAppState";
import { AnaOperasyonPanosu } from "./screens/AnaOperasyonPanosu";
import { OdaDetayKontrolu } from "./screens/OdaDetayKontrolu";
import { OlayGunlugu } from "./screens/OlayGunlugu";
import { SistemAyarlari } from "./screens/SistemAyarlari";
import { AcilDurumPaneli } from "./screens/AcilDurumPaneli";
import { exportState, importState } from "./utils/storage";

export default function App() {
  useEffect(() => {
    document.title = "Kaçış Odası Operasyon Panosu";
  }, []);
  const {
    state,
    dispatch,
    getFilteredRooms,
    getFilteredLogs,
    getSelectedRoom,
    formatTime,
  } = useAppState();

  const rooms = getFilteredRooms();
  const logs = getFilteredLogs();
  const selectedRoom = getSelectedRoom();

  const handleNavigate = (screen: typeof state.currentScreen) => {
    if (screen === "analytics" || screen === "support") return;
    dispatch({ type: "SET_SCREEN", screen });
  };

  const handleExport = (_format: "csv" | "json") => {
    const data = exportState(state);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `escape-room-backup.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (json: string) => {
    const imported = importState(json);
    if (imported) {
      dispatch({ type: "IMPORT_STATE", state: imported });
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {state.currentScreen === "dashboard" && (
        <AnaOperasyonPanosu
          rooms={rooms}
          filterStatus={state.filterStatus}
          searchQuery={state.searchQuery}
          operatorName={state.settings.operatorName}
          accessLevel={state.settings.accessLevel}
          onFilterChange={(status) => dispatch({ type: "SET_FILTER_STATUS", status })}
          onSearchChange={(query) => dispatch({ type: "SET_SEARCH", query })}
          onNavigate={handleNavigate}
          onSelectRoom={(roomId) => dispatch({ type: "SELECT_ROOM", roomId })}
          onToggleEmergency={() => dispatch({ type: "TOGGLE_EMERGENCY" })}
          onStartSession={(roomId) => dispatch({ type: "START_SESSION", roomId })}
          formatTime={formatTime}
        />
      )}
      {state.currentScreen === "operations" && selectedRoom && (
        <OdaDetayKontrolu
          room={selectedRoom}
          logs={logs}
          onNavigate={handleNavigate}
          onBack={() => dispatch({ type: "SET_SCREEN", screen: "dashboard" })}
          onAddPlayer={(name) => dispatch({ type: "ADD_PLAYER", roomId: selectedRoom.id, name })}
          onRemovePlayer={(playerId) => dispatch({ type: "REMOVE_PLAYER", roomId: selectedRoom.id, playerId })}
          onTogglePuzzle={(puzzleId) => dispatch({ type: "TOGGLE_PUZZLE", roomId: selectedRoom.id, puzzleId })}
          onSendHint={(hint) => dispatch({ type: "SEND_HINT", roomId: selectedRoom.id, hint })}
          onPause={() => dispatch({ type: "PAUSE_SESSION", roomId: selectedRoom.id })}
          onResume={() => dispatch({ type: "RESUME_SESSION", roomId: selectedRoom.id })}
          onReset={() => dispatch({ type: "RESET_ROOM", roomId: selectedRoom.id })}
          onStop={() => dispatch({ type: "STOP_SESSION", roomId: selectedRoom.id })}
          onToggleEmergency={() => dispatch({ type: "TOGGLE_EMERGENCY" })}
          formatTime={formatTime}
        />
      )}
      {state.currentScreen === "logs" && (
        <OlayGunlugu
          logs={logs}
          logFilterRoom={state.logFilterRoom}
          logFilterType={state.logFilterType}
          searchQuery={state.searchQuery}
          operatorName={state.settings.operatorName}
          accessLevel={state.settings.accessLevel}
          onNavigate={handleNavigate}
          onFilterChange={(room, filterType) => dispatch({ type: "SET_LOG_FILTERS", room, filterType })}
          onSearchChange={(query) => dispatch({ type: "SET_SEARCH", query })}
          onToggleEmergency={() => dispatch({ type: "TOGGLE_EMERGENCY" })}
          onExport={handleExport}
        />
      )}
      {state.currentScreen === "settings" && (
        <SistemAyarlari
          settings={state.settings}
          onNavigate={handleNavigate}
          onUpdateSettings={(settings) => dispatch({ type: "UPDATE_SETTINGS", settings })}
          onClearStorage={() => dispatch({ type: "CLEAR_STORAGE" })}
          onExport={() => handleExport("json")}
          onImport={handleImport}
          onReset={() => dispatch({ type: "RESET_TO_DEFAULTS" })}
          onToggleEmergency={() => dispatch({ type: "TOGGLE_EMERGENCY" })}
        />
      )}
      <AcilDurumPaneli
        active={state.emergencyActive}
        startTime={state.emergencyStartTime}
        onResolve={(note) => dispatch({ type: "RESOLVE_EMERGENCY", note })}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
