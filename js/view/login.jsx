/** @jsx React.DOM */

'use strict';

var React = require('react');

var Authentication = require("../model/authentication")
var auth = new Authentication()

var login = React.createClass({
  displayName: 'Login',
  emailChanged: function() {
    console.log(this.refs.emailInput.value);
  },
  onSubmit: function(e) {
    e.preventDefault();
    var email = this.refs.emailInput.value;
    var password = this.refs.passwordInput.value;

    var that = this
    var onSuccess = function(token) {
      that.setState({
        token: token
      })
    }

    auth.login(email, password, onSuccess)

  },
  getInitialState: function() {
    return {
      token: 'init'
    };
  },
  render: function () {
    return (
      <form className="form-login" onSubmit={this.onSubmit}>
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          class="fl-user-and-access__email"
          name="email" cols="40" rows="1"
          value={this.props.email}
          ref="emailInput"
          onChange={this.emailChanged}
          />

        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          class="fl-user-and-access__password"
          name="password" cols="40" rows="1"
          value={this.props.password}
          ref="passwordInput"
          />

        <button type="submit" id="login" class="btn-florence-login fl-panel--user-and-access__login ">Log in</button>
        <p>{this.state.token}</p>
      </form>
    );
  }
});

module.exports = login