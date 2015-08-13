var ThreadStore;
var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var SlickConstants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = SlickConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _currThreadID = null;
var _threads = {};

ThreadStore = assign({}, EventEmitter.prototype, {

  init: function() {

  }, // init

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }, // emit

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }, // addChangeListener

  removeChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }, // removeChangeListener

  getCurrentThreadID: function() {
    return _currThreadID;
  },

});

ThreadStore.dispatchToken = ChatAppDispatcher.register(function(payload) {
  switch (payload.type) {

  case ActionTypes.CLICK_THREAD:
    _currThreadID = payload.threadID;
    break;

  default:
    // do nothing
  }
});

module.exports = ThreadStore;
