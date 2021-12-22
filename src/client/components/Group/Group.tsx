import {ReactNode, useState} from "react";

// Stylesheet
import './Group.css';

import {GroupInterface} from "../../../lib/interfaces/GroupInterface";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";
import GroupItem from "../GroupItem/GroupItem";

const Group = ({ group }:ListGroupProps) => {
    const { name, items } = group;
    const [dropDown, setDropDown] = useState(true);
    function toggleDropdown(){
        setDropDown(!dropDown);
    }
    return (
        <li id="group">
            <div className="group-header">
                <span className="group-name">{name}</span>
                <button type="button">+</button>
            </div>

            <ul>
                { items
                    .filter((item) => item.status)
                    .map((item: ItemInterface) => {
                    return(
                        <GroupItem
                            item={item}
                            key={`${name}Group-${item.name}Item`}
                        >{item.name}
                        </GroupItem>
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
                                <GroupItem
                                    item={item}
                                    key={`${name}Group-${item.name}Item`}
                                >{item.name}
                                </GroupItem>
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