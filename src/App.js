import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { getData } from './actions';

import Header from './component/Header/Header';
import PostList from './component/PostList/PostList';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import CreatePost from './component/CreatePost/CreatePost';
import Home from './component/Home/Home';

const signupUri = "https://instagram-express-demo.herokuapp.com/api/user/signup";
const loginUri = "https://instagram-express-demo.herokuapp.com/api/user/login";
const createPostUri = "https://instagram-express-demo.herokuapp.com/api/post/create";
const commentUri = "https://instagram-express-demo.herokuapp.com/api/post/comment";

let App = (props) => {
  let { posts, getData, like, comment } = props;
  console.log('App rendering');
  let newPosts = [];

  const checkPost = (posts, like, comment) => {
    return posts.map(post => {
      switch (post._id) {
        case like._id: return like;
        case comment._id: return comment;
        default: return post
      }
    })
  }

  newPosts = checkPost(posts, like, comment);

  // Login user
  const onLogin = ({ email, password }, e) => {
    e.preventDefault();
    let { cookies } = this.props;
    axios.post(loginUri, {
      email: email,
      password: password,
    })
      .then(res => cookies.set('userID', res.data._id))
      .catch(err => console.log(err));
  }
  //Create user and setState userID
  const onSignup = (user, e) => {
    e.preventDefault();
    let { name, phone, email, password } = user;
    axios.post(signupUri, {
      name: name,
      phone: phone,
      email: email,
      password: password
    })
      .then(res => this.setState({
        userID: res.data._id,
      }))
      .catch(err => console.log(err));
  }
  //Create post
  const onCreatePost = ({ text }, e) => {
    e.preventDefault();
    let { cookies } = this.props;
    let userID = cookies.get('userID');
    axios.post(createPostUri, {
      userID: userID,
      body: text,
    })
      .then()
      .catch(err => console.log(err));
  }
  // comment
  const onComment = ({ cmt, postID }, e) => {
    e.preventDefault();
    let { cookies } = this.props;
    let userID = cookies.get('userID');
    axios.post(commentUri, {
      postID: postID,
      userID: userID,
      cmt: cmt
    })
      .then()
      .catch(err => console.log(err));
  }

  //like Post
  // const onLike = ({ userID, postID }, e) => {
  //   e.preventDefault();
  //   axios.post(likeUri, {
  //     postID: postID,
  //     userID: userID
  //   })
  //     .then()
  //     .catch(err => console.log(err));
  // }
  // useEffect(() => {
  //   axios.get(postUri)
  //     .then(res => setState({
  //       posts: res.data
  //     }))
  //     .catch(err => console.log(err));
  // }, []);
  useEffect(() => {
    getData()
  }, [getData]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login onLogin={onLogin} />
          </Route>
          <Route path='/signup'>
            <Signup onSignup={onSignup} />
          </Route>
          <Route path='/timeline'>
            <PostList posts={newPosts} onComment={onComment} />
          </Route>
          <Route path='/createpost'>
            <CreatePost onCreatePost={onCreatePost} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProp = {
  getData: getData,
}

const mapStateToProp = (state) => ({
  posts: state.posts,
  like: state.like,
  comment: state.comment,
});

App = connect(mapStateToProp, mapDispatchToProp)(App);

export default withCookies(App);

