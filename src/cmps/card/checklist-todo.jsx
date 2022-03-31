export const ChecklistTodo = ({
  todo,
  todoIdx,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <div className="checklist-todo" key={todo.id}>
      <div
        className={`todo-checkbox ${todo.isDone ? "isDone" : ""}`}
        onClick={() => {
          onToggleTodo(todo, todoIdx);
        }}
      >
        <span className="trl icon-check"></span>
      </div>

      <div className="todo-details">
        <div className="todo-row flex">
          <div className="todo-text-and-controls">
            <span className={`todo-text ${todo.isDone ? "isDone" : ""}`}>
              {todo.title}
            </span>
            <div className="todo-controls">
              <span
                className="trl icon-trash icon-sm"
                onClick={() => {
                  onDeleteTodo(todoIdx);
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
