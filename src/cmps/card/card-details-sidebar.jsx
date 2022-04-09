import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";

import { userService } from "../../services/user.service";
import { boardService } from "../../services/board.service";
import { onEditBoard } from "../../store/actions/board.actions";
import { openPopover } from "../../store/actions/app.actions";
import { closePopover } from "../../store/actions/app.actions";

export const CardDetailsSideBar = ({ currCard, currList, board }) => {
  const dispatch = useDispatch();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isCardArchived, setIsCardArchived] = useState(false);

  useEffect(() => {
    const user = userService.getLoggedinUser();
    setLoggedInUser(user);
  }, []);

  useEffect(() => {
    if (currCard.archiveData)
      setIsCardArchived(currCard.archiveData.isArchived);
  }, [currCard]);

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

  const onOpenPopover = (ev, popoverName, mod = null) => {
    const elPos = ev.target.getBoundingClientRect();
    let popoverProps = {};
    if (popoverName === "DELETE-CARD") {
      popoverProps = {
        board,
        currCard,
        onDeleteCard,
      };
    } else {
      popoverProps = { board, currCard, mod };
    }
    dispatch(openPopover(popoverName, elPos, popoverProps));
  };

  const toggleArchiveCard = () => {
    const updatedCard = { ...currCard };
    updatedCard.archiveData.isArchived = !updatedCard.archiveData.isArchived;
    if (updatedCard.archiveData.isArchived) {
      updatedCard.archiveData.sourceBoardId = board._id;
      updatedCard.archiveData.sourceBoardId = currList.id;
    }
    const updatedBoard = boardService.updateCardInBoard(board, updatedCard);
    dispatch(onEditBoard(updatedBoard));
  };

  const onDeleteCard = async () => {
    const updatedCard = { ...currCard };
    const clonedBoard = await _.cloneDeep(board);
    clonedBoard.lists.forEach((list) => {
      list.cards.forEach((card, idx) => {
        if (card.id === updatedCard.id) list.cards.splice(idx, 1);
      });
    });
    dispatch(onEditBoard(clonedBoard));
    dispatch(closePopover());
  };

  if (!currCard || !loggedInUser) return <div></div>;
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

          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "COVER")}
          >
            <span className="icon-sm trl icon-card-cover"></span>
            <span>Cover</span>
          </button>
        </div>
      </div>

      <div className="card-actions">
        <h3 className="no-top-margin">Actions</h3>

        <div>
          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "MOVE", "move")}
          >
            <span className="icon-sm trl icon-move"></span>
            <span>Move</span>
          </button>

          <button
            className="btn btn-sub btn-sidebar"
            onClick={(ev) => onOpenPopover(ev, "MOVE", "copy")}
          >
            <span className="icon-sm trl icon-copy"></span>
            <span>Copy</span>
          </button>

          <hr />

          {!isCardArchived && (
            <button
              className="btn btn-sub btn-sidebar"
              onClick={toggleArchiveCard}
              // onClick={(ev) => onOpenPopover(ev, "ATTACHMENT")}
            >
              <span className="icon-sm trl icon-archive"></span>
              <span>Archive</span>
            </button>
          )}

          {isCardArchived && (
            <button
              className="btn btn-sub btn-sidebar"
              onClick={toggleArchiveCard}
            >
              <span className="icon-sm trl icon-refresh"></span>
              <span>Send to board</span>
            </button>
          )}

          {isCardArchived && (
            <button
              className="btn btn-danger btn-sidebar"
              onClick={(ev) => onOpenPopover(ev, "DELETE-CARD")}
            >
              <span className="icon-sm trl icon-remove"></span>
              <span>Delete</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
