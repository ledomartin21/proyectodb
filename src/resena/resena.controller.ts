import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ResenaService } from './resena.service';

@Controller('resenas')
export class ResenaController {
  constructor(private readonly resenaService: ResenaService) {}

  @Get()
  async findAll() {
    return this.resenaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.resenaService.findOne(id);
  }

  @Post()
  async create(@Body() createResenaDto: any) {
    return this.resenaService.create(createResenaDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateResenaDto: any) {
    return this.resenaService.update(id, updateResenaDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.resenaService.delete(id);
  }
}
