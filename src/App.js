import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import { withCookies } from 'react-cookie';

import Header from './component/Header/Header';
import PostList from './component/PostList/PostList';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import CreatePost from './component/CreatePost/CreatePost';
import Home from './component/Home/Home';

const signupUri = "https://instagram-express-demo.herokuapp.com/api/user/signup";
const loginUri = "https://instagram-express-demo.herokuapp.com/api/user/login";
const createPostUri = "https://instagram-express-demo.herokuapp.com/api/post/create";
const postUri = "https://instagram-express-demo.herokuapp.com/api/post/index";
const commentUri = "https://instagram-express-demo.herokuapp.com/api/post/comment";
const likeUri = "https://instagram-express-demo.herokuapp.com/api/post/like";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      posts: [],
    };
    this.onSignup = this.onSignup.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onCreatePost = this.onCreatePost.bind(this);
    this.onComment = this.onComment.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  // Login user
  onLogin({ email, password }, e) {
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
  onSignup(user, e) {
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
  onCreatePost({ text }, e) {
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
  onComment({ cmt, postID }, e) {
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
  onLike({ userID, postID }, e) {
    e.preventDefault();
    axios.post(likeUri, {
      postID: postID,
      userID: userID
    })
      .then()
      .catch(err => console.log(err));
  }

  //Load all post
  componentDidMount() {
    axios.get(postUri)
      .then(res => this.setState({
        posts: res.data
      }))
      .catch(err => console.log(err));
  }



  render() {
    console.log(this.state);
    let { posts } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login onLogin={this.onLogin} />
            </Route>
            <Route path='/signup'>
              <Signup onSignup={this.onSignup} />
            </Route>
            <Route path='/timeline'>
              <PostList posts={posts} onComment={this.onComment} onLike={this.onLike} />
            </Route>
            <Route path='/createpost'>
              <CreatePost onCreatePost={this.onCreatePost} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default withCookies(App);

