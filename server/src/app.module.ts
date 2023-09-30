import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import {User} from './user/user.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: 'mihhha985',
          pass: 'sczrvcaoexjtfxvh',
        }
      }
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
