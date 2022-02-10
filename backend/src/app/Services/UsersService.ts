import { getCustomRepository, Repository } from "typeorm"
import { User } from "../models/User";
import { UsersRepository } from "../Repositories/UsersRepository"


class UsersService {
  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create({email, name, password }: User){

    const userExists = await this.usersRepository.findOne({
      email
    })

    if(userExists){
      return userExists;
    }

    const newUser = this.usersRepository.create({email, name, password});

    await this.usersRepository.save(newUser);

    return newUser;
  }

}

export { UsersService }