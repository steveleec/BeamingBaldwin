var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    // API => MessageStore & ThreadStore
    RECEIVE_MESSAGE: null,

    // MessageComposer => ???
    CREATE_MESSAGE: null,

    // API => ThreadStore
    RECEIVE_THREADINFO: null,

    // API => ???
    RECEIVE_USERINFO: null,

    // API => ThreadStore
    REMOVED_FROM_THREAD: null,

    SEND_STREAM_THREADS: null,
    SEND_STREAM_MESSAGES: null,
    CLICK_THREAD: null,
  }),
};
