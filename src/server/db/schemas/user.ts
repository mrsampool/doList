const mongoose = require('../');

export const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});