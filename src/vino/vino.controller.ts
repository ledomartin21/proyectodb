import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VinoService } from './vino.service';

@Controller('vinos')
export class VinoController {
  constructor(private readonly vinoService: VinoService) {}

  @Get()
  async findAll() {
    return this.vinoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.vinoService.findOne(id);
  }

  @Get(':id/resenas')
  async listarResenas(@Param('id') id: string) {
    return this.vinoService.listarResenas(id);
  }

  @Post()
  async create(@Body() createVinoDto: any) {
    return this.vinoService.create(createVinoDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVinoDto: any) {
    return this.vinoService.update(id, updateVinoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.vinoService.delete(id);
  }
}
