$.mobile.loading( "hide" );

$("#slider").on("swipe",function(){
  console.log("showing");
  document.getElementById("lockscreen").style.filter = "blur(10px)";
  document.getElementById("pass").style.display = "block";
  document.getElementById("slider").style.display = "none";

});
var finalcode = "";
var showdisplay = "";
var password = sha256('9876');
function lockpress(key) {
if (key == "back") {
   finalcode = finalcode.substring(0, finalcode.length-1);
   showdisplay = showdisplay.substring(0, showdisplay.length-1);
   document.getElementById("currentpassfill").innerHTML = "&nbsp;"  + showdisplay + "&nbsp;";
}
else if (key == "enter") {
  if (sha256('9876') == sha256(finalcode)) {
   document.getElementById("currentpassfill").style.border = "1px solid green";
   window.location.replace("home.html?hash=" + sha256(finalcode));

  } else {
    document.getElementById("currentpassfill").style.border = "1px solid red";
    finalcode = "";
    showdisplay = "";
    document.getElementById("currentpassfill").innerHTML = "&nbsp;"  + showdisplay + "&nbsp;";


  }
} else {
  finalcode += key;
  showdisplay += "·";
  document.getElementById("currentpassfill").innerHTML = "&nbsp;"  + showdisplay + "&nbsp;";
}
}

function hideoff() {
  document.getElementById("shutoff").style.display = "none";

}
