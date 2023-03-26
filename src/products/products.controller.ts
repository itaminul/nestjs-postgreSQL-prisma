import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { CreateProductsDto } from './dtos/create.products.dto';
@Controller('products')
export class Products {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }
  @Post()
  async create(@Body() dto: CreateProductsDto) {
    return this.productsService.createProducts(dto);
  }
}
