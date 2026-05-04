// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Acil Durum Paneli
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppScreen } from "../types/domain";

interface AcilDurumPaneliProps {
  active: boolean;
  startTime: string | null;
  onResolve: (note: string) => void;
  onNavigate: (screen: AppScreen) => void;
}

export function AcilDurumPaneli(props: AcilDurumPaneliProps) {
  const { active, startTime, onResolve, onNavigate } = props;
  const [safetyConfirmed, setSafetyConfirmed] = useState(false);
  const [note, setNote] = useState("");

  if (!active) return null;

  const elapsed = startTime ? Math.floor((Date.now() - new Date(startTime).getTime()) / 1000) : 0;
  const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
  const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
  const s = String(elapsed % 60).padStart(2, "0");

  return (
    <>
      {/* Intent implies a transactional/modal "Dead End" overlay for Emergency Stop.
               Supplying the Navigation Shells, but visually pushing them to background to focus on the modal canvas. */}
      {/* Background Canvas (Simulated Main Dashboard behind modal) */}
      <div className="fixed inset-0 bg-surface-container-lowest z-0 flex flex-col blur-[2px] opacity-30 pointer-events-none">
      {/* TopNavBar Structure */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 bg-slate-900/80 backdrop-blur-md text-blue-500 dark:text-blue-400 font-inter tracking-tight text-sm border-b border-slate-700/50 flat no shadows">
      <div className="flex items-center gap-4">
      <span className="text-lg font-black tracking-tighter text-blue-500 uppercase">KOMUTA MERKEZİ</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="bg-red-500 text-white px-4 py-1.5 rounded text-xs font-bold tracking-wider hover:bg-slate-800/50 transition-colors">ACİL DURDUR</button>
      </div>
      </header>
      {/* SideNavBar Structure */}
      <nav className="fixed left-0 top-0 h-full w-64 border-r border-slate-800 bg-slate-900/90 backdrop-blur-lg text-blue-500 dark:text-blue-400 font-inter text-xs font-medium uppercase tracking-widest shadow-2xl flex flex-col pt-16 pb-6 px-4">
      <div className="flex-1 space-y-2 mt-4">
      <button onClick={() => onNavigate("dashboard")} className="flex items-center gap-3 px-3 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 w-full text-left"><span className="material-symbols-outlined">dashboard</span>Panorama</button>
      </div>
      </nav>
      </div>
      {/* The Emergency Modal Overlay (Level 2 Elevation) */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="w-full max-w-2xl bg-surface border border-error-container rounded-lg shadow-[0_0_40px_rgba(239,68,68,0.2)] overflow-hidden flex flex-col animate-pulse" style={{animationDuration: "3s"}}>
      {/* Modal Header (Warning) */}
      <div className="bg-error-container/20 border-b border-error-container p-6 flex items-center justify-center gap-4">
      <span className="material-symbols-outlined fill text-error text-[48px]">warning</span>
      <h1 className="font-headline-lg text-error tracking-wider uppercase">TÜM SİSTEMLER DURDURULDU</h1>
      <span className="material-symbols-outlined fill text-error text-[48px]">warning</span>
      </div>
      {/* Modal Body */}
      <div className="p-8 space-y-8 bg-[#1E293B] bg-opacity-80 backdrop-blur-md">
      {/* Status & Information Grid */}
      <div className="grid grid-cols-2 gap-6">
      <div className="bg-surface-container-high rounded border border-outline-variant p-4">
      <p className="font-label-caps text-on-surface-variant mb-2">SİSTEM DURUMU</p>
      <p className="font-headline-md text-error flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-error animate-ping"></span>
                                  ACİL DURUM AKTİF
                              </p>
      </div>
      <div className="bg-surface-container-high rounded border border-outline-variant p-4">
      <p className="font-label-caps text-on-surface-variant mb-2">GEÇEN SÜRE</p>
      <p className="font-display-timer text-on-surface">{h}:{m}:{s}</p>
      </div>
      </div>
      {/* Simulation Controls (Ghost Buttons) */}
      <div className="space-y-4">
      <p className="font-label-caps text-on-surface-variant">SİMÜLASYON KONTROLLERİ</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button className="flex items-center justify-between p-4 rounded border border-[#334155] bg-[#1E293B]/50 hover:bg-[#1E293B] text-on-surface transition-colors group">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-tertiary">notifications_active</span>
      <span className="font-body-base font-semibold">Tüm Sirenleri Sustur</span>
      </div>
      <span className="font-label-caps text-outline-variant group-hover:text-tertiary transition-colors">BEKLEMEDE</span>
      </button>
      <button className="flex items-center justify-between p-4 rounded border border-[#334155] bg-[#1E293B]/50 hover:bg-[#1E293B] text-on-surface transition-colors group">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary">lock_open</span>
      <span className="font-body-base font-semibold">Tüm Kilitleri Aç</span>
      </div>
      <span className="font-label-caps text-primary">TAMAMLANDI</span>
      </button>
      </div>
      </div>
      {/* Incident Log Entry */}
      <div className="space-y-2">
      <label className="font-label-caps text-on-surface-variant block" htmlFor="incident-log">OLAY GÜNLÜĞÜ NOTU (ZORUNLU)</label>
      <textarea
        className="w-full bg-[#0F172A] border border-[#334155] rounded text-on-surface font-body-sm p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors resize-none placeholder:text-outline-variant"
        id="incident-log"
        placeholder="Acil durum nedenini buraya giriniz... Olay günlüğüne otomatik kaydedilecektir."
        rows={3}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      </div>
      </div>
      {/* Modal Footer (Confirmation & Recovery Action) */}
      <div className="border-t border-[#334155] bg-surface-container p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Safety Checkbox */}
      <div className="flex items-center gap-3 w-full md:w-auto">
      <input
        className="w-5 h-5 rounded border-[#334155] bg-[#0F172A] text-primary focus:ring-primary focus:ring-offset-[#10131a] accent-primary cursor-pointer"
        id="safety-confirm"
        type="checkbox"
        checked={safetyConfirmed}
        onChange={(e) => setSafetyConfirmed(e.target.checked)}
      />
      <label className="font-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="safety-confirm">
                              Tesis güvenliğinin sağlandığını ve prosedürlerin tamamlandığını onaylıyorum.
                          </label>
      </div>
      {/* Recovery Button */}
      <button
        onClick={() => { if (safetyConfirmed) onResolve(note); }}
        className="w-full md:w-auto px-8 py-3 rounded bg-surface-variant text-on-surface-variant font-headline-md tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-outline flex items-center justify-center gap-2"
        disabled={!safetyConfirmed}
      >
      <span className="material-symbols-outlined">restart_alt</span>
                          Güvenli Duruma Dön
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
