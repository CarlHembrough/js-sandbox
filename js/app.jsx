/** @jsx React.DOM */

'use strict'

var React = require('react')
var ReactDom = require('react-dom')
var Login = require('./view/Login')

console.log("From app.js!!!111")

ReactDom.render(<Login />, document.getElementById('content'))
