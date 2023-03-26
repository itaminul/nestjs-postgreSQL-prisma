import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductsDto } from './dtos/create.products.dto';

@Injectable()
export class ProductsService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return this.prisma.product.findMany();
  }

  async createProducts(dto: CreateProductsDto) {
    const { setProductId, qty } = dto;
    //  console.log("set", qty);
    const result = await this.prisma.product.create({
      data: {
        setProductId: 1,
        qty: 2,
      },
    });

    return { message: 'Save successfully' };
  }

  async update() {
    return 'update products';
  }

  async delete() {
    return 'delete products';
  }
}
