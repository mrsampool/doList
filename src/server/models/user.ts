import {UserInterface} from "../../lib/interfaces/UserInterface";

const mongoose = require('../db');
import {userSchema} from "../db/schemas/user";

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    find: function findUserByName(name: String){
        return new Promise((resolve) => {
            UserModel.find({ name }).then((userData: UserInterface) => resolve(userData));
        })
    }
}