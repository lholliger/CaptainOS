var dotw = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
setInterval(function() {
  var d = new Date();
  var day = dotw[d.getDay()];
  var mo = months[d.getMonth()];
  document.getElementById("lsdate").innerHTML = day + ", " + mo + " " + d.getDate() + ", " +d.getFullYear();

  var hour = d.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }

  if (d.getHours() == 12 || d.getHours() == 0) {
    hour = 12;
  }
  document.getElementById("lstime").innerHTML = hour + ":" + ('0' + d.getMinutes()).slice(-2); // some from https://stackoverflow.com/questions/8513032/less-than-10-add-0-to-number
}, 500);
