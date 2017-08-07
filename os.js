var fs = require('fs');
var app = require('express')();
var express = require("express");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mkdirp = require('mkdirp');
var port = 25555;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/Captain/off.html');
});

http.listen(port, function(){
  console.log('Server started. listening on port ' + portsss);
});

app.use('/os/', express.static(__dirname + "/Captain/"));
io.on('connection', function(socket){

});


// check if user exists on this system
if (!fs.existsSync(__dirname + "/User")){
  console.log("useraccount doesnt exist yet!");
    require('./Captain/setup/inituser.js')
}
