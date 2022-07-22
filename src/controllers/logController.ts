import {Body, Get, Post, Route, Tags} from 'tsoa';
import {LoginRequest, LoginResponse, LogResponse,} from '../types/requestResponses';
import {MESSAGES} from '../utils/messages';
import {findUserByEmail} from "../repositories/userRepository";
import {hashPassword} from "../utils/hashUtils";
import {getLogs} from "../repositories/logRepository";

@Route('/logs')
@Tags('Logs')
export class LogController {
  @Get('/')
  public async getLogs(): Promise<LogResponse> {
    // We should add filter, pagination and authentication for this route
    return getLogs()
  }
}
