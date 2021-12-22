import {ReactNode, useState, useContext} from "react";

// Sub-components
import GroupItem from "../GroupItem/GroupItem";

// Utils
import {GroupInterface} from "../../../lib/interfaces/GroupInterface";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";
const {postItem} = require('../../serverUtils');
import {AppContext} from "../../AppContext";

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
            <div className="group-header">
                <h2 className="group-name">{name}</h2>
                <form onSubmit={(e) => handleAddGroup(e)}>
                    <input id="input-new-item"/><button type="submit">+</button>
                </form>

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