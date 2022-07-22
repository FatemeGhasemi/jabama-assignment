import {NextFunction, Request, Response, Router} from "express";
import {LoginController} from "../controllers/loginController";

const controller = new LoginController()
export const loginRouter = Router();

loginRouter.post('/login', async (req: Request, res: Response, next:NextFunction) => {
    try {
        const response = await controller.login(req.body);
        return res.send(response);
    } catch (e) {
        next(e)
    }
});