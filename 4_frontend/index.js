const button = document.querySelector(".link-btn");

const moveToTodos = () => {
    document.location.href = "./pages/todos.html"
}

const render = () => {
    button.addEventListener("click", moveToTodos);
}
render();
