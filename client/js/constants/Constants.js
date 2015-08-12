var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    CLICK_NEW_THREAD: null,
    CLICK_CURRENT_THREAD: null,
    GET_THREAD_MESSAGES_BY_DEFAULT: null,
  })
};