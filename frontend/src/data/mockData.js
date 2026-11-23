export const INITIAL_PRODUCTS = [
  {
    id: "prod-1",
    nama: "Road Bike Aluminium 2×11 Shimano 105 (Size 52)",
    kategori: "sepeda",
    kategoriLabel: "Sepeda Utuh",
    kondisi: "bekas",
    kondisiLabel: "Bekas",
    harga: 8750000,
    lokasi: "Bandung, Jawa Barat",
    foto: "/assets/images/Road Bike Aluminium 2×11 Shimano 105 (Size 52).jpg",
    deskripsi: "Pemakaian 1,5 tahun, jarang dipakai. Servis rutin di bengkel resmi. Groupset Shimano 105 R7000 2×11, kabel dan housing baru diganti.",
    penjual: "Lapak Gowes Kota",
    terverifikasi: true,
    telepon: "081234567890",
    galeri: [
      "/assets/images/camp.jpg",
      "/assets/images/camp2.jpg",
      "/assets/images/camp3.jpg",
      "/assets/images/camp4.jpg"
    ],
    spesifikasi: [
      { label: "Kondisi", val: "Bekas, mulus (90%)" },
      { label: "Merek / Tipe", val: "Road bike aluminium" },
      { label: "Ukuran Frame", val: "52 cm (tinggi badan 165–175 cm)" },
      { label: "Groupset", val: "Shimano 105 R7000, 2×11" },
      { label: "Rem", val: "Kaliper rim brake" },
      { label: "Roda & Ban", val: "700c, ban 28 mm" },
      { label: "Bobot", val: "Sekitar 9,6 kg" },
      { label: "Tahun Pembelian", val: "2025" }
    ]
  },
  {
    id: "prod-2",
    nama: "Gravel Bike Fork Karbon, Groupset GRX 1×11",
    kategori: "sepeda",
    kategoriLabel: "Sepeda Utuh",
    kondisi: "bekas",
    kondisiLabel: "Bekas",
    harga: 14500000,
    lokasi: "Yogyakarta, DIY",
    foto: "/assets/images/Gravel Bike Fork Karbon, Groupset GRX 1×11.jpg",
    deskripsi: "Ban tubeless 40 mm, mounting bikepacking lengkap. Siap diajak menjelajah jalur tanah dan aspal pedesaan.",
    penjual: "Dimas Anggara",
    terverifikasi: true,
    telepon: "081987654321",
    galeri: ["/assets/images/camp2.jpg", "/assets/images/camp3.jpg"],
    spesifikasi: [
      { label: "Kondisi", val: "Bekas, 92%" },
      { label: "Fork", val: "Full Carbon Tapered" },
      { label: "Groupset", val: "Shimano GRX 1×11 Speed" },
      { label: "Ukuran", val: "Size M (50)" }
    ]
  },
  {
    id: "prod-3",
    nama: "MTB Hardtail 29\" Deore 1×12, Fork Udara",
    kategori: "sepeda",
    kategoriLabel: "Sepeda Utuh",
    kondisi: "bekas",
    kondisiLabel: "Bekas",
    harga: 6900000,
    lokasi: "Bogor, Jawa Barat",
    foto: "/assets/images/MTB Hardtail Fork Udara.jpg",
    deskripsi: "Frame size M, rem hidrolik baru diganti pad. Fork udara empuk dengan lock out di stang.",
    penjual: "Hendro Wibowo",
    terverifikasi: false,
    telepon: "085612345678",
    spesifikasi: [
      { label: "Kondisi", val: "Bekas, 88%" },
      { label: "Ukuran Roda", val: "29 Inch" },
      { label: "Drivetrain", val: "Shimano Deore 1×12" }
    ]
  },
  {
    id: "prod-4",
    nama: "Sepeda Lipat 16\" 7-Speed Frame Alloy",
    kategori: "sepeda",
    kategoriLabel: "Sepeda Utuh",
    kondisi: "baru",
    kondisiLabel: "Baru",
    harga: 3250000,
    lokasi: "Jakarta Selatan, DKI",
    foto: "/assets/images/Sepeda LipatFrame Alloy.jpg",
    deskripsi: "Segel toko, garansi rangka 1 tahun. Sangat praktis dilipat dan muat ke bagasi mobil atau commuter line.",
    penjual: "Lapak Gowes Kota",
    terverifikasi: true,
    telepon: "081234567890",
    spesifikasi: [
      { label: "Kondisi", val: "100% Baru Gress" },
      { label: "Ukuran Roda", val: "16 Inch" },
      { label: "Garansi", val: "Rangka 1 Tahun" }
    ]
  },
  {
    id: "prod-5",
    nama: "Groupset Shimano 105 R7000 2×11 (Bekas Lengkap)",
    kategori: "komponen",
    kategoriLabel: "Komponen & Part",
    kondisi: "bekas",
    kondisiLabel: "Bekas",
    harga: 3100000,
    lokasi: "Semarang, Jawa Tengah",
    foto: "/assets/images/Groupset Shimano 105 R7000 2×11 (Bekas Lengkap).jpg",
    deskripsi: "Crank 50-34T, shifter brifter kanan-kiri, RD, FD, rem kaliper, dan cassette 11-32T. Rantai sudah baru.",
    penjual: "Bayu S.",
    terverifikasi: false,
    telepon: "087812349999",
    spesifikasi: [
      { label: "Kondisi", val: "Bekas, fungsi 100%" },
      { label: "Speed", val: "2×11 Speed" },
      { label: "Crank Arm", val: "170 mm (50/34T)" }
    ]
  },
  {
    id: "prod-6",
    nama: "Wheelset Karbon 700c Tubeless Ready, Hub 24T",
    kategori: "komponen",
    kategoriLabel: "Komponen & Part",
    kondisi: "baru",
    kondisiLabel: "Baru",
    harga: 4800000,
    lokasi: "Surabaya, Jawa Timur",
    foto: "/assets/images/Wheelset Karbon 700c Tubeless Ready, Hub 24T.jpg",
    deskripsi: "Bobot sekitar 1.550 g per set, termasuk quick release dan rim tape. Profil rim 45 mm aerodinamis.",
    penjual: "Pedal Parts SBY",
    terverifikasi: true,
    telepon: "082133445566",
    spesifikasi: [
      { label: "Kondisi", val: "Baru / New" },
      { label: "Material", val: "Toray Carbon Fiber" },
      { label: "Kedalaman Rim", val: "45 mm" },
      { label: "Bobot", val: "1.550 gram" }
    ]
  },
  {
    id: "prod-7",
    nama: "Helm Road Bike Ringan dengan Proteksi MIPS",
    kategori: "aksesori",
    kategoriLabel: "Aksesori & Gear",
    kondisi: "baru",
    kondisiLabel: "Baru",
    harga: 850000,
    lokasi: "Malang, Jawa Timur",
    foto: "/assets/images/Helm Road Bike Ringan dengan Proteksi MIPS.webp",
    deskripsi: "Tersedia size M dan L. Sertifikasi standar keselamatan CPSC & CE EN1078 dengan ventilasi sejuk 18 lubang.",
    penjual: "Helmet Corner",
    terverifikasi: true,
    telepon: "081299887766",
    spesifikasi: [
      { label: "Kondisi", val: "Baru Segel Dus" },
      { label: "Ukuran", val: "M (54-58cm) / L (58-62cm)" },
      { label: "Fitur", val: "MIPS Safety System" }
    ]
  },
  {
    id: "prod-8",
    nama: "Jersey Gowes Lengan Pendek Bahan Dry-Fit",
    kategori: "apparel",
    kategoriLabel: "Apparel & Pakaian",
    kondisi: "baru",
    kondisiLabel: "Baru",
    harga: 275000,
    lokasi: "Bandung, Jawa Barat",
    foto: "/assets/images/Jersey Gowes Lengan Pendek Bahan Dry-Fit.jpg",
    deskripsi: "Potongan race fit, bahan sejuk elastis dengan saku belakang tiga kompartemen dan strip reflektif malam.",
    penjual: "Rizky A.",
    terverifikasi: false,
    telepon: "085711223344",
    spesifikasi: [
      { label: "Kondisi", val: "Baru" },
      { label: "Bahan", val: "Polyester Dry-Fit Spandex" },
      { label: "Ukuran", val: "S, M, L, XL" }
    ]
  },
  {
    id: "prod-9",
    nama: "Bibshort Padding Tebal untuk Jarak Jauh",
    kategori: "apparel",
    kategoriLabel: "Apparel & Pakaian",
    kondisi: "baru",
    kondisiLabel: "Baru",
    harga: 340000,
    lokasi: "Jakarta Barat, DKI",
    foto: "/assets/images/Bibshort Padding Tebal untuk Jarak Jauh.webp",
    deskripsi: "Padding gel anti-lecet berkerapatan tinggi untuk gowes di atas 100 km. Tali bahu elastis tanpa jahitan.",
    penjual: "Cycle Wear ID",
    terverifikasi: true,
    telepon: "081344556677",
    spesifikasi: [
      { label: "Kondisi", val: "Baru" },
      { label: "Padding", val: "Italian High-Density Gel" },
      { label: "Ketahanan", val: "Long Ride 5+ Jam" }
    ]
  },
  {
    id: "prod-10",
    nama: "Lampu Depan 1.000 Lumen USB-C Rechargeable",
    kategori: "aksesori",
    kategoriLabel: "Aksesori & Gear",
    kondisi: "baru",
    kondisiLabel: "Baru",
    harga: 420000,
    lokasi: "Sleman, DIY",
    foto: "/assets/images/Lampu Depan 1.000 Lumen USB-C Rechargeable.webp",
    deskripsi: "Mode steady dan flash, baterai tahan hingga 6 jam, bodi aluminium tahan air IPX6 cocok untuk gowes subuh.",
    penjual: "Jogja Bike Light",
    terverifikasi: true,
    telepon: "081566778899",
    spesifikasi: [
      { label: "Kondisi", val: "Baru" },
      { label: "Kecerahan", val: "1.000 Lumens Max" },
      { label: "Pengisian", val: "USB Type-C Fast Charge" }
    ]
  },
  {
    id: "prod-11",
    nama: "Set Tas Bikepacking: Frame Bag & Handlebar Roll",
    kategori: "aksesori",
    kategoriLabel: "Aksesori & Gear",
    kondisi: "bekas",
    kondisiLabel: "Bekas",
    harga: 690000,
    lokasi: "Malang, Jawa Timur",
    foto: "/assets/images/Set Tas Bikepacking Frame Bag, Handlebar Roll.webp",
    deskripsi: "Waterproof tahan hujan deras, baru dipakai dua trip touring. Semua zipper YKK dan velcro normal kuat.",
    penjual: "Eko Prasetyo",
    terverifikasi: false,
    telepon: "081233221100",
    spesifikasi: [
      { label: "Kondisi", val: "Bekas 90%" },
      { label: "Kapasitas", val: "Handlebar 10L + Frame Bag 3L" },
      { label: "Material", val: "Cordura 1000D Waterproof" }
    ]
  },
  {
    id: "prod-12",
    nama: "Sepatu Cleat SPD Size 42 (Bonus Cleat)",
    kategori: "apparel",
    kategoriLabel: "Apparel & Pakaian",
    kondisi: "bekas",
    kondisiLabel: "Bekas",
    harga: 750000,
    lokasi: "Bogor, Jawa Barat",
    foto: "/assets/images/Sepatu Cleat SPD Size 42 (Bonus Cleat).webp",
    deskripsi: "Sol karbon-nylon rigid bertenaga, kondisi 85%. Cocok untuk MTB, gravel, dan touring. Sudah termasuk cleat.",
    penjual: "Fajar Maulana",
    terverifikasi: false,
    telepon: "087788990011",
    spesifikasi: [
      { label: "Kondisi", val: "Bekas, fisik 85%" },
      { label: "Ukuran", val: "EU 42 (Panjang 26.5 cm)" },
      { label: "Sistem", val: "SPD 2-Baut" }
    ]
  }
];

