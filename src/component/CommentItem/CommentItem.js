import React from 'react';
import './CommentItem.css';

const CommentItem = (props) => {
    let { userID, cmt, date } = props;
    return <div className="CommentItem">
        <p>{cmt}</p>
        <small>{date}</small>
        <h6>Người bình luận: {userID}</h6>
    </div>
}

export default CommentItem;