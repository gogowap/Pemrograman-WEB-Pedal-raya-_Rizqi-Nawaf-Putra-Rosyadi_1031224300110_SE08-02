# PedalRaya (Frontend)

Aplikasi web untuk komunitas pesepeda: menjelajahi rute bersepeda, mencari titik singgah, melihat event, bergabung ke komunitas, dan jual beli perlengkapan sepeda.

Project ini adalah **tugas Bab 6 – React Dasar** dan menjadi kerangka awal aplikasi fullstack yang akan dikembangkan sampai Pekan 14 (pada Pekan 11 frontend ini akan disambungkan ke backend/API).

## Topik dan Entitas Utama

- **Topik aplikasi:** Platform komunitas dan rute bersepeda
- **Entitas data utama:** **Rute Bersepeda**
- **Atribut Rute:** `id`, `nama`, `lokasi`, `kategori` (road bike / gravel / MTB), `jarak` (km), `elevasi` (m), `kesulitan` (mudah / menengah / sulit), `foto`
- **Entitas pendukung:** Produk jual beli, Titik Sepeda, Event, Komunitas

## Fitur

- **Beranda**: pencarian rute dan ringkasan rute serta produk pilihan.
- **Rute**: daftar rute dengan filter kategori dan kesulitan, pengurutan, favorit, hapus, dan detail rute.
- **Tambah rute**: form input (controlled component) dengan tombol "+ Tambah Rute ke Koleksi".
- **Data kosong**: menampilkan teks "Belum ada data rute bersepeda" jika daftar masih kosong.
- **Jual Beli**: daftar produk, detail produk, dan form pasang iklan.
- **Titik Sepeda**: kafe, bengkel, dan rest area lengkap dengan foto.
- **Event**: jadwal event bersepeda lengkap dengan foto.
- **Komunitas**: daftar komunitas dengan ruang chat (mode demo, pesan disimpan di browser).
- **Keselamatan** dan **Tentang**.

## Struktur Component (`src/components/`)

| Component           | Fungsi 
| `Header`, `Footer`  | Navigasi dan penutup halaman 
| `RouteList`         | Daftar rute (render list `.map()` + conditional rendering) 
| `RouteCard`         | Kartu untuk tiap rute 
| `RouteForm`         | Form tambah rute (controlled component) 
| `RouteStats`        | Ringkasan jumlah dan statistik rute 
| `RouteDetailModal`  | Detail rute 
| `MarketplaceList`,  | fitur jual beli
| `ProductCard`,      | fitur jual beli
| `MarketplaceForm`,  | fitur jual beli
| `MarketplaceStats`, | fitur jual beli
| `ProductDetailModal`| Fitur jual beli 
| `SpotsSection`,     | Bagian lain aplikasi
| `EventsSection`,    | Bagian lain aplikasi
| `CommunitySection`, | Bagian lain aplikasi
| `SafetySection`,    | Bagian lain aplikasi
| `AboutSection`      | Bagian lain aplikasi 

State daftar rute disimpan sebagai array di `App.jsx` (`useState(INITIAL_ROUTES)`), ditampilkan dengan `.map()` dan `key` unik tiap item. Data awal ada di `src/data/mockData.js`.

## Teknologi

- React 19
- Vite
- Tailwind CSS 4

## Cara Menjalankan

```bash
# 1. Clone repository
git clone <url-repository-anda>

# 2. Masuk ke folder project (yang berisi package.json)
cd pedalraya

# 3. Install dependensi
npm install

# 4. Jalankan server development
npm run dev
```

Buka **http://localhost:5173** di browser.

> Gambar disimpan di `public/assets/images/` dan dipanggil dengan path `/assets/images/nama-file`.

## Rencana Pengembangan

- Pekan 11: menyambungkan frontend ke backend/API
- Pekan 14: aplikasi fullstack selesai (data tersimpan di database, bukan lagi data statis)

## Pembuat

Nama: *(Rizqi Nawaf Putra Rosyadi)*  
NIM: *(103122430010)*  
Kelas: *(SE08-02)*

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
