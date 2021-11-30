const tasksInput = document.querySelector('.tasks__input');
const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
const todo = document.createElement('div');
const todoTitle = document.createElement('div');
const buttonRemove = document.createElement('a');
tasksInput.value = '';

function createTodo() {
    todo.classList.add('task');
    todo.insertAdjacentElement('beforeEnd', todoTitle);
    todo.insertAdjacentElement('beforeEnd', buttonRemove);
    todoTitle.classList.add('task__title');
    todoTitle.innerText = tasksInput.value;
    buttonRemove.classList.add('task__remove');
    buttonRemove.setAttribute('href', '');
    buttonRemove.innerHTML = '&times;';
    tasksList.appendChild(todo.cloneNode(true));
    tasksInput.value = '';
    
}

function removeTask() {
    const tasks = document.querySelectorAll('.task');

    Array.from(tasks).findIndex((task) => {
        const buttonRemove = task.querySelector('.task__remove');
    
        buttonRemove.addEventListener('click', (e) => {
            e.preventDefault();
            task.remove();
        });
    });
}


tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if (tasksInput.value !== '') {
        createTodo();
    }
    removeTask();
});