import { IsNotEmpty } from 'class-validator';

export class CreateProductsDto {
  @IsNotEmpty()
  setProductId: number;
  @IsNotEmpty()
  qty: number;
}
