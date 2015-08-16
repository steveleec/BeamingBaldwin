var React = require('react');
var ParticipantsSection;
var ParticipantsStore = require('../stores/ParticipantsStore');

var getStateFromStores = function() {
  return {
    currentState: ParticipantsStore.getCurrentStateOfThreadsAndMessages(),
  };
};

ParticipantsSection = React.createClass({
  getInitialState: function() {
    return getUsersForCurrentThread();
  },
  componentDidMount: function() {
    ThreadStore.addChangeListener(this._onChange);
  },
  render: function() {
    console.log('this.state.currentState', this.state.currentState);
    return (
      <div>

      </div>
    );
  },
});

module.exports = ParticipantsSection;
