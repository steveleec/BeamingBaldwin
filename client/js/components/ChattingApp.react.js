var MessageSection = require('./MessageSection.react');
var React = require('react');

var ChattingApp = React.createClass({
  render: function(){
    return (
      <div className="ChattingApp">
        // <HeaderSection/>
        // <ThreadSection/>
        <MessageSection/>
      </div>
    );
  }
});