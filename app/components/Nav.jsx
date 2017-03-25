var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
          <li><Link to="/the-phantom-menace" activeClassName="active">I</Link></li>
          <li><Link to="/attack-of-the-clones" activeClassName="active">II</Link></li>
          <li><Link to="/revenge-of-the-sith" activeClassName="active">III</Link></li>
          <li><Link to="/a-new-hope" activeClassName="active">IV</Link></li>
          <li><Link to="/empire-strikes-back" activeClassName="active">V</Link></li>
          <li><Link to="/return-of-the-jedi" activeClassName="active">VI</Link></li>
          <li><Link to="/the-force-awakens" activeClassName="active">VII</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            By <a href="https://github.com/firestar300" target="_blank">Milan Ricoul</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
