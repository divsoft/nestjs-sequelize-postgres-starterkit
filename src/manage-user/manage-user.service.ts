
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import { USERS_REPOSITORY } from '../constants';

@Injectable()
export class ManageUserService {
  constructor(
    @Inject(USERS_REPOSITORY) private usersRepository: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }
  
}