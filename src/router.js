import { Route, Switch, HashRouter } from 'react-router-dom';
import React, { Component } from 'react';
import HomeRoute from './app/home/router';
import Home from './app/home/views/home';

class RouterCom extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <HomeRoute></HomeRoute>
          <Route component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterCom;