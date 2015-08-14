var Dispatcher = require('../dispatcher/ChatAppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {
  messageReceivedFromApi: function(message) {
    console.log('APIActionCreator.messageReceived', message);
    Dispatcher.dispatch({
      type: ActionTypes.RECEIVE_MESSAGE, 
      message: message
    });
  },  
}
