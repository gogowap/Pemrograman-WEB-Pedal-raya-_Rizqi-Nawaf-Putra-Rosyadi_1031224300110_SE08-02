import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto.js';
import { UpdateRouteDto } from './dto/update-route.dto.js';
import {
  Route,
  RouteCategory,
  RouteDifficulty,
} from './entities/route.entity.js';

@Injectable()
export class RoutesService {
  // Penyimpanan sementara dalam array memori (In-Memory Array) sesuai silabus MVC
  private routes: Route[] = [
    {
      id: 'route-1',
      nama: 'Jalur Kabut Pinus Mangunan',
      kategori: 'gravel',
      kategoriLabel: 'Gravel & All-Road',
      lokasi: 'Dlingo, Bantul, DI Yogyakarta',
      kondisi: 'Tanah Padat & Aspal Rusak',
      jarak: 38,
      elevasi: 620,
      durasi: '2.5 Jam',
      kesulitan: 'menengah',
      kesulitanLabel: 'Menengah',
      rekomendasi: 'Rekomendasi Ban: 38-45c',
      foto: '/assets/images/Jalur Kabut Pinus Mangunan.webp',
      deskripsi:
        'Kombinasi jalan tanah padat dan aspal pedesaan di tengah hutan pinus yang sejuk dengan aroma getah pohon segar di pagi hari.',
      ringkasanLengkap:
        'Perjalanan menembus segarnya kanopi pinus di perbukitan Dlingo. Menggabungkan aspal pedesaan yang tenang dengan lintasan tanah padat berhawa sejuk dan panorama lembah Sungai Oya.',
      waktuTerbaik: '06:00 - 09:30 WIB',
      elevasiMaks: '480 mdpl',
      permukaan: { aspal: 65, tanah: 25, makadam: 10 },
      checkpoints: [
        {
          km: 'KM 0',
          nama: 'Pasar Tradisional Imogiri',
          desc: 'Titik temu sarapan sebelum tanjakan, tersedia toilet dan warung air mineral.',
        },
        {
          km: 'KM 22',
          nama: 'Puncak Becici & Hutan Pinus Asri',
          desc: 'Area teduh dengan angin sepoi-sepoi dan pisang rebus.',
        },
        {
          km: 'KM 38',
          nama: 'Kedai Kopi Omah Dhuwur',
          desc: 'Garis akhir perjalanan dan tempat sharing cerita gowes.',
        },
      ],
      terverifikasi: true,
      createdAt: new Date('2026-10-01T08:00:00.000Z'),
    },
    {
      id: 'route-2',
      nama: 'Tanjakan Lingkar Kaldera Sembalun',
      kategori: 'road',
      kategoriLabel: 'Road Bike',
      lokasi: 'Sembalun, Lombok Timur',
      kondisi: 'Aspal Hotmix Mulus',
      jarak: 74,
      elevasi: 1150,
      durasi: '4.0 Jam',
      kesulitan: 'sulit',
      kesulitanLabel: 'Menantang / Mahir',
      rekomendasi: 'Rasio Gear: 34T / 32T',
      foto: '/assets/images/Tanjakan Lingkar Kaldera Sembalun.jpg',
      deskripsi:
        'Aspal mulus menembus punggung bukit vulkanik dengan gradien rata-rata 7% dan pemandangan lembah sawah terasering luas.',
      ringkasanLengkap:
        'Rute road bike kelas dunia melintasi punggung kaldera Rinjani berstandar kejuaraan.',
      waktuTerbaik: '05:30 - 10:00 WITA',
      elevasiMaks: '1.150 mdpl',
      permukaan: { aspal: 95, tanah: 0, makadam: 5 },
      checkpoints: [
        {
          km: 'KM 0',
          nama: 'Gerbang Wisata Sembalun',
          desc: 'Briefing keamanan dan cek rem sebelum tanjakan.',
        },
        {
          km: 'KM 55',
          nama: 'Pusuk Sembalun Summit',
          desc: 'Puncak tanjakan utama dengan suhu sejuk 18°C.',
        },
      ],
      terverifikasi: true,
      createdAt: new Date('2026-10-05T07:30:00.000Z'),
    },
    {
      id: 'route-3',
      nama: 'Merapi Foothills Classic Loop',
      kategori: 'road',
      kategoriLabel: 'Road Bike',
      lokasi: 'Sleman, DI Yogyakarta',
      kondisi: 'Aspal Lebar & Tanjakan Teratur',
      jarak: 48,
      elevasi: 540,
      durasi: '2.2 Jam',
      kesulitan: 'menengah',
      kesulitanLabel: 'Menengah',
      rekomendasi: 'Kondisi: 95% Aspal Mulus',
      foto: '/assets/images/Merapi Foothills Classic Loop.jpg',
      deskripsi:
        'Rute sarapan favorit peloton Yogyakarta dari pusat kota menuju lereng selatan Merapi dengan udara sejuk pagi hari.',
      ringkasanLengkap:
        'Rute klasik pagi hari yang digemari pehobi road bike berlatar kerucut Gunung Merapi megah.',
      waktuTerbaik: '05:30 - 08:30 WIB',
      elevasiMaks: '600 mdpl',
      permukaan: { aspal: 95, tanah: 0, makadam: 5 },
      checkpoints: [
        {
          km: 'KM 0',
          nama: 'Tugu Pal Putih',
          desc: 'Titik kumpul pagi peloton kota Yogyakarta.',
        },
        {
          km: 'KM 32',
          nama: 'Kaliurang Viewpoint',
          desc: 'Kopi klotok dan jadah tempe hangat khas lereng Merapi.',
        },
      ],
      terverifikasi: true,
      createdAt: new Date('2026-10-10T06:15:00.000Z'),
    },
    {
      id: 'route-4',
      nama: 'Lintas Cangar Pegunungan Welirang',
      kategori: 'touring',
      kategoriLabel: 'Touring & Bikepacking',
      lokasi: 'Batu - Pacet, Jawa Timur',
      kondisi: 'Aspal Berkelok Lembah Hijau',
      jarak: 52,
      elevasi: 980,
      durasi: '3.5 Jam',
      kesulitan: 'sulit',
      kesulitanLabel: 'Menantang / Mahir',
      rekomendasi: 'Rekomendasi Lampu & Windbreaker',
      foto: '/assets/images/Lintas Cangar Pegunungan Welirang.jpg',
      deskripsi:
        'Menghubungkan Kota Batu dengan Mojokerto melewati sumber air panas Cangar di celah Gunung Welirang dan Anjasmoro.',
      ringkasanLengkap:
        'Tantangan epik perbatasan dataran tinggi Jawa Timur dihiasi perkebunan apel dan hutan lumut tropis.',
      waktuTerbaik: '06:00 - 11:00 WIB',
      elevasiMaks: '1.450 mdpl',
      permukaan: { aspal: 85, tanah: 5, makadam: 10 },
      terverifikasi: false,
      createdAt: new Date('2026-10-12T09:00:00.000Z'),
    },
    {
      id: 'route-5',
      nama: 'Loop Jalur Hijau Sungai Cisadane',
      kategori: 'leisure',
      kategoriLabel: 'Santai / Leisure',
      lokasi: 'Tangerang, Banten',
      kondisi: 'Paving Block & Aspal Rata',
      jarak: 18,
      elevasi: 45,
      durasi: '1.2 Jam',
      kesulitan: 'mudah',
      kesulitanLabel: 'Pemula / Santai',
      rekomendasi: 'Cocok untuk Sepeda Lipat / Urban Bike',
      foto: '/assets/images/pexels-run-ffwpu-5687405.jpg',
      deskripsi:
        'Gowes santai keluarga menyusuri tepian Sungai Cisadane dengan jalur khusus pesepeda yang teduh dan rindang.',
      waktuTerbaik: '06:30 - 08:30 WIB',
      permukaan: { aspal: 80, tanah: 10, makadam: 10 },
      terverifikasi: true,
      createdAt: new Date('2026-10-15T06:45:00.000Z'),
    },
  ];

