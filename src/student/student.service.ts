import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateStudentDto } from './dtos/create.student.dto';
import { UpdateStudentDto } from './dtos/update.student.dto';

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
  async update(dto: UpdateStudentDto, id: number) {
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
    const result = await this.prisma.students.update({
      where: {
        id: Number(id),
      },
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
    return { message: 'Update Successfully', result };
  }
  async deleteStudent(id: number) {
    const deletBiId = Number(id);
    return await this.prisma.students.delete({
      where: {
        id: deletBiId,
      },
    });
  }
}
