'Use Strict'
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector(".todo-Button");
const todoList = document.querySelector(".do-list");
const filterOption = document.querySelector(".filter-todo");
// eventLsteners
todoButton.addEventListener('click', addActivity);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo)


//functions

function addActivity(event) {
    //prevents the form from 
    event.preventDefault();


    //the ToDo list
    //creates adiv element with the class to-do
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create a list
    const newtodoLi = document.createElement("li");
    newtodoLi.innerText = todoInput.value;
    newtodoLi.classList.add("todo-Item");
    //clears the input automatically after clicking the add button
    todoInput.value = "";
    //make the list a child to the Div
    todoDiv.appendChild(newtodoLi);
    //add check mark button
    const checkedButton = document.createElement("button");
    checkedButton.innerHTML = '<i class = "fas fa-check" ></i >';
    checkedButton.classList.add("check-btn");

    todoDiv.appendChild(checkedButton);
    //add a trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash" ></i >'
    trashButton.classList.add("trash-btn");

    todoDiv.appendChild(trashButton);
    //Append To the unordered List in the HTML 
    todoList.appendChild(todoDiv)
}
//The delete function
function deleteCheck(e) {
    const item = e.target; // The functionality will depend on what youve clicked
    //DELETE TODO(div)i.e ;list and both butons
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // todo.remove();
        //lets add an animation feature before an item is deleted
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })

    }
    //CHECK MARK
    if (item.classList[0] === "check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")

    }
}

function filterTodo(e) {
    const todos = todoList.childNodes
        //Loop over all the node list that will be created on clicking the add button
    todos.forEach(function(todo) {
        switch (e.target.value) //value which are: all,completed, uncompleted
    });


}