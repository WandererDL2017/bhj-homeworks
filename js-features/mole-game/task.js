let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
getHole = (index) => document.getElementById(`hole${index}`);

function startGame() {
    dead.textContent = '0';
    lost.textContent = '0';
}

for (let i = 1; i<= 9; i++){
    getHole(i).onclick = function() {
        if (getHole(i).className.includes('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent === '10') {
            alert('Победа!');
            startGame();
        } 
        
        if (lost.textContent === '5') {
            alert('Вы проиграли.');
            startGame();
        }
    }
    
}

