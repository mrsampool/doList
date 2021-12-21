import {useEffect, useState} from "react";
import axios from "axios";
import {List} from "../lib/List";

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
                currentList.groups.length && currentList.groups[0].name
                && currentList.groups.map((item) => <li key={`listGroup${item._id}`}>{item.name}</li>)
            }
        </ul>
    )

};

export default App;

