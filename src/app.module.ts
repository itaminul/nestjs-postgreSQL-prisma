import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.model';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { Products } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
@Module({
  imports: [AuthModule, PrismaModule, UserModule, ProductsModule],
  controllers: [Products],
  providers: [ProductsService],
})
export class AppModule {}
