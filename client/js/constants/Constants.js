var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    RECEIVE_MESSAGE: null,
    CLICK_NEW_THREAD: null,
    CLICK_CURRENT_THREAD: null,
    GET_THREAD_MESSAGES_BY_DEFAULT: null,
    SEND_STREAM_OF_THREADS: null,
    SEND_STREAM_OF_MESSAGES: null,
  }),
};
