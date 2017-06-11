   var battery = navigator.battery;
var bat = battery.level * 100 + "%";
document.getElementById("bcurrent").style.width = bat;
setInterval(function() {
  var bat = battery.level * 100 + "%";
  document.getElementById("bcurrent").style.width = bat;
}, 5000);
