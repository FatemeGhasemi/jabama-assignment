import {Schema, model, Document} from "mongoose";

export interface LogInterface {
    ip: string;
    url: string;
    method: string;
    body?: any;
    query?: any;
    response?: any;
    statusCode?: number
}

export interface LogMongooseDocument extends LogInterface, Document {}

const logSchema = new Schema({
    ip: {type: String, required: true},
    url: {type: String, required: true},
    method: {type: String, required: true},
    body: {type: Object},
    query: {type: Object},
    response: {type: Object},
    statusCode: {type: Number},
}, {
    timestamps: true
})

export const logModel = model<LogMongooseDocument>('logs', logSchema, "log")
