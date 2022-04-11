import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { onEditBoard } from "../../store/actions/board.actions";
import { boardService } from "../../services/board.service";

export const ListAddCmp = ({ board }) => {
  const dispatch = useDispatch();
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const titleInput = useRef(null);

  useEffect(() => {
    if (isEditTitle) titleInput.current.select();
  }, [isEditTitle]);

  useEffect(() => {
    if (board.lists.length === 0) setIsEditTitle(true);
  }, []);

  const handleTitleChange = (ev) => {
    const { value } = ev.target;
    setListTitle(value);
  };

  const toggleTitleEdit = () => {
    setIsEditTitle(!isEditTitle);
  };

  const onAddList = (ev) => {
    ev.preventDefault();
    if (!listTitle) {
      titleInput.current.focus();
      return;
    }

    const clonedBoard = _.cloneDeep(board);
    const newList = boardService.getEmptyList(listTitle);
    clonedBoard.lists.push(newList);

    setListTitle("");
    dispatch(onEditBoard(clonedBoard));
  };

  const onCloseAddList = (ev) => {
    if (ev.relatedTarget?.contains(ev.target)) {
      titleInput.current.focus();
    } else if (ev.relatedTarget?.id !== "add-list-btn") toggleTitleEdit();
  };

  const { lists } = board;
  return (
    <section
      tabIndex="0"
      id="add-list-container"
      className={`list-add-cmp cards-list ${isEditTitle ? "edit-mode" : ""}`}
    >
      {isEditTitle ? (
        <form onSubmit={onAddList}>
          <input
            className="list-add-title-input"
            placeholder="Enter list title..."
            onChange={handleTitleChange}
            onBlur={onCloseAddList}
            value={listTitle}
            ref={titleInput}
          ></input>
          <div>
            <button
              id="add-list-btn"
              className="btn btn-primary"
              onClick={onAddList}
            >
              Add list
            </button>
            <span
              className="trl icon-close icon-lg"
              onClick={toggleTitleEdit}
            ></span>
          </div>
        </form>
      ) : (
        <span className="list-add-title" onClick={toggleTitleEdit}>
          <span className="trl icon-add icon-sm"></span>
          Add {lists.length > 0 ? "another" : "a"} list
        </span>
      )}
    </section>
  );
};
