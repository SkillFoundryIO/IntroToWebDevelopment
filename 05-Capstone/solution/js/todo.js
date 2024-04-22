document.addEventListener("DOMContentLoaded", function() {
    // Get Elements
    const addTaskForm = document.getElementById("addTask");
    
    // Form elements
    const taskTitleElement = document.getElementById("taskTitle");
    const taskSubtitleElement = document.getElementById("taskSubtitle");
    const taskDescriptionElement = document.getElementById("taskDescription");

    // Todo container
    const todoContainer = document.getElementById("sectionTodoList");

    addTaskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let item = buildTodoListItem();
        todoContainer.appendChild(item);
        clearForm();
    });

    function buildTodoListItem() {
        // get data from form
        const taskTitle = taskTitleElement.value;
        const taskSubtitle = taskSubtitleElement.value;
        const taskDescription = taskDescriptionElement.value;

        // Create the HTML elements for the new todo item
        let todoItem = document.createElement('div');
        todoItem.className = 'todoItem row';

        // title, subtitle, and checkbox
        let titleCol = document.createElement('div');
        titleCol.className = 'col-10';

        let titlePara = document.createElement('p');
        titlePara.className = 'todoTitle';
        titlePara.textContent = taskTitle;

        let subtitlePara = document.createElement('p');
        subtitlePara.className = 'todoSubtitle';
        subtitlePara.textContent = taskSubtitle;

        let checkboxCol = document.createElement('div');
        checkboxCol.className = 'col-2 text-end';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                todoItem.className = 'todoItem row complete';
            } else {
                todoItem.className = 'todoItem row';
            }
        });

        // description
        let descriptionCol = document.createElement('div');
        descriptionCol.className = 'col-12';

        let descriptionPara = document.createElement('p');
        descriptionPara.className = 'todoDescription';
        descriptionPara.textContent = taskDescription;

        // delete button
        let deleteCol = document.createElement('div');
        deleteCol.className = 'text-end';

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger';
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', function() {
            // Remove the entire todo item from the container
            todoItem.remove();
          });

        // Append the elements to build the todo item structure
        titleCol.appendChild(titlePara);
        titleCol.appendChild(subtitlePara);
        todoItem.appendChild(titleCol);

        checkboxCol.appendChild(checkbox);
        todoItem.appendChild(checkboxCol);

        descriptionCol.appendChild(descriptionPara);
        todoItem.appendChild(descriptionCol);

        deleteCol.appendChild(deleteBtn);
        todoItem.appendChild(deleteCol);

        return todoItem;
    }

    function clearForm() {
        taskTitleElement.value = "";
        taskSubtitleElement.value = "";
        taskDescriptionElement.value = "";
    }
});