import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './dist/app.module.js';

async function runTests() {
  console.log('=== MEMULAI PENGUJIAN ENDPOINT PEDALRAYA (NESTJS) ===\n');

  const app = await NestFactory.create(AppModule, { logger: false });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const server = await app.listen(3001);
  const baseUrl = 'http://localhost:3001/routes';

  const testCases = [
    {
      step: 1,
      title: 'GET ALL ROUTES (HTTP GET /routes)',
      method: 'GET',
      url: baseUrl,
      body: null,
    },
    {
      step: 2,
      title: 'GET SINGLE ROUTE (HTTP GET /routes/route-1)',
      method: 'GET',
      url: `${baseUrl}/route-1`,
      body: null,
    },
    {
      step: 3,
      title: 'POST CREATE ROUTE (HTTP POST /routes)',
      method: 'POST',
      url: baseUrl,
      body: {
        nama: 'Gowes Keliling Danau BSD Grand City',
        kategori: 'road',
        lokasi: 'BSD City, Tangerang Selatan',
        jarak: 25.5,
        elevasi: 120,
        kesulitan: 'mudah',
        durasi: '1.5 Jam',
        kondisi: 'Aspal Halus & Ramah Pesepeda',
        rekomendasi: 'Cocok untuk Road Bike & Sepeda Lipat',
        foto: '/assets/images/pexels-run-ffwpu-5687405.jpg',
        deskripsi: 'Rute santai akhir pekan menyusuri area hijau dan danau modern di BSD.',
        terverifikasi: true,
      },
    },
    {
      step: 4,
      title: 'PATCH UPDATE ROUTE (HTTP PATCH /routes/route-1)',
      method: 'PATCH',
      url: `${baseUrl}/route-1`,
      body: {
        kondisi: 'Aspal Baru Diaspal Ulang & Sangat Mulus',
        durasi: '2.0 Jam',
        jarak: 40.0,
      },
    },
    {
      step: 5,
      title: 'DELETE ROUTE (HTTP DELETE /routes/route-5)',
      method: 'DELETE',
      url: `${baseUrl}/route-5`,
      body: null,
    },
    {
      step: 6,
      title: 'ERROR 1: NotFoundException (HTTP GET /routes/route-999-tidak-ada)',
      method: 'GET',
      url: `${baseUrl}/route-999-tidak-ada`,
      body: null,
    },
    {
      step: 7,
      title: 'ERROR 2: ConflictException (HTTP POST /routes duplikat nama)',
      method: 'POST',
      url: baseUrl,
      body: {
        nama: 'Jalur Kabut Pinus Mangunan',
        kategori: 'gravel',
        lokasi: 'Bantul, Yogyakarta',
        jarak: 35.0,
        elevasi: 500,
        kesulitan: 'menengah',
      },
    },
    {
      step: 8,
      title: 'ERROR 3: BadRequestException via ValidationPipe (HTTP POST data invalid)',
      method: 'POST',
      url: baseUrl,
      body: {
        nama: 'A',
        kategori: 'pesawat_terbang',
        lokasi: 'Jakarta',
        jarak: -10,
        elevasi: -50,
        kesulitan: 'mustahil',
      },
    },
  ];

  for (const tc of testCases) {
    console.log(`================================================================`);
    console.log(`[TEST #${tc.step}] ${tc.title}`);
    console.log(`REQUEST: ${tc.method} ${tc.url}`);
    if (tc.body) {
      console.log(`REQUEST BODY:\n${JSON.stringify(tc.body, null, 2)}`);
    }

    try {
      const response = await fetch(tc.url, {
        method: tc.method,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: tc.body ? JSON.stringify(tc.body) : undefined,
      });

      const status = response.status;
      const statusText = response.statusText;
      const data = await response.json();

      console.log(`RESPONSE STATUS: ${status} ${statusText}`);
      console.log(`RESPONSE BODY:\n${JSON.stringify(data, null, 2)}\n`);
    } catch (err) {
      console.error(`ERROR EXECUTION:`, err);
    }
  }

  await app.close();
  console.log('=== SEMUA PENGUJIAN SELESAI DENGAN SUKSES! ===');
}

runTests();
