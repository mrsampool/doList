import {useContext, useState, ReactNode} from 'react';
// Stylesheet
import './Header.css';

import {AppContext} from "../../utils/AppContext";

const Header = () => {
    const {user, currentList} = useContext(AppContext);
    return (
        <div id="header">
            <h1>ListGrouper</h1>
            <span id="header-user-info">
                <HeaderDropDown text={currentList.name} dropItem={<BackToLists />} side={'left'}/>
                <HeaderDropDown text={user.firstName} dropItem={<LogOut />} side={'right'}/>
            </span>
        </div>
    );
};
export default Header;

const HeaderDropDown = ({text, dropItem, side }:HeaderDropDownProps) => {
    const [dropped, setDropped] = useState(false);
    return (
        <span
            className="header-dropdown"
            onClick={()=>setDropped(!dropped)}
        >
            <button>{text}</button>
            { dropped && <span className={`dropdown-item ${side}`}>{dropItem}</span> }
        </span>
    )
}

interface HeaderDropDownProps {
    text?: string | undefined,
    dropItem?: ReactNode,
    side?: 'left' | 'right'
}

const LogOut = () => {
    return (<span><button className="salmon-bg">Logout</button></span>)
};

const BackToLists = () => {
    return (<span><button className="lightgray-bg">Back To Lists</button></span>)
}