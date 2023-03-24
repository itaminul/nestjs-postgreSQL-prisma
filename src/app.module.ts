import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.model';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
@Module({
  imports: [AuthModule, PrismaModule, UserModule],
})
export class AppModule {}