  private readonly categoryLabels: Record<RouteCategory, string> = {
    road: 'Road Bike',
    gravel: 'Gravel & All-Road',
    mtb: 'Mountain Bike (MTB)',
    touring: 'Touring & Bikepacking',
    leisure: 'Santai / Leisure',
  };

  private readonly difficultyLabels: Record<RouteDifficulty, string> = {
    mudah: 'Pemula / Santai',
    menengah: 'Menengah',
    sulit: 'Menantang / Mahir',
  };


  //CREATE - Tambah Rute Baru

  create(createRouteDto: CreateRouteDto): Route {
    // Skenario Error 1: Cek duplikasi nama rute
    const normalizedName = createRouteDto.nama.trim().toLowerCase();
    const isDuplicate = this.routes.some(
      (r) => r.nama.trim().toLowerCase() === normalizedName,
    );

    if (isDuplicate) {
      throw new ConflictException(
        `Rute dengan nama "${createRouteDto.nama.trim()}" sudah terdaftar di PedalRaya. Harap gunakan nama rute yang unik.`,
      );
    }

    const id = `route-${Date.now()}`;
    const calculatedDurasi =
      createRouteDto.durasi?.trim() ||
      `${(Number(createRouteDto.jarak) / 20).toFixed(1)} Jam`;

    const newRoute: Route = {
      id,
      nama: createRouteDto.nama.trim(),
      kategori: createRouteDto.kategori,
      kategoriLabel:
        this.categoryLabels[createRouteDto.kategori] || 'Gowes Petualang',
      lokasi: createRouteDto.lokasi.trim(),
      kondisi: createRouteDto.kondisi?.trim() || 'Aspal Halus & Tanah Padat',
      jarak: Number(createRouteDto.jarak),
      elevasi: Number(createRouteDto.elevasi) || 0,
      durasi: calculatedDurasi,
      kesulitan: createRouteDto.kesulitan,
      kesulitanLabel:
        this.difficultyLabels[createRouteDto.kesulitan] || 'Menengah',
      rekomendasi:
        createRouteDto.rekomendasi?.trim() || 'Periksa kondisi rem dan tekanan ban',
      foto:
        createRouteDto.foto?.trim() ||
        '/assets/images/Jalur Kabut Pinus Mangunan.webp',
      deskripsi:
        createRouteDto.deskripsi?.trim() ||
        'Rute petualangan bersepeda pilihan komunitas PedalRaya.',
      ringkasanLengkap:
        createRouteDto.deskripsi?.trim() ||
        'Rute indah dengan pesona bentang alam khas nusantara.',
      waktuTerbaik: '06:00 - 09:30 WIB',
      elevasiMaks: `${createRouteDto.elevasi || 400} mdpl`,
      permukaan: {
        aspal:
          createRouteDto.kategori === 'road'
            ? 95
            : createRouteDto.kategori === 'gravel'
              ? 60
              : 30,
        tanah:
          createRouteDto.kategori === 'mtb'
            ? 65
            : createRouteDto.kategori === 'gravel'
              ? 30
              : 5,
        makadam: 10,
      },
      checkpoints: [
        {
          km: 'KM 0',
          nama: 'Titik Awal Keberangkatan',
          desc: `Start kumpul di ${createRouteDto.lokasi.trim()}. Briefing rute dan protokol keamanan.`,
        },
        {
          km: `KM ${Math.round(Number(createRouteDto.jarak) * 0.5)}`,
          nama: 'Rest Point & Puncak Tanjakan',
          desc: 'Rehidrasi air mineral, menikmati panorama alam lokal.',
        },
        {
          km: `KM ${createRouteDto.jarak}`,
          nama: 'Finish & Spot Ramah Sepeda',
          desc: 'Garis akhir gowes, sharing cerita petualangan.',
        },
      ],
      terverifikasi: createRouteDto.terverifikasi ?? false,
      createdAt: new Date(),
    };

    // Simpan ke array memori (prepend di awal agar rute terbaru muncul teratas)
    this.routes.unshift(newRoute);
    return newRoute;
  }

