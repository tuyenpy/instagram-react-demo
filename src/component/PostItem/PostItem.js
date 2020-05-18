import React from 'react';
import CommentList from '../CommentList/CommentList';
import CommentButton from '../CommentButton/CommentButton';
const PostItem = (props) => {
    let { userID, body, comment, onComment, _id } = props;
    return <div className="PostItem">
        <p>{userID}</p>
        <p>{body}</p>
        <CommentList comments={ comment } />
        <CommentButton onComment={ onComment } postID={_id}/>
    </div>
}

export default PostItem;