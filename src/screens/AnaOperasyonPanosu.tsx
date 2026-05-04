// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Operasyon Panosu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { Room, AppScreen } from "../types/domain";

interface AnaOperasyonPanosuProps {
  rooms: Room[];
  filterStatus: "all" | "available" | "in-game" | "paused" | "maintenance";
  searchQuery: string;
  operatorName: string;
  accessLevel: string;
  onFilterChange: (status: AnaOperasyonPanosuProps["filterStatus"]) => void;
  onSearchChange: (query: string) => void;
  onNavigate: (screen: AppScreen) => void;
  onSelectRoom: (roomId: string) => void;
  onToggleEmergency: () => void;
  onStartSession: (roomId: string) => void;
  formatTime: (seconds: number) => string;
}

export function AnaOperasyonPanosu(props: AnaOperasyonPanosuProps) {
  const {
    rooms,
    filterStatus,
    searchQuery,
    operatorName,
    accessLevel,
    onFilterChange,
    onSearchChange,
    onNavigate,
    onSelectRoom,
    onToggleEmergency,
    onStartSession,
    formatTime,
  } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allCount = rooms.length;
  const activeCount = rooms.filter((r) => r.status === "in-game" || r.status === "paused").length;
  const emptyCount = rooms.filter((r) => r.status === "available").length;
  const maintCount = rooms.filter((r) => r.status === "maintenance").length;

  function statusLabel(status: Room["status"]) {
    switch (status) {
      case "available": return "BOŞ";
      case "in-game": return "AKTİF";
      case "paused": return "DURAKLATILDI";
      case "completed": return "TAMAMLANDI";
      case "maintenance": return "BAKIM";
    }
  }

  function statusBadgeClass(status: Room["status"]) {
    switch (status) {
      case "in-game": return "bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/50";
      case "paused": return "bg-tertiary/20 text-tertiary border border-tertiary/50";
      case "available": return "bg-surface-container text-outline border border-outline-variant";
      case "maintenance": return "bg-tertiary-container/20 text-tertiary-container border border-tertiary-container/50";
      case "completed": return "bg-surface-variant text-on-surface-variant border border-outline-variant";
    }
  }

  return (
    <>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav className="absolute left-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-lg border-r border-slate-800 shadow-2xl flex flex-col pt-16 pb-6 px-4" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8 px-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden shrink-0 border border-outline-variant">
                <img alt="Operatör Profili" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByuWeCLpzTumpHGakWtTg_j6Doi1t9zMFb3U_lQQpUxDLYu1HSHMpGLqgljNHajqTv3KiAxXLDx4gZVQSOQCe8o1YuMJ160EH6q4RKegE-dvP53m7xlxd2M2UmRfPoNUAK8-7XrXcUQ5YoAsRKtFfZ9w0NrtYVUM_K9IX_2pHo7-sIEIsBE-jfaKpqZ62Nd0kjCmRjGjiFWHEsMVPSWBDeJxDknbOs7Z1PjccfWDfx_mynTMURA8PyKgwuSiPLRzA9eBuzlFbUtAg" />
              </div>
              <div>
                <h2 className="font-headline-md text-slate-100 text-headline-md">{operatorName}</h2>
                <p className="font-body-sm text-outline text-body-sm">{accessLevel}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-xs overflow-y-auto">
              <button onClick={() => { onNavigate("dashboard"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-md py-sm rounded-lg bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest">
                <span className="material-symbols-outlined">dashboard</span>
                Panorama
              </button>
              <button onClick={() => { onNavigate("operations"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest">
                <span className="material-symbols-outlined">precision_manufacturing</span>
                Operasyonlar
              </button>
              <button onClick={() => { onNavigate("logs"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest">
                <span className="material-symbols-outlined">list_alt</span>
                Olay Günlüğü
              </button>
              <button onClick={() => { onNavigate("analytics"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest">
                <span className="material-symbols-outlined">analytics</span>
                Analizler
              </button>
              <button onClick={() => { onNavigate("settings"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest">
                <span className="material-symbols-outlined">settings_input_component</span>
                Sistem Ayarları
              </button>
            </div>
            <div className="mt-auto pt-md border-t border-slate-800 flex flex-col gap-xs">
              <button onClick={() => { onNavigate("support"); setMobileMenuOpen(false); }} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest">
                <span className="material-symbols-outlined">help</span>
                Destek
              </button>
              <button onClick={() => {}} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest text-left">
                <span className="material-symbols-outlined">logout</span>
                <span>Çıkış</span>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* SideNavBar Component */}
      <nav className="hidden md:flex flex-col h-full pt-16 pb-6 px-4 bg-slate-900/90 backdrop-blur-lg border-r border-slate-800 shadow-2xl transition-all duration-200 ease-in-out fixed left-0 top-0 w-64 z-40">
        <div className="mb-xl flex items-center gap-sm">
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden shrink-0 border border-outline-variant">
            <img alt="Operatör Profili" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByuWeCLpzTumpHGakWtTg_j6Doi1t9zMFb3U_lQQpUxDLYu1HSHMpGLqgljNHajqTv3KiAxXLDx4gZVQSOQCe8o1YuMJ160EH6q4RKegE-dvP53m7xlxd2M2UmRfPoNUAK8-7XrXcUQ5YoAsRKtFfZ9w0NrtYVUM_K9IX_2pHo7-sIEIsBE-jfaKpqZ62Nd0kjCmRjGjiFWHEsMVPSWBDeJxDknbOs7Z1PjccfWDfx_mynTMURA8PyKgwuSiPLRzA9eBuzlFbUtAg" />
          </div>
          <div>
            <h2 className="font-headline-md text-slate-100 text-headline-md">{operatorName}</h2>
            <p className="font-body-sm text-outline text-body-sm">{accessLevel}</p>
          </div>
        </div>
        <button onClick={() => {}} className="mb-lg w-full bg-[#3B82F6] hover:bg-primary-container text-white font-label-caps text-label-caps py-sm px-md rounded transition-colors flex items-center justify-center gap-sm">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
          YENİ OTURUM
        </button>
        <div className="flex-1 flex flex-col gap-xs overflow-y-auto">
          <button onClick={() => onNavigate("dashboard")} className="flex items-center gap-md px-md py-sm rounded-lg bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest text-left">
            <span className="material-symbols-outlined">dashboard</span>
            Panorama
          </button>
          <button onClick={() => onNavigate("operations")} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest text-left">
            <span className="material-symbols-outlined">precision_manufacturing</span>
            Operasyonlar
          </button>
          <button onClick={() => onNavigate("logs")} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest text-left">
            <span className="material-symbols-outlined">list_alt</span>
            Olay Günlüğü
          </button>
          <button onClick={() => onNavigate("analytics")} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest text-left">
            <span className="material-symbols-outlined">analytics</span>
            Analizler
          </button>
          <button onClick={() => onNavigate("settings")} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest text-left">
            <span className="material-symbols-outlined">settings_input_component</span>
            Sistem Ayarları
          </button>
        </div>
        <div className="mt-auto pt-md border-t border-slate-800 flex flex-col gap-xs">
          <button onClick={() => onNavigate("support")} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest text-left">
            <span className="material-symbols-outlined">help</span>
            Destek
          </button>
          <button onClick={() => {}} className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest text-left">
            <span className="material-symbols-outlined">logout</span>
            <span>Çıkış</span>
          </button>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 md:ml-64 relative z-0">
        {/* TopNavBar Component */}
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 bg-slate-900/80 backdrop-blur-md docked full-width border-b border-slate-700/50 flat no shadows text-blue-500 dark:text-blue-400 font-inter tracking-tight text-sm transition-all md:w-[calc(100%-16rem)]">
          <div className="flex items-center gap-lg">
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-400 hover:text-white transition-colors p-2" aria-label="Menü">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="text-lg font-black tracking-tighter text-blue-500 uppercase">KOMUTA MERKEZİ</div>
            {/* Search Bar */}
            <div className="hidden sm:flex items-center bg-surface-container rounded-full px-md py-xs border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all w-64">
              <span className="material-symbols-outlined text-outline mr-sm text-[18px]">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body-sm text-body-sm placeholder:text-outline p-0"
                placeholder="Oda Ara..."
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-xs text-slate-400 hover:bg-slate-800/50 transition-colors rounded-full flex items-center justify-center" aria-label="Bildirimler">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button onClick={() => onNavigate("settings")} className="p-xs text-slate-400 hover:bg-slate-800/50 transition-colors rounded-full flex items-center justify-center" aria-label="Ayarlar">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="w-px h-6 bg-slate-700 mx-xs"></div>
            <button onClick={onToggleEmergency} className="bg-[#EF4444] hover:bg-red-600 text-white font-label-caps text-label-caps py-xs px-md rounded transition-colors flex items-center gap-xs emergency-pulse">
              <span className="material-symbols-outlined text-[16px]">warning</span>
              ACİL DURDUR
            </button>
          </div>
        </header>
        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-gutter pt-20">
          {/* Filter & Status Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md gap-md">
            <div className="flex gap-sm flex-wrap">
              <button onClick={() => onFilterChange("all")} className={`border px-md py-xs rounded-full font-label-caps text-label-caps hover:opacity-90 transition-colors ${filterStatus === "all" ? "bg-primary/20 text-primary border-primary" : "bg-surface-container text-outline border-outline-variant hover:bg-surface-container-high"}`}>
                TÜMÜ ({allCount})
              </button>
              <button onClick={() => onFilterChange("in-game")} className={`border px-md py-xs rounded-full font-label-caps text-label-caps hover:opacity-90 transition-colors ${filterStatus === "in-game" ? "bg-primary/20 text-primary border-primary" : "bg-surface-container text-outline border-outline-variant hover:bg-surface-container-high"}`}>
                AKTİF ({activeCount})
              </button>
              <button onClick={() => onFilterChange("available")} className={`border px-md py-xs rounded-full font-label-caps text-label-caps hover:opacity-90 transition-colors ${filterStatus === "available" ? "bg-primary/20 text-primary border-primary" : "bg-surface-container text-outline border-outline-variant hover:bg-surface-container-high"}`}>
                BOŞ ({emptyCount})
              </button>
              <button onClick={() => onFilterChange("maintenance")} className={`border px-md py-xs rounded-full font-label-caps text-label-caps hover:opacity-90 transition-colors ${filterStatus === "maintenance" ? "bg-primary/20 text-primary border-primary" : "bg-surface-container text-outline border-outline-variant hover:bg-surface-container-high"}`}>
                BAKIM ({maintCount})
              </button>
            </div>
            <div className="flex items-center gap-sm text-outline font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-[16px]">sort</span>
              <span>Sırala: Durum (Öncelikli)</span>
            </div>
          </div>
          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
            {rooms.map((room) => (
              <div key={room.id} className="glass-panel rounded-lg flex flex-col cursor-pointer hover:bg-surface-container-highest transition-colors group" onClick={() => onSelectRoom(room.id)}>
                {/* Surveillance Header Area */}
                <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
                  {room.image ? (
                    <img alt="Gözetim Kamerası" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src={room.image} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[48px] text-[#334155]">videocam_off</span>
                    </div>
                  )}
                  <div className="absolute top-sm left-sm bg-black/60 px-xs py-[2px] rounded border border-[#334155] flex flex-col">
                    <span className="font-label-caps text-label-caps text-white">SEKTÖR {room.sector}</span>
                    {room.status === "in-game" || room.status === "paused" ? (
                      <span className={`font-mono-data text-mono-data ${room.timeRemaining < 600 ? "text-tertiary" : "text-primary"}`}>{formatTime(room.timeRemaining)}</span>
                    ) : null}
                  </div>
                  <div className="absolute top-sm right-sm flex gap-xs">
                    <span className={`px-sm py-[2px] rounded-full font-label-caps text-label-caps flex items-center gap-[2px] ${statusBadgeClass(room.status)}`}>
                      {room.status === "in-game" && <span className="material-symbols-outlined text-[12px]">radio_button_checked</span>}
                      {room.status === "paused" && <span className="material-symbols-outlined text-[12px]">timer</span>}
                      {statusLabel(room.status)}
                    </span>
                  </div>
                  <div className="absolute bottom-sm left-sm right-sm flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={(e) => { e.stopPropagation(); }} className="bg-black/80 hover:bg-black text-white p-xs rounded border border-[#334155] transition-colors" aria-label="Mikrofon"><span className="material-symbols-outlined text-[16px]">mic</span></button>
                    <button onClick={(e) => { e.stopPropagation(); onSelectRoom(room.id); }} className="bg-black/80 hover:bg-black text-white p-xs rounded border border-[#334155] transition-colors" aria-label="İpucu"><span className="material-symbols-outlined text-[16px]">lightbulb</span></button>
                  </div>
                </div>
                {/* Details Area */}
                <div className="p-sm flex flex-col gap-xs flex-1">
                  <div className="flex justify-between items-start border-b border-[#334155] pb-xs mb-xs">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">{room.name}</h3>
                      <div className="flex items-center gap-xs text-outline font-body-sm text-body-sm mt-[2px]">
                        <span className="material-symbols-outlined text-[14px]">group</span> {room.players.length} / {room.maxPlayers} Oyuncu
                      </div>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); onSelectRoom(room.id); }} className="text-primary hover:text-primary-container transition-colors p-[2px]" aria-label="Detaylar">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-xs">
                    {room.status === "available" ? (
                      <button onClick={(e) => { e.stopPropagation(); onStartSession(room.id); }} className="w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 font-label-caps text-label-caps py-xs px-sm rounded transition-colors text-center flex justify-center items-center gap-xs">
                        <span className="material-symbols-outlined text-[14px]">play_arrow</span> OTURUM BAŞLAT
                      </button>
                    ) : room.status === "maintenance" ? (
                      <span className="w-full text-center text-outline font-label-caps text-label-caps py-xs">BAKIM MODU</span>
                    ) : (
                      <button onClick={(e) => { e.stopPropagation(); onSelectRoom(room.id); }} className="w-full bg-transparent border border-[#334155] text-outline hover:text-white hover:border-outline-variant font-label-caps text-label-caps py-xs px-sm rounded transition-colors text-center">
                        MÜDAHALE ET
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {rooms.length === 0 && (
              <div className="col-span-full text-center py-16 text-outline">
                <span className="material-symbols-outlined text-[48px] mb-4">search_off</span>
                <p className="font-body-base">Arama kriterlerine uygun oda bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
