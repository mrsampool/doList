export {};
const { List } = require('./list');

module.exports = {
    add: function addGroupToListId(_id: String, newGroupName: String){
        return new Promise((resolve, reject) => {
            List.updateOne(
                { _id },
                { $push: { groups: { name: newGroupName, items: []}}}
            )
                .then((data: any) => resolve(data))
                .catch((err: Error) => console.log(err));
        });
    },
}