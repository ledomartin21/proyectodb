import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vino, VinoDocument } from '../schemas/vino.schema';
import { Resena, ResenaDocument } from '../schemas/resena.schema';

@Injectable()
export class VinoService {
  constructor(
    @InjectModel(Vino.name) private vinoModel: Model<VinoDocument>,
    @InjectModel(Resena.name) private resenaModel: Model<ResenaDocument>,
  ) {}

  async listarResenas(vinoId: string) {
    return this.resenaModel
      .find({ vino: vinoId })
      .populate('usuario')
      .sort({ 'usuario.esPremium': -1, fechaReseña: 1 })
      .exec();
  }

  async findAll(): Promise<Vino[]> {
    return this.vinoModel.find().exec();
  }

  async findOne(id: string): Promise<Vino> {
    return this.vinoModel.findById(id).exec();
  }

  async create(createVinoDto: any): Promise<Vino> {
    const createdVino = new this.vinoModel(createVinoDto);
    return createdVino.save();
  }

  async update(id: string, updateVinoDto: any): Promise<Vino> {
    return this.vinoModel.findByIdAndUpdate(id, updateVinoDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Vino> {
    return this.vinoModel.findByIdAndDelete(id).exec();
  }
}
