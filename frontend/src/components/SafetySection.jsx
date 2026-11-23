import React, { useState } from 'react';
import { SAFETY_CHECKLIST_ITEMS } from '../data/mockData';

export default function SafetySection() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = SAFETY_CHECKLIST_ITEMS.length;

  const handleCheckAll = () => {
    const all = {};
    SAFETY_CHECKLIST_ITEMS.forEach((item) => {
      all[item.id] = true;
    });
    setCheckedItems(all);
  };

  const handleReset = () => {
    setCheckedItems({});
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
          <span>Prioritas Utama Pesepeda</span>
          <span aria-hidden="true">·</span>
          <span>Ride Safe, Return Safe</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#183426] tracking-tight mb-4">
          Pusat Keselamatan & Edukasi Gowes
        </h1>
        <p className="text-base text-[#292D28]/80 leading-relaxed max-w-2xl">
          Keselamatan bersepeda adalah tanggung jawab bersama. Mulai dari pengecekan kondisi mekanik sebelum memutar pedal, hingga kesiapsiagaan menghadapi tanjakan dan cuaca ekstrem.
        </p>
      </div>

      {/* Interactive Checklist Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#244B37]/15 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#244B37]/10 mb-6">
          <div>
            <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
              Checklist Pra-Gowes Interaktif
            </span>
            <h2 className="text-2xl font-extrabold text-[#183426]">
              Pemeriksaan 5 Menit Sebelum Berangkat
            </h2>
            <p className="text-xs text-[#292D28]/70 mt-0.5">
              Centang setiap butir saat Anda memeriksa sepeda dan perlengkapan Anda di rumah.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="bg-[#F6F4ED] px-4 py-2 rounded-xl text-xs text-[#244B37] font-bold border border-[#244B37]/10">
              {checkedCount} / {totalCount} Selesai Terperiksa
            </span>
            {checkedCount < totalCount ? (
              <button
                onClick={handleCheckAll}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-[#244B37] hover:bg-[#F6F4ED] cursor-pointer"
              >
                Centang Semua
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
              >
                Reset Checklist
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#F6F4ED] h-2.5 rounded-full overflow-hidden mb-6 border border-[#244B37]/10">
          <div
            className="bg-[#244B37] h-full transition-all duration-300"
            style={{ width: `${(checkedCount / totalCount) * 100}%` }}
          />
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SAFETY_CHECKLIST_ITEMS.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <label
                key={item.id}
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  isChecked
                    ? 'bg-[#78916A]/10 border-[#78916A]/40'
                    : 'bg-[#F6F4ED]/60 border-[#244B37]/10 hover:bg-[#F6F4ED]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(item.id)}
                  className="w-5 h-5 mt-0.5 rounded text-[#244B37] accent-[#244B37] shrink-0 cursor-pointer"
                />
                <div>
                  <strong className={`text-sm font-bold block ${isChecked ? 'text-[#244B37]' : 'text-[#183426]'}`}>
                    {item.title}
                  </strong>
                  <span className="text-xs text-[#292D28]/70 mt-0.5 block leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </section>

      {/* Safety Articles / Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white rounded-3xl p-8 border border-[#244B37]/15 shadow-sm space-y-4">
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block">
            Teknik Bersepeda Pegunungan
          </span>
          <h2 className="text-xl font-bold text-[#183426]">
            Teknik Menuruni Tanjakan Curam (Descending)
          </h2>
          <p className="text-xs text-[#292D28]/80 leading-relaxed">
            Turunan panjang menyimpan risiko rem panas (brake fade) dan ban meledak jika tuas rem ditarik terus-menerus tanpa jeda:
          </p>
          <ul className="space-y-2.5 text-xs text-[#292D28]/80">
            <li className="flex items-start gap-2">
              <span className="text-[#244B37] font-bold">1.</span>
              <span><strong>Rem Berdenyut (Feathering):</strong> Tarik dan lepas rem secara bergantian setiap 3-5 detik agar piringan rotor atau velg sempat membuang panas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#244B37] font-bold">2.</span>
              <span><strong>Posisikan Berat ke Belakang:</strong> Geser pinggul sedikit ke belakang sadel dan rendahkan pusat gravitasi saat mengerem mendadak.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#244B37] font-bold">3.</span>
              <span><strong>Pandangan Menatap Keluar Tikungan:</strong> Arahkan mata jauh ke depan jalan, bukan ke aspal tepat di bawah roda depan.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-[#244B37]/15 shadow-sm space-y-4">
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block">
            Etika Jalan Raya & Rombongan
          </span>
          <h2 className="text-xl font-bold text-[#183426]">
            Sinyal Tangan & Komunikasi Peloton
          </h2>
          <p className="text-xs text-[#292D28]/80 leading-relaxed">
            Saat bersepeda dalam kelompok, pesepeda di barisan depan berfungsi sebagai 'mata' bagi rekan-rekan di belakangnya:
          </p>
          <ul className="space-y-2.5 text-xs text-[#292D28]/80">
            <li className="flex items-start gap-2">
              <span className="text-[#244B37] font-bold">👋</span>
              <span><strong>Tangan Menunjuk Bawah Bergetar:</strong> Ada lubang jalan (pothole), pasir licin, atau kerikil berbahaya di lajur.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#244B37] font-bold">✋</span>
              <span><strong>Tangan Terangkat Tegak:</strong> Aba-aba rombongan melambat atau bersiap berhenti di lampu merah / perempatan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#244B37] font-bold">👉</span>
              <span><strong>Lambaian Tangan ke Belakang:</strong> Aba-aba menyalip halangan atau memberi jalan bagi kendaraan lain.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
