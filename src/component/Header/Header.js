import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return <div className="Header">
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/timeline'>Timeline</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
            <li>
                <Link to='/notification'>Notification</Link>
            </li>
            <li>
                <Link to='/createpost'>Create Post</Link>
            </li>
        </ul>
    </div>
}

export default Header;

