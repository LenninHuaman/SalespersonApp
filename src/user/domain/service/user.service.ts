import { ResponseUserDto } from "src/user/application/dto/response.user.dto";
import { ResponseUserListDto } from "src/user/application/dto/response.user.list.dto";

export interface UserService {
  getAllUser(no_page: number, limit: number): Promise<ResponseUserListDto>;
  getUserByEmail(email: string): Promise<ResponseUserDto>;
}
