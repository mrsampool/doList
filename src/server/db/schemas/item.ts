const mongoose = require('../');

export const itemSchema = mongoose.Schema({
    name: String,
    status: Boolean
});

