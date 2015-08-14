var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    // API => MessageStore & ThreadStore
    RECEIVE_MESSAGE: null,

    // MessageComposer => ???
    CREATE_MESSAGE: null,

    // API => ThreadStore
    RECEIVE_THREADINFO: null,
  }),
};
