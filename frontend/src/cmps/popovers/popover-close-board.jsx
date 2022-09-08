import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PopoverCmp } from "./popover-cmp";

import { userService } from "../../services/user.service";
import { onRemoveBoard } from "../../store/actions/board.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverCloseBoard = ({ elPos, handleClose }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const loggedinUser = userService.getLoggedinUser();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCloseBoard = (ev) => {
    ev.preventDefault();
    if (loggedinUser.fullname === board.createdBy.fullname) {
      dispatch(onRemoveBoard(board));
      dispatch(dispatch(closePopover));
      navigate(`/workspace`);
    }
  };

  return (
    <PopoverCmp title={"Close board?"} handleClose={handleClose} elPos={elPos}>
      <div className="popover-close-board-content">
        <p>You are about to close the board.</p>
        <p>Are you sure?</p>

        <button className={`btn-create btn btn-danger`} onClick={onCloseBoard}>
          Close
        </button>
      </div>
    </PopoverCmp>
  );
};
