import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDivisionDto } from './dtos/create-division-dto';
import { UpdateDivisionDto } from './dtos/update-division-dto';
import { SetDivisionService } from './set-division-service';

@Injectable()
@Controller('set-division')
export class SetDivision {
  constructor(private setDivisionService: SetDivisionService) {}
  @Get()
  async getAll() {
    try {
      const result = await this.setDivisionService.getAll();
      return { message: 'Show successfully', result };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post()
  async create(@Body() dto: CreateDivisionDto) {
    try {
        // console.log('dto', dto);
      const result = await this.setDivisionService.create(dto);
      return { message: 'Create Successfully', result };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateDivisionDto) {
    try {
      return await this.setDivisionService.update(id, dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Delete(':id')
  async deleteDivision(@Param('id') id: number) {
    try {
      return this.setDivisionService.deleteDivision(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
