// user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/schemas/user.shcemas';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    const data = await this.userService.findAll();
    console.log('data', data);
    return this.userService.findAll();
  }
}
