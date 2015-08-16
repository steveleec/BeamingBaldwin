var React = require('react');
var ReactPropTypes = React.PropTypes;
var API = require('../utils/API');
var ThreadActionCreators = require('../actions/ThreadActionCreators');
var UserSelector = require('./UserSelector');
var _ = require('lodash');

var NewThreadForm = React.createClass({
  propTypes: {
    threadProps: ReactPropTypes.object,
    doClose: ReactPropTypes.func,
  },
  getInitialState: function() {
    return {
      participants: localStorage.email || 'Bobby Tables',
    };
  },

  // componentDidMount: function() {
  //   console.log('NewThreadForm mounted');
  //   if(this.props.threadProps && this.props.threadProps.parentId) {
  //     console.log(this.props.threadProps.parentId);
  //     UserSelector.setSelected(this.props.threadProps.parentId);
  //   }
  //   console.log(0);
  //   UserSelector.setSelected(0);
  // },

  render: function() {
    return (
      <div className="NewThreadForm">
        <h2 className="NewThreadForm__h2">New Thread</h2>
        <form
          className="NewThreadForm__form"
          onSubmit={this._handleSubmit}
        >
          <label className="NewThreadForm__label">Topic:
            <input
              className="NewThreadForm__input"
              ref="title"
              name="title"
              placeholder="Slick Title"
              type="text"
            />
          </label>
          <label className="NewThreadForm__label">Participants:
            <input
              className="NewThreadForm__input"
              ref="participants"
              name="participants"
              type="text"
              value={this.state.participants}
            />
          </label>
          <input className="NewThreadForm__submit"
            type="submit"
            value="Create"
          />
        </form>
        <label className="NewThreadForm__label>">Participants:
          <UserSelector />
        </label>
      </div>
    );
  },

  _inputOnChange: function(e) {
    this.setState({participants: e.target.value});
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    // var participants = React.findDOMNode(this.refs.participants).value.trim().split(' ');
    var participants = _.pluck(UserSelector.getSelected(),'id');

    var threadInfo;

    if (!participants || !title) {
      console.error('You must provide a title and participants');
      return;
    }

    threadInfo = {
      participants: participants,
      title: title,
    };
    if (this.props.threadProps.parentId) {
      threadInfo.parentId = this.props.threadProps.parentId;
    }

    React.findDOMNode(this.refs.title).value = '';

    this.props.doClose();
    ThreadActionCreators.clickThread(API.addThread(threadInfo));
  },

});

module.exports = NewThreadForm;
