import {Request, Response} from "express";
import {ListInterface} from "../db/schemas/list";
const model = require('../models');

module.exports = {
    add: function addGroupToList(req: Request, res: Response){
        const {listId} = req.params;
        const {name} = req.body;
        model.group.add(listId, name)
            .then((data:ListInterface) => res.send(data))
            .catch((err: Error) => console.log(err));
    }
};