  /**
   * READ ALL - Ambil semua rute dengan dukungan filter opsional
   */
  findAll(query?: {
    kategori?: string;
    kesulitan?: string;
    search?: string;
  }): Route[] {
    let result = [...this.routes];

    if (query?.kategori && query.kategori !== 'all') {
      result = result.filter((r) => r.kategori === query.kategori);
    }

    if (query?.kesulitan && query.kesulitan !== 'all') {
      result = result.filter((r) => r.kesulitan === query.kesulitan);
    }

    if (query?.search && query.search.trim()) {
      const q = query.search.toLowerCase().trim();
      result = result.filter(
        (r) =>
          r.nama.toLowerCase().includes(q) ||
          r.lokasi.toLowerCase().includes(q) ||
          r.deskripsi.toLowerCase().includes(q),
      );
    }

    return result;
  }

  /**
   * READ ONE - Ambil satu rute berdasarkan ID
   * Menangani skenario error data tidak ditemukan (NotFoundException)
   */
  findOne(id: string): Route {
    if (!id || !id.trim()) {
      throw new BadRequestException('ID rute tidak boleh kosong.');
    }

    const route = this.routes.find((r) => r.id === id);

    if (!route) {
      throw new NotFoundException(
        `Rute dengan ID "${id}" tidak ditemukan pada sistem PedalRaya.`,
      );
    }

    return route;
  }

