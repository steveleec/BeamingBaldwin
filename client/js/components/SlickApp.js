var React = require('react');

var MessageSection = require('./MessageSection');
var HeaderSection = require('./HeaderSection');
var ThreadSection = require('./ThreadSection');
var ParticipantsSection = require('./ParticipantsSection');

var Authentication = require('../mixins/authentication');

var SlickApp = React.createClass({

  mixins: [ Authentication ],

  render: function() {
    return (
      <div className="SlickApp">
        <HeaderSection/>
        <div className="Body">
          <div className="Thread">
            <ThreadSection />
          </div>
          <MessageSection />
          <div className="Participants">
            <ParticipantsSection />
          </div>
        </div>
      </div>
    );
  },

});

module.exports = SlickApp;
