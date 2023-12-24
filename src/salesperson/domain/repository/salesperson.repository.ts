import { Salesperson } from '../model/salesperson';

export interface SalespersonRepository {
  getSalesPerson(): Promise<Salesperson[]>;
  createSalesPerson(salesperson: Salesperson): Promise<Salesperson>;
  createManySalesPerson(salesperson: Salesperson[]): Promise<Salesperson[]>;
}
