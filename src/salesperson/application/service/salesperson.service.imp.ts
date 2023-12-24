import { Inject, Injectable } from "@nestjs/common";
import { Salesperson } from "src/salesperson/domain/model/salesperson";
import { SalespersonRepository } from "src/salesperson/domain/repository/salesperson.repository";
import { SalespersonService } from "src/salesperson/domain/service/salesperson.service";
import { SalespersonMapper } from "../mapper/salesperson.mapper";
import { ResponseSalespersonDto } from "../dto/response.salesperson.dto";

@Injectable()
export class SalespersonServiceImp implements SalespersonService {
  constructor(@Inject('SalespersonRepository') private readonly salespersonRepository: SalespersonRepository) {}

  async getAllSalesperson(no_page: number, limit: number): Promise<ResponseSalespersonDto> {
    let total = await this.salespersonRepository.getTotalSalesPerson();
    let salespersons = await this.salespersonRepository.getSalesPerson(no_page, limit);
    return SalespersonMapper.toResponseSalespersonDto(salespersons, no_page, limit, total);
  }

  async createSalesperson(salesperson: Salesperson): Promise<Salesperson> {
    return await this.salespersonRepository.createSalesPerson(salesperson);
  }

  async createManySalesperson(salespersons: Salesperson[]): Promise<Salesperson[]> {
    return await this.salespersonRepository.createManySalesPerson(salespersons);
  }
}
