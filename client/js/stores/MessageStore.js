var MessageStore;
var ThreadStore = require('./ThreadStore');
var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher.js');
var ActionTypes = require('../constants/Constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _messagesObj = {
  '1': [
    {
      createdAt: new Date(),
      messageID: 1, // MessageIdType
      text: 'sup homie', // String
      threadID: 1, // ThreadIdType
      userID: 'Bob', // String
    },
    {
      createdAt: new Date(),
      messageID: 2, // MessageIdType
      text: 'sup bro', // String
      threadID: 1, // ThreadIdType
      userID: 'Bob', // String
    },
    {
      createdAt: new Date(),
      messageID: 3, // MessageIdType
      text: 'sup man', // String
      threadID: 1, // ThreadIdType
      userID: 'Bob', // String
    },
  ],
};

function _addMessageToMessagesObj(messagePayloadObj) {
  if (_messagesObj[messagePayloadObj.threadID] === undefined) {
    _messagesObj[messagePayloadObj.threadID] = [];
  }
  _messagesObj[messagePayloadObj.threadID].push(messagePayloadObj);
}

MessageStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }, // emit

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }, // addChangeListener

  removeChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }, // removeChangeListener

  getMessagesforCurrentThread: function() {
    // TODO: sort the messages by chronological order
    return _messagesObj['1'];
    // return _messagesObj[ThreadStore.getCurrentThreadID()];
  }, // getMessagesforCurrentThread

});

MessageStore.dispatchToken = ChatAppDispatcher.register(function(payload) {
  switch (payload.type) {

  case ActionTypes.CLICK_THREAD:
    ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
    break;

  case ActionTypes.RECEIVE_MESSAGE:
    // TODO: this will come from the API
    _addMessageToMessagesObj(payload.message);
    break;

  case ActionTypes.GET_THREAD_MESSAGES_BY_DEFAULT:
    ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
    MessageStore.emitChange();
    break;

  default:
    // do nothing
  }
});

module.exports = MessageStore;
