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
import {Icon} from "../icon/icon";

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
            postItem(itemName, user._id, currentList._id, group._id, setCurrentList );
            if (itemNameInput){ itemNameInput.value = ''}
        }
    }
    return (
        <li className="group">
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
            <button
                onClick={toggleDropdown}
            >{ dropDown
                ? (
                    <Icon
                        type="triangleDown"
                        className="triangleUp"
                    />
                )
                : (
                    <Icon
                        type="triangleDown"
                    />
                )
            }</button>
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
                    <button type="submit">
                      <Icon type="plus" />
                    </button>
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