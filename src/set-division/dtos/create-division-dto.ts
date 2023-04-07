import { IsNumber, IsString } from 'class-validator';

export class CreateDivisionDto {
  @IsString()
  divisionName: string;
  @IsNumber()
  activeStatus: number;
}
