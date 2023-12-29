import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ResponseUserListDto } from 'src/user/application/dto/response.user.list.dto';
import { UserService } from 'src/user/domain/service/user.service';

@Controller('users')
export class UserController {
 
  constructor(@Inject('UserService') private readonly userService: UserService) {}
  
  @Get()
  async getAllUser(@Query('page') page: number, @Query('limit') limit: number): Promise<ResponseUserListDto> {
    const no = page >= 1 ? page : 1;
    const lim = limit >= 1 ? limit : 5;
    return await this.userService.getAllUser(no, lim);
  }

  @Get('email')
  async getUserByEmail(@Query('email') email: string) {
    return await this.userService.getUserByEmail(email);
  }
}
