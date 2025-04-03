function makeBubble () {
    let clutter = "";
for(var i=1;i<=147;i++){
    let Random = Math.floor(Math.random()*10)+1;
    clutter += `<div class="bubble">${Random}</div>`
}
document.querySelector("#Bubble-box").innerHTML = clutter;
}
makeBubble();


let startTime = 60;
let timerInterval; // Variable to store the interval ID

function Timer(){
    clearInterval(timerInterval); // Clear any existing interval
    startTime = 60; // Reset the timer to 60
    document.querySelector("#timer-box").innerHTML = startTime; // Update the display immediately
    timerInterval = setInterval(function(){
        if(startTime > 0){
            startTime --;
        document.querySelector("#timer-box").innerHTML = startTime;
        }else{
            clearInterval(timerInterval);
            document.querySelector("#Bubble-box").innerHTML= "";
        }
    }, 1000);
}
Timer(); // Start the timer initially


let hitValue = 0;
function hit(){
    hitValue = Math.floor(Math.random()*10)+1;
    document.querySelector("#hit-box").textContent = hitValue;
}
hit();


let scoreVal = 0;
function score(){
    document.querySelector("#score-box").textContent = scoreVal;
    scoreVal += 10;
}   

score();
document.querySelector("#Bubble-box").addEventListener("click",
    (a)=>{let ClickedValue = Number(a.target.textContent);
        if(ClickedValue == hitValue ){
            score();
            hit();
            Timer(); // Call Timer to reset and restart
            makeBubble(); // Generate new bubbles
        }
    }
)