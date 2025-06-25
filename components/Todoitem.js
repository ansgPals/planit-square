function TodoItem(params) {
  const { todo, index, onToggle, onDelete, onEdit, target } = params;
  const item = document.createElement("li");
  item.className = "todo-item" + (todo.isCompleted ? " completed" : "");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.checked = todo.isCompleted;
  checkbox.addEventListener("change", function () {
    onToggle(index);
  });

  const text = document.createElement("input");
  text.type = "text";
  text.className = "todo-text";
  text.value = todo.name;
  text.readOnly = todo.isCompleted;
  text.addEventListener("blur", function () {
    if (text.value !== todo.name) {
      onEdit(index, text.value);
    }
  });
  text.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      text.blur();
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "todo-delete";
  deleteBtn.addEventListener("click", function () {
    onDelete(index);
  });

  item.appendChild(checkbox);
  item.appendChild(text);
  item.appendChild(deleteBtn);
  target.appendChild(item);

  return item;
}

export default TodoItem;
