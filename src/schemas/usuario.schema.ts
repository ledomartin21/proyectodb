// src/schemas/usuario.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  nombre: string;

  @Prop()
  email: string;

  @Prop({ default: false })
  esPremium: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
