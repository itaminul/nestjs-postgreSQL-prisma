import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateProductsDto {
  @IsNotEmpty()
  setProductId: number;
  @IsNotEmpty()
  @IsInt()
  qty: number;
}
