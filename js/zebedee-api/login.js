console.log("required login.js...");

var request = require('request');

var login = function () {
};

login.prototype.post = function (email, password, onSuccess) {

  var body = {
    email: email,
    password: password
  }

  var options = {
    url: 'http://localhost:8080/zebedee/login',
    json: true,
    body: body
  }

  var callback = function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
      onSuccess(body);
    } else {
      console.log(error)
    }
  }

  request.post(options, callback);
}
;

module.exports = new login();