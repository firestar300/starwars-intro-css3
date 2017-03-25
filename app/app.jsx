var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Index = require('Index');

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyle');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index} />
      <Route path="the-phantom-menace" />
      <Route path="attack-of-the-clones" />
      <Route path="revenge-of-the-sith" />
      <Route path="a-new-hope" />
      <Route path="empire-strikes-back" />
      <Route path="return-of-the-jedi" />
      <Route path="the-force-awakens" />
    </Route>
  </Router>,
  document.getElementById('app')
);
