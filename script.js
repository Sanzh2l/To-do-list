document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'deleteButton';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            taskInput.value = '';
            taskInput.focus();
        }
    });
});
