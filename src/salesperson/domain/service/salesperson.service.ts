import { ResponseSalespersonDto } from "src/salesperson/application/dto/response.salesperson.dto";
import { Salesperson } from "../model/salesperson";

export interface SalespersonService {
  getAllSalesperson(page_no: number, limit: number): Promise<ResponseSalespersonDto>;
  createSalesperson(salesperson: Salesperson): Promise<Salesperson>;
  createManySalesperson(salespersons: Salesperson[]): Promise<Salesperson[]>;
}
