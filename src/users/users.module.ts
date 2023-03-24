import { Module } from '@nestjs/common';
import { Users } from './users.controller';
import { UserService } from './users.service';

@Module({
  controllers: [Users],
  providers: [UserService],
})
export class UserModule {}