export const INITIAL_ROUTES = [
  {
    id: "route-1",
    nama: "Jalur Kabut Pinus Mangunan",
    kategori: "gravel",
    kategoriLabel: "Gravel & MTB",
    lokasi: "Dlingo, Bantul, DI Yogyakarta",
    kondisi: "Tanah Padat & Aspal Rusak",
    jarak: 38,
    elevasi: 620,
    durasi: "2.5 Jam",
    kesulitan: "menengah",
    kesulitanLabel: "Menengah",
    rekomendasi: "Rekomendasi Ban: 38-45c",
    foto: "/assets/images/Jalur Kabut Pinus Mangunan.webp",
    deskripsi: "Kombinasi jalan tanah padat dan aspal pedesaan di tengah hutan pinus yang sejuk dengan aroma getah pohon segar di pagi hari.",
    ringkasanLengkap: "Perjalanan menembus segarnya kanopi pinus di perbukitan Dlingo. Menggabungkan aspal pedesaan yang tenang dengan lintasan tanah padat berhawa sejuk dan panorama lembah Sungai Oya.",
    waktuTerbaik: "06:00 - 09:30 WIB",
    elevasiMaks: "480 mdpl",
    permukaan: {
      aspal: 65,
      tanah: 25,
      makadam: 10
    },
    checkpoints: [
      { km: "KM 0", nama: "Titik Awal: Pasar Tradisional Imogiri", desc: "Parkir mobil aman tersedia di area pasar. Titik temu sarapan sebelum tanjakan, tersedia toilet dan warung air mineral." },
      { km: "KM 14", nama: "Pemberhentian Tanjakan Siluk", desc: "Warung kelapa muda di tepi tikungan bukit. Tempat ideal untuk mendinginkan suhu ban dan mengatur kembali napas peloton." },
      { km: "KM 22", nama: "Puncak Becici & Hutan Pinus Asri", desc: "Area teduh dengan angin sepoi-sepoi. Tersedia tempat parkir sepeda khusus kayu, kopi seduh lokal, dan pisang rebus." },
      { km: "KM 38", nama: "Garis Akhir: Kedai Kopi Omah Dhuwur", desc: "Tempat berkumpul akhir perjalanan. Menyediakan fasilitas cuci sepeda sederhana dan ruang santai untuk sharing cerita gowes." }
    ]
  },
  {
    id: "route-2",
    nama: "Tanjakan Lingkar Kaldera Sembalun",
    kategori: "road",
    kategoriLabel: "Road Bike",
    lokasi: "Sembalun, Lombok Timur",
    kondisi: "Aspal Hotmix Mulus",
    jarak: 74,
    elevasi: 1150,
    durasi: "4.0 Jam",
    kesulitan: "sulit",
    kesulitanLabel: "Menantang",
    rekomendasi: "Rasio Gear: 34T / 32T",
    foto: "/assets/images/Tanjakan Lingkar Kaldera Sembalun.jpg",
    deskripsi: "Aspal mulus menembus punggung bukit vulkanik dengan gradien rata-rata 7% dan pemandangan lembah sawah terasering luas.",
    ringkasanLengkap: "Rute road bike kelas dunia melintasi punggung kaldera Rinjani. Menawarkan aspal hitam mulus berstandar kejuaraan dengan tikungan lebar bergradien konsisten serta udara sejuk pegunungan.",
    waktuTerbaik: "05:30 - 10:00 WITA",
    elevasiMaks: "1.150 mdpl",
    permukaan: {
      aspal: 95,
      tanah: 0,
      makadam: 5
    },
    checkpoints: [
      { km: "KM 0", nama: "Start: Gerbang Wisata Sembalun", desc: "Briefing keamanan dan pengecekan rem sebelum tanjakan panjang." },
      { km: "KM 25", nama: "Gardu Pandang Kaldera", desc: "Spot foto panorama lembah dan rest point air kelapa muda." },
      { km: "KM 55", nama: "Pusuk Sembalun Summit", desc: "Puncak tanjakan utama dengan suhu sejuk 18°C." },
      { km: "KM 74", nama: "Finish: Alun-alun Sembalun Bumbung", desc: "Restoran lokal dengan sajian pelecing dan kopi Sembalun hangat." }
    ]
  },
  {
    id: "route-3",
    nama: "Merapi Foothills Classic Loop",
    kategori: "road",
    kategoriLabel: "Road Bike",
    lokasi: "Sleman, DI Yogyakarta",
    kondisi: "Aspal Lebar & Tanjakan Teratur",
    jarak: 48,
    elevasi: 540,
    durasi: "2.2 Jam",
    kesulitan: "menengah",
    kesulitanLabel: "Menengah",
    rekomendasi: "Kondisi: 95% Aspal Mulus",
    foto: "/assets/images/Merapi Foothills Classic Loop.jpg",
    deskripsi: "Rute sarapan favorit peloton Yogyakarta dari pusat kota menuju lereng selatan Merapi dengan udara sejuk pagi hari.",
    ringkasanLengkap: "Rute klasik pagi hari yang digemari pehobi road bike. Tanjakan rolling stabil dengan latar kerucut Gunung Merapi yang megah saat matahari terbit di ufuk timur.",
    waktuTerbaik: "05:30 - 08:30 WIB",
    elevasiMaks: "600 mdpl",
    permukaan: {
      aspal: 95,
      tanah: 0,
      makadam: 5
    },
    checkpoints: [
      { km: "KM 0", nama: "Tugu Pal Putih Yogyakarta", desc: "Titik kumpul tradisional komunitas pesepeda pagi." },
      { km: "KM 20", nama: "Pakem Roundabout", desc: "Mulai masuk zona tanjakan berhawa dingin." },
      { km: "KM 32", nama: "Kaliurang Viewpoint", desc: "Kopi klotok dan jadah tempe hangat khas Kaliurang." },
      { km: "KM 48", nama: "Kembali ke Kota (Monjali)", desc: "Turunan aspal cepat dan lebar dengan pemandangan kota." }
    ]
  },
  {
    id: "route-4",
    nama: "Lintas Cangar Pegunungan Welirang",
    kategori: "gravel",
    kategoriLabel: "Gravel & All-Road",
    lokasi: "Mojokerto - Batu, Jawa Timur",
    kondisi: "Makadam, Beton & Aspal",
    jarak: 61,
    elevasi: 1420,
    durasi: "4.5 Jam",
    kesulitan: "sulit",
    kesulitanLabel: "Mahir",
    rekomendasi: "Rekomendasi: Rem Hidrolik",
    foto: "/assets/images/Lintas Cangar Pegunungan Welirang.jpg",
    deskripsi: "Tantangan elevasi ekstrem menembus hutan tropis pegunungan dengan sumber air panas dan pemandangan lembah memukau.",
    ringkasanLengkap: "Salah satu rute paling menuntut ketahanan fisik di Jawa Timur. Gradien curam berpadu dengan jalur makadam alami di punggung Gunung Welirang yang berkabut tebal.",
    waktuTerbaik: "06:00 - 11:00 WIB",
    elevasiMaks: "1.520 mdpl",
    permukaan: {
      aspal: 50,
      tanah: 30,
      makadam: 20
    },
    checkpoints: [
      { km: "KM 0", nama: "Pacet Adventure Base", desc: "Pengisian air elektrolit dan cek perlengkapan dingin." },
      { km: "KM 28", nama: "Pemandian Air Panas Cangar", desc: "Spot istirahat relaksasi otot dan hidrasi." },
      { km: "KM 45", nama: "Hutan Bambu Bumiaji", desc: "Gravel gravel teknikal dengan pemandangan kebun apel." },
      { km: "KM 61", nama: "Alun-Alun Kota Wisata Batu", desc: "Tempat santap hangat dan titik kumpul penjemputan logistik." }
    ]
  },
  {
    id: "route-5",
    nama: "Singletrack Rimba Halimun",
    kategori: "mtb",
    kategoriLabel: "Mountain Bike (MTB)",
    lokasi: "Sukabumi - Bogor, Jawa Barat",
    kondisi: "Singletrack & Akar Pohon",
    jarak: 29,
    elevasi: 780,
    durasi: "3.2 Jam",
    kesulitan: "sulit",
    kesulitanLabel: "Mahir",
    rekomendasi: "Tipe Sepeda: Full-Suspension",
    foto: "/assets/images/mtb.jpg",
    deskripsi: "Jalur tanah alami dengan turunan teknikal, jembatan kayu tradisional, dan suasana hutan hujan tropis yang lebat.",
    ringkasanLengkap: "Petualangan sejati melintasi Taman Nasional Gunung Halimun Salak. Lintasan singletrack alami di bawah kanopi kanopi pohon raksasa dengan jalur tanah basah dan bebatuan licin.",
    waktuTerbaik: "06:30 - 11:30 WIB",
    elevasiMaks: "1.050 mdpl",
    permukaan: {
      aspal: 15,
      tanah: 70,
      makadam: 15
    },
    checkpoints: [
      { km: "KM 0", nama: "Gerbang Rimba Kabandungan", desc: "Briefing jalur dan registrasi pemandu lokal." },
      { km: "KM 12", nama: "Canopy Trail Halimun", desc: "Jembatan gantung spektakuler di atas pucuk pepohonan." },
      { km: "KM 20", nama: "Kampung Konservasi Adat", desc: "Istirahat santai sambil mencicipi kopi robusta hutan." },
      { km: "KM 29", nama: "Pondok Wisata Nirmala", desc: "Kebun teh hijau asri dan fasilitas pembersihan sepeda kotor." }
    ]
  },
  {
    id: "route-6",
    nama: "Jalur Pantai Selatan Samas - Glagah",
    kategori: "touring",
    kategoriLabel: "Touring & Bikepacking",
    lokasi: "Bantul - Kulon Progo, DIY",
    kondisi: "Jalan Jalur Lintas Selatan (JJLS)",
    jarak: 52,
    elevasi: 120,
    durasi: "2.5 Jam",
    kesulitan: "mudah",
    kesulitanLabel: "Pemula / Santai",
    rekomendasi: "Cocok untuk Semua Sepeda",
    foto: "/assets/images/Jalur Perbukitan Menoreh.jpg",
    deskripsi: "Rute datar aspal mulus menyusuri garis pantai selatan Jawa dengan jembatan megah dan angin laut yang menyegarkan.",
    ringkasanLengkap: "Rute ramah pemula dan keluarga di sepanjang Jalan Jalur Lintas Selatan (JJLS). Aspal lebar empat lajur dengan hembusan angin sepoi pantai dan jejeran pohon cemara udang rindang.",
    waktuTerbaik: "06:00 - 09:00 WIB & 15:30 - 17:45 WIB",
    elevasiMaks: "45 mdpl",
    permukaan: {
      aspal: 95,
      tanah: 0,
      makadam: 5
    },
    checkpoints: [
      { km: "KM 0", nama: "Jembatan Kretek II Samas", desc: "Ikon arsitektur jembatan merah megah di muara sungai Opak." },
      { km: "KM 24", nama: "Hutan Cemara Pantai Pandansimo", desc: "Rest area teduh dengan warung es kelapa muda dan ikan bakar." },
      { km: "KM 40", nama: "Muara Sungai Progo", desc: "Pemandangan nelayan tradisional dan burung camar." },
      { km: "KM 52", nama: "Laguna Pantai Glagah", desc: "Tetrapod pemecah ombak ikonik dan sunset spektakuler." }
    ]
  }
];

