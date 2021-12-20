import {Request, Response} from "express";
import {Document} from "mongoose";

const model = require('../models/list');

module.exports = {
    addGroup: function addGroupToList(req: Request, res: Response){
        return new Promise((resolve, reject) => {
            console.log(req.params.listId);
            model.findByListId(req.params.listId)
                .then((list:any) => {
                    let groups = list.categories;
                    groups.push('new group');

                })
                .catch((err: Error) => res.status(404).send(err));
        });
    }
};