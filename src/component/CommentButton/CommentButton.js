import React, { useState } from 'react';
import { connect } from 'react-redux';
import { commentPost } from '../../actions';


let CommentButton = (props) => {
    let [cmt, setCmt] = useState('');
    let { commentPost, postID, userID } = props;
    const onComment = (e) => {
        e.preventDefault();
        commentPost({ postID, userID, cmt });
        setCmt('');
    }
    return <div className="CommentButton">
        <form>
            <input type="text"
                onChange={(e) => setCmt(e.target.value)}
                value={cmt}
            />
            <button onClick={onComment}>Submit</button>

        </form>
    </div>
}

const mapDispatchToProp = {
    commentPost: commentPost,
}

CommentButton = connect(null, mapDispatchToProp)(CommentButton);

export default CommentButton;