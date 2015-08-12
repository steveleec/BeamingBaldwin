var React = require('react');

var OneMessageFromThread = React.createClass({
  propTypes: {
    message: React.PropTypes.object
  }

  render: function(){
    var message = this.props.message;
    return (
      <li className="message-from-thread">
        <h5 className="message-author">{message.authorName}</h5>
        <div className="message-date">{message.date.toLocalTimeString()}</div>
        <div classsName="message-text">{message.text}</div>
      </li>
    );
  }
});

module.exports = OneMessageFromThread;