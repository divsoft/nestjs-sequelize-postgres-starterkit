import { Controller, Req, Get } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserDTO } from './dto/user.dto';
import { ManageUserService } from './manage-user.service';

@Controller('user')
export class ManageUserController {
    constructor(private manageUserService: ManageUserService) {}

    @Get()
    findAll() {
      return this.manageUserService.findAll();
    }
}
