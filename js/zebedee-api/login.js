console.log("required login.js...");

var request = require('request');

var login = function() {};

login.prototype.get = function() {

  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  })
};

module.exports = new login();