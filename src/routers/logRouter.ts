import {NextFunction, Request, Response, Router} from "express";
import {sendResponse} from "../utils/responseHandler";
import {LogController} from "../controllers/logController";

const controller = new LogController()
export const logRouter = Router();

logRouter.get('/logs', async (req: Request, res: Response, next:NextFunction) => {
    try {
        const response = await controller.getLogs();
        await sendResponse(res, response)
    } catch (e) {
        next(e)
    }
});