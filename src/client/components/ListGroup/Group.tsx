import {ReactNode, useState} from "react";

// Stylesheet
import './ListGroup.css';

import {GroupInterface} from "../../../lib/interfaces/GroupInterface";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";
import ListGroupItem from "../ListGroupItem/ListGroupItem";

const Group = ({ group }:ListGroupProps) => {
    const { name, items } = group;
    const [dropDown, setDropDown] = useState(true);
    function toggleDropdown(){
        setDropDown(!dropDown);
    }
    return (
        <li>
            {name}
            <button type="button">+</button>
            <ul>
                { items
                    .filter((item) => item.status)
                    .map((item: ItemInterface) => {
                    return(
                        <ListGroupItem
                            item={item}
                            key={`${name}Group-${item.name}Item`}
                        >{item.name}
                        </ListGroupItem>
                    )
                })}
            </ul>
            <button onClick={toggleDropdown}>{ dropDown ? '^' : 'v'}</button>
            {
                dropDown &&
                <ul>
                    { items
                        .filter((item) => !item.status)
                        .map((item: ItemInterface) => {
                            return(
                                <ListGroupItem
                                    item={item}
                                    key={`${name}Group-${item.name}Item`}
                                >{item.name}
                                </ListGroupItem>
                            )
                        })}
                </ul>
            }

        </li>
    );
};
export default Group;

interface ListGroupProps {
    children?: ReactNode
    group: GroupInterface
}