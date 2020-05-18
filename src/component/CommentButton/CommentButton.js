import React, { useState } from 'react';


const CommentButton = (props) => {
    let [cmt, setCmt] = useState();
    let { onComment, postID } = props;
    return <div className="CommentButton">
        <form>
            <input type="text"
                onChange={(e) => setCmt(e.target.value)}
            />
            <button onClick={
                (e) => onComment({ cmt, postID }, e)
            }>Submit</button>

        </form>
    </div>
}

export default CommentButton;