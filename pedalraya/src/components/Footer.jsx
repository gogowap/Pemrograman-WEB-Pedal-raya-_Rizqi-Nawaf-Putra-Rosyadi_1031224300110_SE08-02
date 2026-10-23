function Footer({ namaAplikasi }) {
  return (
    <footer className="mt-20 border-t border-forest bg-forest-dark pb-10 pt-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 {namaAplikasi} — Eksplorasi Rute Bersepeda Alam Indonesia</p>
        <p>Dibangun dengan React + Vite</p>
      </div>
    </footer>
  )
}

export default Footer
