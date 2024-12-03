import { GetAllRegisteredUsers } from "../../../usecases/GetAllRegisteredUsers";
import { Request, Response } from "express";

export class RegisterUserController {
  constructor (private getAllRegisteredUsers: GetAllRegisteredUsers) {}

  async getAll(req: Request, res: Response) {
    const users = await this.getAllRegisteredUsers.execute();
    res.json({body: users})
  }
}
