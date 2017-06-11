navigator.getBattery().then(function(result) {
  console.log(result);
  document.getElementById("bcurrent").style.width = result["level"] * 100 + "%";

  if (result["level"] * 100 < 15) {
    document.getElementById("bcurrent").style.backgroundColor = "red";
  }
  if (result["charging"] == true) {
    document.getElementById("bcurrent").style.backgroundColor = "green";
  }
});

setInterval(function() {
  navigator.getBattery().then(function(result) {
    console.log(result);
    document.getElementById("bcurrent").style.width = result["level"] * 100 + "%";

    if (result["level"] * 100 < 15) {
      document.getElementById("bcurrent").style.backgroundColor = "red";
    }

    if (result["charging"] == true) {
      document.getElementById("bcurrent").style.backgroundColor = "green";
    }
  });



}, 10000);
