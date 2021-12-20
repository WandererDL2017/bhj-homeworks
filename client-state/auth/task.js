const signin = document.querySelector('.signin');
const form = signin.querySelector('#signin__form');
const submit = signin.querySelector('#signin__btn');
const welcome = document.querySelector('.welcome');
const userId = welcome.querySelector('#user_id');
const logout = document.createElement('button');
logout.classList.add('btn');
logout.innerHTML = 'Выход';
welcome.appendChild(logout);
let xhr = new XMLHttpRequest();
xhr.responseType = 'json';

function greetUser() {
    userId.innerHTML = JSON.parse(localStorage.getItem('user_id'));
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let data = new FormData(form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(data);
    form.reset();
});

logout.addEventListener('click', (event) => {
    event.preventDefault();
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    localStorage.clear();
})

xhr.onload = () => {
    xhr.response;
    if (xhr.response.success === true) {
        JSON.stringify(localStorage.setItem('user_id', xhr.response['user_id']));
        greetUser();
    } else {
        alert('Неверный логин/пароль');
    }
}

window.onload = function() {
    if (localStorage.getItem('user_id') !== null) {
        greetUser();
    }
}