const rotator = document.querySelectorAll('.rotator__case');
const rotators = Array.from(rotator);
let seconds = rotators.map((speed) => speed.dataset.speed);
let timer;
let i = 0;
let j = 0;

let removeActiveClass = function() {
    rotators.findIndex((rotator) => {
        rotator.classList.remove('rotator__case_active');
    });
}

function showAds() {
    if ( i < rotators.length) {
        removeActiveClass();
        rotators[i].classList.add('rotator__case_active');
        rotators[i].style.color = rotators[i].dataset.color;
        i++;
    } else {
        removeActiveClass();
        i = 0;
        rotators[i].classList.add('rotator__case_active');
        rotators[i].style.color = rotators[i].dataset.color;
    }
}

(function repeatAds() {
    showAds();
    if (j < seconds.length) {
        timer = setTimeout(repeatAds, seconds[j]);
        j++;
    } else {
        j = 0;
        timer = setTimeout(repeatAds, seconds[j]);
    }
})();