export const INITIAL_COMMUNITIES = [
  {
    id: "comm-1",
    nama: "Gravel Syndicate Nusantara",
    kategori: "Gravel & Bikepacking",
    anggota: "320+ Anggota",
    lokasi: "DI Yogyakarta & Jawa Tengah",
    deskripsi: "Pencinta jalur tanah pedesaan, perkebunan teh, dan jalur rel tua. Mengedepankan eksplorasi tanpa batasan aspal dengan sepeda all-road dan gravel.",
    jadwal: "Sabtu Pagi (06.00 WIB)",
    kontak: "@gravelsyndicate_id"
  },
  {
    id: "comm-2",
    nama: "Peloton Pagi Merapi",
    kategori: "Road Bike & Endurance",
    anggota: "450+ Anggota",
    lokasi: "Kota Yogyakarta & Sleman",
    deskripsi: "Komunitas sarapan gowes aspal dengan kecepatan rata-rata teratur (Tempo & Paceline). Terbuka untuk goweser baru yang ingin belajar etika peloton jalan raya.",
    jadwal: "Selasa, Kamis & Minggu Subuh",
    kontak: "@pelotonpagimerapi"
  },
  {
    id: "comm-3",
    nama: "Halimun Trail Riders",
    kategori: "MTB All-Mountain & XC",
    anggota: "180+ Anggota",
    lokasi: "Bogor & Sukabumi, Jawa Barat",
    deskripsi: "Para penjelajah jalur tanah hutan hujan tropis, singletrack teknikal lereng gunung, dan kampanye restorasi konservasi hutan rimba.",
    jadwal: "Minggu Pagi (07.00 WIB)",
    kontak: "@halimuntrail_riders"
  },
  {
    id: "comm-4",
    nama: "Java South Coast Randonneurs",
    kategori: "Ultra Audax & Touring",
    anggota: "210+ Anggota",
    lokasi: "DIY, Purworejo, Cilacap",
    deskripsi: "Fokus pada perjalanan jarak jauh mandiri 200 km, 300 km, hingga 600 km dengan semangat self-sufficiency dan kecintaan pada pesisir selatan nusantara.",
    jadwal: "Brevet Bulanan & Latihan Akhir Pekan",
    kontak: "@javasouthcoast_brm"
  },
  {
    id: "comm-5",
    nama: "Fun & Coffee Pedalers Bandung",
    kategori: "City Ride & Coffee Hunting",
    anggota: "390+ Anggota",
    lokasi: "Bandung Raya, Jawa Barat",
    deskripsi: "Gowes santai keliling kota, menyusuri sudut peninggalan kolonial heritage, dan nongkrong di kedai kopi artisan lokal. Ramah pemula dan segala sepeda.",
    jadwal: "Sabtu Sore & Minggu Pagi",
    kontak: "@coffeepedalers.bdg"
  },
  {
    id: "comm-6",
    nama: "Sembalun Climbing Squad",
    kategori: "Hill Climbing Specialists",
    anggota: "95+ Anggota",
    lokasi: "Lombok, Nusa Tenggara Barat",
    deskripsi: "Klub penakluk tanjakan curam di ketinggian kaki Gunung Rinjani. Melatih napas, irama kayuhan (cadence), dan teknik pengereman turunan panjang.",
    jadwal: "Sabtu Pagi (06.30 WITA)",
    kontak: "@sembalunclimb"
  }
];

