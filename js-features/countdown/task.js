const timer = document.getElementById('timer');
const card = document.querySelector('.card');
let timeOnSeconds = timer.textContent;
card.style.width = "405px"; // не дает прыгать таймеру на другую строчку

function timeCount(time) {
    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(time / 60) - hours * 60;
    let seconds = time - minutes * 60 - hours * 60 * 60;

    hours = hours < 10? '0' + hours: hours;
    minutes = minutes < 10? '0' + minutes: minutes;
    seconds = seconds < 10? '0' + seconds: seconds;
    timeOnSeconds--;

    return hours + ":" + minutes + ":" + seconds;
}

timer.textContent = timeCount(timeOnSeconds);
let countdown = setInterval(() => {
    timer.textContent = timeCount(timeOnSeconds);
    if (timer.textContent === "00:00:00") {
        clearInterval(countdown);
        location.href = "task.zip";
        alert('Вы победили в конкурсе');
    }
}, 1000);