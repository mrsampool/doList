import axios from "axios";
import {ListInterface} from '../../lib/interfaces/ListInterface';
import {CredsInterface} from '../../lib/interfaces/CredsInterface';
import {UserInterface} from '../../lib/interfaces/UserInterface';
import {User} from '../../lib/classes/User';

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
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.post(`/api/user/${userId}/list/${listId}/group/${groupId}/item/`,
            {name: itemName})
            .then(({data}) => {
                setCurrentList(data);
            })
    },
    setItemStatus: function setItemStatus(
        status: boolean,
        userId: String,
        listId: String,
        groupId: String,
        itemId: String,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.put(`/api/user/${userId}/list/${listId}/group/${groupId}/item/${itemId}`,
            { status })
            .then(({data}) => {
                setCurrentList(data);
            })


    },
    login: function logIn(
        creds: CredsInterface,
        setUser: React.Dispatch<React.SetStateAction<UserInterface>>,
        errorCb?: Function) {
        axios.post("/api/login", creds)
            .then(({data}) => {
                if (data.user) {
                    setUser(data.user);
                }
            })
            .catch(() => {
                if (errorCb) {
                    errorCb()
                }
            });
    },
    logout: function logOut(
        setUser: React.Dispatch<React.SetStateAction<UserInterface>>
    ) {
        axios
            .get(`/api/logout`)
            .then(() => {
                setUser(new User());
            })
            .catch((err) => console.log(err));
    },
    fetchUser(setUser: React.Dispatch<React.SetStateAction<UserInterface>>) {
        axios
            .get('/api/user/current')
            .then(({ data }) => {
                if (data.user) {
                    setUser(data.user);
                }
            })
            .catch((err) => console.log(err));
    },
    postUser(
        userInfo: UserInterface,
        setMode: React.Dispatch<React.SetStateAction<'login' | 'create'>>,
    ) {
        axios
            .post('api/users', userInfo)
            .then((res) => {
                if (res && res.status === 200) {
                    setMode('login');
                }
            })
            .catch((err) => console.log(err));
    },
}