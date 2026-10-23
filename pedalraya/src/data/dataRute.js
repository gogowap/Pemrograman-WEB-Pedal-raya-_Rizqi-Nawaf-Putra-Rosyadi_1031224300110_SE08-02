// Pilihan kategori disiplin sepeda (dipakai oleh filter & form tambah rute)
export const KATEGORI = [
  { key: 'road', nama: 'Road Bike' },
  { key: 'gravel', nama: 'Gravel' },
  { key: 'mtb', nama: 'Mountain Bike' },
  { key: 'touring', nama: 'Touring' },
]

export const TINGKAT = ['Pemula / Santai', 'Menengah', 'Menantang', 'Mahir']

// Gambar bawaan untuk rute baru yang ditambahkan lewat form (sesuai kategori)
export const GAMBAR_DEFAULT = {
  road: '/images/merapi-foothills-classic-loop.jpg',
  gravel: '/images/jalur-kabut-pinus-mangunan.webp',
  mtb: '/images/singletrack-rimba-halimun.jpg',
  touring: '/images/jalur-pantai-selatan-samas-glagah.jpg',
}

// Data awal: 6 rute dari website statis PedalRaya
export const dataAwalRute = [
  {
    id: 1,
    nama: 'Jalur Kabut Pinus Mangunan',
    lokasi: 'Dlingo, Bantul, DI Yogyakarta',
    permukaan: 'Tanah Padat & Aspal Rusak',
    kategori: 'gravel',
    tipe: 'Gravel & MTB',
    tingkat: 'Menengah',
    deskripsi:
      'Kombinasi jalan tanah padat dan aspal pedesaan di tengah hutan pinus yang sejuk dengan aroma getah pohon segar di pagi hari.',
    jarak: 38,
    elevasi: 620,
    durasi: 2.5,
    catatan: 'Rekomendasi Ban: 38-45c',
    gambar: '/images/jalur-kabut-pinus-mangunan.webp',
  },
  {
    id: 2,
    nama: 'Tanjakan Lingkar Kaldera Sembalun',
    lokasi: 'Sembalun, Lombok Timur',
    permukaan: 'Aspal Hotmix Mulus',
    kategori: 'road',
    tipe: 'Road Bike',
    tingkat: 'Menantang',
    deskripsi:
      'Aspal mulus menembus punggung bukit vulkanik dengan gradien rata-rata 7% dan pemandangan lembah sawah terasering luas.',
    jarak: 74,
    elevasi: 1150,
    durasi: 4,
    catatan: 'Rasio Gear: 34T / 32T',
    gambar: '/images/tanjakan-lingkar-kaldera-sembalun.jpg',
  },
  {
    id: 3,
    nama: 'Merapi Foothills Classic Loop',
    lokasi: 'Sleman, DI Yogyakarta',
    permukaan: 'Aspal Lebar & Tanjakan Teratur',
    kategori: 'road',
    tipe: 'Road Bike',
    tingkat: 'Menengah',
    deskripsi:
      'Rute sarapan favorit peloton Yogyakarta dari pusat kota menuju lereng selatan Merapi dengan udara sejuk pagi hari.',
    jarak: 48,
    elevasi: 540,
    durasi: 2.2,
    catatan: 'Kondisi: 95% Aspal Mulus',
    gambar: '/images/merapi-foothills-classic-loop.jpg',
  },
  {
    id: 4,
    nama: 'Lintas Cangar Pegunungan Welirang',
    lokasi: 'Mojokerto - Batu, Jawa Timur',
    permukaan: 'Makadam, Beton & Aspal',
    kategori: 'gravel',
    tipe: 'Gravel & All-Road',
    tingkat: 'Mahir',
    deskripsi:
      'Tantangan elevasi ekstrem menembus hutan tropis pegunungan dengan sumber air panas dan pemandangan lembah memukau.',
    jarak: 61,
    elevasi: 1420,
    durasi: 4.5,
    catatan: 'Rekomendasi: Rem Hidrolik',
    gambar: '/images/lintas-cangar-pegunungan-welirang.jpg',
  },
  {
    id: 5,
    nama: 'Singletrack Rimba Halimun',
    lokasi: 'Sukabumi - Bogor, Jawa Barat',
    permukaan: 'Singletrack & Akar Pohon',
    kategori: 'mtb',
    tipe: 'Mountain Bike (MTB)',
    tingkat: 'Mahir',
    deskripsi:
      'Jalur tanah alami dengan turunan teknikal, jembatan kayu tradisional, dan suasana hutan hujan tropis yang lebat.',
    jarak: 29,
    elevasi: 780,
    durasi: 3.2,
    catatan: 'Tipe Sepeda: Full-Suspension',
    gambar: '/images/singletrack-rimba-halimun.jpg',
  },
  {
    id: 6,
    nama: 'Jalur Pantai Selatan Samas - Glagah',
    lokasi: 'Bantul - Kulon Progo, DIY',
    permukaan: 'Jalan Jalur Lintas Selatan (JJLS)',
    kategori: 'touring',
    tipe: 'Touring & Bikepacking',
    tingkat: 'Pemula / Santai',
    deskripsi:
      'Jalur lurus lebar dengan angin laut sepoi-sepoi, minim tanjakan, sangat cocok untuk touring pertama kali atau bikepacking santai.',
    jarak: 42,
    elevasi: 120,
    durasi: 2,
    catatan: 'Cocok Beban Pannier',
    gambar: '/images/jalur-pantai-selatan-samas-glagah.jpg',
  },
]
