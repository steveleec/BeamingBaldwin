var React = require('react');
var ParticipantsSection;
var _ = require('lodash');
var ThreadStore = require('../stores/ThreadStore');
var API = require('../utils/API');
var res;

var getStateFromStores = function() {
  return {
    listOfParticipants: ThreadStore.getCurrentParticipants(),
  };
};

ParticipantsSection = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    // console.log('componentDidMount');
    ThreadStore.addChangeListener(this._onChange);
  },

  render: function() {
    var renderList;
    var list;
    var key;
    res = [];
    list = this.state.listOfParticipants;
    if (this.state !== undefined) {
      // for (key in list) res.push(key);
      renderList = _.map(list, function(user) {
        return (
          <li>{user.name}</li>
        );
      });
    }
    return (
      <ul>
        <p>Friends in this topic</p>
        {renderList}
      </ul>
    );
  },
  _onChange: function() {
    var thread = ThreadStore.getCurrentThread();
    if (thread) {
      API.listUsersInThread(thread.threadId, function(users) {
        // console.log('thead users', users);
        this.setState({
          listOfParticipants: users
        });
      }.bind(this));
    }
  },
});

module.exports = ParticipantsSection;
