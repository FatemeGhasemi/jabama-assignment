import { Router, Response, Request } from 'express';
export const registerRouter = Router();

registerRouter.post('/register', async (req: Request, res: Response) => {
});

registerRouter.get(
  '/register/confirmEmail',
  async (req: Request, res: Response) => {

  },
);
