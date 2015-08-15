var React = require('react');
var ReactPropTypes = React.PropTypes;
var API = require('../utils/API');

module.exports = UserSelectorItem = React.createClass({
  propTypes: {
    user: ReactPropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      complete: false,
    };
  },

  render: function() {
    return (
      <li className="UserSelect__userli">
        <label className="UserSelect__userlabel">
          <input className="UserSelect__usercb"
            type="checkbox"
            ref="complete"
            onChange={this.toggle}
            defaultChecked={this.state.complete}
          />
          {this.props.user.name}
        </label>
      </li>
    );
  },
  toggle: function() {
    this.setState({complete: !this.state.complete});
  }
});
