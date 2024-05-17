import {
  IsNotEmpty,
  Length,
  IsString,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class userDTO {
  @IsNotEmpty({ message: "userName can't empty, Please enter your name  " })
  @IsString({ message: 'Please Enter Valid Name' })
  userName: string;

  @IsNotEmpty({ message: "address can't empty, Please enter your address  " })
  @IsString({ message: 'Please Enter Valid address' })
  address: string;

  @IsNumber()
  Identification: number;
}

export class userUpdateDTO {
  @IsString({ message: 'User name must be string ' })
  userName: string;
  @IsString({ message: 'User address must be string ' })
  @IsNotEmpty({ message: 'User address can not empty ' })
  address: string;
}
