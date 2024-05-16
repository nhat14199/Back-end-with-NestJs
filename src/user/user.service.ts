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
    console.log('this is id', id);

    const currentData = await this.userModel.find().exec();
    const result: any = currentData.find((item) => item._id.toString() === id);

    return result;
  }
  async postNewUser(userDTO: userDTO): Promise<Users[]> {
    const { Identification, userId } = userDTO;
    const checkIdentification = await this.userModel
      .findOne({ Identification })
      .exec();
    const checkUserId = await this.userModel.findOne({ userId }).exec();
    if (checkIdentification) {
      // Nếu userId đã tồn tại, ném ra một ngoại lệ NotFoundException
      throw new NotFoundException(
        `Identification ${checkIdentification} was exist , please try diffrent Identification `,
      );
    }
    if (checkUserId) {
      throw new NotFoundException(
        `userId ${checkUserId} was exist , pkease try diffrent userId `,
      );
    }
    const newUser: any = new this.userModel(userDTO);
    console.log('userDTO', userDTO);
    console.log('newUser', newUser);

    return await newUser.save();
  }
  async updateUser(
    userUpdateDTO: userUpdateDTO,
    idFromClient: any,
  ): Promise<Users[]> {
    console.log('idFromClient', idFromClient);

    const updateUser: any = await this.userModel
      .findByIdAndUpdate(
        idFromClient, //  condition for search
        { $set: userUpdateDTO }, // new data for undate
        { new: true }, // return data after update
      )
      .exec();
    console.log('updateFields', userUpdateDTO);

    if (!updateUser) {
      throw new Error("can't find user for update ");
    }
    console.log('let see user after update ', updateUser);

    return updateUser;
  }
}
