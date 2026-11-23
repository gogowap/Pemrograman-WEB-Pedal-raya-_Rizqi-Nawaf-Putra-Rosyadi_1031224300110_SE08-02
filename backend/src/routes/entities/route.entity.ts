export type RouteCategory = 'road' | 'gravel' | 'mtb' | 'touring' | 'leisure';
export type RouteDifficulty = 'mudah' | 'menengah' | 'sulit';

export interface RouteCheckpoint {
  km: string;
  nama: string;
  desc: string;
}

export interface RouteSurface {
  aspal: number;
  tanah: number;
  makadam: number;
}

export class Route {
  id: string;
  nama: string;
  kategori: RouteCategory;
  kategoriLabel: string;
  lokasi: string;
  kondisi: string;
  jarak: number;
  elevasi: number;
  durasi: string;
  kesulitan: RouteDifficulty;
  kesulitanLabel: string;
  rekomendasi: string;
  foto: string;
  deskripsi: string;
  ringkasanLengkap?: string;
  waktuTerbaik?: string;
  elevasiMaks?: string;
  permukaan?: RouteSurface;
  checkpoints?: RouteCheckpoint[];
  terverifikasi: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
