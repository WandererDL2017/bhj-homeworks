const buttonChat = document.querySelector('.chat-widget');
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const answers = [
    'Здравствуйте!', 
    'Ваш вопрос очень важен для ВАС!', 
    'На данный момент мы не можем вам ответить... потому что не хотим!',
    'Мы скоро ответим вам, Вы главное не волнуйтесь, а то давление поднимется',
    'Вы можете задать вопрос в платный чат!',
    'До свидания!',
    'Вы еще здесь? А что ждете?'
];

input.value = ''; 

buttonChat.addEventListener('click', function() {
    buttonChat.classList.add('chat-widget_active');
});

input.addEventListener('keyup', function(event) {
    const time = new Date();
    const hours = time.getHours() < 10? "0" + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10? "0" + time.getMinutes() : time.getMinutes();
    const numberAnswer = Math.floor(Math.random() * answers.length);
    
    if (event.keyCode === 13 && input.value !== '') {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${input.value}</div>
            </div>`;
        
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${answers[numberAnswer]}</div>
            </div>`;
        input.value = '';
    }
})