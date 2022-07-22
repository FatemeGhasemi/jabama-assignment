import {Schema, model, Document} from "mongoose";

export interface UserInterface {
    firstName: string;
    lastName: string;
    email: string;
    hashedPassword: string;
    isEmailVerified : boolean
}

interface UserMongooseDocument extends UserInterface, Document {
}

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    hashedPassword: {type: String, required: true},
    isEmailVerified: {type: Boolean, default: false},
},{
    timestamps: true
})

export const userModel = model<UserMongooseDocument>('users', userSchema, "user")
