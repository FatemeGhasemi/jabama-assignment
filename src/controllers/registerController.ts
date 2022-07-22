import { Body, Get, Post, Query, Route, Tags } from 'tsoa';
import {
  ConfirmEmailResponse, GeneralResponse,
  RegisterRequest,
  RegisterResponse, ResendVerificationEmailRequest,
} from '../types/requestResponses';
import { MESSAGES } from '../utils/messages';
import {createUser, findUserByEmail, isEmailExists, verifyUserEmail} from "../repositories/userRepository";
import {hashPassword} from "../utils/hashUtils";
import {getEmailAdapter} from "../adapters/adapterFactory";
import {generateOtp} from "../services/otpService";
import {getFromRedis, removeFromRedis} from "../utils/redisService";

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
    const user =await findUserByEmail(email)
    if (user && user.isEmailVerified){
      throw new Error(MESSAGES.EMAIL_IS_REPETITIVE)
    }
    if (user && !user.isEmailVerified){
      throw new Error(MESSAGES.RESEND_VERIFICATION_EMAIL)
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


  @Post('/resendVerificationEmail')
  public async resendVerificationEmail(
    @Body()
    body: ResendVerificationEmailRequest,
  ): Promise<GeneralResponse> {
    //TODO add validator to check input data
    const email = body.email.trim()
    const user =await findUserByEmail(email)
    if (!user){
      throw new Error(MESSAGES.INVALID_EMAIL)
    }
    if (user.isEmailVerified){
      throw new Error(MESSAGES.THIS_EMAIL_IS_ALREADY_VERIFIED)
    }
    const code =await generateOtp(email)
    await getEmailAdapter().sendRegistrationOtpEmail({
      email,
      name: `${user.firstName} ${user.lastName}`,
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
    const email =await getFromRedis(otp)
    if (!email){
      throw new Error(MESSAGES.INVALID_OTP)
    }
    const user = await findUserByEmail(email)
    if (!user){
      throw new Error(MESSAGES.INVALID_OTP)
    }
    if (user.isEmailVerified){
      throw new Error(MESSAGES.THIS_EMAIL_IS_ALREADY_VERIFIED)
    }
    await verifyUserEmail(email)
    await removeFromRedis(otp)
    return {
      success: true,
      message: MESSAGES.EMAIL_HAS_BEEN_CONFIRM,
    };
  }
}
