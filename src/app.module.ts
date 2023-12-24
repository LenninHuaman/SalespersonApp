import { Module } from '@nestjs/common';
import { SalepersonModule } from './salesperson/salesperson.module';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_CONNECTION_STRING,
    ),
    SalepersonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
