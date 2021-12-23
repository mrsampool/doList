const mongoose = require('../');

export const userSchema = mongoose.Schema({
    name: String,
    password: String
});