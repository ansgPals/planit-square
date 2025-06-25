function Summary(params) {
  const div = document.createElement("div");
  div.className = "todo-summary";

  const completed = params.todos.filter(function (t) {
    return t.isCompleted;
  }).length;

  const summaryText = document.createElement("p");
  summaryText.textContent =
    "완료: " + completed + " / 전체: " + params.todos.length;

  const clearBtn = document.createElement("button");
  clearBtn.textContent = "완료 항목 삭제";
  clearBtn.className = "clear-completed-btn";
  clearBtn.addEventListener("click", function () {
    params.onClearCompleted();
  });

  div.appendChild(summaryText);
  div.appendChild(clearBtn);
  params.target.appendChild(div);
}

export default Summary;
