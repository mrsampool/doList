// Libraries
import {useEffect, useState, Fragment} from "react";

// Components
import GroupList from "./components/GroupList/GroupList";


// Utils
const serverUtils = require('./utils/serverUtils');
import {List} from "../lib/classes/List";
import {User} from '../lib/classes/User';
import {AppContext} from "./utils/AppContext";
import {Auth} from "./components/Auth/Auth";
import Header from "./components/Header/Header";

const App = () => {
    const [userLists, setUserLists] = useState([]);
    const [currentList, setCurrentList] = useState(new List());
    const [user, setUser] = useState(new User());
    function handleAddGroup(){
        const groupName = (document.getElementById('input-group-name') as HTMLInputElement).value;
        if (groupName){
            serverUtils.postGroup(
                groupName,
                user._id,
                currentList,
                setCurrentList
            )
        }
    }
    useEffect(() => {
        if (user && user.email) {
            serverUtils.fetchLists(user._id, setUserLists, setCurrentList);
        } else {
            serverUtils.fetchUser(setUser);
        }
    }, [user]);
    useEffect(()=>{
    }, [])
    return (
        <AppContext.Provider value={{ user, userLists, currentList, setCurrentList }}>
            { user && user._id ? (
                currentList
                ? (
                    <Fragment>
                        <Header />
                        <GroupList list={currentList.groups} />
                        <input id="input-group-name"/>
                        <button onClick={handleAddGroup}>Add Group</button>
                    </Fragment>
                ) : <p>Loading your lists...</p>
            ) : (
                <Auth
                    logIn={serverUtils.login}
                    createAccount={serverUtils.postUser}
                    setUser={setUser}
                />
            )}

        </AppContext.Provider>
    )

};

export default App;

