'Use Strict'
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-Button")
const todoList = document.querySelector(".do-list")
    // eventLsteners
todoButton.addEventListener('click', addActivity)

//functions
function addActivity(event) {
    //prevents the form from submitting
    event.preventDefaut();
    //the ToDo list
    //creates adiv element with the class to-do
    const todoDiv = document.createElement("div")
    todoDiv.classList.add('todo')
        //Create a list
    const newtodoLi = document.createElement("li")
    newtodoLi.innerText = 'hello'
    newtodoLi.classList.add("todo-Item")
        //make the list a child to the Div
    todoDiv.appendChild(newtodoLi);
    //add check mark button
    const checkedButton = document.createElement('button')
    checkedButton.classList.add('check-btn')
    checkedButton.innerHTML = '< i class = "fas fa-check" ></i >';
    todoDiv.appendChild(checkedButton);
    //add a trash button
    const trashButton = document.createElement('button')
    trashButton.classList.add('trash-btn')
    trashButton.innerHTML = '< i class = "fas fa-trash" > </i >'
    todoDiv.appendChild(trashButton);
    //Append To the unordered List in the HTML 
    todoList.appendChild(todoDiv)

}