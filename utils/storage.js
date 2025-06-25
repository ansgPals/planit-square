export function getTodos() {
  try {
    return JSON.parse(localStorage.getItem("todos")) || [];
  } catch (e) {
    return [];
  }
}

export function setTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
