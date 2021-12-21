export {};
const mongoose = require('../db');
import {Document} from "mongoose";

const listSchema = mongoose.Schema({
    user: String,
    name: String,
    groups: [
        {
            name: String,
            items: [
                {
                    name: String,
                    status: Boolean
                }
            ]
        }
        ]
});

const List = mongoose.model('List', listSchema);

module.exports = {
    List: List,
    create: function createList(user: String, name: String){
        return new Promise((resolve, reject) => {
            const newList = new List({ user, name });
            newList.save().then((data: Document[]) => resolve(data));
        });
    },
    findByUser: function findListsByUser(user: String){
        return new Promise((resolve, reject) => {
            List.find({ user }).then((data: Document[]) => resolve(data));
        })
    },
    findByListId: function findListsByUser(_id: String){
        return new Promise((resolve, reject) => {
            List.findOne({ _id: _id }).then((data: Document[]) => resolve(data));
        })
    },
    updateByListId: function updateListByListId(_id: String, list: any){
        return new Promise((resolve, reject) => {
            List.updateOne({_id}, list)
                .then((data:any) => resolve(data))
                .catch((err: Error) => reject(err));
        })
    },
}