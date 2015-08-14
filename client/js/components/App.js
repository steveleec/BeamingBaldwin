var React = require('react');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var auth = require('../services/auth');

var App = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: auth.loggedIn(),
    };
  },

  componentWillMount: function() {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render: function() {
    var signinOrOut = this.state.loggedIn ?
      <Link to="signout">Signout</Link> :
      <Link to="signin">Signin</Link>;
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>{signinOrOut}</li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
        <RouteHandler/>
      </div>
    );
  },

  setStateOnAuth: function(loggedIn) {
    this.setState({
      loggedIn: loggedIn,
    });
  },
});

module.exports = App;
