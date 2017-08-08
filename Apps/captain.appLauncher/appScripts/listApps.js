    var socket = io();
    function reqData() {
      socket.emit('captain.appLauncher.recieve.appList', "");
}
    socket.on('captain.appLauncher.send.appList', function(msg){
      msg = JSON.parse("[" + msg+ "]");
      console.log(msg);
      msg.forEach(function (element) {
        console.log(element);
      document.getElementById("apps").innerHTML += "<a href='/app/" + element +"'>" + '<div class="icon"><img src="/appIcons/' + element +'.png" alt="sometext" /><p>' + element + '</p></div>' + "</a>";
    });
    });
reqData();
