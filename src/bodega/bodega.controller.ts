import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BodegaService } from './bodega.service';

@Controller('bodegas')
export class BodegaController {
  constructor(private readonly bodegaService: BodegaService) {}

  @Get()
  async findAll() {
    return this.bodegaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bodegaService.findOne(id);
  }

  @Post()
  async create(@Body() createBodegaDto: any) {
    return this.bodegaService.create(createBodegaDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBodegaDto: any) {
    return this.bodegaService.update(id, updateBodegaDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bodegaService.delete(id);
  }
}
