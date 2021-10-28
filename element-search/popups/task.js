const modal = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal__close');
const button = document.querySelectorAll('.btn');

for (let i = 0; i < modal.length; i++) {
    modal[0].classList.add('modal_active');
    modalClose[i].addEventListener('click', () => modal[i].classList.remove('modal_active'));
    button[0].addEventListener('click', () => {
        modal[0].classList.remove('modal_active');
        modal[1].classList.add('modal_active');
    });
    button[1].addEventListener('click', () => modal[1].classList.remove('modal_active'));
}