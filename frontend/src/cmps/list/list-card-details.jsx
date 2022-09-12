import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

import { ListCardBadges } from "./list-card-badges";
import { MemberAvatar } from "../member-avatar";
import { CardLabels } from "../card/card-labels";

import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover, closePopover } from "../../store/actions/app.actions";

export const ListCardDetails = ({
  currCard,
  currList,
  coverMode,
  isQuickEdit,
}) => {
  const board = useSelector((state) => state.boardReducer.board);
  const dispatch = useDispatch();
  const [CardTitle, setCardTitle] = useState("");

  const onOpenPopover = (ev, popoverName, member) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { member, board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  useEffect(() => {
    setCardTitle(currCard.title);
  }, [currCard]);

  const handleTitleChange = (ev) => {
    const { value } = ev.target;
    setCardTitle(value);
  };

  const onSaveCardTitle = (ev) => {
    ev.preventDefault();
    const updatedCard = { ...currCard };
    updatedCard.title = CardTitle;
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const onKeyPressTitle = (ev) => {
    if (ev.charCode === 13) {
      onSaveCardTitle(ev);
      dispatch(closePopover());
    }
  };

  return (
    <div
      className={`list-card-details ${
        coverMode === "full" ? "full-cover-details" : ""
      }  ${currCard.style.isColorWhite ? "white" : "black"} ${
        currCard.style.isImage ? "image-cover" : "color-cover"
      }`}
    >
      {(coverMode === "half" || coverMode === null) && (
        <CardLabels currCard={currCard} board={board} mod={"list-card"} />
      )}

      {isQuickEdit ? (
        <form onSubmit={onSaveCardTitle}>
          <input
            className="list-title-input"
            onChange={handleTitleChange}
            onBlur={onSaveCardTitle}
            value={CardTitle}
            onKeyPress={onKeyPressTitle}
            autoFocus
          ></input>
        </form>
      ) : (
        <span
          className={`list-card-title ${
            coverMode === "full" ? "full-cover-title" : ""
          } ${currCard.style.isColorWhite ? "white" : "black"} ${
            currCard.style.isImage ? "image-cover" : "color-cover"
          }`}
        >
          {currCard.title}
        </span>
      )}

      {(coverMode === "half" || coverMode === null) && (
        <ListCardBadges currCard={currCard} currList={currList} />
      )}

      {(coverMode === "half" || coverMode === null) && (
        <div className="list-card-members">
          {currCard.cardMembers?.map((member) => (
            <MemberAvatar
              size={"28"}
              member={member}
              isBadge={false}
              key={member._id}
              onOpenPopover={onOpenPopover}
            />
          ))}
        </div>
      )}
    </div>
  );
};
