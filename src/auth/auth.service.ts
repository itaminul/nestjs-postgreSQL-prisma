import { BadRequestException, ForbiddenException, Injectable, Req, Res } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constants';
import { Request, Response } from 'express';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(dto: AuthDto) {
    const { email, hashedPassword } = dto;
    const userFound = await this.prisma.user.findFirst({
      where: { email },
    });
    if (userFound) {
      throw new BadRequestException('Email already exists');
    }
    const hashedPasswor = await this.hashPassword(hashedPassword);
    await this.prisma.user.create({
      data: {
        email,
        hashedPassword: hashedPasswor,
      },
    });
    return { message: 'signup was successfully' };
  }
  
  async signin(dto: AuthDto, req: Request, res: Response) {
    const { email, hashedPassword } = dto;
    const userFound = await this.prisma.user.findFirst({
      where: { email },
    });
    // console.log(userFound);
    if (!userFound) {
      throw new BadRequestException('Wrong credentials');
    }

    const isMatch = await this.comparePassword({
      hashedPassword,
      hash: userFound.hashedPassword,
    });

    if (!isMatch) {
      throw new BadRequestException('Wrong credentials');
    }
    const token = await this.signToken({
      id: userFound.id,
      email: userFound.email,
    });

    if (!token) {
      throw new ForbiddenException();
    }
    res.cookie('token', token);
    return res.send({ message: 'Logge in successfully' });
  }

  async signout(req: Request, res: Response) {
    res.clearCookie('token');
    return res.send({ message: 'Logged out successfully' });
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltOrRounds);
    return hashPassword;
  }

  async comparePassword(args: { hashedPassword: string; hash: string }) {
    return await bcrypt.compare(args.hashedPassword, args.hash);
  }

  async signToken(args: { id: number; email: string }) {
    const payLoad = args;
   return this.jwt.signAsync(payLoad, { secret: jwtSecret });
  }
}
