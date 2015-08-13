var React = require('react');

var MessageListItem = React.createClass({

  propTypes: {
    message: React.PropTypes.object
  },

  render: function() {
    var message = this.props.message;
    return (
      <li>
        <h5>{message.authorName}</h5>
        <div>
          {message.date.toLocaleTimeString()}
        </div>
        <div>{message.text}</div>
      </li>
    );
  }

});

module.exports = MessageListItem;
