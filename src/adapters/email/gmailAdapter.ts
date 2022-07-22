import { EmailAdapterInterface } from './emailAdapterInterface';

// When trying to import nodemailer in import ...{} ... from format , it got error
const nodemailer = require('nodemailer');

export class GmailAdapter implements EmailAdapterInterface {
  public async sendRegistrationOtpEmail(params: {
    email: string;
    code: string;
    name: string;
  }): Promise<void> {
    try {
      const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_GMAIL,
          // How to get gmail smtp password https://stackoverflow.com/a/45479968/4650625
          pass: process.env.SMTP_GMAIL_PASSWORD,
        }
      });

      const confirmEmailUrl = process.env.CONFIRM_EMAIL_URL;
      //TODO we can use handlebar and render an html to send it
      const message = {
        from: 'jabama-assignment@gmail.cpom', // Sender address
        to: params.email,
        subject: 'jabama-assignment otp' + new Date(), // Subject line
        text: `Dear ${params.name} \nClick on this to confirm your email  ${confirmEmailUrl}?otp=${params.code}`, // Plain text body
      };
      await transport.sendMail(message);
    } catch (e) {
      console.log('sendRegistrationOtpEmail() error', params);
      throw e;
    }
  }
}
