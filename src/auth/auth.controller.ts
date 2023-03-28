import { Controller, Post, Get, Body, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { LocalAuthGuard } from './local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // console.log('dto', dto);
    return this.authService.signup(dto);
  }
  // @UseGuards(LocalAuthGuard)
  @Post('signin')
  signin(@Body() dto: AuthDto, @Req() req, @Res() res) {
    console.log('req', res);
    return this.authService.signin(dto, req, res);
  }

  @Get('signout')
  signout( @Req() req, @Res() res) {
    return this.authService.signout(req, res);
  }
}
