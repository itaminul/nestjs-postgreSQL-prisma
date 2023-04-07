import { Module } from '@nestjs/common';
import { SetDivision } from './set-division-controller';
import { SetDivisionService } from './set-division-service';

@Module({
  controllers: [SetDivision],
  providers: [SetDivisionService],
})
export class SetDivisionModule {}
