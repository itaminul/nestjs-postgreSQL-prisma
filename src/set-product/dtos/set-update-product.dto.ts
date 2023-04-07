import { IsString } from 'class-validator';

export class SetUpdateProductDto {
  @IsString()
  productName: string;
  @IsString()
  manufacturerDate: string;
}
