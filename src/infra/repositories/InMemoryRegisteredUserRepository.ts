import { RegisteredUser } from "../../domain/entities/RegisteredUser";
import { IRegisterUserRepository } from "../../domain/interfaces/RegisteredUserRepositoryInterface";

export class InMemoryRegisteredUserRepository implements IRegisterUserRepository {
  private registeredUsers: RegisteredUser[] = [];
  
  async findAll(): Promise<RegisteredUser[]> {
    return this.registeredUsers;
  }
  
  async register(newUser: RegisteredUser): Promise<void> {
    this.registeredUsers.push(newUser);
  }
  async unregister(id: string): Promise<void> {
    this.registeredUsers = this.registeredUsers.filter((registeredUser: RegisteredUser) => registeredUser.id !== id)
  }
}
