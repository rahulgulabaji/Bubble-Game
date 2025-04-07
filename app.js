function makeBubble() {
    let clutter = "";
    const normalColors = ["#ff6b6b", "#f4a261", "#f1da56", "#88d8b0", "#41b3a3", "#6495ED", "#a8dadc", "#e63946"];
    const specialColor = "#ffd700"; // Gold color for the special bubble
    const specialNumber = "*"; // Or any other indicator

    for (var i = 1; i <= 147; i++) {
        let Random = Math.floor(Math.random() * 10) + 1;
        let randomColor = normalColors[Math.floor(Math.random() * normalColors.length)];
        let isSpecial = Math.random() < 0.01; // 5% chance of being a special bubble

        if (isSpecial) {
            clutter += `<div class="bubble special-bubble" style="background-color: ${specialColor};">${specialNumber}</div>`;
        } else {
            clutter += `<div class="bubble" style="background-color: ${randomColor};">${Random}</div>`;
        }
    }
    document.querySelector("#Bubble-box").innerHTML = clutter;
}

let startTime = 10;
let timerInterval;
let hitValue = 0;
let scoreVal = 0;

function startGame() {
    scoreVal = 0;
    document.querySelector("#score-box").textContent = scoreVal;
    hit();
    Timer();
    makeBubble();
}

function Timer() {
    clearInterval(timerInterval);
    startTime = 10;
    document.querySelector("#timer-box").innerHTML = startTime;
    timerInterval = setInterval(function() {
        if (startTime > 0) {
            startTime--;
            document.querySelector("#timer-box").innerHTML = startTime;
        } else {
            clearInterval(timerInterval);
            const finalScore = document.querySelector("#score-box").textContent;
            document.querySelector("#Bubble-box").innerHTML = `<div id="game-over">
                                                                    <h2>Game Over!</h2>
                                                                    <p>Your final score is: ${finalScore}</p>
                                                                    <button onclick="startGame()">Play Again</button>
                                                                </div>`;
        }
    }, 1000);
}

function hit() {
    hitValue = Math.floor(Math.random() * 10) + 1;
    document.querySelector("#hit-box").textContent = hitValue;
}

function score() {
    scoreVal += 10;
    document.querySelector("#score-box").textContent = scoreVal;
}

document.querySelector("#Bubble-box").addEventListener("click", function(a) {
    let clickedValue = a.target.textContent;
    if (clickedValue == hitValue) {
        score();
        hit();
        Timer();
        makeBubble();
    } else if (clickedValue === "*") { // Check for the special bubble
        scoreVal += 25; // Award more points for the special bubble
        document.querySelector("#score-box").textContent = scoreVal;
        hit(); // Generate a new hit value
        Timer(); // Reset the timer
        makeBubble(); // Generate new bubbles
    }
});

// Start the game when the script loads
startGame();