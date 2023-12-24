import { Body, Controller, Get, Inject, Post, Query } from "@nestjs/common";
import { ResponseSalespersonDto } from "src/salesperson/application/dto/response.salesperson.dto";
import { Salesperson } from "src/salesperson/domain/model/salesperson";
import { SalespersonService } from "src/salesperson/domain/service/salesperson.service";

@Controller('salespersons')
export class SalespersonController {
  constructor(@Inject("SalespersonService") private readonly salespersonService: SalespersonService) {}

  @Get()
  async getAllSalesperson(@Query("page") page: number, @Query("limit") limit: number): Promise<ResponseSalespersonDto> {
    let no = page >= 1 ? page : 1;
    let lim = limit >= 1 ? limit : 5;
    return await this.salespersonService.getAllSalesperson(no, lim);
  }

  @Post()
  async createSalesperson(@Body() salesperson: Salesperson): Promise<Salesperson> {
    return this.salespersonService.createSalesperson(salesperson);
  }

  @Post("/many")
  async createManySalesperson(@Body() salespersons: Salesperson[]): Promise<Salesperson[]> {
    return this.salespersonService.createManySalesperson(salespersons);
  }

  @Get("/test")
  test(): string {
    return "Hello World!";
  }
}
