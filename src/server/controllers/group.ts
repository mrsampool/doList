import {Request, Response} from "express";
import {Document} from "mongoose";

const listModel = require('../models/list');

module.exports = {
    addGroup: function addGroupToList(req: Request, res: Response){
        const {listId, newGroupName} = req.params;
        listModel
            .findByListId(listId)
            .then((list:any) => {
                list.categories.push({ name: newGroupName, items: []});
                return listModel.updateByListId(listId, list);
            })
            .then((data:any) => res.send(data))
            .catch((err: Error) => console.log(err));
    }
};