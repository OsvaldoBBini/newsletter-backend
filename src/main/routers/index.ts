import { Router } from "express";
import { RegisterUserController } from "../../adapters/presentation/controllers/RegisterUserController";
import { GetAllRegisteredUsers } from "../../usecases/GetAllRegisteredUsers";
import { InMemoryRegisteredUserRepository } from "../../infra/repositories/InMemoryRegisteredUserRepository";

export const router = Router()

const registeredUserRepository = new InMemoryRegisteredUserRepository();
const getAllRegisteredUsers = new GetAllRegisteredUsers(registeredUserRepository);
const registeredUserController = new RegisterUserController(getAllRegisteredUsers);

router.get('/all-users', (req, res) => registeredUserController.getAll(req, res))
