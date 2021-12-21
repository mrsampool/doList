import {ReactNode}from "react";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";

// Stylesheet
import './ListGroupItem.css';

const ListGroupItem = ({item}:ListGroupItemProps) => (
    <li>
        <label>
            <input type="checkbox" defaultChecked={item.status}/>
            {item.name}
            <button> {`>`} </button>
        </label>
    </li>
);
export default ListGroupItem;

interface ListGroupItemProps {
    children: ReactNode
    item: ItemInterface
}