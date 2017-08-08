io.on('connection', function(socket){
  socket.on('captain.appLauncher.appList', function(msg){
    fs.readFile(__dirname + "/User/config/desktop.json", 'utf8', function(err, contents) {
      io.emit('appList', contents)
    });
  });
});
