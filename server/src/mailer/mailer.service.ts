import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async send(email: string, code: string) {
    const result = await this.mailerService.sendMail({
        to: 'biketoff.m@yandex.ru', // list of receivers
        from: 'mihhha985@yandex.ru', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      });

      console.log(result);
  }
}
