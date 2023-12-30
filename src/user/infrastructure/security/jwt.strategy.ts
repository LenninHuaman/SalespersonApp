import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepository } from "src/user/domain/repository/user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(@Inject('UserRepository') private readonly userRepository: UserRepository){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    })
  }

  async validate(payload: any): Promise<any> {
    const { email } = payload;
    const user = this.userRepository.getUserByEmail(email);
    if(!user){
      throw new UnauthorizedException("Login before to use this endpoint");
    }
    return user;
  }
}
