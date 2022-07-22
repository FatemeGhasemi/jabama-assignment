import {NextFunction, Request, Response, Router} from "express";
import {LoginController} from "../controllers/loginController";
import {sendResponse} from "../utils/responseHandler";

const controller = new LoginController()
export const loginRouter = Router();

loginRouter.post('/login', async (req: Request, res: Response, next:NextFunction) => {
    try {
        const response = await controller.login(req.body);
        await sendResponse(res, response)
    } catch (e) {
        next(e)
    }
});