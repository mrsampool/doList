const bcrypt = require('bcrypt');
import {UserInterface} from "../../lib/interfaces/UserInterface";

const mongoose = require('../db');
import {userSchema} from "../db/schemas/user";

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    create: function createUser(userInfo: UserInterface){
        return new Promise((resolve) => {
            bcrypt.hash(userInfo.password, 10).then((hashed: string) => {
                userInfo.password = hashed;
                const newUser = new UserModel(userInfo);
                newUser.save().then((savedUser: UserInterface) => resolve(savedUser));
            })
        })
    },
    find: function findUserByName(name: String){
        return new Promise((resolve) => {
            UserModel.findOne({ name })
                .then((userData: UserInterface) => resolve(userData));
        })
    },
    findById: function findUserById(_id: String){
        return new Promise((resolve) => {
            UserModel.findOne({ _id })
                .then((userData: UserInterface) => resolve(userData));
        })
    }

}