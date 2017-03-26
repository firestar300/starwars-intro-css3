var React = require('react');
var {Link} = require('react-router');

var images = [
  {to: '/the-phantom-menace', src: require('./../img/phantom-menace.jpg')},
  {to: '/attack-of-the-clones', src: require('./../img/attack-of-the-clones.jpg')},
  {to: '/revenge-of-the-sith', src: require('./../img/revenge-of-the-sith.jpg')},
  {to: '/a-new-hope', src: require('./../img/a-new-hope.jpg')},
  {to: '/empire-strikes-back', src: require('./../img/empire-strikes-back.jpg')},
  {to: '/return-of-the-jedi', src: require('./../img/return-of-the-jedi.jpg')},
  {to: '/the-force-awakens', src: require('./../img/the-force-awakens.jpg')}
];

var Index = React.createClass({
  render: function(props) {
    var movies = images.map(image => {
      return (
        <div className="movie">
          <Link to={image.to} activeClassName="active">
            <img src={image.src} />
          </Link>
        </div>
      );
    });

    return (
      <div className="movies-list">
        {movies}
      </div>
    );
  }
});

module.exports = Index;
