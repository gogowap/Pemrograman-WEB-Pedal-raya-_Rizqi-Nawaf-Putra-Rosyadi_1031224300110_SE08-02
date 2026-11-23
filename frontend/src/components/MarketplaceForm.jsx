import React, { useState } from 'react';
import LocalPhotoTiles from './LocalPhotoTiles';

const PRODUCT_SAMPLE_PHOTOS = [
  { label: 'Road Bike Shimano 105', url: '/assets/images/Road Bike Aluminium 2×11 Shimano 105 (Size 52).jpg' },
  { label: 'Gravel Bike GRX', url: '/assets/images/Gravel Bike Fork Karbon, Groupset GRX 1×11.jpg' },
  { label: 'MTB Hardtail Deore', url: '/assets/images/MTB Hardtail Fork Udara.jpg' },
  { label: 'Sepeda Lipat Alloy', url: '/assets/images/Sepeda LipatFrame Alloy.jpg' },
  { label: 'Groupset Shimano 105', url: '/assets/images/Groupset Shimano 105 R7000 2×11 (Bekas Lengkap).jpg' },
  { label: 'Wheelset Karbon 700c', url: '/assets/images/Wheelset Karbon 700c Tubeless Ready, Hub 24T.jpg' },
  { label: 'Helm MIPS Road', url: '/assets/images/Helm Road Bike Ringan dengan Proteksi MIPS.webp' },
  { label: 'Jersey Gowes Dry-Fit', url: '/assets/images/Jersey Gowes Lengan Pendek Bahan Dry-Fit.jpg' },
  { label: 'Bibshort Padding', url: '/assets/images/Bibshort Padding Tebal untuk Jarak Jauh.webp' },
  { label: 'Lampu Depan 1000Lm', url: '/assets/images/Lampu Depan 1.000 Lumen USB-C Rechargeable.webp' },
  { label: 'Set Tas Bikepacking', url: '/assets/images/Set Tas Bikepacking Frame Bag, Handlebar Roll.webp' },
  { label: 'Sepatu Cleat SPD', url: '/assets/images/Sepatu Cleat SPD Size 42 (Bonus Cleat).webp' },
];

export default function MarketplaceForm({ onAddProduct, onClose }) {
  const [uploadedPhoto, setUploadedPhoto] = useState('');
  const [photoError, setPhotoError] = useState('');
  const [formData, setFormData] = useState({
    nama: '',
    kategori: 'sepeda',
    kondisi: 'bekas',
    harga: '',
    lokasi: '',
    telepon: '',
    foto: PRODUCT_SAMPLE_PHOTOS[0].url,
    deskripsi: '',
    penjual: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

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
      setErrorMsg('Judul barang wajib diisi.');
      return;
    }
    if (!formData.harga || Number(formData.harga) <= 0) {
      setErrorMsg('Harga harus berupa angka lebih dari 0.');
      return;
    }
    if (!formData.lokasi.trim()) {
      setErrorMsg('Lokasi / kota barang wajib diisi.');
      return;
    }

    const catLabels = {
      sepeda: 'Sepeda Utuh',
      komponen: 'Komponen & Part',
      apparel: 'Apparel & Pakaian',
      aksesori: 'Aksesori & Gear',
    };

    const newProduct = {
      id: `prod-${Date.now()}`,
      nama: formData.nama.trim(),
      kategori: formData.kategori,
      kategoriLabel: catLabels[formData.kategori] || 'Produk',
      kondisi: formData.kondisi,
      kondisiLabel: formData.kondisi === 'baru' ? 'Baru' : 'Bekas',
      harga: Number(formData.harga),
      lokasi: formData.lokasi.trim(),
      telepon: formData.telepon.trim() || '081234567890',
      foto: formData.foto,
      deskripsi: formData.deskripsi.trim() || 'Barang berkualitas dari anggota komunitas pesepeda PedalRaya.',
      penjual: formData.penjual.trim() || 'Pesepeda PedalRaya',
      terverifikasi: true,
      galeri: [formData.foto, '/assets/images/camp.jpg'],
      spesifikasi: [
        { label: 'Kondisi', val: formData.kondisi === 'baru' ? '100% Baru' : 'Bekas, terawat' },
        { label: 'Kategori', val: catLabels[formData.kategori] },
        { label: 'Lokasi COD', val: formData.lokasi.trim() },
        { label: 'Kontak WhatsApp', val: formData.telepon.trim() || 'Tersedia' },
      ],
    };

    onAddProduct(newProduct);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#183426]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-[#244B37]/15 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#244B37]/10 mb-6">
          <div>
            <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
              Controlled Component Form Produk
            </span>
            <h2 className="text-2xl font-extrabold text-[#183426]">
              Pasang Iklan Barang Jual Beli
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
              Judul Barang / Produk *
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Contoh: Road Bike Polygon Strattos S5 Disc (Size 50)"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Kategori Produk *
              </label>
              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              >
                <option value="sepeda">Sepeda Utuh</option>
                <option value="komponen">Komponen & Sparepart</option>
                <option value="apparel">Apparel & Pakaian</option>
                <option value="aksesori">Aksesori & Perlengkapan</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Kondisi Barang *
              </label>
              <div className="flex gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold">
                  <input
                    type="radio"
                    name="kondisi"
                    value="bekas"
                    checked={formData.kondisi === 'bekas'}
                    onChange={handleChange}
                    className="accent-[#244B37]"
                  />
                  <span>Bekas (Second)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold">
                  <input
                    type="radio"
                    name="kondisi"
                    value="baru"
                    checked={formData.kondisi === 'baru'}
                    onChange={handleChange}
                    className="accent-[#244B37]"
                  />
                  <span>Baru (New Gress)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Harga Jual (Rp) *
              </label>
              <input
                type="number"
                name="harga"
                value={formData.harga}
                onChange={handleChange}
                placeholder="Misal: 7500000"
                min="1000"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Lokasi / Kota Penjual *
              </label>
              <input
                type="text"
                name="lokasi"
                value={formData.lokasi}
                onChange={handleChange}
                placeholder="Misal: Sleman, DI Yogyakarta"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Nama Penjual
              </label>
              <input
                type="text"
                name="penjual"
                value={formData.penjual}
                onChange={handleChange}
                placeholder="Nama Anda / Toko Anda"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Nomor WhatsApp Penjual *
              </label>
              <input
                type="tel"
                name="telepon"
                value={formData.telepon}
                onChange={handleChange}
                placeholder="Contoh: 081234567890"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>
          </div>

          {/* Photo Selector */}
          <div>
            <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1.5">
              Pilih atau Unggah Foto Sampul Produk
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
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
              {PRODUCT_SAMPLE_PHOTOS.map((p, idx) => (
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
              Deskripsi Barang & Kelengkapan
            </label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              rows="3"
              placeholder="Ceritakan riwayat pemakaian, kelengkapan nota/dus, minus (jika ada), dan kesediaan COD..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            ></textarea>
          </div>

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
              + Pasang Iklan Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
