import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductsDto {
  @IsString()
  @MaxLength(10, {
    message: 'Titile is too long',
  })
  productName: string;
  @IsNotEmpty()
  setProductId: number;
  @IsNotEmpty()
  @IsInt()
  qty: number;
  @IsBoolean()
  activeStatus: boolean;
}
