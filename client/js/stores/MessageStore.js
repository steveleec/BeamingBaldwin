var MessageStore;
var ThreadStore = require('./ThreadStore');
var Dispatcher = require('../dispatcher/Dispatcher');
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

MessageStore.dispatchToken = Dispatcher.register(function(payload) {
  switch (payload.type) {

  case ActionTypes.CLICK_THREAD:
    Dispatcher.waitFor([ThreadStore.dispatchToken]);
    break;

  case ActionTypes.RECEIVE_MESSAGE:
    Dispatcher.waitFor([ThreadStore.dispatchToken]);
    // TODO: this will come from the API
    _addMessageToMessagesObj(payload.message);
    break;

  default:
    // do nothing
  }
});

module.exports = MessageStore;
