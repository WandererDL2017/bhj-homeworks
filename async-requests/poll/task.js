const pollAnswers = document.querySelector('.poll__answers');
const title = document.querySelector('.poll__title');
const xhr = new XMLHttpRequest();
const method = 'GET';
const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
xhr.open(method, url);
xhr.responseType = 'json';
xhr.send();

xhr.onload = () => {
    xhr.response;
    const data = xhr.response.data;
    title.innerText = data.title;

    data.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.innerText = answer;
        pollAnswers.appendChild(button);
 
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target) {
                alert('Спасибо, ваш голос засчитан!');
            }
        });
    });
}