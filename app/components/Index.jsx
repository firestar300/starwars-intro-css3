var React = require('react');
var {Link} = require('react-router');

var Index = React.createClass({
  render: function(props) {
    return (
      <div className="movies-list">
        <div className="movie">
          <Link to="/the-phantom-menace" activeClassName="active">
            <img src="img/the-phantom-menace.jpg" />
          </Link>
        </div>
        <div className="movie">
          <Link to="/attack-of-the-clones" activeClassName="active">II</Link>
        </div>
        <div className="movie">
          <Link to="/revenge-of-the-sith" activeClassName="active">III</Link>
        </div>
        <div className="movie">
          <Link to="/a-new-hope" activeClassName="active">IV</Link>
        </div>
        <div className="movie">
          <Link to="/empire-strikes-back" activeClassName="active">V</Link>
        </div>
        <div className="movie">
          <Link to="/return-of-the-jedi" activeClassName="active">VI</Link>
        </div>
        <div className="movie">
          <Link to="/the-force-awakens" activeClassName="active">VII</Link>
        </div>
      </div>
    );
  }
});

module.exports = Index;
