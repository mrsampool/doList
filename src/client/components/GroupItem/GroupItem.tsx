import {ReactNode, useState}from "react";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";

// Stylesheet
import './GroupItem.css';

const GroupItem = ({item}:ListGroupItemProps) => {
    const [editMode, setEditMode] = useState(false);
    function toggleEditMode(){
        setEditMode(!editMode);
    }
    function handleSubmit(){
        setEditMode(false);
    }
    return (
        <li className="list-item">
            <label>
            <input type="checkbox" defaultChecked={item.status}/>
                {
                    !editMode
                        ? (
                            <span className="item-name">
                                {item.name}
                                <button onClick={toggleEditMode}>edit</button>
                            </span>
                        )
                        : (
                            <form onSubmit={handleSubmit} onBlur={handleSubmit}>
                                <input defaultValue={item.name} />
                                <button type="submit">done</button>
                            </form>
                        )
                }
            </label>
        </li>
    )
}
export default GroupItem;

interface ListGroupItemProps {
    children: ReactNode,
    item: ItemInterface
}