  /**
   * UPDATE - Perbarui data rute berdasarkan ID
   * Menangani NotFoundException jika ID tidak ada
   * Menangani ConflictException jika nama baru bentrok dengan rute lain
   */
  update(id: string, updateRouteDto: UpdateRouteDto): Route {
    const index = this.routes.findIndex((r) => r.id === id);

    if (index === -1) {
      throw new NotFoundException(
        `Gagal memperbarui: Rute dengan ID "${id}" tidak ditemukan.`,
      );
    }

    // Jika nama rute diubah, pastikan tidak bentrok dengan rute lain
    if (updateRouteDto.nama) {
      const normalizedName = updateRouteDto.nama.trim().toLowerCase();
      const isDuplicate = this.routes.some(
        (r) => r.id !== id && r.nama.trim().toLowerCase() === normalizedName,
      );

      if (isDuplicate) {
        throw new ConflictException(
          `Nama rute "${updateRouteDto.nama.trim()}" sudah digunakan oleh rute lain. Silakan pilih nama lain.`,
        );
      }
    }

    const existingRoute = this.routes[index];

    const updatedRoute: Route = {
      ...existingRoute,
      ...updateRouteDto,
      nama: updateRouteDto.nama ? updateRouteDto.nama.trim() : existingRoute.nama,
      lokasi: updateRouteDto.lokasi
        ? updateRouteDto.lokasi.trim()
        : existingRoute.lokasi,
      kategori: updateRouteDto.kategori || existingRoute.kategori,
      kategoriLabel: updateRouteDto.kategori
        ? this.categoryLabels[updateRouteDto.kategori] ||
        existingRoute.kategoriLabel
        : existingRoute.kategoriLabel,
      kesulitan: updateRouteDto.kesulitan || existingRoute.kesulitan,
      kesulitanLabel: updateRouteDto.kesulitan
        ? this.difficultyLabels[updateRouteDto.kesulitan] ||
        existingRoute.kesulitanLabel
        : existingRoute.kesulitanLabel,
      jarak:
        updateRouteDto.jarak !== undefined
          ? Number(updateRouteDto.jarak)
          : existingRoute.jarak,
      elevasi:
        updateRouteDto.elevasi !== undefined
          ? Number(updateRouteDto.elevasi)
          : existingRoute.elevasi,
      durasi:
        updateRouteDto.durasi?.trim() ||
        (updateRouteDto.jarak !== undefined
          ? `${(Number(updateRouteDto.jarak) / 20).toFixed(1)} Jam`
          : existingRoute.durasi),
      updatedAt: new Date(),
    };

    this.routes[index] = updatedRoute;
    return updatedRoute;
  }

  /**
   * DELETE - Hapus rute dari memori
   * Menangani NotFoundException jika ID tidak ditemukan
   */
  remove(id: string): { message: string; deletedRoute: Route } {
    const index = this.routes.findIndex((r) => r.id === id);

    if (index === -1) {
      throw new NotFoundException(
        `Gagal menghapus: Rute dengan ID "${id}" tidak ditemukan.`,
      );
    }

    const [deletedRoute] = this.routes.splice(index, 1);
    return {
      message: `Rute "${deletedRoute.nama}" berhasil dihapus dari koleksi PedalRaya.`,
      deletedRoute,
    };
  }
}
