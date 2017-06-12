function lockscreenmain() {
  document.getElementById("lockscreen").style.filter = "";
  document.getElementById("pass").style.display = "none";
  document.getElementById("slider").style.display = "block";
  var finalcode = "";
  var showdisplay = "";
  document.getElementById("currentpassfill").innerHTML = "&nbsp;"  + showdisplay + "&nbsp;";

}

function homescreenmain() {

}

// soon-to-be editable gesures
$('#slider').on('swipeup',function(){ window.location.replace("/");} );
