import { Module } from '@nestjs/common';
import { MailService } from './mailer.service';
import { MailerController } from './mailer.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
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
  ],
  controllers: [MailerController],
  providers: [MailService],
})
export class MailModule {}
