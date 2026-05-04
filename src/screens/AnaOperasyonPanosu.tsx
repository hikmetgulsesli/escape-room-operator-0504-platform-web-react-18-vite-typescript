// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Operasyon Panosu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaOperasyonPanosuProps {}

export function AnaOperasyonPanosu(props: AnaOperasyonPanosuProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="hidden md:flex flex-col h-full pt-16 pb-6 px-4 bg-slate-900/90 backdrop-blur-lg border-r border-slate-800 shadow-2xl transition-all duration-200 ease-in-out fixed left-0 top-0 w-64 z-40">
      <div className="mb-xl flex items-center gap-sm">
      <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden shrink-0 border border-outline-variant">
      <img alt="Command Station 01" className="w-full h-full object-cover" data-alt="A highly detailed close-up portrait of a serious male operator in a dark, high-tech command center environment. The lighting is dramatic, with cool neon blue and stark shadows emphasizing a cyber-security aesthetic. The subject wears a dark tactical headset. The overall mood is intense and professional, fitting a critical operations dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByuWeCLpzTumpHGakWtTg_j6Doi1t9zMFb3U_lQQpUxDLYu1HSHMpGLqgljNHajqTv3KiAxXLDx4gZVQSOQCe8o1YuMJ160EH6q4RKegE-dvP53m7xlxd2M2UmRfPoNUAK8-7XrXcUQ5YoAsRKtFfZ9w0NrtYVUM_K9IX_2pHo7-sIEIsBE-jfaKpqZ62Nd0kjCmRjGjiFWHEsMVPSWBDeJxDknbOs7Z1PjccfWDfx_mynTMURA8PyKgwuSiPLRzA9eBuzlFbUtAg" />
      </div>
      <div>
      <h2 className="font-headline-md text-slate-100 text-headline-md">Alpha Sector</h2>
      <p className="font-body-sm text-outline text-body-sm">Lead Operator</p>
      </div>
      </div>
      <button className="mb-lg w-full bg-[#3B82F6] hover:bg-primary-container text-white font-label-caps text-label-caps py-sm px-md rounded transition-colors flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined" data-icon="add_circle" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
                  NEW SESSION
              </button>
      <div className="flex-1 flex flex-col gap-xs overflow-y-auto">
      {/* Active Item */}
      <a className="flex items-center gap-md px-md py-sm rounded-lg bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                      Dashboard
                  </a>
      {/* Inactive Items */}
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
                      Operations
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest" href="#">
      <span className="material-symbols-outlined" data-icon="list_alt">list_alt</span>
                      Activity Log
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest" href="#">
      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                      Analytics
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest" href="#">
      <span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span>
                      System Settings
                  </a>
      </div>
      <div className="mt-auto pt-md border-t border-slate-800 flex flex-col gap-xs">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest" href="#">
      <span className="material-symbols-outlined" data-icon="help">help</span>
                      Support
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors font-inter text-xs font-medium uppercase tracking-widest" href="#">
      <span className="material-symbols-outlined" data-icon="logout">logout</span>
                      Logout
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 md:ml-64 relative z-0">
      {/* TopNavBar Component */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 bg-slate-900/80 backdrop-blur-md docked full-width border-b border-slate-700/50 flat no shadows text-blue-500 dark:text-blue-400 font-inter tracking-tight text-sm transition-all md:w-[calc(100%-16rem)]">
      <div className="flex items-center gap-lg">
      <div className="text-lg font-black tracking-tighter text-blue-500 uppercase">COMMAND CENTER</div>
      {/* Search Bar */}
      <div className="hidden sm:flex items-center bg-surface-container rounded-full px-md py-xs border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all w-64">
      <span className="material-symbols-outlined text-outline mr-sm text-[18px]" data-icon="search">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body-sm text-body-sm placeholder:text-outline p-0" placeholder="Oda Ara..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="p-xs text-slate-400 hover:bg-slate-800/50 transition-colors rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-xs text-slate-400 hover:bg-slate-800/50 transition-colors rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      <div className="w-px h-6 bg-slate-700 mx-xs"></div>
      <button className="bg-[#EF4444] hover:bg-red-600 text-white font-label-caps text-label-caps py-xs px-md rounded transition-colors flex items-center gap-xs emergency-pulse">
      <span className="material-symbols-outlined text-[16px]" data-icon="warning">warning</span>
                          EMERGENCY STOP
                      </button>
      </div>
      </header>
      {/* Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-gutter pt-20">
      {/* Filter & Status Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-md gap-md">
      <div className="flex gap-sm">
      <button className="bg-primary/20 text-primary border border-primary px-md py-xs rounded-full font-label-caps text-label-caps hover:bg-primary/30 transition-colors">TÜMÜ (8)</button>
      <button className="bg-surface-container text-outline border border-outline-variant px-md py-xs rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">AKTİF (3)</button>
      <button className="bg-surface-container text-outline border border-outline-variant px-md py-xs rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">BOŞ (4)</button>
      <button className="bg-surface-container text-outline border border-outline-variant px-md py-xs rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">BAKIM (1)</button>
      </div>
      <div className="flex items-center gap-sm text-outline font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[16px]" data-icon="sort">sort</span>
      <span>Sırala: Durum (Öncelikli)</span>
      </div>
      </div>
      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
      {/* Room Card 1: Active (Warning/Low Time) */}
      <div className="glass-panel rounded-lg flex flex-col active-glow cursor-pointer hover:bg-surface-container-highest transition-colors group">
      {/* Surveillance Header Area */}
      <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
      <img alt="Surveillance Feed" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" data-alt="A simulated security camera view of a dark, eerie basement escape room. The room is lit by a single flickering fluorescent bulb, casting long, harsh shadows over a cluttered desk with old documents and a locked metal safe. The overall tone is suspenseful and gritty, adhering to a dark mode, high-contrast visual style typical of modern command center dashboards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_QE-L31_oiAOTrfwHO7fiW79WunVTPoDBuaON-NItynHjpHeAdlrBPxG4zLgR7Gy2otLenwVMegf1RAXFyitu3bGDL4RCRm-ti6C8B7yvh3nM0qQja4HzBxgf1qaamHDONc57O-Jskk1Ce2n5izv-DGh795BtejIbNpX22lY1LlL0BHMwxpxClb_l7qUkI6jzNz8l8rrfOBr5I0EL7XopV2s0GEn-X1MnaWgXJxfcS4M3hGE27SdBaZB-QMBswtxgaIHmMZMFIns" />
      <div className="absolute top-sm left-sm bg-black/60 px-xs py-[2px] rounded border border-[#334155] flex flex-col">
      <span className="font-label-caps text-label-caps text-white">SEKTÖR A-1</span>
      <span className="font-mono-data text-mono-data text-tertiary">08:42</span>
      </div>
      <div className="absolute top-sm right-sm flex gap-xs">
      <span className="bg-tertiary/20 text-tertiary border border-tertiary/50 px-sm py-[2px] rounded-full font-label-caps text-label-caps flex items-center gap-[2px]">
      <span className="material-symbols-outlined text-[12px]" data-icon="timer">timer</span> LOW TIME
                                   </span>
      </div>
      <div className="absolute bottom-sm left-sm right-sm flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-black/80 hover:bg-black text-white p-xs rounded border border-[#334155] transition-colors"><span className="material-symbols-outlined text-[16px]" data-icon="mic">mic</span></button>
      <button className="bg-black/80 hover:bg-black text-white p-xs rounded border border-[#334155] transition-colors"><span className="material-symbols-outlined text-[16px]" data-icon="lightbulb">lightbulb</span></button>
      </div>
      </div>
      {/* Details Area */}
      <div className="p-sm flex flex-col gap-xs flex-1">
      <div className="flex justify-between items-start border-b border-[#334155] pb-xs mb-xs">
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface">Karanlık Mahzen</h3>
      <div className="flex items-center gap-xs text-outline font-body-sm text-body-sm mt-[2px]">
      <span className="material-symbols-outlined text-[14px]" data-icon="group">group</span> 4 Oyuncu
                                      </div>
      </div>
      <button className="text-primary hover:text-primary-container transition-colors p-[2px]">
      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
      </button>
      </div>
      <div className="flex justify-between items-center mt-auto pt-xs">
      <button className="w-full bg-transparent border border-[#334155] text-outline hover:text-white hover:border-outline-variant font-label-caps text-label-caps py-xs px-sm rounded transition-colors text-center">
                                      MÜDAHALE ET
                                  </button>
      </div>
      </div>
      </div>
      {/* Room Card 2: Active (Normal) */}
      <div className="glass-panel rounded-lg flex flex-col active-glow cursor-pointer hover:bg-surface-container-highest transition-colors group">
      <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
      <img alt="Surveillance Feed" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" data-alt="A simulated security camera feed of a high-tech sci-fi laboratory escape room. The room features glowing blue neon panels, sleek metallic surfaces, and a central console with complex monitors. The lighting is cool and artificial, maintaining a crisp, detailed dark-mode aesthetic suitable for a professional monitoring interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5qvWSGz91u_mhzas79km2Dz_Ll_WnWdP1pw2AzyLViTdneYs0av_ABA7cZ-uCKzdaKtewx6KjpWSy2QZfxG_TvPStwpYwxmabOFZMdF-gnmMnYKUXML-Km0W28rnJ4ktumkUz__mThJUeTLfuNaDxj6Eh49WxoIcycjHXvYpFgUXH8ZGjaVDRIWluA2Z-2gH-OHfwM2N7u_w_dpZQeetzWyPC8u1VMUn3saEzvD3v5F7kar1chmCaRTLiX43ebeaxPRtmtP2DbtQ" />
      <div className="absolute top-sm left-sm bg-black/60 px-xs py-[2px] rounded border border-[#334155] flex flex-col">
      <span className="font-label-caps text-label-caps text-white">SEKTÖR B-2</span>
      <span className="font-mono-data text-mono-data text-primary">42:15</span>
      </div>
      <div className="absolute top-sm right-sm flex gap-xs">
      <span className="bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/50 px-sm py-[2px] rounded-full font-label-caps text-label-caps flex items-center gap-[2px]">
      <span className="material-symbols-outlined text-[12px]" data-icon="radio_button_checked">radio_button_checked</span> LIVE
                                   </span>
      </div>
      <div className="absolute bottom-sm left-sm right-sm flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-black/80 hover:bg-black text-white p-xs rounded border border-[#334155] transition-colors"><span className="material-symbols-outlined text-[16px]" data-icon="mic">mic</span></button>
      <button className="bg-black/80 hover:bg-black text-white p-xs rounded border border-[#334155] transition-colors"><span className="material-symbols-outlined text-[16px]" data-icon="lightbulb">lightbulb</span></button>
      </div>
      </div>
      <div className="p-sm flex flex-col gap-xs flex-1">
      <div className="flex justify-between items-start border-b border-[#334155] pb-xs mb-xs">
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface">Laboratuvar Sızıntısı</h3>
      <div className="flex items-center gap-xs text-outline font-body-sm text-body-sm mt-[2px]">
      <span className="material-symbols-outlined text-[14px]" data-icon="group">group</span> 6 Oyuncu
                                      </div>
      </div>
      <button className="text-primary hover:text-primary-container transition-colors p-[2px]">
      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
      </button>
      </div>
      <div className="flex justify-between items-center mt-auto pt-xs">
      <button className="w-full bg-transparent border border-[#334155] text-outline hover:text-white hover:border-outline-variant font-label-caps text-label-caps py-xs px-sm rounded transition-colors text-center">
                                      MÜDAHALE ET
                                  </button>
      </div>
      </div>
      </div>
      {/* Room Card 3: Empty/Idle */}
      <div className="glass-panel rounded-lg flex flex-col cursor-pointer hover:bg-surface-container-highest transition-colors opacity-80">
      <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden flex items-center justify-center border-b border-[#334155]">
      <span className="material-symbols-outlined text-[48px] text-[#334155]" data-icon="videocam_off">videocam_off</span>
      <div className="absolute top-sm right-sm flex gap-xs">
      <span className="bg-surface-container text-outline border border-outline-variant px-sm py-[2px] rounded-full font-label-caps text-label-caps flex items-center gap-[2px]">
                                      BOŞ
                                   </span>
      </div>
      </div>
      <div className="p-sm flex flex-col gap-xs flex-1">
      <div className="flex justify-between items-start pb-xs">
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface opacity-70">Antik Mezar</h3>
      <div className="flex items-center gap-xs text-outline font-body-sm text-body-sm mt-[2px] opacity-50">
      <span className="material-symbols-outlined text-[14px]" data-icon="group_off">group_off</span> Bekleniyor
                                      </div>
      </div>
      <button className="text-outline hover:text-white transition-colors p-[2px]">
      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
      </button>
      </div>
      <div className="flex justify-between items-center mt-auto pt-xs">
      <button className="w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 font-label-caps text-label-caps py-xs px-sm rounded transition-colors text-center flex justify-center items-center gap-xs">
      <span className="material-symbols-outlined text-[14px]" data-icon="play_arrow">play_arrow</span> OTURUM BAŞLAT
                                  </button>
      </div>
      </div>
      </div>
      {/* Room Card 4: Maintenance */}
      <div className="glass-panel rounded-lg flex flex-col cursor-pointer hover:bg-surface-container-highest transition-colors opacity-80">
      <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden flex items-center justify-center border-b border-[#334155]">
      {/* Dimmed/Blurred placeholder for maintenance */}
      <div className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-10 flex items-center justify-center flex-col text-outline">
      <span className="material-symbols-outlined text-[32px] mb-xs" data-icon="build">build</span>
      <span className="font-label-caps text-label-caps">TEKNİK BAKIM</span>
      </div>
      <div className="absolute top-sm right-sm flex gap-xs z-20">
      <span className="bg-tertiary-container/20 text-tertiary-container border border-tertiary-container/50 px-sm py-[2px] rounded-full font-label-caps text-label-caps flex items-center gap-[2px]">
                                      OFFLINE
                                   </span>
      </div>
      </div>
      <div className="p-sm flex flex-col gap-xs flex-1">
      <div className="flex justify-between items-start pb-xs">
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface opacity-70">Uzay İstasyonu</h3>
      <div className="flex items-center gap-xs text-outline font-body-sm text-body-sm mt-[2px] opacity-50">
      <span className="material-symbols-outlined text-[14px]" data-icon="schedule">schedule</span> Tahmini: 45 dk
                                      </div>
      </div>
      <button className="text-outline hover:text-white transition-colors p-[2px]">
      <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
