 var clock = document.getElementById('clock');
 function displayTime() {
 	var currentTime = new Date();
    var hours = currentTime.getHours();
     if (hours < 10) {hours = "0" + seconds;
 	}
    var minutes = currentTime.getMinutes();
     if (minutes < 10) {minutes = "0" + seconds;
 	}
    var seconds = currentTime.getSeconds();
    if (seconds < 10) {seconds = "0" + seconds;
 	}
    var clockDiv = document.getElementById('clock');
    var time = hours + "" + minutes + "" + seconds;
    clock.innerText = time;
    document.body.style.background = "#" + time;
};

 displayTime();

 setInterval(displayTime, 1000);



