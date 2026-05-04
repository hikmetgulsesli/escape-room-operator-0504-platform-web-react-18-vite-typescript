// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Oda Detay Kontrolü
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { Room, LogEntry, AppScreen } from "../types/domain";

interface OdaDetayKontroluProps {
  room: Room;
  logs: LogEntry[];
  onNavigate: (screen: AppScreen) => void;
  onBack: () => void;
  onAddPlayer: (name: string) => void;
  onRemovePlayer: (playerId: string) => void;
  onTogglePuzzle: (puzzleId: string) => void;
  onSendHint: (hint: string) => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onStop: () => void;
  onToggleEmergency: () => void;
  formatTime: (seconds: number) => string;
}

export function OdaDetayKontrolu(props: OdaDetayKontroluProps) {
  const {
    room,
    logs,
    onNavigate,
    onBack,
    onAddPlayer,
    onRemovePlayer,
    onTogglePuzzle,
    onSendHint,
    onPause,
    onResume,
    onReset,
    onStop,
    onToggleEmergency,
    formatTime,
  } = props;

  const [newPlayerName, setNewPlayerName] = useState("");
  const [hintText, setHintText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const roomLogs = logs.filter((l) => l.roomId === room.id).slice(0, 6);

  const quickHints = [
    "Kasadaki sembollere dikkat edin.",
    "Ultraviyole ışığı kullanma zamanı.",
    "Duvarlardaki rakamlar sırayı belirler.",
  ];

  function puzzleClass(status: string) {
    switch (status) {
      case "solved": return "text-outline line-through group-hover:text-outline-variant";
      case "unlocked": return "text-on-surface";
      default: return "text-on-surface";
    }
  }

  function puzzleCheckbox(status: string) {
    switch (status) {
      case "solved": return true;
      case "unlocked": return false;
      default: return false;
    }
  }

  return (
    <>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav className="absolute left-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-lg border-r border-slate-800 shadow-2xl flex flex-col pt-16 pb-6 px-4" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8 px-2 flex items-center gap-3">
              <img alt="Komuta İstasyonu" className="w-10 h-10 rounded-full border border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8riB-G4ZNq0vO1HBaaGKEv6zdbjsxRgCfcv6dYgOB2YJTp2ZakeGwO30Vr4Zvg0zWoHAvC4wX8wV0xsoXH8WKWAXOnXGL_kbRR0QIFcRSm3r3BAcV0tIcoIXjq7i6IyaJXvGwBOjbJqd7-VMW297hdhoVPPVRh8vAg8NL9hJFills1F5Keb3KHaDkY3OfNwrSQ1rg1l-pGfNLRVAH7RcDeUihpHlfPd-tlaUOn33j1lCD4sKDBuRbLFz8W7LTl1wX2auast81vE" />
              <div>
                <p className="text-slate-100 font-bold text-sm tracking-normal capitalize">Alpha Sektör</p>
                <p className="text-slate-500 text-[10px] tracking-wider">Baş Operatör</p>
              </div>
            </div>
            <ul className="flex flex-col gap-2 flex-1">
              <li><button onClick={() => { onNavigate("dashboard"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">dashboard</span>Panorama</button></li>
              <li><button onClick={() => { onNavigate("operations"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded bg-blue-600/30 text-white border-r-2 border-blue-500 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">precision_manufacturing</span>Operasyonlar</button></li>
              <li><button onClick={() => { onNavigate("logs"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">list_alt</span>Olay Günlüğü</button></li>
              <li><button onClick={() => { onNavigate("analytics"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">analytics</span>Analizler</button></li>
              <li><button onClick={() => { onNavigate("settings"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">settings_input_component</span>Sistem Ayarları</button></li>
            </ul>
            <button onClick={() => { onNavigate("dashboard"); setMobileMenuOpen(false); }} className="mt-auto mb-6 bg-primary text-on-primary font-bold py-3 rounded w-full hover:bg-primary/90 transition-colors">YENİ OTURUM</button>
            <ul className="flex flex-col gap-2 border-t border-slate-800 pt-4">
              <li><button onClick={() => { onNavigate("support"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>help</span>Destek</button></li>
              <li><button onClick={() => { setShowLogoutConfirm(true); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>logout</span>Çıkış</button></li>
            </ul>
          </nav>
        </div>
      )}

      {/* TopNavBar */}
      <header className="bg-slate-900/80 backdrop-blur-md text-blue-500 dark:text-blue-400 font-inter tracking-tight text-sm fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 border-b border-slate-700/50">
        <div className="flex items-center gap-4">
          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-400 hover:text-white transition-colors p-2" aria-label="Menü">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="text-lg font-black tracking-tighter text-blue-500 uppercase">KOMUTA MERKEZİ</span>
          <div className="hidden sm:flex items-center bg-surface-container rounded-lg px-3 py-1.5 border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_0_1px_#adc6ff]">
            <span className="material-symbols-outlined text-outline-variant mr-2" style={{fontSize: "18px"}}>search</span>
            <input className="bg-transparent border-none outline-none text-on-surface text-body-sm w-48 placeholder-outline-variant p-0 focus:ring-0" placeholder="Ara..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={onToggleEmergency} className="bg-error text-on-error font-label-caps px-4 py-2 rounded flex items-center gap-2 hover:bg-error/90 transition-colors animate-pulse">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1", fontSize: "18px"}}>warning</span>
            ACİL DURDUR
          </button>
          <div className="flex items-center gap-4 border-l border-slate-700/50 pl-4">
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-center relative" aria-label="Bildirimler">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full animate-pulse"></span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-surface-container border border-outline-variant rounded-lg shadow-xl z-50 p-4">
                  <h3 className="font-headline-md text-headline-md mb-3 border-b border-outline-variant pb-2">Bildirimler</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <div className="flex gap-3 items-start p-2 rounded hover:bg-surface-container-high transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-primary text-[20px]">info</span>
                      <div>
                        <p className="font-body-sm text-body-sm text-on-surface">Oda operasyonunda yeni olay.</p>
                        <p className="text-outline-variant text-xs mt-1">1 dakika önce</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setShowNotifications(false)} className="w-full mt-3 text-center text-primary font-label-caps text-label-caps py-2 hover:bg-surface-container-high rounded transition-colors">Kapat</button>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => setShowProfile(!showProfile)} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-center" aria-label="Profil">
                <span className="material-symbols-outlined">person</span>
              </button>
              {showProfile && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-surface-container border border-outline-variant rounded-lg shadow-xl z-50 p-4">
                  <div className="flex items-center gap-3 mb-4 border-b border-outline-variant pb-3">
                    <img alt="Operatör Profili" className="w-10 h-10 rounded-full border border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIfuaj8PBeVuOPTdoM9SI74io__O3CY8pe3fvZEuuwg1qxMueWAarhyUehDWWmfHcLQ66rDjEnxlN-uY4sGibVD8GKI2A6edtwH9_alSxv-vZR_3GbSG1hEXxeSB37m_uufw-9Q5tDyl4-VpDLw8-tMk4x2RwvMIWHW3mpy3QVKGxF_5LbsXfUWJ_x6moZUBVhHchGRt3rThwtHcJogItYK6RQ9Mpq-tKvji149ib3HaZPi2-W5ao-7BtFYBdngkFkavEPArOcHMI" />
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">Alpha Sektör</h3>
                      <p className="font-body-sm text-body-sm text-outline">Baş Operatör</p>
                    </div>
                  </div>
                  <button onClick={() => { setShowProfile(false); onNavigate("settings"); }} className="w-full text-left px-3 py-2 rounded hover:bg-surface-container-high transition-colors flex items-center gap-2 text-on-surface font-body-sm">
                    <span className="material-symbols-outlined text-outline text-[18px]">settings</span>
                    Ayarlar
                  </button>
                  <button onClick={() => { setShowProfile(false); setShowLogoutConfirm(true); }} className="w-full text-left px-3 py-2 rounded hover:bg-surface-container-high transition-colors flex items-center gap-2 text-error font-body-sm">
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    Çıkış
                  </button>
                </div>
              )}
            </div>
            <img alt="Operatör Profili" className="w-8 h-8 rounded-full border border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIfuaj8PBeVuOPTdoM9SI74io__O3CY8pe3fvZEuuwg1qxMueWAarhyUehDWWmfHcLQ66rDjEnxlN-uY4sGibVD8GKI2A6edtwH9_alSxv-vZR_3GbSG1hEXxeSB37m_uufw-9Q5tDyl4-VpDLw8-tMk4x2RwvMIWHW3mpy3QVKGxF_5LbsXfUWJ_x6moZUBVhHchGRt3rThwtHcJogItYK6RQ9Mpq-tKvji149ib3HaZPi2-W5ao-7BtFYBdngkFkavEPArOcHMI" />
          </div>
        </div>
      </header>
      <div className="flex flex-1 pt-14">
        {/* SideNavBar */}
        <nav className="bg-slate-900/90 backdrop-blur-lg text-blue-500 dark:text-blue-400 font-inter text-xs font-medium uppercase tracking-widest fixed left-0 top-0 h-full w-64 border-r border-slate-800 shadow-2xl flex flex-col pt-16 pb-6 px-4 z-40 transition-all duration-200 ease-in-out hidden md:flex">
          <div className="mb-8 px-2 flex items-center gap-3">
            <img alt="Komuta İstasyonu" className="w-10 h-10 rounded-full border border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8riB-G4ZNq0vO1HBaaGKEv6zdbjsxRgCfcv6dYgOB2YJTp2ZakeGwO30Vr4Zvg0zWoHAvC4wX8wV0xsoXH8WKWAXOnXGL_kbRR0QIFcRSm3r3BAcV0tIcoIXjq7i6IyaJXvGwBOjbJqd7-VMW297hdhoVPPVRh8vAg8NL9hJFills1F5Keb3KHaDkY3OfNwrSQ1rg1l-pGfNLRVAH7RcDeUihpHlfPd-tlaUOn33j1lCD4sKDBuRbLFz8W7LTl1wX2auast81vE" />
            <div>
              <p className="text-slate-100 font-bold text-sm tracking-normal capitalize">Alpha Sektör</p>
              <p className="text-slate-500 text-[10px] tracking-wider">Baş Operatör</p>
            </div>
          </div>
          <ul className="flex flex-col gap-2 flex-1">
            <li><button onClick={() => onNavigate("dashboard")} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">dashboard</span>Panorama</button></li>
            <li><button onClick={() => onNavigate("operations")} className="flex items-center gap-3 px-4 py-3 rounded bg-blue-600/30 text-white border-r-2 border-blue-500 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">precision_manufacturing</span>Operasyonlar</button></li>
            <li><button onClick={() => onNavigate("logs")} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">list_alt</span>Olay Günlüğü</button></li>
            <li><button onClick={() => onNavigate("analytics")} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">analytics</span>Analizler</button></li>
            <li><button onClick={() => onNavigate("settings")} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined">settings_input_component</span>Sistem Ayarları</button></li>
          </ul>
          <button onClick={() => onNavigate("dashboard")} className="mt-auto mb-6 bg-primary text-on-primary font-bold py-3 rounded w-full hover:bg-primary/90 transition-colors">YENİ OTURUM</button>
          <ul className="flex flex-col gap-2 border-t border-slate-800 pt-4">
            <li><button onClick={() => onNavigate("support")} className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>help</span>Destek</button></li>
            <li><button onClick={() => setShowLogoutConfirm(true)} className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors w-full text-left"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>logout</span>Çıkış</button></li>
          </ul>
        </nav>
        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column: Operations */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Header / Timer */}
            <div className="glass-panel rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-1">{room.name}</h1>
                <div className="flex gap-2">
                  {room.status === "in-game" && <span className="bg-error/10 text-error border border-error/30 font-label-caps text-label-caps px-2 py-1 rounded">CANLI</span>}
                  {room.status === "paused" && <span className="bg-tertiary/10 text-tertiary border border-tertiary/30 font-label-caps text-label-caps px-2 py-1 rounded">DURAKLATILDI</span>}
                  <span className="bg-primary/10 text-primary border border-primary/30 font-label-caps text-label-caps px-2 py-1 rounded">ZORLUK: {room.difficulty}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`font-display-timer text-display-timer tracking-tight ${room.timeRemaining < 600 ? "text-error" : "text-primary"}`}>{formatTime(room.timeRemaining)}</div>
                <div className="flex gap-3 mt-2">
                  {room.status === "in-game" && (
                    <button onClick={onPause} className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant px-4 py-2 rounded flex items-center justify-center transition-colors" aria-label="Duraklat">
                      <span className="material-symbols-outlined">pause</span>
                    </button>
                  )}
                  {room.status === "paused" && (
                    <button onClick={onResume} className="bg-primary text-on-primary px-6 py-2 rounded font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined">play_arrow</span>DEVAM
                    </button>
                  )}
                  <button onClick={onReset} className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant px-4 py-2 rounded flex items-center justify-center transition-colors" aria-label="Sıfırla">
                    <span className="material-symbols-outlined">restart_alt</span>
                  </button>
                  <button onClick={onStop} className="bg-error/10 border border-error/30 text-error hover:bg-error/20 px-4 py-2 rounded flex items-center justify-center transition-colors" aria-label="Durdur">
                    <span className="material-symbols-outlined">stop</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Surveillance */}
            <div className={`glass-panel rounded-xl overflow-hidden relative aspect-video border border-slate-700 group ${fullscreen ? "fixed inset-0 z-[200] aspect-auto" : ""}`}>
              {room.image ? (
                <img alt="Gözetim Kamerası" className="w-full h-full object-cover opacity-70" src={room.image} />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <span className="material-symbols-outlined text-[64px] text-[#334155]">videocam_off</span>
                </div>
              )}
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-slate-700 px-3 py-1 rounded">
                <span className="font-label-caps text-label-caps text-primary tracking-widest">KAM 01 - ANA LAB</span>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => setFullscreen(!fullscreen)} className="bg-background/80 text-on-surface p-2 rounded hover:bg-surface-variant border border-slate-700" aria-label="Tam Ekran"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>{fullscreen ? "fullscreen_exit" : "fullscreen"}</span></button>
                <button onClick={() => setMicActive(!micActive)} className={`bg-background/80 text-on-surface p-2 rounded hover:bg-surface-variant border border-slate-700 ${micActive ? "bg-primary/20 border-primary" : ""}`} aria-label="Mikrofon"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>{micActive ? "mic" : "mic_off"}</span></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Clue System */}
              <div className="glass-panel rounded-xl p-5 flex flex-col">
                <h2 className="font-headline-md text-headline-md border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                  İpucu Gönderimi
                </h2>
                <div className="space-y-3 mb-4">
                  {quickHints.map((h, i) => (
                    <button key={i} onClick={() => onSendHint(h)} className="w-full text-left bg-surface-container hover:bg-surface-variant border border-outline-variant p-3 rounded text-body-sm text-on-surface transition-colors flex justify-between items-center">
                      {h}
                      <span className="material-symbols-outlined text-outline-variant" style={{fontSize: "16px"}}>send</span>
                    </button>
                  ))}
                </div>
                <div className="mt-auto relative">
                  <textarea
                    className="w-full bg-surface-dim border border-outline-variant rounded-lg p-3 text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none h-24 placeholder-outline-variant"
                    placeholder="Özel mesaj yazın..."
                    value={hintText}
                    onChange={(e) => setHintText(e.target.value)}
                  />
                  <button onClick={() => { if (hintText.trim()) { onSendHint(hintText.trim()); setHintText(""); } }} className="absolute bottom-3 right-3 bg-primary text-on-primary p-1.5 rounded hover:bg-primary/90 transition-colors" aria-label="Gönder">
                    <span className="material-symbols-outlined" style={{fontSize: "18px"}}>send</span>
                  </button>
                </div>
              </div>
              {/* Puzzle Checklist */}
              <div className="glass-panel rounded-xl p-5 flex flex-col">
                <h2 className="font-headline-md text-headline-md border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">check_box</span>
                  Bulmaca Durumu
                </h2>
                <div className="space-y-1 flex-1 overflow-y-auto pr-2">
                  {room.puzzles.map((puzzle) => (
                    <label key={puzzle.id} className="flex items-center gap-3 p-2 hover:bg-surface-container rounded cursor-pointer transition-colors group">
                      <input
                        checked={puzzleCheckbox(puzzle.status)}
                        onChange={() => onTogglePuzzle(puzzle.id)}
                        className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-transparent cursor-pointer"
                        type="checkbox"
                      />
                      <span className={`font-body-base text-body-base ${puzzleClass(puzzle.status)}`}>{puzzle.name}</span>
                      {puzzle.status === "solved" && <span className="ml-auto text-primary text-xs">ÇÖZÜLDÜ</span>}
                      {puzzle.status === "unlocked" && <span className="ml-auto text-tertiary text-xs">AÇIK</span>}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Sidebar Panels */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            {/* Player List */}
            <div className="glass-panel rounded-xl p-5">
              <div className="flex justify-between items-center border-b border-slate-700 pb-3 mb-4">
                <h2 className="font-headline-md text-headline-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">group</span>
                  Oyuncular
                </h2>
                <span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-2 py-1 rounded">{room.players.length}/{room.maxPlayers}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {room.players.map((player) => (
                  <li key={player.id} className="flex justify-between items-center bg-surface-container/50 p-2 rounded border border-transparent hover:border-slate-700">
                    <span className="font-body-sm text-body-sm text-on-surface">{player.name}</span>
                    <button onClick={() => onRemovePlayer(player.id)} className="text-error hover:text-error-container transition-colors" aria-label="Kaldır">
                      <span className="material-symbols-outlined" style={{fontSize: "16px"}}>close</span>
                    </button>
                  </li>
                ))}
                {room.players.length === 0 && (
                  <li className="text-center text-outline font-body-sm py-2">Henüz oyuncu eklenmedi.</li>
                )}
              </ul>
              <div className="flex gap-2">
                <input
                  className="flex-1 bg-surface-dim border border-outline-variant rounded p-2 text-body-sm text-on-surface focus:border-primary outline-none"
                  placeholder="Yeni oyuncu..."
                  type="text"
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && newPlayerName.trim()) { onAddPlayer(newPlayerName.trim()); setNewPlayerName(""); } }}
                />
                <button onClick={() => { if (newPlayerName.trim()) { onAddPlayer(newPlayerName.trim()); setNewPlayerName(""); } }} className="bg-surface-container border border-outline-variant text-on-surface p-2 rounded hover:bg-surface-variant transition-colors" aria-label="Ekle">
                  <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
                </button>
              </div>
            </div>
            {/* Event Log */}
            <div className="glass-panel rounded-xl p-5 flex-1 flex flex-col">
              <h2 className="font-headline-md text-headline-md border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">history</span>
                Olay Günlüğü
              </h2>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 font-mono-data text-body-sm">
                {roomLogs.length === 0 && (
                  <div className="text-center text-outline-variant py-4">Kayıt bulunmamaktadır.</div>
                )}
                {roomLogs.map((log) => (
                  <div key={log.id} className="flex gap-3">
                    <span className="text-outline-variant w-12 shrink-0">{new Date(log.timestamp).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}</span>
                    <div className={`border-l-2 pl-2 ${log.type === "error" || log.type === "emergency" ? "text-error border-error" : log.type === "hint" ? "text-primary border-primary" : log.type === "puzzle" ? "text-secondary border-secondary" : "text-on-surface border-outline-variant"}`}>
                      {log.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Inventory / Objects */}
            <div className="glass-panel rounded-xl p-5">
              <h2 className="font-headline-md text-headline-md border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container">inventory_2</span>
                Oda Envanteri
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {room.inventory.map((item) => (
                  <div key={item.id} className={`bg-surface-container border rounded p-3 flex flex-col items-center justify-center text-center gap-2 ${item.active ? "border-primary shadow-[0_0_10px_rgba(77,142,255,0.1)]" : "border-outline-variant opacity-50"}`}>
                    <span className={`material-symbols-outlined ${item.active ? "text-primary" : "text-outline-variant"}`}>{item.icon}</span>
                    <span className={`font-label-caps text-label-caps ${item.active ? "text-primary" : "text-on-surface"}`}>{item.name}</span>
                  </div>
                ))}
                {room.inventory.length === 0 && (
                  <div className="col-span-2 text-center text-outline font-body-sm py-2">Envanter boş.</div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-surface border border-outline-variant rounded-lg shadow-2xl p-6 w-full max-w-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Çıkış Onayı</h2>
            <p className="font-body-base text-body-base text-on-surface-variant mb-6">Çıkış yapmak istediğinize emin misiniz? Aktif oturumlar kapanmayacak.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowLogoutConfirm(false)} className="flex-1 bg-surface-container border border-outline-variant text-on-surface font-body-base py-2 rounded hover:bg-surface-variant transition-colors">
                İptal
              </button>
              <button onClick={() => { setShowLogoutConfirm(false); onNavigate("dashboard"); }} className="flex-1 bg-error text-on-error font-body-base py-2 rounded hover:bg-error/90 transition-colors">
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
