import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { HttpExceptionFilter } from './common/http-exception.filter';
import * as session from 'express-session';
import * as passport from 'passport';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.use(
    session({
      secret: 'Kaybord',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
