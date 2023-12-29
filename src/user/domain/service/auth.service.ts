import { LoginDto } from "src/user/application/dto/login.dto";
import { SignUpDto } from "src/user/application/dto/signup.dto";

export interface AuthService {
  login(loginDto: LoginDto): Promise<any>;
  signUp(SignupDto: SignUpDto): Promise<{token: string}>;
}
