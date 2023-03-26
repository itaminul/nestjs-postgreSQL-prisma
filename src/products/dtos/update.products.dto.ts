import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdateProductsDto {
  @IsNotEmpty()
  setProductId: number;
  @IsNotEmpty()
  @IsInt()
  qty: number;
  @IsInt()
  activeStatus: number;
}
