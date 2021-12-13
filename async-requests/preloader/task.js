const xhr = new XMLHttpRequest();
const items = document.getElementById('items');
const loader = document.querySelector('.loader');

const method = 'GET';
const url = 'https://netology-slow-rest.herokuapp.com';
xhr.open(method, url);
xhr.responseType = 'json';
xhr.send();

xhr.onload = () => {
    xhr.response;
    const valute = xhr.response.response.Valute;

    if (xhr.readyState == 4) {
        loader.classList.remove('loader_active');
    }
    
    for (let key in valute) {
        const item = document.createElement('div');
        item.classList.add('item');

        item.innerHTML += `
            <div class="item__code">
                ${valute[key].CharCode}
            </div>
            <div class="item__value">
                ${valute[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>`;
        items.appendChild(item);
    }
}

