import { Body, Get, Post, Query, Route, Tags } from 'tsoa';
import {
  ConfirmEmailResponse,
  RegisterRequest,
  RegisterResponse,
} from '../types/requestResponses';
import { MESSAGES } from '../utils/messages';
import {createUser, isEmailExists} from "../repositories/userRepository";
import {hashPassword} from "../utils/hashUtils";
import {getEmailAdapter} from "../adapters/adapterFactory";
import {generateOtp} from "../services/otpService";

@Route('/register')
@Tags('Register')
export class RegisterController {
  @Post('/')
  public async register(
    @Body()
    body: RegisterRequest,
  ): Promise<RegisterResponse> {
    //TODO add validator to check input data
    const email = body.email.trim()
    const isEmailExist =await isEmailExists(email)
    if (isEmailExist){
      throw new Error(MESSAGES.EMAIL_IS_REPETITIVE)
    }
    const hashedPassword = hashPassword(body.password)
    await createUser({
      email,
      firstName: body.firstName,
      lastName: body.lastName,
      hashedPassword,
      isEmailVerified: false
    })
    const code =await generateOtp(email)
    await getEmailAdapter().sendRegistrationOtpEmail({
      email,
      name: `${body.firstName} ${body.lastName}`,
      code
    })
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
