// Libraries
import {useEffect, useState, Fragment} from "react";

// Components
import GroupList from "./components/GroupList/GroupList";

import './App.css';

// Utils
const serverUtils = require('./utils/serverUtils');
import {List} from "../lib/classes/List";
import {User} from '../lib/classes/User';
import {AppContext} from "./utils/AppContext";
import {Auth} from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import AddGroup from "./components/AddGrop/AddGroup";

const App = () => {
    const [userLists, setUserLists] = useState([]);
    const [currentList, setCurrentList] = useState(new List());
    const [user, setUser] = useState(new User());
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
            <div id="App">
                { user && user._id ? (
                    currentList
                        ? (
                            <Fragment>
                                <Header logout={serverUtils.logout} setUser={setUser}/>
                                <GroupList list={currentList.groups} />
                                <AddGroup />
                            </Fragment>
                        ) : <p>Loading your lists...</p>
                ) : (
                    <Auth
                        logIn={serverUtils.login}
                        createAccount={serverUtils.postUser}
                        setUser={setUser}
                    />
                )}
            </div>
        </AppContext.Provider>
    )

};

export default App;

