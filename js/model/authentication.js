"use strict";

console.log("required authentication.js...");

var login = require("../zebedee-api/login");

var authentication = function() {

  this.email = "";
  this.token = "";

  console.log("called authentication constructor");
};

authentication.prototype.login = function(email, password, onSuccess) {
  console.log("called login method for email " + email);
  this.email = email

  var that = this; // create a lexically scoped variable to maintain the reference to 'this' in the callback function.
  var _onSuccess = function (token) {
    that.token = token;
    console.log('Token set: ' + that.token);
    onSuccess(token);
  }

  login.post(email, password, _onSuccess);
};

authentication.prototype.getEmail = function() {
  console.log("called getemail method!: " + this.email);
  return this.email
};

module.exports = authentication;