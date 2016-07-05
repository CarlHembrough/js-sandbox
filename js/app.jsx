/** @jsx React.DOM */

'use strict'

var React = require('react')
var ReactDom = require('react-dom')
var LoginContainer = require('./container/loginContainer')

ReactDom.render(<LoginContainer />, document.getElementById('content'))
