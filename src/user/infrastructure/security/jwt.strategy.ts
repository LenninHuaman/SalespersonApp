import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserRepository } from "src/user/domain/repository/user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository){
    super({
      usernameField: 'email',
      passwordField: 'password'
    })
  }

  // async validate(email: string, password: string): Promise<any> {}
}
