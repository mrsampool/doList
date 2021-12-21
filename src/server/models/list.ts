export {};
const mongoose = require('../db');
import {List, listSchema} from "../db/schemas/list";
import {Document} from "mongoose";

const ListModel = mongoose.model('List', listSchema);

module.exports = {
    ListModel: ListModel,
    create: function createList(user: String, name: String){
        return new Promise((resolve) => {
            const newList = new ListModel({ user, name });
            newList.save().then((data: Document[]) => resolve(data));
        });
    },
    findByUser: function findListsByUser(user: String){
        return new Promise((resolve) => {
            ListModel.find({ user }).then((data: Document[]) => resolve(data));
        })
    },
    findByListId: function findListsByUser(_id: String){
        return new Promise((resolve) => {
            ListModel.findOne({ _id: _id }).then((data: Document[]) => resolve(data));
        })
    },
    /*
    updateByListId: function updateListByListId(_id: String, list: List){
        return new Promise((resolve, reject) => {
            ListModel.updateOne({_id}, list, )
                .then((data:any) => resolve(data))
                .catch((err: Error) => reject(err));
        })
    },
     */
}