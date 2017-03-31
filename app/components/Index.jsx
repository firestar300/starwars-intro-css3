var React = require('react');
var {Link} = require('react-router');

var Nav = require('Nav');

var images = [
  {id: 0, to: '/the-phantom-menace', src: require('./../img/phantom-menace.jpg')},
  {id: 1, to: '/attack-of-the-clones', src: require('./../img/attack-of-the-clones.jpg')},
  {id: 2, to: '/revenge-of-the-sith', src: require('./../img/revenge-of-the-sith.jpg')},
  {id: 3, to: '/a-new-hope', src: require('./../img/a-new-hope.jpg')},
  {id: 4, to: '/empire-strikes-back', src: require('./../img/empire-strikes-back.jpg')},
  {id: 5, to: '/return-of-the-jedi', src: require('./../img/return-of-the-jedi.jpg')},
  {id: 6, to: '/the-force-awakens', src: require('./../img/the-force-awakens.jpg')}
];

var Index = React.createClass({
  render: function(props) {
    var movies = images.map(image => {
      return (
        <div className="movie" key={image.id}>
          <Link to={image.to} activeClassName="active">
            <img src={image.src} />
          </Link>
        </div>
      );
    });

    return (
      <div>
        <Nav />
        <div className="movies-list">
          {movies}
        </div>
      </div>
    );
  }
});

module.exports = Index;
