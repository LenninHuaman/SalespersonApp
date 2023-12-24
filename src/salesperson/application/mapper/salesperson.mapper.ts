import { Salesperson } from "src/salesperson/domain/model/salesperson";

export class SalespersonMapper {
    static toResponseSalespersonDto(salespersons: Salesperson[], page: number, limit: number, total: number) {
        return {
            data: salespersons,
            page: page,
            total_page: Math.ceil(total / limit),
            limit: limit,
        };
    }
}
