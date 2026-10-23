import KartuRute from './KartuRute'

function DaftarRute({ daftarRute, totalSemuaRute, onHapus }) {
  // Conditional rendering 1: seluruh data kosong
  if (totalSemuaRute === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-forest/30 bg-white px-6 py-16 text-center">
        <p className="text-lg font-bold text-forest-dark">Belum ada data rute</p>
        <p className="mt-1 text-sm text-charcoal/70">
          Tambahkan rute pertama Anda lewat formulir di bawah.
        </p>
      </div>
    )
  }

  // Conditional rendering 2: data ada, tapi tidak ada yang cocok dengan filter
  if (daftarRute.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-forest/30 bg-white px-6 py-16 text-center">
        <p className="text-base font-semibold text-forest-dark">
          Belum ada rute pada kategori ini.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {daftarRute.map((rute) => (
        <KartuRute key={rute.id} rute={rute} onHapus={onHapus} />
      ))}
    </div>
  )
}

export default DaftarRute
