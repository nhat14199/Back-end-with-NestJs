import { ResponseDataToClient } from 'src/global/globalClass';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { Users } from 'src/schemas/user.schemas';
import {
  HttpMessage,
  HttpStatus,
  httpMessagePost,
  httpStatusPost,
} from 'src/global/golbalEnum';
import { userDTO, userUpdateDTO } from 'src/DTO/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers() {
    try {
      const resp = await this.userService.getAllUsers();
      return new ResponseDataToClient<Users[]>(
        resp,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseDataToClient<Users[]>(
        error,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Get('/:id')
  async getUserDetail(
    @Param('id') id: string,
  ): Promise<ResponseDataToClient<Users[]>> {
    try {
      const resp: any = await this.userService.getDetailUser(id);
      return new ResponseDataToClient<Users[]>(
        resp,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseDataToClient<Users[]>(
        error,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  async postNewUser(
    @Body(new ValidationPipe()) userDTO: userDTO,
  ): Promise<ResponseDataToClient<Users[]>> {
    try {
      const newUser: any = await this.userService.postNewUser(userDTO);
      return new ResponseDataToClient<Users[]>(
        newUser,
        httpStatusPost.SUCCESS,
        httpMessagePost.SUCCESS,
      );
    } catch (error) {
      return new ResponseDataToClient<Users[]>(
        error,
        httpStatusPost.ERROR,
        httpMessagePost.ERROR,
      );
    }
  }
  @Put('/:id')
  async updateUser(
    @Body(new ValidationPipe()) userUpdateDTO: userUpdateDTO,
    @Param('id') idFromClient: any,
  ): Promise<ResponseDataToClient<Users[]>> {
    console.log('idFromClient', idFromClient);
    try {
      const updateUser: any = await this.userService.updateUser(
        userUpdateDTO,
        idFromClient,
      );
      return new ResponseDataToClient<Users[]>(
        updateUser,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseDataToClient<Users[]>(
        error,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
