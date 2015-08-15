var React = require('react');
var NewThreadForm;
var API = require('../utils/API');

NewThreadForm = React.createClass({

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
              onChange={this._inputOnChange}
            />
          </label>
          <label className="NewThreadForm__label">Participants:
            <input
              className="NewThreadForm__input"
              ref="participants"
              name="participants"
              placeholder="Who do you want to Slick?"
              type="text"
              onChange={this._inputOnChange}
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

  _inputOnChange: function() {},

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

    API.addThread({
      participants: participants.split(' '),
      title: title,
      parentId: undefined, // TODO: get this from ThreadStore
    });

    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.participants).value = '';
    return;
  },

});

module.exports = NewThreadForm;
