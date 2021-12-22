// Libraries
import {useEffect, useState} from "react";

// Components
import GroupList from "./components/GroupList/GroupList";

// Utils
const serverUtils = require('./serverUtils');
import {List} from "../lib/classes/List";
import {AppContext} from "./AppContext";

const App = () => {
    const [userLists, setUserLists] = useState([]);
    const [currentList, setCurrentList] = useState(new List());
    const [user, setUser] = useState({ id: 'sambpool@gmail.com' });
    function handleAddGroup(){
        const groupName = (document.getElementById('input-group-name') as HTMLInputElement).value;
        if (groupName){
            serverUtils.postGroup(
                groupName,
                user.id,
                currentList,
                setCurrentList
            )
        }
    }
    useEffect(()=>{
        serverUtils.fetchLists(user.id, setUserLists, setCurrentList);
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

