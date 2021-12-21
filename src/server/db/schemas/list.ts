const mongoose = require('../');
import {GroupInterface} from "./group";
import {groupSchema} from "./group";

export const listSchema = mongoose.Schema({
    user: String,
    name: String,
    groups: [groupSchema]
});

export interface ListInterface {
    user: string,
    name: string,
    groups: GroupInterface[]
}