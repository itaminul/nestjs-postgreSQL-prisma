import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductsDto } from './dtos/create.products.dto';
import { NextFunction } from 'express';
import { UpdateProductsDto } from './dtos/update.products.dto';
@Injectable()
export class ProductsService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return this.prisma.product.findMany({
      where: {
        activeStatus: 1,
      },
    });
  }

  async createProducts(dto: CreateProductsDto) {
    const { setProductId, qty } = dto;
    const result = await this.prisma.product.create({
      data: {
        setProductId,
        qty,
      },
    });

    return { message: 'Save successfully', result };
  }

  async update(udto: UpdateProductsDto, id: number) {
    const { setProductId, qty, activeStatus } = udto;
    console.log('up', udto);
    const result = await this.prisma.product.updateMany({
      where: {
        id: Number(id),
      },
      data: {
        setProductId,
        qty,
        activeStatus,
      },
    });
    return { message: 'Updatd successfully', result };
}

  async delete() {
    return 'delete products';
  }
}
