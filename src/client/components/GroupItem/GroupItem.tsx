import {ReactNode}from "react";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";

// Stylesheet
import './GroupItem.css';

const GroupItem = ({item}:ListGroupItemProps) => (
    <li>
        <label>
            <input type="checkbox" defaultChecked={item.status}/>
            {item.name}
            <button> {`>`} </button>
        </label>
    </li>
);
export default GroupItem;

interface ListGroupItemProps {
    children: ReactNode
    item: ItemInterface
}