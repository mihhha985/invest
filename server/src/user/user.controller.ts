import { Controller, Query, Body, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { IUserRegister, IUserToken, IUserLogin } from './dto/user.register.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  async getAll(): Promise<any[]> {
    return await this.appService.getAll();
  }

  @Post('login')
  login(@Body() dto: IUserLogin):Promise<IUserToken>{
    return this.appService.login(dto);
  }

  @Post('register')
  async register(@Body() dto: IUserRegister):Promise<IUserToken>{
    return await this.appService.register(dto);
  }

  @Get('check')
  async checkToken(@Query('token') token:string):Promise<IUserToken>{
    return await this.appService.checkToken(token);
  }
}
