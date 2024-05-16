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
  @IsNotEmpty({ message: "userId can't empty, Please enter your userId  " })
  @IsString({ message: 'Please Enter Valid userId' })
  userId: string;
  @IsNotEmpty({
    message: "Identification can't empty, Please enter your Identification  ",
  })
  @IsNumber()
  Identification: number;
  @IsNotEmpty({ message: "status can't empty, Please enter your status  " })
  @IsBoolean({ message: 'can not empty' })
  status: boolean;
}

export class userUpdateDTO {
  @IsNotEmpty({ message: "id can't empty  " })
  @IsString({ message: 'Please Enter id' })
  userName: string;
}
