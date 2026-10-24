import React from 'react';

export default function Footer({ setActiveTab }) {
  const currentYear = 2026;

  return (
    <footer className="bg-[#183426] text-white pt-16 pb-12 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold">
              <span className="w-10 h-10 rounded-xl bg-[#244B37] text-white flex items-center justify-center border border-white/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18.5" cy="17.5" r="3.5" />
                  <circle cx="5.5" cy="17.5" r="3.5" />
                  <circle cx="15" cy="5" r="1" />
                  <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                </svg>
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                Pedal<span className="text-[#D8C8A6]">Raya</span>
              </span>
            </div>
            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              Platform komunitas, lapak jual beli, dan petualangan pesepeda di seluruh Indonesia. Menemukan rute baru, terhubung dengan komunitas, dan mengedepankan keselamatan bersepeda.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#D8C8A6]">
              <span>#FindYourRoute</span>
              <span>·</span>
              <span>#MeetYourPeople</span>
              <span>·</span>
              <span>#RideBeyond</span>
            </div>
          </div>

          {/* Quick Links 1: Rute & Lapak */}
          <div>
            <h4 className="text-xs font-bold text-[#D8C8A6] uppercase tracking-wider mb-4">
              Eksplorasi & Lapak
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('routes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Semua Rute Gowes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('marketplace');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer font-bold text-[#D8C8A6]"
                >
                  Lapak Jual Beli Sepeda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('routes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gravel & All-Road
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('routes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mountain Bike (MTB)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Komunitas & Spots */}
          <div>
            <h4 className="text-xs font-bold text-[#D8C8A6] uppercase tracking-wider mb-4">
              Komunitas & Event
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('community');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Direktori Komunitas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('events');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kalender Event 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('spots');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Titik Ramah Pesepeda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('safety');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pusat Keselamatan
                </button>
              </li>
            </ul>
          </div>

          {/* About & Values */}
          <div>
            <h4 className="text-xs font-bold text-[#D8C8A6] uppercase tracking-wider mb-4">
              PedalRaya
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Visi & Misi Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Komitmen Leave No Trace
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('safety');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Checklist Pra-Gowes
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} PedalRaya Indonesia. Platform Komunitas & Lapak Jual Beli Pesepeda.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Panduan Keselamatan</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Etika Bersepeda</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
