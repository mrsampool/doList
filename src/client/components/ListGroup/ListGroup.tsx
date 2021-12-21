// React
import React from 'react';

// Stylesheet
import './ListGroup.css';
import {GroupInterface} from "../../../lib/interfaces/GroupInterface";

const ListGroup = (props:ListGroupProps) => (
  <li></li>
);
export default ListGroup;

interface ListGroupProps {
    children: React.ReactNode
    group: GroupInterface
}