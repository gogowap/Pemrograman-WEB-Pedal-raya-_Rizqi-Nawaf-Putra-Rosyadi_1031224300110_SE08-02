import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  // Aktifkan CORS agar frontend Vite React (localhost:5173) bisa mengakses backend
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Aktifkan ValidationPipe secara global (Instruksi Bab 9 butir 5)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚴‍♂️ PedalRaya Backend berjalan di: http://localhost:${port}`);
  console.log(`📡 Endpoint Routes: http://localhost:${port}/routes`);
}
await bootstrap();
