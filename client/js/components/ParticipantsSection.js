var React = require('react');
var ParticipantsSection;
var ParticipantsStore = require('../stores/ParticipantsStore');
var ThreadStore = require('../stores/ThreadStore');

var getStateFromStores = function(threaId) {
  var tId = threaId || ThreadStore.getThreadIdByDefault();
  console.log('tId', tId);
  return {
    listOfParticipants: window.__api.listUsersInThread( tId, function(users) {
      return users;
    }),

  };
};

ParticipantsSection = React.createClass({

  getInitialState: function() {
    console.log('init staet particpants');
    return {listOfParticipants: null};
  },

  componentDidMount: function() {
    console.log('componentDidMount');
    ThreadStore.addChangeListener(this._onChange);
  },

  render: function() {
    console.log('listOfParticipants', this.state.listOfParticipants);
    // listOfParticipants =
    return (
      <ul>
        Some text.
      </ul>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores(ThreadStore.getCurrentThreadID()));
  },
});

module.exports = ParticipantsSection;
