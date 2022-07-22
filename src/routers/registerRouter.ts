import { Router, Response, Request } from 'express';
import { RegisterController } from '../controllers/registerController';
const controller = new RegisterController();

export const registerRouter = Router();

registerRouter.post('/register', async (req: Request, res: Response) => {
  const response = await controller.register(req.body);
  return res.send(response);
});

registerRouter.get(
    '/register/confirmEmail',
    async (req: Request, res: Response) => {
      const response = await controller.confirmEmail(req.query.otp as string);
      return res.send(response);
    },
);
