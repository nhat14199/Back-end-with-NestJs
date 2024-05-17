import { ResponseDataToClient } from '../global/globalClass';
import {
  Body,
  Injectable,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDTO, userUpdateDTO } from 'src/DTO/user.dto';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/golbalEnum';
import { Users } from 'src/schemas/user.schemas';
import { UsersType } from 'src/types/user.type';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}
  async getAllUsers(): Promise<Users[]> {
    const response: any = await this.userModel.find().exec();
    return response;
  }
  async getDetailUser(id: string): Promise<Users[]> {
    const currentData = await this.userModel.find().exec();
    const result: any = currentData.find((item) => item._id.toString() === id);
    return result;
  }
  async postNewUser(userDTO: userDTO): Promise<Users[]> {
    const { Identification } = userDTO;
    try {
      const checkIdentification: any = await this.userModel
        .findOne({ Identification })
        .exec();

      if (checkIdentification) {
        throw new NotFoundException(
          `Identification ${checkIdentification.Identification} was exist , please try diffrent Identification `,
        );
      }
      const newUser: any = new this.userModel(userDTO);
      return await newUser.save();
    } catch (error) {
      throw error;
    }
  }
  async updateUser(
    userUpdateDTO: userUpdateDTO,
    idFromClient: any,
  ): Promise<Users[]> {
    try {
      const updateUser: any = await this.userModel
        .findByIdAndUpdate(
          idFromClient, //  condition for search
          { $set: userUpdateDTO }, // new data for undate
          { new: true }, // return data after update
        )
        .exec();
      // if (!updateUser) {
      //   throw new NotFoundException(
      //     `Can't find ${idFromClient}  , please try diffrent again `,
      //   );
      // }
      return updateUser;
    } catch (error) {
      throw error;
    }
  }
}
