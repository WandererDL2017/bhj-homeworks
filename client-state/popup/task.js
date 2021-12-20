const modal = document.querySelector('.modal');
const close = modal.querySelector('.modal__close');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

window.onload = () => {
    let nameCoockie = getCookie('close'); 
    
    if (nameCoockie === 'modal_close') {
        return;
    } 
    modal.classList.add('modal_active');
    
    close.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = 'close=modal_close' ;
    });
} 