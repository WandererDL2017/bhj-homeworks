let time = document.getElementById('timer');
let hours = '0';
let minutes = '0';
let seconds = '9';

function countdownTimer() {
    let $hours = hours < 10? '0' + hours : hours;
    let $minutes = minutes < 10? '0' + minutes : minutes;
    let $seconds = seconds < 10? '0' + seconds : seconds;

    if(seconds > 0) {
        seconds--;
    } else if(minutes > 0) {
        minutes--;
        seconds = 60;
    } else if(hours > 0) {
        hours--;
        minutes = 60;
    }
    
    time.textContent = $hours + ':' + $minutes + ':' + $seconds;

    if (time.textContent === "00:00:00") {
        alert("Вы победили в конкурсе!");
        clearInterval(timer);
    }   
}

let timer = setInterval(countdownTimer, 1000);