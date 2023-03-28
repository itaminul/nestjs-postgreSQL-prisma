import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/users/users.module';
import { UserService } from 'src/users/users.service';
@Module({
  imports: [UserModule, JwtModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer, UserService],
})
export class AuthModule {}
