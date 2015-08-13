var Firebase = require('Firebase');

module.exports = {
  signup: function(email, password) {
    var ref = new Firebase('https://amber-inferno-3412.firebaseio.com');
    ref.createUser({
      email: email,
      password: password,
    }, function(error, userData) {
      if (error) {
        console.log('Error creating user:', error);
      } else {
        console.log('Successfully created user account with uid:', userData.uid);
      }
    });
  },

  signin: function(email, password) {
    var ref = new Firebase('https://amber-inferno-3412.firebaseio.com');
    ref.authWithPassword({
      email: email,
      password: password,
    }, function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
      }
    });
  },

};
