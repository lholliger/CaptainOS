io.on('connection', function(socket){
  socket.on('captain.appLauncher.recieve.appList', function(msg){
    fs.readFile(__dirname + "/User/config/include.json", 'utf8', function(err, contents) {
      io.emit('captain.appLauncher.send.appList', contents)
    });
  });
});
app.use('/appIcons/', express.static(__dirname + "/appIcons/"));
