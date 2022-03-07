import React from "react";
import { useDispatch } from "react-redux";

import Popover from "@mui/material/Popover";
import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";

export const PopoverProfile = ({
  board,
  currCard,
  member,
  elPos,
  isInCard = true,
  handleClose,
}) => {
  const dispatch = useDispatch();
  //   const id = "12345"; //TODO: change this id!

  const getStyle = () => {
    return {
      backgroundImage: `url(${member.imgUrl})`,
      backgroundSize: "cover",
    };
  };

  const onRemoveAvatar = () => {
    const updatedCard = { ...currCard };
    const memberIdx = currCard.cardMembers.findIndex(
      (currMember) => currMember._id === member._id
    );
    updatedCard.cardMembers.splice(memberIdx, 1);

    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  return (
    <Popover
      className="popover"
      //   id={id}
      open={true}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: elPos.top + elPos.height + 6, left: elPos.left }}
    >
      <div className="popover-profile">
        <button className="btn btn-close-popover" onClick={handleClose}>
          <span className="trl icon-close"></span>
        </button>

        <div className="popover-content">
          <div className="popover-profile-header flex">
            <div title={member.fullname}>
              <div style={getStyle()}></div>
            </div>
            <div>
              <div title={member.fullname}>{member.fullname}</div>
              <div title={member.username}>@{member.username}</div>
            </div>
          </div>

          <hr />

          {isInCard && (
            <ul className="clean-list">
              <li onClick={onRemoveAvatar}>Remove from card</li>
            </ul>
          )}
        </div>
      </div>
    </Popover>
  );
};
