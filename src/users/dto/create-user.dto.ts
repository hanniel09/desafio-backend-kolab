import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'JohnDoe' })
  username: string; 

  @ApiProperty({ example: 'J@hnDoe1' })
  password: string;
  
  @ApiProperty({ example: 'uuid-of-parent-user' })
  parentUserId?: string
}
