import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { userService } from "../../services/user.service";
import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";

export const CardDetailsSideBar = ({ currCard, board }) => {
  const dispatch = useDispatch();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = userService.getLoggedinUser();
    setLoggedInUser(user);
  }, []);

  const isUserCardMember = () => {
    return currCard.cardMembers.find(
      (member) => member._id === loggedInUser._id
    );
  };

  const onJoinToCard = () => {
    const updatedCard = { ...currCard };
    updatedCard.cardMembers.push(loggedInUser);
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const onOpenPopover = (ev, popoverName) => {
    const elPos = ev.target.getBoundingClientRect();
    const popoverProps = { board, currCard };
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  if (!currCard) return <div></div>;
  return (
    <div className="card-details-side-bar">
      {!isUserCardMember() && (
        <div className="suggested-actions">
          <h3 className="no-top-margin">Suggested</h3>
          <div>
            <button className="btn btn-sub btn-sidebar" onClick={onJoinToCard}>
              <span className="icon-sm trl icon-member"></span>
              <span>Join</span>
            </button>
          </div>
        </div>
      )}

      <div className="add-to-card">
        <h3 className="no-top-margin">Add to card</h3>

        <div>
          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "MEMBERS")}
          >
            <span className="icon-sm trl icon-member"></span>
            <span>Members</span>
          </button>

          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "LABELS")}
          >
            <span className="icon-sm trl icon-label"></span>
            <span>Labels</span>
          </button>

          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "CHECKLIST")}
          >
            <span className="icon-sm trl icon-checkbox-checked"></span>
            <span>Checklists</span>
          </button>

          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "DATE")}
          >
            <span className="icon-sm trl icon-clock"></span>
            <span>Dates</span>
          </button>

          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "ATTACHMENT")}
          >
            <span className="icon-sm trl icon-attachment"></span>
            <span>Attachment</span>
          </button>
        </div>
      </div>

      <div className="card-actions">
        <h3 className="no-top-margin">Actions</h3>

        <div>
          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "MOVE")}
          >
            <span className="icon-sm trl icon-move"></span>
            <span>Move</span>
          </button>

          <button
            className="btn btn-sub btn-sidebar"
            // onClick={(ev) => onOpenPopover(ev, "ATTACHMENT")}
          >
            <span className="icon-sm trl icon-copy"></span>
            <span>Copy</span>
          </button>

          <hr />

          <button
            className="btn btn-sub btn-sidebar"
            // onClick={(ev) => onOpenPopover(ev, "ATTACHMENT")}
          >
            <span className="icon-sm trl icon-archive"></span>
            <span>Archive</span>
          </button>
        </div>
      </div>
    </div>
  );
};
