function RingkasanRute({ totalRute, totalJarak, totalElevasi }) {
  const statistik = [
    { label: 'Total Rute', nilai: totalRute, satuan: 'rute' },
    { label: 'Total Jarak', nilai: totalJarak.toLocaleString('id-ID'), satuan: 'km' },
    { label: 'Total Elevasi', nilai: totalElevasi.toLocaleString('id-ID'), satuan: 'm' },
  ]

  return (
    <section
      aria-label="Ringkasan rute"
      className="mb-10 grid grid-cols-3 divide-x divide-forest/10 rounded-2xl border border-forest/10 bg-white py-5 shadow-sm"
    >
      {statistik.map((item) => (
        <div key={item.label} className="px-4 text-center">
          <span className="block text-xs font-semibold text-sage">{item.label}</span>
          <strong className="text-2xl font-extrabold tabular-nums text-forest-dark sm:text-3xl">
            {item.nilai}
          </strong>
          <span className="ml-1 text-xs text-charcoal/60">{item.satuan}</span>
        </div>
      ))}
    </section>
  )
}

export default RingkasanRute
