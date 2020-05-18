import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Header from './component/Header/Header';
import PostList from './component/PostList/PostList';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import CreatePost from './component/CreatePost/CreatePost';

const signupUri = "https://instagram-express-demo.herokuapp.com/api/user/signup";
const loginUri = "https://instagram-express-demo.herokuapp.com/api/user/login";
const createPostUri = "https://instagram-express-demo.herokuapp.com/api/post/create";
const postUri = "https://instagram-express-demo.herokuapp.com/api/post/index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userID: "",
      posts: [],
    };
    this.onSignup = this.onSignup.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onCreatePost = this.onCreatePost.bind(this);
  }

  // Login user
  onLogin({email, password}, e) {
    e.preventDefault();
    axios.post(loginUri, {
      email: email,
      password: password,
    })
     .then(res => this.setState({
       userID: res.data._id,
     }))
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
    let { userID } = this.state;
    axios.post(createPostUri, {
      userID: userID,
      body: text,
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
    let { posts } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route path='/login'>
          <Login onLogin={ this.onLogin }/>
        </Route>
        <Route path='/signup'>
          <Signup onSignup={ this.onSignup}/>
        </Route>
        <Route path='/timeline'>
          <PostList posts={ posts } />
        </Route>
        <Route path='/createpost'>
          <CreatePost onCreatePost={this.onCreatePost}/>
        </Route>
      </Switch>
      </Router>
    );
  }
}


export default App;

