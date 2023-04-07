import { IsNumber, IsString } from 'class-validator';

export class UpdateDivisionDto {
  @IsString()
  divisionName: string;
  @IsNumber()
  activeStatus: number;
}
