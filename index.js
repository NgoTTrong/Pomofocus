const button = document.querySelector(".btn");
const setMinutes = document.querySelector(".minutes");
const setSeconds = document.querySelector(".seconds");
const pomodoro = document.querySelector(".pomodoro_selector");
const shortBreak = document.querySelector(".shortBreak_selector");
const longBreak = document.querySelector(".longBreak_selector");
const container = document.querySelector(".main_container");
const settingTime = document.querySelector(".setting");
const login = document.querySelector(".login");
const taskContainer = document.querySelector(".task_container");
const taskBox = document.querySelector(".task_box");

let recentStatus = "Pomodoro";
let minutes = 25;
let seconds = 0;
function setPomodoro(){
    clearInterval(minutesTimer);
    clearInterval(secondsTimer);
    recentStatus = "Pomodoro";
    button.innerText = "Start";
    setMinutes.innerText = 25;
    setSeconds.innerText = "00";
    minutes = 25;
    seconds = 0;
    longBreak.style.removeProperty("background-color");
    shortBreak.style.removeProperty("background-color");
    pomodoro.style.backgroundColor = "pink";
}
function setShortBreak(){
    clearInterval(minutesTimer);
    clearInterval(secondsTimer);
    recentStatus = "Break";
    button.innerText = "Start";
    setMinutes.innerText = 5;
    setSeconds.innerText = "00";
    minutes = 5;
    seconds = 0;
    shortBreak.style.backgroundColor = "pink";
    pomodoro.style.removeProperty("background-color");
    longBreak.style.removeProperty("background-color");
}
function setLongBreak(){    
    clearInterval(minutesTimer);
    clearInterval(secondsTimer);
    recentStatus = "Break";
    button.innerText = "Start";
    setMinutes.innerText = 15;
    setSeconds.innerText = "00";
    minutes = 15;
    seconds = 0;
    longBreak.style.backgroundColor = "pink";
    pomodoro.style.removeProperty("background-color");
    shortBreak.style.removeProperty("background-color");
}

pomodoro.addEventListener("click",setPomodoro);
shortBreak.addEventListener("click",setShortBreak);
longBreak.addEventListener("click",setLongBreak);

const endTimer = document.createElement('span');
const startTimer = document.createElement('span');
endTimer.innerText = "Yay time to break!";
endTimer.style.fontFamily = "monospace";
endTimer.style.fontSize = "0.5rem";
endTimer.style.color = "white";
startTimer.innerText = "Start to work!";
startTimer.style.fontFamily = "monospace";
startTimer.style.fontSize = "0.5rem";
startTimer.style.color = "white";
button.onclick = function(){
    if (this.innerHTML == "Start"){
        this.innerHTML = "Pause";
        --minutes;
        seconds = 59;
        setMinutes.innerText = minutes;
        setSeconds.innerText = seconds;
        runTime();
    }else if(this.innerHTML == "Pause"){
        this.innerHTML = "Resume";
        clearInterval(minutesTimer);
        clearInterval(secondsTimer);
    }else{
        this.innerHTML = "Pause";
        runTime();
    }
}
let minutesTimer;
let secondsTimer;
let runTime = function(){
    minutesTimer = setInterval(function minutesRun(){
        minutes--;
        setMinutes.innerText = minutes;
    }, 60000);
    secondsTimer = setInterval(function secondsRun(){
        seconds--;
        setSeconds.innerText = seconds;
        if (seconds<=0){
            if (minutes<=0){
                clearInterval(minutesTimer);
                clearInterval(secondsTimer);
                if (recentStatus == "Pomodoro"){
                    container.appendChild(endTimer);
                }else{
                    container.appendChild(startTimer);
                }
            }
            seconds = 60;
        }
    },1000);
}

let inputSpace = document.createElement("input");
inputSpace.placeholder = "Enter your task <3";
inputSpace.placeholder.color = "black";
inputSpace.style.width = "3rem";
inputSpace.style.height = "0.5rem";
inputSpace.style.backgroundColor = "transparent";
inputSpace.style.fontFamily = "monospace";
inputSpace.style.fontSize = "0.2rem";
inputSpace.style.color = "black";
taskBox.onclick = function(){
    taskContainer.appendChild(inputSpace);
}
inputSpace.addEventListener("keydown",(e)=>{
    if (e.code === 'Enter'){
        taskBox.innerText = inputSpace.value;
    }
})
