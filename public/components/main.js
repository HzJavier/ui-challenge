import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

/**
 * Components
 */
import MetroMusicLogin from './metro-music'

/**
 * Main container
 */
var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>App</h1>

        <ul>
          <li><Link to="/day-1">Day 1</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  } 
});

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="day-1" component={MetroMusicLogin} />
    </Route>
  </Router>
), document.getElementById('main'));
