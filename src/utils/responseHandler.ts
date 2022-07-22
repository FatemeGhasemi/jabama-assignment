import {Response} from "express";
import {updateLogById} from "../repositories/logRepository";


export const sendResponse = async (res:Response, data: any, statusCode =200)=>{
    await updateLogById(res?.locals?.logId, {
        response: data,
        statusCode
    })
    res.status(statusCode).send(data)
}