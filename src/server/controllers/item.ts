import {Request, Response} from "express";
import {ListInterface} from "../../lib/interfaces/ListInterface";
const model = require('../models/');

module.exports = {
    add: function addGroupToList(req: Request, res: Response){
        const {groupId} = req.params;
        const {name} = req.body;
        if (name) {
            model.item.add(groupId, { name, status: false })
                .then((editedList:ListInterface) => res.send(editedList))
                .catch((err: Error) => console.log(err));
        } else { res.sendStatus(400) }
    },
    rename: function renameGroupItem(req: Request, res: Response){
        const { groupId, itemId } = req.params;
        const { name } = req.body;
        model.item.rename(groupId, itemId, name)
            .then((editedList:ListInterface) => res.status(200).send(editedList))
            .catch((err: Error) => { console.log(err); res.status(500).send(err)})
    },
    setStatus: function setItemStatus(req: Request, res: Response) {
        const { groupId, itemId } = req.params;
        const { status } = req.body;
        model.item.setStatus(groupId, itemId, status)
            .then((editedList:ListInterface) => res.send(editedList))
            .catch((err: Error) => console.log(err))
    }
};