import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SetProductDto } from './dtos/set-product.dto';
import { SetUpdateProductDto } from './dtos/set-update-product.dto';

@Injectable()
export class SetProductService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return this.prisma.setProduct.findMany({
      where: {
        activeStatus: 1,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async create(dto: SetProductDto) {
    const { productName, manufacturerDate } = dto;
    return await this.prisma.setProduct.create({
      data: {
        productName,
        manufacturerDate: new Date(manufacturerDate).toLocaleDateString(),
      },
    });
  }

  async update(id, dto: SetUpdateProductDto) {
    const { productName, manufacturerDate } = dto;
    return await this.prisma.setProduct.update({
      where: {
        id: Number(id),
      },
      data: {
        productName,
        manufacturerDate: new Date(manufacturerDate).toLocaleDateString(),
      },
    });
  }

  async deleteSetProduct(id) {
    return await this.prisma.setProduct.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
