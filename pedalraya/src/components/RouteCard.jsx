import React from 'react';

export default function RouteCard({ route, onSelectRoute, onDeleteRoute, isFavorite, onToggleFavorite }) {
  const {
    id,
    nama,
    kategoriLabel,
    lokasi,
    kondisi,
    jarak,
    elevasi,
    durasi,
    kesulitanLabel,
    rekomendasi,
    foto,
    deskripsi,
  } = route;

  return (
    <article className="route-card bg-white rounded-2xl overflow-hidden border border-[#244B37]/10 flex flex-col group shadow-sm hover:shadow-md transition-all">
      {/* Thumbnail + Badges */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e8ede4]">
        <img
          src={foto}
          alt={nama}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // fallback to default image if path fails
            e.target.src = '/assets/images/Jalur Kabut Pinus Mangunan.webp';
          }}
        />
        <div className="absolute top-4 left-4 bg-[#183426]/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-semibold">
          {kategoriLabel}
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="bg-white/95 text-[#244B37] px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm">
            {kesulitanLabel}
          </span>
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(id);
              }}
              className={`w-7 h-7 rounded-lg flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-red-500 text-white'
                  : 'bg-[#183426]/60 text-white hover:bg-[#183426]'
              }`}
              title={isFavorite ? 'Hapus dari favorit' : 'Simpan rute'}
              aria-label="Favorit"
            >
              ♥
            </button>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#78916A] font-semibold mb-2">
            <span className="line-clamp-1">{lokasi}</span>
            <span aria-hidden="true">·</span>
            <span className="line-clamp-1">{kondisi}</span>
          </div>

          <h3 className="text-xl font-bold text-[#183426] group-hover:text-[#244B37] transition-colors mb-2">
            <button
              onClick={() => onSelectRoute(route)}
              className="text-left hover:underline cursor-pointer"
            >
              {nama}
            </button>
          </h3>

          <p className="text-sm text-[#292D28]/75 line-clamp-2 mb-4">
            {deskripsi}
          </p>
        </div>

        {/* Metrics Grid */}
        <div>
          <div className="grid grid-cols-3 py-3 border-y border-[#244B37]/10 text-center mb-4 text-xs">
            <div>
              <span className="block text-[#78916A]">Jarak</span>
              <strong className="font-bold text-[#183426] tabular-nums text-sm">
                {jarak} km
              </strong>
            </div>
            <div className="border-x border-[#244B37]/10">
              <span className="block text-[#78916A]">Elevasi</span>
              <strong className="font-bold text-[#183426] tabular-nums text-sm">
                {elevasi} m
              </strong>
            </div>
            <div>
              <span className="block text-[#78916A]">Durasi</span>
              <strong className="font-bold text-[#183426] tabular-nums text-sm">
                {durasi}
              </strong>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] text-[#78916A] line-clamp-1 flex-1">
              {rekomendasi}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {onDeleteRoute && (
                <button
                  onClick={() => onDeleteRoute(id)}
                  className="py-1.5 px-2.5 rounded-xl text-xs text-red-600 hover:bg-red-50 border border-red-200 transition-colors cursor-pointer"
                  title="Hapus rute dari daftar state"
                >
                  Hapus
                </button>
              )}
              <button
                onClick={() => onSelectRoute(route)}
                className="py-2 px-3.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                Detail →
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
