import React from 'react';

const CommentItem = (props) => {
    let { userID, cmt, date } = props;
    return <div className="CommentItem">
        <h6>{userID}</h6>
        <p>{cmt}</p>
        <p>{date}</p>
    </div>
}

export default CommentItem;