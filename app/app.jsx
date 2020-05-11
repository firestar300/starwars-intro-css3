var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Index = require('Index');
var Crawl = require('Crawl');

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyle');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index} />
      <Route path="the-phantom-menace" component={Crawl} movie="tpm" />
      <Route path="attack-of-the-clones" component={Crawl} movie="aotc" />
      <Route path="revenge-of-the-sith" component={Crawl} movie="rots" />
      <Route path="a-new-hope" component={Crawl} movie="anh" />
      <Route path="empire-strikes-back" component={Crawl} movie="esb" />
      <Route path="return-of-the-jedi" component={Crawl} movie="rotj" />
      <Route path="the-force-awakens" component={Crawl} movie="tfa" />
      <Route path="the-last-jedi" component={Crawl} movie="tlj" />
      <Route path="rise-of-skywalker" component={Crawl} movie="ros" />
    </Route>
  </Router>,
  document.getElementById('app')
);
