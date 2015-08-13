var ActionTypes = require('../constants/Constants');
var ThreadStore = require('./ThreadStore');

//getMessagesforCurrentThread: function(){};

//getUserNameForCurrentThread: function(){};

var MessageStore = assign({}, EventEmitter.prototype, {
  dispatchToken: ChatAppDispatcher.register(function(payload){
    switch(action.type) {
      case ActionTypes.CLICK_CURRENT_THREAD:
        ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);

      break;

      case ActionTypes.GET_THREAD_MESSAGES_BY_DEFAULT:
      //For this case, payload has the last thread and its children
      //Each Payload has currentThreadID plus
        ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
        _(payload);
        MessageStore.emitChange();
      break;

      default:
      //do nothing
    }
  })
});

module.exports = MessageStore;