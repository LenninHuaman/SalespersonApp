import { ResponseUserDto } from "src/user/application/dto/response.user.dto";

export interface UserService {
  getAllUser(no_page: number, limit: number): Promise<any>;
  getUserByEmail(email: string): Promise<ResponseUserDto>;
}
