import {ListInterface} from "../../lib/interfaces/ListInterface";
import {ItemInterface} from "../../lib/interfaces/ItemInterface";

export {};
const { ListModel } = require('./list');

module.exports = {
    add: function addGroupItem(groupId: String, newItem: ItemInterface){
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
                { arrayFilters: [{ "group._id": groupId }, { "item._id": itemId }], new: true },
            )
                .then((data: ListInterface) => resolve(data))
                .catch((err: Error) => console.log(err));
        })
    }
};