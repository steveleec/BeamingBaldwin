var Dispatcher = require('../dispatcher/ChatAppDispatcher');
var Constants = require('../constants/Constants');
var ChatWebAPIUtils = require('../utils/ChatWebAPIUtils');

var ActionTypes = Constants.ActionTypes;

function getCreatedMessageData(text, currentThreadID) {
  var timestamp = Date.now();
  return {
    createdAt: new Date(timestamp),
    messageId: 'm_' + timestamp,
    text: text,
    threadId: currentThreadID,
    userId: localStorage.username || 'Bill',
  };
}

module.exports = {

  createMessage: function(text, currentThreadID) {
    var messageObj;

    messageObj = getCreatedMessageData(text, currentThreadID);
    console.log('Sending message to the DB:', messageObj);
    ChatWebAPIUtils.sendMessageToDB(messageObj);

    Dispatcher.dispatch({
      type: ActionTypes.CREATE_MESSAGE,
      text: text,
      currentThreadID: currentThreadID,
    });
  }, // createMessage

};
