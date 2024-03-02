import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusinessInput } from './dto/create-business.input';
import { UpdateBusinessInput } from './dto/update-business.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Business } from './schema/business.schema';

@Injectable()
export class BusinessService {
  constructor(@InjectModel(Business.name) private businessModel: Model<Business>) {}
  
  create(createBusinessInput: CreateBusinessInput): Promise <Business> {
    const createdBusiness = new this.businessModel(createBusinessInput);
    return createdBusiness.save();
  }

  findAll(): Promise<Business[]> {
    return this.businessModel.find().exec();
  }

  async findOne(id: string): Promise<Business> {
    const oneBusiness = await this.businessModel.findById(id).exec();

    if (!oneBusiness) throw new NotFoundException(`Business with ID ${id} not found`);

    return oneBusiness;
  }

  async update(id: string, updateBusinessInput: UpdateBusinessInput): Promise<Business> {
    
    const updateBusiness = await this.businessModel.findByIdAndUpdate(id, updateBusinessInput).exec();
    
    if (!updateBusiness) throw new NotFoundException(`Business with ID ${id} not found`);

    return updateBusiness
  }

  async remove(id: string) {
    const deleteBusiness = await this.businessModel.findByIdAndDelete(id)
    
    if (!deleteBusiness) throw new NotFoundException(`Business with ID ${id} not found`);

    return deleteBusiness
  }
}
