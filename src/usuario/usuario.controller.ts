import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Post()
  async create(@Body() createUsuarioDto: any) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUsuarioDto: any) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usuarioService.delete(id);
  }
}
