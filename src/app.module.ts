import { Module } from '@nestjs/common';
import { SalepersonModule } from './salesperson/salesperson.module';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_CONNECTION_STRING,
    ),
    SalepersonModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
