import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PutCustomerEntityDTO {
  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  mail: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
