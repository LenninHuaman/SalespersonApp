import { User } from "../model/user";


export interface UserRepository {
  getTotalUser(): Promise<number>;
  getUsers(page_no: number, limit: number): Promise<User[]>;
  getUserByEmail(email: string): Promise<User>;
  createUser(user: User): Promise<User>;
}
