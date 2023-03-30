import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { UserService } from './users.service';
@Controller('users')
export class Users {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getuserById(id);
  }

  @Get('/:id')
  async getUserByName(@Param('id') email: string) {
    return this.userService.getuserByUserName(email);
  }
}
