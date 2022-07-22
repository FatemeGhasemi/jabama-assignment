export interface EmailAdapterInterface {
  sendRegistrationOtpEmail(params: {
    email: string;
    code: string;
    name: string;
  }): Promise<void>;
}
