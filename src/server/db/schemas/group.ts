import {itemSchema} from "./item";

const mongoose = require('../');

export const groupSchema = mongoose.Schema({
    name: String,
    items: [itemSchema]
});

