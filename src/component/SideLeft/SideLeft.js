import React from 'react';
import { connect } from 'react-redux';
import './SideLeft.css';

const profile = "https://instagram.fdac57-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdac57-1.fna.fbcdn.net&_nc_ohc=_oxvNQjA4CwAX_wXBt0&oh=aeeac5789e94379884dcb6c593ba440e&oe=5EF7FD0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2";

let SideLeft = (props) => {
    let { newUser } = props;
    if (newUser.user) {
        var { avatar, name, email } = newUser.user;
    }
    return <div className="SideLeft">
        <div className="SideLeft-profile">
            <img src={avatar} alt="avatar" />
            <div>
                <p>{name || "name"}</p>
                <p>{email || "email"}</p>
            </div>
        </div>
        <div className="SideLeft-suggest">
            <div className="header">
                <p>Suggestions for you</p>
                <p>See all</p>
            </div>
            <div className="body">
                <div className="body-item">
                    <img src={profile} alt="avatar" />
                    <div>
                        <p>charlotte.xiu.179</p>
                        <p>Suggested for you</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="body-item">
                    <img src={profile} alt="avatar" />
                    <div>
                        <p>charlotte.xiu.179</p>
                        <p>Suggested for you</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="body-item">
                    <img src={profile} alt="avatar" />
                    <div>
                        <p>charlotte.xiu.179</p>
                        <p>Suggested for you</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="body-item">
                    <img src={profile} alt="avatar" />
                    <div>
                        <p>charlotte.xiu.179</p>
                        <p>Suggested for you</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="body-item">
                    <img src={profile} alt="avatar" />
                    <div>
                        <p>charlotte.xiu.179</p>
                        <p>Suggested for you</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="body-item">
                    <img src={profile} alt="avatar" />
                    <div>
                        <p>charlotte.xiu.179</p>
                        <p>Suggested for you</p>
                    </div>
                    <button>Follow</button>
                </div>
            </div>
        </div>
        <div className="SideLeft-link">
            <div>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Help</a></li>
                    <li><a href="/">Press</a></li>
                    <li><a href="/">API</a></li>
                    <li><a href="/">Jobs</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Help</a></li>
                </ul>
                <ul>
                    <li><a href="/">Locations</a></li>
                    <li><a href="/">Top</a></li>
                    <li><a href="/">Accounts</a></li>
                    <li><a href="/">Hashtags</a></li>
                    <li><a href="/">Language</a></li>
                </ul>
            </div>
        </div>
        <div className="SideLeft-footer">
            <p>© 2020 Instagram from Facebook</p>

        </div>
    </div>
}

const mapStateToProp = (state) => ({
    newUser: state.user,
})

SideLeft = connect(mapStateToProp, null)(SideLeft);

export default SideLeft;