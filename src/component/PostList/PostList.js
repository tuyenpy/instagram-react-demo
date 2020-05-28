import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import PostItem from '../PostItem/PostItem';
import './PostList.css';

let PostList = (props) => {
    let { newPosts, getData, newUser } = props;

    useEffect(() => {
        getData();

    },[getData]);
    if (newPosts.posts) {
        var posts = newPosts.posts;
    }
    return <div className="PostList">
        {
            posts && posts.map((post, index) =>
                <PostItem {...post} newUser={newUser} key={index} />
            )
        }
    </div>
}

const mapStateToProp = (state) => ({
    newPosts: state.posts,
    newUser: state.user,
});

const mapDispatchToProp = {
    getData: getData,
};

PostList = connect(mapStateToProp, mapDispatchToProp)(PostList);


export default PostList;