import {ObjectId} from "mongoose";
import {ItemInterface} from "./ItemInterface";

export interface GroupInterface {
    _id: ObjectId
    name: string,
    items: ItemInterface[]
}