import axios from "axios";
import {setStateAction} from 'react';

module.exports = {
    fetchLists: function fetchListsByUser(
        userId: String,
        setList: setStateAction,
        setCurrentList: setStateAction
    ){
        axios.get('/api/user/sambpool@gmail.com/list/')
            .then(({data}) =>{
                setList(data);
                setCurrentList(data[0]);
            })
    }
}