import React, { useState } from 'react';
import { INITIAL_SPOTS } from '../data/mockData';

export default function SpotsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const filteredSpots = INITIAL_SPOTS.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.kategori === selectedCategory;
  });

  const handleCopyLocation = (id, lokasi) => {
    navigator.clipboard?.writeText(lokasi);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
          <span>Infrastruktur & Rekomendasi</span>
          <span aria-hidden="true">·</span>
          <span>Bike Friendly Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#183426] tracking-tight mb-4">
          Titik Ramah Pesepeda (Cycling Spots)
        </h1>
        <p className="text-base text-[#292D28]/80 leading-relaxed max-w-2xl">
          Kumpulan lokasi yang menyambut hangat pesepeda: kedai kopi dengan rak sepeda aman, bengkel darurat saat rantai putus, dan rest area teduh di jalur gowes populer.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#244B37]/10 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#183426] mr-2 uppercase tracking-wider">
            Kategori Fasilitas:
          </span>
          {[
            { id: 'all', label: 'Semua Spot (6)' },
            { id: 'cafe', label: 'Kedai Kopi Gowes' },
            { id: 'workshop', label: 'Bengkel & Servis' },
            { id: 'rest', label: 'Rest Area & Sumber Air' },
            { id: 'shop', label: 'Toko Sepeda & Apparel' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#244B37] text-white'
                  : 'border border-[#244B37]/20 bg-white text-[#292D28] hover:border-[#244B37]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Spots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSpots.map((spot) => (
          <article
            key={spot.id}
            className="bg-white rounded-2xl p-6 border border-[#244B37]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#244B37] bg-[#78916A]/15 px-3 py-1 rounded-lg">
                  {spot.kategoriBadge}
                </span>
                <span className="text-xs text-[#78916A]">{spot.jam}</span>
              </div>
              <h3 className="text-xl font-bold text-[#183426] mb-3">{spot.nama}</h3>
              {spot.foto && (
                <div className="rounded-xl overflow-hidden aspect-[16/10] bg-[#e8ede4] mb-3">
                  <img
                    src={spot.foto}
                    alt={spot.nama}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/about.jpg';
                    }}
                  />
                </div>
              )}
              <span className="text-xs text-[#78916A] block mb-3">📍 {spot.lokasi}</span>
              <p className="text-xs text-[#292D28]/75 leading-relaxed mb-4">
                {spot.deskripsi}
              </p>
            </div>

            <div className="border-t border-[#244B37]/10 pt-4">
              <span className="text-[11px] font-bold text-[#183426] uppercase tracking-wider block mb-2">
                Fasilitas Pesepeda:
              </span>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {spot.fasilitas.map((f, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#F6F4ED] text-[#244B37] px-2 py-0.5 rounded border border-[#244B37]/15"
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleCopyLocation(spot.id, spot.lokasi)}
                className="w-full py-2 px-3 rounded-xl text-center text-xs font-bold text-[#244B37] bg-[#F6F4ED] hover:bg-[#244B37] hover:text-white transition-colors cursor-pointer"
              >
                {copiedId === spot.id ? '✓ Alamat Disalin!' : 'Salin Alamat & Petunjuk'}
              </button>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
