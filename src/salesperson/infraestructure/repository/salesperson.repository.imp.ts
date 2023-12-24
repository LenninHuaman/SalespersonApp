import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Salesperson } from 'src/salesperson/domain/model/salesperson';
import { SalespersonRepository } from 'src/salesperson/domain/repository/salesperson.repository';

@Injectable()
export class SalespersonRepositoryImp implements SalespersonRepository {

  constructor(@InjectModel('Salesperson') private salespersonModel: Model<Salesperson>){}
  
  async createManySalesPerson(salesperson: Salesperson[]): Promise<Salesperson[]> {
    return await this.salespersonModel.insertMany(salesperson);
  }

  async getSalesPerson(): Promise<Salesperson[]> {
    return await this.salespersonModel.find().exec();
  }

  async createSalesPerson(salesperson: Salesperson): Promise<Salesperson> {
    return this.salespersonModel.create(salesperson);
  }

}
