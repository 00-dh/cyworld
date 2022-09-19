const todoForm = document.querySelector(".todo-list");
const todoInput = todoForm.querySelector("input");
const listIndex = document.querySelector(".list-index");

function handleTodo(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  todoInput.value = "";
  painList(inputValue);
}

function painList(content) {
  const li = document.createElement("li");
  listIndex.appendChild(li);
  const span = document.createElement("span");
  span.innerText = content;
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(button);
  button.addEventListener("click", deleteList);
}

function deleteList(event) {
  const li = event.target.parentNode;
  li.remove();
}

todoForm.addEventListener("submit", handleTodo);
