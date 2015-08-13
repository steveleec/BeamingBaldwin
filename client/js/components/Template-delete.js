var React = require('react');

var Header = require('./Header');

var Authentication = require('../mixins/authentication');
var auth = require('../services/auth');

var App = React.createClass({
  mixins: [ Authentication ],

  render: function() {
    var token = auth.getToken();
    return (
      <div>
        <Header />
        <p>Token: {token}</p>
      </div>
    );
  },
});

module.exports = App;
