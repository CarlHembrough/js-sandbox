/** @jsx React.DOM */

'use strict'

var React = require('react')
var ReactDom = require('react-dom')
var LoginContainer = require('./container/loginContainer')

var Authentication = require("./model/authentication")
var auth = new Authentication()

ReactDom.render(<LoginContainer auth={auth} />, document.getElementById('content'))
