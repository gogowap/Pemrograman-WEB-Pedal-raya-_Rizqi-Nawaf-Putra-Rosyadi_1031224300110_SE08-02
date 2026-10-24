import React from 'react';

export default function MarketplaceStats({ products, onOpenAddModal, onResetData }) {
  const totalProducts = products.length;
  const totalPrice = products.reduce((sum, p) => sum + (Number(p.harga) || 0), 0);
  const totalBaru = products.filter((p) => p.kondisi === 'baru').length;
  const totalBekas = products.filter((p) => p.kondisi === 'bekas').length;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-[#244B37]/10 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#244B37]/10 mb-6">
        <div>
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
            Ringkasan Statistik Entitas Produk
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#183426]">
            Lapak Jual Beli Komunitas PedalRaya
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {totalProducts === 0 ? (
            <button
              onClick={onResetData}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#244B37] bg-[#78916A]/15 hover:bg-[#78916A]/25 transition-colors cursor-pointer"
            >
              Muat Ulang Produk Contoh
            </button>
          ) : (
            <button
              onClick={onResetData}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#292D28]/60 hover:text-[#244B37] hover:bg-[#F6F4ED] transition-colors cursor-pointer"
              title="Reset ke produk awal"
            >
              Reset Data Awal
            </button>
          )}
          <button
            onClick={onOpenAddModal}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer"
          >
            + Pasang Iklan Baru
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
        <div className="bg-[#F6F4ED]/60 rounded-xl p-4 border border-[#244B37]/10">
          <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">
            Total Produk
          </span>
          <strong className="text-3xl font-extrabold text-[#183426] tabular-nums">
            {totalProducts}
          </strong>
          <span className="block text-[11px] text-[#292D28]/60 mt-1">Listing Aktif</span>
        </div>

        <div className="bg-[#F6F4ED]/60 rounded-xl p-4 border border-[#244B37]/10">
          <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">
            Nilai Perputaran
          </span>
          <strong className="text-2xl sm:text-3xl font-extrabold text-[#183426] tabular-nums">
            Rp {(totalPrice / 1000000).toFixed(1)} Jt
          </strong>
          <span className="block text-[11px] text-[#292D28]/60 mt-1">Total Nilai Barang</span>
        </div>

        <div className="bg-[#F6F4ED]/60 rounded-xl p-4 border border-[#244B37]/10">
          <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">
            Kondisi Barang
          </span>
          <div className="flex justify-center gap-2 mt-1">
            <span className="px-2 py-0.5 rounded bg-white text-xs font-bold text-[#244B37] border border-[#244B37]/15">
              Baru: {totalBaru}
            </span>
            <span className="px-2 py-0.5 rounded bg-white text-xs font-bold text-[#183426] border border-[#244B37]/15">
              Bekas: {totalBekas}
            </span>
          </div>
          <span className="block text-[10px] text-[#78916A] mt-1">Pilihan Kondisi</span>
        </div>

        <div className="bg-[#F6F4ED]/60 rounded-xl p-4 border border-[#244B37]/10">
          <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">
            Kategori Terbanyak
          </span>
          <strong className="text-lg font-bold text-[#244B37] block mt-1">
            Sepeda & Komponen
          </strong>
          <span className="block text-[11px] text-[#292D28]/60 mt-0.5">Transaksi Langsung</span>
        </div>
      </div>
    </div>
  );
}
