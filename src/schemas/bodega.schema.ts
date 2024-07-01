// src/schemas/bodega.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BodegaDocument = Bodega & Document;

@Schema()
export class Bodega {
  @Prop()
  nombre: string;
}

export const BodegaSchema = SchemaFactory.createForClass(Bodega);
