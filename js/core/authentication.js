console.log("required authentication.js...");

var login = require("../zebedee-api/login");

var authentication = function() {

  this.email = "";
  this.token = "";

  console.log("called authentication constructor");
};

authentication.prototype.login = function(email) {
  console.log("called login method for email " + email);
  this.email = email;
  login.get();
};

authentication.prototype.getEmail = function() {
  console.log("called getemail method!: " + this.email);
  return this.email;
};

module.exports = authentication;