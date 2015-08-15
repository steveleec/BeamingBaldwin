var React = require('react');
var ReactPropTypes = React.PropTypes;

var ChildListItem = React.createClass({

  propTypes: {
    childTitle: ReactPropTypes.string,
    childLastMessage: ReactPropTypes.string,
  },

  render: function() {
    // console.log('ChildListItem', ChildListItem);
    return (
      <li>
        <div>Title: {this.props.childTitle} </div>
        <div>Laste Message: {this.props.childLastMessage} </div>
      </li>
      );
  },
});

module.exports = ChildListItem;
