const mongoose = require('./');
import {Item, itemSchema} from "./item";

export const groupSchema = mongoose.Schema({
    name: String,
    items: [itemSchema]
});

export interface Group {
    name: string,
    items: Item[]
}