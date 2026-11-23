import React, { useState, useEffect } from 'react';
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

export default function RouteForm({ onAddRoute, onUpdateRoute, initialData, onClose }) {
  const isEditMode = Boolean(initialData);

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

  useEffect(() => {
    if (initialData) {
      setFormData({
        nama: initialData.nama || '',
        kategori: initialData.kategori || 'gravel',
        lokasi: initialData.lokasi || '',
        jarak: initialData.jarak !== undefined ? String(initialData.jarak) : '',
        elevasi: initialData.elevasi !== undefined ? String(initialData.elevasi) : '',
        durasi: initialData.durasi || '',
        kesulitan: initialData.kesulitan || 'menengah',
        kondisi: initialData.kondisi || 'Aspal Halus & Tanah Padat',
        rekomendasi: initialData.rekomendasi || 'Rekomendasi Ban: 38-45c',
        foto: initialData.foto || SAMPLE_PHOTOS[0].url,
        deskripsi: initialData.deskripsi || '',
      });
    }
  }, [initialData]);

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
    if (formData.nama.trim().length < 3) {
      setErrorMsg('Nama rute minimal 3 karakter (aturan validasi DTO).');
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

    if (isEditMode) {
      const updatePayload = {
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
      };

      onUpdateRoute(initialData.id, updatePayload);
    } else {
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
        ],
        terverifikasi: false,
      };

      onAddRoute(newRoute);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#183426]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-[#244B37]/15 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#244B37]/10 mb-6">
          <div>
            <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
              {isEditMode ? 'REST API: HTTP PATCH' : 'REST API: HTTP POST'}
            </span>
            <h2 className="text-2xl font-extrabold text-[#183426]">
              {isEditMode ? 'Ubah / Edit Rute Bersepeda' : 'Tambah Rute Bersepeda Baru'}
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
              placeholder="Contoh: Lingkar Jalur Pinus Mangunan"
              className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Kategori Rute *
              </label>
              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              >
                <option value="road">Road Bike</option>
                <option value="gravel">Gravel & All-Road</option>
                <option value="mtb">Mountain Bike (MTB)</option>
                <option value="touring">Touring & Bikepacking</option>
                <option value="leisure">Santai / Leisure</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Tingkat Kesulitan *
              </label>
              <select
                name="kesulitan"
                value={formData.kesulitan}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              >
                <option value="mudah">Mudah (Pemula / Santai)</option>
                <option value="menengah">Menengah</option>
                <option value="sulit">Menantang / Mahir</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
              Lokasi / Daerah *
            </label>
            <input
              type="text"
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              placeholder="Contoh: Dlingo, Bantul, DI Yogyakarta"
              className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Jarak (km) *
              </label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                name="jarak"
                value={formData.jarak}
                onChange={handleChange}
                placeholder="Misal: 42.5"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Elevasi (meter)
              </label>
              <input
                type="number"
                min="0"
                name="elevasi"
                value={formData.elevasi}
                onChange={handleChange}
                placeholder="Misal: 650"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Estimasi Durasi
              </label>
              <input
                type="text"
                name="durasi"
                value={formData.durasi}
                onChange={handleChange}
                placeholder="Misal: 2.5 Jam"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Kondisi Permukaan Jalan
              </label>
              <input
                type="text"
                name="kondisi"
                value={formData.kondisi}
                onChange={handleChange}
                placeholder="Misal: Aspal Halus & Tanah Padat"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Rekomendasi Ban / Gear
              </label>
              <input
                type="text"
                name="rekomendasi"
                value={formData.rekomendasi}
                onChange={handleChange}
                placeholder="Misal: Rekomendasi Ban 38-45c"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-2">
              Pilih Foto Ilustrasi Rute
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {SAMPLE_PHOTOS.map((p, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setFormData((prev) => ({ ...prev, foto: p.url }))}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    formData.foto === p.url
                      ? 'border-[#244B37] ring-2 ring-[#244B37]/30 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  title={p.label}
                >
                  <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
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
              {isEditMode ? '✓ Simpan Perubahan Rute' : '+ Tambah Rute ke Koleksi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
