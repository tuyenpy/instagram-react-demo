import React from 'react';
import './Account.css';
import home from './home.svg';
import message from './message.svg';
import discover from './discover.svg';
import activity from './activity.svg';
const profile = "https://instagram.fdac57-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdac57-1.fna.fbcdn.net&_nc_ohc=_oxvNQjA4CwAX_wXBt0&oh=aeeac5789e94379884dcb6c593ba440e&oe=5EF7FD0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2";

const Account = (props) => {
    return <div className="Account">
        <div className="Account-home margin">
            <a href='/'>
                <img src={home} alt="home" />
            </a>
        </div>
        <div className="Account-message margin">
            <a href='/'>
                <img src={message} alt="message" />
            </a>
        </div>
        <div className="Account-discover margin">
            <a href='/'>
                <img src={discover} alt="discover" />
            </a>
        </div>
        <div className="Account-activity margin">
            <a href='/'>
                <img src={activity} alt="activity" />
            </a>
        </div>
        <div className="Account-profile margin">
            <a href='/post/create'>
                <img src={profile} alt="profile" />
            </a>
        </div>
    </div>
}

export default Account;