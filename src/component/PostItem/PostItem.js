import React from 'react';
import CommentList from '../CommentList/CommentList';

const PostItem = (props) => {
    let { userID, body, comment } = props;
    return <div className="PostItem">
        <p>{userID}</p>
        <p>{body}</p>
        <CommentList comments={ comment } />
    </div>
}

export default PostItem;