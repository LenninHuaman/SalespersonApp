import { Salesperson } from '../model/salesperson';

export interface SalespersonRepository {
  getTotalSalesPerson(): Promise<number>;
  getSalesPerson(page_no: number, limit: number): Promise<Salesperson[]>;
  createSalesPerson(salesperson: Salesperson): Promise<Salesperson>;
  createManySalesPerson(salesperson: Salesperson[]): Promise<Salesperson[]>;
}
