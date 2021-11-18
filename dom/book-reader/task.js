const bookControlAll = document.querySelectorAll('.book__control');
const bookContent = document.querySelector('.book__content');
const paragraphs = Array.from(bookContent.children);

function removeActiveClass(elements) {
    Array.from(elements).findIndex(element => {
        if (element.classList.contains('font-size_active')) {
            element.classList.remove('font-size_active');
        } else if (element.classList.contains('color_active')) {
            element.classList.remove('color_active');
        }
    });
}

function changeFontSize(button) {
    for (let paragraph of paragraphs) {
        if (button.classList.contains('font-size_active') && button.dataset.size !== undefined) {
            paragraph.className = `font-size_${button.dataset.size}`;
        } else {
            paragraph.className = '';
        }
    }
}

function changeFontColor(button) {
    for (let paragraph of paragraphs) {
        if (button.classList.contains('color_active')) {
            paragraph.style.color = button.dataset.textColor;
        }
    }
}

function changeBackGroundColor(button) {
    if (button.classList.contains('color_active')) {
        bookContent.style.backgroundColor = button.dataset.bgColor;
    }
}


Array.from(bookControlAll).findIndex((bookControl) => {
    const buttons = bookControl.getElementsByTagName('a');
    
    Array.from(buttons).findIndex((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (bookControl.classList.contains('book__control_font-size')) {
                removeActiveClass(buttons);
                button.classList.add('font-size_active');
                changeFontSize(button);
            } else if (bookControl.classList.contains('book__control_color')) {
                removeActiveClass(buttons);
                button.classList.add('color_active');
                changeFontColor(button);
            } else if (bookControl.classList.contains('book__control_background')) {
                removeActiveClass(buttons);
                button.classList.add('color_active');
                changeBackGroundColor(button);
            }
        });
    });
});