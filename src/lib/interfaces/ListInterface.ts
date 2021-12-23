import {GroupInterface} from "./GroupInterface";
import {ObjectId} from "mongoose";

export interface ListInterface {
    _id?: ObjectId | string | undefined,
    user: string,
    name: string,
    groups: GroupInterface[]
}