var React = require('react');
var RedirectWhenLoggedIn = require('../mixins/redirect_when_logged_in');

var Home = React.createClass({

  mixins: [RedirectWhenLoggedIn],

  render: function() {
    return (
      <div>
        Please login...
      </div>
    );
  },

});

module.exports = Home;
