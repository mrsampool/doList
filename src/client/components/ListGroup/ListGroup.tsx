// React
import React from 'react';

// Stylesheet
import './ListGroup.css';
import {GroupInterface} from "../../../lib/interfaces/GroupInterface";
import {ItemInterface} from "../../../lib/interfaces/ItemInterface";

const ListGroup = ({ group }:ListGroupProps) => {
    const { name, items } = group;
    return (
        <li>
            {name}
            <ul>
                { items.map((item: ItemInterface) => {
                    return <li key={`${name}Group-${item.name}Item`}>{item.name}</li>
                })}
            </ul>
        </li>
    );
};
export default ListGroup;

interface ListGroupProps {
    children: React.ReactNode
    group: GroupInterface
}