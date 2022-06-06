'Use Strict'
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector(".todo-Button");
const todoList = document.querySelector(".do-list");
// eventLsteners
todoButton.addEventListener('click', addActivity);
todoList.addEventisteners('click', delete)

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