import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';

export default function MarketplaceList({
  products,
  onSelectProduct,
  onDeleteProduct,
  onOpenAddModal,
  onResetData,
  favorites = [],
  onToggleFavorite,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory !== 'all' && p.kategori !== selectedCategory) return false;
        if (selectedCondition !== 'all' && p.kondisi !== selectedCondition) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.nama.toLowerCase().includes(q);
          const matchLoc = p.lokasi.toLowerCase().includes(q);
          const matchDesc = p.deskripsi?.toLowerCase().includes(q);
          if (!matchName && !matchLoc && !matchDesc) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.harga - b.harga;
        if (sortBy === 'price-desc') return b.harga - a.harga;
        if (sortBy === 'name-asc') return a.nama.localeCompare(b.nama);
        return 0;
      });
  }, [products, selectedCategory, selectedCondition, searchQuery, sortBy]);

  const categories = [
    { id: 'all', label: 'Semua Barang', count: products.length },
    { id: 'sepeda', label: 'Sepeda Utuh', count: products.filter((p) => p.kategori === 'sepeda').length },
    { id: 'komponen', label: 'Komponen & Part', count: products.filter((p) => p.kategori === 'komponen').length },
    { id: 'apparel', label: 'Apparel & Pakaian', count: products.filter((p) => p.kategori === 'apparel').length },
    { id: 'aksesori', label: 'Aksesori & Gear', count: products.filter((p) => p.kategori === 'aksesori').length },
  ];

  return (
    <div className="space-y-8">
      
      {/* Search and Filter Controls */}
      <div className="bg-white rounded-2xl p-6 border border-[#244B37]/10 shadow-sm space-y-5">
        
        {/* Top: Category Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#244B37]/10">
          <span className="text-xs font-bold text-[#183426] uppercase tracking-wider">
            Pilih Kategori Lapak:
          </span>
          <span className="text-xs text-[#78916A]">
            Menampilkan {filteredProducts.length} dari total {products.length} produk
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

        {/* Bottom: Search Input, Condition Filter & Sort */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          <div className="sm:col-span-6 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk, misal: road bike, helm, groupset, jersey..."
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
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-xs text-[#292D28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            >
              <option value="all">Semua Kondisi</option>
              <option value="bekas">Bekas (Second)</option>
              <option value="baru">Baru (New Gress)</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-xs text-[#292D28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            >
              <option value="default">Urutan Standar</option>
              <option value="price-asc">Harga: Termurah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="name-asc">Nama Produk (A - Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* CONDITIONAL RENDERING REQUIREMENT:
          "c. Tambahkan conditional rendering: tampilkan teks 'Belum ada data [nama entitas Anda]' apabila daftar masih kosong."
      */}
      {products.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border-2 border-dashed border-[#244B37]/20 shadow-sm my-6">
          <div className="w-16 h-16 rounded-2xl bg-[#78916A]/15 text-[#244B37] flex items-center justify-center mx-auto mb-4 text-3xl">
            📦
          </div>
          {/* Exact required conditional rendering statement */}
          <h3 className="text-2xl font-extrabold text-[#183426] mb-2">
            Belum ada data produk jual beli
          </h3>
          <p className="text-sm text-[#292D28]/70 max-w-md mx-auto mb-6 leading-relaxed">
            Daftar lapak jual beli saat ini kosong. Anda dapat memasang iklan produk baru atau memuat kembali produk contoh awal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenAddModal}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer"
            >
              + Pasang Iklan Sekarang
            </button>
            <button
              onClick={onResetData}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#244B37] bg-[#F6F4ED] hover:bg-[#78916A]/20 transition-colors border border-[#244B37]/20 cursor-pointer"
            >
              Muat Ulang Data Produk
            </button>
          </div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-[#244B37]/15 shadow-sm my-6">
          <div className="w-12 h-12 rounded-xl bg-[#F6F4ED] text-[#78916A] flex items-center justify-center mx-auto mb-3 text-xl">
            🔍
          </div>
          <h3 className="text-xl font-bold text-[#183426] mb-1">
            Belum ada data produk jual beli yang cocok
          </h3>
          <p className="text-xs text-[#292D28]/70 max-w-sm mx-auto mb-4">
            Tidak ditemukan barang untuk pencarian "{searchQuery || selectedCategory}". Coba ubah kata kunci atau bersihkan filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedCondition('all');
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onDeleteProduct={onDeleteProduct}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}

    </div>
  );
}
