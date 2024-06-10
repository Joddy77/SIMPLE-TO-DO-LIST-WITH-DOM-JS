document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#todo-form');
    const input = document.querySelector('#todo-input');
    const list = document.querySelector('#todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = input.value;
        const newTask = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            list.removeChild(newTask);
        });

        newTask.appendChild(taskSpan);
        newTask.appendChild(removeButton);
        list.appendChild(newTask);
        input.value = '';
    });

    // CSS for completed tasks
    const style = document.createElement('style');
    style.textContent = `
        .completed {
            text-decoration: line-through;
        }
    `;
    document.head.appendChild(style);
});
