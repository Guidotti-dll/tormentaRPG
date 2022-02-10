import { Request, Response } from "express";
import {UsersService} from '../Services/UsersService'


class UsersController {
  async create (request: Request, response: Response): Promise<Response>{
    const user = request.body

    const UserService = new UsersService()

    const newUser = await UserService.create(user)

    return response.json(newUser)
  }
}

export default new UsersController