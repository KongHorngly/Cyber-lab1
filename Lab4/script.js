document.getElementById("stylehead").style.color = "blue";
function stopClock(){
    alert("Clock stopped");
    clearInterval(clock);
    setTimeout(function(){alert("Clock restarted"); clock = setInterval(updateClock, 1000);}, 5000);
}

function updateClock(){
    const now = new Date();
    const timestring = now.toLocaleTimeString();
    const timeElement = document.getElementById("time");
    timeElement.textContent = timestring;
}
//update time

clock = setInterval(updateClock, 1000);

function goToFacebook(){
    const windowOBJ = window.open("https://www.facebook.com/", "_blank");
    setTimeout(() => {
       windowOBJ.location.replace("http://127.0.0.0:5500/Lab4/code1.html");
    }, 5000);
}
