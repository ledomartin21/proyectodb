import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResenaService } from './resena.service';
import { ResenaController } from './resena.controller';
import { Resena, ResenaSchema } from '../schemas/resena.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Resena.name, schema: ResenaSchema }])],
  providers: [ResenaService],
  controllers: [ResenaController],
})
export class ResenaModule {}
