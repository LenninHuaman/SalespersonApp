import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/domain/model/user";
import { UserRepository } from "src/user/domain/repository/user.repository";


@Injectable()
export class UserRepositoryImp implements UserRepository {

    constructor(@InjectModel('User') private userModel: Model<User>){}

    async getTotalUser(): Promise<number> {
        return await this.userModel.countDocuments();
    }

    async getUsers(page_no: number, limit: number): Promise<User[]> {
        let skip = (page_no - 1) * limit;
        return await this.userModel.find().skip(skip).limit(limit);
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({email: email});
    }

    async createUser(user: User): Promise<User> {
        return await this.userModel.create(user);
    }
}
