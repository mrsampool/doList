const mongoose = require('../');
import {groupSchema} from "./group";

export const listSchema = mongoose.Schema({
    user: String,
    name: String,
    groups: [groupSchema]
});

