import { Module } from '@nestjs/common';
import { SetProductController } from './set-product.controller';
import { SetProductService } from './set-product.service';
@Module({
  controllers: [SetProductController],
  providers: [SetProductService],
})
export class SetProductModule {}
