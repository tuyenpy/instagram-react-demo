import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { getData } from './actions';

import Header from './component/Header/Header';
import Signup from './component/Signup/Signup';
import Home from './component/Home/Home';
import CreatePost from './component/CreatePost/CreatePost';
import Login from './component/Login/Login';
import PostList from './component/PostList/PostList';
import SideLeft from './component/SideLeft/SideLeft';
import Suggest from './component/Suggest/Suggest';

let App = (props) => {
  let { cookies } = props;
  return (
    <Router>
      <div className="container">
        {
          cookies.get("userID") ? (
            <>
              <Header />
              <Switch>
                <Route exact path="/">
                  <div className="App">
                    <div className="App-header"></div>
                    <PostList />
                    <Suggest />
                  </div>
                  <SideLeft />
                </Route>
              </Switch>
            </>
          ) : (
              <>
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
              </>
            )
        }
      </div>
    </Router>
  );
}

const mapDispatchToProp = {
  getData: getData,
}

const mapStateToProp = (state) => ({
  posts: state.posts,
  user: state.user,
});

App = connect(mapStateToProp, mapDispatchToProp)(App);

export default withCookies(App);

