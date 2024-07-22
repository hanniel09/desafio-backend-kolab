import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JWtPayload } from './jwt-payload.interface';
import { Response, response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ){}

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    const user = await this.usersService.findUsername(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JWtPayload = { username };
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
    return this.register(authCredentialsDto);
  }

  async register(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {username, password} = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);


    const createUserDto: CreateUserDto = {
      username,
      password: hashedPassword,
      parentUserId: null
    }
    const user = this.usersService.create(createUserDto);
  }

  async logout(response: Response): Promise<void> {
    response.clearCookie('Authentication');
    return;
  }
}
