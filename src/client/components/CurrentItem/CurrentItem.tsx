import {useContext} from 'react';
import {ItemInterface} from '../../../lib/interfaces/ItemInterface';
import {GroupInterface} from '../../../lib/interfaces/GroupInterface';
const serverUtils = require('../../utils/serverUtils');

// Stylesheet
import './CurrentItem.css';
import {AppContext} from "../../utils/AppContext";

const CurrentItem = ({ item, group }: CurrentItemProps) => {
    const {user, currentList, setCurrentList} = useContext(AppContext);
    function handleStatusToggle(){
        serverUtils.setItemStatus(
            !item.status,
            user._id,
            currentList._id,
            group._id,
            item._id,
            setCurrentList
        );
    }
    return (
        <div className="item">
          <input
              type="checkbox"
              defaultChecked={item.status}
              onChange={handleStatusToggle}
          />
          <span className="item-name">{item.name}</span>
          <span className="item-group">{group.name}</span>
        </div>
    )
};
export default CurrentItem;

interface CurrentItemProps {
    item: ItemInterface,
    group: GroupInterface
}