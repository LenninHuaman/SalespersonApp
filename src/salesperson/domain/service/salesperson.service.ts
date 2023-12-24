import { Salesperson } from "../model/salesperson";

export interface SalespersonService {
  getAllSalesperson(): Promise<Salesperson[]>;
  createSalesperson(salesperson: Salesperson): Promise<Salesperson>;
  createManySalesperson(salespersons: Salesperson[]): Promise<Salesperson[]>;
}
