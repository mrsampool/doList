// React
import {useContext, FormEvent} from 'react';

// Stylesheet
import './AddGroup.css';
const serverUtils = require('../../utils/serverUtils');
import {AppContext} from "../../utils/AppContext";

const AddGroup = () => {
    const {user, currentList, setCurrentList} = useContext(AppContext)
    function handleAddGroup(e: FormEvent){
        e.preventDefault();
        const nameInput = (document.getElementById('input-group-name') as HTMLInputElement);
        const groupName = nameInput.value;
        if (groupName){
            serverUtils.postGroup(
                groupName,
                user._id,
                currentList,
                setCurrentList
            ).then(()=> {
                nameInput.value = ''
                window.scrollTo({
                    left: 0,
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            });
        }
    }
    return (
        <form id="add-group-form" onSubmit={handleAddGroup}>
            <span>
                <input id="input-group-name"/>
            </span>
            <span>
                <button id="add-group-button" type="submit">Add Group</button>
            </span>
        </form>
    )
};
export default AddGroup;
