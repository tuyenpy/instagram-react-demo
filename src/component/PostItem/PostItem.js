import React from 'react';
import './PostItem.css';
import like from './like.svg';
import comment from './comment.svg';
import share from './share.svg';
import save from './save.svg';

const PostItem = (props) => {
    return <div className="PostItem">
        <div className="PostItem-header">
            <div className="PostItem-account">
                <img src="https://loremflickr.com/240/240" alt="avatar" />
                <span>nha bot</span>
            </div>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="PostItem-body">
            <div className="image">
                <img src="https://loremflickr.com/500/500" alt="avatar" />
            </div>
            <div className="PostItem-section">
            <div className="btn">
                <div className="btn-left">
                    <img src={like} alt="like" />
                    <img src={comment} alt="comment" />
                    <img src={share} alt="share" />
                </div>
                <div className="btn-rigth">
                    <img src={save} alt="save" />
                </div>
            </div>
            <div className="like">
                <p>2300 likes</p>
            </div>
            <div className="cmtLink">
                <a href="/">
                    View all 3 comment
                    </a>
            </div>
            <div className="comment">
                <span>nhaanmax90</span>
                <span>giá bao nhiêu 1 bộ ạ </span>
            </div>
            <div className="comment">
                <span>dua_thaochi</span>
                <span>Bn ạ</span>
            </div>
            <div className="date">
                <p>6 days ago</p>
            </div>
        </div>
        <div className="PostItem-footer">

        </div>
        </div>
    </div>
}

export default PostItem;