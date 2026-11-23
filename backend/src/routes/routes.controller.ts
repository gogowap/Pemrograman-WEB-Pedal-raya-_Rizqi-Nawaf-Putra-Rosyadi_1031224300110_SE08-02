import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RoutesService } from './routes.service.js';
import { CreateRouteDto } from './dto/create-route.dto.js';
import { UpdateRouteDto } from './dto/update-route.dto.js';

@Controller('routes')
export class RoutesController {
  // Dependency Injection: Controller menerima RoutesService lewat constructor injection
  constructor(private readonly routesService: RoutesService) {}

  /**
   * HTTP POST /routes
   * Menambahkan rute baru ke koleksi
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  /**
   * HTTP GET /routes
   * Mengambil semua daftar rute (mendukung filter opsional kategori, kesulitan, search)
   */
  @Get()
  findAll(
    @Query('kategori') kategori?: string,
    @Query('kesulitan') kesulitan?: string,
    @Query('search') search?: string,
  ) {
    return this.routesService.findAll({ kategori, kesulitan, search });
  }

  /**
   * HTTP GET /routes/:id
   * Mengambil satu rute spesifik berdasarkan ID
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(id);
  }

  /**
   * HTTP PATCH /routes/:id
   * Memperbarui rute tertentu berdasarkan ID
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRouteDto: UpdateRouteDto,
  ) {
    return this.routesService.update(id, updateRouteDto);
  }

  /**
   * HTTP DELETE /routes/:id
   * Menghapus rute berdasarkan ID
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(id);
  }
}
