const progress = document.getElementById("progress");
const send = document.getElementById("send");
let file = document.querySelector('.input__wrapper-desc').textContent;
const form = document.getElementById("form");

send.onclick = function () {
    if (file) {
        upload();
    }
    return false;
}

function upload() {
    xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    xhr.upload.onprogress = function(event) {
        progress.setAttribute("value", event.loaded/event.total);
    }
    
    xhr.open('POST', "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData);
} 

document.querySelector('.input__wrapper-button').onclick = function () {
    progress.setAttribute("value", 0);
}