import { useState, useEffect, useRef } from "react";
import { TextareaAutosize } from "@mui/material";

export const ChecklistTodo = ({
  todo,
  todoIdx,
  onToggleTodo,
  onDeleteTodo,
  saveTodo,
}) => {
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [todoTxt, setTodoTxt] = useState("");
  const todoTextarea = useRef(null);

  useEffect(() => {
    if (todo.title) setTodoTxt(todo.title);
  }, [todo]);

  useEffect(() => {
    if (isEditingTodo) {
      todoTextarea.current.select();
    }
  }, [isEditingTodo]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setTodoTxt(value);
  };

  const onEnter = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      onSaveTodo();
    }
  };

  const onCloseEditor = (ev) => {
    if (ev.relatedTarget?.contains(ev.target)) {
      return;
    } else if (
      ev.relatedTarget?.id !== "btn-save" &&
      ev.relatedTarget?.id !== "btn-close" &&
      ev.relatedTarget?.id !== "edit-todo-textarea"
    ) {
      setIsEditingTodo(false);
    }
  };

  const onSaveTodo = () => {
    if (todoTxt === "") {
      todoTextarea.current.focus();
      return;
    }
    saveTodo(todoTxt, todoIdx);
    setIsEditingTodo(false);
    setTodoTxt("");
  };
  return (
    <div className="checklist-todo" key={todo.id} tabIndex="0">
      <div
        className={`todo-checkbox ${todo.isDone ? "isDone" : ""}`}
        onClick={() => {
          onToggleTodo(todo, todoIdx);
        }}
      >
        <span className="trl icon-check"></span>
      </div>

      <div className="todo-details" tabIndex="0">
        <div className="todo-row flex" tabIndex="0">
          {!isEditingTodo && (
            <div
              className="todo-text-and-controls"
              onClick={() => setIsEditingTodo(true)}
            >
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
          )}

          {isEditingTodo && (
            <div className="todo-editor" tabIndex="0">
              <TextareaAutosize
                value={todoTxt}
                ref={todoTextarea}
                id="edit-todo-textarea"
                name="edit-todo-textarea"
                className="edit-todo-textarea"
                dir="auto"
                onChange={handleChange}
                onKeyDown={onEnter}
                autoFocus
                onBlur={onCloseEditor}
                style={{ height: 56, minHeight: 32 }}
              />

              <div className="edit-todo-controls flex">
                <button
                  id="btn-save"
                  className="btn btn-primary"
                  onClick={onSaveTodo}
                >
                  Save
                </button>
                <button className="btn">
                  <span
                    id="btn-close"
                    className="trl icon-close icon-lg"
                    onClick={() => setIsEditingTodo(false)}
                    tabIndex="0"
                  ></span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
