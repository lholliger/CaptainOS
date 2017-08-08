var fs = require('fs');
var mkdirp = require('mkdirp');
console.log("creating user");
mkdirp(__dirname + "/User", function() {
var dir = __dirname + "/User";
mkdirp(dir + "/Desktop");
mkdirp(dir + "/Downloads");
mkdirp(dir + "/Documents");
mkdirp(dir + "/Photos");
console.log("generating config");
mkdirp(__dirname + "/Apps");

mkdirp(dir + "/config", function() {

  var desktop = fs.openSync(dir + "/config/desktop.json", 'w');  // position of stuff on the desktop
  var device = fs.openSync(dir + "/config/device.json", 'w');   // device version, keys, hardware info
  var user = fs.openSync(dir + "/config/user.json", 'w');     // timezone, theme, font
  var password = fs.openSync(dir + "/config/password.json", 'w'); // hash, type
  var thread = fs.openSync(dir + "/config/include.json", 'w'); // stuff to add to the main thread

  fs.writeFile(dir + "/config/include.json", '["captain.appLauncher"]', function(err) {
    mainThread();
  });
});
});


console.log("done");
// this code is not ready and when the system is ready, all data will be reset :/
