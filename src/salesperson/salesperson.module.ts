import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalespersonController } from './api/controller/salesperson.controller';
import { Salesperson, SalespersonSchema } from './domain/model/salesperson';
import { SalespersonServiceImp } from './application/service/salesperson.service.imp';
import { SalespersonRepositoryImp } from './infrastructure/repository/salesperson.repository.imp';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Salesperson.name,
        schema: SalespersonSchema,
      },
    ]),
  ],
  controllers: [SalespersonController],
  providers: [
    {
      provide: "SalespersonRepository",
      useClass: SalespersonRepositoryImp,
    },
    {
      provide: "SalespersonService",
      useClass: SalespersonServiceImp,
    }
  ]
})
export class SalepersonModule {}
