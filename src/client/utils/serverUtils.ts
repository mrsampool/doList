import axios from "axios";
import {ListInterface} from '../../lib/interfaces/ListInterface';

module.exports = {
    fetchLists: function fetchListsByUser(
        username: String,
        setUserLists: React.Dispatch<React.SetStateAction<ListInterface[]>>,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.get(`/api/user/${username}/list/`)
            .then(({data}) =>{
                setUserLists(data);
                setCurrentList(data[0]);
            })
    },
    postGroup: function postGroupToList(
        groupName: String,
        username: String,
        currentList: ListInterface,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.post(`/api/user/${username}/list/${currentList._id}/group/`,
            {name: groupName})
            .then(({data}) => {
                const updatedList = Object.create(currentList);
                updatedList.groups.push(data);
                setCurrentList(updatedList);
            })
    },
    postItem: function postItemToGroup(
        itemName: String,
        username: String,
        listId: String,
        groupId: String,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.post(`/api/user/${username}/list/${listId}/group/${groupId}/item/`,
            {name: itemName})
            .then(({data}) => {
                setCurrentList(data);
            })
    },
    setItemStatus: function setItemStatus(
        status: boolean,
        username: String,
        listId: String,
        groupId: String,
        itemId: String,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.put(`/api/user/${username}/list/${listId}/group/${groupId}/item/${itemId}`,
            { status })
            .then(({data}) => {
                setCurrentList(data);
            })


    }
}