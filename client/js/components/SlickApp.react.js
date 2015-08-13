var MessageSection = require('./MessageSection.react');
var HeaderSection = require('./HeaderSection.react');
var ThreadSection = require('./ThreadSection.react');
var React = require('react');

var SlickApp = React.createClass({
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
