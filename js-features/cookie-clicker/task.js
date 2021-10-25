let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let clickerSpeed = document.getElementById('clicker__speed');
let date = new Date();

cookie.onclick = function() {
    let timeClick = new Date();
   (clickerCounter.textContent % 2 === 0)? cookie.width = 250 : cookie.width = 200;
    clickerCounter.textContent++;
    clickerSpeed.textContent = (1 / ((timeClick - date) / 1000)).toFixed(2);
    date = timeClick;
}
