// src/schemas/vino.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Resena } from './resena.schema';
import { Bodega } from './bodega.schema';

export type VinoDocument = Vino & Document;

@Schema()
export class Vino {
  @Prop()
  nombre: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Resena' })
  reseña: Resena;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Bodega' })
  bodega: Bodega;

  @Prop()
  año: number;
}

export const VinoSchema = SchemaFactory.createForClass(Vino);
