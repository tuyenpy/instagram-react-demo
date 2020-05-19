import React from 'react';
import PostItem from '../PostItem/PostItem';

const PostList = (props) => {
    let { posts, onComment, onLike } = props;
    return <div className="PostList">
        {
            posts && posts.map((post, index) =>
                <PostItem {...post} key={index} onComment={onComment} onLike={ onLike }/>
            )
        }
    </div>
}

export default PostList;