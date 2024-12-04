import { Router } from "express";
import { RegisteredUserController } from "../../adapters/presentation/controllers/RegisteredUserController";

export const router = Router()

router.get('/all-users', (req, res) => new RegisteredUserController().getAll(req, res))
