var React = require('react');
var ReactPropTypes = React.PropTypes;
var NewThreadForm;
var API = require('../utils/API');

NewThreadForm = React.createClass({
  propTypes: {
    threadProps: ReactPropTypes.object,
    doClose: ReactPropTypes.func,
  },
  getInitialState: function() {
    return {
      participants: localStorage.email || 'Bobby Tables',
    };
  },
  render: function() {
    return (
      <div className="NewThreadForm">
        <h2>New Thread</h2>
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
              // onChange={this._inputOnChange}
            />
          </label>
          <label className="NewThreadForm__label">Participants:
            <input
              className="NewThreadForm__input"
              ref="participants"
              name="participants"
              type="text"
              onChange={this._inputOnChange}
              value={this.state.participants}
            />
          </label>
          <input className="NewThreadForm__submit"
            type="submit"
            value="Create"
          />
        </form>
      </div>
    );
  },

  _inputOnChange: function(e) {
    console.log(this.state.participants, e.target.value);
    this.setState({participants: e.target.value});
  },

  _handleSubmit: function(e) {
    var title;
    var participants;

    e.preventDefault();

    title = React.findDOMNode(this.refs.title).value.trim();
    participants = React.findDOMNode(this.refs.participants).value.trim();

    if (!participants || !title) {
      console.error('You must provide a title and participants');
      return;
    }
    var threadInfo = {
      participants: participants.split(' '),
      title: title,
    };
    console.log(this.props.threadProps);
    if (this.props.threadProps.parentId) {
      threadInfo.parentId = this.props.threadProps.parentId;
    }
    // API.addThread(threadInfo);
    console.log('would create', threadInfo);

    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.participants).value = '';

    this.props.doClose();
    return;
  },

});

module.exports = NewThreadForm;
