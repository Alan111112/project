let milliseconds = 0;
let seconds = 0;
let interval;

const display = document.getElementById("display");

function updateTime(){
    milliseconds++;
    if(milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }

    display.textContent = 
    (seconds < 10 ? '0' + seconds : seconds) + ':' + 
    (milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

document.getElementById("start").addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(updateTime, 10);
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    display.textContent = "00:00.00";
});