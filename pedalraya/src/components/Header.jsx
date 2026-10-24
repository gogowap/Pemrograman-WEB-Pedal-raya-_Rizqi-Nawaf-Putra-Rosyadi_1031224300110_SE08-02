import React, { useState } from 'react';

export default function Header({ activeTab, setActiveTab, onOpenAddRoute, onOpenAddProduct }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'routes', label: 'Eksplorasi Rute' },
    { id: 'marketplace', label: 'Jual Beli' },
    { id: 'community', label: 'Komunitas' },
    { id: 'events', label: 'Event' },
    { id: 'spots', label: 'Titik Pesepeda' },
    { id: 'safety', label: 'Keselamatan' },
    { id: 'about', label: 'Tentang' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F6F4ED]/95 backdrop-blur-md border-b border-[#244B37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('beranda')}
          className="flex items-center gap-2.5 text-[#183426] text-xl font-bold tracking-tight whitespace-nowrap shrink-0 group text-left cursor-pointer"
        >
          <span className="w-10 h-10 rounded-xl bg-[#244B37] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18.5" cy="17.5" r="3.5" />
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="15" cy="5" r="1" />
              <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
            </svg>
          </span>
          <span className="text-xl font-extrabold tracking-tight text-[#183426]">
            Pedal<span className="text-[#78916A]">Raya</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links (Quiet, single-line typography) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-semibold text-[#292D28]/80">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#244B37] border-b-2 border-[#244B37] pb-1'
                    : 'hover:text-[#244B37]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          {activeTab === 'marketplace' ? (
            <button
              onClick={onOpenAddProduct}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#244B37] hover:bg-[#183426] transition-all shadow-sm whitespace-nowrap shrink-0 gap-1.5 cursor-pointer"
            >
              <span className="text-base font-bold leading-none">+</span>
              <span>Pasang Iklan</span>
            </button>
          ) : (
            <button
              onClick={onOpenAddRoute}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#244B37] hover:bg-[#183426] transition-all shadow-sm whitespace-nowrap shrink-0 gap-1.5 cursor-pointer"
            >
              <span className="text-base font-bold leading-none">+</span>
              <span>Tambah Rute</span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#292D28] hover:bg-[#244B37]/5 cursor-pointer focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu bg-[#F6F4ED] border-b border-[#244B37]/15 p-6 shadow-xl flex flex-col gap-3 lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base py-2.5 border-b border-[#244B37]/10 transition-colors ${
                activeTab === item.id ? 'font-bold text-[#244B37]' : 'font-medium text-[#292D28]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAddRoute();
              }}
              className="text-center py-2.5 px-3 rounded-xl font-semibold text-xs text-white bg-[#244B37] shadow-sm"
            >
              + Tambah Rute
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAddProduct();
              }}
              className="text-center py-2.5 px-3 rounded-xl font-semibold text-xs text-[#244B37] bg-white border border-[#244B37]/20 shadow-sm"
            >
              + Pasang Iklan
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
