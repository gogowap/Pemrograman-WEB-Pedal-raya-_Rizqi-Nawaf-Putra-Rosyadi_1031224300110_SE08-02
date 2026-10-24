import React, { useRef } from 'react';

// Dua tile untuk dipasang di dalam grid pilihan foto:
// 1) tombol "Unggah dari perangkat", 2) pratinjau foto yang sudah diunggah.
export default function LocalPhotoTiles({ uploadedPhoto, selected, onUpload, onSelect, onError }) {
  const inputRef = useRef(null);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // supaya file yang sama bisa dipilih ulang
    if (!file) return;
    try {
      const dataUrl = await readImageFile(file);
      onError('');
      onUpload(dataUrl);
    } catch (err) {
      onError(err.message || 'Gagal membaca gambar.');
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleFile}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        title="Unggah foto dari perangkat"
        className="rounded-xl aspect-[4/3] border-2 border-dashed border-[#244B37]/40 bg-[#F6F4ED] text-[#244B37] hover:bg-[#244B37]/5 flex flex-col items-center justify-center gap-0.5 p-1 transition-colors cursor-pointer"
      >
        <span className="text-lg leading-none">📁</span>
        <span className="text-[10px] font-bold leading-tight text-center">Unggah foto</span>
      </button>
      {uploadedPhoto && (
        <button
          type="button"
          onClick={onSelect}
          title="Foto unggahan kamu"
          className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
            selected
              ? 'border-[#244B37] ring-2 ring-[#244B37]/40 scale-105'
              : 'border-transparent opacity-70 hover:opacity-100'
          }`}
        >
          <img src={uploadedPhoto} alt="Foto unggahan" className="w-full h-full object-cover" />
          <span className="absolute bottom-0 inset-x-0 bg-[#183426]/80 text-white text-[9px] font-bold py-0.5 text-center">
            Foto kamu
          </span>
        </button>
      )}
    </>
  );
}
