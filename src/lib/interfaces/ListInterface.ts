import {GroupInterface} from "./GroupInterface";
import {ObjectId} from "mongoose";

export interface ListInterface {
    _id?: ObjectId | String | undefined,
    user: String,
    name: String,
    groups: GroupInterface[]
}