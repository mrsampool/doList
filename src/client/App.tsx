import {useEffect, useState} from "react";
import axios from "axios";
import {List} from "../lib/classes/List";
import ListGroup from "./components/ListGroup/ListGroup";
import {GroupInterface} from "../lib/interfaces/GroupInterface";

const App = () => {
    const [lists, setList] = useState([]);
    const [currentList, setCurrentList] = useState(new List());
    useEffect(()=>{
        axios.get('/api/user/sambpool@gmail.com/list/')
            .then(({data}) =>{
                setList(data);
                setCurrentList(data[0]);
            })
    }, [])
    return (
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
    )

};

export default App;

