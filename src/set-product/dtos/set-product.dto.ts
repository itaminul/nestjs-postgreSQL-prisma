import { IsString } from 'class-validator';

export class SetProductDto {
  @IsString()
  productName: string;
  @IsString()
  manufacturerDate: string;
}
