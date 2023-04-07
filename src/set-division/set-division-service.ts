import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { async } from 'rxjs';
import { CreateDivisionDto } from './dtos/create-division-dto';
import { UpdateDivisionDto } from './dtos/update-division-dto';

@Injectable()
export class SetDivisionService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.setDivision.findMany({
      where: {
        activeStatus: 1,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async create(dto: CreateDivisionDto) {
    const { divisionName, activeStatus } = dto;
    //console.log('ser', dto);
    return await this.prisma.setDivision.create({
      data: {
        divisionName,
        activeStatus,
      },
    });
  }

  async update(id: number, dto: UpdateDivisionDto) {
    const { divisionName, activeStatus } = dto;
    return await this.prisma.setDivision.update({
      where: {
        id: Number(id),
      },
      data: {
        divisionName,
        activeStatus,
      },
    });
  }

  async deleteDivision(id: number) {
    return await this.prisma.setDivision.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
