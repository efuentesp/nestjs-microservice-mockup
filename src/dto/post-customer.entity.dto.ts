import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PostCustomerEntityDTO {
  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  mail: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
