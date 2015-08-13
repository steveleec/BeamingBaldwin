var React = require('react');

var MessageSection = require('./MessageSection.react');
var HeaderSection = require('./HeaderSection.react');
var ThreadSection = require('./ThreadSection.react');

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
