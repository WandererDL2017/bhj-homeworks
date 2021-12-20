const card = document.querySelector('.card');
const text = card.querySelector('#editor');
const clearSpace = document.createElement('button');

clearSpace.innerText = 'Очистить содержимое';
clearSpace.type = 'reset';
card.appendChild(clearSpace);

clearSpace.addEventListener('click', () => {
    localStorage.removeItem('text');
    text.value = '';
});

window.addEventListener('keyup', () => { 
    localStorage.setItem('text', text.value);
});

text.textContent = localStorage.getItem('text');


