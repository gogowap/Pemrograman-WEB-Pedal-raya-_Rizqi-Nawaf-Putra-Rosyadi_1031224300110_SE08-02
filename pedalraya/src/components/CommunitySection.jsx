import React, { useState } from 'react';
import { INITIAL_COMMUNITIES } from '../data/mockData';

export default function CommunitySection() {
  const [communities, setCommunities] = useState(INITIAL_COMMUNITIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [showRegModal, setShowRegModal] = useState(false);
  const [newComm, setNewComm] = useState({
    nama: '',
    kategori: 'Gravel & Bikepacking',
    lokasi: '',
    deskripsi: '',
    jadwal: '',
    kontak: '',
  });
  const [successBanner, setSuccessBanner] = useState('');

  const filteredCommunities = communities.filter((c) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      c.nama.toLowerCase().includes(q) ||
      c.lokasi.toLowerCase().includes(q) ||
      c.kategori.toLowerCase().includes(q)
    );
  });

  const handleRegisterCommunity = (e) => {
    e.preventDefault();
    if (!newComm.nama.trim() || !newComm.lokasi.trim()) return;

    const created = {
      id: `comm-${Date.now()}`,
      nama: newComm.nama.trim(),
      kategori: newComm.kategori,
      anggota: '10+ Anggota (Baru)',
      lokasi: newComm.lokasi.trim(),
      deskripsi: newComm.deskripsi.trim() || 'Komunitas pesepeda antusias pecinta olahraga dan alam bebas.',
      jadwal: newComm.jadwal.trim() || 'Akhir Pekan',
      kontak: newComm.kontak.trim() || '@komunitas_gowes',
    };

    setCommunities([created, ...communities]);
    setSuccessBanner(`Komunitas "${created.nama}" berhasil didaftarkan ke jejaring PedalRaya!`);
    setShowRegModal(false);
    setNewComm({
      nama: '',
      kategori: 'Gravel & Bikepacking',
      lokasi: '',
      deskripsi: '',
      jadwal: '',
      kontak: '',
    });
    setTimeout(() => setSuccessBanner(''), 6000);
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
          <span>Jejaring Gowes Seluruh Indonesia</span>
          <span aria-hidden="true">·</span>
          <span>Solidaritas & Keberagaman</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#183426] tracking-tight mb-3">
              Komunitas Pesepeda PedalRaya
            </h1>
            <p className="text-base text-[#292D28]/80 max-w-2xl">
              Bersepeda sendiri memang membebaskan, tetapi bersepeda bersama membuka pertemanan sejati. Temukan kelompok gowes di kota Anda yang sesuai dengan minat dan jadwal luang Anda.
            </p>
          </div>
          <button
            onClick={() => setShowRegModal(true)}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            + Daftarkan Komunitas
          </button>
        </div>
      </div>

      {successBanner && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-semibold flex items-center justify-between">
          <span>🎉 {successBanner}</span>
          <button onClick={() => setSuccessBanner('')} className="font-bold ml-2">✕</button>
        </div>
      )}

      {/* Hero Spotlight Banner */}
      <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#244B37]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-2">
            Budaya Komunitas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#183426] mb-4">
            "No One Left Behind" — Filosofi Pelindung Peloton
          </h2>
          <p className="text-sm text-[#292D28]/80 leading-relaxed mb-6">
            Di PedalRaya, kami memprioritaskan keselamatan dan kebersamaan di atas kecepatan. Setiap kelompok binaan menerapkan sistem Road Captain dan Sweeper terlatih untuk memastikan tidak ada rekan yang tertinggal akibat masalah mekanik atau kelelahan fisik.
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-[#244B37]/10 pt-6 text-xs">
            <div>
              <strong className="text-lg font-bold text-[#183426] block">
                {communities.length}+
              </strong>
              <span className="text-[#78916A]">Komunitas Terdaftar</span>
            </div>
            <div>
              <strong className="text-lg font-bold text-[#183426] block">18 Kota</strong>
              <span className="text-[#78916A]">Jangkauan Wilayah</span>
            </div>
            <div>
              <strong className="text-lg font-bold text-[#183426] block">100% Terbuka</strong>
              <span className="text-[#78916A]">Tanpa Biaya Masuk</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#e8ede4] border border-[#244B37]/15 shadow-md">
            <img
              src="/assets/images/komunitas.jpg"
              alt="Suasana kumpul komunitas pesepeda di teras kafe alam"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/assets/images/pexels-run-ffwpu-5687405.jpg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Directory & Search */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-extrabold text-[#183426]">
            Direktori Komunitas Aktif ({filteredCommunities.length})
          </h2>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari nama komunitas atau kota..."
              className="w-full pl-8 pr-3 py-2 rounded-xl border border-[#244B37]/20 bg-white text-xs text-[#292D28] focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            />
            <span className="absolute left-2.5 top-2.5 text-xs text-[#292D28]/40">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-2xl p-6 border border-[#244B37]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#244B37] bg-[#78916A]/15 px-3 py-1 rounded-lg">
                    {c.kategori}
                  </span>
                  <span className="text-xs text-[#78916A] font-medium">{c.anggota}</span>
                </div>
                <h3 className="text-xl font-bold text-[#183426] mb-2">{c.nama}</h3>
                <p className="text-xs text-[#292D28]/60 mb-3 flex items-center gap-1.5">
                  <span>📍 {c.lokasi}</span>
                </p>
                <p className="text-sm text-[#292D28]/75 mb-6 leading-relaxed">
                  {c.deskripsi}
                </p>
              </div>

              <div className="border-t border-[#244B37]/10 pt-4">
                <div className="text-xs text-[#292D28]/70 mb-3 space-y-1">
                  <div>⏰ <strong>Jadwal:</strong> {c.jadwal}</div>
                  <div>📱 <strong>Instagram:</strong> {c.kontak}</div>
                </div>
                <a
                  href={`https://instagram.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-xl text-center text-xs font-bold text-[#244B37] bg-[#F6F4ED] hover:bg-[#244B37] hover:text-white transition-colors block"
                >
                  Hubungi Komunitas
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Daftarkan Komunitas */}
      {showRegModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#183426]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#244B37]/15 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#244B37]/10 mb-4">
              <h3 className="text-xl font-bold text-[#183426]">Daftarkan Komunitas Gowes</h3>
              <button
                onClick={() => setShowRegModal(false)}
                className="w-8 h-8 rounded-full bg-[#F6F4ED] text-[#292D28] flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleRegisterCommunity} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Nama Komunitas *</label>
                <input
                  type="text"
                  value={newComm.nama}
                  onChange={(e) => setNewComm({ ...newComm, nama: e.target.value })}
                  placeholder="Misal: Bandung Gravel Explorers"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Wilayah / Kota *</label>
                <input
                  type="text"
                  value={newComm.lokasi}
                  onChange={(e) => setNewComm({ ...newComm, lokasi: e.target.value })}
                  placeholder="Misal: Bandung & Lembang, Jawa Barat"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Fokus Disiplin</label>
                <select
                  value={newComm.kategori}
                  onChange={(e) => setNewComm({ ...newComm, kategori: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                >
                  <option value="Road Bike & Peloton">Road Bike & Peloton</option>
                  <option value="Gravel & Bikepacking">Gravel & Bikepacking</option>
                  <option value="MTB Enduro & XC">MTB Enduro & XC</option>
                  <option value="Touring & Randonneurs">Touring & Randonneurs</option>
                  <option value="Fun Ride & Leisure">Fun Ride & Leisure</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Jadwal Gowes Rutin</label>
                <input
                  type="text"
                  value={newComm.jadwal}
                  onChange={(e) => setNewComm({ ...newComm, jadwal: e.target.value })}
                  placeholder="Misal: Sabtu Pagi 06.00 WIB"
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Akun Media Sosial / Kontak</label>
                <input
                  type="text"
                  value={newComm.kontak}
                  onChange={(e) => setNewComm({ ...newComm, kontak: e.target.value })}
                  placeholder="Misal: @bdg_gravel"
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Deskripsi Singkat</label>
                <textarea
                  value={newComm.deskripsi}
                  onChange={(e) => setNewComm({ ...newComm, deskripsi: e.target.value })}
                  rows="2"
                  placeholder="Tujuan komunitas, titik kumpul favorit, dll..."
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#244B37]/10">
                <button
                  type="button"
                  onClick={() => setShowRegModal(false)}
                  className="px-4 py-2 rounded-xl bg-[#F6F4ED] font-bold text-[#292D28]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#244B37] hover:bg-[#183426] text-white font-bold"
                >
                  Simpan Komunitas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
