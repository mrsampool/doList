import axios from "axios";
import {ListInterface} from '../lib/interfaces/ListInterface';

module.exports = {
    fetchLists: function fetchListsByUser(
        userId: String,
        setUserLists: React.Dispatch<React.SetStateAction<ListInterface[]>>,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.get(`/api/user/${userId}/list/`)
            .then(({data}) =>{
                setUserLists(data);
                setCurrentList(data[0]);
            })
    },
    postGroup: function postGroupToList(
        groupName: String,
        userId: String,
        currentList: ListInterface,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.post(`/api/user/${userId}/list/${currentList._id}/group/`,
            {name: groupName})
            .then(({data}) => {
                const updatedList = Object.create(currentList);
                updatedList.groups.push(data);
                setCurrentList(updatedList);
            })
    },
    postItem: function postItemToGroup(
        itemName: String,
        userId: String,
        listId: String,
        groupId: String,
        currentList: ListInterface,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.post(`/api/user/${userId}/list/${listId}/group/${groupId}/item/`,
            {name: itemName})
            .then(({data}) => {
                setCurrentList(data);
            })
    }
}