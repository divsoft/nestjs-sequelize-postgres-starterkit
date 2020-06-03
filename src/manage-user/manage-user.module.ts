import { Module } from '@nestjs/common';
import { ManageUserController } from './manage-user.controller';
import { ManageUserService } from './manage-user.service';
import { usersProviders } from './manage-user.providers';
@Module({
  controllers: [ManageUserController],
  providers:[ManageUserService , ...usersProviders]
})
export class ManageUserModule {
  
}
