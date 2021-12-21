// Libraries
import {useEffect, useState} from "react";

// Components
import ListGroup from "./components/ListGroup/ListGroup";

// Utils
const serverUtils = require('./serverUtils');
import {List} from "../lib/classes/List";
import {GroupInterface} from "../lib/interfaces/GroupInterface";
import {AppContext} from "./AppContext";

const App = () => {
    const [userLists, setUserLists] = useState([]);
    const [currentList, setCurrentList] = useState(new List());
    const [user, setUser] = useState({ id: 'sambpool@gmail.com' });
    useEffect(()=>{
        serverUtils.fetchLists(user.id, setUserLists, setCurrentList);
    }, [])
    return (

        <AppContext.Provider value={{ user, userLists, currentList }}>
            <ul>
                {
                    currentList.groups.length
                    && currentList.groups[0].name
                    && currentList.groups
                        .map((group: GroupInterface) => {
                            return (
                                <ListGroup
                                    key={`listGroup${group._id}`}
                                    group={group}
                                >{group.name}
                                </ListGroup>
                            )
                        })
                }
            </ul>
        </AppContext.Provider>
    )

};

export default App;

