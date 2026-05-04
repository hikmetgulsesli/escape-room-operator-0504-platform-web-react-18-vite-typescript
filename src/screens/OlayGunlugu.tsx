// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Olay Günlüğü
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { LogEntry, AppScreen, LogType } from "../types/domain";

interface OlayGunluguProps {
  logs: LogEntry[];
  logFilterRoom: string;
  logFilterType: LogType | "all";
  searchQuery: string;
  operatorName: string;
  accessLevel: string;
  onNavigate: (screen: AppScreen) => void;
  onFilterChange: (room: string, type: LogType | "all") => void;
  onSearchChange: (query: string) => void;
  onToggleEmergency: () => void;
  onExport: (format: "csv" | "json") => void;
}

export function OlayGunlugu(props: OlayGunluguProps) {
  const {
    logs,
    logFilterRoom,
    logFilterType,
    searchQuery,
    operatorName,
    accessLevel,
    onNavigate,
    onFilterChange,
    onSearchChange,
    onToggleEmergency,
    onExport,
  } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const typeOptions: { value: LogType | "all"; label: string }[] = [
    { value: "all", label: "Tüm Olay Tipleri" },
    { value: "hint", label: "İpucu Kullanımı" },
    { value: "puzzle", label: "Bulmaca Çözüldü" },
    { value: "emergency", label: "Acil Durum" },
    { value: "system", label: "Sistem / Giriş-Çıkış" },
    { value: "entry_exit", label: "Giriş / Çıkış" },
  ];

  const roomOptions = Array.from(new Set(logs.map((l) => l.roomId))).map((id) => {
    const first = logs.find((l) => l.roomId === id);
    return { value: id, label: first?.roomName || id };
  });

  function typeBadge(type: LogType) {
    switch (type) {
      case "puzzle": return { text: "BULMACA ÇÖZÜLDÜ", cls: "bg-primary-container/20 border-primary-container/50 text-primary" };
      case "hint": return { text: "İPUCU TALEBİ", cls: "bg-tertiary-container/20 border-tertiary-container/50 text-tertiary" };
      case "emergency": return { text: "ACİL DURUM", cls: "bg-error border-error text-on-error" };
      case "entry_exit": return { text: "GİRİŞ / ÇIKIŞ", cls: "bg-surface-variant border-outline-variant text-on-surface" };
      case "system": return { text: "SİSTEM RESET", cls: "bg-surface-variant border-outline-variant text-on-surface" };
      default: return { text: "BİLGİ", cls: "bg-surface-variant border-outline-variant text-on-surface" };
    }
  }

  function typeIcon(type: LogType) {
    switch (type) {
      case "puzzle": return "extension";
      case "hint": return "lightbulb";
      case "emergency": return "warning";
      case "entry_exit": return "login";
      case "system": return "settings_backup_restore";
      default: return "info";
    }
  }

  const totalPages = Math.max(1, Math.ceil(logs.length / 50));

  return (
    <>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav className="absolute left-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-lg border-r border-slate-800 shadow-2xl flex flex-col pt-16 pb-6 px-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center mb-4 overflow-hidden">
                <img alt="Komuta İstasyonu" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPR25QVWi6cakeqwQMdwLXSncVhkbPQtfH5vMTUU2twYo_2_80izev16tH0kbceS1LFmAplTVL01D9iKXn3A3WcSR5HnjU8pzIyvuHat7MYYnwkQ4AViNdzzPbbDbZNiTua1FHkxtd3klEUWJZNtPV8rqHrYXLtmkBsMwXbKCWFvYBm8LmqxAiqRA93zmHqNQ9gP6b37xW9ZKz8seFzFQXfKRGQG3cVGqg_Ugj3WL7_r5XMMQq-u_H-DvqfEDzKUQ7EX0si-3wdCU" />
              </div>
              <h2 className="text-xl font-bold text-slate-100 font-headline-md text-headline-md tracking-tight">{operatorName}</h2>
              <p className="font-label-caps text-label-caps text-secondary mt-1">{accessLevel}</p>
            </div>
            <div className="flex-1 flex flex-col gap-2 w-full">
              <button onClick={() => { onNavigate("dashboard"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px]">dashboard</span>Panorama</button>
              <button onClick={() => { onNavigate("operations"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>Operasyonlar</button>
              <button onClick={() => { onNavigate("logs"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px] filled">list_alt</span>Olay Günlüğü</button>
              <button onClick={() => { onNavigate("analytics"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px]">analytics</span>Analizler</button>
              <button onClick={() => { onNavigate("settings"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px]">settings_input_component</span>Sistem Ayarları</button>
            </div>
            <button onClick={() => { onNavigate("dashboard"); setMobileMenuOpen(false); }} className="mt-8 w-full py-3 bg-primary text-on-primary rounded font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors">YENİ OTURUM</button>
            <div className="mt-6 flex flex-col gap-2 w-full pt-4 border-t border-slate-800">
              <button onClick={() => { onNavigate("support"); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[18px]">help</span>Destek</button>
              <button onClick={() => { setShowLogoutConfirm(true); setMobileMenuOpen(false); }} className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[18px]">logout</span>Çıkış</button>
            </div>
          </nav>
        </div>
      )}

      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full pt-16 pb-6 px-4 fixed left-0 top-0 w-64 border-r border-slate-800 shadow-2xl bg-slate-900/90 backdrop-blur-lg z-[60] transition-all duration-200 ease-in-out">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center mb-4 overflow-hidden">
            <img alt="Komuta İstasyonu" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPR25QVWi6cakeqwQMdwLXSncVhkbPQtfH5vMTUU2twYo_2_80izev16tH0kbceS1LFmAplTVL01D9iKXn3A3WcSR5HnjU8pzIyvuHat7MYYnwkQ4AViNdzzPbbDbZNiTua1FHkxtd3klEUWJZNtPV8rqHrYXLtmkBsMwXbKCWFvYBm8LmqxAiqRA93zmHqNQ9gP6b37xW9ZKz8seFzFQXfKRGQG3cVGqg_Ugj3WL7_r5XMMQq-u_H-DvqfEDzKUQ7EX0si-3wdCU" />
          </div>
          <h2 className="text-xl font-bold text-slate-100 font-headline-md text-headline-md tracking-tight">{operatorName}</h2>
          <p className="font-label-caps text-label-caps text-secondary mt-1">{accessLevel}</p>
        </div>
        <div className="flex-1 flex flex-col gap-2 w-full">
          <button onClick={() => onNavigate("dashboard")} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px]">dashboard</span><span>Panorama</span></button>
          <button onClick={() => onNavigate("operations")} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px]">precision_manufacturing</span><span>Operasyonlar</span></button>
          <button onClick={() => onNavigate("logs")} className="flex items-center gap-3 px-4 py-3 rounded bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px] filled">list_alt</span><span>Olay Günlüğü</span></button>
          <button onClick={() => onNavigate("analytics")} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px]">analytics</span><span>Analizler</span></button>
          <button onClick={() => onNavigate("settings")} className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[20px]">settings_input_component</span><span>Sistem Ayarları</span></button>
        </div>
        <button onClick={() => onNavigate("dashboard")} className="mt-8 w-full py-3 bg-primary text-on-primary rounded font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors">YENİ OTURUM</button>
        <div className="mt-6 flex flex-col gap-2 w-full pt-4 border-t border-slate-800">
          <button onClick={() => onNavigate("support")} className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[18px]">help</span><span>Destek</span></button>
          <button onClick={() => setShowLogoutConfirm(true)} className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors text-left"><span className="material-symbols-outlined text-[18px]">logout</span><span>Çıkış</span></button>
        </div>
      </nav>
      {/* Main Application Canvas */}
      <div className="flex-1 flex flex-col md:pl-64 w-full h-full relative">
        {/* TopNavBar */}
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 md:w-[calc(100%-16rem)] md:left-64">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-400 hover:text-white transition-colors p-2" aria-label="Menü">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="text-lg font-black tracking-tighter text-blue-500 uppercase">KOMUTA MERKEZİ</div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:flex items-center text-slate-400 focus-within:text-blue-400">
              <span className="material-symbols-outlined absolute left-3 text-[18px]">search</span>
              <input
                className="bg-surface-container-high border border-outline-variant rounded-full py-1.5 pl-10 pr-4 font-inter tracking-tight text-sm text-on-surface focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all w-64"
                placeholder="Genel Ara..."
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button onClick={() => setShowNotifications(!showNotifications)} className="text-slate-400 hover:bg-slate-800/50 transition-colors p-2 rounded-full flex items-center justify-center relative" aria-label="Bildirimler">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full animate-pulse"></span>
                </button>
                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-surface-container border border-outline-variant rounded-lg shadow-xl z-50 p-4">
                    <h3 className="font-headline-md text-headline-md mb-3 border-b border-outline-variant pb-2">Bildirimler</h3>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      <div className="flex gap-3 items-start p-2 rounded hover:bg-surface-container-high transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-primary text-[20px]">info</span>
                        <div>
                          <p className="font-body-sm text-body-sm text-on-surface">Yeni sistem güncellemesi mevcut.</p>
                          <p className="text-outline-variant text-xs mt-1">2 dakika önce</p>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setShowNotifications(false)} className="w-full mt-3 text-center text-primary font-label-caps text-label-caps py-2 hover:bg-surface-container-high rounded transition-colors">Kapat</button>
                  </div>
                )}
              </div>
              <div className="relative">
                <button onClick={() => setShowProfile(!showProfile)} className="text-slate-400 hover:bg-slate-800/50 transition-colors p-2 rounded-full flex items-center justify-center" aria-label="Profil">
                  <span className="material-symbols-outlined">person</span>
                </button>
                {showProfile && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-surface-container border border-outline-variant rounded-lg shadow-xl z-50 p-4">
                    <div className="flex items-center gap-3 mb-4 border-b border-outline-variant pb-3">
                      <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
                        <img alt="Komuta İstasyonu" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPR25QVWi6cakeqwQMdwLXSncVhkbPQtfH5vMTUU2twYo_2_80izev16tH0kbceS1LFmAplTVL01D9iKXn3A3WcSR5HnjU8pzIyvuHat7MYYnwkQ4AViNdzzPbbDbZNiTua1FHkxtd3klEUWJZNtPV8rqHrYXLtmkBsMwXbKCWFvYBm8LmqxAiqRA93zmHqNQ9gP6b37xW9ZKz8seFzFQXfKRGQG3cVGqg_Ugj3WL7_r5XMMQq-u_H-DvqfEDzKUQ7EX0si-3wdCU" />
                      </div>
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface">{operatorName}</h3>
                        <p className="font-body-sm text-body-sm text-outline">{accessLevel}</p>
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
              <div className="h-6 w-px bg-slate-700/50 mx-2"></div>
              <button onClick={onToggleEmergency} className="bg-error hover:bg-error-container text-on-error px-4 py-1.5 rounded font-label-caps text-label-caps tracking-widest transition-colors animate-pulse border border-error-container">
                ACİL DURDUR
              </button>
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 pt-20 px-6 pb-6 overflow-hidden flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4 border-b border-outline-variant/30 pb-4">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Sistem Olay Günlüğü</h1>
              <p className="font-body-base text-body-base text-on-surface-variant mt-1">Tüm odalardan gelen aktivitelerin kronolojik kayıtları.</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => onExport("csv")} className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded transition-colors text-on-surface font-label-caps text-label-caps">
                <span className="material-symbols-outlined text-[16px]">download</span>
                CSV Dışa Aktar
              </button>
              <button onClick={() => onExport("json")} className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded transition-colors text-on-surface font-label-caps text-label-caps">
                <span className="material-symbols-outlined text-[16px]">data_object</span>
                JSON Dışa Aktar
              </button>
            </div>
          </div>
          {/* Filter & Search Toolbar (Bento Grid Style) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            {/* Search Module */}
            <div className="md:col-span-5 bg-surface-container-low border border-outline-variant/50 rounded-lg p-1 flex items-center">
              <span className="material-symbols-outlined text-outline ml-3">search</span>
              <input
                className="w-full bg-transparent border-none text-on-surface font-body-base text-body-base focus:ring-0 placeholder:text-outline-variant"
                placeholder="Olay, detay veya referans no ara..."
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            {/* Room Filter */}
            <div className="md:col-span-3 bg-surface-container-low border border-outline-variant/50 rounded-lg relative flex items-center">
              <span className="material-symbols-outlined text-outline ml-3 absolute pointer-events-none text-[18px]">meeting_room</span>
              <select
                className="w-full bg-transparent border-none text-on-surface font-body-base text-body-base focus:ring-0 appearance-none pl-10 py-3 cursor-pointer"
                value={logFilterRoom}
                onChange={(e) => onFilterChange(e.target.value, logFilterType)}
              >
                <option className="bg-surface" value="all">Tüm Odalar</option>
                {roomOptions.map((r) => (
                  <option key={r.value} className="bg-surface" value={r.value}>{r.label}</option>
                ))}
              </select>
              <span className="material-symbols-outlined text-outline absolute right-3 pointer-events-none text-[18px]">arrow_drop_down</span>
            </div>
            {/* Event Type Filter */}
            <div className="md:col-span-3 bg-surface-container-low border border-outline-variant/50 rounded-lg relative flex items-center">
              <span className="material-symbols-outlined text-outline ml-3 absolute pointer-events-none text-[18px]">filter_list</span>
              <select
                className="w-full bg-transparent border-none text-on-surface font-body-base text-body-base focus:ring-0 appearance-none pl-10 py-3 cursor-pointer"
                value={logFilterType}
                onChange={(e) => onFilterChange(logFilterRoom, e.target.value as LogType | "all")}
              >
                {typeOptions.map((t) => (
                  <option key={t.value} className="bg-surface" value={t.value}>{t.label}</option>
                ))}
              </select>
              <span className="material-symbols-outlined text-outline absolute right-3 pointer-events-none text-[18px]">arrow_drop_down</span>
            </div>
            {/* Refresh Button */}
            <div className="md:col-span-1 flex items-center justify-center">
              <button onClick={() => onFilterChange(logFilterRoom, logFilterType)} className="w-full h-full flex items-center justify-center bg-surface-container border border-outline-variant/50 rounded-lg text-primary hover:bg-surface-container-high transition-colors" title="Yenile">
                <span className="material-symbols-outlined">refresh</span>
              </button>
            </div>
          </div>
          {/* Data Table Container (Glassmorphism + Density) */}
          <div className="flex-1 bg-surface-container-low/80 backdrop-blur-md border border-outline-variant/50 rounded-lg overflow-hidden flex flex-col">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-surface-container-high border-b border-outline-variant/50 font-label-caps text-label-caps text-on-surface-variant tracking-wider sticky top-0">
              <div className="col-span-2">TARİH / SAAT</div>
              <div className="col-span-3">ODA / LOKASYON</div>
              <div className="col-span-2">OLAY TÜRÜ</div>
              <div className="col-span-5">SİSTEM DETAYLARI</div>
            </div>
            {/* Table Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto">
              {logs.length === 0 && (
                <div className="px-6 py-12 text-center text-outline-variant">
                  <span className="material-symbols-outlined text-[48px] mb-4">search_off</span>
                  <p>Kayıt bulunamadı.</p>
                </div>
              )}
              {logs.map((log) => {
                const badge = typeBadge(log.type);
                return (
                  <div key={log.id} className={`grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline-variant/20 hover:bg-surface-container/50 transition-colors items-center ${log.type === "emergency" ? "bg-error/5 hover:bg-error/10" : ""}`}>
                    <div className="col-span-2 font-mono-data text-mono-data text-secondary">
                      {new Date(log.timestamp).toLocaleDateString("tr-TR")} <span className="text-on-surface-variant ml-1">{new Date(log.timestamp).toLocaleTimeString("tr-TR")}</span>
                    </div>
                    <div className="col-span-3 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${log.type === "emergency" ? "bg-error animate-ping" : log.type === "hint" || log.type === "puzzle" ? "bg-primary animate-pulse" : "bg-outline"}`}></span>
                      {log.roomName}
                    </div>
                    <div className="col-span-2">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border font-label-caps text-label-caps ${badge.cls}`}>
                        <span className="material-symbols-outlined text-[14px]">{typeIcon(log.type)}</span>
                        {badge.text}
                      </span>
                    </div>
                    <div className="col-span-5 font-mono-data text-mono-data text-on-surface-variant truncate">
                      <span className="text-on-surface font-medium">[{log.title}]</span> {log.details}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Pagination Footer */}
            <div className="px-6 py-3 bg-surface-container border-t border-outline-variant/50 flex justify-between items-center">
              <div className="font-body-sm text-body-sm text-on-surface-variant">
                Toplam {logs.length} kayıt gösteriliyor.
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="p-1 rounded hover:bg-surface-variant text-on-surface-variant disabled:opacity-50" disabled={currentPage <= 1}>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <span className="font-mono-data text-mono-data text-on-surface px-2">Sayfa {currentPage} / {totalPages}</span>
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="p-1 rounded hover:bg-surface-variant text-on-surface disabled:opacity-50" disabled={currentPage >= totalPages}>
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-surface border border-outline-variant rounded-lg shadow-2xl p-6 w-full max-w-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Çıkış Onayı</h3>
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
