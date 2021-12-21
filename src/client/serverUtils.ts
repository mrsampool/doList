import axios from "axios";
import React from 'react';
import {ListInterface} from "../lib/interfaces/ListInterface";

module.exports = {
    fetchLists: function fetchListsByUser(
        userId: String,
        setUserLists: React.Dispatch<React.SetStateAction<ListInterface[]>>,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.get('/api/user/sambpool@gmail.com/list/')
            .then(({data}) =>{
                setUserLists(data);
                setCurrentList(data[0]);
            })
    }
}