export const INITIAL_EVENTS = [
  {
    id: "event-1",
    nama: "Bromo Gravel Odyssey 2026",
    foto: "/assets/images/gravel komunitas.png",
    kategori: "mtb",
    kategoriLabel: "Gravel & All-Road",
    hari: "Sabtu",
    tanggal: "24 Okt",
    tahun: "Tahun 2026 · 06.00 WIB",
    lokasi: "Start: Tosari, Pasuruan · Finish: Lautan Pasir Bromo",
    jarak: "65 km",
    elevasi: "+1.680 m",
    kuota: "Terbuka (Maks 300)",
    biaya: "Rp 350.000 (Jersey & Logistik)",
    deskripsi: "Tantangan melibas jalur gravel alam pegunungan Tengger, perkebunan kubis, dan sensasi mengayuh di lautan pasir berbisik dengan pemandangan kawah aktif Bromo."
  },
  {
    id: "event-2",
    nama: "Tour de Borobudur Heritage 2026",
    foto: "/assets/images/Merapi Foothills Classic Loop.jpg",
    kategori: "road",
    kategoriLabel: "Road Gran Fondo",
    hari: "Minggu",
    tanggal: "15 Nov",
    tahun: "Tahun 2026 · 05.30 WIB",
    lokasi: "Start: De Tjolomadoe Solo · Finish: Candi Borobudur Magelang",
    jarak: "105 km",
    elevasi: "+850 m",
    kuota: "Kategori Usia 17+",
    biaya: "Kategori: 105 km & 50 km Half",
    deskripsi: "Ajang gowes legendaris melintasi jalur pedesaan Jawa Tengah yang kaya budaya dengan aspal mulus dan pengawalan kepolisian ramah pesepeda."
  },
  {
    id: "event-3",
    nama: "Gowes Hijau & Tanam Pohon Halimun",
    foto: "/assets/images/Jalur Kabut Pinus Mangunan.webp",
    kategori: "fun",
    kategoriLabel: "Charity Fun Ride",
    hari: "Minggu",
    tanggal: "06 Des",
    tahun: "Tahun 2026 · 06.30 WIB",
    lokasi: "Start: Kebun Raya Cibodas · Finish: Kaki Gunung Gede",
    jarak: "28 km",
    elevasi: "+310 m",
    kuota: "Semua Usia / Keluarga",
    biaya: "Gratis Donasi Sukarela Bibit",
    deskripsi: "Kegiatan gowes rekreasi keluarga yang mengombinasikan olahraga dengan pelestarian hutan. Setiap peserta menyumbangkan satu pohon endemik yang ditanam bersama."
  },
  {
    id: "event-4",
    nama: "Brevet 200 km Lingkar Merbabu - Lawu",
    foto: "/assets/images/Lintas Cangar Pegunungan Welirang.jpg",
    kategori: "touring",
    kategoriLabel: "Audax Brevet 200 BRM",
    hari: "Sabtu",
    tanggal: "19 Des",
    tahun: "Tahun 2026 · 05.00 WIB",
    lokasi: "Start & Finish: Benteng Vastenburg, Solo",
    jarak: "202 km",
    elevasi: "+2.400 m",
    kuota: "Waktu Maks: 13 Jam 30 Menit",
    biaya: "Wajib Rompi Reflektif & Helm",
    deskripsi: "Gowes mandiri tanpa kawalan dengan batas waktu (cut-off time) 13.5 jam. Peserta wajib mencap kartu brevet di 4 titik kontrol (checkpoint)."
  }
];

