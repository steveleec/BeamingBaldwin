var ActionTypes = require('../constants/Constants');
var ThreadStore = require('./ThreadStore');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher.js');

var MessageStore = assign({}, EventEmitter.prototype, {
  getMessagesforCurrentThread: function() {
    return [];
  },

  getUserNameForCurrentThread: function() {

  },

  dispatchToken: ChatAppDispatcher.register(function(payload) {
    switch (action.type) {

    case ActionTypes.CLICK_CURRENT_THREAD:
      ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
      break;
    case ActionTypes.GET_THREAD_MESSAGES_BY_DEFAULT:
      /* For this case, payload has the last thread and its children
       * Each Payload has currentThreadID plus
       */
      ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
      _(payload);
      MessageStore.emitChange();
      break;
    default:
      // do nothing
    }
  }),

});

module.exports = MessageStore;
