import {UserInterface, userModel} from "../entities/user";

export const createUser = (data: UserInterface) :Promise<UserInterface>=> {
    return new userModel(data).save()
}

export const isEmailExists = async (email:string) :Promise<boolean>=> {
    const user = await userModel.findOne({email})
    return Boolean(user)

}
export const findUserByEmail = async (email:string) :Promise<UserInterface | null>=> {
    return userModel.findOne({email})
}
export const verifyUserEmail = async (email:string) :Promise<UserInterface | null>=> {
    return userModel.findOneAndUpdate({email},{isEmailVerified: true}, {new:true})
}