function KartuRute({ rute, onHapus }) {
  const { nama, lokasi, permukaan, tipe, tingkat, deskripsi, jarak, elevasi, durasi, catatan, gambar } = rute

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e8ede4]">
        <img
          src={gambar}
          alt={nama}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-lg bg-forest-dark/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {tipe}
        </div>
        <div className="absolute right-4 top-4 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-forest">
          {tingkat}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-x-2 text-xs font-semibold text-sage">
            <span>{lokasi}</span>
            {permukaan && (
              <>
                <span aria-hidden="true">·</span>
                <span>{permukaan}</span>
              </>
            )}
          </div>
          <h3 className="mb-2 text-xl font-bold text-forest-dark">{nama}</h3>
          {deskripsi && <p className="mb-4 line-clamp-3 text-sm text-charcoal/75">{deskripsi}</p>}
        </div>

        <div>
          <div className="mb-4 grid grid-cols-3 border-y border-forest/10 py-3 text-center text-xs">
            <div>
              <span className="block text-sage">Jarak</span>
              <strong className="text-sm font-bold tabular-nums text-forest-dark">{jarak} km</strong>
            </div>
            <div className="border-x border-forest/10">
              <span className="block text-sage">Elevasi</span>
              <strong className="text-sm font-bold tabular-nums text-forest-dark">
                {elevasi.toLocaleString('id-ID')} m
              </strong>
            </div>
            <div>
              <span className="block text-sage">Durasi</span>
              <strong className="text-sm font-bold tabular-nums text-forest-dark">{durasi} Jam</strong>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-sage">{catatan}</span>
            <button
              type="button"
              onClick={() => onHapus(rute.id)}
              className="cursor-pointer rounded-xl border border-red-200 px-4 py-2 text-xs font-bold text-red-700 transition-colors hover:bg-red-50"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default KartuRute
