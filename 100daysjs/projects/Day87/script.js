const timer = document.querySelector(".time");
const startT = document.querySelector(".start");
const pauseT = document.querySelector(".pause");
const resetT = document.querySelector(".reset");

let [milliseconds,seconds, minutes,hours] = [0,0,0,0];

let t = null;

startT.addEventListener("click",startTimer);
pauseT.addEventListener("click",pauseTimer);
resetT.addEventListener("click",resetTimer);

function startTimer() {
    if(t!==null) {
        clearInterval(t);
    }
    t = setInterval(displayTime,10);
}

function pauseTimer() {
    clearInterval(t);
}

function resetTimer() {
    clearInterval(t);
    [milliseconds,seconds, minutes,hours] = [0,0,0,0];
    timer.innerHTML = "00 : 00 : 00 : 000";
    // startTimer();
}


//Display Timer
function displayTime() {
milliseconds += 10;
seconds = Math.floor(milliseconds/1000);
minutes=Math.floor(seconds/60);
hours = Math.floor(minutes/60);
//milliseconds %=1000;
seconds%=60;
minutes%=60;



let h = hours < 10 ? "0"+hours : hours;
let m = minutes < 10 ? "0"+minutes : minutes;
let s = seconds < 10 ? "0"+seconds : seconds;
let ms = milliseconds%1000;
ms = ms < 10 ? "00" + ms : ms < 100 ? "0"+ms : ms;


timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}