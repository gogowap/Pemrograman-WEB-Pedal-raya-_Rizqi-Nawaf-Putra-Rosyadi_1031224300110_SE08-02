import React, { useState } from 'react';
import Header from './components/Header';
import RouteStats from './components/RouteStats';
import RouteForm from './components/RouteForm';
import RouteList from './components/RouteList';
import RouteCard from './components/RouteCard';
import RouteDetailModal from './components/RouteDetailModal';
import MarketplaceStats from './components/MarketplaceStats';
import MarketplaceForm from './components/MarketplaceForm';
import MarketplaceList from './components/MarketplaceList';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CommunitySection from './components/CommunitySection';
import EventsSection from './components/EventsSection';
import SpotsSection from './components/SpotsSection';
import SafetySection from './components/SafetySection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { INITIAL_ROUTES, INITIAL_PRODUCTS } from './data/mockData';

export default function App() {
  // ==========================================
  // STATE MANAGEMENT (TUGAS 6 REACT DASAR)
  // ==========================================
  // 5.a: Simpan daftar item sebagai state (array) di App.jsx
  const [routes, setRoutes] = useState(INITIAL_ROUTES);
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  // Tab navigation state
  const [activeTab, setActiveTab] = useState('beranda');

  // Detail Modal states
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Form Modal states
  const [isAddRouteOpen, setIsAddRouteOpen] = useState(false);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  // Favorites state
  const [favoriteRoutes, setFavoriteRoutes] = useState(['route-1', 'route-2']);
  const [favoriteProducts, setFavoriteProducts] = useState(['prod-1', 'prod-2']);

  // Global toast
  const [toastMessage, setToastMessage] = useState('');

  // Home Quick search state
  const [homeSearch, setHomeSearch] = useState({
    lokasi: '',
    kategori: '',
    kesulitan: '',
  });

  // ==========================================
  // HANDLERS UNTUK ENTITAS PRODUK (MARKETPLACE)
  // ==========================================
  // 5.b: Form controlled component tambah item produk baru
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
    setIsAddProductOpen(false);
    setToastMessage(`Iklan "${newProduct.nama}" berhasil dipasang di Lapak!`);
    setTimeout(() => setToastMessage(''), 5000);
  };

  // Hapus item produk dari state (memungkinkan pengujian conditional rendering data kosong)
  const handleDeleteProduct = (productId) => {
    const prod = products.find((p) => p.id === productId);
    if (window.confirm(`Hapus barang "${prod?.nama || 'ini'}" dari lapak?`)) {
      setProducts((prev) => prev.filter((p) => p.id !== productId));
      setToastMessage('Produk telah dihapus dari lapak.');
      setTimeout(() => setToastMessage(''), 4000);
    }
  };

  const handleResetProducts = () => {
    setProducts(INITIAL_PRODUCTS);
    setToastMessage('Data produk lapak berhasil dipulihkan.');
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleToggleFavoriteProduct = (productId) => {
    setFavoriteProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // ==========================================
  // HANDLERS UNTUK ENTITAS RUTE
  // ==========================================
  const handleAddRoute = (newRoute) => {
    setRoutes((prev) => [newRoute, ...prev]);
    setIsAddRouteOpen(false);
    setToastMessage(`Rute "${newRoute.nama}" berhasil ditambahkan ke koleksi!`);
    setTimeout(() => setToastMessage(''), 5000);
  };

  const handleDeleteRoute = (routeId) => {
    const rute = routes.find((r) => r.id === routeId);
    if (window.confirm(`Hapus rute "${rute?.nama || 'ini'}" dari daftar koleksi?`)) {
      setRoutes((prev) => prev.filter((r) => r.id !== routeId));
      setToastMessage('Rute telah dihapus dari koleksi.');
      setTimeout(() => setToastMessage(''), 4000);
    }
  };

  const handleResetRoutes = () => {
    setRoutes(INITIAL_ROUTES);
    setToastMessage('Data rute berhasil dipulihkan.');
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleToggleFavoriteRoute = (routeId) => {
    setFavoriteRoutes((prev) =>
      prev.includes(routeId) ? prev.filter((id) => id !== routeId) : [...prev, routeId]
    );
  };

  const handleHomeSearchSubmit = (e) => {
    e.preventDefault();
    setActiveTab('routes');
  };

  return (
    <div className="bg-[#F6F4ED] text-[#292D28] antialiased min-h-screen flex flex-col selection:bg-[#78916A]/20 selection:text-[#183426]">
      
      {/* Komponen Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAddRoute={() => setIsAddRouteOpen(true)}
        onOpenAddProduct={() => setIsAddProductOpen(true)}
      />

      {/* Global Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#183426] text-white px-5 py-3 rounded-2xl shadow-xl text-xs font-semibold flex items-center gap-3 border border-white/20 animate-fade-in">
          <span>🚴‍♂️</span>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage('')}
            className="text-white/60 hover:text-white font-bold ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">

        {/* ========================================================
            TAB 1: BERANDA
            ======================================================== */}
        {activeTab === 'beranda' && (
          <div>
            {/* Hero Section */}
            <section className="relative pt-6 pb-16 lg:py-20 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#78916A] uppercase mb-4">
                      <span>Ekspedisi Bersepeda Indonesia</span>
                      <span aria-hidden="true">·</span>
                      <span>Komunitas Terbuka</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] font-extrabold text-[#183426] tracking-tight mb-6">
                      Temukan Jalan Baru. Rasakan Petualangan.
                    </h1>

                    <p className="text-lg text-[#292D28]/80 leading-relaxed mb-8 max-w-xl">
                      PedalRaya adalah platform bagi para pesepeda untuk menemukan rute baru, terhubung dengan komunitas, mencari perlengkapan gowes di lapak jual beli, serta mendapatkan panduan keselamatan.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-10">
                      <button
                        onClick={() => setActiveTab('routes')}
                        className="px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
                      >
                        Jelajahi Rute ({routes.length})
                      </button>
                      <button
                        onClick={() => setActiveTab('marketplace')}
                        className="px-6 py-3.5 rounded-xl text-base font-bold text-[#244B37] bg-white border border-[#244B37]/20 hover:bg-[#78916A]/10 transition-all whitespace-nowrap cursor-pointer"
                      >
                        Lapak Jual Beli ({products.length})
                      </button>
                    </div>

                    {/* Unboxed Metrics Strip */}
                    <div className="pt-6 border-t border-[#244B37]/15 flex flex-wrap items-center gap-6 text-sm text-[#292D28]/70">
                      <div>
                        <span className="font-bold text-[#183426] text-lg tabular-nums">
                          {routes.reduce((acc, r) => acc + (Number(r.jarak) || 0), 0)}+ km
                        </span>
                        <span className="block text-xs text-[#78916A]">Total Jarak Rute</span>
                      </div>
                      <span className="text-[#244B37]/20 text-xl font-light">|</span>
                      <div>
                        <span className="font-bold text-[#183426] text-lg tabular-nums">
                          {products.length}
                        </span>
                        <span className="block text-xs text-[#78916A]">Barang di Lapak</span>
                      </div>
                      <span className="text-[#244B37]/20 text-xl font-light">|</span>
                      <div>
                        <span className="font-bold text-[#183426] text-lg tabular-nums">54</span>
                        <span className="block text-xs text-[#78916A]">Komunitas Gowes</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hero Visual Asset */}
                  <div className="lg:col-span-6 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#244B37]/15 aspect-[16/10] bg-[#e8ede4]">
                      <img
                        src="/assets/images/pexels-run-ffwpu-5687405.jpg"
                        alt="Pesepeda melintasi jalan pegunungan saat matahari terbit"
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#183426]/75 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#D8C8A6] mb-1">
                          <span>Rute Pilihan Minggu Ini</span>
                          <span aria-hidden="true">·</span>
                          <span>Tanjakan Kaldera Rinjani</span>
                        </div>
                        <p className="text-sm font-medium text-white/90">
                          Jalan aspal mulus dengan elevasi 1.150 m dan panorama danau vulkanik spektakuler.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Quick Search Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-16 relative z-20">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#244B37]/10">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#183426]">Pencarian Cepat Rute</h2>
                    <p className="text-xs text-[#292D28]/70">
                      Temukan jalur bersepeda yang sesuai dengan gaya dan kesiapan Anda
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#78916A] hidden sm:inline-block">
                    Pencarian Interaktif React State
                  </span>
                </div>

                <form onSubmit={handleHomeSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1.5">
                      Lokasi / Daerah
                    </label>
                    <input
                      type="text"
                      value={homeSearch.lokasi}
                      onChange={(e) => setHomeSearch({ ...homeSearch, lokasi: e.target.value })}
                      placeholder="Misal: Yogyakarta, Lombok, Bogor..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm text-[#292D28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1.5">
                      Jenis Sepeda
                    </label>
                    <select
                      value={homeSearch.kategori}
                      onChange={(e) => setHomeSearch({ ...homeSearch, kategori: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm text-[#292D28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
                    >
                      <option value="">Semua Kategori</option>
                      <option value="road">Road Bike</option>
                      <option value="gravel">Gravel</option>
                      <option value="mtb">Mountain Bike (MTB)</option>
                      <option value="touring">Touring & Bikepacking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#292D28] uppercase tracking-wider mb-1.5">
                      Tingkat Kesulitan
                    </label>
                    <select
                      value={homeSearch.kesulitan}
                      onChange={(e) => setHomeSearch({ ...homeSearch, kesulitan: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm text-[#292D28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
                    >
                      <option value="">Semua Tingkat</option>
                      <option value="mudah">Mudah (Pemula)</option>
                      <option value="menengah">Menengah (Intermediate)</option>
                      <option value="sulit">Menantang (Expert)</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-6 rounded-xl font-bold text-sm text-white bg-[#244B37] hover:bg-[#183426] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <span>Temukan Rute ({routes.length})</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* Featured Routes Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
                    <span>Kurasi Pilihan</span>
                    <span aria-hidden="true">·</span>
                    <span>Terverifikasi Komunitas</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-[#183426] tracking-tight">
                    Rute Pilihan Petualangan
                  </h2>
                  <p className="text-sm text-[#292D28]/70 mt-1">
                    Jalur dengan pemandangan terbaik, kondisi jalan jelas, dan titik istirahat aman.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('routes')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#244B37] hover:text-[#183426] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Lihat Semua {routes.length} Rute</span>
                  <span>→</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {routes.slice(0, 3).map((route) => (
                  <RouteCard
                    key={route.id}
                    route={route}
                    onSelectRoute={setSelectedRoute}
                    onDeleteRoute={handleDeleteRoute}
                    isFavorite={favoriteRoutes.includes(route.id)}
                    onToggleFavorite={handleToggleFavoriteRoute}
                  />
                ))}
              </div>
            </section>

            {/* Marketplace Highlights Section (From GitHub Update) */}
            <section className="bg-white py-16 border-y border-[#244B37]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
                      <span>Lapak Komunitas Terbaru</span>
                      <span aria-hidden="true">·</span>
                      <span>Jual Beli Sepeda & Gear</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-[#183426] tracking-tight">
                      Lapak Jual Beli Terverifikasi
                    </h2>
                    <p className="text-sm text-[#292D28]/70 mt-1">
                      Temukan sepeda bekas mulus, komponen groupset, helm, dan perlengkapan dari sesama rekan pesepeda.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('marketplace')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#244B37] hover:text-[#183426] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Buka Lapak ({products.length} Barang)</span>
                    <span>→</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.slice(0, 4).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelectProduct={setSelectedProduct}
                      onDeleteProduct={handleDeleteProduct}
                      isFavorite={favoriteProducts.includes(product.id)}
                      onToggleFavorite={handleToggleFavoriteProduct}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Cycling Discipline Categories */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
                    Ragam Disiplin
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#183426]">
                    Pilih Gaya Bersepeda Favorit Anda
                  </h2>
                  <p className="text-xs sm:text-sm text-[#292D28]/70 mt-1">
                    Setiap disiplin menawarkan sensasi kebebasan dan tantangan yang unik.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { label: 'Road Bike', desc: 'Aspal mulus & kecepatan peloton', cat: 'road', icon: '🚴' },
                    { label: 'Gravel', desc: 'Tanah padat & petualangan alam', cat: 'gravel', icon: '🌲' },
                    { label: 'MTB', desc: 'Singletrack rimba & tantangan teknikal', cat: 'mtb', icon: '⛰️' },
                    { label: 'Touring', desc: 'Bikepacking jarak jauh & lintas pulau', cat: 'touring', icon: '🎒' },
                    { label: 'Leisure', desc: 'Gowes santai kafe & rekreasi kota', cat: 'leisure', icon: '☕' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveTab('routes')}
                      className="bg-white rounded-2xl p-5 border border-[#244B37]/10 hover:border-[#244B37] transition-all cursor-pointer group shadow-sm"
                    >
                      <span className="text-3xl mb-3 block">{item.icon}</span>
                      <h3 className="text-base font-bold text-[#183426] group-hover:text-[#244B37] mb-1">
                        {item.label}
                      </h3>
                      <p className="text-[11px] text-[#292D28]/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ========================================================
            TAB 2: JUAL BELI / MARKETPLACE (KATALOG PRODUK TUGAS 6)
            ======================================================== */}
        {activeTab === 'marketplace' && (
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-[#292D28]/60 mb-6">
                <button
                  onClick={() => setActiveTab('beranda')}
                  className="hover:text-[#244B37] cursor-pointer"
                >
                  Beranda
                </button>
                <span>/</span>
                <span className="text-[#183426] font-semibold">Jual Beli</span>
              </nav>

              {/* Page Title */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
                    <span>Lapak Komunitas</span>
                    <span aria-hidden="true">·</span>
                    <span>Jual Beli Perlengkapan Gowes</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-[#183426] tracking-tight mb-3">
                    Lapak Jual Beli PedalRaya
                  </h1>
                  <p className="text-base text-[#292D28]/80 max-w-2xl leading-relaxed">
                    Cari sepeda, komponen, apparel, dan aksesori dari sesama pesepeda. Transaksi langsung dengan penjual, disarankan bertemu di titik ramah pesepeda.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddProductOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm whitespace-nowrap shrink-0 self-start lg:self-auto cursor-pointer"
                >
                  + Pasang Iklan Gratis
                </button>
              </div>

              {/* KOMPONEN RINGKASAN JUMLAH DATA: MarketplaceStats */}
              <MarketplaceStats
                products={products}
                onOpenAddModal={() => setIsAddProductOpen(true)}
                onResetData={handleResetProducts}
              />

              {/* KOMPONEN DAFTAR DATA: MarketplaceList (uses ProductCard & conditional rendering) */}
              <MarketplaceList
                products={products}
                onSelectProduct={setSelectedProduct}
                onDeleteProduct={handleDeleteProduct}
                onOpenAddModal={() => setIsAddProductOpen(true)}
                onResetData={handleResetProducts}
                favorites={favoriteProducts}
                onToggleFavorite={handleToggleFavoriteProduct}
              />

            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: EKSPLORASI RUTE
            ======================================================== */}
        {activeTab === 'routes' && (
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <nav className="flex items-center gap-2 text-xs text-[#292D28]/60 mb-6">
                <button
                  onClick={() => setActiveTab('beranda')}
                  className="hover:text-[#244B37] cursor-pointer"
                >
                  Beranda
                </button>
                <span>/</span>
                <span className="text-[#183426] font-semibold">Eksplorasi Rute</span>
              </nav>

              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
                  <span>Koleksi Rute Terverifikasi</span>
                  <span aria-hidden="true">·</span>
                  <span>Outdoor & Nature</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#183426] tracking-tight mb-3">
                  Eksplorasi Rute Bersepeda
                </h1>
                <p className="text-base text-[#292D28]/75 max-w-2xl leading-relaxed">
                  Pilih jalur petualangan berdasarkan disiplin sepeda Anda. Setiap rute dilengkapi dengan estimasi waktu, profil ketinggian, kondisi aspal/tanah, dan rekomendasi pengalaman.
                </p>
              </div>

              {/* RouteStats component */}
              <RouteStats
                routes={routes}
                onOpenAddModal={() => setIsAddRouteOpen(true)}
                onResetData={handleResetRoutes}
              />

              {/* RouteList component */}
              <RouteList
                routes={routes}
                onSelectRoute={setSelectedRoute}
                onDeleteRoute={handleDeleteRoute}
                onOpenAddModal={() => setIsAddRouteOpen(true)}
                onResetData={handleResetRoutes}
                favorites={favoriteRoutes}
                onToggleFavorite={handleToggleFavoriteRoute}
              />

            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: KOMUNITAS PESEPEDA
            ======================================================== */}
        {activeTab === 'community' && (
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CommunitySection />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: EVENT & AGENDA
            ======================================================== */}
        {activeTab === 'events' && (
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <EventsSection />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 6: TITIK PESPEDA (SPOTS)
            ======================================================== */}
        {activeTab === 'spots' && (
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SpotsSection />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 7: PUSAT KESELAMATAN
            ======================================================== */}
        {activeTab === 'safety' && (
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SafetySection />
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 8: TENTANG PEDALRAYA
            ======================================================== */}
        {activeTab === 'about' && (
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AboutSection onExploreRoutes={() => setActiveTab('routes')} />
            </div>
          </div>
        )}

      </main>

      {/* Detail Modals */}
      {selectedRoute && (
        <RouteDetailModal
          route={selectedRoute}
          onClose={() => setSelectedRoute(null)}
        />
      )}

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Controlled Component Forms */}
      {isAddRouteOpen && (
        <RouteForm
          onAddRoute={handleAddRoute}
          onClose={() => setIsAddRouteOpen(false)}
        />
      )}

      {isAddProductOpen && (
        <MarketplaceForm
          onAddProduct={handleAddProduct}
          onClose={() => setIsAddProductOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
