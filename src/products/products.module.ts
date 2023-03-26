import { Module } from '@nestjs/common';
import { Products } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [Products],
  providers: [ProductsService],
})
export class ProductsModule {}
