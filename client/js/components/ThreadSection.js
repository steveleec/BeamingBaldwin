var React = require('react');
var _ = require('lodash');
var ThreadStore = require('../stores/ThreadStore');

var getStateFromStores = function() {
  return {
    // currentState: ThreadStore.getCurrentStateOfThreadsAndMessages(),
    currentState: {"0":{"info":{"timestamp":1439595498518,"threadId":"0","title":"General","depth":0},"listOfchildren":[],"lastMessage":"test","children":[]},"-JwjvY4uDv2-KdX6WtTR":{"info":{"timestamp":1439618183611,"depth":0,"participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY4uDv2-KdX6WtTR","title":"A"},"listOfchildren":["-JwjvY5CCqc8g1kBHuAI","-JwjvY5UkFxfuI1WCjMV"],"lastMessage":"ffsd","children":[{"info":{"timestamp":1439618183623,"depth":1,"parentId":"-JwjvY4uDv2-KdX6WtTR","participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY5CCqc8g1kBHuAI","title":"B"},"listOfchildren":[],"lastMessage":"","children":[]},{"info":{"timestamp":1439618183642,"depth":1,"parentId":"-JwjvY4uDv2-KdX6WtTR","participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY5UkFxfuI1WCjMV","title":"C"},"listOfchildren":[],"lastMessage":"","children":[]}]},"-JwjvY5nH_kZaRPwdiQS":{"info":{"timestamp":1439618183663,"depth":0,"participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY5nH_kZaRPwdiQS","title":"D"},"listOfchildren":["-JwjvY69Mtpu6P4YSgG6"],"lastMessage":"","children":[{"info":{"timestamp":1439618183687,"depth":1,"parentId":"-JwjvY5nH_kZaRPwdiQS","participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY69Mtpu6P4YSgG6","title":"E"},"listOfchildren":[],"lastMessage":"","children":[]}]},"-JwjvY6S7wcZZ3NLtpYF":{"info":{"timestamp":1439618183705,"depth":0,"participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY6S7wcZZ3NLtpYF","title":"F"},"listOfchildren":["-JwjvY6v3IRgvGSpOnux","-JwjvY7DZhjkj2VicHkq"],"lastMessage":"blahblahblah","children":[{"info":{"timestamp":1439618183735,"depth":1,"parentId":"-JwjvY6S7wcZZ3NLtpYF","participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY6v3IRgvGSpOnux","title":"G"},"listOfchildren":["-JwjvY7WGpHi8qnMlPJx"],"lastMessage":"","children":[{"info":{"timestamp":1439618183773,"depth":2,"parentId":"-JwjvY6v3IRgvGSpOnux","participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY7WGpHi8qnMlPJx","title":"H"},"listOfchildren":[],"lastMessage":"","children":[]}]},{"info":{"timestamp":1439618183754,"depth":1,"parentId":"-JwjvY6S7wcZZ3NLtpYF","participants":{"abc-abc-com":true,"b-b-com":true,"cyu06-hotmail-com":true,"l-l-com":true},"threadId":"-JwjvY7DZhjkj2VicHkq","title":"I"},"listOfchildren":[],"lastMessage":"","children":[]}]},"-JwmXgcR58lLqVijb1pu":{"info":{"timestamp":1439662000823,"depth":0,"participants":{"cyu06-hotmail-com":true},"threadId":"-JwmXgcR58lLqVijb1pu","title":"New Root Thread"},"listOfchildren":[],"lastMessage":"I'm COOL!","children":[]}},
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
