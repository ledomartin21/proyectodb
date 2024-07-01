import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VinoService } from './vino.service';
import { VinoController } from './vino.controller';
import { Vino, VinoSchema } from '../schemas/vino.schema';
import { Resena, ResenaSchema } from '../schemas/resena.schema';
import { Usuario, UsuarioSchema } from '../schemas/usuario.schema';
import { Bodega, BodegaSchema } from '../schemas/bodega.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vino.name, schema: VinoSchema },
      { name: Resena.name, schema: ResenaSchema },
      { name: Usuario.name, schema: UsuarioSchema },
      { name: Bodega.name, schema: BodegaSchema },
    ]),
  ],
  providers: [VinoService],
  controllers: [VinoController],
})
export class VinoModule {}
