import axios from "axios";
import React from 'react';
import {ListInterface} from "../../build/lib/ListInterface";

module.exports = {
    fetchLists: function fetchListsByUser(
        userId: String,
        setList: React.Dispatch<React.SetStateAction<ListInterface[]>>,
        setCurrentList: React.Dispatch<React.SetStateAction<ListInterface>>
    ){
        axios.get('/api/user/sambpool@gmail.com/list/')
            .then(({data}) =>{
                setList(data);
                setCurrentList(data[0]);
            })
    }
}