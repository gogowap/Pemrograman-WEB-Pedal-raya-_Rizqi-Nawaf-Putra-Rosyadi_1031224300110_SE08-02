import React, { useState } from 'react';
import LocalPhotoTiles from './LocalPhotoTiles';

const SAMPLE_PHOTOS = [
  { label: 'Hutan Pinus Mangunan', url: '/assets/images/Jalur Kabut Pinus Mangunan.webp' },
  { label: 'Kaldera Sembalun', url: '/assets/images/Tanjakan Lingkar Kaldera Sembalun.jpg' },
  { label: 'Merapi Foothills', url: '/assets/images/Merapi Foothills Classic Loop.jpg' },
  { label: 'Cangar Pegunungan', url: '/assets/images/Lintas Cangar Pegunungan Welirang.jpg' },
  { label: 'Singletrack Halimun', url: '/assets/images/mtb.jpg' },
  { label: 'Perbukitan Menoreh', url: '/assets/images/Jalur Perbukitan Menoreh.jpg' },
  { label: 'Sunset Gunung', url: '/assets/images/pexels-run-ffwpu-5687405.jpg' },
];

export default function RouteForm({ onAddRoute, onClose }) {
  const [formData, setFormData] = useState({
    nama: '',
    kategori: 'gravel',
    lokasi: '',
    jarak: '',
    elevasi: '',
    durasi: '',
    kesulitan: 'menengah',
    kondisi: 'Aspal Halus & Tanah Padat',
    rekomendasi: 'Rekomendasi Ban: 38-45c',
    foto: SAMPLE_PHOTOS[0].url,
    deskripsi: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [uploadedPhoto, setUploadedPhoto] = useState('');
  const [photoError, setPhotoError] = useState('');

  // Controlled component input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama.trim()) {
      setErrorMsg('Nama rute wajib diisi.');
      return;
    }
    if (!formData.lokasi.trim()) {
      setErrorMsg('Lokasi / daerah rute wajib diisi.');
      return;
    }
    if (!formData.jarak || Number(formData.jarak) <= 0) {
      setErrorMsg('Jarak rute harus berupa angka lebih dari 0 km.');
      return;
    }

    // Determine category and difficulty label
    const categoryLabels = {
      road: 'Road Bike',
      gravel: 'Gravel & All-Road',
      mtb: 'Mountain Bike (MTB)',
      touring: 'Touring & Bikepacking',
      leisure: 'Santai / Leisure',
    };

    const difficultyLabels = {
      mudah: 'Pemula / Santai',
      menengah: 'Menengah',
      sulit: 'Menantang / Mahir',
    };

    const newRoute = {
      id: `route-${Date.now()}`,
      nama: formData.nama.trim(),
      kategori: formData.kategori,
      kategoriLabel: categoryLabels[formData.kategori] || 'Gowes',
      lokasi: formData.lokasi.trim(),
      kondisi: formData.kondisi.trim() || 'Kondisi Jalan Campuran',
      jarak: Number(formData.jarak),
      elevasi: Number(formData.elevasi) || 0,
      durasi: formData.durasi.trim() || `${(Number(formData.jarak) / 20).toFixed(1)} Jam`,
      kesulitan: formData.kesulitan,
      kesulitanLabel: difficultyLabels[formData.kesulitan] || 'Menengah',
      rekomendasi: formData.rekomendasi.trim() || 'Periksa kondisi rem dan ban',
      foto: formData.foto || SAMPLE_PHOTOS[0].url,
      deskripsi: formData.deskripsi.trim() || 'Rute petualangan bersepeda pilihan komunitas PedalRaya.',
      ringkasanLengkap: formData.deskripsi.trim() || 'Rute indah dengan pesona bentang alam khas nusantara.',
      waktuTerbaik: '06:00 - 09:30 WIB',
      elevasiMaks: `${formData.elevasi || 400} mdpl`,
      permukaan: {
        aspal: formData.kategori === 'road' ? 95 : formData.kategori === 'gravel' ? 60 : 25,
        tanah: formData.kategori === 'mtb' ? 65 : formData.kategori === 'gravel' ? 30 : 5,
        makadam: 10,
      },
      checkpoints: [
        { km: 'KM 0', nama: 'Titik Awal Keberangkatan', desc: `Start kumpul di ${formData.lokasi}. Briefing jalur dan keselamatan.` },
        { km: `KM ${Math.round(Number(formData.jarak) * 0.5)}`, nama: 'Rest Point & Puncak Tanjakan', desc: 'Istirahat minum air dan menikmati pemandangan alam.' },
        { km: `KM ${formData.jarak}`, nama: 'Garis Akhir & Tempat Santap', desc: 'Finish gowes, sharing cerita petualangan.' },
      ]
    };

    onAddRoute(newRoute);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#183426]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-[#244B37]/15 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#244B37]/10 mb-6">
          <div>
            <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
              Controlled Component Form
            </span>
            <h2 className="text-2xl font-extrabold text-[#183426]">
              Tambah Rute Bersepeda Baru
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F6F4ED] hover:bg-[#244B37]/10 text-[#292D28] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            ✕
          </button>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center justify-between">
            <span>⚠️ {errorMsg}</span>
            <button onClick={() => setErrorMsg('')} className="font-bold ml-2">✕</button>
          </div>
        )}

        {/* Controlled Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
              Nama Rute *
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Contoh: Lingkar Lereng Merbabu via Selo"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Lokasi / Daerah *
              </label>
              <input
                type="text"
                name="lokasi"
                value={formData.lokasi}
                onChange={handleChange}
                placeholder="Contoh: Boyolali, Jawa Tengah"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Kategori Disiplin *
              </label>
              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              >
                <option value="gravel">Gravel & All-Road</option>
                <option value="road">Road Bike</option>
                <option value="mtb">Mountain Bike (MTB)</option>
                <option value="touring">Touring & Bikepacking</option>
                <option value="leisure">Santai / Leisure</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Jarak (km) *
              </label>
              <input
                type="number"
                name="jarak"
                value={formData.jarak}
                onChange={handleChange}
                placeholder="45"
                min="1"
                required
                className="w-full px-3 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Elevasi (+m)
              </label>
              <input
                type="number"
                name="elevasi"
                value={formData.elevasi}
                onChange={handleChange}
                placeholder="750"
                min="0"
                className="w-full px-3 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Tingkat Kesulitan
              </label>
              <select
                name="kesulitan"
                value={formData.kesulitan}
                onChange={handleChange}
                className="w-full px-2 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              >
                <option value="mudah">Mudah</option>
                <option value="menengah">Menengah</option>
                <option value="sulit">Menantang</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Estimasi Durasi
              </label>
              <input
                type="text"
                name="durasi"
                value={formData.durasi}
                onChange={handleChange}
                placeholder="Misal: 3.0 Jam"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Rekomendasi Perlengkapan
              </label>
              <input
                type="text"
                name="rekomendasi"
                value={formData.rekomendasi}
                onChange={handleChange}
                placeholder="Misal: Ban 40c / 2 Bidon Air"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>
          </div>

          {/* Photo Selection */}
          <div>
            <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1.5">
              Pilih atau Unggah Foto Sampul Jalur
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              <LocalPhotoTiles
                uploadedPhoto={uploadedPhoto}
                selected={formData.foto === uploadedPhoto}
                onUpload={(url) => {
                  setUploadedPhoto(url);
                  setFormData((prev) => ({ ...prev, foto: url }));
                }}
                onSelect={() => setFormData((prev) => ({ ...prev, foto: uploadedPhoto }))}
                onError={setPhotoError}
              />
              {SAMPLE_PHOTOS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, foto: p.url })}
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
                    formData.foto === p.url
                      ? 'border-[#244B37] ring-2 ring-[#244B37]/40 scale-105'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  title={p.label}
                >
                  <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {photoError && <p className="text-xs text-red-600 mt-1.5">{photoError}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
              Deskripsi Singkat Rute
            </label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              rows="3"
              placeholder="Ceritakan gambaran rute, pemandangan yang dilewati, dan tips penting bagi pesepeda..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#244B37]/10">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#292D28] bg-[#F6F4ED] hover:bg-[#244B37]/10 transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer"
            >
              + Tambah Rute ke Koleksi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
