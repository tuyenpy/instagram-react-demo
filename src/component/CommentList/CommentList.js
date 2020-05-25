import React from 'react';
import CommentItem from '../CommentItem/CommentItem';

const CommentList = (props) => {
    let { comments } = props;

    return <div className="CommentList">
        {
            comments && comments.map( (comment, index) => 
                <CommentItem { ...comment } key={ index }/>
            )

        }
    </div>
}

export default CommentList;