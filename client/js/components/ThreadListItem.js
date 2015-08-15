var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');
var ChildListItem = require('./ChildListItem');
var ReactPropTypes = React.PropTypes;

var ThreadListItem = React.createClass({

  propTypes: {
    threadObj: ReactPropTypes.object,
  }, // propTypes

  render: function() {
    var classes = classNames({
      'Threads-listItem': true,
    });
    var children = this.props.threadChildren;
    console.log('children', children);
    // var recurse = function(children){
    //   for (var i=0; i<children.length; i++) {

    //   }
    // };
    // if (children.length > 0) {
    //   recurse(children);
    // };

    // var childrenThread = _.map(children, function(child) {
    //   console.log('child.info.title', child.info.title);
    //   console.log('child.info.title', child.lastMessage);
      // return (
      //   <ChildListItem
      //     className="child"
      //     childTitle={child.info.title}
      //     childLastMessage={child.lastMessage}
      //     children={child.children}
      //   />

      // );
    // });

    var renderChildrenThread = function(){
      if (children.length > 0) {
        for (var i=0; i<children.length; i++) {
          var child = children[i];
          return (
            <ChildListItem
              className="child"
              childTitle={child.info.title}
              childLastMessage={child.lastMessage}
              children={child.children}
            />
          );
        }
      };
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
  }, // render
  _onClick: function(){
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
