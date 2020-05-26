import React from 'react';
import './Suggest.css';
const profile = "https://instagram.fdac57-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdac57-1.fna.fbcdn.net&_nc_ohc=_oxvNQjA4CwAX_wXBt0&oh=aeeac5789e94379884dcb6c593ba440e&oe=5EF7FD0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2";

const Suggest = (props) => {
    return <div className="Suggest">
        <div className="Suggest-header">
            <p>Suggestions for you</p>
            <p>See all</p>
        </div>
        <div className="Suggest-body">
            <div className="Suggest-item">
                <img src={profile} alt="avatar" />
                <div>
                    <p>Hejin Kyo</p>
                    <p>Suggest for you</p>
                </div>
                <div className="Suggest-btn">
                    <button>Follow</button>
                </div>
            </div>
            <div className="Suggest-item">
                <img src={profile} alt="avatar" />
                <div>
                    <p>Hejin Kyo</p>
                    <p>Suggest for you</p>
                </div>
                <div className="Suggest-btn">
                    <button>Follow</button>
                </div>
            </div>
            <div className="Suggest-item">
                <img src={profile} alt="avatar" />
                <div>
                    <p>Hejin Kyo</p>
                    <p>Suggest for you</p>
                </div>
                <div className="Suggest-btn">
                    <button>Follow</button>
                </div>
            </div>
        </div>

    </div>
}

export default Suggest;