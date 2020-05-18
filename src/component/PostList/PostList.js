import React from 'react';
import PostItem from '../PostItem/PostItem';

const PostList = (props) => {
    let { posts } = props;
    return <div className="PostList">
        {
            posts && posts.map(post =>
                <PostItem {...post} key={post} />
            )
        }
    </div>
}

export default PostList;