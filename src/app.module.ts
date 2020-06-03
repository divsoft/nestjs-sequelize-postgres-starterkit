import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ManageUserModule } from './manage-user/manage-user.module';

@Module({
  imports: [DatabaseModule,ConfigModule.forRoot( {
    isGlobal: true
  }), ManageUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
