var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
