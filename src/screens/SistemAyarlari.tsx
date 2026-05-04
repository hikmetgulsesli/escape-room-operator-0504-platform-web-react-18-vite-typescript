// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sistem Ayarları
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppSettings, AppScreen } from "../types/domain";

interface SistemAyarlariProps {
  settings: AppSettings;
  onNavigate: (screen: AppScreen) => void;
  onUpdateSettings: (settings: Partial<AppSettings>) => void;
  onClearStorage: () => void;
  onExport: () => void;
  onImport: (json: string) => void;
  onReset: () => void;
  onToggleEmergency: () => void;
}

export function SistemAyarlari(props: SistemAyarlariProps) {
  const {
    settings,
    onNavigate,
    onUpdateSettings,
    onClearStorage,
    onExport,
    onImport,
    onReset,
    onToggleEmergency,
  } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [importText, setImportText] = useState("");
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav className="absolute left-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-lg border-r border-slate-800 shadow-2xl flex flex-col pt-16 pb-6 px-4" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8 px-4">
              <h1 className="text-xl font-bold text-slate-100 mb-1">Alpha Sektör</h1>
              <p className="text-slate-400 text-[10px]">Baş Operatör</p>
            </div>
            <div className="flex-1 space-y-2">
              <button onClick={() => { onNavigate("dashboard"); setMobileMenuOpen(false); }} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">dashboard</span><span>Panorama</span></button>
              <button onClick={() => { onNavigate("operations"); setMobileMenuOpen(false); }} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">precision_manufacturing</span><span>Operasyonlar</span></button>
              <button onClick={() => { onNavigate("logs"); setMobileMenuOpen(false); }} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">list_alt</span><span>Olay Günlüğü</span></button>
              <button onClick={() => { onNavigate("analytics"); setMobileMenuOpen(false); }} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">analytics</span><span>Analizler</span></button>
              <button onClick={() => { onNavigate("settings"); setMobileMenuOpen(false); }} className="flex items-center space-x-3 px-4 py-3 rounded bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>settings_input_component</span><span>Sistem Ayarları</span></button>
            </div>
            <div className="mt-auto space-y-2">
              <button onClick={() => { onNavigate("dashboard"); setMobileMenuOpen(false); }} className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold tracking-widest text-xs transition-colors mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">YENİ OTURUM</button>
              <button onClick={() => { onNavigate("support"); setMobileMenuOpen(false); }} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">help</span><span>Destek</span></button>
              <button onClick={() => { setShowLogoutConfirm(true); setMobileMenuOpen(false); }} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">logout</span><span>Çıkış</span></button>
            </div>
          </nav>
        </div>
      )}

      {/* SideNavBar (Hidden on Mobile) */}
      <nav className="hidden md:flex bg-slate-900/90 backdrop-blur-lg text-blue-500 dark:text-blue-400 font-inter text-xs font-medium uppercase tracking-widest fixed left-0 top-0 h-full w-64 border-r border-slate-800 shadow-2xl flex-col pt-16 pb-6 px-4 z-40 transition-all duration-200 ease-in-out">
        <div className="mb-8 px-4">
          <h1 className="text-xl font-bold text-slate-100 mb-1">Alpha Sektör</h1>
          <p className="text-slate-400 text-[10px]">Baş Operatör</p>
        </div>
        <div className="flex-1 space-y-2">
          <button onClick={() => onNavigate("dashboard")} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">dashboard</span><span>Panorama</span></button>
          <button onClick={() => onNavigate("operations")} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">precision_manufacturing</span><span>Operasyonlar</span></button>
          <button onClick={() => onNavigate("logs")} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">list_alt</span><span>Olay Günlüğü</span></button>
          <button onClick={() => onNavigate("analytics")} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">analytics</span><span>Analizler</span></button>
          <button onClick={() => onNavigate("settings")} className="flex items-center space-x-3 px-4 py-3 rounded bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>settings_input_component</span><span>Sistem Ayarları</span></button>
        </div>
        <div className="mt-auto space-y-2">
          <button onClick={() => onNavigate("dashboard")} className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold tracking-widest text-xs transition-colors mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">YENİ OTURUM</button>
          <button onClick={() => onNavigate("support")} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">help</span><span>Destek</span></button>
          <button onClick={() => setShowLogoutConfirm(true)} className="flex items-center space-x-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-all w-full text-left"><span className="material-symbols-outlined text-lg">logout</span><span>Çıkış</span></button>
        </div>
      </nav>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 bg-slate-900/80 backdrop-blur-md text-blue-500 dark:text-blue-400 font-inter tracking-tight text-sm border-b border-slate-700/50 md:pl-72 transition-all">
        <div className="flex items-center space-x-4">
          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-400 hover:text-white transition-colors p-2" aria-label="Menü">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="text-lg font-black tracking-tighter text-blue-500 uppercase">KOMUTA MERKEZİ</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="bg-surface-container-high border-outline-variant text-on-surface text-sm rounded-full pl-9 pr-4 py-1.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none w-64 transition-all" placeholder="Sistemde Ara..." type="text" />
          </div>
          <div className="flex space-x-2">
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 rounded-full transition-colors relative" aria-label="Bildirimler">
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
              <button onClick={() => setShowProfile(!showProfile)} className="p-2 text-blue-400 font-bold border-b-2 border-blue-500 hover:bg-slate-800/50 transition-colors" aria-label="Profil">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
              </button>
              {showProfile && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-surface-container border border-outline-variant rounded-lg shadow-xl z-50 p-4">
                  <div className="flex items-center gap-3 mb-4 border-b border-outline-variant pb-3">
                    <img alt="Operatör Profili" className="w-10 h-10 rounded-full border border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6ZM0cKIXJ8pEwsyAiMN76PC_GmBIhCAUvZ2jvALBsRb7KH7m3GxIV7xXE1piPZJcZct59rsqEHK9FwEE6k6dNX4-Vy7ROLxBNgAU51WdTWQBNF_oufU3zYRpK7a2OQ9qeAp8WMp8_9a38xdDLITVUjgE1J7nYHA7hkrhZd_ey4B8K3o7GgxNhs1nyXOSwnIquvLateFbzccGqzl3kiab25UqsDrxoagqAK8XgM0ovp7guGOG8z4yrsxzgMc2UyvBxteSVTJIbq0" />
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
          </div>
          <button onClick={onToggleEmergency} className="bg-error text-on-error font-label-caps px-4 py-1.5 rounded flex items-center space-x-1 hover:bg-red-400 transition-colors animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>ACİL DURDUR</span>
          </button>
          <img alt="Operatör Profili" className="w-8 h-8 rounded-full border border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6ZM0cKIXJ8pEwsyAiMN76PC_GmBIhCAUvZ2jvALBsRb7KH7m3GxIV7xXE1piPZJcZct59rsqEHK9FwEE6k6dNX4-Vy7ROLxBNgAU51WdTWQBNF_oufU3zYRpK7a2OQ9qeAp8WMp8_9a38xdDLITVUjgE1J7nYHA7hkrhZd_ey4B8K3o7GgxNhs1nyXOSwnIquvLateFbzccGqzl3kiab25UqsDrxoagqAK8XgM0ovp7guGOG8z4yrsxzgMc2UyvBxteSVTJIbq0" />
        </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 mt-14 md:ml-64 p-gutter max-w-7xl mx-auto w-full">
        <div className="mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Sistem Ayarları</h2>
          <p className="font-body-base text-body-base text-on-surface-variant">Operasyon merkezi yapılandırması ve veri yönetimi kontrolleri.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {/* Left Column: Settings & Profile */}
          <div className="lg:col-span-2 space-y-lg">
            {/* Genel Ayarlar Bounding Box */}
            <section className="bg-surface-container/80 backdrop-blur-md rounded-xl border border-outline-variant/50 overflow-hidden shadow-lg">
              <div className="p-md border-b border-outline-variant/50 flex items-center space-x-3 bg-surface-container-high/50">
                <span className="material-symbols-outlined text-primary">tune</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Genel Ayarlar</h3>
              </div>
              <div className="p-lg space-y-md">
                {/* Setting Row 1 */}
                <div className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-high/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-on-surface-variant mt-1">notifications_active</span>
                    <div>
                      <h4 className="font-body-base text-body-base font-medium text-on-surface">Kritik Uyarı Sesleri</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Acil durum ve zaman aşımlarında sesli bildirim.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input checked={settings.soundAlerts} onChange={(e) => onUpdateSettings({ soundAlerts: e.target.checked })} className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <hr className="border-outline-variant/30" />
                {/* Setting Row 2 */}
                <div className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-high/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-on-surface-variant mt-1">dark_mode</span>
                    <div>
                      <h4 className="font-body-base text-body-base font-medium text-on-surface">Karanlık Mod (Zorunlu)</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Komuta merkezi standart yüksek kontrast görünümü.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-not-allowed opacity-50">
                    <input checked={true} className="sr-only peer" disabled={true} type="checkbox" />
                    <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:rounded-full after:h-5 after:w-5 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </section>
            {/* Operatör Profili Bounding Box */}
            <section className="bg-surface-container/80 backdrop-blur-md rounded-xl border border-outline-variant/50 overflow-hidden shadow-lg">
              <div className="p-md border-b border-outline-variant/50 flex items-center space-x-3 bg-surface-container-high/50">
                <span className="material-symbols-outlined text-primary">badge</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Operatör Profili</h3>
              </div>
              <div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">GÖREV TANIYICI (AD)</label>
                  <input
                    className="w-full bg-surface-dim border border-outline-variant text-on-surface font-body-base text-body-base rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner"
                    type="text"
                    value={settings.operatorName}
                    onChange={(e) => onUpdateSettings({ operatorName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">ERİŞİM SEVİYESİ</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-mono-data text-mono-data rounded-lg px-4 py-2 cursor-not-allowed" disabled={true} type="text" value={settings.accessLevel} />
                </div>
                <div className="space-y-2 md:col-span-2 pt-sm">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">YENİ ŞİFRE BELİRLE</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">lock</span>
                    <input
                      className="w-full bg-surface-dim border border-outline-variant text-on-surface font-mono-data text-mono-data rounded-lg pl-10 pr-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="••••••••"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="p-md bg-surface-container-low border-t border-outline-variant/50 flex justify-end">
                <button onClick={() => { onUpdateSettings({}); if (password) { setPassword(""); } }} className="bg-primary text-on-primary font-body-base text-body-base font-semibold px-6 py-2 rounded-lg hover:bg-primary-fixed transition-colors shadow-[0_0_15px_rgba(173,198,255,0.15)] flex items-center space-x-2">
                  <span className="material-symbols-outlined text-sm">save</span>
                </button>
              </div>
            </section>
          </div>
          {/* Right Column: Data Management */}
          <div className="space-y-lg">
            <section className="bg-surface-container/80 backdrop-blur-md rounded-xl border border-outline-variant/50 overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-md border-b border-outline-variant/50 flex items-center space-x-3 bg-surface-container-high/50">
                <span className="material-symbols-outlined text-tertiary">database</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Veri Yönetimi</h3>
              </div>
              <div className="p-lg space-y-6 flex-1">
                {/* Local Storage */}
                <div className="p-md border border-outline-variant/50 rounded-lg bg-surface-container-low/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">cleaning_services</span>
                    <h4 className="font-body-base text-body-base font-medium text-on-surface">Önbellek Temizliği</h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Yerel tarayıcı verilerini (LocalStorage) temizler. Aktif oturumlar kapanabilir.</p>
                  <button onClick={onClearStorage} className="w-full bg-transparent border border-outline-variant text-on-surface hover:border-outline hover:bg-surface-container-highest font-body-base text-body-sm py-2 rounded transition-colors">
                    LocalStorage Temizle
                  </button>
                </div>
                {/* Export/Import */}
                <div className="space-y-3">
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant">SİSTEM YEDEKLEME</h4>
                  <button onClick={onExport} className="w-full flex items-center justify-center space-x-2 bg-surface-variant hover:bg-surface-bright text-on-surface font-body-base text-body-base py-3 rounded-lg transition-colors border border-outline-variant">
                    <span className="material-symbols-outlined text-sm">download</span>
                    <span>Veriyi Dışa Aktar (Export)</span>
                  </button>
                  <button onClick={() => { if (importText.trim()) { onImport(importText.trim()); setImportText(""); } }} className="w-full flex items-center justify-center space-x-2 bg-transparent border border-dashed border-outline text-on-surface-variant hover:text-on-surface hover:border-primary font-body-base text-body-base py-3 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-sm">upload</span>
                    <span>Yedekten Yükle (Import)</span>
                  </button>
                  <textarea
                    className="w-full bg-surface-dim border border-outline-variant rounded-lg p-3 text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none h-24 placeholder-outline-variant"
                    placeholder="JSON veriyi buraya yapıştırın..."
                    value={importText}
                    onChange={(e) => setImportText(e.target.value)}
                  />
                </div>
              </div>
              {/* Danger Zone */}
              <div className="p-md border-t border-error/20 bg-error/5 mt-auto">
                <div className="flex items-start space-x-3 mb-3">
                  <span className="material-symbols-outlined text-error mt-0.5">warning</span>
                  <div>
                    <h4 className="font-body-base text-body-base font-medium text-error">Tehlikeli Bölge</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Sistemi sıfırlamak tüm kayıtları kalıcı olarak siler.</p>
                  </div>
                </div>
                {!showResetConfirm ? (
                  <button onClick={() => setShowResetConfirm(true)} className="w-full bg-error/10 border border-error/50 text-error hover:bg-error hover:text-on-error font-body-base text-body-sm font-semibold py-2.5 rounded transition-all">
                    FABRİKA AYARLARINA DÖN
                  </button>
                ) : (
                  <div className="space-y-2">
                    <p className="font-body-sm text-error">Emin misiniz? Bu işlem geri alınamaz!</p>
                    <div className="flex gap-2">
                      <button onClick={() => { onReset(); setShowResetConfirm(false); }} className="flex-1 bg-error text-on-error font-body-sm font-semibold py-2 rounded hover:bg-error/90 transition-colors">
                        EVET, SIFIRLA
                      </button>
                      <button onClick={() => setShowResetConfirm(false)} className="flex-1 bg-surface-container border border-outline-variant text-on-surface font-body-sm py-2 rounded hover:bg-surface-variant transition-colors">
                        İPTAL
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

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
