import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

/**
 * Components
 */
import MetroMusicLogin from './metro-music'
import Day_3 from './day-3/landing-page'

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
          <li><Link to="/day-3">Day 3</Link></li>
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
      <Route path="day-3" component={Day_3} />
    </Route>
  </Router>
), document.getElementById('main'));
