import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";

import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";

export const ListHeader = ({ list, board, onDeleteList }) => {
  const dispatch = useDispatch();
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const titleInput = useRef(null);

  useEffect(() => {
    setListTitle(list.title);
  }, [list]);

  useEffect(() => {
    if (isEditTitle) titleInput.current.select();
  }, [isEditTitle]);

  const handleTitleChange = (ev) => {
    const { value } = ev.target;
    setListTitle(value);
  };

  const toggleTitleEdit = () => {
    setIsEditTitle(!isEditTitle);
  };

  const onSaveListTitle = (ev) => {
    ev.preventDefault();
    const clonedBoard = _.cloneDeep(board);
    clonedBoard.lists.forEach((listInBoard) => {
      if (listInBoard.id === list.id) listInBoard.title = listTitle;
    });
    dispatch(onEditBoard(clonedBoard));
    toggleTitleEdit();
  };

  const onOpenPopover = (ev, popoverName) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { list, onDeleteList };

    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  return (
    <section className="list-header flex align-center">
      {isEditTitle ? (
        <form onSubmit={onSaveListTitle}>
          <input
            className="list-title-input"
            onChange={handleTitleChange}
            onBlur={onSaveListTitle}
            value={listTitle}
            ref={titleInput}
          ></input>
        </form>
      ) : (
        <h2 className="list-title" onClick={toggleTitleEdit}>
          {listTitle}
        </h2>
      )}

      <button
        className="list-title-extras"
        onClick={(ev) => onOpenPopover(ev, "LIST-ACTIONS")}
      >
        <span className="trl icon-tri-dots-hor icon-sm"></span>
      </button>
    </section>
  );
};
