import React, { useState } from 'react';

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  const {
    nama,
    kategoriLabel,
    kondisiLabel,
    harga,
    lokasi,
    foto,
    deskripsi,
    penjual,
    terverifikasi,
    telepon,
    galeri = [],
    spesifikasi = [],
  } = product;

  const [activePhoto, setActivePhoto] = useState(foto);
  const [buyerChecklist, setBuyerChecklist] = useState({
    nomorRangka: false,
    rem: false,
    rantai: false,
    frame: false,
  });

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(harga);

  // Road Bike Aluminium 2×11 Shimano 105 (prod-1) tetap memakai galeri lengkap.
  // Produk lain tidak menampilkan gambar kecil sama sekali.
  const isFullGalleryProduct = product.id === 'prod-1';
  const supportingPhotos = galeri.length > 0 ? galeri : ['/assets/images/camp2.jpg', '/assets/images/camp3.jpg'];
  const galleryList = isFullGalleryProduct ? [foto, ...supportingPhotos].slice(0, 5) : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#183426]/70 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6">
      <div className="bg-[#F6F4ED] rounded-3xl w-full max-w-5xl border border-[#244B37]/20 shadow-2xl overflow-hidden my-6">
        
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-[#F6F4ED]/95 backdrop-blur-md px-6 py-4 border-b border-[#244B37]/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#292D28]/70">
            <span>PedalRaya</span>
            <span>/</span>
            <span className="text-[#244B37] font-semibold">Jual Beli</span>
            <span>/</span>
            <span className="font-bold text-[#183426] line-clamp-1">{nama}</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-[#183426] bg-white border border-[#244B37]/20 hover:bg-[#244B37] hover:text-white transition-colors cursor-pointer"
          >
            ← Kembali ke Lapak
          </button>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Columns: Photos, Description, Specs, Buyer Checklist */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Photo & Gallery */}
              <div>
                <div className="relative bg-[#e8ede4] rounded-3xl aspect-[16/10] overflow-hidden border border-[#244B37]/10 flex items-center justify-center shadow-sm">
                  <img
                    src={activePhoto}
                    alt={nama}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/camp.jpg';
                    }}
                  />
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-lg bg-white text-[#183426] border border-[#244B37]/20 shadow-sm">
                    {kondisiLabel}
                  </span>
                  <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#244B37] text-white shadow-sm">
                    {kategoriLabel}
                  </span>
                </div>

                {/* Thumbnails (hanya untuk Road Bike Aluminium 2×11 Shimano 105) */}
                {isFullGalleryProduct && (
                <div className="grid grid-cols-5 gap-2.5 mt-3">
                  {galleryList.map((g, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhoto(g)}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
                        activePhoto === g ? 'border-[#244B37] ring-2 ring-[#244B37]/40 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={g} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                )}
              </div>

              {/* Description */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#244B37]/10 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#183426] mb-3">Deskripsi Barang</h2>
                <p className="text-sm text-[#292D28]/80 leading-relaxed mb-4 whitespace-pre-line">
                  {deskripsi}
                </p>
                <div className="p-3 bg-[#F6F4ED] rounded-xl text-xs text-[#244B37] font-semibold border border-[#244B37]/10">
                  💡 Tips: Disarankan melakukan transaksi Cash on Delivery (COD) dan cek fisik barang di titik ramah pesepeda PedalRaya.
                </div>
              </section>

              {/* Specifications */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#244B37]/10 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#183426] mb-3">Spesifikasi Detail</h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  {(spesifikasi.length > 0
                    ? spesifikasi
                    : [
                        { label: 'Kondisi Fisik', val: kondisiLabel },
                        { label: 'Kategori', val: kategoriLabel },
                        { label: 'Wilayah COD', val: lokasi },
                        { label: 'Penjual', val: penjual },
                      ]
                  ).map((item, idx) => (
                    <div key={idx} className="flex justify-between py-2.5 border-b border-[#244B37]/10 text-xs">
                      <dt className="text-[#292D28]/60">{item.label}</dt>
                      <dd className="font-bold text-[#183426] text-right">{item.val}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Interactive Buyer Checklist (Matching listing-detail.html) */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#244B37]/10 shadow-sm">
                <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
                  Checklist Pembeli
                </span>
                <h2 className="text-xl font-extrabold text-[#183426] mb-1">
                  Cek Barang Sebelum Bayar
                </h2>
                <p className="text-xs text-[#292D28]/70 mb-5">
                  Centang setiap butir saat Anda memeriksa barang langsung bersama penjual:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F4ED]/60 border border-[#244B37]/10 cursor-pointer hover:bg-[#F6F4ED]">
                    <input
                      type="checkbox"
                      checked={buyerChecklist.nomorRangka}
                      onChange={() => setBuyerChecklist({ ...buyerChecklist, nomorRangka: !buyerChecklist.nomorRangka })}
                      className="w-4 h-4 mt-0.5 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <div>
                      <strong className="text-xs font-bold text-[#183426] block">1. Nomor Rangka & Nota</strong>
                      <span className="text-[11px] text-[#292D28]/70">Cocokkan nomor di bawah bottom bracket dengan nota pembelian.</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F4ED]/60 border border-[#244B37]/10 cursor-pointer hover:bg-[#F6F4ED]">
                    <input
                      type="checkbox"
                      checked={buyerChecklist.rem}
                      onChange={() => setBuyerChecklist({ ...buyerChecklist, rem: !buyerChecklist.rem })}
                      className="w-4 h-4 mt-0.5 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <div>
                      <strong className="text-xs font-bold text-[#183426] block">2. Rem Depan & Belakang</strong>
                      <span className="text-[11px] text-[#292D28]/70">Tarik tuas rem, pastikan mencengkeram kuat dan pakem.</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F4ED]/60 border border-[#244B37]/10 cursor-pointer hover:bg-[#F6F4ED]">
                    <input
                      type="checkbox"
                      checked={buyerChecklist.rantai}
                      onChange={() => setBuyerChecklist({ ...buyerChecklist, rantai: !buyerChecklist.rantai })}
                      className="w-4 h-4 mt-0.5 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <div>
                      <strong className="text-xs font-bold text-[#183426] block">3. Rantai & Perpindahan Gigi</strong>
                      <span className="text-[11px] text-[#292D28]/70">Pindahkan semua gigi dari terberat ke teringan tanpa macet.</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F4ED]/60 border border-[#244B37]/10 cursor-pointer hover:bg-[#F6F4ED]">
                    <input
                      type="checkbox"
                      checked={buyerChecklist.frame}
                      onChange={() => setBuyerChecklist({ ...buyerChecklist, frame: !buyerChecklist.frame })}
                      className="w-4 h-4 mt-0.5 rounded text-[#244B37] accent-[#244B37]"
                    />
                    <div>
                      <strong className="text-xs font-bold text-[#183426] block">4. Frame & Sambungan Las</strong>
                      <span className="text-[11px] text-[#292D28]/70">Periksa bebas retak, peyot, atau karat struktural.</span>
                    </div>
                  </label>
                </div>
              </section>

            </div>

            {/* Right Column: Price Box, Seller Profile & WhatsApp Action */}
            <div className="space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#244B37]/15 shadow-sm space-y-5">
                <div>
                  <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
                    Harga Penawaran
                  </span>
                  <strong className="text-3xl font-extrabold text-[#183426] block">
                    {formattedPrice}
                  </strong>
                  <span className="text-xs text-[#292D28]/60 mt-1 block">
                    📍 Lokasi: {lokasi}
                  </span>
                </div>

                <div className="p-4 bg-[#F6F4ED] rounded-2xl border border-[#244B37]/10 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#292D28]/70">Nama Penjual:</span>
                    <strong className="text-[#183426]">{penjual}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#292D28]/70">Status Akun:</span>
                    <span className="font-bold text-[#244B37]">
                      {terverifikasi ? '✓ Terverifikasi PedalRaya' : 'Anggota Komunitas'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#292D28]/70">Nomor WhatsApp:</span>
                    <span className="font-mono text-[#183426] font-bold">{telepon || '0812-xxxx-xxxx'}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${(telepon || '6281234567890').replace(/[^0-9]/g, '')}?text=Halo%20saya%20tertarik%20dengan%20iklan%20di%20PedalRaya:%20${encodeURIComponent(nama)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-[#244B37] hover:bg-[#183426] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer text-center"
                >
                  <span>💬</span>
                  <span>Hubungi Penjual via WhatsApp</span>
                </a>

                <div className="text-[11px] text-[#292D28]/60 leading-relaxed border-t border-[#244B37]/10 pt-4">
                  🛡️ <strong>Keamanan Transaksi:</strong> Jangan pernah mentransfer uang muka sebelum melihat dan memeriksa barang langsung bersama penjual.
                </div>
              </div>

              {/* Safety COD Box */}
              <div className="bg-[#244B37] text-white rounded-3xl p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold text-[#D8C8A6] uppercase tracking-wider block">
                  Rekomendasi Titik COD
                </span>
                <p className="text-xs text-white/90 leading-relaxed">
                  Gunakan direktori <strong>Titik Pesepeda (Cycling Spots)</strong> PedalRaya sebagai lokasi pertemuan yang aman, ramai, dan memiliki fasilitas pompa serta teknisi jika butuh setel baut.
                </p>
              </div>

            </div>

          </div>

          <div className="pt-6 border-t border-[#244B37]/10 flex items-center justify-between">
            <span className="text-xs text-[#78916A]">
              Lapak Komunitas PedalRaya · Transaksi Langsung Aman
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors cursor-pointer shadow-sm"
            >
              Kembali ke Lapak
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
