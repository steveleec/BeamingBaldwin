var React = require('react');
var API = require('../utils/API');
var UserSelectorItem = require('./UserSelectorItem');
var _ = require('lodash');

module.exports = UserSelector = React.createClass({
  getInitialState: function() {
    API.listUsers(function(users) {
      this.setState({users: users});
    }.bind(this));

    return {
      users: [],
    };
  },

  render: function() {
    var userListItems = this.state.users
    .map(function(user) {
      return (
        <UserSelectorItem user={user} ref={user.id}/>
      );
    });
    return (
      <div className="UserSelector">
        <ul className="UserSelector__list">
          {userListItems}
        </ul>
      </div>
    );
  },
});

module.exports.getSelected = function(userSelectorRef) {
  // refs.UserSelector.refs.brian.state
  // var users = this.refs.UserSelector.refs;
  var ref = userSelectorRef.refs;
  var users = [];
  _.each(ref, function(obj, user) {
    // console.log(user, obj.state.complete);
    if (obj.state.complete) users.push(user);
  });
  return users;
};
