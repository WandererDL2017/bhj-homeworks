const sliderItems = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');

let index = 0;

function actionNext() {
    removeActiveClasses();
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    sliderItems[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}

function actionPrev() {
    removeActiveClasses();
    if (index > 0) {
        index--;
    } else {
        index = 4;
    }
    sliderItems[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}

function removeActiveClasses() {
    for (let sliderItem of sliderItems) {
        sliderItem.classList.remove('slider__item_active');
    }

    for (let dot of dots) {
        dot.classList.remove('slider__dot_active');
    }
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        index = i;
        removeActiveClasses();
        sliderItems[index].classList.add('slider__item_active');
        dots[index].classList.add('slider__dot_active');
    });
}

arrowNext.addEventListener('click', actionNext);
arrowPrev.addEventListener('click', actionPrev);