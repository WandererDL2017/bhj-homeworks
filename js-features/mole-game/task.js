let getHole = index => document.getElementById(`hole${index}`); 
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function() {
        if(getHole(i).classList.contains('hole_has-mole')){
            dead.textContent++;
            if (dead.textContent === '10') {
                alert('Победа!');
                lost.textContent = 0;
                dead.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (lost.textContent === '5') {
                alert('Вы проиграли!');
                lost.textContent = 0;
                dead.textContent = 0;
            };
        }
    }
}

