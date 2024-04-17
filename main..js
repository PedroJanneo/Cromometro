const display = document.getElementById("display")
const startB= document.getElementById("start")
const stopB = document.getElementById("stop")
const resetB = document.getElementById("reset")

let intervald;
let elapsedTime = 0

function formatTime(time){
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time-hours*3600)/60);
    let seconds = time%60;
    return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`

}

function updatetime(){
    elapsedTime++
    display.textContent=formatTime(elapsedTime)

}

function start(){
    intervald = setInterval(updatetime,1000)
    startB.disabled=true
    stopB.disabled=false
}

function stop(){
    clearInterval(intervald);
    startB.disabled=false;
    stopB.disabled=true;

}

function reset(){
    clearInterval(intervald);
    elapsedTime=0;
    display.textContent=formatTime(elapsedTime);
    startB.disabled=false
    stopB.disabled=true;

}

startB.addEventListener('click',start)
stopB.addEventListener('click',stop)
resetB.addEventListener('click',reset)