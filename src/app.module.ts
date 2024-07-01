import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { BodegaModule } from './bodega/bodega.module';
import { ResenaModule } from './resena/resena.module';
import { VinoModule } from './vino/vino.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Configura la conexión a MongoDB
    UsuarioModule,
    BodegaModule,
    ResenaModule,
    VinoModule,
  ],
})
export class AppModule {}
