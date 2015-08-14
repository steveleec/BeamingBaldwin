var Firebase = require('Firebase');
var ref = new Firebase('https://amber-inferno-3412.firebaseio.com');
var API = require('../util/API');

var auth = {
  login: function(email, pass, cb) {
    var context = this;
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    if (!!email || !!pass) {
      ref.authWithPassword({
        email: email,
        password: pass,
      }, function(error, authData) {
        if (error) {
          console.log('Login Failed!', error);
          if (cb) cb(false);
          context.onChange(false);
        } else {
          console.log('Authenticated successfully with payload:', authData);
          localStorage.token = authData.token;
          API.login(email);
          if (cb) cb(true);
          context.onChange(true);
        }
      });
    }
  },

  signup: function(email, pass, cb) {
    var context = this;
    // cb = arguments[arguments.length - 1];
    // if (localStorage.token) {
    //   if (cb) cb(true);
    //   this.onChange(true);
    //   return;
    // }
    if (!!email || !!pass) {
      ref.createUser({
        email: email,
        password: pass,
      }, function(error, userData) {
        if (error) {
          console.log('Error creating user:', error);
          // if (cb) cb(false);
          // context.onChange(false);
        } else {
          console.log('Successfully created user account with uid:', userData.uid);
          API.addUser(email);
          context.login(email, pass, cb);
        }
      });
    }
  },

  getToken: function() {
    return localStorage.token;
  },

  logout: function(cb) {
    delete localStorage.token;
    API.logout(user);
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn: function() {
    return !!localStorage.token;
  },

  onChange: function() {
  },
};

module.exports = auth;
