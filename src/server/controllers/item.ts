import {Request, Response} from "express";
import {ListInterface} from "../../lib/interfaces/ListInterface";
import {ItemInterface} from "../../lib/interfaces/ItemInterface";
const model = require('../models/');

module.exports = {
    add: function addGroupToList(req: Request, res: Response){
        const {groupId} = req.params;
        const {name} = req.body;
        if (name) {
            model.item.add(groupId, { name, status: false })
                .then((editedList:ListInterface) => {
                    const addedItem: ItemInterface | undefined = editedList
                        .groups.find((group) => group._id.toString() === groupId)
                        ?.items.find((item) => item.name === name);
                    addedItem
                        ?  res.status(201).send(addedItem)
                        :  res.status(500).send('Insertion error');
                })
                .catch((err: Error) => console.log(err));
        } else { res.sendStatus(400) }
    },
    rename: function renameGroupItem(req: Request, res: Response){
        const { groupId, itemId } = req.params;
        const { name } = req.body;
        model.item.rename(groupId, itemId, name)
            .then(() => res.sendStatus(200))
            .catch((err: Error) => { console.log(err); res.status(500).send(err)})
    },
    setStatus: function setItemStatus(req: Request, res: Response) {
        const { groupId, itemId } = req.params;
        const { status } = req.body;
        model.item.setStatus(groupId, itemId, status)
            .then(() => res.sendStatus(200))
            .catch((err: Error) => console.log(err))
    }
};