import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PopoverCmp } from "./popover-cmp";
import { ReactComponent as BoardDemo } from "../../assets/img/backgrounds/board-demo.svg";
import { ReactComponent as CheckIcon } from "../../assets/img/icons/check-icon.svg";

import { boardService } from "../../services/board.service";
import { userService } from "../../services/user.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverCloseBoard = ({ elPos, handleClose }) => {
  const board = useSelector((state) => state.boardReducer.board);

  const onCloseBoard = (ev) => {
    ev.preventDefault();
    const loggedinUser = userService.getLoggedinUser();

    dispatch(onEditBoard(boardToAdd));
    dispatch(dispatch(closePopover));
    navigate(`/board/${board._id}`);
  };

  return (
    <PopoverCmp title={"Close board?"} handleClose={handleClose} elPos={elPos}>
      <div className="popover-create-board-content">
        <p>
          You can find and reopen closed boards at the bottom of
          <span> your boards page.</span>
        </p>

        <button className={`btn-create btn btn-danger`} onClick={onCloseBoard}>
          Close
        </button>
      </div>
    </PopoverCmp>
  );
};
