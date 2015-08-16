var React = require('react');
var ParticipantsSection;
var _ = require('lodash');
var ThreadStore = require('../stores/ThreadStore');
var res;

var getStateFromStores = function() {
  console.log(ThreadStore.getCurrentParticipants());
  return {
    listOfParticipants: ThreadStore.getCurrentParticipants(),
  };
};

ParticipantsSection = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    console.log('componentDidMount');
    ThreadStore.addChangeListener(this._onChange);
  },

  render: function() {
    var renderList;
    var list;
    var key;
    res = [];
    list = this.state.listOfParticipants;
    if (this.state !== undefined) {
      for (key in list) res.push(key);
      renderList = _.map(res, function(user) {
        return (
          <li>{user}</li>
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
    this.setState(getStateFromStores());
  },
});

module.exports = ParticipantsSection;
