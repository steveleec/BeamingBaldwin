var React = require('react');

var MessageStore = require('../stores/MessageStore');
var ThreadStore = require('../stores/ThreadStore');

var ComposeTextSection = require('./ComposeTextSection.react');
var OneMessageFromThread = require('./OneMessageFromThread.react');

/** message: id, authorname, date, text */

function getStateFromStores() {
  return {
    messages: MessageStore.getMessagesforCurrentThread(),
    userName: MessageStore.getUserNameForCurrentThread(),
    threadID: { id: "1234"}, //ThreadStore.getCurrentThreadID(),
  };
}

function getOneMessageByThreadId(message) {
  return (
    <OneMessageFromThread
      key={message.id}
      message={message}
    />
  );
}

var MessageSection = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    // MessageStore.addChangeListener(this._onChange);
    // ThreadStore.addChangeListener(this._onChange);
  },

  render: function() {
    var listOfMessagesSelectedByThreadId = this.state.messages.map(getOneMessageByThreadId);
    return (
      <div className="message-section">
        <ul>
          {listOfMessagesSelectedByThreadId}
        </ul>
        <ComposeTextSection threadID={this.state.threadID.id} userName={this.state.userName}/>
      </div>
      );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },
});

module.exports = MessageSection;
