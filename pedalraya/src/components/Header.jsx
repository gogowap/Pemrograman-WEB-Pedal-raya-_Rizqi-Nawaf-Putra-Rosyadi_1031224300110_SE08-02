function Header({ namaAplikasi }) {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-offwhite/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a href="#atas" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-white transition-transform group-hover:scale-105">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18.5" cy="17.5" r="3.5" />
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="15" cy="5" r="1" />
              <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
            </svg>
          </span>
          <span className="text-xl font-extrabold tracking-tight text-forest-dark">
            {namaAplikasi.awal}
            <span className="text-sage">{namaAplikasi.akhir}</span>
          </span>
        </a>

        <nav className="flex items-center gap-5 text-sm font-semibold text-charcoal/80 sm:gap-7">
          <a href="#rute" className="whitespace-nowrap transition-colors hover:text-forest">
            Daftar Rute
          </a>
          <a
            href="#tambah"
            className="whitespace-nowrap rounded-xl bg-forest px-4 py-2.5 text-white shadow-sm transition-all hover:bg-forest-dark"
          >
            Tambah Rute
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
