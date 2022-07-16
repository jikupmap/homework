import api from "../js/api.js"

const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todos = document.querySelector(".todos");

const renderTodo = (todo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = todo;
    li.appendChild(span);
    todos.appendChild(li);
}

const createTodo = (event) => {
    event.preventDefault();
    renderTodo(todoInput.value);
    todoInput.value = "";
}

const render = async () => {
    const todos = await api.fetchTodos()
    todos.forEach((todo) => {
        renderTodo(todo)
    })
    todoForm.addEventListener("submit", createTodo);
}
render();

//https://gobae.tistory.com/18?category=942666
