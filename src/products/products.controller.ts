import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { CreateProductsDto } from './dtos/create.products.dto';
import { UpdateProductsDto } from './dtos/update.products.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthGuard } from '@nestjs/passport';
@Controller('products')
// @UseFilters(new HttpExceptionFilter())
export class Products {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
  ) {}
  // @UseGuards(AuthGuard('local'))
  // @UseGuards(AuthenticatedGuard)
  @Get()
  async getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }
  @Post()
  async create(@Body() dto: CreateProductsDto) {
    try {
      return this.productsService.createProducts(dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() udto: UpdateProductsDto) {
    try {
      return this.productsService.update(udto, id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    try {
      return this.productsService.deleteProduct(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
