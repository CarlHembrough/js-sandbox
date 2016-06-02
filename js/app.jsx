/** @jsx React.DOM */

'use strict'

var React = require('react')
var Hello = require('./view/Hello')

var Authentication = require("./model/authentication")

console.log("From app.js!!!111")

var auth = new Authentication()
auth.login("carlhuk@gmail.com")
var loggedInAs = auth.getEmail()


React.renderComponent(<Hello />, document.getElementById('content'))