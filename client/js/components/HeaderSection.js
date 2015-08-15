var React = require('react');
var HeaderSection;
var Modal = require('react-modal');
var API = require('../utils/API');

var appElement = document.getElementById('your-app-element');
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
          onClick={this._onNewThreadBtnClick}
        >New Thread</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this._closeModal}
        >
          <h2>Hello</h2>
          <button onClick={this._closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </header>
    );
  },

  _onNewThreadBtnClick: function() {
    console.log('new thread button');
    this._openModal();
  },

  _openModal: function() {
    this.setState({modalIsOpen: true});
  },

  _closeModal: function() {
    this.setState({modalIsOpen: false});
  },

});

module.exports = HeaderSection;
