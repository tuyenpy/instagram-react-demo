import React, { useState } from 'react';
import { connect } from 'react-redux';
import { commentPost } from '../../actions';
import './CommentButton.css';


let CommentButton = (props) => {
    let [cmt, setCmt] = useState('');
    let { commentPost, postID, userID, userName } = props;
    const onComment = (e) => {
        e.preventDefault();
        commentPost({ postID, userID, cmt, userName });
        setCmt('');
    }
    return <div className="CommentButton">
        <form>
            <input type="text"
                onChange={(e) => setCmt(e.target.value)}
                value={cmt}
                placeholder="Add a comment..."
            />
            <button onClick={onComment}>Post</button>

        </form>
    </div>
}

const mapDispatchToProp = {
    commentPost: commentPost,
}

CommentButton = connect(null, mapDispatchToProp)(CommentButton);

export default CommentButton;