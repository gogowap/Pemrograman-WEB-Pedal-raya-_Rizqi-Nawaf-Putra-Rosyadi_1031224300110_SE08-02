import React from 'react';

export default function ProductCard({ product, onSelectProduct, onDeleteProduct, isFavorite, onToggleFavorite }) {
  const {
    id,
    nama,
    kategoriLabel,
    kondisi,
    kondisiLabel,
    harga,
    lokasi,
    foto,
    deskripsi,
    penjual,
    terverifikasi,
  } = product;

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(harga);

  return (
    <article className="mk-card bg-white rounded-2xl border border-[#244B37]/10 overflow-hidden flex flex-col group shadow-sm hover:shadow-md transition-all">
      {/* Thumbnail + Condition Badge */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e8ede4] flex items-center justify-center">
        <img
          src={foto}
          alt={nama}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/assets/images/camp.jpg';
          }}
        />

        {/* Condition Badge */}
        <span
          className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm ${
            kondisi === 'baru'
              ? 'bg-[#244B37] text-white'
              : 'bg-white text-[#183426] border border-[#244B37]/20'
          }`}
        >
          {kondisiLabel}
        </span>

        {/* Category Label */}
        <span className="absolute top-3 right-3 text-[11px] font-bold text-[#183426] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg">
          {kategoriLabel}
        </span>

        {/* Favorite Heart Button */}
        {onToggleFavorite && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(id);
            }}
            className={`absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-[#183426]/60 text-white hover:bg-[#183426]'
            }`}
            title="Simpan barang ke favorit"
          >
            ♥
          </button>
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <strong className="text-xl font-extrabold text-[#183426] block mb-1">
            {formattedPrice}
          </strong>

          <h3 className="text-sm font-bold text-[#183426] leading-snug mb-1.5">
            <button
              onClick={() => onSelectProduct(product)}
              className="hover:underline text-left cursor-pointer line-clamp-2"
            >
              {nama}
            </button>
          </h3>

          <span className="text-xs text-[#78916A] block mb-2">
            📍 {lokasi}
          </span>

          <p className="text-xs text-[#292D28]/70 leading-relaxed mb-4 line-clamp-2">
            {deskripsi}
          </p>
        </div>

        {/* Footer info & Actions */}
        <div className="pt-3 border-t border-[#244B37]/10">
          <div className="flex items-center justify-between text-[11px] text-[#292D28]/60 mb-3">
            <span className="truncate">Penjual: <strong>{penjual || 'Anggota PedalRaya'}</strong></span>
            {terverifikasi && (
              <span className="font-bold text-[#244B37] bg-[#78916A]/15 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                ✓ Terverifikasi
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-2">
            {onDeleteProduct && (
              <button
                onClick={() => onDeleteProduct(id)}
                className="py-1.5 px-2.5 rounded-xl text-xs text-red-600 hover:bg-red-50 border border-red-200 transition-colors cursor-pointer"
                title="Hapus produk dari lapak"
              >
                Hapus
              </button>
            )}
            <button
              onClick={() => onSelectProduct(product)}
              className="py-2 px-4 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer whitespace-nowrap ml-auto"
            >
              Lihat Detail →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
