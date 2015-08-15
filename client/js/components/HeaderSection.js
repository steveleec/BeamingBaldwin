var React = require('react');
var HeaderSection;
var Modal = require('react-modal');
var NewThreadForm = require('./NewThreadForm');

var appElement = document.getElementById('react');
Modal.setAppElement(appElement);
Modal.injectCSS();

HeaderSection = React.createClass({

  getInitialState: function() {
    return {
      modalIsOpen: false,
    };
  },

  render: function() {
    return (
      <header className="Header">

        <button
          className="Header__newThreadBtn"
          onClick={this._openModal}
        >
          New Thread
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this._closeModal}
        >
          <button onClick={this._closeModal}>Close</button>
          <NewThreadForm />
        </Modal>

      </header>
    );
  },

  _openModal: function() {
    this.setState({modalIsOpen: true});
  },

  _closeModal: function() {
    this.setState({modalIsOpen: false});
  },

});

module.exports = HeaderSection;
