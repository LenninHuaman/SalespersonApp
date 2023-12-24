import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { Salesperson } from "src/salesperson/domain/model/salesperson";
import { SalespersonService } from "src/salesperson/domain/service/salesperson.service";

@Controller('salespersons')
export class SalespersonController {
  constructor(@Inject("SalespersonService") private readonly salespersonService: SalespersonService) {}

  @Get()
  async getAllSalesperson(): Promise<Salesperson[]> {
    return this.salespersonService.getAllSalesperson();
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
