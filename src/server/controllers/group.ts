import {Request, Response} from "express";
import {ListInterface} from "../../lib/interfaces/ListInterface";
const model = require('../models');

module.exports = {
    add: function addGroupToList(req: Request, res: Response){
        const {listId} = req.params;
        const {name} = req.body;
        model.group.add(listId, name)
            .then((data:ListInterface) => {
                res.send(data.groups[data.groups.length - 1])
            })
            .catch((err: Error) => console.log(err));
    }
};