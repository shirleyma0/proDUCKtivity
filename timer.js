var COUNT_START = 10*10*60; // tenths * seconds * hours
var count = COUNT_START;
var playing = false;

playpause = document.getElementById('playpause');
reset = document.getElementById('reset');

playpause.onclick = function() {
  if (playing) {
    playing = false;
    console.log("Pause!");
    playpause.innerHTML = "▶";
  } else if (!playing) {
    playing = true;
    console.log("Play!");
    playpause.innerHTML = "❚❚";
  }

}
function variableFunction(){
    document.getElementById("warning").innerHTML ="";
  var user=document.getElementById('input1').value;
  document.getElementById("input1").value = "";

  if(user== null|| user==""){
  document.getElementById("warning").innerHTML ="*** Please input something! ***";
      return false;
  }

  else if ((isNaN(user))){
      document.getElementById("warning").innerHTML ="*** Must input numbers! ***";
      return false;
  }
  else if ((user<= 0)){
      document.getElementById("warning").innerHTML ="*** Must input a number greater than 0! ***";
      return false;
  }
  else{
  COUNT_START=user*10*60;
  count = COUNT_START;
}
}

reset.onclick = function() {
  if (playing) {
    playing = false;
    playpause.innerHTML = "▶";
  }
  console.log("Reset Timer!");
  count = COUNT_START;
}

function countdown(){
    displayTime();
    if (count == 0) {
      playing = false;
      document.getElementById( 'timer-beep' ).play();
    } else if (playing) {
      setTimeout(countdown, 100);
      count--;
    } else {
      setTimeout(countdown, 100);
    }
}
countdown();

function displayTime() {

  var tenths = count;
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * (3600);
  var mins = Math.floor(sec / 60);
  sec -= mins * (60);

  if (hours < 1) {
    document.getElementById('time_left').innerHTML = LeadingZero(mins)+':'+LeadingZero(sec);
  }
  else {
    document.getElementById('time_left').innerHTML = hours+':'+LeadingZero(mins)+':'+LeadingZero(sec);
  }
}

function LeadingZero(Time) {
  return (Time < 10) ? "0" + Time : + Time;
}
