import React from 'react';

export default function RouteStats({ routes, onOpenAddModal, onResetData }) {
  const totalRoutes = routes.length;
  const totalDistance = routes.reduce((sum, r) => sum + (Number(r.jarak) || 0), 0);
  const totalElevation = routes.reduce((sum, r) => sum + (Number(r.elevasi) || 0), 0);
  const avgElevation = totalRoutes > 0 ? Math.round(totalElevation / totalRoutes) : 0;
  
  // Count by category
  const categoriesCount = routes.reduce((acc, r) => {
    const cat = r.kategori || 'other';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-[#244B37]/10 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#244B37]/10 mb-6">
        <div>
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
            Ringkasan Statistik Entitas Rute
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#183426]">
            Data Koleksi Rute PedalRaya
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {totalRoutes === 0 ? (
            <button
              onClick={onResetData}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#244B37] bg-[#78916A]/15 hover:bg-[#78916A]/25 transition-colors cursor-pointer"
            >
              Muat Ulang Rute Contoh
            </button>
          ) : (
            <button
              onClick={onResetData}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#292D28]/60 hover:text-[#244B37] hover:bg-[#F6F4ED] transition-colors cursor-pointer"
              title="Reset ke rute awal"
            >
              Reset Data Awal
            </button>
          )}
          <button
            onClick={onOpenAddModal}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer"
          >
            + Tambah Rute
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
        <div className="bg-[#F6F4ED]/60 rounded-xl p-4 border border-[#244B37]/10">
          <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">
            Total Rute
          </span>
          <strong className="text-3xl font-extrabold text-[#183426] tabular-nums">
            {totalRoutes}
          </strong>
          <span className="block text-[11px] text-[#292D28]/60 mt-1">Rute Aktif Terdata</span>
        </div>

        <div className="bg-[#F6F4ED]/60 rounded-xl p-4 border border-[#244B37]/10">
          <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">
            Total Jarak
          </span>
          <strong className="text-3xl font-extrabold text-[#183426] tabular-nums">
            {totalDistance.toLocaleString('id-ID')} km
          </strong>
          <span className="block text-[11px] text-[#292D28]/60 mt-1">Akumulasi Jalur</span>
        </div>

        <div className="bg-[#F6F4ED]/60 rounded-xl p-4 border border-[#244B37]/10">
          <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">
            Rata-rata Elevasi
          </span>
          <strong className="text-3xl font-extrabold text-[#183426] tabular-nums">
            +{avgElevation.toLocaleString('id-ID')} m
          </strong>
          <span className="block text-[11px] text-[#292D28]/60 mt-1">Tanjakan per Rute</span>
        </div>

        <div className="bg-[#F6F4ED]/60 rounded-xl p-4 border border-[#244B37]/10">
          <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">
            Kategori Disiplin
          </span>
          <div className="flex flex-wrap justify-center gap-1 mt-1 text-[11px] font-semibold text-[#183426]">
            <span className="px-1.5 py-0.5 rounded bg-white border border-[#244B37]/15">
              Road: {categoriesCount.road || 0}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white border border-[#244B37]/15">
              Gravel: {categoriesCount.gravel || 0}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white border border-[#244B37]/15">
              MTB: {categoriesCount.mtb || 0}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white border border-[#244B37]/15">
              Tour: {categoriesCount.touring || 0}
            </span>
          </div>
          <span className="block text-[10px] text-[#78916A] mt-1">Variasi Disiplin</span>
        </div>
      </div>
    </div>
  );
}
