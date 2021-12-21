const mongoose = require('./');
import {Group} from "./group";
import {groupSchema} from "./group";

export const listSchema = mongoose.Schema({
    user: String,
    name: String,
    groups: [groupSchema]
});

export interface Item {
    name: string,
    status: boolean
}

export interface List {
    user: string,
    name: string,
    groups: Group[]
}