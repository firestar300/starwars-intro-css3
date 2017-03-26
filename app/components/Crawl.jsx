var React = require('react');
var logo = require('./../img/starwars-logo.png');
var path = require('path');

var Crawl = React.createClass({
  componentWillMount() {
    this.timer = setTimeout(() => {
      window.location.hash = '/';
    }, 95000);
  },
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  render: function(props) {
    var movie = this.props.route.movie;
    var text = require('./../datas/' + movie + '.js');

    return (
      <div>
        <p id="start">Il y a bien longtemps dans une galaxie lointaine très lointaine....</p>

        <img src={logo} alt="Star Wars" className="logo" />

        <div id="titles">
          <div id="titlecontent">
            <p className="title center">Episode <span className="roman">{text.romanNumber}</span></p>
            <p className="sub center">{text.title}</p>
            <br />
            <p>{text.first}</p>
            <br />
            <p>{text.second}</p>
            <br />
            <p>{text.third}</p>
          </div>
        </div>

        <audio autoPlay>
          <source src="sounds/intro.mp3"></source>
          <source src="sounds/intro.ogg"></source>
        </audio>
      </div>
    );
  }
});

module.exports = Crawl;
