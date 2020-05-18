import React from 'react';
import PostItem from '../PostItem/PostItem';

const PostList = (props) => {
    let { posts, onComment } = props;
    return <div className="PostList">
        {
            posts && posts.map((post, index) =>
                <PostItem {...post} key={index} onComment={onComment} />
            )
        }
    </div>
}

export default PostList;