export const INITIAL_SPOTS = [
  {
    id: "spot-1",
    nama: "Kedai Kopi Tanjakan Km 18",
    foto: "/assets/images/about.jpg",
    kategori: "cafe",
    kategoriBadge: "☕ Kedai Kopi",
    jam: "Buka 05.30 WIB",
    lokasi: "Jl. Kaliurang Km 18, Sleman, Yogyakarta",
    deskripsi: "Didesain khusus untuk pesepeda tanjakan Merapi. Menyediakan rak parkir kayu kapasitas 30 sepeda, air minum isi ulang gratis, dan menu sarapan bubur ayam serta pisang bakar.",
    fasilitas: ["Parkir Sepeda Aman", "Air Minum Gratis", "Pompa & Kunci L"]
  },
  {
    id: "spot-2",
    nama: "Pit Stop Omah Dhuwur Imogiri",
    foto: "/assets/images/Jalur Perbukitan Menoreh.jpg",
    kategori: "cafe",
    kategoriBadge: "☕ Kafe & Rest Area",
    jam: "Buka 06.00 WIB",
    lokasi: "Jl. Imogiri Timur Km 14, Bantul, DIY",
    deskripsi: "Pemberhentian favorit seusai melibas turunan Siluk dan Mangunan. Tersedia selang cuci sepeda bertekanan rendah dan ruang istirahat bale bambu teduh.",
    fasilitas: ["Cuci Sepeda Ringan", "Bale Istirahat", "Menu Karbo Sehat"]
  },
  {
    id: "spot-3",
    nama: "Bengkel Sepeda Barokah Speed",
    foto: "/assets/images/camp4.jpg",
    kategori: "workshop",
    kategoriBadge: "🔧 Bengkel & Servis",
    jam: "Buka Tiap Hari 07.00 - 18.00 WIB",
    lokasi: "Jl. Palagan Tentara Pelajar Km 9, Sleman",
    deskripsi: "Montir berpengalaman khusus road bike dan MTB. Melayani setel jari-jari mendadak, bleeding rem hidrolik, penambalan ban tubeless, dan penggantian rantai putus.",
    fasilitas: ["Servis Darurat", "Suku Cadang Standar", "Bantuan Evakuasi Pickup"]
  },
  {
    id: "spot-4",
    nama: "Kios Servis & P3K Rimba Halimun",
    foto: "/assets/images/mtb.jpg",
    kategori: "workshop",
    kategoriBadge: "🔧 Servis Trail & Part",
    jam: "Sabtu & Minggu 06.30 - 16.00 WIB",
    lokasi: "Pintu Masuk Wisata Halimun, Sukabumi",
    deskripsi: "Titik bengkel darurat di kaki jalur singletrack tanah. Menyediakan ban dalam berbagai ukuran (27.5 dan 29 inch), chain oil cuaca basah, dan kompresor ban berdaya tinggi.",
    fasilitas: ["Kompresor Angin", "Ban Luar & Dalam", "P3K Luka Lecet"]
  },
  {
    id: "spot-5",
    nama: "Pos Air & Istirahat Gardu Pandang Sembalun",
    foto: "/assets/images/Tanjakan Lingkar Kaldera Sembalun.jpg",
    kategori: "rest",
    kategoriBadge: "🏞️ Rest Area & Sumber Air",
    jam: "Akses 24 Jam",
    lokasi: "Pusuk Pas Sembalun, Lombok Timur",
    deskripsi: "Tempat istirahat puncak tanjakan dengan gazebo kayu, toilet bersih, dan dispenser air mineral dingin/hangat swadaya dari komunitas gowes setempat.",
    fasilitas: ["Gazebo Pemandangan", "Toilet Bersih", "Dispenser Air Bersih"]
  },
  {
    id: "spot-6",
    nama: "Pedal House Bike Shop & Apparel",
    foto: "/assets/images/camp.jpg",
    kategori: "shop",
    kategoriBadge: "🛍️ Toko Sepeda & Apparel",
    jam: "Senin - Sabtu 09.00 - 19.30 WIB",
    lokasi: "Jl. Cik Di Tiro No. 12, Kota Yogyakarta",
    deskripsi: "Menyediakan helm berstandar internasional, jersey bernapas (breathable), sarung tangan gel, botol bidon, dan perlengkapan bikepacking tahan air.",
    fasilitas: ["Fitting Helm", "Apparel Resmi", "Konsultasi Rute"]
  }
];

