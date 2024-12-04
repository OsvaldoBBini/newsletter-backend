import { IRegisterUserRepository } from "../../domain/interfaces/RegisteredUserRepositoryInterface";
import { GetAllRegisteredUsers } from "../../usecases/GetAllRegisteredUsers";
import { InMemoryRegisteredUserRepository } from "../repositories/InMemoryRegisteredUserRepository";

export class GetRegisteredUsersDIContainer {
  private static _registeredUserRepository: IRegisterUserRepository = new InMemoryRegisteredUserRepository();

  static setRegisteredUserRepository(repository: IRegisterUserRepository) {
    this._registeredUserRepository = repository;
  }

  static getRegisteredUserRepository() {
    return this._registeredUserRepository;
  }

  static getAllRegisteredUsers() {
    return new GetAllRegisteredUsers(this.getRegisteredUserRepository());
  }
}
