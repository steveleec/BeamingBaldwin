var ParticipantsStore;
var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/Constants').ActionTypes;

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _currThreadID = null;

ParticipantsStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  gutUsersForThread: function(_currThreadID) {
    // return callback(user) from API
    return window.__api.listUsersInThread(_currThreadID, callback(users));
  },
  getCurrentStateOfThreadsAndMessages: function() {
    return gutUsersForThread(_currThreadID);
  },
});

ParticipantsStore.dispatchToken = Dispatcher.register(function(payload) {
  switch (payload.type) {

  case ActionTypes.CLICK_THREAD:
    _currThreadID = payload.threadId;
    ParticipantsStore.emitChange();
    break;

  default:
      // do nothing
  }
});

module.exports = ParticipantsStore;
