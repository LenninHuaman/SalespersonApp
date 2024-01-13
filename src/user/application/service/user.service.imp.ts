import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/user/domain/model/user';
import { UserRepository } from 'src/user/domain/repository/user.repository';
import { UserService } from 'src/user/domain/service/user.service';
import { ResponseUserDto } from '../dto/response.user.dto';
import { UserMapper } from '../mapper/user.mapper';
import { ResponseUserListDto } from '../dto/response.user.list.dto';

@Injectable()
export class UserServiceImp implements UserService {

    constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

    async getAllUser(no_page: number, limit: number): Promise<ResponseUserListDto> {
        const total = await this.userRepository.getTotalUser();
        const users = await this.userRepository.getUsers(no_page, limit);
        return UserMapper.toResponseListDto(users, no_page, limit, total);
    }

    async getUserByEmail(email: string): Promise<ResponseUserDto> {
        const user: User = await this.userRepository.getUserByEmail(email);
        if(!user) throw new NotFoundException('User not found');
        return UserMapper.toResponseDto(user);
    }
}
