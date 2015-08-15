var React = require('react');
var classNames = require('classnames');
var ReactPropTypes = React.PropTypes;

var ThreadListItem = React.createClass({

  propTypes: {
    threadObj: ReactPropTypes.object,
  },

  render: function() {
    var classes = classNames({
      'Thread-listItem': true,
    });
    return (
      <li
        className={classes}
        onClick={this._onClick}>
        {this.props.threadObj.threadName}
      </li>
    );
  },

});

module.exports = ThreadListItem;
