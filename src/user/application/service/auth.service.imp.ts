import { Inject, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { UserRepository } from "src/user/domain/repository/user.repository";
import { AuthService } from "src/user/domain/service/auth.service";
import { LoginDto } from "../dto/login.dto";
import { SignUpDto } from "../dto/signup.dto";
import { UserMapper } from "../mapper/user.mapper";


export class AuthServiceImp implements AuthService {

    constructor(@Inject('UserRepository') private readonly userRepository: UserRepository, private jwtService: JwtService) {}

    async login(loginDto: LoginDto): Promise<any> {
        const validUser = await this.userRepository.getUserByEmail(loginDto.email);
        if (!validUser) {
            throw new UnauthorizedException('Invalid email or password');
        }
        const validPassword = await bcrypt.compare(loginDto.password, validUser.password);
        if (!validPassword) {
            throw new UnauthorizedException('Invalid email or password');
        }
        const token = this.jwtService.sign({email: validUser.email});
        return {token};
    }

    async signUp(signUpDto: SignUpDto): Promise<{token: string}> {
        const validEmail = await this.userRepository.getUserByEmail(signUpDto.email);
        if (validEmail) {
            throw new Error('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
        const user = await this.userRepository.createUser(UserMapper.toModel(signUpDto, hashedPassword));
        const token = this.jwtService.sign({email: user.email});
        return {token};
    }
}
