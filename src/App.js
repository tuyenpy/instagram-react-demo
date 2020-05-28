import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { getData, getUser } from './actions';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import PostList from './component/PostList/PostList';
import SideLeft from './component/SideLeft/SideLeft';
import Suggest from './component/Suggest/Suggest';
import CreatePost from './component/CreatePost/CreatePost';

let App = (props) => {
  let { cookies, getUser } = props;
  
  // get user 
  useEffect(() => {
    if (cookies.get('userID')) {
      getUser(cookies.get('userID'));
    }
  }, [cookies, getUser]);

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
                <Route path="/post/create">
                  <CreatePost />
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
  getUser: getUser,
}

const mapStateToProp = (state) => ({
  posts: state.posts,
  user: state.user,
});

App = connect(mapStateToProp, mapDispatchToProp)(App);

export default withCookies(App);

