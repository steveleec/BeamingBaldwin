var React = require('react');

// var Api = require('../utils/Api');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <h1 onClick={this.handler}>My Flux App</h1>
      </div>
    );
  },

  handler: function() {
    // Api.getAllMessages();
    // Actions.receiveAll('these are rawMessages');
  },

});

module.exports = Header;
