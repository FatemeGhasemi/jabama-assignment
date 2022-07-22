import { EmailAdapterInterface } from './emailAdapterInterface';

export class MockEmailAdapter implements EmailAdapterInterface {
  public async sendRegistrationOtpEmail(params: {
    email: string;
    code: string;
    name: string;
  }): Promise<void> {
    console.log(
      'Mock email adapter, sendRegistrationOtpEmail() has been called',
      params,
    );
  }
}
