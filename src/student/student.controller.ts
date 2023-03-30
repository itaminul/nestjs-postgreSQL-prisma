import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Session,
  UseGuards,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Students } from '@prisma/client';
import { CreateStudentDto } from './dtos/create.student.dto';
import { UpdateStudentDto } from './dtos/update.student.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AuthGuard } from '@nestjs/passport';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { session } from 'passport';
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  @UseGuards(AccessTokenGuard)
  // @UseGuards(AuthGuard('local'))
  // @UseGuards(AuthenticatedGuard)
  async getAll(@Session() session): Promise<Students[]> {
    console.log('ddd');
    return this.studentService.getAll();
  }
  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateStudentDto) {
    try {
      return this.studentService.update(dto, id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    try {
      return this.studentService.deleteStudent(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
