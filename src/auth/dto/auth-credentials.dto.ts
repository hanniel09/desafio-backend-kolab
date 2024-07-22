import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, Max, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @ApiProperty({ example: 'JohnDoe' })
    @IsString()
    @MinLength(7)
    @MaxLength(30)
    username: string;

    @ApiProperty({ example: 'J@hnDoe1'})
    @IsString()
    @MinLength(8)
    @MaxLength(64)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password is too weak',
    })
    password: string;
}