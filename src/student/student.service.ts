import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateStudentDto } from './dtos/create.student.dto';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return this.prisma.students.findMany();
  }

  async create(dto: CreateStudentDto) {
    const {
      name,
      fatherName,
      motherName,
      dateOfbirth,
      mobile,
      divisionId,
      districtId,
      email,
      policeStation,
      address,
      age,
    } = dto;
    
    return await this.prisma.students.create({
      data: {
        name,
        fatherName,
        motherName,
        dateOfbirth,
        mobile,
        divisionId,
        districtId,
        email,
        policeStation,
        address,
        age,
       },
    });
  }
  update() {
    return 'update';
  }
  deleteStudent() {
    return 'delete student';
  }
}
