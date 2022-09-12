import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { onEditBoard } from "../../store/actions/board.actions";
import { closePopover, openPopover } from "../../store/actions/app.actions.js";

export const ListCardQuickEditBtns = ({ currCard, currList, board }) => {
  const dispatch = useDispatch();
  const [btnMenuRight] = useState(true);

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

  const closeAllPopovers = () => {
    dispatch(closePopover());
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

  return (
    <section
      className={`quick-card-editor-buttons ${
        btnMenuRight
          ? "quick-card-editor-buttons-right"
          : "quick-card-editor-buttons-left"
      } fade-in`}
    >
      <Link
        to={`/board/${board._id}/${currList.id}/${currCard.id}`}
        onClick={closeAllPopovers}
      >
        <button className="btn btn-sub btn-quick-edit">
          <span className="icon-sm trl icon-card"></span>
          <span>Open card</span>
        </button>
      </Link>

      <button
        className="btn btn-sub btn-quick-edit"
        // onClick={(ev) => onOpenPopover(ev, "MEMBERS")}
      >
        <span className="icon-sm trl icon-label"></span>
        <span>Edit labels</span>
      </button>

      <button
        className="btn btn-sub btn-quick-edit"
        onClick={(ev) => onOpenPopover(ev, "MEMBERS")}
      >
        <span className="icon-sm trl icon-member"></span>
        <span>Change members</span>
      </button>

      <button
        className="btn btn-sub btn-quick-edit"
        // onClick={(ev) => onOpenPopover(ev, "MEMBERS")}
      >
        <span className="icon-sm trl icon-card-cover"></span>
        <span>Change cover</span>
      </button>

      <button
        className="btn btn-sub btn-quick-edit"
        // onClick={(ev) => onOpenPopover(ev, "MEMBERS")}
      >
        <span className="icon-sm trl icon-move"></span>
        <span>Move</span>
      </button>

      <button
        className="btn btn-sub btn-quick-edit"
        // onClick={(ev) => onOpenPopover(ev, "MEMBERS")}
      >
        <span className="icon-sm trl icon-copy"></span>
        <span>Copy</span>
      </button>

      <button
        className="btn btn-sub btn-quick-edit"
        // onClick={(ev) => onOpenPopover(ev, "MEMBERS")}
      >
        <span className="icon-sm trl icon-clock"></span>
        <span>Edit dates</span>
      </button>

      <button
        className="btn btn-sub btn-quick-edit"
        // onClick={(ev) => onOpenPopover(ev, "MEMBERS")}
      >
        <span className="icon-sm trl icon-archive"></span>
        <span>Archive</span>
      </button>
    </section>
  );
};
