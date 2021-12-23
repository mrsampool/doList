import {ObjectId} from "mongoose";

export interface ItemInterface {
    _id?: ObjectId | String | undefined
    name: string,
    status: boolean
}