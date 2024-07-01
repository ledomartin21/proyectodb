import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bodega, BodegaDocument } from '../schemas/bodega.schema';

@Injectable()
export class BodegaService {
  constructor(@InjectModel(Bodega.name) private bodegaModel: Model<BodegaDocument>) {}

  async findAll(): Promise<Bodega[]> {
    return this.bodegaModel.find().exec();
  }

  async findOne(id: string): Promise<Bodega> {
    return this.bodegaModel.findById(id).exec();
  }

  async create(createBodegaDto: any): Promise<Bodega> {
    const createdBodega = new this.bodegaModel(createBodegaDto);
    return createdBodega.save();
  }

  async update(id: string, updateBodegaDto: any): Promise<Bodega> {
    return this.bodegaModel.findByIdAndUpdate(id, updateBodegaDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Bodega> {
    return this.bodegaModel.findByIdAndDelete(id).exec();
  }
}
