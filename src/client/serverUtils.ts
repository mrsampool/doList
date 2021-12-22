import axios from "axios";

module.exports = {
    fetchLists: function fetchListsByUser(
        userId: String,
        setUserLists: any,
        setCurrentList: any
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
        listId: String,
        currentList: any,
        setCurrentList: any //React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.post(`/api/user/${userId}/list/${listId}/group/`,
            {name: groupName})
            .then(({data}) => {
                const updatedList = Array.from(currentList);
                updatedList.push(data);
                setCurrentList(updatedList);
            })
    },
    postItem: function postItemToGroup(

    ){}
}