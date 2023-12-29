import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Salesperson } from 'src/salesperson/domain/model/salesperson';
import { SalespersonRepository } from 'src/salesperson/domain/repository/salesperson.repository';

@Injectable()
export class SalespersonRepositoryImp implements SalespersonRepository {

  constructor(@InjectModel('Salesperson') private salespersonModel: Model<Salesperson>){}
  
  async getTotalSalesPerson(): Promise<number> {
    return await this.salespersonModel.countDocuments().exec();
  }

  async createManySalesPerson(salesperson: Salesperson[]): Promise<Salesperson[]> {
    return await this.salespersonModel.insertMany(salesperson);
  }

  async getSalesPerson(page_no: number, limit: number): Promise<Salesperson[]> {
    let skip = (page_no - 1) * limit;
    return await this.salespersonModel.find().skip(skip).limit(limit).exec()
  }

  async createSalesPerson(salesperson: Salesperson): Promise<Salesperson> {
    return this.salespersonModel.create(salesperson);
  }

}
