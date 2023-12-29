import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './api/controller/auth.controller';
import { UserController } from './api/controller/user.controller';
import { AuthServiceImp } from './application/service/auth.service.imp';
import { UserServiceImp } from './application/service/user.service.imp';
import { User, UserSchema } from './domain/model/user';
import { UserRepositoryImp } from './infrastructure/repository/user.repository.imp';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { env } from 'process';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: 3600
          }
        };
      }
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController, AuthController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImp
    },
    {
      provide: 'UserService',
      useClass: UserServiceImp
    },
    {
      provide: 'AuthService',
      useClass: AuthServiceImp
    },
    // JwtStrategy
  ],
  // exports: [JwtStrategy, PassportModule]
  exports: [PassportModule]
})
export class UserModule {}
