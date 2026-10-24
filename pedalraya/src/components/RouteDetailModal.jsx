import React, { useState } from 'react';

export default function RouteDetailModal({ route, onClose }) {
  if (!route) return null;

  const [gearChecked, setGearChecked] = useState({
    helm: true,
    ban: true,
    air: true,
    tools: false,
    kacamata: false,
    lampu: true,
  });

  const toggleGear = (key) => {
    setGearChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const {
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
    ringkasanLengkap,
    waktuTerbaik,
    elevasiMaks,
    permukaan,
    checkpoints,
  } = route;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#183426]/70 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6">
      <div className="bg-[#F6F4ED] rounded-3xl w-full max-w-5xl border border-[#244B37]/20 shadow-2xl overflow-hidden my-6">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 bg-[#F6F4ED]/95 backdrop-blur-md px-6 py-4 border-b border-[#244B37]/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#292D28]/70">
            <span>PedalRaya</span>
            <span>/</span>
            <span className="text-[#244B37] font-semibold">{kategoriLabel}</span>
            <span>/</span>
            <span className="font-bold text-[#183426] line-clamp-1">{nama}</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-[#183426] bg-white border border-[#244B37]/20 hover:bg-[#244B37] hover:text-white transition-colors cursor-pointer"
          >
            ← Tutup Panduan
          </button>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Header Title */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#78916A] uppercase tracking-wider mb-2">
              <span>{lokasi}</span>
              <span aria-hidden="true">·</span>
              <span>Kategori: {kategoriLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Tingkat: {kesulitanLabel}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#183426] tracking-tight mb-3">
              {nama}
            </h1>
            <p className="text-sm sm:text-base text-[#292D28]/80 leading-relaxed max-w-3xl">
              {ringkasanLengkap}
            </p>
          </div>

          {/* Photo Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#244B37]/15 aspect-[16/9] bg-[#e8ede4]">
            <img
              src={foto}
              alt={nama}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/assets/images/Jalur Kabut Pinus Mangunan.webp';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#183426]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-[#D8C8A6] uppercase tracking-wider block mb-1">
                  Kondisi Lapangan Terverifikasi
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/95 max-w-xl">
                  {kondisi}. Selalu perhatikan etika gowes dan hormati masyarakat serta pengguna jalan setempat.
                </p>
              </div>
              <div className="bg-[#183426]/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold border border-white/20">
                Waktu Rekomendasi: {waktuTerbaik || '06:00 - 09:30 WIB'}
              </div>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="bg-white rounded-2xl p-6 border border-[#244B37]/15 shadow-sm grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            <div>
              <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">Total Jarak</span>
              <strong className="text-2xl font-extrabold text-[#183426] tabular-nums">{jarak} km</strong>
              <span className="block text-[11px] text-[#292D28]/60 mt-0.5">Loop / Satu Arah</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">Total Elevasi</span>
              <strong className="text-2xl font-extrabold text-[#183426] tabular-nums">+{elevasi} m</strong>
              <span className="block text-[11px] text-[#292D28]/60 mt-0.5">Puncak: {elevasiMaks || '480 mdpl'}</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">Estimasi Durasi</span>
              <strong className="text-2xl font-extrabold text-[#183426] tabular-nums">{durasi}</strong>
              <span className="block text-[11px] text-[#292D28]/60 mt-0.5">Tempo Santai-Sedang</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">Tingkat Kesulitan</span>
              <strong className="text-2xl font-extrabold text-[#183426]">{kesulitanLabel}</strong>
              <span className="block text-[11px] text-[#292D28]/60 mt-0.5">Daya Tahan Fisik</span>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-1">
              <span className="block text-xs font-bold text-[#78916A] uppercase tracking-wider mb-1">Sepeda Ideal</span>
              <strong className="text-lg font-bold text-[#244B37]">{kategoriLabel}</strong>
              <span className="block text-[11px] text-[#292D28]/60 mt-0.5">{rekomendasi}</span>
            </div>
          </div>

          {/* Grid Layout: Left story & checkpoints, Right: Safety & Gear */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Narrative & Surface */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#244B37]/10">
                <h2 className="text-xl font-extrabold text-[#183426] mb-3">
                  Kisah Perjalanan & Karakter Jalur
                </h2>
                <p className="text-sm text-[#292D28]/80 leading-relaxed mb-6">
                  {ringkasanLengkap} Rute ini dirancang untuk memberikan keseimbangan antara tantangan fisik tanjakan, pemandangan bentang alam yang memanjakan mata, serta titik peristirahatan warung lokal yang ramah pesepeda.
                </p>

                {/* Surface breakdown */}
                <div className="pt-5 border-t border-[#244B37]/10">
                  <h3 className="text-xs font-bold text-[#183426] uppercase tracking-wider mb-3">
                    Komposisi Permukaan Jalur:
                  </h3>
                  <div className="w-full bg-[#e8ede4] h-3 rounded-full overflow-hidden flex mb-3">
                    <div
                      className="bg-[#244B37] h-full"
                      style={{ width: `${permukaan?.aspal || 65}%` }}
                      title={`Aspal Mulus (${permukaan?.aspal || 65}%)`}
                    />
                    <div
                      className="bg-[#78916A] h-full"
                      style={{ width: `${permukaan?.tanah || 25}%` }}
                      title={`Tanah Padat (${permukaan?.tanah || 25}%)`}
                    />
                    <div
                      className="bg-[#D8C8A6] h-full"
                      style={{ width: `${permukaan?.makadam || 10}%` }}
                      title={`Makadam / Kerikil (${permukaan?.makadam || 10}%)`}
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-[#292D28]/70">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#244B37]" /> {permukaan?.aspal || 65}% Aspal Mulus
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#78916A]" /> {permukaan?.tanah || 25}% Tanah Hutan / Jalur Alami
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D8C8A6]" /> {permukaan?.makadam || 10}% Makadam & Kerikil
                    </span>
                  </div>
                </div>
              </section>

              {/* Elevation Profile Graphic */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#244B37]/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold text-[#183426]">Profil Elevasi Jalur</h2>
                    <p className="text-xs text-[#292D28]/70">Grafik visual ketinggian sepanjang {jarak} kilometer</p>
                  </div>
                  <span className="text-xs font-bold text-[#78916A] bg-[#78916A]/15 px-3 py-1 rounded-lg">
                    Elevasi Maks: {elevasiMaks || `${elevasi} mdpl`}
                  </span>
                </div>

                <div className="p-4 bg-[#F6F4ED] rounded-xl border border-[#244B37]/10 mb-4">
                  <svg viewBox="0 0 600 160" className="w-full h-36 overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="detailElevationGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#244B37" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#244B37" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="40" x2="600" y2="40" stroke="#244B37" strokeOpacity="0.1" strokeDasharray="4" />
                    <line x1="0" y1="90" x2="600" y2="90" stroke="#244B37" strokeOpacity="0.1" strokeDasharray="4" />
                    <line x1="0" y1="140" x2="600" y2="140" stroke="#244B37" strokeOpacity="0.1" />

                    <path
                      d="M 0,140 Q 70,130 140,100 T 260,40 T 360,45 T 460,85 T 540,120 L 600,140 L 600,150 L 0,150 Z"
                      fill="url(#detailElevationGrad)"
                    />
                    <path
                      d="M 0,140 Q 70,130 140,100 T 260,40 T 360,45 T 460,85 T 540,120 L 600,140"
                      fill="none"
                      stroke="#244B37"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="0" cy="140" r="4" fill="#244B37" />
                    <circle cx="280" cy="40" r="5" fill="#78916A" />
                    <circle cx="600" cy="140" r="4" fill="#244B37" />
                  </svg>

                  <div className="flex justify-between text-[11px] text-[#292D28]/60 pt-2 border-t border-[#244B37]/10 mt-2">
                    <span>0 km (Start)</span>
                    <span>{Math.round(jarak * 0.25)} km</span>
                    <span className="font-bold text-[#183426]">{Math.round(jarak * 0.5)} km (Puncak Elevasi)</span>
                    <span>{Math.round(jarak * 0.75)} km</span>
                    <span>{jarak} km (Finish)</span>
                  </div>
                </div>
              </section>

              {/* Checkpoints */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#244B37]/10">
                <h2 className="text-lg font-bold text-[#183426] mb-6">Titik Pemberhentian & Rest Area</h2>
                <div className="space-y-5">
                  {(checkpoints || []).map((cp, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#244B37] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                        {cp.km}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#183426]">{cp.nama}</h3>
                        <p className="text-xs text-[#292D28]/75 leading-relaxed mt-1">{cp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column: Safety & Checklist (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Safety Tips */}
              <div className="bg-white rounded-2xl p-6 border border-[#244B37]/15 shadow-sm">
                <h3 className="text-base font-bold text-[#183426] mb-3 flex items-center gap-2">
                  <span>🛡️</span> Tips Keselamatan Rute
                </h3>
                <ul className="space-y-3 text-xs text-[#292D28]/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#244B37] font-bold">•</span>
                    <span><strong>Periksa Kondisi Rem:</strong> Pastikan kampas rem mencengkeram kuat terutama pada turunan panjang.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#244B37] font-bold">•</span>
                    <span><strong>Lampu Belakang Aktif:</strong> Gunakan lampu merah berkedip saat melewati kabut atau jalur rindang.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#244B37] font-bold">•</span>
                    <span><strong>Etika Berpapasan:</strong> Beri isyarat tangan dan kurangi kecepatan saat berpapasan dengan warga desa.</span>
                  </li>
                </ul>
              </div>

              {/* Interactive Gear Checklist */}
              <div className="bg-white rounded-2xl p-6 border border-[#244B37]/15 shadow-sm">
                <h3 className="text-base font-bold text-[#183426] mb-3 flex items-center gap-2">
                  <span>🎒</span> Checklist Perlengkapan Gowes
                </h3>
                <div className="space-y-2 text-xs text-[#292D28]/80">
                  <label className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F6F4ED] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={gearChecked.helm}
                      onChange={() => toggleGear('helm')}
                      className="w-4 h-4 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <span className={gearChecked.helm ? 'font-medium text-[#183426]' : 'text-[#292D28]/60'}>
                      Helm sepeda berstandar SNI/CPSC (Wajib)
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F6F4ED] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={gearChecked.ban}
                      onChange={() => toggleGear('ban')}
                      className="w-4 h-4 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <span className={gearChecked.ban ? 'font-medium text-[#183426]' : 'text-[#292D28]/60'}>
                      Ban dalam cadangan + tire lever + pompa mini
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F6F4ED] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={gearChecked.air}
                      onChange={() => toggleGear('air')}
                      className="w-4 h-4 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <span className={gearChecked.air ? 'font-medium text-[#183426]' : 'text-[#292D28]/60'}>
                      2 Bidon air minum (minimal 1.2 Liter)
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F6F4ED] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={gearChecked.tools}
                      onChange={() => toggleGear('tools')}
                      className="w-4 h-4 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <span className={gearChecked.tools ? 'font-medium text-[#183426]' : 'text-[#292D28]/60'}>
                      Multi-tool sepeda (kunci L & chain tool)
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F6F4ED] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={gearChecked.lampu}
                      onChange={() => toggleGear('lampu')}
                      className="w-4 h-4 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <span className={gearChecked.lampu ? 'font-medium text-[#183426]' : 'text-[#292D28]/60'}>
                      Lampu sepeda depan dan belakang
                    </span>
                  </label>
                </div>
              </div>

            </div>

          </div>

          {/* Modal Footer */}
          <div className="pt-6 border-t border-[#244B37]/10 flex items-center justify-between">
            <span className="text-xs text-[#78916A]">
              Panduan diverifikasi oleh Komunitas PedalRaya Musim 2026
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors cursor-pointer shadow-sm"
            >
              Kembali ke Daftar Rute
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
