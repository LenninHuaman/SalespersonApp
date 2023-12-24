import { Inject, Injectable } from "@nestjs/common";
import { Salesperson } from "src/salesperson/domain/model/salesperson";
import { SalespersonRepository } from "src/salesperson/domain/repository/salesperson.repository";
import { SalespersonService } from "src/salesperson/domain/service/salesperson.service";

@Injectable()
export class SalespersonServiceImp implements SalespersonService {
  constructor(@Inject('SalespersonRepository') private readonly salespersonRepository: SalespersonRepository) {}

  async getAllSalesperson(): Promise<Salesperson[]> {
    return await this.salespersonRepository.getSalesPerson();
  }

  async createSalesperson(salesperson: Salesperson): Promise<Salesperson> {
    return await this.salespersonRepository.createSalesPerson(salesperson);
  }

  async createManySalesperson(salespersons: Salesperson[]): Promise<Salesperson[]> {
    return await this.salespersonRepository.createManySalesPerson(salespersons);
  }
}
