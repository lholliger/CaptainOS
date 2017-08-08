var fs = require('fs');
var app = require('express')();
var express = require("express");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mkdirp = require('mkdirp');
var port = 25555;
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/Captain/off.html');
});

http.listen(port, function() {
  console.log('Server started. listening on port ' + port);
});

app.use('/os/', express.static(__dirname + "/Captain/"));
io.on('connection', function(socket) {

});

app.use('/app/', express.static(__dirname + "/Apps/"));


function mainThread() {
  fs.readFile(__dirname + "/User/config/include.json", 'utf8', function(err, contents) {
    contents = JSON.parse(contents);
    contents.forEach(function(element) {

      fs.readFile("./Apps/" + element + "/appScripts/mainthread.js", 'utf8', function(err, data) {
        if (err) {
          console.log("NO THREAD DATA FOR " + element);
        }
        eval(data);
      });
      console.log("added " + element + " to main thread");
    });
  });
} // end main thread


// check if user exists on this system
if (!fs.existsSync(__dirname + "/User")) {
  console.log("useraccount doesnt exist yet!");
  require('./Captain/setup/inituser.js')
  mainThread();
} else {
  mainThread();
}
