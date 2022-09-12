import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { PopoverCmp } from "./popover-cmp";

import { userService } from "../../services/user.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { closePopover } from "../../store/actions/app.actions";

export const PopoverLeaveBoard = ({ elPos, handleClose }) => {
  const board = useSelector((state) => state.boardReducer.board);
  const loggedInUser = userService.getLoggedinUser();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLeaveBoard = (ev) => {
    ev.preventDefault();
    if (
      board.boardMembers.some(
        (member) => member.fullname === loggedInUser.fullname
      )
    ) {
      let boardToSave = _.cloneDeep(board);
      boardToSave.lists?.forEach((list) => {
        list.cards?.forEach((card) => {
          const memberIdx = card.cardMembers?.findIndex(
            (member) => member.fullname === loggedInUser.fullname
          );
          card.cardMembers.splice(memberIdx, 1);
        });
      });
      const memberIdx = boardToSave.boardMembers.findIndex(
        (member) => member.fullname === loggedInUser.fullname
      );
      boardToSave.boardMembers.splice(memberIdx, 1);
      dispatch(onEditBoard(boardToSave));
      dispatch(dispatch(closePopover));
      navigate(`/workspace`);
    }
  };

  return (
    <PopoverCmp title={"Leave board?"} handleClose={handleClose} elPos={elPos}>
      <div className="popover-create-board-content">
        <p>You will be removed from all cards on this board.</p>

        <button className={`btn-create btn btn-danger`} onClick={onLeaveBoard}>
          Leave Board
        </button>
      </div>
    </PopoverCmp>
  );
};
