var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');
var ReactPropTypes = React.PropTypes;

var ChildListItem = React.createClass({
  render: function(){
    console.log('ChildListItem', ChildListItem);
    return (
      <li>
        <div>Title: {this.props.childTitle} </div>
        <div>Laste Message: {this.props.childLastMessage} </div>
      </li>
      );
  },
});

module.exports = ChildListItem;
