import {ReactNode, useState, useContext}from "react";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";

const {setItemStatus} = require('../../utils/serverUtils');
import {AppContext} from "../../utils/AppContext";

// Stylesheet
import './GroupItem.css';

const GroupItem = ({item, groupId}:ListGroupItemProps) => {
    const [editMode, setEditMode] = useState(false);
    const {user, currentList, setCurrentList} = useContext(AppContext);
    function toggleEditMode(){
        setEditMode(!editMode);
    }
    function handleNameChange(){
        setEditMode(false);
    }
    function handleToggleStatus(){
        setItemStatus(
            !item.status,
            user._id,
            currentList._id,
            groupId,
            item._id,
            setCurrentList
        )
    }
    return (
        <li className="list-item">
            <input
                id={`check-${item._id}-group${groupId}`}
                type="checkbox"
                defaultChecked={item.status}
                onChange={handleToggleStatus}
            />
            <form onSubmit={handleNameChange} onBlur={handleNameChange}>
                <input className="item-name" defaultValue={item.name} />
            </form>
        </li>
    )
}
export default GroupItem;

interface ListGroupItemProps {
    children: ReactNode,
    groupId: String,
    item: ItemInterface
}