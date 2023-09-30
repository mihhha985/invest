import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailService) {}

  @Post()
  async send(@Body() body: {email: string, code: string}) {
    console.log(body);
   return await this.mailerService.send(body.email, body.code);
  }
}
