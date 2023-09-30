import { Controller, Query, Body, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './user.service';
import { IUserRegister, IUserToken, IUserLogin } from './dto/user.register.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAll(): Promise<any[]> {
    return await this.userService.getAll();
  }

  @Post('login')
  login(@Body() dto: IUserLogin):Promise<IUserToken>{
    return this.userService.login(dto);
  }

  @Post('register')
  async register(@Body() dto: IUserRegister):Promise<IUserToken>{
    return await this.userService.register(dto);
  }

  @Get('check')
  async checkToken(@Query('token') token:string):Promise<IUserToken>{
    return await this.userService.checkToken(token);
  }

  @Post('restore')
  async send(@Body() body: {email: string, code: string}):Promise<number> {
    console.log(body);
    return await this.userService.restore(body.email, body.code);
  }

  @Post('restore/:id')
  async check(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: {password: string}):Promise<void> {
    await this.userService.changePassword(body.password, id);
  }
}
