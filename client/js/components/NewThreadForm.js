var React = require('react');
var NewThreadForm;
var API = require('../utils/API');

NewThreadForm = React.createClass({

  getInitialState: function() {},

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
              ref="topic"
              name="topic"
              placeholder="Slick Topic"
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
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    e.preventDefault();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;

    API.addThread({
      participants: [],
      title: '',
      parentId: null, // TODO: what will this be set to?
    });
  },

});

module.exports = NewThreadForm;
