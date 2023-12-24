import { Salesperson } from "src/salesperson/domain/model/salesperson";

export class ResponseSalespersonDto {
  data: Salesperson[];
  page: number;
  total_page: number;
  limit: number;
}
