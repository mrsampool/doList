export {};
const { List } = require('./list');

module.exports = {
    add: function addGroupItem(_id: String, groupId: String, newItem: any){
        return new Promise((resolve, reject) => {
            List.updateOne(
                { groups: { $elemMatch: { _id: groupId } } },
                { $push: { "groups.$.items": newItem } }
            )
                .then((data: any) => resolve(data))
                .catch((err: Error) => console.log(err));
        });
    },
    setStatus: function setItemStatus(listId: String, groupId: String, itemId: String, status: Boolean) {
        return new Promise((resolve, reject) => {
            List.findOneAndUpdate(
                { groups: { $elemMatch: { _id: groupId, items: { $elemMatch: { _id: itemId }}}}},
                { "groups.$[group].items.$[item].status": status },
                { arrayFilters: [{ "group._id": groupId }, { "item._id": itemId }]}
            )
                .then((data: any) => resolve(data))
                .catch((err: any) => console.log(err));
        })
    }
};