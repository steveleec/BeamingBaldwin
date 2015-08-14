var React = require('react');
var ReactPropTypes = React.PropTypes;

var MessageListItem = React.createClass({

  propTypes: {
    messageObj: ReactPropTypes.object,
  },

  render: function() {
    var messageObj = this.props.messageObj;
    return (
      <li className="Message__listItem">
        <h5>{messageObj.userID}</h5>
        <div>
          {messageObj.createdAt.toString()}
        </div>
        <div>{messageObj.text}</div>
      </li>
    );
  },

});

module.exports = MessageListItem;
