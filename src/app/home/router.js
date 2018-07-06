import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './views/home';

class HomeRoute extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home}></Route>
      </div>
    );
  }
}

export default HomeRoute;