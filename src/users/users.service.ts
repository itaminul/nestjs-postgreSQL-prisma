import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return this.prisma.user.findMany();
  }

  async getuserById(id: number) {
    const userId = Number(id);
    const result = this.prisma.user.findUnique({
      where: { id: userId },
    });
    return result;
  }

  async getuserByUserName(email: string) {
    // const userId = Number(id);
    const result = this.prisma.user.findFirst({
      where: { email: email },
    });
    return result;
  }
}





