export const SAFETY_CHECKLIST_ITEMS = [
  {
    id: "chk-1",
    title: "1. Tekanan Angin Ban (Tire Pressure)",
    desc: "Periksa tekanan ban menggunakan floor pump (Road: 70-90 PSI, Gravel: 35-45 PSI, MTB: 25-30 PSI)."
  },
  {
    id: "chk-2",
    title: "2. Fungsi Pengereman Depan & Belakang",
    desc: "Tarik kedua tuas rem. Pastikan rem mencengkeram kuat sebelum tuas menyentuh handlebar dan tidak ada kebocoran minyak."
  },
  {
    id: "chk-3",
    title: "3. Helm Terpasang Rapat & Terkunci",
    desc: "Tali dagu membentuk huruf 'V' di bawah telinga. Tidak goyang saat menggelengkan kepala."
  },
  {
    id: "chk-4",
    title: "4. Daya Baterai Lampu Sepeda (Front & Rear)",
    desc: "Lampu merah belakang aktif dan berkedip jelas. Lampu putih depan menyala untuk penerangan jalan subuh/malam."
  },
  {
    id: "chk-5",
    title: "5. Perlengkapan Darurat Mekanik (Flat Kit)",
    desc: "Bawa ban dalam cadangan, tire levers, pompa portabel/CO2 cartridge, dan multi-tool sepeda ber-chain breaker."
  },
  {
    id: "chk-6",
    title: "6. Hidrasi & Nutrisi Cadangan",
    desc: "Minimal 1-2 botol bidon air mineral / elektrolit dan 1-2 bar energi/kurma untuk mencegah dehidrasi dan bonking."
  }
];
