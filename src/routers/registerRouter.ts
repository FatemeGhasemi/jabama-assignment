import {Router, Response, Request, NextFunction} from 'express';
import { RegisterController } from '../controllers/registerController';
const controller = new RegisterController();

export const registerRouter = Router();

registerRouter.post('/register', async (req: Request, res: Response, next:NextFunction) => {
    try {
        const response = await controller.register(req.body);
        return res.send(response);
    } catch (e) {
        next(e)
    }
});
registerRouter.post('/register/resendVerificationEmail', async (req: Request, res: Response, next:NextFunction) => {
    try {
        const response = await controller.resendVerificationEmail(req.body);
        return res.send(response);
    } catch (e) {
        next(e)
    }
});

registerRouter.get(
    '/register/confirmEmail',
    async (req: Request, res: Response, next:NextFunction) => {
        try {
            const response = await controller.confirmEmail(req.query.otp as string);
            return res.send(response);
        } catch (e) {
            next(e)
        }
    },
);
