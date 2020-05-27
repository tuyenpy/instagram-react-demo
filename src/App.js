import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { getData } from './actions';

import Header from './component/Header/Header';
import Signup from './component/Signup/Signup';
import Home from './component/Home/Home';
import CreatePost from './component/CreatePost/CreatePost';

let App = (props) => {

  return (
    <Router>
      <Header />
      <div className="App">
        <div className="App-header"></div>
        <Switch>
          <Route exact path='/'>
              <Home />
            </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/post/create'>
            <CreatePost />
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

