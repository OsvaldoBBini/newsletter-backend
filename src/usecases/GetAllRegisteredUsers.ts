import { IRegisterUserRepository } from "../domain/interfaces/RegisteredUserRepositoryInterface";

export class GetAllRegisteredUsers {
  constructor(private registredUserRepository: IRegisterUserRepository) {}

  async execute() {
    return await this.registredUserRepository.findAll();
  }
}
