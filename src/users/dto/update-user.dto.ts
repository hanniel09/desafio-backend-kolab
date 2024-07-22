import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'JohnDoe' })
  username?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'J@hnDoe1' })
  password?: string;

  @IsOptional()
  @ApiProperty({ example: 'uuid-of-parent-user' })
  parentUserId?: string;
}
