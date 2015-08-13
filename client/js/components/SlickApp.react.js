var React = require('react');

var MessageSection = require('./MessageSection.react');
var HeaderSection = require('./HeaderSection.react');
var ThreadSection = require('./ThreadSection.react');

var Authentication = require('../mixins/authentication');

var SlickApp = React.createClass({
  mixins: [ Authentication ],

  render: function() {
    return (
      <div className="ChattingApp">
        <HeaderSection/>
        <ThreadSection/>
        <MessageSection/>
      </div>
    );
  },
});

module.exports = SlickApp;
