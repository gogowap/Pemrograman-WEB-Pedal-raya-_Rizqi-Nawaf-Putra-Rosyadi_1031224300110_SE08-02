function FilterKategori({ daftarKategori, kategoriAktif, onPilih, jumlahPerKategori, totalRute }) {
  const pilihan = [{ key: 'semua', nama: 'Semua Rute' }, ...daftarKategori]

  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      {pilihan.map((kategori) => {
        const aktif = kategori.key === kategoriAktif
        const jumlah = kategori.key === 'semua' ? totalRute : jumlahPerKategori[kategori.key] ?? 0

        return (
          <button
            key={kategori.key}
            type="button"
            onClick={() => onPilih(kategori.key)}
            className={`cursor-pointer whitespace-nowrap rounded-xl border px-4 py-2 text-xs font-bold transition-colors ${
              aktif
                ? 'border-forest bg-forest text-white'
                : 'border-forest/20 bg-white text-charcoal hover:border-forest'
            }`}
          >
            {kategori.nama} ({jumlah})
          </button>
        )
      })}
    </div>
  )
}

export default FilterKategori
