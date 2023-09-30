import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUserLogin, IUserRegister, IUserToken } from './dto/user.register.dto';
import { MailerService } from '@nestjs-modules/mailer';
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly mailerService: MailerService
  ) {}

  async getAll(): Promise<any[]> {
    return this.usersRepository.find();
  }

  async login(dto:IUserLogin):Promise<IUserToken>{
    const user = await this.usersRepository.findOne({where:{email:dto.email}});
      if(!user){
        throw new Error('User with this email does`t exists');
      }

      const isPassEquals = await bcrypt.compare(dto.password, user.password);
      if(!isPassEquals){
        throw new Error('Wrong password');
      }

      const token = await jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn:'1m'});
      return {
        token: token,
        user: {id:user.id, email:user.email, firstName:user.firstName, lastName:user.lastName, secondName:user.secondName}
      };
  }

  async register(dto:IUserRegister):Promise<IUserToken>{
    try{
      const candidate = await this.usersRepository.findOne({where:{email:dto.email}});
      if(candidate){
        throw new Error('User with this email already exists');
      }

      const hashPassword = await bcrypt.hash(dto.password, 5);
      const activationLink = uuid.v4();
      const user = await this.usersRepository.create({...dto, password:hashPassword, activationLink});
      if(!user){
        throw new Error('User was not created');
      }
        
      await this.usersRepository.save(user);
      const token = await jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn:'1m'});
      //console.log(process.env.JWT_SECRET);
      return {
        token: token,
        user: {id:user.id, email:user.email, firstName:user.firstName, lastName:user.lastName, secondName:user.secondName}
      };
    }catch(e){
      throw e;
    }
  }

  async checkToken(token:string):Promise<IUserToken>{
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(new Date(decoded.exp*1000).toISOString());
      
      const user = await this.usersRepository.findOne({where:{id:decoded.id}});
      if(!user){
        throw new Error('User not found');
      }

      const newtoken = await jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn:'1m'});
      return {
        token: newtoken,
        user: {id:user.id, email:user.email, firstName:user.firstName, lastName:user.lastName, secondName:user.secondName}
      };
      
    }catch(e){
      throw e;
    }
  }

  async restore(email: string, code: string): Promise<number> {
    try{
      const user = await this.usersRepository.findOneOrFail({where:{email:email}});

      await this.mailerService.sendMail({
          to: email, // list of receivers
          from: 'mihhha985@yandex.ru', // sender address
          subject: 'Востоновление пароля ✔', // Subject line
          html: '<h3>' + code + '</h3>',
          text: code
        });

        return user.id
    }catch(e){
      throw e;
    }
  }

  async changePassword(pass:string, id:number): Promise<void> {
    pass = await bcrypt.hash(pass, 5);
    
    try{
      await this.usersRepository.update(id, {password:pass});
    }catch(e){
      throw e;
    }
  }
}
