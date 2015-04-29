var interval;
var timeElapsed = 1;


function startTimer () {
  document.getElementById("start").addEventListener("click", function(){
    console.log("start");
    interval = setInterval(timerFunction, 1000);
  })

}

startTimer();


function timerFunction() {
  document.getElementById("timer").innerText = "Time Elapsed: " + timeElapsed++;

}


function pauseTimer () {
  document.getElementById("pause").addEventListener("click", function(){
    console.log("pause");
    document.getElementById("timer").innerText = document.getElementById("timer").innerText;
    clearInterval(interval);

  })

}

pauseTimer();

function resetTimer () {
  document.getElementById("reset").addEventListener("click", function(){
    console.log("reset");
    document.getElementById("timer").innerText = "Stop Watch";
    clearInterval(interval);
    timeElapsed = 1

  })

}

resetTimer();
