import {ReactNode, useState, useContext} from "react";

// Sub-components
import GroupItem from "../GroupItem/GroupItem";

// Utils
import {GroupInterface} from "../../../lib/interfaces/GroupInterface";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";
const {postItem} = require('../../utils/serverUtils');
import {AppContext} from "../../utils/AppContext";

// Stylesheet
import './Group.css';

const Group = ({ group }:ListGroupProps) => {
    const { name, items } = group;
    const { user, currentList, setCurrentList } = useContext(AppContext);
    const [dropDown, setDropDown] = useState(true);
    function toggleDropdown(){
        setDropDown(!dropDown);
    }
    function handleAddGroup(e: React.FormEvent){
        e.preventDefault();
        const itemNameInput = (e.target as HTMLInputElement).querySelector('input');
        if (itemNameInput){
            const itemName = itemNameInput.value;
            postItem(itemName, user.name, currentList._id, group._id, setCurrentList );
            if (itemNameInput){ itemNameInput.value = ''}
        }
    }
    return (
        <li id="group">
            <input defaultValue={`${name}`} className="group-name"/>
            <ul>
                { items
                    .filter((item) => item.status)
                    .map((item: ItemInterface) => {
                    return(
                        <GroupItem
                            item={item}
                            groupId={group._id.toString()}
                            key={`${name}Group-${item.name}Item`}
                        >{item.name}
                        </GroupItem>
                    )
                })}
            </ul>
            <button onClick={toggleDropdown}>{ dropDown ? 'collapse' : 'show all'}</button>
            {
                dropDown &&
                <ul>
                    { items
                        .filter((item) => !item.status)
                        .map((item: ItemInterface) => {
                            return(
                                <GroupItem
                                    item={item}
                                    groupId={group._id.toString()}
                                    key={`${name}Group-${item.name}Item`}
                                >{item.name}
                                </GroupItem>
                            )
                        })
                    }
                    <form id="form-new-item" onSubmit={(e) => handleAddGroup(e)}>
                    <input placeholder="add new item..." id="input-new-item"/>
                    <button type="submit">+</button>
                    </form>
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