import {Body, Post, Route, Tags} from 'tsoa';
import {LoginRequest, LoginResponse,} from '../types/requestResponses';
import {MESSAGES} from '../utils/messages';
import {findUserByEmail} from "../repositories/userRepository";
import {hashPassword} from "../utils/hashUtils";

@Route('/login')
@Tags('Login')
export class LoginController {
  @Post('/')
  public async login(
    @Body()
    body: LoginRequest,
  ): Promise<LoginResponse> {
    //TODO add validator to check input data
    const email = body.email.trim()
    const hashedPassword = hashPassword(body.password)
    const user =await findUserByEmail(email)
    if (!user ||  user.hashedPassword !== hashedPassword){
      throw new Error(MESSAGES.INVALID_EMAIL_OR_PASSWORD)
    }
    if (!user.isEmailVerified){
      throw new Error(MESSAGES.VERIFY_YOUR_EMAIL_BEFORE_LOGIN)
    }
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isEmailVerified: user.isEmailVerified
    };
  }


}
