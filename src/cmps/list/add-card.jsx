import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { TextareaAutosize } from "@mui/material";

export const AddCard = ({ toggleAddingCard, currList }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();
  const textArea = useRef(null);

  const [cardTitle, setCardTitle] = useState("");

  const handleTitleChange = (ev) => {
    const { value } = ev.target;
    if (ev.key === "Enter") {
      ev.preventDefault();
      onAddCard(ev);
      setCardTitle("");
      return;
    }
    setCardTitle(value);
  };

  const onAddCard = (ev) => {
    if (!cardTitle) {
      return;
    }

    const clonedBoard = _.cloneDeep(board);
    const newCard = boardService.getEmptyCard(cardTitle);
    const listIdx = board.lists.findIndex((list) => list.id === currList.id);
    clonedBoard.lists[listIdx].cards.push(newCard);

    setCardTitle("");
    dispatch(onEditBoard(clonedBoard));
  };

  const onCloseAddCard = (ev) => {
    if (ev.relatedTarget?.contains(ev.target)) {
      return;
    } else if (ev.relatedTarget?.id !== "add-card-btn") toggleAddingCard();
  };

  return (
    <div className="add-card" tabIndex="0">
      <div className="list-card-content">
        <div className="add-card-details">
          <TextareaAutosize
            dir="auto"
            placeholder="Enter a title for this card…"
            value={cardTitle}
            onChange={handleTitleChange}
            onKeyDown={handleTitleChange}
            autoFocus
            ref={textArea}
            onBlur={onCloseAddCard}
            aria-label="empty textarea"
          />
        </div>
      </div>

      <div className="add-card-controls flex">
        <div>
          <button
            id="add-card-btn"
            className="btn btn-primary"
            onClick={onAddCard}
          >
            Add card
          </button>

          <span
            className="trl icon-close icon-lg pointer"
            onClick={toggleAddingCard}
            onMouseDown={toggleAddingCard}
          ></span>
        </div>
      </div>
    </div>
  );
};
