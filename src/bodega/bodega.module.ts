import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BodegaService } from './bodega.service';
import { BodegaController } from './bodega.controller';
import { Bodega, BodegaSchema } from '../schemas/bodega.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bodega.name, schema: BodegaSchema }])],
  providers: [BodegaService],
  controllers: [BodegaController],
})
export class BodegaModule {}
