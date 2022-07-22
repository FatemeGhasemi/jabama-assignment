import { v4 as uuidv4 } from 'uuid';
import {setInRedis} from "../utils/redisService";

export const generateOtp =async (email: string) : Promise<string>=>{
    const otp = uuidv4();
    const THREE_MINUTES = 60*30
    await setInRedis({
        key: otp,
        value: email,
        expiration: process.env.OTP_LIFETIME_IN_SECOND ? Number(process.env.OTP_LIFETIME_IN_SECOND): THREE_MINUTES
    })
    return otp
}