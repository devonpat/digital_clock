 var clock = document.getElementById('clock');
 function displayTime() {
 	var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (seconds < 10) {seconds = "0" + seconds;
 	}
    var clockDiv = document.getElementById('clock');
    clock.innerText = hours + "" + minutes + "" + seconds;
 };

 displayTime();

 setInterval(displayTime, 1000);

 


