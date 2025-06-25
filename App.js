import CreateInput from "./components/CreateInput.js";
import List from "./components/List.js";
import Summary from "./components/Summary.js";
import showToast from "./utils/toast.js";

import { getTodos, setTodos } from "./utils/storage.js";

function App() {
  const state = {
    todos: getTodos(),
  };
  let forceScrollTop = false;

  this.setState = function (nextState, options) {
    Object.assign(state, nextState);
    setTodos(state.todos);
    if (options && options.scrollTop) {
      forceScrollTop = true;
    }
    this.render();
  };

  this.render = function () {
    const app = document.querySelector("#app");

    const prevList = app.querySelector(".todo-list");
    const prevScroll = prevList ? prevList.scrollTop : 0;

    app.innerHTML = "";

    new CreateInput({
      target: app,
      onAddTodo: function (todoText) {
        if (!todoText) return;
        const newTodos = state.todos.slice();
        newTodos.unshift({
          name: todoText,
          isCompleted: false,
        });
        this.setState({ todos: newTodos }, { scrollTop: true });
        showToast("일정이 추가되었습니다");
      }.bind(this),
      onMount: function (input) {
        input.focus();
      },
    });

    new List({
      target: app,
      todos: state.todos,
      onToggle: function (index) {
        const newTodos = state.todos.slice();
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        this.setState({ todos: newTodos });
      }.bind(this),
      onDelete: function (index) {
        const newTodos = state.todos.slice();
        newTodos.splice(index, 1);
        this.setState({ todos: newTodos });
        showToast("일정이 삭제되었습니다");
      }.bind(this),
      onEdit: function (index, newName) {
        const newTodos = state.todos.slice();
        newTodos[index].name = newName;
        this.setState({ todos: newTodos });
        showToast("일정이 수정되었습니다");
      }.bind(this),
    });

    new Summary({
      target: app,
      todos: state.todos,
      onClearCompleted: function () {
        const newTodos = state.todos.filter(function (todo) {
          return !todo.isCompleted;
        });
        this.setState({ todos: newTodos });
        showToast("완료된 일정이 삭제되었습니다");
      }.bind(this),
    });

    // 렌더 후 스크롤 위치 조정
    const newList = app.querySelector(".todo-list");
    if (newList) {
      if (forceScrollTop) {
        newList.scrollTop = 0;
        forceScrollTop = false;
      } else {
        newList.scrollTop = prevScroll;
      }
    }
  };

  this.render();
}

export default App;
