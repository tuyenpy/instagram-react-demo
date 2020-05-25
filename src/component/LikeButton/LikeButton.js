import React from 'react';
import './LikeButton.css';

import { likePost } from '../../actions';
import { connect } from 'react-redux';

let LikeButton = (props) => {
    let { like, likePost, userID, postID } = props;    
    let n = like && like.length;
    const onLike = (e) => {
        e.preventDefault();
        likePost({
            userID,
            postID
        });
    }
    return <div className="LikeButton">
        <button onClick={(e) => onLike(e)}>Like</button>
        {
            n && <span>{n} liked</span>

        }

    </div>
}
const mapDispatchToProp = {
    likePost: likePost,
}


LikeButton = connect(null, mapDispatchToProp)(LikeButton);

export default LikeButton;