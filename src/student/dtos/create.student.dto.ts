import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsString, max, MAX, Max, MaxLength, MinLength } from 'class-validator';

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
