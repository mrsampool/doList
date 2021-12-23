// Libraries
import {useEffect, useState} from "react";

// Components
import GroupList from "./components/GroupList/GroupList";

// Utils
const serverUtils = require('./utils/serverUtils');
import {List} from "../lib/classes/List";
import {User} from '../lib/classes/User';
import {AppContext} from "./utils/AppContext";

const App = () => {
    const [userLists, setUserLists] = useState([]);
    const [currentList, setCurrentList] = useState(new List());
    const [user, setUser] = useState(new User('sambpool@gmail.com'));
    function handleAddGroup(){
        const groupName = (document.getElementById('input-group-name') as HTMLInputElement).value;
        if (groupName){
            serverUtils.postGroup(
                groupName,
                user.name,
                currentList,
                setCurrentList
            )
        }
    }
    useEffect(()=>{
        serverUtils.fetchLists(user.name, setUserLists, setCurrentList);
    }, [])
    return (
        <AppContext.Provider value={{ user, userLists, currentList, setCurrentList }}>
            <h1>{currentList.name}</h1>
            <GroupList list={currentList.groups} />
            <input id="input-group-name"/>
            <button onClick={handleAddGroup}>Add Group</button>
        </AppContext.Provider>
    )

};

export default App;

