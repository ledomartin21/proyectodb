// src/schemas/resena.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Usuario } from './usuario.schema';

export type ResenaDocument = Resena & Document;

@Schema()
export class Resena {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Usuario', nullable: true })
  usuario: Usuario;

  @Prop({ default: Date.now })
  fechaReseña: Date;

  @Prop()
  puntaje: number;

  @Prop({ default: '' })
  texto: string;
}

export const ResenaSchema = SchemaFactory.createForClass(Resena);
