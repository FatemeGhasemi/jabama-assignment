import { Body, Get, Post, Query, Route, Tags } from 'tsoa';
import {
  ConfirmEmailResponse,
  RegisterRequest,
  RegisterResponse,
} from '../types/requestResponses';
import { MESSAGES } from '../utils/messages';

@Route('/register')
@Tags('Register')
export class RegisterController {
  @Post('/')
  public async register(
    @Body()
    body: RegisterRequest,
  ): Promise<RegisterResponse> {
    //TODO Check uniqueness of email
    //TODO Create a non active user
    //TODO Generate an otp code and save it in redis
    //TODO Send email
    return {
      success: true,
      message: MESSAGES.EMAIL_HAS_BEEN_SENT,
    };
  }

  @Get('/confirmEmail')
  public async confirmEmail(
    @Query('otp') otp: string,
  ): Promise<ConfirmEmailResponse> {
    // TODO Check otp in redis
    //
    return {
      success: true,
      message: MESSAGES.EMAIL_HAS_BEEN_CONFIRM,
    };
  }
}
