/** @jsx React.DOM */

'use strict';

var React = require('react');

var Authentication = require("../model/authentication")
var Login = require("../view/login")
var auth = new Authentication()

var loginContainer = React.createClass({
  displayName: 'Login',
  login: function (email, password) {

    var onSuccess = function (token) {
      this.setState({
        token: token
      })
    }.bind(this)

    auth.login(email, password, onSuccess)
  },
  getInitialState: function () {
    return {
      token: ''
    };
  },
  render: function () {

    var loginMessage = "Not logged in."

    if(this.state.token) {
      loginMessage = "Logged in! Token = " + this.state.token
    }

    return <Login login={ this.login } token={ loginMessage }/>
  }
});

module.exports = loginContainer