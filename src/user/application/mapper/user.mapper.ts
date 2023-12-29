import { User } from "src/user/domain/model/user";
import { SignUpDto } from "../dto/signup.dto";
import { ResponseUserDto } from "../dto/response.user.dto";
import { ResponseUserListDto } from "../dto/response.user.list.dto";

export class UserMapper {
  static toModel(SignUpDto: SignUpDto, hashedPassword: string): User {
    const user: User = {
      email: SignUpDto.email,
      password: hashedPassword,
      name: SignUpDto.name,
    };
    return user;
  }

  static toResponseDto(user: User): ResponseUserDto {
    const responseUserDto: ResponseUserDto = {
      email: user.email,
      name: user.name,
    };
    return responseUserDto;
  }

  static toResponseListDto(users: User[], no_page: number, limit: number, total: number): ResponseUserListDto {
    const dtoList: ResponseUserDto[] = users.map((user) => {
      const responseUserDto: ResponseUserDto = {
        email: user.email,
        name: user.name,
      };
      return responseUserDto;
    });

    return {
      data: dtoList,
      page: no_page,
      total_page: Math.ceil(total / limit),
      limit: limit
    } 
  }
}
