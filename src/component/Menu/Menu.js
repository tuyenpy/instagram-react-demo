import React, { useState } from 'react';
import './Menu.css';

const Menu = (props) => {
    let [state, setState] = useState(false);
    return <div className="menu" onClick={() => setState(!state)}>
        <span></span>
        <span></span>
        <span></span>
        {
            state && <div className="menu-layout">
                <div className="menu-layout-content">
                    <p>Report Inappropriate</p>
                    <p>Unfollow</p>
                    <p>Go to post</p>
                    <p>Share</p>
                    <p>Copy link</p>
                    <p>Embed</p>
                    <p onClick={() => setState(!state)}>Cancel</p>
                </div>
            </div>
        }
    </div>
}

export default Menu;