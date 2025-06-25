import TodoItem from "./Todoitem.js";

function List(params) {
  const list = document.createElement("ul");
  list.className = "todo-list";

  if (params.todos.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = "<p>할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>";
    params.target.appendChild(empty);
    return;
  }

  params.todos.forEach(function (todo, index) {
    new TodoItem({
      todo: todo,
      index: index,
      onToggle: params.onToggle,
      onDelete: params.onDelete,
      onEdit: params.onEdit,
      target: list,
    });
  });

  params.target.appendChild(list);
}

export default List;
