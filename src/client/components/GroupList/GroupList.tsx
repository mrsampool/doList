// React
import {ReactNode} from 'react';

// Stylesheet
import './GroupList.css';
import Group from "../Group/Group";
import {GroupInterface} from '../../../lib/interfaces/GroupInterface';

const GroupList = ({list}:GroupListProps) => {
    return (
        <ul id="group-list">
            { list && list.length && list.map((group: GroupInterface) => {
                return (
                    <Group
                        key={group._id.toString()}
                        group={group}
                    >{group.name}
                    </Group>
                )
            }) }
        </ul>
    )
};
export default GroupList;

interface GroupListProps {
    children?: ReactNode
    list: GroupInterface[]
}