import {LogInterface, logModel, LogMongooseDocument} from "../entities/log";
import {Types} from "mongoose";

export const createNewLog = async (data: LogInterface):Promise<LogMongooseDocument>=>{
    if (data?.body?.password){
        data.body.password = '*******'
    }
    return new logModel(data).save()
}
export const updateLogById = async (id:string, data: {
    response: any,
    statusCode: number
}):Promise<LogInterface | null>=>{
    return  logModel.findOneAndUpdate(
        {_id:Types.ObjectId(id)},
        data,
        {new: true})
}
export const getLogs = async ():Promise<LogInterface[]>=>{
    return logModel.find().sort({_id:-1})
}