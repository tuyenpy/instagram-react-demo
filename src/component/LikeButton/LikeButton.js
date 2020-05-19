import React from 'react';

const LikeButton = (props) => {
    let { userID, postID, onLike, like } = props;
    let n = like && like.length;
    return <div className="LikeButton">
        <button onClick={(e) => onLike({ userID, postID }, e)}>Like</button>
        {
            n && <span>{n} liked</span>

        }
    </div>
}

export default LikeButton;