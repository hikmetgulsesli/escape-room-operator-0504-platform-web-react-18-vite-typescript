// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Oda Detay Kontrolü
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface OdaDetayKontroluProps {}

export function OdaDetayKontrolu(props: OdaDetayKontroluProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-slate-900/80 backdrop-blur-md text-blue-500 dark:text-blue-400 font-inter tracking-tight text-sm fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 border-b border-slate-700/50">
      <div className="flex items-center gap-4">
      <span className="text-lg font-black tracking-tighter text-blue-500 uppercase">COMMAND CENTER</span>
      <div className="flex items-center bg-surface-container rounded-lg px-3 py-1.5 border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_0_1px_#adc6ff]">
      <span className="material-symbols-outlined text-outline-variant mr-2" style={{fontSize: "18px"}}>search</span>
      <input className="bg-transparent border-none outline-none text-on-surface text-body-sm w-48 placeholder-outline-variant p-0 focus:ring-0" placeholder="Search..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-6">
      <button className="bg-error text-on-error font-label-caps px-4 py-2 rounded flex items-center gap-2 hover:bg-error/90 transition-colors animate-pulse">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1", fontSize: "18px"}}>warning</span>
                      EMERGENCY STOP
                  </button>
      <div className="flex items-center gap-4 border-l border-slate-700/50 pl-4">
      <button className="text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined">settings</span>
      </button>
      <img alt="Operator Profile" className="w-8 h-8 rounded-full border border-slate-700" data-alt="A small, circular avatar image showing a professional male operator with a headset, looking focused in a dimly lit, high-tech command center environment with blue glowing screens in the background. The aesthetic is modern, serious, and cinematic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIfuaj8PBeVuOPTdoM9SI74io__O3CY8pe3fvZEuuwg1qxMueWAarhyUehDWWmfHcLQ66rDjEnxlN-uY4sGibVD8GKI2A6edtwH9_alSxv-vZR_3GbSG1hEXxeSB37m_uufw-9Q5tDyl4-VpDLw8-tMk4x2RwvMIWHW3mpy3QVKGxF_5LbsXfUWJ_x6moZUBVhHchGRt3rThwtHcJogItYK6RQ9Mpq-tKvji149ib3HaZPi2-W5ao-7BtFYBdngkFkavEPArOcHMI" />
      </div>
      </div>
      </header>
      <div className="flex flex-1 pt-14">
      {/* SideNavBar */}
      <nav className="bg-slate-900/90 backdrop-blur-lg text-blue-500 dark:text-blue-400 font-inter text-xs font-medium uppercase tracking-widest fixed left-0 top-0 h-full w-64 border-r border-slate-800 shadow-2xl flex flex-col pt-16 pb-6 px-4 z-40 transition-all duration-200 ease-in-out hidden md:flex">
      <div className="mb-8 px-2 flex items-center gap-3">
      <img alt="Command Station 01" className="w-10 h-10 rounded-full border border-slate-700" data-alt="A stylized, glowing neon blue icon representing a futuristic command station or server node against a dark, metallic background, conveying a high-tech cybersecurity theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8riB-G4ZNq0vO1HBaaGKEv6zdbjsxRgCfcv6dYgOB2YJTp2ZakeGwO30Vr4Zvg0zWoHAvC4wX8wV0xsoXH8WKWAXOnXGL_kbRR0QIFcRSm3r3BAcV0tIcoIXjq7i6IyaJXvGwBOjbJqd7-VMW297hdhoVPPVRh8vAg8NL9hJFills1F5Keb3KHaDkY3OfNwrSQ1rg1l-pGfNLRVAH7RcDeUihpHlfPd-tlaUOn33j1lCD4sKDBuRbLFz8W7LTl1wX2auast81vE" />
      <div>
      <h2 className="text-slate-100 font-bold text-sm tracking-normal capitalize">Alpha Sector</h2>
      <p className="text-slate-500 text-[10px] tracking-wider">Lead Operator</p>
      </div>
      </div>
      <ul className="flex flex-col gap-2 flex-1">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                              Dashboard
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 hover:bg-slate-800/40 transition-colors" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                              Operations
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors" href="#">
      <span className="material-symbols-outlined">list_alt</span>
                              Activity Log
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors" href="#">
      <span className="material-symbols-outlined">analytics</span>
                              Analytics
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors" href="#">
      <span className="material-symbols-outlined">settings_input_component</span>
                              System Settings
                          </a>
      </li>
      </ul>
      <button className="mt-auto mb-6 bg-primary text-on-primary font-bold py-3 rounded w-full hover:bg-primary/90 transition-colors">
                      NEW SESSION
                  </button>
      <ul className="flex flex-col gap-2 border-t border-slate-800 pt-4">
      <li>
      <a className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>help</span>
                              Support
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 transition-colors" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>logout</span>
                              Logout
                          </a>
      </li>
      </ul>
      </nav>
      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
      {/* Left Column: Operations */}
      <div className="flex-1 flex flex-col gap-6">
      {/* Header / Timer */}
      <div className="glass-panel rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-1">Oda 3: Laboratuvar</h1>
      <div className="flex gap-2">
      <span className="bg-error/10 text-error border border-error/30 font-label-caps text-label-caps px-2 py-1 rounded">LIVE</span>
      <span className="bg-primary/10 text-primary border border-primary/30 font-label-caps text-label-caps px-2 py-1 rounded">ZORLUK: YÜKSEK</span>
      </div>
      </div>
      <div className="flex flex-col items-center">
      <div className="font-display-timer text-display-timer text-primary tracking-tight">45:12</div>
      <div className="flex gap-3 mt-2">
      <button className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant px-4 py-2 rounded flex items-center justify-center transition-colors">
      <span className="material-symbols-outlined">pause</span>
      </button>
      <button className="bg-primary text-on-primary px-6 py-2 rounded font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined">play_arrow</span>
                                      DEVAM
                                  </button>
      <button className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant px-4 py-2 rounded flex items-center justify-center transition-colors">
      <span className="material-symbols-outlined">restart_alt</span>
      </button>
      </div>
      </div>
      </div>
      {/* Surveillance */}
      <div className="glass-panel rounded-xl overflow-hidden relative aspect-video border border-slate-700 group">
      <img alt="Surveillance Feed" className="w-full h-full object-cover opacity-70" data-alt="A simulated CCTV security camera feed looking into a dimly lit, high-tech science laboratory. The room has stainless steel tables, glowing blue fluid in beakers, and industrial piping. The image has a slight static effect and low saturation to look like authentic surveillance footage in a dark mode UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBobiiGoWuluRrA9_VTRr-8irqanmwO5ve8IEy6jHqRwMdO-4VLzsxJx4dFIElnP9uUZRMxBE7jFzfdunzFJiRqJsRg51cKdADQm37cjG5FeDqurGWVo8ucmu90bymcOTnKeSpqBf-OjAUMqj5Yeih3Hu2GimVCMwzynEZuMwiHVoL7vEe41sAGbg7GdhwwdToKur7Ndf_cBhKNIWiBAFLUJTk1J5OMKClAOoc4F_5gVDHGrB6Hm_1ALNvzGAUbuT6iPDUsIGJ12Lc" />
      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-slate-700 px-3 py-1 rounded">
      <span className="font-label-caps text-label-caps text-primary tracking-widest">CAM 01 - MAIN LAB</span>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-background/80 text-on-surface p-2 rounded hover:bg-surface-variant border border-slate-700"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>fullscreen</span></button>
      <button className="bg-background/80 text-on-surface p-2 rounded hover:bg-surface-variant border border-slate-700"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>mic</span></button>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Clue System */}
      <div className="glass-panel rounded-xl p-5 flex flex-col">
      <h3 className="font-headline-md text-headline-md border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">lightbulb</span>
                                  İpucu Gönderimi
                              </h3>
      <div className="space-y-3 mb-4">
      <button className="w-full text-left bg-surface-container hover:bg-surface-variant border border-outline-variant p-3 rounded text-body-sm text-on-surface transition-colors flex justify-between items-center">
                                      "Kasadaki sembollere dikkat edin."
                                      <span className="material-symbols-outlined text-outline-variant" style={{fontSize: "16px"}}>send</span>
      </button>
      <button className="w-full text-left bg-surface-container hover:bg-surface-variant border border-outline-variant p-3 rounded text-body-sm text-on-surface transition-colors flex justify-between items-center">
                                      "Ultraviyole ışığı kullanma zamanı."
                                      <span className="material-symbols-outlined text-outline-variant" style={{fontSize: "16px"}}>send</span>
      </button>
      </div>
      <div className="mt-auto relative">
      <textarea className="w-full bg-surface-dim border border-outline-variant rounded-lg p-3 text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none h-24 placeholder-outline-variant" placeholder="Özel mesaj yazın..."></textarea>
      <button className="absolute bottom-3 right-3 bg-primary text-on-primary p-1.5 rounded hover:bg-primary/90 transition-colors">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>send</span>
      </button>
      </div>
      </div>
      {/* Puzzle Checklist */}
      <div className="glass-panel rounded-xl p-5 flex flex-col">
      <h3 className="font-headline-md text-headline-md border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-tertiary">check_box</span>
                                  Bulmaca Durumu
                              </h3>
      <div className="space-y-1 flex-1 overflow-y-auto pr-2">
      <label className="flex items-center gap-3 p-2 hover:bg-surface-container rounded cursor-pointer transition-colors group">
      <input checked={true} className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-transparent cursor-pointer" type="checkbox" />
      <span className="font-body-base text-body-base text-outline line-through group-hover:text-outline-variant">Giriş Kapısı Şifresi</span>
      </label>
      <label className="flex items-center gap-3 p-2 hover:bg-surface-container rounded cursor-pointer transition-colors group">
      <input checked={true} className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-transparent cursor-pointer" type="checkbox" />
      <span className="font-body-base text-body-base text-outline line-through group-hover:text-outline-variant">Lazer Ağı Devre Dışı</span>
      </label>
      <label className="flex items-center gap-3 p-2 hover:bg-surface-container rounded cursor-pointer transition-colors group">
      <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-transparent cursor-pointer" type="checkbox" />
      <span className="font-body-base text-body-base text-on-surface">Kimyasal Karışım</span>
      </label>
      <label className="flex items-center gap-3 p-2 hover:bg-surface-container rounded cursor-pointer transition-colors group">
      <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-transparent cursor-pointer" type="checkbox" />
      <span className="font-body-base text-body-base text-on-surface">Gizli Kasa Kilidi</span>
      </label>
      <label className="flex items-center gap-3 p-2 hover:bg-surface-container rounded cursor-pointer transition-colors group">
      <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-transparent cursor-pointer" type="checkbox" />
      <span className="font-body-base text-body-base text-on-surface">Ana Bilgisayar Erişimi</span>
      </label>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Sidebar Panels */}
      <div className="w-full lg:w-80 flex flex-col gap-6">
      {/* Player List */}
      <div className="glass-panel rounded-xl p-5">
      <div className="flex justify-between items-center border-b border-slate-700 pb-3 mb-4">
      <h3 className="font-headline-md text-headline-md flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary">group</span>
                                  Oyuncular
                              </h3>
      <span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-2 py-1 rounded">4/6</span>
      </div>
      <ul className="space-y-2 mb-4">
      <li className="flex justify-between items-center bg-surface-container/50 p-2 rounded border border-transparent hover:border-slate-700">
      <span className="font-body-sm text-body-sm text-on-surface">Ahmet Y.</span>
      <button className="text-error hover:text-error-container transition-colors"><span className="material-symbols-outlined" style={{fontSize: "16px"}}>close</span></button>
      </li>
      <li className="flex justify-between items-center bg-surface-container/50 p-2 rounded border border-transparent hover:border-slate-700">
      <span className="font-body-sm text-body-sm text-on-surface">Selin K.</span>
      <button className="text-error hover:text-error-container transition-colors"><span className="material-symbols-outlined" style={{fontSize: "16px"}}>close</span></button>
      </li>
      <li className="flex justify-between items-center bg-surface-container/50 p-2 rounded border border-transparent hover:border-slate-700">
      <span className="font-body-sm text-body-sm text-on-surface">Can B.</span>
      <button className="text-error hover:text-error-container transition-colors"><span className="material-symbols-outlined" style={{fontSize: "16px"}}>close</span></button>
      </li>
      <li className="flex justify-between items-center bg-surface-container/50 p-2 rounded border border-transparent hover:border-slate-700">
      <span className="font-body-sm text-body-sm text-on-surface">Elif D.</span>
      <button className="text-error hover:text-error-container transition-colors"><span className="material-symbols-outlined" style={{fontSize: "16px"}}>close</span></button>
      </li>
      </ul>
      <div className="flex gap-2">
      <input className="flex-1 bg-surface-dim border border-outline-variant rounded p-2 text-body-sm text-on-surface focus:border-primary outline-none" placeholder="Yeni oyuncu..." type="text" />
      <button className="bg-surface-container border border-outline-variant text-on-surface p-2 rounded hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
      </button>
      </div>
      </div>
      {/* Event Log */}
      <div className="glass-panel rounded-xl p-5 flex-1 flex flex-col">
      <h3 className="font-headline-md text-headline-md border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">history</span>
                              Olay Günlüğü
                          </h3>
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 font-mono-data text-body-sm">
      <div className="flex gap-3">
      <span className="text-outline-variant w-12 shrink-0">14:10</span>
      <div className="text-on-surface border-l-2 border-primary pl-2">
                                      İpucu gönderildi: "Kasadaki semboller..."
                                  </div>
      </div>
      <div className="flex gap-3">
      <span className="text-outline-variant w-12 shrink-0">14:05</span>
      <div className="text-secondary border-l-2 border-secondary pl-2">
                                      Bulmaca çözüldü: Lazer Ağı
                                  </div>
      </div>
      <div className="flex gap-3">
      <span className="text-outline-variant w-12 shrink-0">13:58</span>
      <div className="text-error border-l-2 border-error pl-2">
                                      Geçersiz şifre denemesi (Kasa)
                                  </div>
      </div>
      <div className="flex gap-3">
      <span className="text-outline-variant w-12 shrink-0">13:45</span>
      <div className="text-secondary border-l-2 border-secondary pl-2">
                                      Bulmaca çözüldü: Giriş Kapısı
                                  </div>
      </div>
      <div className="flex gap-3">
      <span className="text-outline-variant w-12 shrink-0">13:30</span>
      <div className="text-primary border-l-2 border-primary pl-2">
                                      Oyun başlatıldı.
                                  </div>
      </div>
      </div>
      </div>
      {/* Inventory / Objects */}
      <div className="glass-panel rounded-xl p-5">
      <h3 className="font-headline-md text-headline-md border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-tertiary-container">inventory_2</span>
                              Oda Envanteri
                          </h3>
      <div className="grid grid-cols-2 gap-3">
      <div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col items-center justify-center text-center gap-2 opacity-50">
      <span className="material-symbols-outlined text-outline-variant">key</span>
      <span className="font-label-caps text-label-caps text-on-surface">MAVİ ANAHTAR</span>
      </div>
      <div className="bg-surface-container border border-primary rounded p-3 flex flex-col items-center justify-center text-center gap-2 shadow-[0_0_10px_rgba(77,142,255,0.1)]">
      <span className="material-symbols-outlined text-primary">flashlight_on</span>
      <span className="font-label-caps text-label-caps text-primary">UV FENER</span>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col items-center justify-center text-center gap-2">
      <span className="material-symbols-outlined text-on-surface">science</span>
      <span className="font-label-caps text-label-caps text-on-surface">BEHER 1</span>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col items-center justify-center text-center gap-2">
      <span className="material-symbols-outlined text-on-surface">sd_card</span>
      <span className="font-label-caps text-label-caps text-on-surface">VERİ DİSKİ</span>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
