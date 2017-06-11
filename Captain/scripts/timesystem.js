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
    end = "PM";
  } else {
    end = "AM";
  }
  if (d.getHours() == 12) {
    end = "PM";
  }

  if (d.getHours() == 24) {
    end = "AM";
  }
  document.getElementById("lstime").innerHTML = hour + ":" + d.getMinutes() + " " + end;
}, 500);
