import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { PopoverCmp } from "../popovers/popover-cmp";

import { boardService } from "../../services/board.service";
import { utilService } from "../../services/util.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverAddChecklist = ({
  elPos,
  handleClose,
  currCard,
  board,
}) => {
  const dispatch = useDispatch();
  const [checklistTitle, setChecklistTitle] = useState("Checklist");
  const titleInput = useRef(null);

  const onFocus = (ev) => {
    ev.target.select();
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setChecklistTitle(value);
  };

  const onAddChecklist = () => {
    const newChecklist = {
      id: utilService.makeId(),
      title: checklistTitle,
      todos: [],
    };
    const updatedCard = { ...currCard };
    updatedCard.checklists.push(newChecklist);
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
    dispatch(closePopover());
  };

  return (
    <PopoverCmp title="Add checklist" handleClose={handleClose} elPos={elPos}>
      <div className="popover-add-checklist-content">
        <label htmlFor="checklist-input">Title</label>

        <input
          id="checklist-input"
          type="text"
          value={checklistTitle}
          onChange={handleChange}
          autoFocus
          onFocus={onFocus}
          ref={titleInput}
        />

        <button className="btn btn-primary" onClick={onAddChecklist}>
          Add
        </button>
      </div>
    </PopoverCmp>
  );
};
