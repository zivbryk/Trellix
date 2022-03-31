import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { ChecklistTodo } from "./checklist-todo";
import { TextareaAutosize } from "@mui/material";

import { boardService } from "../../services/board.service";
import { utilService } from "../../services/util.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const CardDetailsChecklist = ({
  checklist,
  checklistIdx,
  currCard,
  board,
}) => {
  const dispatch = useDispatch();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleTxt, setTitleTxt] = useState("");
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [todoTxt, setTodoTxt] = useState("");
  const [isChecklistComplete, setIsChecklistComplete] = useState(false);
  const checklistTextarea = useRef(null);
  const todoTextarea = useRef(null);

  useEffect(() => {
    if (checklist.title) setTitleTxt(checklist.title);
  }, [checklist]);

  useEffect(() => {
    if (isEditingTitle) {
      checklistTextarea.current.select();
    }
  }, [isEditingTitle]);

  const handleChange = ({ target }) => {
    const { value } = target;
    const { name } = target;
    name === "checklist-title-textarea"
      ? setTitleTxt(value)
      : setTodoTxt(value);
  };

  const onCloseEditor = (ev) => {
    if (ev.relatedTarget?.contains(ev.target)) {
      return;
    } else if (
      ev.relatedTarget?.id !== "btn-save" &&
      ev.relatedTarget?.id !== "btn-close" &&
      ev.relatedTarget?.id !== "checklist-title-textarea" &&
      ev.relatedTarget?.id !== "add-todo-textarea"
    ) {
      ev.target.name === "checklist-title-textarea"
        ? setIsEditingTitle(false)
        : setIsEditingTodo(false);
    }
  };

  const onEnter = (ev) => {
    if (ev.key === "Enter") {
      console.log(ev.target);
      ev.target.name === "checklist-title-textarea"
        ? onSaveChecklistTitle()
        : onSaveNewTodo();
    }
  };

  const onSaveChecklistTitle = () => {
    const updatedCard = { ...currCard };
    updatedCard.checklists[checklistIdx].title = titleTxt;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
    setIsEditingTitle(false);
  };

  const getProgressPercentage = () => {
    const totalTodos = checklist.todos.length;
    const doneTodos = checklist.todos.reduce((acc, currTodo) => {
      if (currTodo.isDone) acc++;
      return acc;
    }, 0);
    const percentage = Math.floor((doneTodos / totalTodos) * 100);
    // if (percentage === 100) setIsChecklistComplete(true);
    return percentage;
  };

  const onToggleTodo = (todo, todoIdx) => {
    const updatedCard = { ...currCard };
    updatedCard.checklists[checklistIdx].todos[todoIdx].isDone = !todo.isDone;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const onDeleteTodo = (todoIdx) => {
    const updatedCard = { ...currCard };
    updatedCard.checklists[checklistIdx].todos.splice(todoIdx, 1);
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const onSaveNewTodo = () => {
    if (todoTxt === "") {
      todoTextarea.current.focus();
      return;
    }
    const newTodo = {
      id: utilService.makeId(),
      title: todoTxt,
      isDone: false,
    };
    const updatedCard = { ...currCard };
    updatedCard.checklists[checklistIdx].todos.push(newTodo);
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
    setIsEditingTodo(false);
  };

  return (
    <div className="card-details-checklist " tabIndex="0">
      <div className="card-details-title">
        <span className="trl icon-checkbox-checked icon-lg card-details-title-icon"></span>

        {!isEditingTitle && (
          <div className="checklist-title flex">
            <h3 className="pointer" onClick={() => setIsEditingTitle(true)}>
              {checklist.title}
            </h3>

            <div className="title-options">
              <button className="btn btn-sub">Delete</button>
            </div>
          </div>
        )}

        {isEditingTitle && (
          <div className="checklist-title-editor" tabIndex="0">
            <textarea
              id="checklist-title-textarea"
              name="checklist-title-textarea"
              dir="auto"
              value={titleTxt}
              onChange={handleChange}
              onKeyDown={onEnter}
              ref={checklistTextarea}
              onBlur={onCloseEditor}
            ></textarea>

            <div className="edit-controls flex">
              <button
                id="btn-save"
                className="btn btn-primary"
                onClick={onSaveChecklistTitle}
              >
                Save
              </button>
              <button className="btn">
                <span
                  id="btn-close"
                  className="trl icon-close icon-lg"
                  onClick={() => setIsEditingTitle(false)}
                  tabIndex="0"
                ></span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="checklist-progress">
        <span className="checklist-progress-percentage">
          {getProgressPercentage() + "%"}
        </span>

        <div className="checklist-progress-bar">
          <div
            className={`checklist-progress-bar-current ${
              getProgressPercentage() === 100 ? "checklist-complete" : ""
            }`}
            style={{ width: `${getProgressPercentage() + "%"}` }}
          ></div>
        </div>
      </div>

      <div className="todos-list">
        {checklist.todos.map((todo, todoIdx) => (
          <ChecklistTodo
            key={todo.id}
            todo={todo}
            todoIdx={todoIdx}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>

      <div className="add-todo-container">
        {!isEditingTodo && (
          <button
            className="btn btn-sub btn-add-todo"
            onClick={() => {
              setIsEditingTodo(true);
            }}
          >
            Add an item
          </button>
        )}

        {isEditingTodo && (
          <div className="add-todo-editor">
            <TextareaAutosize
              id="add-todo-textarea"
              name="add-todo-textarea"
              className="add-todo-textarea"
              dir="auto"
              placeholder="Add an item"
              value={todoTxt}
              onChange={handleChange}
              onKeyDown={onEnter}
              autoFocus
              ref={todoTextarea}
              onBlur={onCloseEditor}
              style={{ height: 56, minHeight: 32 }}
            />

            <div className="add-todo-controls flex">
              <button
                id="btn-save"
                className="btn btn-primary"
                onClick={onSaveNewTodo}
              >
                Add
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
  );
};
