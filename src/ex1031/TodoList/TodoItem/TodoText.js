function TodoText({ id, text, toggleTodoEditing }) {
  return (
    <>
      <span
        onDoubleClick={() => {
          toggleTodoEditing(id);
        }}
      >
        {text}
      </span>
      <button
        onClick={() => {
          // 切換編輯state
          toggleTodoEditing(id);
          //編輯文字輸入框中文字設為text
          // setInputEditingValue(text);
        }}
      >
        編輯
      </button>
    </>
  );
}

export default TodoText;
