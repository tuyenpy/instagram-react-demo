import React from 'react';
import CommentList from '../CommentList/CommentList';
import CommentButton from '../CommentButton/CommentButton';
import LikeButton from '../LikeButton/LikeButton';
import './PostItem.css';

const PostItem = (props) => {
    let { userID, body, comment, onComment, _id, onLike, like } = props;
    return <div className="PostItem">
        <p><b>Người viết:</b> {userID}</p>
        <p>{body}</p>
        <LikeButton userID={ userID } postID={ _id } like={like} onLike={ onLike }/>
        <CommentList comments={ comment } />
        <CommentButton onComment={ onComment } postID={_id}/>
    </div>
}

export default PostItem;