function CreateInput(params) {
  params.target.innerHTML += `
    <div class="create-input-container">
      <input type="text" class="create-input-text" placeholder="할 일을 입력하세요" maxlength="15" />
      <button type="button">추가</button>
    </div>
  `;

  const input = params.target.querySelector(".create-input-text");
  const button = params.target.querySelector(".create-input-container button");

  params.onMount?.(input);

  button.addEventListener("click", function () {
    params.onAddTodo?.(input.value);
    input.value = "";
    input.focus();
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      params.onAddTodo?.(input.value);
      input.value = "";
      input.focus();
    }
  });
}

export default CreateInput;
