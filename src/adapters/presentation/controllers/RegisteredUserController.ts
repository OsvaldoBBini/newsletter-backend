import { GetRegisteredUsersDIContainer } from "../../../infra/containers/GetRegisteredUsersDIContainer";
import { Request, Response } from "express";

export class RegisteredUserController {
  private getAllRegisteredUsers = GetRegisteredUsersDIContainer.getAllRegisteredUsers();

  async getAll(req: Request, res: Response) {
    const users = await this.getAllRegisteredUsers.execute();
    res.json({body: users})
  }
}
