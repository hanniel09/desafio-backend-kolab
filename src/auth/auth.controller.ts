import { Body, Controller, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ApiBody, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ type: AuthCredentialsDto })
  @ApiResponse({ status: 200, description: 'The user has been Logged.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Post('login')
  async signIn(@Body() signInDto: AuthCredentialsDto, @Res() response: Response) {
    const { accessToken } = await this.authService.signIn(signInDto);
    response.cookie('Authentication', accessToken, { httpOnly: true });
    return response.send({ accessToken });
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register' })
  @ApiBody({ type: AuthCredentialsDto })
  @ApiResponse({ status: 200, description: 'The user has been registed.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Post('register')
  signUp(@Body() authCredentialsDto :AuthCredentialsDto){
    return this.authService.signUp(authCredentialsDto);
  }

  @ApiOperation({ summary: 'Logout' })
  @ApiResponse({ status: 200, description: 'The user has been Logged out.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('logout')
  @UseGuards(AuthGuard('jwt'))
  async logout(@Res() res: Response) {
    await this.authService.logout(res);
    return res.send({ message: 'Logged out successfully' });
  }
}
