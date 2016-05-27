var authentication = require("./core/authentication");

console.log("From app.js!!!111");

var auth = new authentication();
auth.login("carlhuk@gmail.com");
var loggedInAs = auth.getEmail();