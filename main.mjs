let startTime = 0;
let elapsedTime = 0;
let timer = null;
function start() {
    if (timer !== null) return;

    startTime = Date.now() - elapsedTime;
    timer = setInterval(updatedTime, 10);
    document.getElementById("start").disabled = true;
}

function stop() {
    clearInterval(timer);
    timer = null;

    elapsedTime = Date.now() - startTime;
    document.getElementById("start").disabled = false;
}

function reset() {
    clearInterval(timer);
    timer = null;

    startTime = 0;
    elapsedTime = 0;

    document.getElementById("result").innerHTML = "0.00";
    document.getElementById("start").disabled = false;
}

function updatedTime() {
    let stopTime = (Date.now() - startTime) / 1000;
    document.getElementById("result").innerHTML =
        stopTime.toFixed(2);
}

/* THEME TOGGLE */

const toggle = document.getElementById("toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
});







