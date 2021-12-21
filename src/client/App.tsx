import {useEffect, useState} from "react";
import axios from "axios";
import {GroupInterface} from "../server/db/schemas/group";

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
                && currentList.groups.map((item) => <li>{item.name}</li>)
            }
        </ul>
    )

};

export default App;

class List{
    name: String;
    groups: GroupInterface[]|[];
    constructor(name?:String) {
        this.name = name || '';
        this.groups = []
    }
}
/*
class Group{
    _id: ObjectId
    name: String
    items: []
    constructor(name?: String) {
        this._id = new ObjectId();
        this.name = name || '';
        this.items = [];
    }
}
 */