import {Item} from "../db/schemas/item";
import {ListInterface} from "../db/schemas/list";

export {};
const { ListModel } = require('./list');

module.exports = {
    add: function addGroupItem(groupId: String, newItem: Item){
        return new Promise((resolve) => {
            ListModel.findOneAndUpdate(
                { groups: { $elemMatch: { _id: groupId } } },
                { $push: { "groups.$.items": newItem } },
                { new: true }
            )
                .then((data: ListInterface) => resolve(data))
                .catch((err: Error) => console.log(err));
        });
    },
    rename: function setItemStatus(groupId: String, itemId: String, newName: String) {
        return new Promise((resolve) => {
            ListModel.findOneAndUpdate(
                { groups: { $elemMatch: { _id: groupId, items: { $elemMatch: { _id: itemId }}}}},
                { "groups.$[group].items.$[item].name": newName },
                { arrayFilters: [{ "group._id": groupId }, { "item._id": itemId }] },
            )
                .then((data: ListInterface) => resolve(data))
                .catch((err: Error) => console.log(err));
        })
    },
    setStatus: function setItemStatus(groupId: String, itemId: String, status: Boolean) {
        return new Promise((resolve) => {
            ListModel.findOneAndUpdate(
                { groups: { $elemMatch: { _id: groupId, items: { $elemMatch: { _id: itemId }}}}},
                { "groups.$[group].items.$[item].status": status },
                { arrayFilters: [{ "group._id": groupId }, { "item._id": itemId }] },
            )
                .then((data: ListInterface) => resolve(data))
                .catch((err: Error) => console.log(err));
        })
    }
};