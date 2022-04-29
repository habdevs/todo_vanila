const tasks = [
    { task: '' },
];

function addNewTask() {
    const taskInput = document.getElementById('task-input');
    console.log('task-input', taskInput.value);
    const ul = document.querySelector('.todo-list-ul');
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    li.onclick = () => {
        li.classList.add('active');
    }
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = 'DELETE'

    button.onclick = () => {
        li.remove();
    }
    tasks.unshift({ task: taskInput.value })
    console.log('tasks', tasks);
    li.append(button, taskInput.value);
    ul.append(li)
}

const btn = document.querySelector('.btn-input');
btn.addEventListener('click', addNewTask)

function getTodoList(allTasks) {
    const ul = document.querySelector('.todo-list-ul');

    const liElements = allTasks.map((elem) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.onclick = () => {
            li.classList.add('active');
        }

        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = 'DELETE'
        button.onclick = () => {
            li.remove();
        }

        li.append(button, elem.task);

        return li;
    });

    return ul.append(...liElements);
};

getTodoList(tasks);