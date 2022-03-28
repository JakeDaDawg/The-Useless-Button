let WaitingTimeout;

let clicksStorage = parseInt(localStorage.getItem('Clicks'));

var clicks = !isNaN(clicksStorage) ? clicksStorage : 0;
document.getElementById("clicks").innerHTML = clicks;
if (clicks == 0 && !localStorage.getItem("Secret Ending")) {
    WaitingTimeout = window.setTimeout(c, 180000);
}

setBadges();
setBackgrounds();

function a() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

function b() {
    var audio = new Audio('Sounds/click on.mp3');
    audio.play();
    window.clearTimeout(WaitingTimeout);
    if (clicks == 1) {
        alert("I Thought I Said Dont Click It.");
    }
    if (clicks == 3) {
        alert("You Should Stop Clicking.");
    }
    if (clicks == 100) {
        alert("100 Clicks! I Think Thats enough.");
    }
    if (clicks == 420) {
        alert("420 Clicks! haha funny weed number");
    }
    if (clicks == 1000) {
        alert("1000 Clicks! Ok Man You Can.... You Should Stop Now.");
    }
    if (clicks == 5000) {
        alert("5000 Clicks! I Really Think You Shouldn't Do This You Dont Know What You're Doing.");
    }
    if (clicks == 10000) {
        alert("10000 Clicks! STOP CLICKING PLEASE.");
    }
    if (clicks == 15000) {
    }
     if (clicks == 50000) {
        alert("100000 Clicks! LEAVE! STOP CLICKING! THE WEBSITE IS FALLING APART!");
     }
    if (clicks == 100000) {
        alert("100000 Clicks! STOP CLICKING THE BUTTON, YOU WILL DESTROY THE WEBSITE!");
    }
    if (clicks == 500000) {
        alert("ALERT! SYSTEM IMMINENT SHUTDOWN DO NOT PROCEED AND WAIT FOR STAFF TO ARRIVE! ALERT!");
    }
    if (clicks == 1000000000) {
        alert("1,000,000,000 Clicks.... My God Man.... What Has It been.. Days... Months... Years?... DECADES?!?!... get out!...");
    }
        localStorage.setItem('Clicks', clicks);
        setBadges();
        setBackgrounds();
}

function setBackgrounds() {
    if (clicks >= 10000) {
        document.querySelector("#background2").style.display = "initial";
    } else { 
        document.querySelector("#background2").style.display = "none";
    }
    if (clicks >= 15000) {
        document.querySelector("#background3").style.display = "initial";
    } else { 
        document.querySelector("#background3").style.display = "none";
    }
     if (clicks >= 50000) {
        document.querySelector("#background4").style.display = "initial";
     } else { 
        document.querySelector("#background4").style.display = "none";
    }
    if (clicks >= 100000) {
        document.querySelector("#background5").style.display = "initial";
    } else { 
        document.querySelector("#background5").style.display = "none";
    }
    if (clicks >= 500000) {
        document.querySelector("#background6").style.display = "initial";
    } else { 
        document.querySelector("#background6").style.display = "none";
    }
}

function setBadges() {
    if (clicks >= 3 ) {
        document.querySelector("#Badge1").style.display = "initial";
    } else { 
        document.querySelector("#Badge1").style.display = "none";
    }
    if (clicks >= 100 ) {
        document.querySelector("#Badge2").style.display = "initial";
    } else { 
        document.querySelector("#Badge2").style.display = "none";
    }
    if (clicks >= 420 ) {
        document.querySelector("#Badge3").style.display = "initial";
    } else { 
        document.querySelector("#Badge3").style.display = "none";
    }
    if (clicks >= 1000 ) {
        document.querySelector("#Badge4").style.display = "initial";
    } else { 
        document.querySelector("#Badge4").style.display = "none";
    }
    if (clicks >= 5000) {
        document.querySelector("#Badge5").style.display = "initial";
    } else { 
        document.querySelector("#Badge5").style.display = "none";
    }
    if (clicks >= 1000000000) {
        document.querySelector("#Badge6").style.display = "initial";
    } else { 
        document.querySelector("#Badge6").style.display = "none";
    }
    if(localStorage.getItem('Secret Ending')) {
        document.querySelector("#Badge7").style.display = "initial";
    } else { 
        document.querySelector("#Badge7").style.display = "none";
    }
}

async function reset() {
    const resp = await swal({
      title: "You Can Still Turn Back!",
      text: "Are You Sure You Wanna Reset Your Progress?",
      icon: "warning",
      buttons: ["Actually Nevermind.", "Yes, Please Reset My Progress!"],
      dangerMode: true,
    });
    if(!resp) return
      clicks = 0;
      localStorage.setItem("Clicks", clicks);
      document.getElementById("clicks").innerHTML = clicks;
      WaitingTimeout = window.setTimeout(c, 180000);
      localStorage.removeItem("Secret Ending");
      var audio = new Audio("Sounds/click off.mp3");
      audio.play();
      setBadges();
      setBackgrounds();
  }

var vid = document.getElementById("myVideo")

function c() {
    console.log('hi');
    document.querySelector("#myBtn").style.display = "none";
    document.querySelector("#Resetbutton").style.display = "none";
    document.querySelector("logo").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector("h2").style.display = "none";
    document.querySelector("#myVideo").style.display = "initial";
    vid.onended = function() {
    document.querySelector("#myVideo").style.display = "none";
    document.querySelector("#myBtn").style.display = "Initial";
    document.querySelector("#Resetbutton").style.display = "Initial";
    document.querySelector("logo").style.display = "initial";
    document.querySelector("h1").style.display = "initial";
    document.querySelector("h2").style.display = "initial";
    localStorage.setItem('Secret Ending', true);
    setBadges();
    setBackgrounds();
    }
}

window.onfocus = function () { 
    if (clicks == 0 && !localStorage.getItem('Secret Enging')) {
        WaitingTimeout = window.setTimeout(c, 180000);
        // set timer
    }
}; 
    
window.onblur = function () {
    window.clearTimeout(WaitingTimeout);
    // clear timer
};

var Panelclicks = 0;

function onPanelClick() {
    Panelclicks += 1;
    document.getElementById("Panelclicks").innerHTML = Panelclicks;
  };
  
function Cabbage() {
    if (Panelclicks >= 5) {
        document.getElementById("hiddenpanel").style.display = "initial";
        document.getElementById("background1").style.display = "none";
    } else {
        document.getElementById("hiddenpanel").style.display = "none";
        document.getElementById("background1").style.display = "initial";
    }
}