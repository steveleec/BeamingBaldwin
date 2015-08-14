var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {
  messageReceivedFromApi: function(message) {
    console.log('ApiActionCreator.messageReceived', message);
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_MESSAGE,
      message: message,
    });
  },
  threadInfoReceivedFromApi: function(threadInfo) {
    console.log('ApiActionCreator.threadInfoReceivedFromApi', threadInfo);
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_THREADINFO,
      threadInfo: threadInfo,
    });
  },
};
