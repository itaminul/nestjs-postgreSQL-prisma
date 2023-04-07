import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.model';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { Products } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { StudentModule } from './student/student.module';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { SetProductController } from './set-product/set-product.controller';
import { SetProductModule } from './set-product/set-product.module';
import { SetProductService } from './set-product/set-product.service';
import { SetDivisionService } from './set-division/set-division-service';
import { SetDivision } from './set-division/set-division-controller';
import { SetDivisionModule } from './set-division/set-division-module';
@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    ProductsModule,
    StudentModule,
    SetProductModule,
    SetDivisionModule,
  ],
  controllers: [Products, StudentController, SetProductController, SetDivision],
  providers: [
    ProductsService,
    StudentService,
    SetProductService,
    SetDivisionService,
  ],
})
export class AppModule {}
