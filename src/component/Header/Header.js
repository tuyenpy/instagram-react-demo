import React from 'react';
import './Header.css';
import Search from '../Search/Search';
import Account from '../Account/Account';

const Header = (props) => {
    return <div className="Header">
       <div className="Header-main">
           <div className="Header-logo">
               <a href="/">
                   <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
               </a>
           </div>
           <div className="Header-search">
               <Search />
           </div>
           <div className="Header-account">
               <Account />
           </div>
       </div>
    </div>
}

export default Header;

