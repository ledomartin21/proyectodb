import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resena, ResenaDocument } from '../schemas/resena.schema';

@Injectable()
export class ResenaService {
  constructor(@InjectModel(Resena.name) private resenaModel: Model<ResenaDocument>) {}

  async findAll(): Promise<Resena[]> {
    return this.resenaModel.find().exec();
  }

  async findOne(id: string): Promise<Resena> {
    return this.resenaModel.findById(id).exec();
  }

  async create(createResenaDto: any): Promise<Resena> {
    const createdResena = new this.resenaModel(createResenaDto);
    return createdResena.save();
  }

  async update(id: string, updateResenaDto: any): Promise<Resena> {
    return this.resenaModel.findByIdAndUpdate(id, updateResenaDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Resena> {
    return this.resenaModel.findByIdAndDelete(id).exec();
  }
}
