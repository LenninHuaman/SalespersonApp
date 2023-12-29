import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginDto } from 'src/user/application/dto/login.dto';
import { SignUpDto } from 'src/user/application/dto/signup.dto';
import { AuthService } from 'src/user/domain/service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(@Inject('AuthService') private readonly authService: AuthService) {}

    @Post('/signup')
    async signUp(@Body() signUpDto: SignUpDto): Promise<any> {
      return await this.authService.signUp(signUpDto);
    }

    @Post('/login')
    async login(@Body() loginDto: LoginDto): Promise<any> {
      return await this.authService.login(loginDto);
    }
}
