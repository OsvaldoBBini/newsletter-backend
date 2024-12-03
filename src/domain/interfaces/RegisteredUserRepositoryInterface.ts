import { RegisteredUser } from "../entities/RegisteredUser";


export interface IRegisterUserRepository {
  findAll(): Promise<RegisteredUser[]>,
  register(newUser: RegisteredUser): Promise<void>,
  unregister(id: string): Promise<void>
}
