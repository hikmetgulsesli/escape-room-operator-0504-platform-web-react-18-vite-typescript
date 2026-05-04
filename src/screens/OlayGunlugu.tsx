// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Olay Günlüğü
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface OlayGunluguProps {}

export function OlayGunlugu(props: OlayGunluguProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full pt-16 pb-6 px-4 fixed left-0 top-0 w-64 border-r border-slate-800 shadow-2xl bg-slate-900/90 backdrop-blur-lg z-[60] transition-all duration-200 ease-in-out">
      <div className="flex flex-col items-center mb-8">
      <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center mb-4 overflow-hidden">
      <img alt="Command Station 01" className="w-full h-full object-cover" data-alt="A highly detailed, ultra-realistic macro shot of a sleek, dark metallic server chassis illuminated by subtle, glowing electric blue LED indicator lights. The aesthetic is extremely high-tech, evoking a mission-critical command center environment. The lighting is low-key, dramatic, and moody, relying on the deep blacks of the chassis contrasting with the sharp, futuristic neon blue accents. The surface shows faint, precision-machined brushed metal textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPR25QVWi6cakeqwQMdwLXSncVhkbPQtfH5vMTUU2twYo_2_80izev16tH0kbceS1LFmAplTVL01D9iKXn3A3WcSR5HnjU8pzIyvuHat7MYYnwkQ4AViNdzzPbbDbZNiTua1FHkxtd3klEUWJZNtPV8rqHrYXLtmkBsMwXbKCWFvYBm8LmqxAiqRA93zmHqNQ9gP6b37xW9ZKz8seFzFQXfKRGQG3cVGqg_Ugj3WL7_r5XMMQq-u_H-DvqfEDzKUQ7EX0si-3wdCU" />
      </div>
      <h2 className="text-xl font-bold text-slate-100 font-headline-md text-headline-md tracking-tight">Alpha Sector</h2>
      <p className="font-label-caps text-label-caps text-secondary mt-1">Lead Operator</p>
      </div>
      <div className="flex-1 flex flex-col gap-2 w-full">
      {/* Dashboard */}
      <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
      <span>Dashboard</span>
      </a>
      {/* Operations */}
      <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
      <span>Operations</span>
      </a>
      {/* Activity Log (ACTIVE) */}
      <a className="flex items-center gap-3 px-4 py-3 rounded bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 font-inter text-xs font-medium uppercase tracking-widest transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px] filled">list_alt</span>
      <span>Activity Log</span>
      </a>
      {/* Analytics */}
      <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">analytics</span>
      <span>Analytics</span>
      </a>
      {/* System Settings */}
      <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors" href="#">
      <span className="material-symbols-outlined text-[20px]">settings_input_component</span>
      <span>System Settings</span>
      </a>
      </div>
      <button className="mt-8 w-full py-3 bg-primary text-on-primary rounded font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors">
                  NEW SESSION
              </button>
      <div className="mt-6 flex flex-col gap-2 w-full pt-4 border-t border-slate-800">
      <a className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors" href="#">
      <span className="material-symbols-outlined text-[18px]">help</span>
      <span>Support</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 font-inter text-xs font-medium uppercase tracking-widest transition-colors" href="#">
      <span className="material-symbols-outlined text-[18px]">logout</span>
      <span>Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Application Canvas */}
      <div className="flex-1 flex flex-col md:pl-64 w-full h-full relative">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 md:w-[calc(100%-16rem)] md:left-64">
      <div className="flex items-center gap-4">
      <div className="text-lg font-black tracking-tighter text-blue-500 uppercase">COMMAND CENTER</div>
      </div>
      <div className="flex items-center gap-6">
      <div className="relative hidden sm:flex items-center text-slate-400 focus-within:text-blue-400">
      <span className="material-symbols-outlined absolute left-3 text-[18px]">search</span>
      <input className="bg-surface-container-high border border-outline-variant rounded-full py-1.5 pl-10 pr-4 font-inter tracking-tight text-sm text-on-surface focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all w-64" placeholder="Global Search..." type="text" />
      </div>
      <div className="flex items-center gap-3">
      <button className="text-slate-400 hover:bg-slate-800/50 transition-colors p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800/50 transition-colors p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">settings</span>
      </button>
      <div className="h-6 w-px bg-slate-700/50 mx-2"></div>
      <button className="bg-error hover:bg-error-container text-on-error px-4 py-1.5 rounded font-label-caps text-label-caps tracking-widest transition-colors animate-pulse border border-error-container">
                              EMERGENCY STOP
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
      <button className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded transition-colors text-on-surface font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-[16px]">download</span>
                              EXPORT CSV
                          </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded transition-colors text-on-surface font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-[16px]">data_object</span>
                              EXPORT JSON
                          </button>
      </div>
      </div>
      {/* Filter & Search Toolbar (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
      {/* Search Module */}
      <div className="md:col-span-5 bg-surface-container-low border border-outline-variant/50 rounded-lg p-1 flex items-center">
      <span className="material-symbols-outlined text-outline ml-3">search</span>
      <input className="w-full bg-transparent border-none text-on-surface font-body-base text-body-base focus:ring-0 placeholder:text-outline-variant" placeholder="Olay, detay veya referans no ara..." type="text" />
      </div>
      {/* Room Filter */}
      <div className="md:col-span-3 bg-surface-container-low border border-outline-variant/50 rounded-lg relative flex items-center">
      <span className="material-symbols-outlined text-outline ml-3 absolute pointer-events-none text-[18px]">meeting_room</span>
      <select className="w-full bg-transparent border-none text-on-surface font-body-base text-body-base focus:ring-0 appearance-none pl-10 py-3 cursor-pointer">
      <option className="bg-surface" value="all">Tüm Odalar</option>
      <option className="bg-surface" value="room1">Sektör A - Laboratuvar</option>
      <option className="bg-surface" value="room2">Sektör B - Reaktör</option>
      <option className="bg-surface" value="room3">Sektör C - Karantina</option>
      </select>
      <span className="material-symbols-outlined text-outline absolute right-3 pointer-events-none text-[18px]">arrow_drop_down</span>
      </div>
      {/* Event Type Filter */}
      <div className="md:col-span-3 bg-surface-container-low border border-outline-variant/50 rounded-lg relative flex items-center">
      <span className="material-symbols-outlined text-outline ml-3 absolute pointer-events-none text-[18px]">filter_list</span>
      <select className="w-full bg-transparent border-none text-on-surface font-body-base text-body-base focus:ring-0 appearance-none pl-10 py-3 cursor-pointer">
      <option className="bg-surface" value="all">Tüm Olay Tipleri</option>
      <option className="bg-surface" value="hint">İpucu Kullanımı</option>
      <option className="bg-surface" value="puzzle">Bulmaca Çözüldü</option>
      <option className="bg-surface" value="emergency">Acil Durum</option>
      <option className="bg-surface" value="system">Sistem / Giriş-Çıkış</option>
      </select>
      <span className="material-symbols-outlined text-outline absolute right-3 pointer-events-none text-[18px]">arrow_drop_down</span>
      </div>
      {/* Refresh Button */}
      <div className="md:col-span-1 flex items-center justify-center">
      <button className="w-full h-full flex items-center justify-center bg-surface-container border border-outline-variant/50 rounded-lg text-primary hover:bg-surface-container-high transition-colors" title="Yenile">
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
      {/* Log Row 1 */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline-variant/20 hover:bg-surface-container/50 transition-colors items-center">
      <div className="col-span-2 font-mono-data text-mono-data text-secondary">
                                  2023-10-27 <span className="text-on-surface-variant ml-1">14:45:12</span>
      </div>
      <div className="col-span-3 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                  Sektör A - Laboratuvar
                              </div>
      <div className="col-span-2">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary-container/20 border border-primary-container/50 text-primary font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-[14px]">extension</span>
                                      BULMACA ÇÖZÜLDÜ
                                  </span>
      </div>
      <div className="col-span-5 font-mono-data text-mono-data text-on-surface-variant truncate">
      <span className="text-on-surface font-medium">[PANEL_04]</span> DNA Dizilimi başarıyla tamamlandı. Kilit devre dışı.
                              </div>
      </div>
      {/* Log Row 2 */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline-variant/20 hover:bg-surface-container/50 transition-colors items-center">
      <div className="col-span-2 font-mono-data text-mono-data text-secondary">
                                  2023-10-27 <span className="text-on-surface-variant ml-1">14:42:05</span>
      </div>
      <div className="col-span-3 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                  Sektör B - Reaktör
                              </div>
      <div className="col-span-2">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary-container/50 text-tertiary font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-[14px]">lightbulb</span>
                                      İPUCU TALEBİ
                                  </span>
      </div>
      <div className="col-span-5 font-mono-data text-mono-data text-on-surface-variant truncate">
                                  Otomatik ipucu gönderildi: "Soğutma vanalarını sırayla kontrol edin."
                              </div>
      </div>
      {/* Log Row 3 (Emergency) */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-error/20 bg-error/5 hover:bg-error/10 transition-colors items-center">
      <div className="col-span-2 font-mono-data text-mono-data text-error">
                                  2023-10-27 <span className="text-error/80 ml-1">14:38:55</span>
      </div>
      <div className="col-span-3 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                                  Sektör C - Karantina
                              </div>
      <div className="col-span-2">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-error border border-error text-on-error font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-[14px]">warning</span>
                                      ACİL DURUM
                                  </span>
      </div>
      <div className="col-span-5 font-mono-data text-mono-data text-error truncate">
                                  KAPI_ZORLAMA TESPİT EDİLDİ. Sensör: MAIN_EXIT_DOOR.
                              </div>
      </div>
      {/* Log Row 4 */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline-variant/20 hover:bg-surface-container/50 transition-colors items-center">
      <div className="col-span-2 font-mono-data text-mono-data text-secondary">
                                  2023-10-27 <span className="text-on-surface-variant ml-1">14:30:00</span>
      </div>
      <div className="col-span-3 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
                                  Sistem Geneli
                              </div>
      <div className="col-span-2">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-variant border border-outline-variant text-on-surface font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-[14px]">login</span>
                                      GİRİŞ / ÇIKIŞ
                                  </span>
      </div>
      <div className="col-span-5 font-mono-data text-mono-data text-on-surface-variant truncate">
                                  Seans başlatıldı. Takım: "Gölge Savaşçıları". Süre: 60dk.
                              </div>
      </div>
      {/* Log Row 5 */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline-variant/20 hover:bg-surface-container/50 transition-colors items-center">
      <div className="col-span-2 font-mono-data text-mono-data text-secondary">
                                  2023-10-27 <span className="text-on-surface-variant ml-1">14:28:15</span>
      </div>
      <div className="col-span-3 font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
                                  Sektör A - Laboratuvar
                              </div>
      <div className="col-span-2">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-variant border border-outline-variant text-on-surface font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-[14px]">settings_backup_restore</span>
                                      SİSTEM RESET
                                  </span>
      </div>
      <div className="col-span-5 font-mono-data text-mono-data text-on-surface-variant truncate">
                                  Oda manuel olarak başlangıç durumuna sıfırlandı. Opr: Alpha.
                              </div>
      </div>
      {/* Simulating more rows to show scroll */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline-variant/20 hover:bg-surface-container/50 transition-colors items-center opacity-70">
      <div className="col-span-2 font-mono-data text-mono-data text-secondary">2023-10-27 <span className="text-on-surface-variant ml-1">13:15:00</span></div>
      <div className="col-span-3 font-body-sm text-body-sm text-on-surface">Sektör B - Reaktör</div>
      <div className="col-span-2">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-variant border border-outline-variant text-on-surface font-label-caps text-label-caps">
      <span className="material-symbols-outlined text-[14px]">logout</span> ÇIKIŞ
                                  </span>
      </div>
      <div className="col-span-5 font-mono-data text-mono-data text-on-surface-variant truncate">Seans sona erdi. Süre: 58:42. Başarılı çıkış.</div>
      </div>
      </div>
      {/* Pagination Footer */}
      <div className="px-6 py-3 bg-surface-container border-t border-outline-variant/50 flex justify-between items-center">
      <div className="font-body-sm text-body-sm text-on-surface-variant">
                              Toplam 1,248 kayıttan 1-50 arası gösteriliyor.
                          </div>
      <div className="flex items-center gap-2">
      <button className="p-1 rounded hover:bg-surface-variant text-on-surface-variant disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <span className="font-mono-data text-mono-data text-on-surface px-2">Sayfa 1 / 25</span>
      <button className="p-1 rounded hover:bg-surface-variant text-on-surface">
      <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
