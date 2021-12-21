const mongoose = require('../');
import {ObjectId} from "mongoose";
import {Item, itemSchema} from "./item";

export const groupSchema = mongoose.Schema({
    name: String,
    items: [itemSchema]
});

export interface Group {
    _id: ObjectId
    name: string,
    items: Item[]
}