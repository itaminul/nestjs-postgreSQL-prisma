import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { Users } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [ProductsModule],
  controllers: [Users],
  providers: [UserService],
})
export class UserModule {}
