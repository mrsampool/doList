import {GroupInterface} from '../../../lib/interfaces/GroupInterface';

// Stylesheet
import './CurrentItems.css';
import CurrentItem from "../CurrentItem/CurrentItem";

const CurrentItems = ({ groups }:CurrentItemsProps) => (
  <div id="current-items" className="group">
    <h2>Current Items</h2>
    {
      groups.length && groups.map((group) =>{
        return group.items.map((item) => {
          return item.status && (
              <CurrentItem
                  item={item}
                  group={group}
                  key={`currentItem${item._id}`}
              />
          );
        })
      })
    }
  </div>
);
export default CurrentItems;

interface CurrentItemsProps {
  groups: GroupInterface[] | []
}