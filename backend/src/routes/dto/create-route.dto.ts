import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsIn,
  IsNumber,
  Min,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import type { RouteCategory, RouteDifficulty } from '../entities/route.entity.js';

export class CreateRouteDto {
  @IsString({ message: 'Nama rute harus berupa teks/string' })
  @IsNotEmpty({ message: 'Nama rute wajib diisi' })
  @MinLength(3, { message: 'Nama rute minimal 3 karakter' })
  @MaxLength(100, { message: 'Nama rute maksimal 100 karakter' })
  nama: string;

  @IsString({ message: 'Kategori harus berupa teks/string' })
  @IsNotEmpty({ message: 'Kategori rute wajib diisi' })
  @IsIn(['road', 'gravel', 'mtb', 'touring', 'leisure'], {
    message: 'Kategori harus salah satu dari: road, gravel, mtb, touring, leisure',
  })
  kategori: RouteCategory;

  @IsString({ message: 'Lokasi harus berupa teks/string' })
  @IsNotEmpty({ message: 'Lokasi rute wajib diisi' })
  @MinLength(3, { message: 'Lokasi rute minimal 3 karakter' })
  lokasi: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'Jarak harus berupa angka (km)' })
  @Min(0.1, { message: 'Jarak rute minimal 0.1 km' })
  jarak: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'Elevasi harus berupa angka (meter)' })
  @Min(0, { message: 'Elevasi tidak boleh negatif' })
  elevasi: number;

  @IsString({ message: 'Tingkat kesulitan harus berupa teks/string' })
  @IsNotEmpty({ message: 'Tingkat kesulitan wajib diisi' })
  @IsIn(['mudah', 'menengah', 'sulit'], {
    message: 'Tingkat kesulitan harus: mudah, menengah, atau sulit',
  })
  kesulitan: RouteDifficulty;

  @IsOptional()
  @IsString({ message: 'Durasi harus berupa teks/string (misal: "2.5 Jam")' })
  durasi?: string;

  @IsOptional()
  @IsString({ message: 'Kondisi rute harus berupa teks/string' })
  kondisi?: string;

  @IsOptional()
  @IsString({ message: 'Rekomendasi ban/gear harus berupa teks/string' })
  rekomendasi?: string;

  @IsOptional()
  @IsString({ message: 'URL/path foto harus berupa teks/string' })
  foto?: string;

  @IsOptional()
  @IsString({ message: 'Deskripsi harus berupa teks/string' })
  deskripsi?: string;

  @IsOptional()
  @IsBoolean({ message: 'Status verifikasi harus berupa boolean (true/false)' })
  terverifikasi?: boolean;
}
