import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SetProduct } from '@prisma/client';
import { SetProductDto } from './dtos/set-product.dto';
import { SetUpdateProductDto } from './dtos/set-update-product.dto';
import { SetProductService } from './set-product.service';
@Controller('set-product')
export class SetProductController {
  constructor(private readonly setProductService: SetProductService) {}
  @Get()
  async getAll(): Promise<SetProduct[]> {
    return this.setProductService.getAll();
  }
  @Post()
  async create(@Body() dto: SetProductDto) {
    try {
      return await this.setProductService.create(dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Patch(':id')
  async update(@Param('id') id: number, @Body() dto: SetUpdateProductDto) {
    try {
      return await this.setProductService.update(id, dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Delete(':id')
  async deleteSetProduct(@Param('id') id: number) {
    try {
      return await this.setProductService.deleteSetProduct(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
