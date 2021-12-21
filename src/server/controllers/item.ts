import {Request, Response} from "express";
const model = require('../models/');

module.exports = {
    add: function addGroupToList(req: Request, res: Response){
        const {listId, groupId} = req.params;
        const {name} = req.body;
        model.item.add(
            listId,
            groupId,
            {
                name,
                status: false
            }
        )
            .then((data:any) => res.send(data))
            .catch((err: Error) => console.log(err));
    },
    setStatus: function setItemStatus(req: Request, res: Response) {
        const { listId, groupId, itemId } = req.params;
        const { status } = req.body;
        model.item.setStatus(listId, groupId, itemId, status)
            .then((data:any) => res.send(data))
            .catch((err: Error) => console.log(err))
    }
};