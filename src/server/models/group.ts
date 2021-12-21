import {ListInterface} from "../../lib/interfaces/ListInterface";

export {};
const { ListModel } = require('./list');

module.exports = {
    add: function addGroupToListId(_id: String, newGroupName: String){
        return new Promise((resolve) => {
            ListModel.findOneAndUpdate(
                { _id },
                { $push: { groups: { name: newGroupName, items: []}}},
                { new: true }
            )
                .then((data: ListInterface) => resolve(data))
                .catch((err: Error) => console.log(err));
        });
    },
}