import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Students } from '@prisma/client';
import { CreateStudentDto } from './dtos/create.student.dto';
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  async getAll(): Promise<Students[]> {
    console.log('ddd');
    return this.studentService.getAll();
  }
  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentService.create(dto);
  }

  @Patch()
  update() {
    return this.studentService.update();
  }
  @Delete()
  deleteStudent() {
    return this.studentService.deleteStudent();
  }
}
