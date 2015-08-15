var React = require('react');
// var classNames = require('classnames');
// var _ = require('lodash');

var ReactPropTypes = React.PropTypes;

var ChildListItem = require('./ChildListItem');

var ThreadListItem = React.createClass({

  propTypes: {
    threadObj: ReactPropTypes.object,
    threadChildren: ReactPropTypes.array,
    threadTitle: ReactPropTypes.string,
    threadLastMessage: ReactPropTypes.string,
  },

  render: function() {
    // var classes = classNames({
    //   'Threads-listItem': true,
    // });
    var children = this.props.threadChildren;
    // console.log('children', children);
    var renderChildrenThread = function() {
      var i;
      var child;
      if (children.length > 0) {
        for (i = 0; i < children.length; i++) {
          child = children[i];
          return (
            <ChildListItem
              className="child"
              childTitle={child.info.title}
              childLastMessage={child.lastMessage}
              children={child.children}
            />
          );
        }
      }
    };

    return (
      <li
        className="parent-thread"
        onClick={this._onClick}>
        <p>Title: {this.props.threadTitle} </p>
        <p>Laste Message: {this.props.threadLastMessage} </p>
        {renderChildrenThread()}
      </li>
    );
  },

  _onClick: function() {
  },

});

module.exports = ThreadListItem;

// var React = require('react');
// var classNames = require('classnames');

// var ReactPropTypes = React.PropTypes;

// var ThreadListItem = React.createClass({

//   propTypes: {
//     threadObj: ReactPropTypes.object,
//   },

//   render: function() {
//     var classes = classNames({
//       'Thread-listItem': true,
//     });
//     return (
//       <li
//         className={classes}
//         onClick={this._onClick}>
//         {this.props.threadObj.threadName}
//       </li>
//     );
//   },

// });

// module.exports = ThreadListItem;
