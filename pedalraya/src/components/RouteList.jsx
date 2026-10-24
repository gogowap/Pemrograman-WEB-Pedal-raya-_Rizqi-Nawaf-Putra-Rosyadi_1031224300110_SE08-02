import React, { useState, useMemo } from 'react';
import RouteCard from './RouteCard';

export default function RouteList({
  routes,
  onSelectRoute,
  onDeleteRoute,
  onOpenAddModal,
  onResetData,
  favorites = [],
  onToggleFavorite,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  // Filter & search logic
  const filteredRoutes = useMemo(() => {
    return routes
      .filter((r) => {
        // Category filter
        if (selectedCategory !== 'all' && r.kategori !== selectedCategory) {
          return false;
        }
        // Difficulty filter
        if (selectedDifficulty !== 'all' && r.kesulitan !== selectedDifficulty) {
          return false;
        }
        // Search filter (name, location, description)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = r.nama.toLowerCase().includes(q);
          const matchLoc = r.lokasi.toLowerCase().includes(q);
          const matchDesc = r.deskripsi?.toLowerCase().includes(q);
          if (!matchName && !matchLoc && !matchDesc) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'distance-asc') return a.jarak - b.jarak;
        if (sortBy === 'distance-desc') return b.jarak - a.jarak;
        if (sortBy === 'elevation-desc') return b.elevasi - a.elevasi;
        if (sortBy === 'name-asc') return a.nama.localeCompare(b.nama);
        return 0;
      });
  }, [routes, selectedCategory, selectedDifficulty, searchQuery, sortBy]);

  const categories = [
    { id: 'all', label: 'Semua Rute', count: routes.length },
    { id: 'road', label: 'Road Bike', count: routes.filter((r) => r.kategori === 'road').length },
    { id: 'gravel', label: 'Gravel', count: routes.filter((r) => r.kategori === 'gravel').length },
    { id: 'mtb', label: 'Mountain Bike', count: routes.filter((r) => r.kategori === 'mtb').length },
    { id: 'touring', label: 'Touring', count: routes.filter((r) => r.kategori === 'touring').length },
  ];

  return (
    <div className="space-y-8">
      
      {/* Filter and Search Bar Controls */}
      <div className="bg-white rounded-2xl p-6 border border-[#244B37]/10 shadow-sm space-y-5">
        
        {/* Top: Category Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#244B37]/10">
          <span className="text-xs font-bold text-[#183426] uppercase tracking-wider">
            Pilih Kategori Disiplin:
          </span>
          <span className="text-xs text-[#78916A]">
            Menampilkan {filteredRoutes.length} dari total {routes.length} rute
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#244B37] text-white shadow-sm'
                    : 'border border-[#244B37]/20 bg-white text-[#292D28] hover:border-[#244B37]'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* Bottom: Search Input & Extra Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          <div className="sm:col-span-6 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari rute berdasarkan nama, lokasi, atau daerah..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-xs text-[#292D28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            />
            <span className="absolute left-3 top-3 text-xs text-[#292D28]/40">🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-[#292D28]/40 hover:text-[#292D28] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          <div className="sm:col-span-3">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-xs text-[#292D28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            >
              <option value="all">Semua Kesulitan</option>
              <option value="mudah">Mudah (Pemula)</option>
              <option value="menengah">Menengah</option>
              <option value="sulit">Menantang / Mahir</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-xs text-[#292D28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            >
              <option value="default">Urutan Standar</option>
              <option value="distance-asc">Jarak: Terpendek</option>
              <option value="distance-desc">Jarak: Terjauh</option>
              <option value="elevation-desc">Elevasi: Tertinggi</option>
              <option value="name-asc">Nama Rute (A - Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* CONDITIONAL RENDERING REQUIREMENT:
          "c. Tambahkan conditional rendering: tampilkan teks 'Belum ada data [nama entitas Anda]' apabila daftar masih kosong."
      */}
      {routes.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border-2 border-dashed border-[#244B37]/20 shadow-sm my-6">
          <div className="w-16 h-16 rounded-2xl bg-[#78916A]/15 text-[#244B37] flex items-center justify-center mx-auto mb-4 text-3xl">
            🚴‍♂️
          </div>
          {/* Exact required sentence */}
          <h3 className="text-2xl font-extrabold text-[#183426] mb-2">
            Belum ada data rute bersepeda
          </h3>
          <p className="text-sm text-[#292D28]/70 max-w-md mx-auto mb-6 leading-relaxed">
            Daftar rute saat ini kosong. Anda dapat menambahkan rute baru melalui formulir input atau memuat ulang rute contoh awal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenAddModal}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer"
            >
              + Tambah Rute Baru Sekarang
            </button>
            <button
              onClick={onResetData}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#244B37] bg-[#F6F4ED] hover:bg-[#78916A]/20 transition-colors border border-[#244B37]/20 cursor-pointer"
            >
              Muat Ulang Data Rute Contoh
            </button>
          </div>
        </div>
      ) : filteredRoutes.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-[#244B37]/15 shadow-sm my-6">
          <div className="w-12 h-12 rounded-xl bg-[#F6F4ED] text-[#78916A] flex items-center justify-center mx-auto mb-3 text-xl">
            🔍
          </div>
          <h3 className="text-xl font-bold text-[#183426] mb-1">
            Belum ada rute bersepeda yang sesuai kriteria
          </h3>
          <p className="text-xs text-[#292D28]/70 max-w-sm mx-auto mb-4">
            Tidak ditemukan rute untuk filter atau pencarian "{searchQuery || selectedCategory}". Coba ubah kata kunci atau reset filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#244B37] bg-[#78916A]/15 hover:bg-[#78916A]/25 transition-colors cursor-pointer"
          >
            Bersihkan Filter
          </button>
        </div>
      ) : (
        /* RENDER LIST REQUIREMENT:
           "a. Simpan daftar item sebagai state (array) di App.jsx, lalu tampilkan menggunakan render list (.map()) dengan key unik pada tiap item."
        */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoutes.map((route) => (
            <RouteCard
              key={route.id}
              route={route}
              onSelectRoute={onSelectRoute}
              onDeleteRoute={onDeleteRoute}
              isFavorite={favorites.includes(route.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
