var React = require('react');
var _ = require('lodash');
var ThreadStore = require('../stores/ThreadStore');

var getStateFromStores = function() {
  return {
    currentState: ThreadStore.getCurrentStateOfThreadsAndMessages(),
  };
};
var counter = 0;
var classNameOfElement="";
var deep = false;
var ThreadSection = React.createClass({

  getInitialState: function() {

    return getStateFromStores();
  },
  componentDidMount: function() {
    ThreadStore.addChangeListener(this._onChange);
    // UnreadThreadStore.addChangeListener(this._onChange);
  },
  render: function() {

    var threadListItems;
    var nodes = this.state.currentState;
    var classOfElement="Thread__listItem--";
    if (Object.keys(nodes).length > 0) {
      threadListItems = _.map(this.props.node || nodes, function(node) {
        return <li className={classOfElement + node.info.depth}>{node.info.title}<ThreadSection node={node.children}/></li>
      });
    }

    return (
      <ul className="Thread" node={nodes}>
        {threadListItems}
      </ul>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  },
});

module.exports = ThreadSection;

// var React = require('react');
// var ThreadListItem = require('./ThreadListItem');
// var ThreadStore = require('../stores/ThreadStore');

// var ThreadSection = React.createClass({

//   getInitialState: function() {
//     // return this.state object
//     return {
//       // threads: ThreadStore.getAllThreads(),
//       threads: [
//         {
//           threadID: 't_1',
//           threadName: 'LOL',
//           lastMessageObj: {},
//         },
//         {
//           threadID: 't_2',
//           threadName: 'Sweet',
//           lastMessageObj: {},
//         },
//         {
//           threadID: 't_3',
//           threadName: 'Nice',
//           lastMessageObj: {},
//         },
//       ], // threads
//     };
//   }, // getInitialState

//   render: function() {
//     var threadListItems = this.state.threads.map(function(threadObj) {
//       return (
//         <ThreadListItem
//           key={threadObj.threadName}
//           threadObj={threadObj}
//         />
//       );
//     });
//     return (
//       <ul className="Thread">
//         {threadListItems}
//       </ul>
//     );
//   }, // render

// });

// module.exports = ThreadSection;
