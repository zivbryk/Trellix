import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const CardDetailsHeader = ({ currCard, currList, board }) => {
  const dispatch = useDispatch();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const titleTextArea = useRef(null);

  useEffect(() => {
    if (currCard) setCardTitle(currCard.title);
  }, [currCard]);

  useEffect(() => {
    if (isEditingTitle) titleTextArea.current.focus();
  }, [isEditingTitle]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setCardTitle(value);
  };

  const handleKeyPress = (ev) => {
    if (ev.code === "Enter") {
      ev.target.blur();
      ev.preventDefault();
      onSaveCardTitle();
    }
  };

  const onSaveCardTitle = () => {
    const updatedCard = { ...currCard };
    updatedCard.title = cardTitle;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
    setIsEditingTitle(false);
  };

  if (!currCard) return <div></div>;
  return (
    <section className="card-details-header">
      <span className="trl icon-card icon-lg"></span>

      <div className="card-details-title">
        <textarea
          className={`${isEditingTitle ? "no-shadow" : "no-shadow"}`}
          value={cardTitle}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onBlur={onSaveCardTitle}
          ref={titleTextArea}
        ></textarea>
      </div>

      <div className="in-list-subtitle quiet">
        <p>
          in list
          <span> </span>
          <span className="link">{currList.title}</span>
        </p>
      </div>
    </section>
  );
};
