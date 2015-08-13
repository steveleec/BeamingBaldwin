var React = require('react');

var ChatBoxActionCreator = require('../actions/ChatBoxActionCreator');
var ChatWebAPIUtils = require('../utils/ChatWebAPIUtils');

var ENTER_KEY_CODE = 13;

var ComposeTextSection = React.createClass({

  propTypes: {
    threadID: React.PropTypes.string.isRequired,
    userName: React.PropTypes.string
  },

  getInitialState: function() {
    return {text: ''};
  },

  render: function() {
    return (
      <textarea
        className="message-composition"
        name="message"
        value={this.state.text}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
      />
    );
  },

  _onChange: function(event, value) {
    this.setState({text: event.target.value});
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var textToSend = this.state.text.trim();
      if (textToSend) {
        ChatWebAPIUtils.sendMessageToDB(textToSend, this.props.threadID, this.props.userName);
      }
      this.setState({text: ''});
    }
  },

});

module.exports = ComposeTextSection;
