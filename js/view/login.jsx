/** @jsx React.DOM */

'use strict';

var React = require('react');

var login = React.createClass({
  displayName: 'Login',
  emailChanged: function(event) {
    console.log(event.target.value);
  },
  onSubmit: function(e) {
    e.preventDefault();

    var email = this.refs.emailInput.value;
    var password = this.refs.passwordInput.value;

    this.props.login(email, password);
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
        <p>{this.props.token}</p>
      </form>
    );
  }
});

module.exports = login