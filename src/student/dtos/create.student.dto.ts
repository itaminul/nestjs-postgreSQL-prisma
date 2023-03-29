import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  fatherName: string;
  @IsNotEmpty()
  @IsString()
  motherName: string;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsNumberString()
  @MaxLength(11)
  @MinLength(5)
  mobile: string;
  @IsNumber()
  @Min(40)
  @Max(50)
  age: number;
  @IsNumber()
  divisionId: number;
  @IsNumber()
  districtId: number;
  @IsNumber()
  policeStation: number;
  @IsString()
  address: string;
  @IsString()
  dateOfbirth: string;
}
